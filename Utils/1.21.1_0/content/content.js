
/*
NOTE: Do not edit. This is an auto-generated file. All changes will be lost!
*/

(function(scope) {

if(window.__LOADED) return;
else window.__LOADED = true;
;
// console.log('content-2-require');
(function(scope) {
  const options = {baseUrl: '', paths: {}, shim: {}};
  const loaded = {};
  const cached = {};

  const define = function(name, deps, defn) {
    if (arguments.length == 2) {
      defn = deps;
      deps = [];
    }
    // Register module for name
    loaded[name] = [defn, deps||[]];
  };

  const require = async function(deps, callback, errorCallback) {
    let promise = Promise.all(deps.map(load)).then(function(mods) {
      callback.apply(scope, mods);
    }).catch(function(e) {
      console.error(`Error require(${deps})`, e);
      if(errorCallback) {
        errorCallback(e);
      } else {
        throw e;
      }
    });
    await promise;
  };

  require.config = function config(_options) {
    Object.keys(_options).forEach(function(key) {
      options[key] = _options[key];
    });
  }

  // `name` can be 
  // 1. module name in content folder like 'locator'
  // 2. path in extension 'ui/lib/underscore.js'
  async function load(name) {
    const {baseUrl, shim, paths} = options;

    let path = paths[name] /*alias*/ || ('content/' + name);

    const noProtocol = !path.match(/\w:/);
    if(noProtocol) {
      path = baseUrl + path;
    }

    if (!path.match(/\.js$/)) {
      path = path + '.js';
    }

    // console.log('load:', path);
    if (!loaded[name]) {
      await loadScript(path);
    }
    // console.log('loaded:', path);

    if (loaded[name]) {
      return await loadDefn(name);
    } else {
      let modShim = shim[name];
      if(modShim) {
        if (!modShim.exports) {
          throw new Error(`Did not find shim[${name}].exports`);
        }
        const module = scope[modShim.exports];
        loaded[name] = [module, modShim.deps||[]];
        cached[name] = module;
        return module;
      }
    }
  }

  async function loadDefn(name) {
    let mod = cached[name];

    if (mod) {
      return mod;
    }

    const data = loaded[name];
    const [fn, deps] = data;

    // console.log('loadDefn', {name, fn, deps, mod});

    let depMods = await Promise.all(deps.map(load));

    mod = cached[name];
    if (mod) {
      return mod;
    } else {
      mod = fn.apply(scope, depMods);
      cached[name] = mod;
      return mod;
    }
  }

  require.config({
    baseUrl: URL_BASE,
    paths: {
      'async':      'ui/lib/async.js',
      'backbone':   'ui/lib/backbone.js',
      'domo':       'ui/lib/domo.js',
      'jquery':     'ui/lib/jquery.js',
      'underscore': 'ui/lib/underscore.js',
    },

    shim: {
      'async': { exports: 'async' },
      backbone: { exports: 'Backbone' },
      domo: { exports: 'domo' },
      jquery: { exports: 'jQuery' },
      underscore: { exports: '_' },
    },
  });

  Object.defineProperty(scope, 'define', { get: () => define });

  Object.defineProperty(scope, 'require', { get: () => require });

})(this);
;
define('id', [], function() {
  let x = 0;
  return () => x += 1;
});

define('api', ['id'], function(ID) {
  const MSG_INIT = 1;
  const MSG_EVENT = 2;
  const MSG_REQUEST = 3;
  const MSG_RESPONSE = 4;
  const MSG_LOG = 5;

  window.onMsgFromPortToContent = onMsgFromPortToContent;

  // Handle message from extension.
  function onMsgFromPortToContent(msg) {
    if (msg.type == MSG_REQUEST) {
      // console.log('CONTENT: request:', msg._id, msg.path, msg);
      handleRequest(msg._id, _.pick(msg, 'path', 'data'));
    } else if (msg.type == MSG_EVENT) {
      // console.log('CONTENT: event:', msg);
    } else {
      console.error('CONTENT: Unhandled message:', msg);
    }
  }

  function postToExtn(msg) {
    sendMsgFromContentToPort(msg);
  }

  const error = function error(e) {
    // DBG && console.error('content error:', e, e.stack);
    return e.message ? (e.message + (e.stack ? ' ' + e.stack : '' )) : e + '';
  };

  const trigger = function trigger(event) {
    postToExtn({
      type: MSG_EVENT,
      data: event,
    });
    // TODO Post event to local event listeners.
  };

  /*
   * Need of this function arises due to rogue version of JSON included in host
   * pages.
   */
  function stringify(o) {
    const toJSON = Array.prototype.toJSON;

    delete Array.prototype.toJSON;

    const val = JSON.stringify(o);

    toJSON && (Array.prototype.toJSON = toJSON);

    return val;
  }

  function removeTags(name) {
    const embeds = Array.prototype.slice.call(
      document.getElementsByTagName(name), 0);
    embeds.forEach(function(el) {
      el.parentNode.removeChild(el);
    });
  }

  if (document.readyState == 'complete' || document.readyState == 'loaded') {
    documentOnReady();
  } else {
    document.addEventListener('DOMContentLoaded', documentOnReady, false);
  }

  function documentOnReady() {
    // We clean up the document before we prepare it for interaction.
    // XXX This may be a surprise for the end user.
    document.removeEventListener('DOMContentLoaded', documentOnReady, false);
    removeTags('embed');
  }

  function handleRequest(_id, msg) {
    // DBG && console.log('handleRequest:' + msg);

    const options = _.isString(msg) ? JSON.parse(msg) : msg;

    setTimeout(function() {
      callApi(options, callback);
    }, 0);

    function callback(err, data) {
      if (err) {
        // console.error("handleRequest failed:" + _id + " " + error(err) + ", for:" + msg);
        // Convert error to string
        if (typeof err == 'string') {
          err = {message: err};
        } else if (err instanceof Error) {
          err = {message: err.message, stack: err.stack};
        } else if (!err.code) {
          try {
            err = {message: stringify(err)};
          } catch (e) {
            err = {message: 'unknown error response received'};
          }
        }
        err.source = location.href;
      }

      // DBG && console.log('handleRequest: response:' + _id + " " + options.path + " " + stringify(data));

      // Send response back
      postToExtn({
        type: MSG_RESPONSE,
        _id,
        err,
        data,
      });
    }
  }

  function callApi({path, data}, callback = () => {}) {
    try {
      const api = Api[path] || Api.none(path);
      api(data, callback);
    } catch (e) {
      console.error("API: unhandled exception: ", path, e);
      callback(error(e));
    }
  }

  window.addEventListener('message', onWindowMessage, true);

  Object.defineProperty(window, 'handleRequest', { get: () => handleRequest });

  let Api = {
    eval: evalScript,
    none: function(path) {
      return function none(input, callback) {
        callback({code: 'E_API', message: 'API not found:' + path} );
      }
    },
    require: function(modules, sendResponse) {
      require(modules, function() { sendResponse() }, sendResponse);
    },
    MSG_EVENT,
    MSG_REQUEST,
    MSG_RESPONSE,
    MSG_LOG,
  };

  // Support for inter-frame communication.
  const requestHandlers = {};
  const responseHandlers = {};
  const LISTENERS = {};


  function notifyListeners(name, data) {
    const listeners = LISTENERS[name];
    listeners && listeners.forEach(function(l) {
      l(data);
    });
  }

  // Receves message from another frame.
  function onWindowMessage(event) {
    const data = event.data;
    const type = data.brwsr_type;
    // We identify out messages using name brwsr_type.
    const id = data.id;
    const path = data.path;
    const source = event.source;

    // console.log('window.onmessage:'+type+':'+id+':'+path);

    if (type == Api.MSG_REQUEST) {
      // console.log('request:' + JSON.stringify(data));

      // Call request handler
      // We allow limited set of API access to callers from other windows.
      var handler = requestHandlers[path];
      if (handler) {
        handler(event, function(err, data) {
          // console.log('requestHandler:response:', err, data);
          source.postMessage({
            brwsr_type: Api.MSG_RESPONSE,
            id: id,
            err: err,
            data: data,
          }, '*');
        });
      } else {
        // TODO Emit log event for storage in errors table.
        // console.log('WARN! Unhandled request:' + stringify(event.data), event);
      }
    } else if (type == Api.MSG_RESPONSE) {
      // console.log('response:' + JSON.stringify(data));
      var handler = responseHandlers[id];
      if (handler) {
        delete responseHandlers[id];
        handler(event.data.err, event.data.data);
      } else {
        // TODO Emit log event
        // console.log('WARN! Unhandled response:' + stringify(event.data));
      }
    } else if (type == Api.MSG_EVENT) {
      // TODO Notify event listeners. Let modules register themselves as
      // event listeners.
      // console.log('WARN: TODO: Propagate event');
      notifyListeners(data.type, data.data);
    } else if (type != undefined) {
      // console.error('ERR: Unknow message type:'+type);
    }
  }

  // Sends event to another frame.
  function sendEvent(win, type, data) {
    // DBG && console.log('sendEvent:', stringify(data));
    win.postMessage({
      brwsr_type: Api.MSG_EVENT,
      type,
      data,
    });
  }

  // Sends request to another frame.
  function sendRequest(win, path, data, callback) {
    // DBG && console.log('sendRequest:' + path + ':' + stringify(data));

    const id = ID();
    responseHandlers[id] = callback;
    win.postMessage({
      brwsr_type: Api.MSG_REQUEST,
      id,
      path,
      data,
    }, '*');
    // DBG && console.log('sendRequest: done');
  }

  function syncToAsync(fn) {
    return function(input, callback) {
      const result = fn.call(this, input);
      callback(void 0, result);
    };
  }

  function evalScript(script, sendResponse) {
    let alert; let confirm; let prompt;
    // console.log('evalScript:', script);
    eval(script);
  }

  return {
  // Namespace is used when creating identifiable attributes in public context.
    NS: 'xbrwsr_',
    call: callApi,
    callAsync: function(options) {
      return new Promise((resolve, reject) => {
        callApi(options, (err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    extend: function(extensions) {
      _.extend(Api, extensions);
    // console.log("APIs:" + stringify(Object.keys(Api)) + ':' + location.href);
    },
    syncToAsync,
    /**
   * Triggers an event. `event` object should specify event type and data
   */
    trigger: function(event) {
      trigger(event);
    },

    // Internal functions used for inter-frame/window communications.
    sendEvent,
    sendRequest,

    // Event listeners for messages from other frames
    // TODO Rename to addFrameMessageListener
    addEventListener: function(name, listener) {
      (LISTENERS[name] || (LISTENERS[name] = [])).push(listener);
    },
    addRequestHandler: function(path, handler) {
    // Allow overrides?
      requestHandlers[path] = handler;
    },
  };
});
;
define('util', ['api'], function(Api) {
  Api.addRequestHandler('frame/offset', function(event, callback) {
    const el = findWindowsFrame(event.source);
    if (!el) {
      callback('iframe element not found');
    } else {
      getOffsetFromScreen(el, callback);
    } // else somebody else's request or message
  });

  Api.extend({
    createEl: Api.syncToAsync(createEl),
    showEl: Api.syncToAsync(showEl),
    showMsg: Api.syncToAsync(showMsg),
  });

  function createEl(config) {
    const el = document.createElement(config.name);
    _.each(config.attrs, function(value, name) {
      el.setAttribute(name, value);
    });
    _.each(config.style, function(value, name) {
      el.style[name] = value;
    });
    _.each(config.children, function(child) {
      if (_.isString(child)) {
        el.appendChild(document.createTextNode(child));
      } else if (_.isObject(child)) {
        el.appendChild(createEl(child));
      }
    });
    el.className += ' ' + Api.NS;
    return el;
  }

  function removeEl(el) {
    el && el.parentElement && el.parentElement.removeChild(el);
  }

  function showEl(input) {
    const el = createEl(input.el);
    const oldEl = el.id && document.getElementById(el.id);

    removeEl(oldEl);

    (document.querySelectorAll(Api.NS+'ui')[0] || document.body || document.documentElement).appendChild(el);
    if (input.hideAfter) {
      setTimeout(function() {
        removeEl(el);
      }, input.hideAfter);
    }
    return el;
  }

  function showMsg(input) {
    showEl({
      hideAfter: 6000,
      el: {
        name: 'div',
        style: {
          'position': 'fixed',
          'top': '20px',
          'text-align': 'center',
          'textAlign': 'center',
          'width': '100%',
          'z-index': 10000000000,
        },
        attrs: {
          id: Api.NS + 'msg',
        },
        children: [{
          name: 'span',
          style: {
            'background-color': '#ff6',
            'backgroundColor': '#ff6',
            'border': 'solid 1px #666',
            'box-shadow': '2px 2px 2px rgba(0, 0, 0, .2)',
            'padding': '6px 12px',
          },
          children: [input.msg],
        }],
      },
    });
  }

  function findWindowsFrame(aWindow) {
    const frames = document.querySelectorAll('iframe,frame'); var frame;
    for (var i = 0, frame; i < frames.length; i += 1) {
      frame = frames[i];
      if (frame.contentWindow == aWindow) {
        return frame;
      }
    }
  }

  function getWindowOffset(callback) {
    if (window == window.top) {
      callback(null, {top: 0, left: 0});
    } else {
      Api.sendRequest(parent, 'frame/offset', null, function(err, offset) {
        err && console.error('ERR! getWindowOffset:' + err);
        callback(err, offset);
      });
    }
  }

  /**
 * Returns offset from screen measured in CSS pixels.
 */
  function getOffsetFromScreen(el, callback) {
    const
      offset = _.clone(el.getBoundingClientRect());
    delete offset.toJSON;

    offset.top += window.pageYOffset;
    offset.left += window.pageXOffset;

    getWindowOffset(function(err, ref) {
      err && console.error('ERR! getOffsetFromScreen:' + err);
      offset.top += ref.top;
      offset.left += ref.left;
      callback(err, offset);
    });
  }

  return {
    getOffsetFromScreen,
    getWindowOffset,
  };
});
;
require(['jquery', 'util', 'api'], function($, util, Api) {
  let el;

  $(document).on('focus', '*', function(e) {
    el = e.target;
    debouncedOnSetFocus();
  }).on('blur', '*', function(e) {
    el = null;
    debouncedOnSetFocus();
  });

  $(window).on('resize scroll', _.debounce(function(e) {
    debouncedOnSetFocus();
  }));

  let debouncedOnSetFocus = _.debounce(onSetFocus, 200);

  function onSetFocus() {
    if (el) {
      util.getOffsetFromScreen(el, function(err, offset) {
        Api.trigger({
          type: 'focus',
          event: _.extend(elInfo(el), {offset: offset}),
        });
      });
    } else {
      Api.trigger({type: 'blur'});
    }
  }

  function elInfo(el) {
    return {
      nodeName: el.nodeName,
      attributes: _.map(el.attributes, function(attr) {
        return {name: attr.name, value: attr.value};
      }),
    };
  }

  Api.extend({
    dom_setFocusNodeValue: function(input, callback) {
      if (!el) {
        callback('err:dom:el_not_found');
      } else {
        el.value = input.value;
        callback();
      }
    },
  });
});


})(this)