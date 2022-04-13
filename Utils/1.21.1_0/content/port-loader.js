(() => {
  window.URL_BASE = chrome.runtime.getURL('');
  const MSG_INIT = 1;
  const MSG_EVENT = 2;
  const MSG_REQUEST = 3;
  const MSG_RESPONSE = 4;
  const MSG_LOG = 5;

  const loading = {};
  const isRoot = top == window;

  const attrs = {
    id: ''+(Math.random() * 10000000)|0,
    root: isRoot,
    // these are saved on port, can be used by selectors
    title: document.title,
    uri: location.href,
  };


  let port;

  // console.log('PORT:LOADER:new', attrs, attrs.uri);

  connect();

  function connect() {
    // console.log('PORT:LOADER:loader:connect', attrs.uri);
    port = chrome.runtime.connect({
      // `name` is mapped to specific port class in background
      name: 'loader:' + JSON.stringify(attrs),
    });

    port.onMessage.addListener(onPortMessage);
    port.onDisconnect.addListener(onPortDisconnect);
  }

  function loadScript(path) {
    return loading[path] || (loading[path] = new Promise((resolve, reject) => {
      // console.log('loadScript: QUEUE: ', location.host, path);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', path);

      xhr.onerror = function(e) {
        console.error('xhr error', e);
        reject(Error('failed to load ' + path));
      };

      xhr.onload = function(e) {
        // console.log('loadScript: EVAL ', location.host, path);
        try {
          eval.call(window, xhr.responseText);
          resolve();
        } catch (e) {
          console.error('Error loading script: ', path, e);
          reject(e);
        }
      };

      xhr.send();
    }));
  }

  function onInit({scripts, mods}) {
    // console.log('LOADER:onInit:', attrs.uri);

    if (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded', onLoad, false);
    } else {
      onLoad();
    }

    async function onLoad() {
      // console.log('LOADER:DOMContentLoaded:', attrs.uri);
      document.removeEventListener('DOMContentLoaded', onLoad, false);
      let deps = [
        `${URL_BASE}ui/lib/underscore.js`,
        `${URL_BASE}content/content.js`,
      ];
      for(let src of deps) {
        await loadScript(src);
      }
      require(mods, () => {
        // console.log('LOADER:loaded mods:', mods);
        sendEvent('init', { title: document.title });
      }, (e) => {
        // fatal error
        console.error('LOADER:error loading mods:', mods, e);
        sendEvent('init:error', { message: e.message });
        port.disconnect(); // let background disconnect?
      });
    }
  }

  function onPortDisconnect() {
    // console.log('PORT:LOADER:disconnect', attrs.uri);
    port.onMessage.removeListener(onPortMessage);
    port.onDisconnect.removeListener(onPortDisconnect);
  }

  function onPortMessage(msg) {
    // console.log('-> PORT:LOADER:message', msg, attrs.uri);

    switch (msg.type) {

      case MSG_INIT:
        onInit(msg);
        break;

      default:
        sendMsgFromPortToContent(msg);
        break;
    }
  }

  function sendEvent(type, event) {
    port.postMessage({
      type: MSG_EVENT,
      data: {event, type},
    });
  }

  // content -> port
  function sendMsgFromContentToPort(msg) {
    // console.log('<- PORT:LOADER:sendMsgFromContentToPort', msg);
    port.postMessage(msg);
  }

  // port -> content
  function sendMsgFromPortToContent(msg) {
    // console.log('-> PORT:LOADER:sendMsgFromPortToContent', msg, attrs.uri);
    if(window.onMsgFromPortToContent) {
      window.onMsgFromPortToContent(msg);
    } else {
      throw new Error('no message handler defined by content');
    }
  }

  window.sendMsgFromContentToPort = sendMsgFromContentToPort;
  window.loadScript = loadScript;
})();
