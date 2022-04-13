// include locator so that they are loaded for dom ops
define('live', ['async', 'api', 'locator'], function(async, Api, Locator) {
  let lastResult;

  const observer = new MutationObserver(function(mutations) {
    check();
  });

  const observerConfig = {
    attributes: true,
    attributeFilter: ['class', 'id', 'name', 'value', 'src', 'href'],
    childList: true,
    characterData: true,
    subtree: true,
  };

  let options = {};

  async function check() {
    // console.log('LIVE: check');
    // Remove all mutation observers before starting a check
    observer.disconnect();

    try {
      await Api.callAsync({ path: 'filterHTML', data: options, });
      let text = await Api.callAsync({path: 'getText'});
      let data = await Api.callAsync({path: 'getHTML'});

      if (text.length > 0) {
        if (!lastResult || lastResult.text != text) {
          // console.log('LIVE: send result', {text, data});
          Api.trigger({
            type: 'live:result',
            event: {
              result: {text, data}
            }
          });
          lastResult = {text, data};
        }
      }
    } catch(err) {
      console.error('LIVE: error checking:', err);
      Api.trigger({
        type: 'live:err',
        event: {
          message: err.message || err.msg,
        }
      });
    }

    // console.log('LIVE: done');
    observer.observe(document.body||document.documentElement, observerConfig);
  }

  Api.extend({
    live_init: Api.syncToAsync(function(_options) {
      options = {...options, ..._options};
      check();
    }),
  });
});
