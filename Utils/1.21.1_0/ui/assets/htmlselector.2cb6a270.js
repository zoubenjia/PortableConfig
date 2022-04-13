import { V as View, T, M as Model, E as Editor, C, S as Service, l as loadLang, A as Api } from "./sieve.9a015b84.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, f as space, v as create_component, a as attr, h as set_style, b as insert, c as append, w as mount_component, A as transition_in, B as transition_out, d as detach, C as destroy_component, t as text, E as empty, K as toggle_class, r as listen, F as group_outros, G as check_outros, L as run_all, o as onMount, _ as subscribe, n as noop } from "./vendor.c17c97a4.js";
import { E as ElWrap } from "./ElWrap.94e1a934.js";
var selector = "";
class Tailwind extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, null, safe_not_equal, {});
  }
}
function Rect(x, y, width, height) {
  const self = this;
  if (self == window || self == void 0)
    return new Rect(x, y, width, height);
  if (typeof x == "object") {
    if (x.nodeType) {
      const box = x.getBoundingClientRect();
      height = box.bottom - box.top;
      width = box.right - box.left;
      y = box.top;
      x = box.left;
    } else {
      height = x.height;
      width = x.width;
      y = x.top;
      x = x.left;
    }
  }
  this.x = function() {
    return x;
  };
  this.y = function() {
    return y;
  };
  this.width = function() {
    return width;
  };
  this.height = function() {
    return height;
  };
  this.add = add;
  this.area = function() {
    return width * height;
  };
  this.clipTo = clipTo;
  this.clone = clone;
  this.move = move;
  this.subtract = subtract;
  function add(aRect) {
    const ax = aRect.x();
    const ay = aRect.y();
    const awidth = aRect.width();
    const aheight = aRect.height();
    const nx = Math.min(x, ax);
    const ny = Math.min(y, ay);
    const nw = Math.max(ax + awidth, x + width) - nx;
    const nh = Math.max(ay + aheight, y + height) - ny;
    return new Rect(nx, ny, nw, nh);
  }
  function clipTo(aRect) {
    const ax = aRect.x();
    const ay = aRect.y();
    const awidth = aRect.width();
    const aheight = aRect.height();
    const nx = clip(ax, x, ax + awidth);
    const ny = clip(ay, y, ay + aheight);
    const nw = clip(ax, x + width, ax + awidth) - nx;
    const nh = clip(ay, y + height, ay + aheight) - ny;
    return new Rect(nx, ny, nw, nh);
    function clip(x1, x2, x3) {
      return x2 > x1 ? x2 < x3 ? x2 : x3 : x1;
    }
  }
  function clone() {
    return new Rect(x, y, width, height);
  }
  function move(dx, dy) {
    const nx = x + dx;
    const ny = y + dy;
    return new Rect(nx, ny, width, height);
  }
  function subtract(aRect) {
    aRect = aRect.clipTo(self);
    if (aRect.area() == 0)
      return [self];
    const rects = [];
    const ax = aRect.x();
    const ay = aRect.y();
    const awidth = aRect.width();
    const aheight = aRect.height();
    let nx;
    let ny;
    let nw;
    let nh;
    nx = x;
    ny = y;
    nw = width;
    nh = ay - y;
    nw * nh > 0 && rects.push(new Rect(nx, ny, nw, nh));
    nx = ax + awidth;
    ny = ay;
    nw = x + width - (ax + awidth);
    nh = y + height - ay;
    nw * nh > 0 && rects.push(new Rect(nx, ny, nw, nh));
    nx = x;
    ny = ay + aheight;
    nw = ax + awidth - x;
    nh = y + height - ay - aheight;
    nw * nh > 0 && rects.push(new Rect(nx, ny, nw, nh));
    nx = x;
    ny = ay;
    nw = ax - x;
    nh = aheight;
    nw * nh > 0 && rects.push(new Rect(nx, ny, nw, nh));
    return rects;
  }
  this.toString = function() {
    return "[" + [x, y, width, height].join(", ") + "]";
  };
  this.toJSON = function() {
    return [x, y, width, height];
  };
}
const _$1 = window._;
if (!_$1) {
  throw new Error("ADD _");
}
View.ActionProvider.extend({
  className: "xmodal xoverview",
  name: "overview",
  close: function() {
    this.remove();
    this.trigger("close");
  },
  initialize: function(options) {
    View.ActionProvider.prototype.initialize.call(this, options);
    this.markers = options.markers;
    $(window).on("resize", this.render);
  },
  render: function() {
    const self = this;
    setTimeout(function() {
      self.$el.empty();
      self.$el.append(DIV({ "class": "xbg" }), DIV({ "class": "panel centered" }));
      self.contentRect = null;
      _$1.each(self.markers, self.renderMarker);
      self.renderButton();
    }, 0);
    return this;
  },
  renderButton: function() {
    let top = 100;
    if (this.options.btnTop) {
      top = this.options.btnTop;
    } else if (this.contentRect) {
      top = this.contentRect.y() + this.contentRect.height() + 40;
    }
    const btn = A({ "class": "btn btn-primary xlarge" }, T("a_get_set_go"));
    this.$(".panel").append(btn).css({ top });
    $(btn).click(this.close);
  },
  renderMarker: function(marker) {
    const pos = marker.pos;
    const rect = marker.mark ? Rect(marker.mark) : _$1.result(marker, "rect");
    let el;
    let cEl;
    let mEl;
    let left;
    let top;
    if (!rect)
      return;
    this.$el.append(el = DIV({ "class": "popover " + marker.pos }, DIV({ "class": "arrow" }), marker.title ? DIV({ "class": "popover-title" }, marker.title) : I(), cEl = DIV({ "class": "popover-content" })), mEl = DIV({ "class": "xoutline" }));
    $(cEl).append(marker.content);
    $(mEl).css({
      left: rect.x(),
      top: rect.y(),
      width: rect.width(),
      height: rect.height()
    });
    const elWidth = $(el).outerWidth();
    const elHeight = $(el).outerHeight();
    if (pos == "top" || pos == "bottom") {
      left = Math.max(rect.x() + rect.width() / 2 - elWidth / 2, 0);
      top = pos == "top" ? rect.y() - elHeight : rect.y() + rect.height();
    } else {
      left = Math.max(0, pos == "left" ? rect.x() - elWidth : rect.x() + rect.width());
      top = rect.y() + rect.height() / 2 - elHeight / 2;
    }
    $(el).css({ left, top });
    const elRect = new Rect(left, top, elWidth, elHeight);
    this.contentRect = this.contentRect ? this.contentRect.add(elRect) : elRect;
  }
});
const $$1 = window.jQuery;
if (!$$1) {
  throw new Error("ADD jQuery");
}
const _ = window._;
if (!_) {
  throw new Error("ADD _");
}
const async = window.async;
if (!async) {
  throw new Error("ADD async");
}
const domo = window.domo;
if (!domo) {
  throw new Error("ADD domo");
}
const moment = window.moment;
if (!moment) {
  throw new Error("ADD moment");
}
const Backbone$1 = window.Backbone;
if (!Backbone$1) {
  throw new Error("ADD Backbone");
}
const SieveLocator = View.Base.extend({
  name: "SieveLocator",
  className: "row",
  onTypeChange: function() {
    this.model.set("type", this.selType.value);
    this.renderParams();
  },
  postInit: function() {
    this.model.on("change", this.updateDOM);
  },
  render: function() {
    let elParams;
    const selOpts = _.map(Model.LocatorDescList, function(item) {
      return OPTION({ value: item.type }, T(item.label));
    });
    this.$el.append(DIV({ "class": "col-md-2" }, this.selType = SELECT({
      style: "margin:0 5px 0 0;width: auto;"
    })), DIV({ "class": "col-md-10" }, elParams = DIV()));
    this.$elParams = $$1(elParams);
    $$1(this.selType).append(selOpts).change(this.onTypeChange);
    this.updateDOM();
    return this;
  },
  renderParams: function() {
    const $elParams = this.$elParams;
    const type = this.selType.value;
    const desc = _.findWhere(Model.LocatorDescList, { type });
    $elParams.empty();
    const els = _.map(desc.params, function(param) {
      return Editor.create(param.type, {
        param,
        parent: this,
        model: this.model
      }).render().el;
    }, this);
    $elParams.append(els);
  },
  updateDOM: function() {
    this.selType.value = this.model.get("type");
    this.renderParams();
  }
});
var SieveLocators = View.Collection.extend({
  name: "SieveLocators",
  addOne: function(model) {
    $$1(this.help).hide();
    const view = new SieveLocator({
      model,
      parent: this
    });
    this.list.appendChild(view.render().el);
    return view;
  },
  removeOne: function() {
    SieveLocators.__super__.removeOne.apply(this, arguments);
    if (this.collection.length == 0) {
      $$1(this.help).show();
    }
  },
  renderBase: function() {
    this.$el.append(this.help = DIV({ "class": "info" }, T("l_none")), DIV(this.list = DIV()));
  }
});
const SieveConfigFrame = View.Base.extend({
  name: "SieveConfigFrame",
  render: function() {
    const attrs = this.model.attributes;
    this.$el.append(H5(attrs.index > 0 ? "Selections in child frame " + attrs.index : ""), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right" }, T("l_el_selected")), DIV({ "class": "col-md-10" }, (this.includes = new SieveLocators({
      model: attrs.includes,
      parent: this,
      op: "INCLUDE"
    }).render()).el)), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right" }, T("l_el_deselected")), DIV({ "class": "col-md-10" }, (this.excludes = new SieveLocators({
      model: attrs.excludes,
      parent: this,
      op: "EXCLUDE"
    }).render()).el)));
    return this;
  }
});
const SieveConfigFrames = View.Collection.extend({
  name: "SieveConfigFrames",
  addOne: function(model) {
    const view = new SieveConfigFrame({
      model,
      parent: this
    });
    this.$list.append(view.render().el);
    return view;
  },
  renderBase: function() {
    this.$list = this.$el;
    return this;
  }
});
const SieveConfigPage = View.Base.extend({
  name: "SieveConfigPage",
  render: function() {
    this.frames = new SieveConfigFrames({
      model: this.model.get("frames"),
      parent: this
    });
    this.$el.append(this.frames.render().el);
    return this;
  }
});
const SieveConfigPages = View.Collection.extend({
  name: "SieveConfigPages",
  addOne: function(model) {
    const view = new SieveConfigPage({
      model,
      parent: this
    });
    this.$list.append(view.render().el);
    return view;
  },
  renderBase: function() {
    this.$list = this.$el;
  }
});
const SieveConfigHTML = View.Base.extend({
  name: "SieveConfigHTML",
  className: "form form-horizontal",
  postInit: function(options) {
    SieveConfigHTML.__super__.postInit.call(this, options);
    this.pages = this.model.get("selections");
    this.viewPages = new SieveConfigPages({
      model: this.pages,
      parent: this
    });
    this.regexpEditor = Editor.create("regexp", {
      param: {
        help: "h_regexp_filter",
        must: false,
        name: "regexp",
        type: "regexp"
      },
      parent: this,
      model: this.model
    });
  },
  render: function() {
    this.$el.append(this.help = DIV({
      "class": "alert-info small",
      "style": "padding: 4px 12px;margin-bottom: 4px;"
    }, T("m_vs_help")), DIV({ "class": "row" }, LABEL({ "class": "col-md-2", "style": "text-align:right;" }, T("l_text_filter")), DIV({ "class": "col-md-10" }, this.regexpEditor.render().el)), this.viewPages.render().el);
    return this;
  },
  hideHelp: function() {
    if (this.model.isEmpty()) {
      $$1(this.help).show();
    } else {
      $$1(this.help).remove();
    }
  }
});
var HTML_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div3;
  let div1;
  let div0;
  let t1;
  let elwrap0;
  let t2;
  let div2;
  let textarea;
  let t3;
  let elwrap1;
  let current;
  elwrap0 = new ElWrap({ props: { el: ctx[1].el } });
  elwrap1 = new ElWrap({
    props: { el: ctx[2].el }
  });
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      div0.textContent = `${T("m_vs_help")}`;
      t1 = space();
      create_component(elwrap0.$$.fragment);
      t2 = space();
      div2 = element("div");
      textarea = element("textarea");
      t3 = space();
      create_component(elwrap1.$$.fragment);
      attr(div0, "class", "alert-info small");
      set_style(div0, "padding", "4px 12px");
      set_style(div0, "margin-bottom", "4px");
      attr(div1, "class", "ct flex-auto svelte-rkpfh4");
      attr(textarea, "class", "form-control flex-auto");
      attr(textarea, "placeholder", T("m_vs_sel_preview"));
      textarea.value = ctx[0];
      attr(div2, "class", "w-30 bl flex flex-column");
      attr(div3, "class", "flex");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div1);
      append(div1, div0);
      append(div1, t1);
      mount_component(elwrap0, div1, null);
      append(div3, t2);
      append(div3, div2);
      append(div2, textarea);
      append(div2, t3);
      mount_component(elwrap1, div2, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1) {
        textarea.value = ctx2[0];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(elwrap0.$$.fragment, local);
      transition_in(elwrap1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(elwrap0.$$.fragment, local);
      transition_out(elwrap1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(elwrap0);
      destroy_component(elwrap1);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { config } = $$props;
  let { page } = $$props;
  let { previewText } = $$props;
  let view = new SieveConfigPage({ model: page }).render();
  let regexpEditor = Editor.create("regexp", {
    param: {
      help: "h_regexp_filter",
      must: false,
      name: "regexp",
      type: "regexp"
    },
    model: config
  }).render();
  $$self.$$set = ($$props2) => {
    if ("config" in $$props2)
      $$invalidate(3, config = $$props2.config);
    if ("page" in $$props2)
      $$invalidate(4, page = $$props2.page);
    if ("previewText" in $$props2)
      $$invalidate(0, previewText = $$props2.previewText);
  };
  return [previewText, view, regexpEditor, config, page];
}
class HTML extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { config: 3, page: 4, previewText: 0 });
  }
}
var HTMLSelector_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let htmlconfig;
  let current;
  htmlconfig = new HTML({
    props: {
      page: ctx[2],
      config: ctx[4],
      previewText: ctx[3]
    }
  });
  return {
    c() {
      create_component(htmlconfig.$$.fragment);
    },
    m(target, anchor) {
      mount_component(htmlconfig, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const htmlconfig_changes = {};
      if (dirty[0] & 4)
        htmlconfig_changes.page = ctx2[2];
      if (dirty[0] & 8)
        htmlconfig_changes.previewText = ctx2[3];
      htmlconfig.$set(htmlconfig_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(htmlconfig.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(htmlconfig.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(htmlconfig, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let button0;
  let i0;
  let t0;
  let t1_value = T("a_select_elements") + "";
  let t1;
  let t2;
  let div0;
  let t3;
  let button1;
  let i1;
  let t4;
  let t5_value = T("a_save_selections") + "";
  let t5;
  let t6;
  let button2;
  let i2;
  let t7;
  let button3;
  let i3;
  let t8;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && ctx[2] && create_if_block$1(ctx);
  return {
    c() {
      div1 = element("div");
      button0 = element("button");
      i0 = element("i");
      t0 = space();
      t1 = text(t1_value);
      t2 = space();
      div0 = element("div");
      t3 = space();
      button1 = element("button");
      i1 = element("i");
      t4 = space();
      t5 = text(t5_value);
      t6 = space();
      button2 = element("button");
      i2 = element("i");
      t7 = space();
      button3 = element("button");
      i3 = element("i");
      t8 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(i0, "class", "fa");
      toggle_class(i0, "fa-play", !ctx[0]);
      toggle_class(i0, "fa-pause", ctx[0]);
      attr(button0, "class", "btn btn-default svelte-1cd5e8o");
      attr(div0, "class", "flex-auto");
      attr(i1, "class", "fa fa-save");
      attr(button1, "class", "btn btn-default svelte-1cd5e8o");
      attr(i2, "class", "fa");
      toggle_class(i2, "fa-expand", !ctx[1]);
      toggle_class(i2, "fa-compress", ctx[1]);
      attr(button2, "class", "btn btn-default svelte-1cd5e8o");
      attr(button2, "title", T("a_expand"));
      attr(i3, "class", "fa fa-times");
      attr(button3, "class", "btn btn-default svelte-1cd5e8o");
      attr(button3, "title", T("a_close"));
      attr(div1, "class", "xtbar xtbar-inverse flex svelte-1cd5e8o");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, button0);
      append(button0, i0);
      append(button0, t0);
      append(button0, t1);
      append(div1, t2);
      append(div1, div0);
      append(div1, t3);
      append(div1, button1);
      append(button1, i1);
      append(button1, t4);
      append(button1, t5);
      append(div1, t6);
      append(div1, button2);
      append(button2, i2);
      append(div1, t7);
      append(div1, button3);
      append(button3, i3);
      insert(target, t8, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[8]),
          listen(button1, "click", ctx[6]),
          listen(button2, "click", ctx[7]),
          listen(button3, "click", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1) {
        toggle_class(i0, "fa-play", !ctx2[0]);
      }
      if (dirty[0] & 1) {
        toggle_class(i0, "fa-pause", ctx2[0]);
      }
      if (dirty[0] & 2) {
        toggle_class(i2, "fa-expand", !ctx2[1]);
      }
      if (dirty[0] & 2) {
        toggle_class(i2, "fa-compress", ctx2[1]);
      }
      if (ctx2[1] && ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 6) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t8);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
const MSG_EVENT = 2;
const MSG_REQUEST = 3;
const MSG_RESPONSE = 4;
function instance$1($$self, $$props, $$invalidate) {
  let $currentPage, $$unsubscribe_currentPage = noop, $$subscribe_currentPage = () => ($$unsubscribe_currentPage(), $$unsubscribe_currentPage = subscribe(currentPage, ($$value) => $$invalidate(14, $currentPage = $$value)), currentPage);
  $$self.$$.on_destroy.push(() => $$unsubscribe_currentPage());
  let { on = true } = $$props;
  const _2 = window._;
  const ID = function(x) {
    return function() {
      return x++;
    };
  }(1);
  const PORT_INDEX = [];
  const responseHandlers = {};
  let expanded = false;
  let currentPage;
  let savedCurrentpage;
  let savedSieveModel;
  let savedConfig;
  let savedPages;
  let previewText = "Initializing...";
  const sieveConfigModel = new Model.SieveConfigHTML({ selections: [] }, { parse: true });
  const port = chrome.runtime.connect({ name: "selector:{}" });
  port.onMessage.addListener(function(msg2) {
    let { type, data } = msg2;
    switch (type) {
      case MSG_EVENT:
        onPortEvent(data.type, data.event);
        break;
      case MSG_REQUEST:
        console.error("Unhandled request: ", msg2);
        port.postMessage({
          _id: msg2._id,
          type: MSG_RESPONSE,
          err: { msg: "Request not handled" }
        });
        break;
      case MSG_RESPONSE:
        onPortResponse(msg2);
        break;
      default:
        console.warn("Unhandled msg type: ", msg2);
    }
  });
  function onPortEvent(type, event) {
    switch (type) {
      case "init":
        $$invalidate(3, previewText = "Page loaded...");
        savedSieveModel = new Model.Sieve(event.model, { parse: true }), savedConfig = savedSieveModel.get("config"), savedPages = savedConfig && savedConfig.get("selections"), savedConfig && sieveConfigModel.set("regexp", savedConfig.get("regexp"));
        $$invalidate(0, on = !!event.state.selectorOn);
        $$invalidate(1, expanded = !!event.state.expanded);
        break;
      case "loader:load":
        onLoadPort(event);
        break;
      case "loader:reset":
        $$invalidate(3, previewText = "");
        onLoaderReset(event);
        break;
      case "loader:port:select:close":
        onSelectClose(event);
        break;
      case "loader:port:select:display":
        onSelectDisplay(event);
        break;
      case "loader:port:select:new":
        onSelectNew(event);
        break;
      default:
        console.warn("Unhandled event type: ", type);
    }
  }
  function onPortResponse({ _id, err, data }) {
    let handler = responseHandlers[_id];
    if (handler) {
      delete responseHandlers[_id];
      handler(err, data);
    } else {
      console.error("Unhandled response: ", msg);
    }
  }
  port.onDisconnect.addListener(function() {
  });
  onMount(() => {
    sieveConfigModel.on("change:regexp", updatePreview);
  });
  async function close() {
    await Promise.allSettled(PORT_INDEX.map(portReset));
    $$invalidate(0, on = false);
    sendEvent("close");
  }
  async function save() {
    if (sieveConfigModel.isEmpty()) {
      showMsg("Please select elements to monitor before saving selections.");
      return;
    }
    savedSieveModel.set({
      uri: $currentPage.uri,
      config: sieveConfigModel,
      content_type: C.TYPE_HTML
    });
    const modelJSON = savedSieveModel.toJSON();
    await Promise.allSettled(PORT_INDEX.map(portReset));
    $$invalidate(0, on = false);
    sendEvent("save", modelJSON);
  }
  async function onLoadPort(event) {
    const index = event.index;
    const savedFrame = savedCurrentpage && savedCurrentpage.get("frames").findWhere({ index });
    PORT_INDEX.push(index);
    await portRequest(index, {
      path: "require",
      data: ["picker", "pickerui"]
    });
    if (savedFrame) {
      showVisualSelections(savedFrame);
    }
    portSetMode(index);
  }
  function onLoaderReset(event) {
    const pages = sieveConfigModel.get("selections");
    $$subscribe_currentPage($$invalidate(2, currentPage = pages.at(0) || new Model.Page(event, { parse: true })));
    PORT_INDEX.splice(0);
    pages.reset([currentPage]);
    savedCurrentpage = savedPages && savedPages.at(0);
  }
  async function onLocatorChange(locator, options) {
    if (options && options.source === "program")
      return;
    const frame = locator.collection.frame;
    await portRequest(frame.get("index"), {
      path: "picker_select_call",
      data: {
        method: "setLocator",
        id: locator.id,
        args: [_2.pick(locator.attributes, "expr", "type")]
      }
    });
    updatePreview();
  }
  function onSelectClose(event) {
    currentPage.removeLocator(event.index, event.id);
    updatePreview();
  }
  function onSelectDisplay(event) {
    const locator = currentPage.getLocator(event.index, event.id);
    const attrs = _2.extend({ id: event.id }, event.locator);
    if (!_2.isEqual(attrs, locator.attributes)) {
      locator.set(attrs, { source: "program" });
      updatePreview();
    }
  }
  function onSelectNew(event) {
    const attrs = _2.extend({ id: event.id }, event.locator);
    const locator = currentPage.addLocator({ index: event.index, uri: event.uri }, event.op, attrs);
    Backbone.listenTo(locator, "change", onLocatorChange);
  }
  function portRequest(portSelector, data) {
    return sendRequest("loader/request", { portSelector, data });
  }
  async function portReset(portIndex) {
    await portRequest(portIndex, { path: "picker_reset" });
  }
  async function portSetMode(portIndex) {
    await portRequest(portIndex, {
      path: "picker_setMode",
      data: on ? "SELECT" : "NOOP"
    });
    if (on && portIndex == 0) {
      showMsg("Selector is on. Click elements on page that you woulld like to monitor for changes.");
    }
  }
  function portSetModeForAll(mode) {
    for (let index of PORT_INDEX) {
      portSetMode(index);
    }
  }
  function sendEvent(type, event) {
    port.postMessage({ type: MSG_EVENT, data: { type, event } });
  }
  function sendRequest(path, data) {
    return new Promise((resolve, reject) => {
      const _id = ID();
      responseHandlers[_id] = (err, data2) => {
        err ? reject(err) : resolve(data2);
      };
      port.postMessage({ type: MSG_REQUEST, _id, path, data });
    });
  }
  function sendUIState(expanded2) {
    let data = { expanded: expanded2 };
    window.parent.postMessage({ type: "show", data }, "*");
    sendEvent("uistate", data);
  }
  function showMsg(msg2) {
    return portRequest(0, { path: "showMsg", data: { msg: msg2 } });
  }
  function showVisualSelections(savedFrame) {
    const index = savedFrame.get("index");
    const includes = savedFrame.get("includes").models;
    const excludes = savedFrame.get("excludes").models;
    includes.map((model) => portRequest(index, {
      path: "picker_select_new",
      data: { locator: model.toJSON(), op: "INCLUDE" }
    }));
    excludes.map((model) => portRequest(index, {
      path: "picker_select_new",
      data: { locator: model.toJSON(), op: "EXCLUDE" }
    }));
  }
  function toggleExpanded() {
    $$invalidate(1, expanded = !expanded);
  }
  function toggleSelector() {
    $$invalidate(0, on = !on);
  }
  async function updatePreview() {
    if (!currentPage)
      return;
    $$invalidate(3, previewText = "Loading...");
    try {
      let results = await Promise.all(currentPage.get("frames").map((frame) => portRequest(frame.get("index"), {
        path: "getText",
        data: {
          includes: frame.get("includes").toJSON(),
          excludes: frame.get("excludes").toJSON()
        }
      })));
      const re = sieveConfigModel.get("regexp");
      let text2 = results.join("");
      if (re && re.expr) {
        const matches = text2.match(new RegExp(re.expr, re.flags || ""));
        if (matches && matches.length > 0) {
          text2 = matches.join(" ");
        } else {
          text2 = "";
        }
      }
      $$invalidate(3, previewText = text2);
    } catch (e) {
      console.error("erroring updating preview", e);
      $$invalidate(3, previewText = "Error: " + (e.message || e.msg || e.toString()));
    }
  }
  $$self.$$set = ($$props2) => {
    if ("on" in $$props2)
      $$invalidate(0, on = $$props2.on);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2) {
      {
        sendUIState(expanded);
      }
    }
    if ($$self.$$.dirty[0] & 1) {
      {
        portSetModeForAll();
      }
    }
  };
  return [
    on,
    expanded,
    currentPage,
    previewText,
    sieveConfigModel,
    close,
    save,
    toggleExpanded,
    toggleSelector
  ];
}
class HTMLSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { on: 0 }, null, [-1, -1]);
  }
}
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let htmlselector;
  let current;
  htmlselector = new HTMLSelector({});
  return {
    c() {
      create_component(htmlselector.$$.fragment);
    },
    m(target, anchor) {
      mount_component(htmlselector, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(htmlselector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(htmlselector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(htmlselector, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let t;
  let tailwind;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  tailwind = new Tailwind({});
  return {
    c() {
      if_block.c();
      t = space();
      create_component(tailwind.$$.fragment);
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t, anchor);
      mount_component(tailwind, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        }
        transition_in(if_block, 1);
        if_block.m(t.parentNode, t);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(tailwind.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(tailwind.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      destroy_component(tailwind, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let loaded = false;
  onMount(async () => {
    await syncUser();
    $$invalidate(0, loaded = true);
  });
  async function syncUser() {
    try {
      let user = await Service.store.UserStore.findOne({ id: Service.auth.getId() });
      let locale = (user ? user.locale : Service.store.Prefs.get("locale")) || "en-US";
      await loadLang(locale);
    } catch (e) {
      await loadLang("en-US");
    }
  }
  return [loaded];
}
class AppHTMLSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
Api.init({
  events: true,
  identityId: window.group ? group.id : null
});
new AppHTMLSelector({
  target: document.body
});
