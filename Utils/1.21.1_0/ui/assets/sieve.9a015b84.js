var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a9 as render, I as html } from "./vendor.c17c97a4.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const _$9 = window._;
if (!_$9) {
  throw new Error("ADD _");
}
function Route(options) {
  _$9.extend(this, options, this.parse(options.path));
}
_$9.extend(Route.prototype, {
  match: function(path) {
    const keys = this.keys;
    const params = this.params = {};
    const m = this.regexp.exec(path);
    if (!m)
      return false;
    for (let i = 1, len = m.length; i < len; ++i) {
      const key = keys[i - 1];
      const val = typeof m[i] == "string" ? decode(m[i]) : m[i];
      if (key) {
        params[key.name] = val;
      } else {
        throw new Error("Nameless param not supported, path:" + path);
      }
    }
    return true;
  },
  parse: function(path) {
    const keys = [];
    path = path.concat("").replace(/\/\(/g, "(?:/").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?(\*)?/g, function(_2, slash, format, key, capture, optional, star) {
      keys.push({ name: key, optional: !!optional });
      slash = slash || "";
      return "" + (optional ? "" : slash) + "(?:" + (optional ? slash : "") + (format || "") + (capture || (format && "([^/.]+?)" || "([^/]+?)")) + ")" + (optional || "") + (star ? "(/*)?" : "");
    }).replace(/([\/.])/g, "\\$1").replace(/\*/g, "(.*)");
    return {
      keys,
      regexp: new RegExp("^" + path + "$", "i")
    };
  }
});
function Router(options) {
  this.routes = _$9.map(options.routes, function(routeOptions) {
    return new Route(routeOptions);
  }, this);
}
_$9.extend(Router.prototype, {
  find: function(path) {
    const route = _$9.find(this.routes, function(route2) {
      return route2.match(path);
    });
    return route;
  }
});
function decode(str) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}
var C = {
  TYPE_ERR: 0,
  TYPE_TEXT: 1,
  TYPE_HTML: 2,
  TYPE_JSON: 3,
  TYPE_XML: 4,
  TYPE_FEED: 5,
  TYPE_FORM: 6,
  TYPE_PDF_HTML: 7,
  TYPE_DOC: 8,
  TYPE_JSON: 9,
  TYPE_RULE: 1,
  TYPE_RULE_GROUP: 2,
  OP_AND: 1,
  OP_OR: 2,
  CONTENT_TYPE_TEXT: 1,
  CONTENT_TYPE_CHANGED_TEXT: 2,
  CONTENT_TYPE_OLD_TEXT: 3,
  RULE_NOT_EMPTY: 1,
  RULE_HAS_TEXT: 2,
  RULE_HAS_TEXT_NOT: 3,
  RULE_HAS_NUMBER_LT: 4,
  RULE_HAS_NUMBER_GT: 5,
  RULE_HAS_NUMBER_DECR_MIN: 6,
  RULE_HAS_NUMBER_INCR_MIN: 7,
  RULE_MATCH_REGEX: 8,
  RULE_HAS_NUMBER_DECR_PERCENT_MIN: 9,
  RULE_HAS_NUMBER_INCR_PERCENT_MIN: 10,
  STATE_DEFAULT: 0,
  STATE_NEW: 10,
  STATE_INIT: 20,
  STATE_UNAUTHORIZED: 30,
  STATE_AUTHORIZED: 35,
  STATE_READY: 40,
  STATE_PAUSED: 45,
  STATE_RESTRICTED: 50,
  STATE_DISCARD: 90,
  STATE_DEL: 100,
  STATE_DONE: 100,
  STATE_PLAN_PUBLIC: 0,
  STATE_PLAN_PRIVATE: 70,
  STATE_ATTR_VERIFY: 10,
  STATE_ATTR_VERIFY_INIT: 20,
  STATE_ATTR_VERIFY_WAIT: 30,
  STATE_ATTR_VERIFY_DONE: 40,
  ACTION_EMAIL: 1,
  ACTION_SMS: 2,
  ACTION_PUSH: 3,
  ACTION_MACRO: 4,
  ACTION_WEBHOOK: 5,
  ACTION_SLACK: 6,
  ACTION_DISCORD: 7,
  ACTION_LOCAL_AUDIO: 101,
  ACTION_LOCAL_POPUP: 102,
  ACTION_LOCAL_OPEN_TAB: 103,
  RUN_STATE_INIT: 1,
  RUN_STATE_WAIT: 2,
  RUN_STATE_WIP: 3,
  LOCAL_STATE_SYNCED: 0,
  LOCAL_STATE_POST: 1,
  LOCAL_STATE_PUT: 2,
  LOCAL_STATE_DEL: 3,
  CLIENT_FF: 10,
  CLIENT_CR: 11,
  CLIENT_OP: 12,
  CLIENT_FFWX: 13,
  CLIENT_MSE: 14,
  CLIENT_MAC: 20,
  CLIENT_WEBFF: 50,
  CLIENT_DEDI: 51,
  CLIENT_ANY: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
  CLIENT_WEB: "ffffffff-ffff-ffff-ffff-ffffffffffff",
  SOURCE_SITEMAP: 1,
  TIME_INFINITE: 2592e3,
  NUM_FORMAT_COMMA_DOT: "1,.",
  NUM_FORMAT_DOT_COMMA: "2.,",
  NUM_FORMAT_SPACE_COMMA: "3 ,",
  DS_TYPE_JSON: "json",
  DS_TYPE_SCRAPEX_SCRAPER: "scrapex_scraper",
  DS_TYPE_SCRAPEX_SCRIPT: "scrapex_script",
  DS_TYPE_UPTIME: "uptime",
  DS_ID_JSON: "00000000-0000-0000-0000-000000000001",
  DS_ID_UPTIME: "00000000-0000-0000-0000-000000000002"
};
function ProxyStore(module) {
  const proxy = {
    hasField: function() {
      return false;
    }
  };
  function createProxyMethod(method) {
    return async function() {
      const args = [...arguments];
      const callback = args.pop();
      let brwsr;
      let curBrowser;
      try {
        brwsr = ["browser", "chrome"];
        curBrowser = window[typeof browser == "undefined" ? brwsr[1] : brwsr[0]];
      } catch (e) {
        console.error(e);
      }
      if (typeof browser == "undefined") {
        curBrowser.runtime.sendMessage({
          type: "request",
          module,
          method,
          args
        }, function(response) {
          callback(...response);
        });
      } else {
        const res = await curBrowser.runtime.sendMessage({
          type: "request",
          module,
          method,
          args
        });
        callback(...res);
      }
    };
  }
  ["create", "find", "findOne", "destroy", "update"].forEach((mName) => proxy[mName] = createProxyMethod(mName));
  return proxy;
}
function ProxyModule(module) {
  const proxy = {
    hasField: function() {
      return false;
    }
  };
  function createProxyMethod(method) {
    return async function() {
      const args = [...arguments];
      let brwsr;
      let curBrowser;
      try {
        brwsr = ["browser", "chrome"];
        curBrowser = window[typeof browser == "undefined" ? brwsr[1] : brwsr[0]];
      } catch (e) {
        console.error(e);
      }
      if (typeof browser == "undefined") {
        curBrowser.runtime.sendMessage({
          type: "request",
          module,
          method,
          args
        }, function(response) {
          return response;
        });
      } else {
        const res = await curBrowser.runtime.sendMessage({
          type: "request",
          module,
          method,
          args
        });
        return res;
      }
    };
  }
  if (module === "auth") {
    proxy["getId"] = createProxyMethod("getId");
  } else if (module === "Prefs") {
    ["get"].forEach((mName) => proxy[mName] = createProxyMethod(mName));
  } else if (module === "CFG") {
    ["CLIENT", "VERSION"].forEach((mName) => proxy[mName] = createProxyMethod(mName));
  }
  return proxy;
}
const Backbone$8 = window.Backbone;
if (!Backbone$8) {
  throw new Error("ADD Backbone");
}
let service;
try {
  service = window.service = chrome.extension.getBackgroundPage();
} catch (e) {
  service = {
    store: new Proxy({}, {
      get: (obj, prop) => ProxyStore(prop)
    }),
    proxy: new Proxy({}, {
      get: (obj, prop) => ProxyModule(prop)
    }),
    gEvents: Backbone$8,
    Supports: {
      tabForXFrame: true
    }
  };
}
var Service = service;
const qs = window.qs;
if (!qs) {
  throw new Error("ADD qs");
}
const $$5 = window.jQuery;
if (!$$5) {
  throw new Error("ADD jQuery");
}
const _$8 = window._;
if (!_$8) {
  throw new Error("ADD _");
}
const async$1 = window.async;
if (!async$1) {
  throw new Error("ADD async");
}
const Backbone$7 = window.Backbone;
if (!Backbone$7) {
  throw new Error("ADD Backbone");
}
const methodMap = {
  "create": "POST",
  "update": "PUT",
  "patch": "PATCH",
  "delete": "DELETE",
  "read": "GET"
};
let IID_USER = null;
let iid = IID_USER;
const Api = _$8.extend({
  api: promisifyOrCallback(api),
  batch,
  init: init$1,
  setIdentityId
}, Backbone$7.Events);
const router = new Router({
  routes: [{
    list: true,
    path: "/clients",
    store: Service.store.ClientStore
  }, {
    path: "/clients/:id",
    store: Service.store.ClientStore
  }, {
    list: true,
    path: "/sieves",
    store: Service.store.SieveStore
  }, {
    path: "/sieves/:id",
    store: Service.store.SieveStore
  }, {
    list: true,
    path: "/sieves/:sieve_id/actions",
    store: Service.store.ActionStore
  }, {
    path: "/sieves/:sieve_id/actions/:id",
    store: Service.store.ActionStore
  }, {
    list: true,
    path: "/sieves/:sieve_id/data",
    store: Service.store.SieveDataProxy
  }, {
    path: "/sieves/:sieve_id/data/:id",
    store: Service.store.SieveDataStore
  }, {
    list: true,
    path: "/sieves/:key/works/local",
    store: Service.store.WorkStore
  }, {
    list: true,
    path: "/rules",
    store: Service.store.RuleStore
  }, {
    path: "/rules/:id",
    store: Service.store.RuleStore
  }, {
    list: true,
    path: "/tags",
    store: Service.store.TagStore
  }, {
    list: true,
    path: "/tags/:id",
    store: Service.store.TagStore
  }, {
    list: true,
    path: "/users/attrs",
    store: Service.store.AttrStore
  }, {
    path: "/users/attrs/:id",
    store: Service.store.AttrStore
  }]
});
function api(url, method, json, callback) {
  if (typeof method == "function") {
    callback = method;
    json = null;
    method = "GET";
  } else if (typeof json == "function") {
    callback = json;
    if (_$8.isObject(method)) {
      json = method;
      method = "GET";
    } else {
      json = null;
    }
  }
  var json = json || {};
  var method = methodMap[method] || method || "GET";
  delete json._state;
  if (iid !== IID_USER) {
    return Service._api({
      url,
      method,
      json,
      headers: { "x-identity": iid }
    }, callback);
  }
  const route = router.find(url);
  if (route) {
    return handleStoreQuery(route, method, json, callback);
  } else {
    return Service.api(url, method, json, callback);
  }
}
function promisifyOrCallback(fn) {
  return function(...args) {
    if (typeof args[args.length - 1] != "function") {
      return new Promise((resolve, reject) => {
        fn(...args, function(err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    } else {
      fn(...args);
    }
  };
}
function batch(requests, callback) {
  async$1.mapSeries(requests, function(request, callback2) {
    api(request.url, request.method, request.body, function(err, res) {
      if (err)
        console.error("Error handling request:", request);
      callback2(err, res);
    });
  }, callback);
}
function handleStoreQuery(route, method, json, _callback) {
  const path = route.path;
  const store = route.store;
  const hasUserId = store.hasField("user_id");
  const user_id = window.USER ? USER.id : Service.auth.getId();
  const callback = function(err, result) {
    if (err) {
      console.error("API:err", path, method, err);
    } else {
      if (method != "GET") {
        Service.service.syncStore(store);
      }
    }
    result && (result = JSON.parse(JSON.stringify(result)));
    _callback(err, result);
  };
  switch (method) {
    case "DELETE":
      store.update(route.params, {
        state: C.STATE_DEL,
        _state: C.LOCAL_STATE_DEL
      }, callback);
      break;
    case "GET":
      var query = route.params;
      if (hasUserId) {
        query.$and = {
          $or: [
            ["user_id", user_id],
            ["user_id", null]
          ]
        };
      }
      if (route.list) {
        const opts = json._opt;
        query = _$8.extend(_$8.omit(json, "_opt"), query);
        store.find(query, opts, callback);
      } else {
        store.findOne(query, callback);
      }
      break;
    case "PATCH":
    case "PUT":
      var query = route.params;
      var doc = json;
      store.update(query, doc, callback);
      break;
    case "POST":
      var doc = _$8.extend(json, route.params);
      store.create(doc, callback);
      break;
    default:
      callback({
        msg: "API: Unknown method:" + method
      });
  }
}
function init$1() {
}
function setIdentityId(_iid) {
  iid = _iid || IID_USER;
}
var common = "";
var tachyons = "";
const $$4 = window.jQuery;
if (!$$4) {
  throw new Error("ADD jQuery");
}
const _$7 = window._;
if (!_$7) {
  throw new Error("ADD _");
}
const Backbone$6 = window.Backbone;
if (!Backbone$6) {
  throw new Error("ADD Backbone");
}
const Acts = function() {
  let actions = null;
  let view = null;
  function act(name, param, originalTarget) {
    const action = actions && actions[name];
    if (!action) {
      console.error("action not found:" + name);
      return false;
    }
    const context = action.context;
    let fn = action.fn;
    if (_$7.isString(fn)) {
      fn = context[fn];
    }
    if (!fn) {
      return console.error("Function not found: " + action.fn);
    }
    return fn.call(context, param, originalTarget);
  }
  function updateActions() {
    actions = view.getActions();
  }
  return {
    act,
    setActions: function(_actions) {
      actions = _actions;
    },
    setView(_view) {
      if (view) {
        view.off("child:add child:on", updateActions);
      }
      view = _view;
      view.on("child:add child:on", updateActions);
    }
  };
}();
$$4(document).delegate("[data-action]", {
  click: function(event) {
    if (event.actDone)
      return;
    const target = event.currentTarget;
    const name = target.dataset.action;
    let param = target.dataset.actionParam || "";
    if (name == "void 0") {
      event.actDone = true;
      return;
    }
    if (param.charAt(0) == "@") {
      param = $$4(target).attr(param.slice(1));
    } else if (param.charAt(0) == "$") {
      param = param.slice(1);
      const indexSpace = param.indexOf(" ");
      const fn = param.slice(0, indexSpace);
      const path = param.slice(indexSpace + 1);
      const lioAt = path.lastIndexOf("@");
      const el = path.slice(0, lioAt);
      param = $$4(target)[fn](el).attr(path.slice(lioAt + 1));
    }
    if (Acts.act(name, param, target) !== false) {
      event.preventDefault();
      event.actDone = true;
    }
  }
});
Backbone$6.Model.prototype.eget = function(name, v) {
  v = this.get(name);
  return v ? _$7.escape(v) : v;
};
if (typeof console == "undefined") {
  window.console = {
    error: function() {
      alert("unexpected error:" + _$7.toArray(arguments).join(":"));
    },
    log: function() {
    },
    warn: function() {
    }
  };
}
var Core = {
  Acts,
  ID: function(x) {
    return function() {
      return x += 1;
    };
  }(1)
};
const _$6 = window._;
if (!_$6) {
  throw new Error("ADD _");
}
const Jed = window.Jed;
if (!Jed) {
  throw new Error("ADD Jed");
}
let jed;
init(window.LANG);
function init(LANG) {
  jed = new Jed({
    locale_data: {
      messages: _$6.extend({
        "": {
          domain: "messages",
          lang: "en",
          plural_forms: "nplurals=2; plural=(n != 1);"
        }
      }, _$6.reduce(LANG, function(memo, value, key) {
        memo[key] = [null, value];
        return memo;
      }, {}))
    },
    missing_key_callback: function(key) {
    },
    domain: "messages"
  });
}
var i18n = {
  init,
  gettext(...args) {
    return jed.gettext(...args);
  },
  sprintf(...args) {
    return jed.sprintf(...args);
  },
  translate(...args) {
    return jed.translate(...args);
  }
};
const domo$3 = window.domo;
if (!domo$3) {
  throw new Error("ADD domo");
}
const $$3 = window.jQuery;
if (!$$3) {
  throw new Error("ADD jQuery");
}
const _$5 = window._;
if (!_$5) {
  throw new Error("ADD _");
}
const Backbone$5 = window.Backbone;
if (!Backbone$5) {
  throw new Error("ADD Backbone");
}
let Msg = Backbone$5.View.extend({
  events: {
    "click a": "onClick"
  },
  addActions: function($container, actions) {
    if (!_$5.isArray(actions))
      actions = [actions];
    this.actions = actions;
    _$5.each(actions, function(action, index) {
      $container.append("&nbsp;").append(domo$3.A({
        "class": "xaction",
        "data-index": index,
        "href": "#"
      }, i18n.gettext(action.name)));
    }, this);
  },
  error: function(msg, action) {
    const key = msg.msg || msg;
    this.$info.text("").hide();
    this.$error.html(i18n.gettext(key));
    this.$error.show();
    action && this.addActions(this.$error, action);
  },
  findAction: function(el) {
    const index = parseInt(el.getAttribute("data-index"));
    if (!isNaN(index)) {
      return this.actions && this.actions[index];
    }
  },
  info: function(msg, action) {
    const key = msg.msg || msg;
    this.$error.text("").hide();
    this.$info.html(i18n.gettext(key));
    this.$info.show();
    action && this.addActions(this.$info, action);
  },
  onClick: function(e) {
    const action = this.findAction(e.currentTarget);
    if (action) {
      action.callback(action);
    } else {
      DBG && console.warn("unhandled action click");
    }
  },
  bind: function(el) {
    this.el = el;
    this.$el = $$3(el);
    this.$error = this.$el.find(".xerror");
    this.$info = this.$el.find(".xmsg");
    this.reset();
  },
  reset() {
    this.$error.empty().hide();
    this.$info.empty().hide();
  },
  setMsg: function(options) {
    options || (options = {});
    if (_$5.isString(options)) {
      options = { info: options };
    }
    if (options.error) {
      this.error(options.error);
    } else if (options.info) {
      this.info(options.info);
    }
  },
  start: function(name, options) {
    this.setMsg(options);
  },
  stop: function(name, options) {
    this.$info.empty().hide();
    this.setMsg(options);
  }
});
Msg = window.Msg = new Msg();
var Msg$1 = Msg;
const _$4 = window._;
if (!_$4) {
  throw new Error("ADD _");
}
const Backbone$4 = window.Backbone;
if (!Backbone$4) {
  throw new Error("ADD Backbone");
}
function sync(method, model, options) {
  if (!Api.api) {
    Api.on("init", function() {
      sync(method, model, options);
    });
    return;
  }
  const url = _$4.result(model, "url") || urlError();
  let data = options.data;
  if (data == null && model && (method === "create" || method === "update" || method === "patch")) {
    data = options.attrs || model.toJSON(options);
  }
  const xhr = options.xhr = Api.api(url, method, data, function(err, data2) {
    if (err) {
      options.error && options.error(__spreadProps(__spreadValues({}, err), { data: data2 }));
    } else {
      options.success && options.success(data2);
    }
  });
  model.trigger("request", model, xhr, options);
  return xhr;
}
function syncBatch(changes, callback) {
  const dels = _$4.map(changes.dels, function(model) {
    return {
      method: "DELETE",
      url: _$4.result(model, "url") || urlError()
    };
  });
  const posts = _$4.map(changes.posts, function(model) {
    return {
      method: "POST",
      url: _$4.result(model, "url") || urlError(),
      body: model.toJSON()
    };
  });
  const puts = _$4.map(changes.puts, function(model) {
    return {
      method: "PUT",
      url: _$4.result(model, "url") || urlError(),
      body: _$4.pick(...[model.toJSON()].concat(_$4.keys(model.changedAttributes())))
    };
  });
  const requests = [].concat(dels, posts, puts);
  if (requests.length == 0) {
    return false;
  }
  return Api.batch(requests, callback);
}
var urlError = function() {
  throw new Error('A "url" property or function must be specified');
};
const origModelFetch = Backbone$4.Model.prototype.fetch;
Backbone$4.Model.prototype.fetch = async function(options) {
  try {
    await this.fetchPromise;
  } catch (e) {
  }
  options || (options = {});
  let promise = new Promise((resolve, reject) => {
    origModelFetch.call(this, __spreadProps(__spreadValues({}, options), {
      error: function(...args) {
        options.error && options.error(...args);
        reject(args[1]);
      },
      success: function(...args) {
        options.success && options.success(...args);
        resolve(args);
      }
    }));
  });
  this.fetchPromise = promise;
  return promise;
};
const origModelSave = Backbone$4.Model.prototype.save;
Backbone$4.Model.prototype.save = async function(key, value, options) {
  let data;
  if (arguments.length == 3) {
    data = { [key]: value };
  } else {
    data = key;
    options = value;
  }
  options || (options = {});
  return new Promise((resolve, reject) => {
    origModelSave.call(this, data, __spreadProps(__spreadValues({}, options), {
      error: function(...args) {
        options.error && options.error(...args);
        reject(args[1]);
      },
      success: function(...args) {
        options.success && options.success(...args);
        resolve(args);
      }
    }));
  });
};
const origCollectionCreate = Backbone$4.Collection.prototype.create;
Backbone$4.Collection.prototype.create = async function(attributes, options) {
  options || (options = {});
  return new Promise((resolve, reject) => {
    origCollectionCreate.call(this, attributes, __spreadProps(__spreadValues({}, options), {
      error: function(...args) {
        options.error && options.error(...args);
        reject(args[1]);
      },
      success: function(model, resp) {
        options.success && options.success(model, resp, options);
        resolve(model);
      }
    }));
  });
};
const origCollectionFetch = Backbone$4.Collection.prototype.fetch;
Backbone$4.Collection.prototype.fetch = async function(options) {
  try {
    await this.fetchPromise;
  } catch (e) {
  }
  options || (options = {});
  let promise = new Promise((resolve, reject) => {
    origCollectionFetch.call(this, __spreadProps(__spreadValues({}, options), {
      error: function(...args) {
        options.error && options.error(...args);
        reject(args[1]);
      },
      success: function(...args) {
        options.success && options.success(...args);
        resolve(args);
      }
    }));
  });
  this.fetchPromise = promise;
  return promise;
};
Backbone$4.Model.prototype.clone = function() {
  const json = this.toJSON();
  const model = new this.constructor(json, { parse: true });
  model.props = _$4.clone(this.props);
  return model;
};
const Model$3 = Backbone$4.Model.extend({
  sync,
  encodedFields: [],
  initialize(...args) {
    Model$3.__super__.initialize.call(this, ...args);
    this._listeners = [];
    this.listenTo(this, "change", this._notify);
  },
  _notify() {
    for (let listener of this._listeners) {
      listener(this.attributes);
    }
  },
  subscribe(listener) {
    this._listeners.push(listener);
    listener(this.attributes);
    return () => {
      this._listeners.splice(this._listeners.indexOf(listener), 1);
    };
  },
  parse(response) {
    _$4.each(this.encodedFields, function(name) {
      const text = response[name];
      if (_$4.isString(text)) {
        let obj = null;
        try {
          obj = JSON.parse(text);
        } catch (e) {
          console.error("Invalid model json attribute:", name, text, e);
        }
        response[name] = obj;
      }
    });
    return response;
  },
  prop(name, value) {
    this.props || (this.props = {});
    if (arguments.length == 2) {
      const oldVal = _$4.result(this.props, name);
      if (oldVal === value)
        return;
      this.props[name] = value;
      this.trigger("prop:" + name, value, oldVal);
      if (this.collection) {
        this.collection.trigger("prop:" + name, value, oldVal, this);
      }
    } else {
      return _$4.result(this.props, name);
    }
  },
  toJSON() {
    const json = Backbone$4.Model.prototype.toJSON.call(this);
    _$4.each(this.encodedFields, function(name) {
      const obj = json[name];
      if (!_$4.isEmpty(obj)) {
        json[name] = JSON.stringify(obj);
      }
    });
    return json;
  }
});
const Collection$3 = Backbone$4.Collection.extend({
  model: Model$3,
  sync,
  initialize(...args) {
    Collection$3.__super__.initialize.call(this, ...args);
    this._listeners = [];
    this._query = {};
    this.listenTo(this, "add", this._notify);
    this.listenTo(this, "change", this._notify);
    this.listenTo(this, "remove", this._notify);
    this.listenTo(this, "reset", this._notify);
  },
  _notify() {
    for (let listener of this._listeners) {
      listener(this);
    }
  },
  fetch(options = {}) {
    let data = options.data || {};
    options.data = __spreadValues(__spreadValues({}, data), this._query);
    let res = Collection$3.__super__.fetch.call(this, options);
    this._notify();
    return res;
  },
  parse: function(res) {
    return res.data;
  },
  subscribe(listener) {
    this._listeners.push(listener);
    listener(this);
    return () => {
      this._listeners.splice(this._listeners.indexOf(listener), 1);
    };
  },
  setQuery(q) {
    this._query = q;
  }
});
const PagedCollection = Collection$3.extend({
  currentPage: 0,
  limit: 20,
  total_count: 0,
  orderBy: "-ts",
  initialize(models = [], options = {}) {
    PagedCollection.__super__.initialize.call(this, models, options);
    _$4.extend(this, _$4.pick(options, "limit", "orderBy"));
  },
  getOpts() {
    return {
      limit: this.limit,
      offset: this.currentPage * this.limit,
      order: [this.orderBy]
    };
  },
  goto(page, options) {
    this.currentPage = parseInt(page || "0", 10);
    return this.fetch(options);
  },
  hasNext() {
    let { currentPage, nPages } = this.info();
    return currentPage < nPages - 1;
  },
  hasPrev() {
    return this.currentPage > 0;
  },
  info() {
    let { currentPage, limit, orderBy, total_count } = this;
    let count = this.models.length;
    return {
      count,
      currentPage,
      nPages: Math.ceil(total_count / limit),
      offset: currentPage * limit,
      limit,
      orderBy,
      total_count: total_count || 0
    };
  },
  onNext() {
    this.hasNext() && this.goto(this.currentPage + 1);
  },
  onPrev() {
    this.hasPrev() && this.goto(this.currentPage - 1);
  },
  parse(res) {
    this.total_count = res.total_count;
    return res.data;
  },
  sync(method, self, options) {
    const data = options.data || {};
    const url = _$4.result(self, "url");
    data._opt = _$4.extend(this.getOpts(), data._opt);
    const xhr = Api.api(url, method, data, (err, res) => {
      if (err) {
        options.error && options.error(self, err, options);
      } else {
        options.success && options.success(res);
      }
    });
    self.trigger("request", self, xhr, options);
    return xhr;
  }
});
var base$1 = {
  sync,
  syncBatch,
  Model: Model$3,
  Collection: Collection$3,
  PagedCollection
};
var T = i18n.gettext.bind(i18n);
const Backbone$3 = window.Backbone;
if (!Backbone$3) {
  throw new Error("ADD Backbone");
}
var Base$3 = Backbone$3.View.extend({
  name: "Base",
  domo,
  bubbleEvent: function(name) {
    this.parent && this.parent.trigger(name);
  },
  bubbleAddEvent: function() {
    this.bubbleEvent("child:add");
  },
  bubbleRemoveEvent: function() {
    this.bubbleEvent("child:remove");
  },
  getRoot: function() {
    if (this.parent) {
      return this.parent.getRoot();
    }
    return this;
  },
  focus: _.debounce(function() {
    this.$el.find('[value=""],input:not([value]),textarea').first().focus();
  }, 100),
  initialize: function(options) {
    options || (options = {});
    this.options = options;
    _.bindAll(...[this].concat(_.functions(this)));
    this.children = [];
    this.name = options.name || this.name;
    options.parent && this.setParent(options.parent);
    this.listenTo(this, "child:add", this.bubbleAddEvent);
    this.listenTo(this, "child:remove", this.bubbleRemoveEvent);
    this.model && this.$el.attr("data-id", this.model.id);
    this.$el.attr("viewclass", this.name);
    this.postInit(options);
  },
  postInit: function(options) {
  },
  remove: function() {
    if (this.el.parentNode) {
      Base$3.__super__.remove.call(this);
      this.setParent(null);
      this.removeChildren();
      this.trigger("remove", this);
    }
  },
  removeChildren: function() {
    _.each(this.children.slice(0), function(child) {
      child.remove();
      this.trigger("child:remove");
    }, this);
  },
  setParent: function(parent) {
    if (this.parent) {
      this.parent.children = _.without(this.parent.children, this);
      this.parent.trigger("child:remove", this);
    }
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
      this.parent.trigger("child:add", this);
    }
  }
});
var View$1 = { Base: Base$3 };
const _$3 = window._;
if (!_$3) {
  throw new Error("ADD _");
}
const types = {};
function Def(name, __super__, members) {
  if (typeof __super__ == "object") {
    members = __super__;
    __super__ = void 0;
  }
  types[this.name = name] = this;
  this.__super__ = __super__;
  _$3.extend(this, members);
}
_$3.extend(Def.prototype, {
  is: function(name) {
    return this.name == name || this.__super__ && this.__super__.isType(name);
  },
  isValid: function(value, desc) {
    return true;
  },
  format: identity,
  parse: identity
});
new Def("text"), new Def("integer", {
  isValid: function(value, desc) {
    return !isNaN(this.parse(value));
  },
  parse: function(value) {
    return parseInt(value);
  }
}), new Def("number", {
  isValid: function(value, desc) {
    return !isNaN(this.parse(value));
  },
  parse: function(value) {
    return parseFloat(value);
  }
}), new Def("email", "text", {
  isValid: function(value, desc) {
    return /^[a-z0-9_.+-]+@[a-z0-9_.-]+\.[a-z0-9_.-]+$/i.test(value);
  }
}), new Def("phone", "text", {
  isValid: function(value, desc) {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(value);
  }
}), new Def("tpl:text", "text", {
  params: [],
  isValid: function(value, desc) {
    return true;
  }
}), new Def("tpl:html", "tpl:text", {
  isValid: function(value, desc) {
    return this.__super__.isValid(value, desc);
  }
}), new Def("url", "text", {
  isValid: function(value, desc) {
    return /^([a-z]*\:\w*)/.test(value) && value.indexOf(" ") < 0;
  }
}), new Def("json", {
  isValid: function(value, desc) {
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }
    return true;
  },
  format: function(value) {
    return JSON.stringify(value, null, "  ");
  },
  parse: function(text) {
    return _$3.isEmpty(text) ? {} : JSON.parse(text);
  }
}), new Def("dict"), new Def("css", "text", {
  isValid: function(value, desc) {
    try {
      document.querySelector(value);
      return true;
    } catch (e) {
      return false;
    }
  }
}), new Def("js", "text", {
  isValid: function(value, desc) {
    return true;
  }
}), new Def("xpath", "text", {
  isValid: function(value, desc) {
    try {
      document.createExpression(value, function(prefix) {
        if (prefix == "x" || prefix == "xhtml" || prefix == "html") {
          return "http://www.w3.org/1999/xhtml";
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}), new Def("regexp", "text", {
  isValid: function(value, desc) {
    try {
      new RegExp(value.expr, value.flags);
      return true;
    } catch (e) {
      return false;
    }
  }
}), new Def("enum", "text", {
  isValid: function(value, desc) {
    return _$3.indexOf(_$3.pluck(desc.list, "value"), value) >= 0;
  }
}), new Def("file", {});
var Types = _$3.extend(types, {
  Def,
  get: function(name) {
    return types[name];
  },
  reg: function(name, type) {
    if (typeof type == "string") {
      type = types[type];
    }
    types[name] = type;
  }
});
function identity(value) {
  return value;
}
const $$2 = window.jQuery;
if (!$$2) {
  throw new Error("ADD jQuery");
}
const _$2 = window._;
if (!_$2) {
  throw new Error("ADD _");
}
const async = window.async;
if (!async) {
  throw new Error("ADD async");
}
const domo$2 = window.domo;
if (!domo$2) {
  throw new Error("ADD domo");
}
const moment$1 = window.moment;
if (!moment$1) {
  throw new Error("ADD moment");
}
const Backbone$2 = window.Backbone;
if (!Backbone$2) {
  throw new Error("ADD Backbone");
}
const CLASS_HIDE = "hidden";
var Base$2 = View$1.Base.extend({
  initialize: function(options) {
    const param = this.param = options.param || { name: "param" };
    const type = Types.get(options.type || param.type) || this.type;
    if (type == null) {
      throw new Error("Editor with unknown type: " + type);
    }
    this.type = type;
    Base$2.__super__.initialize.call(this, options);
    this.model || (this.model = new Backbone$2.Model());
    this.listenTo(this.model, "change:" + param.name, this.resetValue);
    this.plugins = _$2.map(param.plugins, function(cls) {
      return new cls(type, param, this);
    }, this);
  },
  acquire: function() {
    this.acquireRefs();
    this.renderPlugins();
    this.postRender();
    return this;
  },
  acquireRefs: function() {
  },
  isValid: function() {
    const rawValue = this.getRawValue();
    return !(this.param.must && _$2.isEmpty(rawValue)) && this.type.isValid(rawValue, this.param);
  },
  getValue: function() {
    const raw = this.getRawValue();
    return this.type.parse(raw);
  },
  postRender: function() {
  },
  remove: function() {
    Base$2.__super__.remove.call(this);
    _$2.each(this.plugins, function(plugin) {
      plugin.unload();
    });
  },
  render: function() {
    this.renderBase();
    this.renderPlugins();
    this.postRender();
    return this;
  },
  renderBase: function() {
  },
  renderPlugins: function() {
    _$2.each(this.plugins, function(plugin) {
      plugin.render();
    });
  },
  resetValue: function(model, changes, options) {
    if (options && options.source == "editor") {
      return;
    }
    let value = this.model.get(this.param.name);
    if (value === void 0) {
      value = this.param.defaultValue;
    }
    if (this.getValue() !== value) {
      this.setValue(value);
    }
  },
  setValue: function(value) {
  }
});
const Static = Base$2.extend({
  name: "Static",
  type: Types.text,
  postInit: function() {
    this.listenTo(this.model, "change", this.render);
  },
  renderBase: function() {
    this.$el.text(this.model.get(this.param.name));
    this.$field = this.$el;
    this.field = this.el;
  }
});
const Formatted = Base$2.extend({
  name: "Formatted",
  acquireRefs: function() {
    const $field = this.$el.find("input,textarea,select");
    this.field = $field[0];
    this.$help = $field.next(".help,.help-inline,.help-block");
    this.classHide = this.$help.hasClass("invisible") ? "invisible" : CLASS_HIDE;
    if (!this.field) {
      console.error("Failed to acquire refs for:", this);
      throw new Error("Editor failed to acquire refs");
    }
    const modelValue = this.model.get(this.param.name);
    if (_$2.isUndefined(modelValue)) {
      const value = this.getValue();
      if (!_$2.isEmpty(value) && _$2.isEmpty(this.model.get(this.param.name))) {
        this.model.set(this.param.name, value);
        const self = this;
        _$2.delay(function() {
          self.trigger("change", this, value);
        }, 0);
      }
    }
  },
  getRawValue: function() {
    return this.field.value;
  },
  getFormatted: function(value) {
    return value !== void 0 ? this.type.format(value) : void 0;
  },
  setRawValue: function(value) {
    this.field.value = value;
  },
  setValue: function(value) {
    const formatted = value && this.getFormatted(value);
    if (formatted !== void 0)
      this.setRawValue(formatted);
    if (this.model.get(this.param.name) != value) {
      this.model.set(this.param.name, value);
    }
  }
});
const Hidden = Formatted.extend({
  name: "Hidden",
  type: Types.text
});
const BaseFieldEdit = Formatted.extend({
  inputClass: "form-control xform-control-sm",
  type: Types.text,
  hideError: function() {
    this.$el.removeClass("has-error");
  },
  onBlur: function() {
    this.validate();
  },
  onChange: function() {
    if (this.isValid()) {
      const value = this.getValue();
      this.hideError();
      this.model.set(this.param.name, value, { source: "editor" });
      this.trigger("change", this, value);
    } else {
      this.showError();
    }
  },
  onFocus: function() {
  },
  onInput: _$2.debounce(function() {
    this.onChange();
  }, 400),
  onKeypress: function(e) {
    if (e.keyCode == 13) {
      this.onChange();
    }
  },
  postRender: function() {
    this.$el.addClass("xeditor control-group");
    $$2(this.field).change(this.onChange).focus(this.onFocus).blur(this.onBlur).keypress(this.onKeypress);
    this.resetValue();
  },
  renderBase: function() {
    const help = this.param.help;
    this.$el.empty().append(this.field = this.renderField(), help ? P({ "class": "help " }, T(help)) : "");
    this.$field = $$2(this.field);
    this.$help = this.$(".help");
  },
  showError: function() {
    this.$el.addClass("has-error");
  },
  validate: function() {
    if (this.isValid())
      ;
    else {
      this.showError();
    }
  }
});
const InputEdit = BaseFieldEdit.extend({
  name: "InputEdit",
  className: "xtext",
  inputType: "text",
  renderField: function() {
    const placeholder = this.param.placeholder || this.param.label;
    return INPUT({
      "placeholder": placeholder ? T(placeholder) : "",
      "type": this.inputType,
      "class": this.inputClass + " inline"
    });
  }
});
const PasswordEdit = InputEdit.extend({
  name: "PasswordEdit",
  inputType: "password"
});
const EmailEdit = InputEdit.extend({
  name: "EmailEdit",
  className: "xemail",
  type: Types.email
});
const IntegerEdit = InputEdit.extend({
  name: "IntegerEdit",
  className: "xnumber",
  type: Types.integer
});
const NumberEdit = InputEdit.extend({
  name: "NumberEdit",
  className: "xnumber",
  type: Types.number
});
const DurationEdit = IntegerEdit.extend({
  name: "DurationEdit",
  className: "xduration",
  type: Types.duration
});
const PhoneEdit = InputEdit.extend({
  name: "PhoneEdit",
  className: "xphone",
  type: Types.phone
});
const TextTplEdit = InputEdit.extend({
  name: "TextTplEdit",
  className: "xtpltext",
  type: Types.get("tpl:text")
});
const RichTextEdit = InputEdit.extend({
  name: "RichTextEdit",
  className: "xrichtext",
  renderField: function() {
    return TEXTAREA({
      "class": this.inputClass,
      "placeholder": T(this.param.label || "NA")
    });
  }
});
const HTMLTplEdit = RichTextEdit.extend({
  name: "HTMLTplEdit",
  className: "xhtmltext",
  type: Types.get("tpl:html")
});
const URLEdit = InputEdit.extend({
  name: "URLEdit",
  className: "xurl flex items-stretch",
  type: Types.url
});
const RegExpEdit = BaseFieldEdit.extend({
  name: "RegExpEdit",
  className: "xregexp",
  type: Types.regexp,
  getValue: function() {
    return {
      expr: this.elExpr.value,
      flags: this.elFlags.value
    };
  },
  postRender: function() {
    this.$el.addClass("xeditor control-group");
    $$2([this.elExpr, this.elFlags]).change(this.onChange).focus(this.onFocus).blur(this.onBlur).keypress(this.onKeypress);
    this.resetValue();
  },
  renderField: function() {
    return DIV({ "class": "flex" }, this.elExpr = INPUT({
      "placeholder": T("l_regexp"),
      "type": "text",
      "class": this.inputClass + " xre-expr flex-auto mr2"
    }), this.elFlags = INPUT({
      "placeholder": T("l_flags"),
      "type": "text",
      "class": this.inputClass + " xre-flag w-25"
    }));
  },
  getRawValue: function() {
    return this.getValue();
  },
  setValue: function(value) {
    const oldValue = this.model.get(this.param.name) || {};
    value || (value = {});
    this.elExpr.value = value.expr || "";
    this.elFlags.value = value.flags || "gim";
    if (!_$2.isEqual(oldValue, value)) {
      this.model.set(this.param.name, value);
    }
  }
});
const MacroEdit = Base$2.extend({
  name: "MacroEdit",
  type: Types.macro,
  getValue: function() {
    return this.value;
  },
  setValue: function(value) {
    this.value = value || {};
  },
  acquireRefs: function() {
    throw new Error("Not supported");
  },
  renderBase: function() {
    throw new Error("Not implemented");
  }
});
const XPathEdit = InputEdit.extend({
  name: "XPathEdit",
  className: "xxpath",
  type: Types.xpath
});
const CSSEdit = InputEdit.extend({
  name: "CSSEdit",
  className: "xcss",
  type: Types.css
});
const JSEdit = RichTextEdit.extend({
  name: "JSEdit",
  className: "xjs",
  type: Types.js
});
const JSONEdit = RichTextEdit.extend({
  name: "JSONEdit",
  className: "xjson",
  type: Types.json
});
const EnumEdit = BaseFieldEdit.extend({
  name: "EnumEdit",
  className: "xenum",
  type: Types.get("enum"),
  getItemLabel: function(item) {
    return T(item.label);
  },
  postInit: function() {
    this.list = this.param.list;
  },
  renderField: function() {
    const self = this;
    const options = _$2.map(this.list, function(aItem) {
      if (_$2.isString(aItem)) {
        return OPTION({ value: aItem }, aItem ? T(aItem) : "");
      } else {
        let attributes2 = { value: aItem.value };
        if (!!aItem.title) {
          attributes2.title = T(aItem.title);
        }
        return OPTION(attributes2, aItem ? self.getItemLabel(aItem) : "");
      }
    });
    let attributes = {};
    if (!!this.param.title) {
      attributes.title = T(this.param.title);
    }
    return SELECT(attributes, options);
  },
  setList: function(list) {
    this.list = list;
    this.render();
  }
});
var Property = View$1.Base.extend({
  name: "Property",
  className: "row",
  initialize: function(options) {
    Property.__super__.initialize.call(this, options);
    this.$el.on("change", this.updateModel);
  },
  render: function() {
    const self = this;
    let btnDel;
    this.$el.append(DIV({ "class": "col-xs-1" }, btnDel = BUTTON({ "class": "btn btn-default xbtn-light" }, I({ "class": "fa fa-trash-o" }))), DIV({ "class": "col-xs-3" }, this.elKey = INPUT({
      "class": "form-control xform-control-sm inline",
      "placeholder": "name",
      "value": this.model.get("key")
    })), DIV({ "class": "col-xs-8" }, this.elValue = INPUT({
      "class": "form-control xform-control-sm inline",
      "placeholder": "value",
      "value": this.model.get("value")
    })));
    btnDel.onclick = function() {
      self.trigger("request:delete", self);
    };
    return this;
  },
  updateModel: function() {
    this.model.set({
      key: this.elKey.value,
      value: this.elValue.value
    });
  }
});
var DictEdit = BaseFieldEdit.extend({
  name: "DictEdit",
  className: "xdict",
  type: Types.dict,
  action_add: function() {
    this.addOne("", "");
  },
  addOne: function(key, value) {
    const propertyEditor = new Property({
      model: new Backbone$2.Model({ key, value }),
      parent: this
    });
    propertyEditor.render();
    this.listenTo(propertyEditor, "request:delete", this.onDelete);
    this.listenTo(propertyEditor.model, "change", this.onPropertyChange);
    this.elList.appendChild(propertyEditor.el);
    this.propertyEditors.push(propertyEditor);
  },
  getRawValue: function() {
    return this.getValue();
  },
  getValue: function() {
    return _$2.reduce(this.propertyEditors, function(memo, editor) {
      memo[editor.model.get("key")] = editor.model.get("value");
      return memo;
    }, {});
  },
  initialize: function(options) {
    DictEdit.__super__.initialize.call(this, options);
    this.propertyEditors = [];
  },
  onDelete: function(editor) {
    editor.remove();
    this.propertyEditors = _$2.without(this.propertyEditors, editor);
    this.onChange();
  },
  onPropertyChange: function(model) {
    this.onChange();
  },
  postRender: function() {
    this.resetValue();
  },
  renderField: function() {
    let btnAdd;
    let el;
    el = DIV(DIV({ "class": "xpad-vertical" }, btnAdd = BUTTON({ "class": "btn btn-default btn-sm xbtn-light" }, I({ "class": "fa fa-plus" }), " " + T(this.param.fieldLabel))), this.elList = DIV({}));
    btnAdd.onclick = this.action_add;
    return el;
  },
  setValue: function(value) {
    const self = this;
    const oldValue = this.model.get(this.param.name) || {};
    value || (value = {});
    _$2.each(this.propertyEditors, function(editor) {
      editor.remove();
    });
    this.propertyEditors = [];
    _$2.each(value, function(value2, key) {
      self.addOne(key, value2);
    });
    if (!_$2.isEqual(oldValue, value)) {
      this.model.set(this.param.name, value);
    }
  }
});
const FileEdit = InputEdit.extend({
  name: "FileEdit",
  inputType: "file"
});
const views = {
  "css": CSSEdit,
  "duration": DurationEdit,
  "email": EmailEdit,
  "enum": EnumEdit,
  "file": FileEdit,
  "hidden": Hidden,
  "integer": IntegerEdit,
  "js": JSEdit,
  "json": JSONEdit,
  "macro": MacroEdit,
  "number": NumberEdit,
  "password": PasswordEdit,
  "phone": PhoneEdit,
  "regexp": RegExpEdit,
  "request_headers": DictEdit,
  "request_data": DictEdit,
  "static": Static,
  "text": InputEdit,
  "textarea": RichTextEdit,
  "tpl:text": TextTplEdit,
  "tpl:html": HTMLTplEdit,
  "url": URLEdit,
  "xpath": XPathEdit
};
function Plugin(type, param, editor) {
  this.type = type;
  this.param = param;
  this.editor = editor;
  this.load(param, editor);
}
_$2.extend(Plugin.prototype, Backbone$2.Events, {
  load: function(param, editor) {
  },
  render: function() {
  },
  unload: function() {
    this.off();
  }
});
Plugin.extend = View$1.Base.extend;
const SelectOptionsPlugin = Plugin.extend({
  attrLabel: "value",
  attrValue: "value",
  loadData: function(collection) {
    $$2(this.separator).attr("label", "");
    $$2(this.separator).nextAll().remove();
    collection.each(function(model) {
      this.select.appendChild(this.renderOption(model));
    }, this);
    this.editor.resetValue();
    if (_$2.isEmpty(this.editor.getValue()) && collection.length > 0) {
      this.editor.setValue(collection.at(0).get(this.attrValue));
    }
  },
  render: function() {
    const self = this;
    $$2(this.editor.field).wrap(SPAN({
      "class": "xwrap"
    })).addClass("hide").before(this.select = SELECT());
    this.editor.field = this.select;
    this.renderDefaults();
    this.renderActions();
    this.separator = OPTGROUP();
    this.select.appendChild(this.separator);
    $$2(this.select).change(function() {
      const value = self.select.value;
      if (value.indexOf("action:") == 0) {
        self[value.replace(":", "_")]();
        self.reset();
      }
    });
  },
  renderActions: function() {
  },
  renderDefaults: function() {
    this.select.appendChild(OPTION({ value: "", tag: "defaults" }, i18n.sprintf(T("a_action_object"), T("a_select"), T(this.param.label || ""))));
  },
  renderOption: function(model) {
    return OPTION({
      value: model.get(this.attrValue)
    }, this.getOptionLabel(model));
  },
  getOptionLabel: function(model) {
    return model.get(this.attrLabel);
  },
  reset: function() {
    if (this.attrs.length > 0) {
      this.select.value = "";
    } else {
      this.select.value = "";
    }
  }
});
Plugin.extend({
  load: function(param, editor) {
    editor.on("change", function(editor2, value) {
      localStorage.setItem("editor:" + param.name, value);
    });
    let localStorageValue = localStorage.getItem("editor:" + param.name);
    if (!!localStorageValue) {
      param.defaultValue = localStorageValue;
    } else {
      localStorage.setItem("editor:" + param.name, editor.model.get(param.name));
    }
  }
});
var Editor = {
  create: function(type, options) {
    if (typeof type == "object") {
      options = type;
      if (!options.param || !options.param.type) {
        throw new Error("Invalid editor param: " + JSON.stringify(options));
      }
      type = options.param.type;
    }
    const Cls = views[type];
    if (Cls == null)
      throw new Error("View type not registered: " + type);
    return new Cls(options);
  },
  get: function(type) {
    return views[type];
  },
  reg: function(type, Cls) {
    views[type] = Cls;
  },
  Plugin,
  SelectOptionsPlugin
};
const domo$1 = window.domo;
if (!domo$1) {
  throw new Error("ADD domo");
}
const $$1 = window.jQuery;
if (!$$1) {
  throw new Error("ADD jQuery");
}
const Backbone$1 = window.Backbone;
if (!Backbone$1) {
  throw new Error("ADD Backbone");
}
var Base$1 = Backbone$1.View.extend({
  name: "Base",
  domo: domo$1,
  bubbleEvent: function() {
    this.trigger(...arguments);
    this.parent && this.parent.bubbleEvent(...arguments);
  },
  getRoot: function() {
    if (this.parent) {
      return this.parent.getRoot();
    }
    return this;
  },
  focus: _.debounce(function() {
    this.$el.find('[value=""],input:not([value]),textarea').first().focus();
  }, 100),
  initialize: function(options) {
    options || (options = {});
    this.options = options;
    _.bindAll(...[this].concat(_.functions(this)));
    this.children = [];
    this.name = options.name || this.name;
    options.parent && this.setParent(options.parent);
    this.model && this.$el.attr("data-id", this.model.id);
    this.$el.attr({ viewclass: this.name, cid: this.cid });
    this.postInit(options);
  },
  postInit: function(options) {
  },
  remove: function() {
    if (this.el.parentNode) {
      Base$1.__super__.remove.call(this);
      this.setParent(null);
      this.removeChildren();
      this.trigger("remove", this);
    }
  },
  removeChildren: function() {
    _.each(this.children.slice(0), function(child) {
      child.remove();
      this.bubbleEvent("child:remove");
    }, this);
  },
  setParent: function(parent) {
    if (this.parent) {
      this.parent.children = _.without(this.parent.children, this);
      this.parent.bubbleEvent("child:remove", this);
    }
    this.parent = parent;
    if (this.parent) {
      this.parent.children.push(this);
      this.parent.bubbleEvent("child:add", this);
    }
  }
});
const Activable = Base$1.extend({
  name: "Activable",
  active: true,
  setActive: function(active) {
    if (this.active != active) {
      this.active = active;
      this.trigger("active", active);
    }
  }
});
const ActionProvider = Activable.extend({
  name: "ActionProvider",
  actions: {},
  getActions: function() {
    if (this.active) {
      return _.reduce(this.children, function(memo, child) {
        return _.extend(memo, child.getActions && child.getActions());
      }, contextifyActions(this));
    }
    function contextifyActions(view) {
      return _.reduce(view.actions, function(memo, action, name) {
        memo[name] = _.extend({ context: view }, action);
        return memo;
      }, {});
    }
  }
});
var Form = ActionProvider.extend({
  name: "Form",
  tagName: "form",
  event_keypress: function(e) {
    if (e.keyCode == "\r".charCodeAt(0)) {
      return this.onSubmit();
    }
  },
  event_submit: function(e) {
    return this.onSubmit();
  },
  clear: function() {
    this.$el.find("input").val("");
  },
  initialize: function(options) {
    Form.__super__.initialize.call(this, options);
    this.$el.on("submit", this.event_submit);
    this.$el.on("keypress", this.event_keypress);
  },
  onError: function(errors) {
  },
  onSubmit: function() {
    const errors = this.validateFields();
    if (!_.isEmpty(errors)) {
      this.onError(errors);
      return false;
    }
    return this.submit();
  },
  submit: function() {
    return true;
  },
  validateFields: function() {
    return null;
  }
});
const SimpleForm = Form.extend({
  name: "SimpleForm",
  className: "form-horizontal",
  fields: [],
  afterRender: function() {
  },
  onError: function(errors) {
    _.each(this.editors, function(editor) {
      editor.validate();
    });
  },
  render: function() {
    this.$el.attr({
      action: this.options.action || "",
      method: this.options.method || "post"
    });
    this.renderEditors();
    return this;
  },
  renderEditors: function() {
    const self = this;
    self.editors = _.map(self.fields, function(field) {
      const editor = Editor.create(field.type, {
        param: field,
        parent: self,
        model: self.model,
        label: field.label,
        form: true
      });
      self.el.appendChild(editor.render().el);
      return editor;
    });
    self.afterRender();
  },
  validateFields: function() {
    const errors = _.filter(this.editors, function(editor) {
      return !editor.isValid();
    }, this);
    return errors;
  }
});
const Frame$1 = ActionProvider.extend({
  name: "Frame",
  tagName: "iframe",
  attributes: {
    frameborder: 0,
    style: "width: 100%;"
  },
  render: function() {
    this.rendered = true;
    this.iframe = this.el;
    this.iframe.src = this.getFrameURL();
    this.iframe.onload = _.bind(this.initializeFrame, this);
    return this;
  },
  getFrameURL: function() {
    return "about:blank";
  },
  initializeFrame: function() {
  }
});
var XDFrame = Frame$1.extend({
  name: "XDFrame",
  getFrameURL: function() {
    return this.model.get("host") + "/" + this.name + "#" + this.model.id;
  },
  initialize: function(options) {
    XDFrame.__super__.initialize.call(this, options);
    this.options = options;
    this.responseHandlers = {};
  },
  initializeFrame: function() {
    window.addEventListener("message", _.bind(this.onMessage, this));
  },
  onMessage: function(e) {
    if (e.source != this.iframe.contentWindow || this.model.get("host") != e.origin)
      return;
    const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
    if (data.type == "response") {
      const handler = this.responseHandlers[data._id];
      if (handler) {
        delete this.responseHandlers[data._id];
        handler(data.err, data.data);
      }
    } else if (data.type == "event") {
      this.trigger("app", data.data, this);
      if (typeof this["on_" + data.data.type] == "function") {
        this["on_" + data.data.type](data.data);
      }
    } else {
      console.error("Unhandled message type:", data);
    }
  },
  request: function(path, data, callback) {
    const _id = Core.ID();
    callback || (callback = function() {
    });
    this.responseHandlers[_id] = callback;
    let msg = {
      _id,
      type: "request",
      path,
      data
    };
    window.IE && (msg = JSON.stringify(msg));
    this.iframe.contentWindow.postMessage(msg, this.model.get("host"));
  }
});
const Routed = ActionProvider.extend({
  name: "Routed",
  getRouter: function() {
    return this.parent.getRouter();
  },
  routePrefix: function() {
    const prefix = this.options.routePrefix;
    return _.isUndefined(prefix) ? this.name : prefix;
  },
  route: function(frags) {
    frags = _.toArray(arguments);
    frags.unshift(_.result(this, "routePrefix"));
    this.parent.route(frags.join("/"));
  }
});
const RoutedRoot = Routed.extend({
  name: "RoutedRoot",
  actions: {
    "nav": {
      fn: "action_nav"
    }
  },
  action_nav: function(name) {
    Backbone$1.history.navigate(name, true);
  },
  postInit: function(options) {
    this.router = options.router;
    this.on("child:add child:remove", _.debounce(this.updateActions, 10));
  },
  route: function(fragment) {
    this.router.navigate(fragment || "", true);
  },
  getRouter: function() {
    return this.router;
  },
  setRouter: function(router2) {
    this.router = router2;
  },
  updateActions: function() {
    Core.Acts.setActions(this.getActions());
  }
});
const Menu = ActionProvider.extend({
  name: "Menu",
  tagName: "ul",
  className: "dropdown-menu",
  actions: {
    noop: { fn: "noop" }
  },
  noop: function() {
  },
  events: {
    "click a": "event_click"
  },
  event_click: function(event) {
    this.trigger("click", event.target.dataset, event);
  },
  render: function() {
    const items = this.options.items;
    this.$el.append(_.map(items, function(item) {
      const a = A({ href: "#" }, T(item.label));
      _.each(item.data, function(value, key) {
        a.dataset[key] = value;
      });
      return LI(a);
    })).attr("data-action", "noop");
    return this;
  }
});
const ContextMenu = Menu.extend({
  name: "ContextMenu",
  hide: function() {
    this.$el.remove();
    this.removeChildren();
    this.stopListening();
    $$1(window).off("click", this.onAClick).off("keypress", this.onKeyup);
    this.id = null;
  },
  onAClick: function(e) {
    const target = e.target;
    if (($$1.contains(document.documentElement, target) || document.documentElement == target) && !$$1.contains(this.el, target) && $$1(target).parents(".dropdown-menu").length == 0) {
      this.hide();
    }
  },
  onKeyup: function(e) {
    if (e.keyCode == 27) {
      this.hide();
    }
  },
  renderMenu: function() {
  },
  show: function() {
    const ref = this.ref;
    const parent = $$1(ref).offsetParent();
    const offset = $$1(ref).position();
    $$1(this.el).css({
      "display": "block",
      "left": 0,
      "color": "#333",
      "font-weight": 300
    }).css({
      top: offset.top + ref.offsetHeight,
      left: Math.min(offset.left + 10, parent.width() - this.el.offsetWidth - 10)
    }).attr("data-action", "noop");
  },
  toggle: function(id, ref) {
    if (this.id === id) {
      this.off();
      this.hide();
      return;
    }
    if (this.id)
      this.hide();
    this.id = id;
    this.ref = ref;
    this.renderMenu();
    this.$el.appendTo(ref.parentNode);
    this.show();
    _.defer(function(self) {
      $$1(window).click(self.onAClick).keyup(self.onKeyup);
    }, this);
  }
});
const Dropdown = ActionProvider.extend({
  name: "Dropdown",
  className: "dropdown",
  actionTag: "a",
  postInit: function(options) {
    this.menu = options.menu;
    this.label = options.label;
  },
  render: function() {
    const elAction = this.renderAction();
    this.$el.append(elAction, this.menu.render().el).css("font-weight", "initial");
    return this;
  },
  renderAction: function() {
    const caret = SPAN({ "class": "caret" });
    const elLabel = this.elLabel = SPAN(this.label);
    return this.actionTag == "a" ? A({
      "class": "dropdown-toggle",
      "data-toggle": "dropdown",
      "href": "#"
    }, elLabel, " ", caret) : BUTTON({
      "class": "btn btn-default dropdown-toggle",
      "data-toggle": "dropdown"
    }, elLabel, " ", caret);
  },
  setLabel: function(label) {
    this.label = label;
    if (this.elLabel) {
      $$1(this.elLabel).text(T(this.label));
    }
  }
});
var Panel = ActionProvider.extend({
  name: "Panel",
  className: "panel panel-default",
  bodyClass: "panel-body",
  headerClass: "panel-heading",
  title: "Title",
  postInit: function(options) {
    _.extend(this, _.pick(options, "toolbarActions", "title", "view", "bodyClass", "headerClass"));
    this.view && this.listenTo(this.view, "remove", this.remove);
  },
  remove: function() {
    this.view && this.view.remove();
    Panel.__super__.remove.call(this);
  },
  render: function() {
    const views2 = [];
    const header = this.renderHeader();
    const view = this.renderView();
    const footer = this.footer = this.renderFooter();
    if (header) {
      views2.push(DIV({ "class": this.headerClass }, header));
    }
    $$1(view).addClass(this.bodyClass).css("clear", "both");
    views2.push(view);
    if (footer) {
      views2.push(footer);
    }
    this.$el.append(views2);
    return Panel.__super__.render.call(this);
  },
  renderHeader: function() {
    let extraEl;
    let actions;
    const header = DIV(actions = DIV({ "class": "xtbar pull-right" }), H3(T(this.title), extraEl = SMALL()));
    _.each(this.toolbarActions, function(action, index) {
      actions.appendChild(A(_.extend({
        "class": index == 0 ? "btn btn-primary" : "btn"
      }, action.attrs), T(action.label)));
    });
    this.options.titleEx && $$1(extraEl).empty().append(" ", SMALL(T(this.options.titleEx)));
    return header;
  },
  renderFooter: function() {
  },
  renderView: function() {
    return this.view.render().el;
  }
});
var Modal = Panel.extend({
  name: "Modal",
  actions: { "modal close": { fn: "action_discard" } },
  toolbarActions: [
    {
      label: "\u2715",
      attrs: {
        "data-action": "modal close",
        "class": "close",
        "title": "Close"
      }
    }
  ],
  action_discard: function() {
    this.trigger("discard");
    this.remove();
  },
  render: function() {
    Modal.__super__.render.call(this);
    const opts = this.options;
    const top = opts.top === void 0 ? 0 : opts.top;
    const dimens = _.extend({
      width: 800
    }, _.pick(opts, "height", "width"));
    const wrapped = this.el;
    const parent = this.el.parentNode;
    const wrap = domo$1.DIV({ "class": "xmodal" }, wrapped, domo$1.DIV({ "class": "xbg" }));
    parent && parent.appendChild(wrap);
    this.el = wrap;
    this.$el = Backbone$1.$(this.el);
    if (opts.maxHeight) {
      this.view.$el.css({
        maxHeight: opts.maxHeight,
        overflow: "auto"
      });
    }
    $$1(wrapped).css(dimens).addClass("xraised");
    if (opts.position == "absolute") {
      this.$el.css("top", $$1(window).scrollTop() + top);
    } else {
      this.$el.css({ position: "fixed", top });
    }
    return this;
  },
  show: function() {
    $$1("body").append(this.render().el);
    this.focus();
    return this;
  }
});
const SaveDiscardModal = Modal.extend({
  action_discard: function() {
    this.trigger("discard");
    const callback = this.options.discard;
    callback && callback(this);
  },
  action_save: function() {
    this.trigger("save");
    const callback = this.options.save;
    callback && callback(this);
  },
  renderFooter: function() {
    const footer = DIV({ "class": "modal-footer btn-toolbar" }, this.save = BUTTON({
      "class": "btn " + (this.options.okBtnClass || "btn-primary"),
      "data-loading-text": T("l_loading")
    }, T(this.options.a_save || "a_save")), this.discard = BUTTON({
      "class": "btn btn-default"
    }, T(this.options.a_discard || "a_discard")));
    this.discard.onclick = this.action_discard;
    this.save.onclick = this.action_save;
    return footer;
  },
  showProgress: function(show) {
    if (show === false) {
      $$1(this.save).button("reset");
    } else {
      $$1(this.save).button("loading");
    }
  }
});
const PromptModal = SaveDiscardModal.extend({
  title: "l_prompt",
  a_save: "a_save",
  action_discard: function() {
    this.trigger("discard");
    this.remove();
  },
  renderView: function() {
    return DIV({ "class": "form" }, DIV({ "class": "form-group" }, LABEL({
      "class": "control-label"
    }, T(this.options.msg || " ")), DIV(this.view ? this.view.render().el : ""), this.alert = DIV({ "class": "alert alert-error hide" })));
  },
  showAlert: function(msg) {
    if (msg) {
      $$1(this.alert).html(T(msg)).removeClass("hide").removeClass("invisible");
    } else {
      $$1(this.alert).addClass("invisible");
    }
  }
});
var Collection$2 = ActionProvider.extend({
  name: "Collection",
  _getModelId: function(model) {
    return model.id || model.cid;
  },
  addOne: function(model) {
    throw new Error("addOne not implemented!");
  },
  initialize: function(options) {
    const self = this;
    this.initCollection(options);
    this.views = {};
    this.listenTo(this.collection, "add", function(model) {
      self.views[self._getModelId(model)] = self.addOne(model);
    });
    this.listenTo(this.collection, "remove", this.removeOne);
    this.listenTo(this.collection, "reset", this.onReset);
    Collection$2.__super__.initialize.call(this, options);
  },
  initCollection: function(options) {
    this.collection = options.collection || options.model;
  },
  onReset: function(collection, options) {
    this.resetList(options.previousModels);
    if (this.rendered) {
      this.renderList();
    }
  },
  removeOne: function(model) {
    const id = this._getModelId(model);
    const view = this.views[id];
    if (view) {
      view.remove();
      delete this.views[id];
    }
  },
  render: function() {
    this.renderBase();
    this.renderList();
    this.rendered = true;
    return this;
  },
  renderBase: function() {
  },
  renderList: function() {
    const self = this;
    this.views = this.collection.reduce(function(views2, model) {
      views2[self._getModelId(model)] = self.addOne(model);
      return views2;
    }, this.views);
  },
  resetList: function(oldModels) {
    _.each(oldModels, this.removeOne);
  }
});
const Entities = Collection$2.extend({
  name: "Entities",
  ViewClass: Base$1,
  removeModelView: function() {
    if (this.modelView) {
      this.modelView.remove();
    }
    this.modelView = this.model = null;
  },
  renderModelView: function(model, view) {
    throw new Error("Override renderModelView()");
  },
  showModelView: function(model) {
    if (!this.ViewClass) {
      throw new Error("ViewClass not set.", model);
    }
    if (this.modelView) {
      if (this.modelView.model == model) {
        return this.modelView;
      }
      this.removeModelView();
    }
    this.modelView = new this.ViewClass(__spreadValues({
      model,
      parent: this
    }, this.ViewOptions));
    this.renderModelView(model, this.modelView);
    return this.modelView;
  }
});
const Summary = Base$1.extend({
  name: "Summary",
  className: "xsummary",
  render: function() {
    this.$el.append(DIV(CLS("xmask")), DIV(CLS("xinfo")));
  }
});
var View = {
  ActionProvider,
  Activable,
  Base: Base$1,
  Collection: Collection$2,
  Dropdown,
  ContextMenu,
  Entities,
  Form,
  Frame: Frame$1,
  Menu,
  Modal,
  PromptModal,
  Panel,
  Routed,
  RoutedRoot,
  SaveDiscardModal,
  SimpleForm,
  Summary,
  XDFrame
};
const scriptRel = "modulepreload";
const seen = {};
const base = "./";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var MESSAGES = {
  e_brwsr_na: "Brwsr not found",
  e_brwsr_timeout: "Please try again later. No remote browser is available right now.",
  e_err: "Error",
  e_err_add: "Failed to add - ",
  e_err_unexpected: "Unexpected error",
  e_feed_in_page_na: "No feed found in the page.",
  e_load_source: "Failed to load source.",
  e_load_stripe: "Failed to load Stripe.",
  e_pwd_change: "Failed to change password.",
  e_pwd_new: "Sorry, we could not find this email.",
  e_pwd_reset: "Failed to reset password.",
  e_req: "Request to server failed.",
  e_sel_0_save: "No selections could be found to be saved.",
  e_signin_invalid: "Sign in failed, please check your username and password and try again",
  e_subscription_failed: "Failed to complete subscription.",
  e_sync_disabled: "Please sign in and then enable sync.",
  e_sync_server_na: "Please check if sync is enabled for your account.",
  e_unknown_content_type: "Unknown content type: %1$s",
  e_value_exists: "Entered value already exists.",
  e_value_incorrect_check: "Please check entered value. It is an invalid value.",
  a_action_object: "%1$s %2$s",
  a_action_reload: "Reload",
  a_add: "Add",
  a_add_action: "Add action",
  a_add_feed: "Add feed",
  a_add_file: "Add file",
  a_add_label: "Add label",
  a_add_pdf: "Add PDF",
  a_add_url: "Add url",
  a_apply: "Apply",
  a_cancel: "Cancel",
  a_change_plan: "Change Plan",
  a_check_changes: "Check for changes",
  a_check_changes_all: "Check all for changes",
  a_checks_off: "OFF",
  a_checks_on: "ON",
  a_change: "Change",
  a_clear: "Clear",
  a_close: "Close",
  a_confirm: "Confirm",
  a_confirm_plan: "Confirm Plan",
  a_del: "Delete",
  a_del_permanent: "Delete forever",
  a_discard: "Cancel",
  a_downgrade: "Downgrade",
  a_duplicate: "Duplicate",
  a_edit: "Edit",
  a_edit_options: "Edit Options",
  a_edit_rules: "Edit Conditions",
  a_expand: "Expand",
  a_get_set_go: "Got it - Get started",
  a_go_to_watchlist: "Go to Watchlist",
  a_hide_actions: "Hide actions",
  a_later: "Later",
  a_load_website_in_sieve: "Go!",
  a_mark_read: "Mark as read",
  a_monitor_feed: "Monitor feed",
  a_monitor_page: "Monitor full page",
  a_monitor_page_elements: "Monitor parts of page",
  a_move_to_trash: "Move to Trash",
  a_narrow_sel: "Narrow expanded selection",
  a_next: "Next",
  a_open_selector: "Open Selector",
  a_open_x_selector: "Open %s Selector",
  a_open_unread_in_tab: "Open unread in tab",
  a_play: "Play",
  a_register: "Create Account",
  a_rename: "Rename",
  a_resend_verification_msg: "Resend verification message",
  a_restore: "Restore",
  a_save: "Save",
  a_save_selections: "Save selections",
  a_select: "Select",
  a_select_elements: "Select elements",
  a_select_properties: "Select properties",
  a_select_device: "Select device to run checks",
  a_show_actions: "Show actions",
  a_signin: "Sign In",
  a_subscribe: "Subscribe",
  a_sieve_new: "Add Webpage",
  a_static_load: "Disable JavaScript",
  a_toggle_changes: "Show/Hide Changes",
  a_verify: "Verify",
  a_window_close: "Close Window",
  a_make_primary: "Make Primary",
  h_brwsr_closed: "Remote browser has stopped working. Please try to start new browser.",
  h_brwsr_disconnect: "Connection to remote browser has been broken. Please try to start new browser.",
  h_config_show: "Show config",
  h_css_selelctor: "CSS selector to select elements",
  h_del_action: "Delete action",
  h_desc: "Write a description that explains purpose of this entry.",
  h_email_addr: "Email address, e.g. name@example.com",
  h_js: "JavaScript to match selected elements. Return matched elements synchronously or perform an async task and use sendResponse(err, elements) callback to return matched elements after task completion.",
  h_opening_selector_in_new_tab: "Opening new tab to select content...",
  h_opened_selector_in_tab: "Opened new tab to select source content.",
  h_phone: "# international format: +19999999999",
  h_regexp_filter: "Regular expression to filter text content",
  h_schedule_interval: "Set interval at which it will be checked for changes.",
  h_selector_edit: "Select content from a webpage.",
  h_sieve_actions: "Actions are taken when source content changes. Multiple actions can be taken concurrently.",
  h_sieve_device: "Select device that this monitor runs on. Other devices will appear in the list once all devices are synced. The device name with suffix (this device) is name of the current Watchlist's device.",
  h_sieve_empty: "Empty text in selection! If it does not match text in next check consider changing selections. Check update log for checks.",
  h_sieve_name: "A short name to identify this monitor.",
  h_sieve_new: "Preview will be available soon after this task is run.",
  h_sieve_no_config: "No source has been selected. Edit options to select content from a webpage.",
  h_sieve_rules: "Conditions can be used to take actions only when it is true. When there is no condition, actions are taken on any change. All conditions except regexp are case-insensitive.",
  h_sieve_source: "Source is used to get text and data to be monitored.",
  h_tpl_desc_info: "A description of the template. Add any info that may be useful for users and show what is unique about this template.",
  h_tpl_desc_name: 'A short name that specifies what is being monitored e.g. "Price and Stock". Do not include verbs like "Monitor" or "Track changes" or website name.',
  h_tpl_desc_url: "URL of homepage of the website.",
  h_tpl_config: "Define selections to be monitored in a webpage using this template. When required, reference a parameter by its {{name}}.",
  h_tpl_params: "Parameters make it possible to use a template to create multiple monitors using multiple input values. Values can be extracted from a reference URL or provided by user.",
  h_tpl_url: "A template used to create a monitor's URL. Reference a parameter by its {{name}}. When there is only one possible URL, there is no need to use a parameter.",
  h_tpl_url_pattern: "A regular expression to test if this template can be used for a webpage. It is a good idea to capture a group that is name or id. A group can be mapped to parameters in a template. For example, amazon((\\.\\w+)+)/(.*/)*dp/(w+) can be used to match products at all Amazon websites. It captures TLD and product id. Use regex101.com for tests.",
  h_tpl_url_ref: "URL of the webpage that is used to create and test following regular expression.",
  h_try_later: "Please try again later.",
  h_xpath: "XPath expression to select elements",
  l_welcome: "Welcome",
  l_account: "Account",
  l_account_credit: "Account credit",
  l_actions: "Actions",
  l_active: "active",
  l_action_email: "Email",
  l_action_local_audio: "Audio Notification (for local monitor)",
  l_action_local_popup: "Popup Notification (for local monitor)",
  l_action_macro: "Run Macro",
  l_action_none: "Unknown action type",
  l_action_push: "Push Notification (Using Distill's iOS or Android App)",
  l_action_sms: "SMS",
  l_action_webhook: "Webhook Call",
  l_added_text: "Added text",
  l_advanced: "Advanced",
  l_all: "All",
  l_any: "Any",
  l_apps: "Apps",
  l_asian_koel: "Asian Koel",
  l_available: "Available",
  l_available_na: "Not available!",
  l_brwsr: "Brwsr",
  l_bell_strike: "Bell Strike",
  l_changed_on: "Last changed on",
  l_check_log: "Check log",
  l_conditions: "Conditions",
  l_connect: "Connect",
  l_credit: "Credit",
  l_css_selector: "CSS Selector",
  l_device: "Device",
  l_device_this: "this device",
  l_devices: "Devices",
  l_devices_all: "all devices",
  l_data: "Data",
  l_desc: "Description",
  l_developers: "Developers",
  l_device_filter: "Show devices",
  l_done: "Done",
  l_ding_dong: "Ding Dong",
  l_el_selected: "Selected",
  l_el_deselected: "Deselected",
  l_email: "Email",
  l_emails_phones: "Emails & Phones",
  l_error: "Error",
  l_explore: "Explore",
  l_feed: "Feed",
  l_field: "Field",
  l_file: "File",
  l_flags: "Flags",
  l_fullname: "Full Name",
  l_general: "General",
  l_get_access: "Get early access",
  l_get_started: "Get started",
  l_has: "has",
  l_has_not: "does not have",
  l_has_num_gt: "has number more than (>)",
  l_has_num_lt: "has number less than (<)",
  l_has_num_decr_min: "has number that decreased more than (-\u0394 >)",
  l_has_num_incr_min: "has number that increased more than (+\u0394 >)",
  l_header: "Header",
  l_headers: "Headers",
  l_help: "Help",
  l_help_support: "Help and support",
  l_js: "JavaScript",
  l_label: "Label",
  l_learn_more: "Learn More",
  l_loading: "Loading",
  l_macro: "Macro",
  l_match_regex: "matches regular expression",
  l_month: "month",
  l_name: "Name",
  l_name_or_email: "Username or Email",
  l_never: "Never",
  l_none: "None",
  l_not_empty: "is not empty",
  l_num: "Number",
  l_options: "Options",
  l_opt_force_bg: "Background (dynamic content won't work)",
  l_opt_bgtab: "Tab",
  l_opt_bgwindow: "Window",
  l_page_size: "Page size",
  l_password: "Password",
  l_pdf: "PDF",
  l_phone: "Phone Number",
  l_preview: "Preview",
  l_pricing: "Pricing",
  l_prompt: "Prompt",
  l_read: "Read",
  l_referral: "Referral",
  l_regexp: "Regular Expression",
  l_regexp_filter: "RegExp Filter",
  l_reset_sel: "Reset Selections",
  l_rule: "Condition",
  l_rule_group: "Compound Condition",
  l_rule_true_if_matches_x: "True if matches",
  l_saving: "Saving...",
  l_schedule: "Schedule checks",
  l_schedule_live: "Live",
  l_search_input_label: "Enter the website url here",
  l_search_label: "Tell us the website to track",
  l_selector: "Selector",
  l_select_el: "Select Elements",
  l_selection_config: "Selection Config",
  l_settings: "Settings",
  l_signed_in_as: "Signed in as %s",
  l_sieve_tpl_list: "Templates",
  l_sort_by: "Sort by",
  l_source: "Source",
  l_sources: "Sources",
  l_subscription: "Subscription",
  l_sync: "Sync",
  l_syncing: "Syncing data...",
  l_syncing_wait: "Syncing data. It may take some time to sync numerous changes!",
  l_text: "Text",
  l_text_filter: "Text filter",
  l_time_changed_on: "Time changed on",
  l_tone: "Tone",
  l_tos: "Terms of service",
  l_tpl: "Template",
  l_tpl_desc_name: "Name",
  l_tpl_desc_url: "Homepage",
  l_tpl_desc_info: "Description",
  l_tpl_config: "Selection Config",
  l_tpl_params: "Parameters",
  l_tpl_uri: "URL",
  l_trash: "Trash",
  l_unread: "Unread",
  l_unsaved: "Unsaved",
  l_untitled: "Untitled",
  l_unverified: "Unverified",
  l_url: "URL",
  l_uri_match_group_param_map: "Parameter map",
  l_uri_pattern: "Pattern to match URL",
  l_uri_ref: "Test URL",
  l_usage: "Usage",
  l_username: "Username",
  l_value: "Value",
  l_verification_code: "Verification Code",
  l_verification_req: "Verification Required",
  l_visual_selector: "Visual Selector",
  l_vs_bookmarklet: "Visual Selector Bookmarklet",
  l_waiting: "Waiting",
  l_watchlist: "Watchlist",
  l_webpage: "Webpage",
  l_x_of_following_rules: "of following conditions",
  l_xml: "XML (beta)",
  l_json: "JSON",
  l_xpath: "XPath",
  l_year: "year",
  m_1_day: "1 day",
  m_n_day: "%d days",
  m_1_hour: "1 hour",
  m_n_hour: "%d hours",
  m_1_minute: "1 min",
  m_n_minute: "%d mins",
  m_1_second: "1 sec",
  m_n_second: "%d secs",
  m_account_credit: "%1$d USD will be credited to your account.",
  m_account_credit_minus: "%1$d USD will be deducted from your account credit.",
  m_action_can_add_only_one: "Action already added. Cannot add another.",
  m_autohide_popup: "Auto-hide notification popup after",
  m_brwsr_data_discard: "Note: Browsing data will be discarded after remote browser is closed.",
  m_check_local_only: "Only local monitors can be checked for changes.",
  m_coming_soon: "Coming soon",
  m_confirm_plan_change: "Please confirm that you would like to change the plan.",
  m_del_item: "Moved one item to trash.",
  m_del_items: "Moved %1$s items to trash.",
  m_deleted_action: "Deleted action",
  m_dont_show: "Don't show again",
  m_enter_valid_url: "Please enter a valid URL.",
  m_enter_feed_url: "Enter URL of a feed or a page containing the feed",
  m_enter_pdf_url: "Enter URL of a PDF file",
  m_enter_xml_url: "Enter URL of an XML file",
  m_feed_finding: "Looking for feeds in webpage...",
  m_feed_multi_selection: "Found multiple feeds in page. Pick one!",
  m_free_trial_days_left: "Multiple feeds found, pick one!",
  m_free_trial_end: "Your FREE trial is coming to an end soon.",
  m_free_trial_ending_soon: "Your free trial has ended. You should upgrade now or switch to the Free plan.",
  m_free_trial_till: "Your free trial lasts till %1$s.",
  m_firefox_only: "Only for Firefox",
  m_initial_charge_amount: "Account will be charged $%1$d. It is a prorated fee for %2$s plan till %3$s.",
  m_load_page_options: "Load pages that can't be loaded in background in",
  m_log_na: "Log is empty. Logs appear after the source is checked for updates.",
  m_login_success: "Login successful",
  m_max_workers: "Maximum number of concurrent workers",
  m_never: "Never",
  m_popup_empty: "Recent updates from your Watchlist appear here. Get started by monitoring a few webpages.",
  m_premium_only: "For paid customers",
  m_pwd_reset_req_sent: "Please check your inbox for the password reset link",
  m_referral_info: "Send your friends $10 in Distill credit. Earn $20 credit for each one that signs up and upgrades account.",
  m_referral_tweet: "Tweet to invite you friends",
  m_referral_tweet_msg: "Distill monitors web and notifies instantly. Join now and get $10 in free credit!",
  m_regex_group_na: "There is no group in url pattern.",
  m_restored_from_trash: "Restored monitors from Trash.",
  m_save_selections_none: "There is no selection to save.",
  m_saved: "Saved",
  m_saved_action: "Saved action",
  m_saved_schedule: "Saved changes to schedule",
  m_selection_discarded: "Selection canceled",
  m_selection_saved: "Selection complete",
  m_sent_verify: "Sent verification request",
  m_sieve_data_na: "No older history found",
  m_sign_in_req: "Sign in to view details.",
  m_start_end_of_total: "%1$s-%2$s of %3$s",
  m_subscription_cancelled: "Subscription cancelled.",
  m_sync_monitors: "Sync monitors across devices.",
  m_sync_to_save: "Sync to cloud to save local changes",
  m_try_later: "Please try again later.",
  m_unique_referral_link: "Your unique referral link",
  m_verification_code: "You will receive a message with a code on your %1$s. Please enter the code below to verify it.",
  m_vs_bookmarklet: "Drag me to bookmarks toolbar. Then open a webpage in your browser and click the bookmarklet to select parts from it and add to Distill.",
  m_vs_help: "Select elements on page to watch for changes. Multiple elements can be selected. Ignore a child element by clicking on the element within an existing selection. Watched element is marked by black box and ignored element is marked by red box.",
  m_vs_intro_main: "Visual Selector starts a browser in the cloud for remote interaction.",
  m_vs_intro_msg1: "Go to a webpage using the urlbar.",
  m_vs_intro_msg2: "Use selector tools to select and save content from the opened webpage.",
  m_vs_page_loading_try_later: "Uh oh! It seems that the page has not finished loading! Please try again after page has finished loading.",
  m_vs_sel_preview: "Select elements to see preview of selected text.",
  m_xframe_notice: "When checking for updates, this page will be opened in a tab or a window on this device. You can load it in background by disabling JavaScript (set dynamic to false in config).",
  l_add_monitor: "Add Monitor",
  t_updates: "Updates",
  a_bulk_edit: "Batch Edit",
  a_create: "Create",
  a_export: "Export",
  a_feeds: "Feeds",
  a_import: "Import",
  a_clear_error: "Clear Error Flag",
  a_send: "Send",
  h_error_notif_desc: "Error notification appears: 1. For the first time, when any monitor encounters consecutive errors and 2. In regular intervals if further errors are encountered.",
  h_schedule_constraint_1: "Minimum interval for your account is ",
  h_schedule_constraint_2: "Use local monitor for smaller interval or ",
  h_schedule_random: "Set minimum and maximum interval in seconds to schedule checks",
  l_action_local_open_tab: "Open Page In Tab (for local monitor)",
  l_action_discord: "Discord Notification",
  l_action_slack: "Slack Notification",
  l_buzzer: "Buzzer",
  l_confused: "Confused",
  l_discord: "Discord Webhook URL",
  l_dissatisfied: "Dissatisfied",
  l_feedback: "Send Feedback?",
  l_happy: "Happy",
  l_has_num_decr_percent_min: "has number that decreased more than percent (-\u0394% >)",
  l_has_num_incr_percent_min: "has number that increased more than percent (+\u0394% >)",
  l_notification_sound: "Notification Sound",
  l_opt_sticky_tabs: "Sticky Tabs",
  l_opt_sticky_window: "Sticky Window",
  l_random: "Random",
  l_sad: "Sad",
  l_schedule_live_desc: "Check webpages that auto-update content (e.g. a ticker). For local monitors only.",
  l_slack: "Slack Incoming Webhook URL",
  l_suggestion: "Suggestion",
  l_text_old: "Previous text",
  l_time_slots: "Time Slots For Checks",
  l_monday: "Monday",
  l_tuesday: "Tuesday",
  l_wednesday: "Wednesday",
  l_thursday: "Thursday",
  l_friday: "Friday",
  l_saturday: "Saturday",
  l_sunday: "Sunday",
  l_time_slots_start: "Start Time",
  l_time_slots_end: "End Time",
  l_time_slots_day: "Days",
  l_time_slots_enabled: "Enable checks by time slots",
  m_day_warning: "Warning! Slot timings were changed!",
  m_ext_signin: "Sign in to connect with cloud and sync data across connected devices.",
  m_history_empty: "History is empty. Details will appear once it is checked for updates.",
  m_send_feedback: "Send Feedback?",
  m_sticky_window_timeout: "Specify time after which sticky window will close due to inactivity (in minutes) ",
  m_sticky_window_warning: "When using sticky window, Distill will try its best to restore your tabs on startup.",
  m_sticky_tab_timeout: "Specify time after which sticky tab will close due to inactivity (in minutes) ",
  m_subscription_renewal: "Subscription is renewed on 1st of every month. To cancel this subscription, change to Free plan.",
  m_thank_you: "Thank You!",
  e_auth_400: "Please enter valid username and password!",
  e_auth_402: "Please remove other devices or upgrade account. Reached maximum number of devices!",
  e_auth_403: "Forbidden",
  e_auth_5xx: "Please try again later, unexpected error encountered.",
  m_monitor_constraint_1: "Used %1$d of %2$d available monitors. Unable to add a new monitor.",
  m_monitor_constraint_2: "Please follow one of the following options to add new monitors:",
  m_monitor_constraint_3: "Move a few monitors to trash and try again.",
  a_go_to_billing: "Go to billing",
  m_monitor_constraint_4: "Upgrade your plan to increase the limit.",
  m_monitor_limit: "Monitor Limit Exceeded",
  a_signout: "Sign Out",
  m_embedded_opt: "Show embedded icon in pages opened by Distill",
  l_left: "Left",
  l_right: "Right",
  l_top: "Top",
  l_bottom: "Bottom",
  l_dock: "Dock Position",
  a_login: "Login",
  a_forgot_pass: "Forgot password?",
  l_used: "%1$d out of %2$d used",
  l_billing: "Billing",
  l_usage_stats: "Usage Analytics",
  l_support: "Support",
  a_sign_out: "Sign Out",
  l_admin: "Admin Console",
  m_enter_doc_url: "Enter URL of a DOC or DOCX file",
  l_doc: "Word document",
  m_lose_monitors: "You will lose %1$d monitors",
  m_resend_modal: "Verification",
  a_resend: "Resend",
  m_resend: "Do you want to resend verification message?",
  l_snapshot: "View Snapshot",
  l_proxy_server: "Proxy Servers",
  h_proxy_server: "Select Proxies, add to monitor.",
  m_checks_paused: "Checks are paused; Click Distill icon in the browser toolbar and click ON button to start checks.",
  m_enterprise_only_feature: "This feature is only available for the enterprise users right now.",
  m_started_check_for_changes: "Started the checks for changes",
  m_check_for_changes_failed: "Could not check for changes",
  rule_comma_dot: "Format 1: 4,294,967,295.000",
  rule_dot_comma: "Format 2: 4.294.967.295,000",
  rule_space_comma: "Format 3: 4 294 967 295,000",
  l_num_format: "Number Format",
  title_num_format: "Number format used for parsing the numbers from the text.",
  title_format_option_comma_dot: ", as Thousands separator and . as Decimal Separator",
  title_format_option_dot_comma: ". as Thousands separator and , as Decimal Separator",
  title_format_option_space_comma: "' ' as Thousands separator and , as Decimal Separator",
  m_upgrade_account: "Upgrade Account",
  err_select_datasource: "Please select a datasource.",
  err_invalid_datasource_selected: "The selected datasource is not available anymore, please select one from the available datasources.",
  m_no_datasource_available: "No datasources are available for this website.",
  m_err_datasource: "Error while executing the datasource.",
  m_datasources_info_title: "All about Datasources",
  m_datasources_info_1: "Offers a data-driven view instead of the web page view that will eliminate false notifications.",
  m_datasources_info_2: "Unlike visual selectors, they are managed by Distill.io, so that we can make sure that data is monitored accurately.",
  m_datasources_info_3: "And, you don't have to worry about the configurations of selectors, delay or authentication.",
  a_show_more_info: "Show more info",
  m_datasource_request: "Let us know if we should create a datasource for the provided URL too",
  m_datasource_request_description: "More info, like fields to be included",
  m_datasource_request_success: "Datasource request submitted successfully",
  err_datasource_request_submit: "Error while submitting datasource request",
  a_submit: "Submit",
  l_monitor: "Monitor",
  l_uptime: "Uptime",
  l_datasource: "Datasource"
};
var lang = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": MESSAGES
});
window.LANG = MESSAGES;
async function loadLang(locale) {
  let mod = await loadModule(locale);
  if (mod) {
    window.LANG = mod.default;
  }
  i18n.init(window.LANG);
}
async function loadModule(locale) {
  switch (locale) {
    case "de":
      return await __vitePreload(() => import("./lang.bdad48e8.js"), true ? ["assets/lang.bdad48e8.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "en-US":
      return await __vitePreload(() => Promise.resolve().then(function() {
        return lang;
      }), true ? void 0 : void 0);
    case "es":
      return await __vitePreload(() => import("./lang.d9a9fa4b.js"), true ? ["assets/lang.d9a9fa4b.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "fr":
      return await __vitePreload(() => import("./lang.9b0a9d04.js"), true ? ["assets/lang.9b0a9d04.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "it":
      return await __vitePreload(() => import("./lang.ca6d3a41.js"), true ? ["assets/lang.ca6d3a41.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "ja":
      return await __vitePreload(() => import("./lang.9454ad6d.js"), true ? ["assets/lang.9454ad6d.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "pl":
      return await __vitePreload(() => import("./lang.77441015.js"), true ? ["assets/lang.77441015.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "pt":
      return await __vitePreload(() => import("./lang.e9e54d1e.js"), true ? ["assets/lang.e9e54d1e.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "ru":
      return await __vitePreload(() => import("./lang.9b7e1685.js"), true ? ["assets/lang.9b7e1685.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "sr":
      return await __vitePreload(() => import("./lang.6ffdecc9.js"), true ? ["assets/lang.6ffdecc9.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    case "zh":
      return await __vitePreload(() => import("./lang.0bdc824a.js"), true ? ["assets/lang.0bdc824a.js","assets/vendor.c17c97a4.js","assets/vendor.3fe7baf8.css"] : void 0);
    default:
      throw new Error("unhandled language:" + locale);
  }
}
var Supports = {
  user: 1,
  email: 1,
  phone: 0,
  isSignedIn: async function() {
    return await Service.auth.getToken() != null;
  },
  agents: {
    local: 1,
    type: async () => {
      if (Service.proxy)
        return await Service.proxy.CFG.CLIENT.TYPE;
      else
        return Service.CFG.CLIENT.TYPE;
    },
    version: async () => {
      if (Service.proxy)
        return await Service.proxy.CFG.VERSION;
      else
        return Service.CFG.VERSION;
    }
  },
  actions: {
    popup: true
  },
  tabForDynamic: Service.Supports.tabForDynamic,
  tabForXFrame: Service.Supports.tabForXFrame
};
const _$1 = window._;
if (!_$1) {
  throw new Error("ADD _");
}
function SPRINTF(format) {
  let params = _$1.toArray(arguments).slice(1);
  params = _$1.map(params, function(param) {
    return _$1.isString(param) ? T(param) : param;
  });
  return i18n.sprintf(...[T(format)].concat(params));
}
const DescList = [
  {
    type: C.RULE_NOT_EMPTY,
    label: "l_not_empty",
    params: []
  },
  {
    type: C.RULE_HAS_TEXT,
    label: "l_has",
    params: [{
      label: "l_text",
      must: true,
      name: "input",
      type: "text"
    }]
  },
  {
    type: C.RULE_HAS_TEXT_NOT,
    label: "l_has_not",
    params: [{
      label: "l_text",
      must: true,
      name: "input",
      type: "text"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_LT,
    label: "l_has_num_lt",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_GT,
    label: "l_has_num_gt",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_DECR_MIN,
    label: "l_has_num_decr_min",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_INCR_MIN,
    label: "l_has_num_incr_min",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_DECR_PERCENT_MIN,
    label: "l_has_num_decr_percent_min",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_HAS_NUMBER_INCR_PERCENT_MIN,
    label: "l_has_num_incr_percent_min",
    params: [{
      label: "l_num",
      must: true,
      name: "input",
      type: "number"
    }]
  },
  {
    type: C.RULE_MATCH_REGEX,
    label: "l_match_regex",
    params: [{
      label: "l_regex",
      must: true,
      name: "input",
      type: "regexp"
    }]
  }
];
const NumberFormatOptions = {
  label: "l_num_format",
  must: true,
  name: "numberFormat",
  defaultValue: C.NUM_FORMAT_COMMA_DOT,
  type: "enum",
  title: "title_num_format",
  list: [
    {
      label: "rule_comma_dot",
      title: "title_format_option_comma_dot",
      value: C.NUM_FORMAT_COMMA_DOT
    },
    {
      label: "rule_dot_comma",
      title: "title_format_option_dot_comma",
      value: C.NUM_FORMAT_DOT_COMMA
    },
    {
      label: "rule_space_comma",
      title: "title_format_option_space_comma",
      value: C.NUM_FORMAT_SPACE_COMMA
    }
  ]
};
const ContentList = [{
  type: C.CONTENT_TYPE_TEXT,
  label: "l_text"
}, {
  type: C.CONTENT_TYPE_CHANGED_TEXT,
  label: "l_added_text"
}, {
  type: C.CONTENT_TYPE_OLD_TEXT,
  label: "l_text_old"
}];
const NumericConditions = [
  C.RULE_HAS_NUMBER_LT,
  C.RULE_HAS_NUMBER_GT,
  C.RULE_HAS_NUMBER_DECR_MIN,
  C.RULE_HAS_NUMBER_INCR_MIN,
  C.RULE_HAS_NUMBER_DECR_PERCENT_MIN,
  C.RULE_HAS_NUMBER_INCR_PERCENT_MIN
];
var Rules = {
  ContentList,
  DescList,
  NumberFormatOptions,
  NumericConditions
};
const { Model: Model$2, Collection: Collection$1 } = base$1;
const UserAttr = Model$2.extend({
  urlRoot: "/users/attrs"
});
const UserAttrs = Collection$1.extend({
  model: UserAttr,
  url: "/users/attrs"
});
var AttrModel = {
  UserAttr,
  UserAttrs
};
const Client = base$1.Model.extend({
  urlRoot: "/clients",
  getIcon: function() {
    let iconClass;
    const clientType = this.get("type");
    if (this.iconClass) {
      return this.iconClass;
    } else if (this.id == Clients.webAppId) {
      iconClass = "fa fa-cloud";
    } else if (this.id == App.clients.defaultId) {
      iconClass = "im-pc";
    } else if (clientType == C.CLIENT_FF) {
      iconClass = "im-firefox";
    } else if (clientType == C.CLIENT_CR) {
      iconClass = "im-chrome";
    } else if (clientType == C.CLIENT_OP) {
      iconClass = "im-opera";
    } else if (clientType == C.CLIENT_FFWX) {
      iconClass = "im-firefox";
    } else {
      iconClass = "im-globe";
    }
    return this.iconClass = iconClass;
  },
  getInfo: function() {
    let info = this.get("info") || this.get("name");
    if (this.id == App.clients.defaultId) {
      info += " (this device)";
    }
    return info;
  },
  isWeb: function() {
    return this.id === Clients.webAppId;
  }
});
var Clients = base$1.Collection.extend({
  model: Client,
  url: "/clients",
  fetch(options = { data: { "state.in": [0, 30], "_opt": { order: ["ts"] } } }) {
    return Clients.__super__.fetch.call(this, options);
  }
}, {
  webAppId: C.CLIENT_WEB,
  anyLocalId: C.CLIENT_ANY
});
var ModelClient = {
  Client,
  Clients
};
class Base {
  constructor(initialState = {}, options) {
    Object.assign(this, options);
    this.el = this.el || document.createElement(this.tag);
    this.el.setAttribute("viewclass", this._getCName());
    this.state = new Proxy(initialState, {
      set: (obj, prop, value) => {
        if (obj[prop] !== value) {
          obj[prop] = value;
          !this._renderTimeout && this._render();
        }
        return true;
      },
      deleteProperty: (target, prop) => {
        if (prop in target) {
          delete target[prop];
          !this._renderTimeout && this._render();
          return true;
        }
        return false;
      }
    });
    this.views = new Proxy({}, {
      set: (obj, prop, value) => {
        if (obj[prop] !== value) {
          obj[prop] = value;
          this._render();
        }
        return true;
      }
    });
    this.init();
    this._render();
  }
  createTpl() {
    throw new Error(`View should implement createTpl(state)`);
  }
  init() {
  }
  _render() {
    if (this._renderTimeout) {
      clearTimeout(this._renderTimeout);
    }
    this._renderTimeout = setTimeout(() => {
      delete this._renderTimeout;
      render(this.createTpl(this.state), this.el);
      this.afterRender();
    }, 1);
  }
  afterRender() {
  }
  setState(newState) {
    for (const key in newState) {
      if (this.state[key] !== newState[key]) {
        this.state[key] = newState[key];
      }
    }
  }
  _getCName() {
    return this.constructor.name;
  }
}
Base.prototype.tag = "div";
const Backbone = window.Backbone;
if (!Backbone) {
  throw new Error("ADD Backbone");
}
const moment = window.moment;
if (!moment) {
  throw new Error("ADD moment");
}
const { Model, Collection } = base$1;
var Schedule = Backbone.Model.extend({
  defaults: function() {
    return {
      type: "INTERVAL",
      params: new Model({
        interval: 10800
      })
    };
  },
  getFrequencyClass: function() {
    let { params, type } = this.attributes;
    params || (params = this.defaults());
    const interval = params.attributes.interval;
    let cls = "";
    if (interval) {
      if (interval < 60) {
        cls = "xfreq-xh";
      } else if (interval < 600) {
        cls = "xfreq-hi";
      } else {
        cls = "xfreq";
      }
    } else if (type == "LIVE") {
      cls = "xfreq-hi";
    }
    return cls;
  },
  getShortDisplayText: function() {
    const attrs = this.attributes;
    const params = attrs.params && attrs.params.attributes;
    const interval = params.interval;
    if (attrs.type == "LIVE") {
      return T("l_schedule_live");
    }
    if (attrs.type == "RANDOM") {
      return this.formatInterval(params.min, true) + "-" + this.formatInterval(params.max, true);
    }
    if (attrs.type == "CRON") {
      return "cron";
    }
    if (!interval) {
      return T("m_never");
    }
    return this.formatInterval(interval);
  },
  formatInterval: function(interval, terse) {
    let unit;
    let value;
    if (interval < 60) {
      unit = "second";
      value = interval;
    } else if (interval < 3600) {
      unit = "minute";
      value = interval / 60;
    } else if (interval < 86400) {
      unit = "hour";
      value = interval / 3600;
    } else if (interval < 2592e3) {
      unit = "day";
      value = interval / 86400;
    } else {
      return T("m_never");
    }
    value = Math.round(value);
    if (terse) {
      return value + unit[0];
    } else {
      return i18n.translate("m_1_" + unit).ifPlural(value, T("m_n_" + unit)).fetch(value);
    }
  },
  parse: function(response) {
    response.params = new Backbone.Model(__spreadValues({}, response.params), { parse: true });
    return response;
  },
  toJSON: function() {
    const json = Schedule.__super__.toJSON.call(this);
    json.params = json.params.toJSON();
    return json;
  }
});
const LocatorDescList = [
  {
    type: "css",
    label: "l_css_selector",
    params: [{
      label: "l_css_selector",
      help: "h_css_selelctor",
      must: true,
      name: "expr",
      type: "css"
    }]
  },
  {
    type: "js",
    label: "l_js",
    params: [{
      label: "l_js",
      help: "h_js",
      must: true,
      name: "expr",
      type: "js"
    }]
  },
  {
    type: "xpath",
    label: "l_xpath",
    params: [{
      label: "l_xpath",
      help: "h_xpath",
      must: true,
      name: "expr",
      type: "xpath"
    }]
  }
];
const Locator = Backbone.Model.extend({
  defaults: {
    type: "xpath"
  },
  toJSON: function() {
    const json = Frame.__super__.toJSON.call(this);
    delete json.id;
    return json;
  }
});
const Locators = Backbone.Collection.extend({
  model: Locator,
  initialize: function(attrs, options) {
    Locators.__super__.initialize.call(this, attrs, options);
    this.frame = options.frame;
  }
});
var Frame = Backbone.Model.extend({
  parse: function(response) {
    response.excludes = new Locators(response.excludes, {
      parse: true,
      frame: this
    });
    response.includes = new Locators(response.includes, {
      parse: true,
      frame: this
    });
    return response;
  },
  toJSON: function() {
    const json = Frame.__super__.toJSON.call(this);
    json.excludes = json.excludes.toJSON();
    json.includes = json.includes.toJSON();
    if (json.index === 0) {
      delete json.title;
      delete json.uri;
    }
    return json;
  }
});
const Frames = Backbone.Collection.extend({
  model: Frame
});
var Page = Model.extend({
  defaults: {
    dynamic: true,
    delay: 2
  },
  addLocator: function(frameConfig, op, attrs) {
    const frames = this.get("frames");
    let frame = frames.findWhere({ index: frameConfig.index });
    const locator = new Locator(attrs);
    if (!frame) {
      frame = new Frame(frameConfig, { parse: true });
      frames.add(frame);
    }
    if (op == "EXCLUDE") {
      frame.get("excludes").add(locator);
    } else {
      frame.get("includes").add(locator);
    }
    return locator;
  },
  createDefaultSelection: function() {
    this.addLocator({ index: 0 }, "INCLUDE", { type: "css", expr: "body" });
  },
  getLocator: function(frameIndex, id) {
    const frames = this.get("frames");
    const frame = frames.findWhere({ index: frameIndex });
    return frame.get("excludes").get(id) || frame.get("includes").get(id);
  },
  isEmpty: function() {
    const frame = this.get("frames").at(0);
    return !frame || frame.get("includes").length === 0;
  },
  parse: function(response) {
    response.frames = new Frames(response.frames, { parse: true });
    return response;
  },
  removeLocator: function(frameIndex, id) {
    const frames = this.get("frames");
    const frame = frames.findWhere({ index: frameIndex });
    const excludes = frame.get("excludes");
    const includes = frame.get("includes");
    let model;
    if (model = excludes.get(id)) {
      excludes.remove(model);
    } else if (model = includes.get(id)) {
      includes.remove(model);
    } else {
      throw new Error("Frame does not contain selection with id: " + id);
    }
  },
  toJSON: function() {
    const json = Page.__super__.toJSON.call(this);
    json.frames = json.frames.toJSON();
    delete json.title;
    delete json.uri;
    return json;
  }
});
const Pages = Collection.extend({
  model: Page,
  parse: function(res) {
    return res;
  }
});
const SieveConfig = Model.extend({
  isEmpty: function() {
    return false;
  }
});
const SieveConfigFeed = SieveConfig.extend();
const SieveConfigPDF = SieveConfig.extend();
const SieveConfigNA = SieveConfig.extend();
const SieveConfigXML = SieveConfig.extend({
  defaults: {
    ignoreEmptyText: true,
    dataAttr: "text"
  }
});
const SieveConfigJSON = SieveConfig.extend({
  constructor: function(attrs, options) {
    this.datasource_id = options.datasource_id;
    SieveConfigJSON.__super__.constructor.call(this, attrs, options);
  },
  defaults() {
    let attrs = {
      filters: {
        inculded: []
      }
    };
    switch (this.datasource_id) {
      case null:
      case void 0:
      case C.DS_ID_JSON:
      case C.DS_ID_UPTIME:
        attrs.request = {
          method: "GET",
          headers: [],
          body: {
            type: "none"
          }
        };
        break;
    }
    return attrs;
  }
});
const SieveConfigDOC = SieveConfig.extend({
  defaults: {
    ignoreEmptyText: true,
    dataAttr: "text"
  }
});
var SieveConfigHTML = Model.extend({
  __structure__: {
    includeStyle: false,
    includeScript: false,
    selections: [{
      title: "Distill",
      uri: "https://distill.io",
      frames: [{
        index: 0,
        excludes: [{
          type: "xpath",
          expr: ""
        }],
        includes: [{}]
      }]
    }]
  },
  defaults: {
    ignoreEmptyText: true,
    includeStyle: false,
    dataAttr: "text"
  },
  createDefaultPage: function() {
    const page = new Page({
      frames: [{ index: 0 }],
      dynamic: true
    }, { parse: true });
    page.createDefaultSelection();
    this.set("selections", new Pages([page]));
  },
  getExcludes: function() {
    const selections = this.get("selections").toJSON();
    return _.chain(selections).pluck("frames").flatten().pluck("excludes").flatten().value();
  },
  getIncludes: function() {
    const selections = this.get("selections").toJSON();
    return _.chain(selections).pluck("frames").flatten().pluck("includes").flatten().value();
  },
  getPage: function() {
    const selections = this.get("selections");
    return selections && selections.at(0);
  },
  isEmpty: function() {
    return this.getIncludes().length == 0;
  },
  parse: function(response) {
    response.selections = new Pages(response.selections, { parse: true });
    if (_.isString(response.regexp)) {
      response.regexp = { expr: response.regexp, flags: "gim" };
    }
    return response;
  },
  toJSON: function() {
    const json = SieveConfigHTML.__super__.toJSON.call(this);
    json.selections = json.selections.toJSON();
    return json;
  }
});
function clientAny() {
  return true;
}
function clientNone() {
  return false;
}
function clientWeb({ id }) {
  return id == C.CLIENT_WEB;
}
var Sieve = Model.extend({
  ANON_ACCESSIBLE_TYPES: [
    C.TYPE_HTML,
    C.TYPE_FEED
  ],
  TYPES: [{
    type: C.TYPE_HTML,
    name: "Webpage",
    client: clientAny
  }, {
    type: C.TYPE_FEED,
    name: "Feed",
    client: clientAny
  }, {
    type: C.TYPE_XML,
    name: "XML",
    client: clientWeb
  }, {
    type: C.TYPE_PDF_HTML,
    name: "PDF",
    client: clientWeb
  }, {
    type: C.TYPE_DOC,
    name: "Word Document",
    client: clientWeb
  }, {
    type: C.TYPE_JSON,
    name: "JSON",
    client: clientWeb
  }],
  encodedFields: ["config", "schedule"],
  urlRoot: "/sieves",
  defaults: function() {
    return {
      schedule: new Schedule()
    };
  },
  getExcludes: function() {
    const config = this.get("config");
    return config && config.getExcludes() || [];
  },
  getIncludes: function() {
    const config = this.get("config");
    return config && config.getIncludes() || [];
  },
  getPage: function() {
    const config = this.get("config");
    return config && config.getPage();
  },
  getTags: function(fromTags) {
    let tag;
    const tags = [];
    const tagIds = (this.get("tags") || "").split(",");
    _.each(tagIds, function(id) {
      tag = fromTags && fromTags.get(id);
      tag && tags.push(tag);
    });
    return tags;
  },
  isDynamic: function() {
    const config = this.get("config");
    if (config) {
      const selections = config.get("selections");
      if (selections && selections.length > 0) {
        const page = selections.at(0);
        return page.attributes.dynamic === true;
      }
    }
    return false;
  },
  isEmpty: function() {
    const config = this.get("config");
    return !config || config.isEmpty();
  },
  isRead: function() {
    return moment(this.get("ts_view")) >= moment(this.get("ts_data"));
  },
  markRead: function() {
    if (!this.isRead()) {
      const tags = this.getTags(App.labels);
      const tagIds = tags.map((tag) => tag.id);
      return this.save({
        tags: tagIds.join(","),
        ts_view: moment().format()
      }, {
        patch: true
      });
    }
  },
  moveToTrash() {
    this.save({ state: C.STATE_DISCARD }, { patch: true });
  },
  parse: function(response) {
    response = Sieve.__super__.parse.call(this, response);
    let config = response.config;
    if (config) {
      if (response.content_type == C.TYPE_FEED) {
        response.config = new SieveConfigFeed(config);
      } else if (response.content_type == C.TYPE_HTML) {
        response.config = new SieveConfigHTML(config, { parse: true });
      } else if (response.content_type == C.TYPE_PDF_HTML) {
        response.config = new SieveConfigPDF(config, { parse: true });
      } else if (response.content_type == C.TYPE_XML) {
        response.config = new SieveConfigXML(config, { parse: true });
      } else if (response.content_type == C.TYPE_DOC) {
        response.config = new SieveConfigDOC(config, { parse: true });
      } else if (response.content_type == C.TYPE_JSON) {
        response.config = new SieveConfigJSON(config, {
          parse: true,
          datasource_id: response.datasource_id
        });
      } else {
        response.config = new SieveConfigNA(config, { parse: true });
      }
    }
    if (response.schedule) {
      response.schedule = new Schedule(response.schedule, { parse: true });
    }
    return response;
  },
  getTypeDesc() {
    let content_type = this.attributes.content_type;
    let desc = this.TYPES.filter(({ type }) => type == content_type)[0];
    if (!desc) {
      desc = {
        type: content_type,
        client: clientNone,
        name: "<none>"
      };
    }
    return desc;
  },
  getAccessibleClients(clients) {
    let type = this.getTypeDesc();
    return clients.filter((client) => type.client(client));
  },
  async getAccess(user) {
    if (user.isLoggedIn()) {
      try {
        return await Api.api(`/users/sieve-access/${this.attributes.content_type}`);
      } catch (e) {
        console.error("error getting sieve-access", e);
        return { hasAccess: true };
      }
    } else {
      let hasAccess = this.ANON_ACCESSIBLE_TYPES.includes(this.attributes.content_type);
      return {
        hasAccess,
        minPlan: null
      };
    }
  },
  getTypeName() {
    let type = this.getTypeDesc();
    return type.name;
  }
});
const Sieves = base$1.PagedCollection.extend({
  model: Sieve,
  url: "/sieves"
});
const SieveRule = Model.extend({
  encodedFields: ["config"],
  urlRoot: "/rules",
  defaults: function() {
    return {
      config: {
        type: Rules.TYPE_RULE_GROUP,
        op: Rules.OP_AND,
        rules: []
      }
    };
  },
  isEmpty: function() {
    const cfg = this.get("config");
    return !(cfg && cfg.rules.length > 0);
  }
});
const Work = Model.extend({
  encodedFields: ["err", "data"]
});
const Works = Collection.extend({
  model: Work,
  initialize: function(models, options) {
    Works.__super__.initialize.call(this, models, options);
    this.parent = options.parent;
    this.on("add", this.onAdd, this);
  },
  onAdd: function(model) {
    model.parent = this.parent;
  },
  url: function() {
    let route = "works";
    const clientId = this.parent.get("client_id");
    if (Supports.agents.local && clientId != ModelClient.Clients.webAppId) {
      route = "works/local";
    }
    return ["/sieves", this.parent.id, route].join("/");
  }
});
class SimpleAttrList extends Base {
  constructor(name) {
    super({
      name,
      available: false,
      list: [],
      loading: true,
      newValue: ""
    });
    this.fetch();
  }
  async fetch() {
    let constraint = await Api.api("/users/constraints");
    if (constraint.plan_id[0] !== "0") {
      this.state.available = true;
    }
    let attrs = await Api.api("/users/attrs", {
      name: this.state.name,
      "state.in": [10, 40]
    });
    this.state.loading = false;
    this.state.list = attrs.data;
  }
  createTpl({ loading, available, list, name }) {
    return loading ? html`Loading` : !available ? html`It is currently only available for paid customers.` : html`
      <ul class='list-group'>
      ${list.map((attr) => attr.value == USER.email ? "" : html`<li class='list-group-item' id=${attr.id}>
        <span>${attr.value}</span>
        <div class='right'>
          <button class='btn btn-default btn-xs' @click=${(e) => this.onDel(attr.id)}>
            Delete
          </button>
        <div>
        </li>`)}
      </ul>
      <div class='input-group'>
        <input class='form-control' type='text' placeholder='Enter new ${name}' 
          @input=${(e) => this.state.newValue = e.target.value}
          .value=${this.state.newValue}
          >
        <span class='input-group-btn'>
          <button @click=${(e) => this.onAdd()} class='btn btn-primary'>Add</button>
        </span>
      </div>
      `;
  }
  async onAdd() {
    let value = this.state.newValue.trim();
    if (value.length > 0) {
      await Api.api("/users/attrs", "POST", { name: this.state.name, value });
      this.fetch();
    }
    this.state.newValue = "";
  }
  async onDel(id) {
    await Api.api(`/users/attrs/${id}`, "DELETE");
    this.fetch();
  }
}
var UserAttrOptionsPlugin = Editor.SelectOptionsPlugin.extend({
  action_edit: function() {
    const view = new View.Base({
      el: new SimpleAttrList(this.param.name).el
    });
    const modal = new View.Modal({
      title: "Manage List",
      parent: this.editor.getRoot(),
      view
    });
    modal.show();
    this.listenTo(modal, "discard", () => this.fetch());
  },
  fetch: function() {
    this.attrs.fetch({
      data: {
        "name": this.param.name,
        "state.in": [10, 40],
        "_opt": {
          order: ["ts"]
        }
      }
    });
  },
  getOptionLabel: function(model) {
    return model.get(this.attrLabel) + (model.get("state") == 10 ? " - unverified" : "");
  },
  load: function() {
    this.attrs = new AttrModel.UserAttrs();
    this.listenTo(this.editor, "reset", _.bind(this.fetch, this));
    this.listenTo(this.attrs, "sync", _.bind(this.loadData, this));
    this.fetch();
    $(this.separator).attr("label", T("l_loading"));
  },
  onSync: function() {
    const self = this;
    Service.service.SyncMan._syncStore(Service.store.AttrStore, function() {
      self.fetch();
    });
  },
  render: function() {
    UserAttrOptionsPlugin.__super__.render.call(this);
    if (Supports.agents.local && Supports.isSignedIn()) {
      let btn;
      $(this.select).after(" ", btn = BUTTON({ "class": "btn xbtn-light", "title": T("l_sync") }, I({ "class": "fa fa-refresh" })));
      btn.onclick = this.onSync.bind(this);
    }
  },
  renderActions() {
    if (this.param.name == "email") {
      this.select.appendChild(OPTION({ value: "action:edit" }, "Manage List"));
    }
  },
  unload: function() {
    UserAttrOptionsPlugin.__super__.unload.call(this);
    this.attrs.reset();
  }
});
const UserSignInCheckPlugin = Editor.Plugin.extend({
  onSignIn: function() {
    window.location.href = Service.service.serviceLoginUrl;
  },
  render: function() {
    if (Supports.agents.local && !Supports.isSignedIn()) {
      this.a = A({ href: "javascript:void 0" }, B(T("a_signin")));
      $(this.editor.field).hide().after(this.a);
      this.a.onclick = _.bind(this.onSignIn, this);
    }
  }
});
const AudioPlayer = Editor.Plugin.extend({
  play: function() {
    const field = this.editor.field;
    const audio = AUDIO();
    const tone = field.value;
    $(field).after(audio);
    if (tone.indexOf("tone:") == 0) {
      Service.store.KVStore.findOne(tone, function(err, doc) {
        play(doc.value);
      });
    } else {
      play(tone);
    }
    function play(dataOrUrl) {
      audio.src = dataOrUrl;
      audio.play();
    }
  },
  render: function() {
    const field = this.editor.field;
    const a = A({ href: "javascript:void 0" }, T("a_play"));
    $(field).after(" ", a);
    a.onclick = _.bind(this.play, this);
  }
});
const SieveActionDescList = [
  {
    type: C.ACTION_EMAIL,
    label: "l_action_email",
    icon: "fa-envelope-o",
    addByDefault: function(Supports2) {
      return Supports2.user && Supports2.email;
    },
    params: [{
      label: "l_email",
      must: true,
      name: "email",
      type: "email",
      plugins: [UserAttrOptionsPlugin, UserSignInCheckPlugin]
    }]
  },
  {
    type: C.ACTION_PUSH,
    label: "l_action_push",
    icon: "fa-mobile",
    paid: 1,
    single: true,
    addByDefault: function(Supports2) {
      return false;
    },
    params: [],
    plugin: function(editor) {
      const attrs = new AttrModel.UserAttrs();
      attrs.fetch({
        data: {
          "name.in": ["fcm_id", "gcm_id", "apns_id"],
          "state.in": [0, 40],
          "_opt": {
            order: ["ts"],
            limit: 1
          }
        },
        success: function() {
          if (attrs.length == 0) {
            editor.$el.append(P({
              "class": "error",
              "style": "padding:5px"
            }, "App not installed. Install one to get push notifications."));
          }
        }
      });
    }
  },
  {
    type: C.ACTION_SMS,
    label: "l_action_sms",
    icon: "fa-mobile",
    paid: 1,
    addByDefault: function(Supports2) {
      return false;
    },
    params: [{
      label: "l_phone",
      must: true,
      name: "phone",
      type: "phone",
      plugins: [UserAttrOptionsPlugin, UserSignInCheckPlugin]
    }]
  },
  {
    type: C.ACTION_DISCORD,
    label: "l_action_discord",
    icon: "fa-terminal",
    paid: 1,
    addByDefault: function(Supports2) {
      return false;
    },
    params: [{
      label: "l_discord",
      must: true,
      name: "discord",
      type: "url",
      plugins: [UserSignInCheckPlugin]
    }]
  },
  {
    type: C.ACTION_SLACK,
    label: "l_action_slack",
    icon: "fa-slack",
    paid: 1,
    addByDefault: function(Supports2) {
      return false;
    },
    params: [{
      label: "l_slack",
      must: true,
      name: "slack",
      type: "url",
      plugins: [UserSignInCheckPlugin]
    }]
  },
  {
    type: C.ACTION_WEBHOOK,
    label: "l_action_webhook",
    icon: "fa-terminal",
    paid: 1,
    addByDefault: function(Supports2) {
      return false;
    },
    defaults: {
      data: {
        id: "{{sieve.id}}",
        name: "{{sieve.name}}",
        uri: "{{sieve.uri}}",
        text: "{{sieve_data.text}}"
      }
    },
    params: [
      {
        label: "l_url",
        must: true,
        name: "url",
        type: "url",
        values: [{
          name: "sieve.id",
          help: "Monitor's UUID."
        }],
        plugins: [UserSignInCheckPlugin]
      },
      {
        label: "l_data",
        fieldLabel: "l_field",
        must: false,
        name: "data",
        type: "request_data",
        values: [{
          name: "sieve.id",
          help: "Monitor's UUID."
        }, {
          name: "sieve_data.data",
          help: "Data fetched from source. HTML for pages and XML for feeds."
        }, {
          name: "sieve_data.text",
          help: "Readable text extracted from source data."
        }]
      },
      {
        label: "l_headers",
        fieldLabel: "l_header",
        must: false,
        name: "headers",
        type: "request_headers",
        values: []
      }
    ]
  },
  {
    type: C.ACTION_LOCAL_OPEN_TAB,
    label: "l_action_local_open_tab",
    icon: "fa-file-o",
    local: true,
    single: true,
    addByDefault: function() {
      return false;
    },
    params: []
  },
  {
    type: C.ACTION_LOCAL_POPUP,
    label: "l_action_local_popup",
    icon: "fa-comment-o",
    local: true,
    single: true,
    addByDefault: function(Supports2) {
      return Supports2.agents.local;
    },
    params: []
  },
  {
    type: C.ACTION_LOCAL_AUDIO,
    label: "l_action_local_audio",
    icon: "fa-volume-up",
    local: true,
    single: true,
    addByDefault: function(Supports2) {
      return Supports2.agents.local;
    },
    params: [{
      label: "l_tone",
      name: "tone",
      type: "enum",
      must: true,
      list: function() {
        const list = [{
          label: "l_bell_strike",
          value: "/skin/media/bell_strike.ogg"
        }, {
          label: "l_asian_koel",
          value: "/skin/media/asian_koel.ogg"
        }, {
          label: "l_ding_dong",
          value: "/skin/media/ding_dong.ogg"
        }, {
          label: "l_buzzer",
          value: "/skin/media/buzzer.ogg"
        }];
        if (Supports.agents.local) {
          Service.store.KVStore.findOne("tones", function(err, doc) {
            if (doc) {
              const customTones = JSON.parse(doc.value);
              _.each(customTones, function(aTone) {
                list.push(aTone);
              });
            }
          });
        }
        return list;
      }(),
      plugins: [AudioPlayer]
    }]
  }
];
const SieveAction = Model.extend({
  encodedFields: ["config"],
  parent: null,
  defaults: function() {
    const desc = this.desc;
    const defaults = {
      type: desc.type
    };
    if (desc.defaults) {
      defaults.config = _.result(desc, "defaults");
    }
    return defaults;
  },
  initialize: function(attrs, options) {
    Works.__super__.initialize.call(this, attrs, options);
    this.parent = options && options.parent;
  },
  urlRoot: function() {
    const parent = this.parent;
    if (parent == null)
      throw new Error("Parent sieve not set for action");
    return "/sieves/" + parent.id + "/actions";
  }
});
const SieveActionNone = SieveAction.extend({
  desc: {
    type: C.ACTION_NONE,
    label: "l_action_none",
    single: true,
    addByDefault: function(Supports2) {
      return false;
    },
    params: []
  }
});
var SieveActions = Collection.extend({
  initialize: function(models, options) {
    Works.__super__.initialize.call(this, models, options);
    this.parent = options.parent;
    this.on("add", this.onAdd, this);
  },
  onAdd: function(action) {
    action.parent = this.parent;
  },
  parse: function(response) {
    response = SieveActions.__super__.parse.call(this, response);
    return _.map(response, function(attrs) {
      const Type = SieveAction[attrs.type] || SieveActionNone;
      return new Type(attrs, {
        parse: true,
        parent: this.parent
      });
    }, this);
  },
  url: function() {
    return ["/sieves", this.parent.id, "actions"].join("/");
  }
});
if (Supports.agents.local) {
  SieveActionDescList.slice(0).forEach(function(desc, index) {
    if (desc.local) {
      SieveActionDescList.splice(index, 1);
      SieveActionDescList.splice(0, 0, desc);
    }
  });
}
_.each(SieveActionDescList, function(desc) {
  SieveAction[desc.type] = SieveAction.extend({ desc }, { desc });
});
var Model$1 = {
  LocatorDescList,
  Frame,
  Frames,
  Page,
  Pages,
  Schedule,
  Sieve,
  SieveConfigFeed,
  SieveConfigHTML,
  SieveConfigJSON,
  Sieves,
  SieveRule,
  SieveActionDescList,
  SieveAction,
  SieveActions,
  Works,
  ACTION_EMAIL: C.ACTION_EMAIL,
  ACTION_SMS: C.ACTION_SMS,
  ACTION_PUSH: C.ACTION_PUSH
};
export { Api as A, Base as B, C, Editor as E, Model$1 as M, Rules as R, Service as S, T, View as V, Supports as a, Msg$1 as b, ModelClient as c, SPRINTF as d, base$1 as e, Core as f, MESSAGES as g, i18n as i, loadLang as l };
