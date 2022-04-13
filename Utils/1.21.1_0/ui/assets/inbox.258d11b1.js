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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as Service$1, V as View$1, A as Api, a as Supports, T, E as Editor, M as Model$2, C, b as Msg, B as Base$1, c as ModelClient, d as SPRINTF, e as base, R as Rules, i as i18n, f as Core, l as loadLang } from "./sieve.9a015b84.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, a as attr, b as insert, c as append, n as noop, d as detach, f as space, g as src_url_equal, p as params, h as set_style, j as getContext, k as component_subscribe, o as onMount, l as binding_callbacks, m as set_data, q as destroy_each, r as listen, u as create_slot, v as create_component, w as mount_component, x as update_slot_base, y as get_all_dirty_from_scope, z as get_slot_changes, A as transition_in, B as transition_out, C as destroy_component, D as bubble, E as empty, F as group_outros, G as check_outros, H as get_store_value, I as html, J as repeat, K as toggle_class, L as run_all, M as action_destroyer, N as portal, O as createEventDispatcher, P as onDestroy, Q as afterUpdate, R as handle_promise, T as update_await_block_branch, U as set_input_value, V as update_keyed_each, W as outro_and_destroy_block, X as destroy_block, Y as writable, Z as push, _ as subscribe, $ as lib, a0 as derived, a1 as CheckState, a2 as TreeView, a3 as BaseNode, a4 as svg_element, a5 as is_function, a6 as add_flush_callback, a7 as select_option, a8 as bind, a9 as render, aa as prevent_default, ab as Recorder, ac as DataTable, ad as Toolbar, ae as ToolbarContent, af as Button, ag as Close16, ah as StopFilled16, ai as RecordingFilled16, aj as StopFilledAlt16, ak as PlayFilledAlt16, al as Checkmark16, am as Error16, an as Loading, ao as assign, ap as set_attributes, aq as get_spread_update, ar as compute_rest_props, as as createView, at as Base$2, au as toJSON, av as _default, aw as CSSSelector, ax as exclude_internal_props, ay as select_value, az as add_render_callback, aA as setContext, aB as querystring, aC as set_store_value, aD as parse, aE as flush, aF as replace, aG as Router } from "./vendor.c17c97a4.js";
import { u as urls, c as checkSieveConstraint, i as instance$W, S as SearchForm, a as Selector$2, M as ModelLabel, b as Self } from "./sentry.87095528.js";
import { E as ElWrap } from "./ElWrap.94e1a934.js";
var LSStore = Service$1.store.SimpleStore;
function CookieStore(prefix) {
  prefix || (prefix = "_s");
  this.__init__ = function(cb) {
    cb && cb();
  };
  this.del = function(key) {
    key = prefix + key;
    document.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };
  this.get = function(key) {
    key = prefix + key;
    const val = unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"), "$1"));
    return val ? JSON.parse(val) : void 0;
  };
  this.set = function(key, val) {
    key = prefix + key;
    document.cookie = escape(key) + "=" + escape(JSON.stringify(val)) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  };
}
var Store = LSStore.storage ? LSStore : CookieStore;
var jquery_atwho = "";
var inbox = "";
var langs = [{
  locale: "en-US",
  label: "English (US)"
}, {
  locale: "de",
  label: "Deutsch"
}, {
  locale: "fr",
  label: "Fran\xE7ais"
}, {
  locale: "ru",
  label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
}, {
  locale: "ja",
  label: "\u65E5\u672C\u8A9E"
}, {
  locale: "zh",
  label: "\u7B80\u4F53\u4E2D\u6587"
}, {
  locale: "es",
  label: "Espa\xF1ol"
}, {
  locale: "it",
  label: "Italiano"
}, {
  locale: "pl",
  label: "Polskie"
}, {
  locale: "pt",
  label: "Portugu\xEAs do Brasil"
}, {
  locale: "sr",
  label: "\u0421\u0440\u043F\u0441\u043A\u0438"
}];
const _$a = window._;
if (!_$a) {
  throw new Error("ADD _");
}
const $$a = window.jQuery;
if (!$$a) {
  throw new Error("ADD jQuery");
}
const LangPref = View$1.Dropdown.extend({
  getLocale: function() {
    return USER && USER.locale || LOCALE;
  },
  getLabel: function(locale) {
    const lang = _$a.findWhere(langs, { locale });
    return lang.label;
  },
  postInit: function(options) {
    this.menu = new View$1.Menu({
      items: _$a.map(langs, function(lang) {
        return {
          label: lang.label,
          data: {
            locale: lang.locale
          }
        };
      })
    });
    this.menu.on("click", this.onClick);
    this.setLabel("");
    this.$el.attr({ title: "Language" });
  },
  onClick: function(data, event) {
    const locale = data.locale;
    event.preventDefault();
    if (Supports.agents.local) {
      const id = Service$1.auth.getId();
      Service$1.store.Prefs.set("locale", locale);
      if (id) {
        Api.api("/users", "PUT", {
          id,
          locale
        }, function() {
          Service$1.service.SyncMan._syncStore(Service$1.store.UserStore, function() {
            location.reload();
          });
        });
      } else {
        location.reload();
      }
    } else {
      if (USER) {
        Api.api("/users", "PUT", { locale }, function() {
          location.reload();
        });
      }
    }
    return true;
  },
  renderAction: function() {
    return A({
      "class": "ripple vbar-tooltip",
      "href": "#",
      "data-toggle": "dropdown",
      "data-html": "true"
    }, I({
      "class": "fa fa-language",
      "aria-hidden": "true"
    }));
  }
});
function get_each_context$e(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_else_block_1$7(ctx) {
  let div;
  let a;
  let t0;
  let ul;
  let li;
  let t2;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$e(get_each_context$e(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      a = element("a");
      a.innerHTML = `<i class="fa fa-list" aria-hidden="true"></i>`;
      t0 = space();
      ul = element("ul");
      li = element("li");
      li.textContent = "Watchlists";
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(a, "class", "dropdown-toggle");
      attr(a, "data-toggle", "dropdown");
      attr(a, "href", "#");
      attr(li, "class", "dropdown-header uppercase");
      attr(ul, "class", "dropdown-menu");
      attr(ul, "role", "menu");
      set_style(ul, "bottom", "initial");
      attr(div, "class", "dropdown");
      attr(div, "title", "Watchlist");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, a);
      append(div, t0);
      append(div, ul);
      append(ul, li);
      append(ul, t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$e(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$e(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block_3$5(ctx) {
  let a;
  let i;
  return {
    c() {
      a = element("a");
      i = element("i");
      attr(i, "class", "fa fa-list");
      attr(i, "aria-hidden", "true");
      attr(a, "title", "Watchlist");
      attr(a, "href", urls.watchlist);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, i);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_each_block$e(ctx) {
  let li;
  let a;
  let t_value = ctx[8].name + "";
  let t;
  let a_href_value;
  return {
    c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr(a, "href", a_href_value = ctx[8].href);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t_value !== (t_value = ctx2[8].name + ""))
        set_data(t, t_value);
      if (dirty & 4 && a_href_value !== (a_href_value = ctx2[8].href)) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_else_block$j(ctx) {
  let a;
  let t;
  return {
    c() {
      a = element("a");
      t = text("Sign In");
      attr(a, "role", "menuitem");
      attr(a, "href", urls.login);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block_2$b(ctx) {
  let a;
  let t0;
  let em;
  let t1_value = ctx[0].name + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      t0 = text("Sign Out (");
      em = element("em");
      t1 = text(t1_value);
      t2 = text(")");
      attr(a, "role", "menuitem");
      attr(a, "href", urls.logout);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t0);
      append(a, em);
      append(em, t1);
      append(a, t2);
      if (!mounted) {
        dispose = listen(a, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1$i(ctx) {
  let li;
  let a;
  let t_value = T("l_billing") + "";
  let t;
  let a_href_value;
  return {
    c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr(a, "href", a_href_value = urls.billing);
      attr(a, "target", "_blank");
      attr(a, "role", "menuitem");
      attr(li, "role", "presentation");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_if_block$s(ctx) {
  let li;
  let a;
  let t_value = T("l_admin") + "";
  let t;
  let a_href_value;
  return {
    c() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      attr(a, "href", a_href_value = urls.admin);
      attr(a, "role", "menuitem");
      attr(a, "target", "_blank");
      attr(li, "role", "presentation");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$W(ctx) {
  let div4;
  let div3;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let t1;
  let a1;
  let i0;
  let t2;
  let a2;
  let i1;
  let t3;
  let a3;
  let i2;
  let t4;
  let i3;
  let t5;
  let div1;
  let a4;
  let i4;
  let t6;
  let div0;
  let t7;
  let div2;
  let a5;
  let t8;
  let ul;
  let li0;
  let t9;
  let li1;
  let t10;
  let li2;
  let a6;
  let t12;
  let li3;
  let a7;
  let t13_value = T("l_settings") + "";
  let t13;
  let t14;
  let t15;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2].length == 1)
      return create_if_block_3$5;
    return create_else_block_1$7;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[3].isLoggedIn())
      return create_if_block_2$b;
    return create_else_block$j;
  }
  let current_block_type_1 = select_block_type_1(ctx);
  let if_block1 = current_block_type_1(ctx);
  let if_block2 = !ctx[0].account_id && create_if_block_1$i();
  let if_block3 = ctx[0].role == "admin" && create_if_block$s();
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      if_block0.c();
      t1 = space();
      a1 = element("a");
      i0 = element("i");
      t2 = space();
      a2 = element("a");
      i1 = element("i");
      t3 = space();
      a3 = element("a");
      i2 = element("i");
      t4 = space();
      i3 = element("i");
      t5 = space();
      div1 = element("div");
      a4 = element("a");
      i4 = element("i");
      t6 = space();
      div0 = element("div");
      t7 = space();
      div2 = element("div");
      a5 = element("a");
      a5.innerHTML = `<i class="fa fa-cog" aria-hidden="true"></i>`;
      t8 = space();
      ul = element("ul");
      li0 = element("li");
      if_block1.c();
      t9 = space();
      li1 = element("li");
      t10 = space();
      li2 = element("li");
      a6 = element("a");
      a6.textContent = `${T("l_support")}`;
      t12 = space();
      li3 = element("li");
      a7 = element("a");
      t13 = text(t13_value);
      t14 = space();
      if (if_block2)
        if_block2.c();
      t15 = space();
      if (if_block3)
        if_block3.c();
      attr(img, "height", "38");
      attr(img, "alt", "distill-logo");
      if (!src_url_equal(img.src, img_src_value = "./img/distill_logo_inverted.svg"))
        attr(img, "src", img_src_value);
      attr(a0, "class", "xside-logo");
      attr(a0, "target", "_blank");
      attr(a0, "rel", "noopener");
      attr(a0, "title", "Distill.io");
      attr(a0, "href", urls.website);
      attr(i0, "class", "fa fa-bar-chart-o");
      attr(i0, "aria-hidden", "true");
      attr(a1, "title", "Usage");
      attr(a1, "href", urls.availability);
      attr(i1, "class", "fa fa-file-text");
      attr(i1, "aria-hidden", "true");
      attr(a2, "title", "Templates");
      attr(a2, "href", "#/w/" + (params.team || 0) + "/tpls/all/");
      attr(i2, "class", "fa fa-users");
      attr(i2, "aria-hidden", "true");
      attr(a3, "href", urls.groups);
      attr(a3, "title", "Manage Teams");
      set_style(i3, "flex", "1");
      attr(i4, "class", "fa fa-comment");
      attr(i4, "aria-hidden", "true");
      attr(a4, "class", "ripple");
      attr(a4, "href", urls.forums);
      attr(a4, "title", "Forums");
      attr(a4, "target", "_blank");
      attr(div0, "id", "feedPop");
      attr(a5, "class", "dropdown-toggle");
      attr(a5, "data-toggle", "dropdown");
      attr(a5, "href", "#");
      attr(li0, "role", "presentation");
      attr(li1, "class", "divider");
      attr(a6, "target", "_blank");
      attr(a6, "rel", "noopener");
      attr(a6, "href", "https://distill.io/kb/");
      attr(a7, "role", "menuitem");
      attr(a7, "href", urls.settings);
      attr(li3, "role", "presentation");
      attr(ul, "class", "dropdown-menu");
      attr(ul, "role", "menu");
      attr(div2, "class", "dropdown");
      attr(div2, "title", "Settings");
      attr(div3, "class", "vbar");
      attr(div4, "id", "x-vsidebar");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div3);
      append(div3, a0);
      append(a0, img);
      append(div3, t0);
      if_block0.m(div3, null);
      append(div3, t1);
      append(div3, a1);
      append(a1, i0);
      append(div3, t2);
      append(div3, a2);
      append(a2, i1);
      append(div3, t3);
      append(div3, a3);
      append(a3, i2);
      append(div3, t4);
      append(div3, i3);
      append(div3, t5);
      append(div3, div1);
      append(div1, a4);
      append(a4, i4);
      append(div1, t6);
      append(div1, div0);
      append(div3, t7);
      append(div3, div2);
      append(div2, a5);
      append(div2, t8);
      append(div2, ul);
      append(ul, li0);
      if_block1.m(li0, null);
      append(ul, t9);
      append(ul, li1);
      append(ul, t10);
      append(ul, li2);
      append(li2, a6);
      append(ul, t12);
      append(ul, li3);
      append(li3, a7);
      append(a7, t13);
      append(ul, t14);
      if (if_block2)
        if_block2.m(ul, null);
      append(ul, t15);
      if (if_block3)
        if_block3.m(ul, null);
      ctx[5](div2);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div3, t1);
        }
      }
      if_block1.p(ctx2, dirty);
      if (!ctx2[0].account_id) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_1$i();
          if_block2.c();
          if_block2.m(ul, t15);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (ctx2[0].role == "admin") {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block$s();
          if_block3.c();
          if_block3.m(ul, null);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
      if_block0.d();
      if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      ctx[5](null);
    }
  };
}
function instance$V($$self, $$props, $$invalidate) {
  let $user;
  const user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(0, $user = value));
  let langs2 = new LangPref().render();
  let elCog;
  let groups = $user.groups || [];
  let watchlists = [];
  onMount(() => {
    elCog.parentNode.insertBefore(langs2.el, elCog);
  });
  function onSignOut(e) {
    if (Supports.agents.local) {
      e.preventDefault();
      Service$1.auth.logout();
      location.href = urls.logout;
    }
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elCog = $$value;
      $$invalidate(1, elCog);
    });
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        $$invalidate(2, watchlists = [
          {
            name: `${$user.name} (personal)`,
            href: "#/w/0/list/all/"
          },
          ...groups.map((g) => ({
            name: g.name,
            href: `#/w/${g.id}/list/all/`
          }))
        ]);
      }
    }
  };
  return [$user, elCog, watchlists, user, onSignOut, div2_binding];
}
class VBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$V, create_fragment$W, safe_not_equal, {});
  }
}
const get_extra_slot_changes = (dirty) => ({});
const get_extra_slot_context = (ctx) => ({});
function create_fragment$V(ctx) {
  let div1;
  let vbar;
  let t0;
  let t1;
  let div0;
  let current;
  let mounted;
  let dispose;
  vbar = new VBar({});
  const extra_slot_template = ctx[3].extra;
  const extra_slot = create_slot(extra_slot_template, ctx, ctx[2], get_extra_slot_context);
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      div1 = element("div");
      create_component(vbar.$$.fragment);
      t0 = space();
      if (extra_slot)
        extra_slot.c();
      t1 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      attr(div0, "id", "content");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      mount_component(vbar, div1, null);
      append(div1, t0);
      if (extra_slot) {
        extra_slot.m(div1, null);
      }
      append(div1, t1);
      append(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[5](div0);
      current = true;
      if (!mounted) {
        dispose = listen(div0, "scroll", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (extra_slot) {
        if (extra_slot.p && (!current || dirty & 4)) {
          update_slot_base(extra_slot, extra_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(extra_slot_template, ctx2[2], dirty, get_extra_slot_changes), get_extra_slot_context);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(vbar.$$.fragment, local);
      transition_in(extra_slot, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(vbar.$$.fragment, local);
      transition_out(extra_slot, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(vbar);
      if (extra_slot)
        extra_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$U($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { contentScrollTop = 0 } = $$props;
  let elContent;
  function setScroll() {
    setTimeout(() => {
      elContent && $$invalidate(0, elContent.scrollTop = contentScrollTop, elContent);
    });
  }
  function scroll_handler(event) {
    bubble.call(this, $$self, event);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elContent = $$value;
      $$invalidate(0, elContent);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("contentScrollTop" in $$props2)
      $$invalidate(1, contentScrollTop = $$props2.contentScrollTop);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      {
        contentScrollTop && setScroll();
      }
    }
  };
  return [elContent, contentScrollTop, $$scope, slots, scroll_handler, div0_binding];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$U, create_fragment$V, safe_not_equal, { contentScrollTop: 1 });
  }
}
function create_else_block$i(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = `404 - Path Not Found - ${location.hash.slice(1)}`;
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$r(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      $$slots: { default: [create_default_slot$i] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const layout_changes = {};
      if (dirty & 4) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function create_default_slot$i(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = `404 - Path Not Found - ${location.hash.slice(1)}`;
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$U(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$r, create_else_block$i];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$T($$self, $$props, $$invalidate) {
  let { params: params2 } = $$props;
  let { useLayout = true } = $$props;
  console.error("404", params2);
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(1, params2 = $$props2.params);
    if ("useLayout" in $$props2)
      $$invalidate(0, useLayout = $$props2.useLayout);
  };
  return [useLayout, params2];
}
class Error404 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$T, create_fragment$U, safe_not_equal, { params: 1, useLayout: 0 });
  }
}
function create_if_block_1$h(ctx) {
  let div;
  let t_value = ctx[1].account.name + "";
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      attr(div, "class", "pr-8");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[1].account.name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_else_block$h(ctx) {
  let a;
  let t;
  return {
    c() {
      a = element("a");
      t = text("Sign In");
      attr(a, "href", urls.login);
      attr(a, "class", "xnav-a");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block$q(ctx) {
  let a;
  let t_value = ctx[1].name + "";
  let t;
  return {
    c() {
      a = element("a");
      t = text(t_value);
      attr(a, "href", "#/settings/profile/");
      attr(a, "class", "xnav-a");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[1].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_fragment$T(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let if_block0 = ctx[1].account && create_if_block_1$h(ctx);
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].id)
      return create_if_block$q;
    return create_else_block$h;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(ctx[0]);
      t1 = space();
      div1 = element("div");
      t2 = space();
      if (if_block0)
        if_block0.c();
      t3 = space();
      if_block1.c();
      attr(div0, "class", "title-header ttu fw1 f3 xnav-a");
      attr(div1, "class", "flex-grow");
      attr(div2, "id", "topbar");
      attr(div2, "class", "flex items-center");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      append(div0, t0);
      append(div2, t1);
      append(div2, div1);
      append(div2, t2);
      if (if_block0)
        if_block0.m(div2, null);
      append(div2, t3);
      if_block1.m(div2, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t0, ctx2[0]);
      if (ctx2[1].account) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$h(ctx2);
          if_block0.c();
          if_block0.m(div2, t3);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(div2, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block0)
        if_block0.d();
      if_block1.d();
    }
  };
}
function instance$S($$self, $$props, $$invalidate) {
  let $user;
  let { title = "Distill" } = $$props;
  const user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(1, $user = value));
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
  };
  return [title, $user, user];
}
class Topbar$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$S, create_fragment$T, safe_not_equal, { title: 0 });
  }
}
let KVStore = Service$1.store.KVStore;
const $$9 = window.jQuery;
if (!$$9) {
  throw new Error("ADD jQuery");
}
const _$9 = window._;
if (!_$9) {
  throw new Error("ADD _");
}
const domo$8 = window.domo;
if (!domo$8) {
  throw new Error("ADD domo");
}
const Backbone$9 = window.Backbone;
if (!Backbone$9) {
  throw new Error("ADD Backbone");
}
const Common$1 = View$1.Base.extend({
  name: "actions$Common",
  events: {
    "change": "event_change"
  },
  event_change: function() {
    this.saveValues();
  },
  render: function() {
    this.$el.attr({
      "id": "common",
      "class": "panel panel-default"
    }).append(HEADER({ "class": "panel-heading" }, H3(T("l_actions"))), DIV({ "class": "panel-body" }, DIV({ "class": "checkbox" }, LABEL(INPUT({ type: "checkbox", name: "actions.popup" }), T("l_action_local_popup"))), DIV({ "class": "checkbox" }, LABEL(INPUT({ type: "checkbox", name: "actions.audio" }), T("l_action_local_audio"))), DIV({ "class": "form-group" }, T("m_firefox_only"), " - ", T("m_autohide_popup"), ": ", SELECT({ "name": "actions.popup.autohide", "style": "width:auto" }, OPTION({ value: 0 }, T("l_never")), OPTION({ value: 5 }, "5s"), OPTION({ value: 10 }, "10s"), OPTION({ value: 20 }, "20s"), OPTION({ value: 60 }, "1m"), OPTION({ value: 120 }, "2m"), OPTION({ value: 300 }, "5m"))), DIV({ "class": "alert alert-info" }, A({ href: "https://distill.io/settings/actions" }, T("Change email action settings from web app!")))));
    this.setValues();
    return this;
  },
  saveValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        Service$1.store.Prefs.set(el.name, el.checked);
      } else {
        Service$1.store.Prefs.set(el.name, el.value);
      }
    });
  },
  setValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        el.checked = Service$1.store.Prefs.get(el.name);
      } else {
        el.value = Service$1.store.Prefs.get(el.name);
      }
    });
  }
});
const Tone = View$1.Base.extend({
  name: "Tone",
  className: "form-group",
  events: {
    "click button.xdel": "event_del",
    "click button.xplay": "event_play"
  },
  event_del: function() {
    this.model.collection.remove(this.model);
  },
  event_play: function() {
    if (this.model.get("type") == "file") {
      this.playFile();
    } else {
      this.playSrc(this.input.getValue());
    }
  },
  getDefaultName: function(path) {
    const parts = path.split(/(\/|\\)/);
    return parts.pop() || "New File";
  },
  onInputChange: function() {
    const value = this.input.getValue();
    if (_$9.isEmpty(this.label.getValue())) {
      this.label.setValue(this.getDefaultName(value));
    }
  },
  playFile: function() {
    if (this.input.field.files) {
      this.playSelectedFile();
    } else {
      this.playSavedFile();
    }
  },
  playSavedFile: function() {
    const self = this;
    const ref = this.model.get("value");
    KVStore.findOne(ref, function(err, doc) {
      self.playSrc(doc.value);
    });
  },
  async playSelectedFile() {
    const file = this.input.field.files[0];
    if (file) {
      this.playSrc(await readFile(file));
    } else {
      alert("Please select an audio file before playing it.");
    }
  },
  playSrc(src) {
    AUDIO({ src }).play();
  },
  postInit: function() {
    this.label = Editor.create({
      model: this.model,
      param: {
        label: "l_name",
        name: "label",
        type: "text"
      },
      parent: this
    });
    this.input = Editor.create({
      model: this.model,
      param: this.model.get("type") == "url" ? {
        label: "l_url",
        type: "url",
        name: "value"
      } : this.model.get("value") != null ? {
        type: "static",
        name: "value"
      } : {
        label: "l_file",
        type: "file",
        name: "value"
      },
      parent: this
    });
    this.listenTo(this.input, "change", this.onInputChange);
  },
  render: function() {
    this.$el.append(DIV({ "class": "col-md-3" }, this.label.render().el), DIV({ "class": "col-md-6" }, this.input.render().el), DIV({ "class": "col-md-3" }, BUTTON({ "class": "btn btn-default xplay" }, T("a_play")), " ", BUTTON({ "class": "btn btn-default xdel" }, I({ "class": "fa fa-times" }))));
    if (this.model.get("type") == "file" && this.model.get("value") == null) {
      this.input.field.click();
    }
    return this;
  }
});
const ErrorSect = View$1.Base.extend({
  name: "actions$errorSect",
  events: {
    "change": "event_change"
  },
  event_change: function() {
    this.saveValues();
  },
  render: function() {
    const sounds = _$9.findWhere(Model$2.SieveActionDescList, { type: C.ACTION_LOCAL_AUDIO })["params"][0].list;
    this.$el.attr({
      "id": "errorSect",
      "class": "panel panel-default"
    }).append(HEADER({ "class": "panel-heading" }, H3(T("Error Actions"))), DIV({ "class": "panel-body" }, DIV({ "class": "checkbox" }, LABEL(INPUT({ type: "checkbox", name: "errorAction.enabled" }), T("Trigger notifications"))), DIV({ "class": "form-group" }, T("l_notification_sound"), ": ", SELECT({ "name": "errorAction.sound", "style": "width:auto" }, sounds.map(function(sound, index) {
      return OPTION({ value: sound.value }, T(sound.label));
    }))), DIV({ "class": "form-group" }, T("Minimum time interval between notifications (in minutes): "), INPUT({ "type": "number", "style": "width: 60px;", "name": "errorAction.interval", "min": "1" })), DIV({ "class": "form-group" }, T("No. of consecutive errors to trigger notifications"), ": ", SELECT({ "name": "errorAction.minCount", "style": "width:auto" }, OPTION({ value: 1 }, "1"), OPTION({ value: 2 }, "2"), OPTION({ value: 3 }, "3"), OPTION({ value: 4 }, "4"), OPTION({ value: 5 }, "5"), OPTION({ value: 6 }, "6"), OPTION({ value: 7 }, "7"), OPTION({ value: 8 }, "8"), OPTION({ value: 9 }, "9"), OPTION({ value: 10 }, "10"))), DIV({ "class": "alert alert-info" }, T("h_error_notif_desc"))));
    this.setValues();
    return this;
  },
  saveValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        Service$1.store.Prefs.set(el.name, el.checked);
      } else {
        Service$1.store.Prefs.set(el.name, el.value);
      }
    });
  },
  setValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        el.checked = Service$1.store.Prefs.get(el.name);
      } else {
        el.value = Service$1.store.Prefs.get(el.name);
      }
    });
  }
});
const Tones = View$1.Collection.extend({
  name: "actions$Tones",
  actions: {
    "tones add file": { fn: "action_add_file" },
    "tones add url": { fn: "action_add_url" },
    "tones save": { fn: "action_save" }
  },
  action_add_file: function() {
    const model = new Backbone$9.Model({ type: "file" });
    this.collection.add(model);
  },
  action_add_url: function() {
    const model = new Backbone$9.Model({ type: "url" });
    this.collection.add(model);
  },
  async action_save() {
    let file;
    Msg.start("save", "l_loading");
    let tones = [];
    for (let view of _$9.values(this.views)) {
      const files2 = view.input.field.files;
      const model = view.model;
      const json = model.toJSON();
      const isNewFile = !!files2;
      if (isNewFile && (file = files2[0])) {
        let dataURI = await readFile(file);
        const id = "tone:" + await sha1(dataURI);
        await KVStore.create({ id, value: dataURI });
        json.value = id;
      }
      tones.push(json);
    }
    const value = JSON.stringify(tones);
    let res2 = await KVStore.update("tones", { value });
    if (res2 === 0) {
      await KVStore.create({ id: "tones", value });
    }
    const oldFileRefs = files(this.oldTones);
    const savedFileRefs = files(tones);
    const removedFiles = _$9.difference(oldFileRefs, savedFileRefs);
    for (let file2 of removedFiles) {
      await KVStore.destroy(file2);
    }
    Msg.reset();
    this.load();
    function files(tones2) {
      return tones2.filter((tone) => tone.type == "file").map((tone) => tone.value);
    }
  },
  addOne: function(model) {
    const view = new Tone({ parent: this, model }).render();
    this.$list.append(view.el);
    return view;
  },
  initCollection: function() {
    this.oldTones = [];
    this.collection = new Backbone$9.Collection();
  },
  load: async function() {
    let doc = await KVStore.findOne("tones");
    if (doc) {
      this.oldTones = JSON.parse(doc.value);
      this.collection.reset(this.oldTones);
    }
  },
  renderBase: function() {
    this.$el.attr({
      "id": "tones",
      "class": "panel panel-default"
    }).append(HEADER({ "class": "panel-heading clearfix" }, H3({ "class": "pull-left" }, "Tones"), DIV({ "class": "right" }, BUTTON({ "class": "btn btn-default btn-sm", "data-action": "tones add file" }, T("a_add_file")), BUTTON({ "class": "btn btn-default btn-sm", "data-action": "tones add url" }, T("a_add_url")))), DIV({ "class": "panel-body" }, DIV({ "class": "xlist" })), DIV({ "class": "panel-footer" }, BUTTON({ "class": "btn btn-primary", "data-action": "tones save" }, T("a_save"))));
    this.$list = this.$el.find(".xlist");
  }
});
const SettingsActions = View$1.ActionProvider.extend({
  name: "SettingsActions",
  load: function(callback) {
    this.tones.load(callback);
  },
  postInit: function() {
    this.common = new Common$1({ parent: this });
    this.errorSect = new ErrorSect({ parent: this });
    this.tones = new Tones({ parent: this });
  },
  render: function() {
    this.$el.append(this.common.render().el, this.errorSect.render().el, this.tones.render().el);
    return this;
  }
});
async function sha1(dataURI) {
  let encoder = new TextEncoder();
  let hashBuf = await crypto.subtle.digest("SHA-1", encoder.encode(dataURI));
  let hashArrBuf = Array.from(new Uint8Array(hashBuf));
  let hashHex = hashArrBuf.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.readAsDataURL(file);
  });
}
function create_fragment$S(ctx) {
  let elwrap;
  let current;
  elwrap = new ElWrap({ props: { el: ctx[0].el } });
  return {
    c() {
      create_component(elwrap.$$.fragment);
    },
    m(target, anchor) {
      mount_component(elwrap, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(elwrap.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(elwrap.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(elwrap, detaching);
    }
  };
}
function instance$R($$self) {
  const parent = getContext("view:root");
  let view = new SettingsActions({ parent }).render();
  view.load();
  return [view];
}
class ActionsExt_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$R, create_fragment$S, safe_not_equal, {});
  }
}
const $$8 = window.jQuery;
if (!$$8) {
  throw new Error("ADD jQuery");
}
const _$8 = window._;
if (!_$8) {
  throw new Error("ADD _");
}
const domo$7 = window.domo;
if (!domo$7) {
  throw new Error("ADD domo");
}
const Backbone$8 = window.Backbone;
if (!Backbone$8) {
  throw new Error("ADD Backbone");
}
const Common = View$1.Base.extend({
  name: "actions$Common",
  tagName: "form",
  events: {
    "change": "event_change"
  },
  event_change: function() {
    this.saveValues();
  },
  render: function() {
    this.$el.attr({
      "id": "common",
      "class": "panel panel-default"
    }).append(HEADER({ "class": "panel-heading" }, H3(T("l_advanced"))), DIV({ "class": "panel-body" }, DIV({ "class": "form-group" }, T("m_max_workers"), " ", SELECT({ name: "nworkers", style: "width:auto" }, OPTION({ value: 1 }, 1), OPTION({ value: 2 }, 2), OPTION({ value: 3 }, 3), OPTION({ value: 4 }, 4), OPTION({ value: 5 }, 5), OPTION({ value: 6 }, 6), OPTION({ value: 7 }, 7), OPTION({ value: 8 }, 8), OPTION({ value: 9 }, 9), OPTION({ value: 10 }, 10))), DIV({ "class": "form-group" }, T("m_load_page_options"), " ", SELECT({ name: "x-frame-load-in", style: "width:auto" }, OPTION({ value: "tab" }, T("l_opt_bgtab")), OPTION({ value: "window" }, T("l_opt_bgwindow")), OPTION({ value: "bg" }, T("l_opt_force_bg")), OPTION({ value: "sticky_window" }, T("l_opt_sticky_window"))), " ", A({ href: "https://distill.io/help/new-tab-chrome-extension" }, T("l_learn_more"))), DIV({ "class": "form-group" }, T("m_sticky_window_timeout"), " ", INPUT({ name: "sticky-window-timeout", type: "number", style: "width:auto" })), DIV({ "class": "form-group" }, DIV({ class: "alert alert-info" }, T("m_sticky_window_warning")), " ")));
    this.setValues();
    return this;
  },
  saveValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        Service$1.store.Prefs.set(el.name, el.checked);
      } else {
        Service$1.store.Prefs.set(el.name, el.value);
      }
    });
  },
  setValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        el.checked = Service$1.store.Prefs.get(el.name);
      } else {
        el.value = Service$1.store.Prefs.get(el.name);
      }
    });
  }
});
const SettingsAdvanced = View$1.ActionProvider.extend({
  name: "SettingsAdvanced",
  postInit: function() {
    this.common = new Common({ parent: this });
    this.timing = new TimingSlots({ parent: this });
  },
  render: function() {
    this.$el.append(this.common.render().el, this.timing.render().el);
    return this;
  }
});
var TimingSlots = View$1.Base.extend({
  name: "TimingSlots",
  events: {
    "change": "event_change"
  },
  postInit: async function() {
    try {
      const response = await Api.api("/subscriptions", "GET", { "state.in": [40, 45] });
      const activePlan = response.data[0].plan_id;
      if (activePlan[0] == "0") {
        $$8(this.elUnavailable).removeClass("hide");
      } else {
        $$8(this.elFormParent).removeClass("hide");
        if (Service$1.store.Prefs.get("sieve-slot.enabled")) {
          $$8(this.elTimeSlotData).removeClass("hide");
        }
      }
    } catch (e) {
      console.log(e);
      $$8(this.elUnavailable).removeClass("hide");
    }
  },
  render: function() {
    this.$el.attr({
      "id": "errorSect",
      "class": "panel panel-default"
    }).append(HEADER({ "class": "panel-heading" }, H3(T("l_time_slots"))), DIV({ "class": "container", "style": "width: 100%" }, this.elFormParent = DIV({ "class": "hide" }, DIV({ "class": "row", "style": "margin-top: 10px; margin-bottom: 10px;" }, DIV({ "class": "col-sm-12" }, DIV({ "class": "checkbox" }, LABEL(this.elSlotEnabled = INPUT({ type: "checkbox", name: "sieve-slot.enabled" }), T("l_time_slots_enabled"))))), this.elTimeSlotData = DIV({ "class": "hide" }, DIV({ "class": "row" }, DIV({ "class": "col-sm-4" }, this.formElemStart = DIV({ "class": "form-group" }, T("l_time_slots_start"), " ", this.elStartTime = INPUT({ name: "sieve-slot.start", type: "time", style: "width: 200px;" }))), DIV({ "class": "col-sm-4" }, this.formElemEnd = DIV({ "class": "form-group" }, T("l_time_slots_end"), " ", this.elEndTime = INPUT({ name: "sieve-slot.end", type: "time", style: "width: 200px;" }))), DIV({ "class": "col-sm-4" }, this.formElemDays = DIV({ "class": "form-group" }, T("l_time_slots_day"), " ", this.elSlotDays = SELECT({ name: "sieve-slot.days", id: "slot-days", multiple: true, style: "width: 200px; height: 120px;" }, OPTION({ value: 1 }, T("l_monday")), OPTION({ value: 2 }, T("l_tuesday")), OPTION({ value: 3 }, T("l_wednesday")), OPTION({ value: 4 }, T("l_thursday")), OPTION({ value: 5 }, T("l_friday")), OPTION({ value: 6 }, T("l_saturday")), OPTION({ value: 0 }, T("l_sunday")))))), this.elWarningMsg = DIV({ "class": "form-group" }, DIV({ class: "alert alert-info" }, T("m_day_warning")), " "))), this.elUnavailable = DIV({ "class": "form-group hide" }, DIV({ class: "alert alert-info" }, T("m_premium_only")), " ")));
    this.setValues();
    return this;
  },
  setValues: function() {
    this.$el.find("input").each(function() {
      if (this.type == "checkbox") {
        this.checked = Service$1.store.Prefs.get(this.name);
      } else {
        this.value = Service$1.store.Prefs.get(this.name);
      }
    });
    const map = Service$1.store.Prefs.get("time-slot-map");
    const keys = Object.keys(map);
    const slotDays = this.$el.find("#slot-days");
    slotDays.val(keys);
    if (slotDays.val().length < 5) {
      $$8(this.elWarningMsg).show();
    } else {
      $$8(this.elWarningMsg).hide();
    }
  },
  hideForm: function() {
    $$8(this.formElemStart).hide();
    $$8(this.formElemEnd).hide();
    $$8(this.formElemDays).hide();
    $$8(this.elWarningMsg).hide();
  },
  showForm: function() {
    $$8(this.formElemStart).show();
    $$8(this.formElemEnd).show();
    $$8(this.formElemDays).show();
    $$8(this.elWarningMsg).show();
  },
  saveValues: function() {
    this.$el.find("input").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        Service$1.store.Prefs.set(el.name, el.checked);
      } else {
        Service$1.store.Prefs.set(el.name, el.value);
      }
    });
    const slotDays = this.$el.find("#slot-days");
    const map = {};
    const days = slotDays.val();
    for (const i in days) {
      const day = days[i];
      map[day] = map[day] || [];
      map[day].push({ start: this.elStartTime.value, end: this.elEndTime.value });
    }
    Service$1.store.Prefs.set("time-slot-map", map);
  },
  event_change: function() {
    const slotDays = this.$el.find("#slot-days");
    if (this.elSlotEnabled.checked) {
      $$8(this.elTimeSlotData).removeClass("hide");
    } else {
      $$8(this.elTimeSlotData).addClass("hide");
    }
    if (slotDays.val().length < 5) {
      $$8(this.elWarningMsg).show();
    } else {
      $$8(this.elWarningMsg).hide();
    }
    this.saveValues();
  }
});
function create_fragment$R(ctx) {
  let elwrap;
  let current;
  elwrap = new ElWrap({ props: { el: ctx[0].el } });
  return {
    c() {
      create_component(elwrap.$$.fragment);
    },
    m(target, anchor) {
      mount_component(elwrap, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(elwrap.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(elwrap.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(elwrap, detaching);
    }
  };
}
function instance$Q($$self) {
  const parent = getContext("view:root");
  let view = new SettingsAdvanced({ parent }).render();
  return [view];
}
class AdvancedExt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$Q, create_fragment$R, safe_not_equal, {});
  }
}
class SessionSelector extends Base$1 {
  constructor({ model }) {
    super();
    this.model = model;
    this.setId(model.get("session_id"));
    this.state.names = {};
    if (App.user.isLoggedIn()) {
      this.loadSessions();
    }
  }
  async loadSessions(query = {}) {
    let res2 = await Api.api("/sessions", query);
    this.state.sessions = res2.data;
    let names = res2.data.reduce((m, s) => {
      m[s.id] = s.name;
      return m;
    }, {});
    let id = this.state.id;
    if (id && !names[id]) {
      let res3 = await Api.api(`/sessions/${id}`);
      names[id] = res3.name;
    }
    this.state.names = names;
  }
  onSearch(e) {
    this.loadSessions({
      "name.ilike": `%${e.target.value}%`
    });
  }
  setId(id, e) {
    e && e.preventDefault();
    this.state.id = id;
    this.model.set("session_id", id);
  }
  createTpl({ id, sessions, names }) {
    let loadedSessions = !!sessions;
    let team = get_store_value(params).team;
    return html`<div class='drowdown relative'>
      <a class='btn btn-default dropdown-toggle' data-toggle='dropdown'
        href='#'>
        Profile - ${!id ? "Empty" : names[id] || "Deleted"}
        <span class='caret'></span>
      </a>
      <ul class='dropdown-menu'>
        ${loadedSessions ? [
      html`
        <li>
          <div class='ma2' @click=${(e) => (e.preventDefault(), e.stopPropagation())}>
            <input type='text' class='ba0' placeholder='Search' @input=${(e) => this.onSearch(e)}></input>
          </div>
        </li>
          <li><a href='#' @click=${(e) => this.setId(null, e)}>
              <i class='mr2 fa ${!id ? "fa-check" : "mr4"}'></i>
              Empty (Default)</a></li>`,
      ...sessions.map((s) => html`<li>
            <a data-id=${s.id} href='#' @click=${(e) => this.setId(s.id, e)}>
              <i class='mr2 fa ${id == s.id ? "fa-check" : "mr4"}'></i>
              ${s.name}
            </a>
          </li>`),
      html`
          <li class='divider'></li>

          <li><a href='#/w/${team}/profiles/' target='_blank'>
              <span class='pl4'> Manage Profiles<span></a></li>

          <li><a href='${URL_WEBSITE}/kb/help/profiles-for-cloud-monitors' target='_blank'>
              <span class='pl4'> Learn More<span></a></li>
              `
    ] : html`<li><a>Loading...</a></li>`}
      </ul>
    </div>`;
  }
}
const async$7 = window.async;
if (!async$7) {
  throw new Error("ADD async");
}
class ClientSelector extends Base$1 {
  constructor({ model }) {
    super();
    this.model = model;
    this.state.showOptions = false;
    this.setClientId(this.getDefaultClientID());
    this.sessionSelector = new SessionSelector({ model });
    this.setProxyID(model.get("proxy_id"));
    this.state.proxyNames = {};
    if (App.user.isLoggedIn()) {
      this.loadProxies();
    }
  }
  getDefaultClientID() {
    let id = this.model.get("client_id") || App.clients.defaultId;
    let ids = this.model.getAccessibleClients(App.clients).map((c) => c.id);
    return ids.includes(id) ? id : ids[0];
  }
  setClientId(client_id) {
    this.state.client_id = client_id;
    this.model.set("client_id", client_id);
  }
  setProxyID(proxy_id, e) {
    e && e.preventDefault();
    this.state.proxy_id = proxy_id;
    this.model.set("proxy_id", proxy_id);
  }
  async loadProxies() {
    const res2 = await Api.api("/proxies", {
      only: ["id", "name", "cost"]
    });
    let globalData = (await Api.api("/proxies/global")).data;
    globalData = globalData.filter((p) => p.available);
    this.state.proxies = [...res2.data, ...globalData];
    res2.data.reduce((m, s) => (m[s.id] = s.name, m), this.state.proxyNames);
    globalData.reduce((m, s) => (m[s.id] = s.name, m), this.state.proxyNames);
  }
  createTpl({
    client_id,
    proxyNames,
    proxies,
    proxy_id,
    showOptions
  }) {
    let $params = get_store_value(params);
    let team = $params.team;
    let client = App.clients.get(client_id);
    let loadedProxies = !!proxies;
    let availableClients = this.model.getAccessibleClients(App.clients);
    return html`<div class='flex align-items'>
      <select @change=${(e) => this.setClientId(e.target.value)} class='mr3'>
        ${repeat(availableClients, (c) => c.id, (c) => html`<option value=${c.id} ?selected=${c.id == client_id}>${c.getInfo()}</option>`)}
      </select>
      ${client && client.isWeb() && !showOptions ? html`<a
        @click=${(e) => this.state.showOptions = true}
        href='javascript:void 0'>Options</a>` : ""}
      ${client && client.isWeb() && showOptions ? this.sessionSelector.el : ""}
      ${showOptions && client && client.isWeb() ? html`<div class='ml3 dropdown relative'>
        <a class='dropdown-toggle btn btn-default' data-toggle='dropdown'
          href=#
          >
          Proxy - ${!proxy_id ? "Shared Pool" : proxyNames[proxy_id] || "Deleted"} <span class='caret'></span>
        </a>
        <ul class='dropdown-menu'>
        ${loadedProxies ? [
      html`<li><a href='#' @click=${(e) => this.setProxyID(null, e)}>
            <i class='mr2 fa ${!proxy_id ? "fa-check" : "mr4"}'></i>
            Shared Pool (Default)</a></li>`,
      ...proxies.map((s) => html`<li>
            <a data-id=${s.id} href='#' @click=${(e) => this.setProxyID(s.id, e)}>
              <i class='mr2 fa ${proxy_id == s.id ? "fa-check" : "mr4"}'></i>
              ${s.name} ${s.cost > 1 ? `(${s.cost}x)` : ""}
            </a>
          </li>`),
      html`
          <li class='divider'></li>

          <li><a href='#/w/${team}/proxies/' target='_blank'>
              <span class='pl4'> Manage Proxies<span></a></li>

          <li><a href='${URL_WEBSITE}/kb/help/monitor-webpage-using-proxy-servers/' target='_blank'>
              <span class='pl4'> Learn More<span></a></li>
          `
    ] : html`<li><a>Loading...</a></li>`}
        </ul>
      
      </div>` : ""}
    </div>`;
  }
}
const ClientManager = View$1.Collection.extend({
  name: "ClientManager",
  actions: {
    "client edit name": {
      fn: "action_edit_name"
    },
    "client remove": {
      fn: "action_remove"
    }
  },
  action_edit_name: function(id) {
    const view = Editor.create("text");
    const model = this.collection.get(id);
    const modal = new View$1.PromptModal({
      title: "l_name",
      parent: this.getRoot(),
      view,
      width: 500
    });
    modal.show();
    view.setValue(model.get("info"));
    $(view.field).focus();
    modal.on("save", () => {
      const value = view.getValue();
      model.save({ "info": value }, { patch: true });
      modal.remove();
      this.onReset(this.collection, {
        previousModels: this.collection.models
      });
    });
  },
  action_remove: function(id) {
    const model = this.collection.get(id);
    if (id == this.collection.defaultId) {
      return alert(T("Can't remove self"));
    } else if (model.isWeb()) {
      return alert(T("Can't remove web app"));
    } else if (confirm(T("Remove " + model.get("info") + "?"))) {
      model.save({ state: 90 }, {
        wait: true,
        success: () => {
          this.collection.remove(model);
        }
      });
    }
  },
  addOne: function(model) {
    if (model.get("type") < 3) {
      return new View$1.Base();
    }
    const info = model.get("info");
    const isThisClient = model.id == this.collection.defaultId;
    const view = new View$1.Base({
      el: P(SPAN(BUTTON({
        "class": "btn btn-default btn-xs",
        "data-action": "client edit name",
        "data-action-param": model.id
      }, I({ "class": "fa fa-edit" })), " ", BUTTON({
        "class": "btn btn-danger btn-xs",
        "data-action": "client remove",
        "data-action-param": model.id
      }, I({ "class": "fa fa-trash-o" }))), " ", SPAN({ style: isThisClient ? "font-weight: bold;" : "" }, info, isThisClient ? " (" + T("l_device_this") + ")" : ""), SMALL({}, moment(model.get("ts")).format(" (YYYY-MM-DD)"))),
      parent: this
    }).render();
    this.$el.append(view.el);
    return view;
  },
  onSave: function() {
    Msg.info("l_loading");
    async$7.eachSeries(this.collection.models, function(model, callback) {
      if (model.hasChanged("info")) {
        model.save(null, {
          error: function() {
            callback(new Error("Failed to save changes"));
          },
          success: function() {
            callback();
          }
        });
      } else {
        callback();
      }
    }, function(err) {
      Msg.reset();
    });
  },
  renderBase: function() {
  }
});
var ViewClients = {
  ClientManager,
  ClientSelector
};
function create_fragment$Q(ctx) {
  let div3;
  let div0;
  let t3;
  let div2;
  let div1;
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      div0.innerHTML = `<h3>Manage Devices</h3> 
    <small>Rename devices or remove unused ones</small>`;
      t3 = space();
      div2 = element("div");
      div1 = element("div");
      attr(div0, "class", "panel-heading");
      attr(div2, "class", "panel-body");
      attr(div3, "class", "panel panel-default");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div0);
      append(div3, t3);
      append(div3, div2);
      append(div2, div1);
      ctx[1](div1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
      ctx[1](null);
    }
  };
}
function instance$P($$self, $$props, $$invalidate) {
  const clients = new ModelClient.Clients();
  const parent = getContext("view:root");
  let el;
  let view;
  onMount(async () => {
    await clients.fetch({
      data: {
        "state.in": [0, 30],
        "_opt": { order: ["ts"] }
      }
    });
    view = new ViewClients.ClientManager({ el, parent, collection: clients });
    view.render();
    return () => view.remove();
  });
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  return [el, div1_binding];
}
class Devices extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$P, create_fragment$Q, safe_not_equal, {});
  }
}
const $$7 = window.jQuery;
if (!$$7) {
  throw new Error("ADD jQuery");
}
const _$7 = window._;
if (!_$7) {
  throw new Error("ADD _");
}
const Backbone$7 = window.Backbone;
if (!Backbone$7) {
  throw new Error("ADD Backbone");
}
var General = View$1.ActionProvider.extend({
  name: "SettingsGeneral",
  actions: {
    "settings signout": { fn: "action_signout" },
    "settings close": { fn: "closeLoginForm" }
  },
  events: {
    "change": "event_change",
    "click .xclose": "closeLoginForm"
  },
  closeLoginForm: function() {
    this.loginView.remove();
    $$7(this.elLoginCt).remove();
    this.updateUser();
  },
  action_signout: function() {
    Service$1.auth.logout();
    location.href = Service$1.CFG.URL.ROOT + "/logout";
  },
  event_change: function() {
    this.saveValues();
  },
  load: function() {
    this.setValues();
  },
  render: function() {
    this.$el.append(DIV({ "class": "panel panel-default" }, HEADER({ "class": "panel-heading" }, H3("General")), DIV({ "class": "panel-body" }, DIV({ "class": "form-group" }, H4(T("l_account")), A({ "class": "btn btn-primary", "href": `${Service$1.CFG.URL.ROOT}/service-login?redirect=app://ui/inbox.html#inbox`, "data-action": "settings signin" }), BUTTON({ "class": "btn btn-default", "style": "margin-left: 20px;", "data-action": "settings signout" }, T("a_signout"))), DIV(T("m_ext_signin")))));
    this.elSignIn = this.$('[data-action="settings signin"]');
    this.elSyncInfo = this.$(".alert");
    return this;
  },
  saveValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        Service$1.store.Prefs.set(el.name, el.checked);
      } else {
        Service$1.store.Prefs.set(el.name, el.value);
      }
    });
  },
  setValues: function() {
    this.$el.find("input,select").each(function() {
      const el = this;
      if (el.type == "checkbox") {
        el.checked = Service$1.store.Prefs.get(el.name);
      } else {
        el.value = Service$1.store.Prefs.get(el.name);
      }
    });
    this.showCred();
  },
  showCred: function() {
    if (USER.name) {
      this.elSignIn.text(SPRINTF("l_signed_in_as", `${USER.name} (${USER.email})`));
    } else {
      this.elSignIn.text(T("a_signin"));
    }
  },
  updateUser: function() {
    Service$1.auth.getUser((err, user) => {
      _$7.extend(USER, user);
      this.showCred();
    });
  }
});
function create_fragment$P(ctx) {
  let elwrap;
  let current;
  elwrap = new ElWrap({ props: { el: ctx[0].el } });
  return {
    c() {
      create_component(elwrap.$$.fragment);
    },
    m(target, anchor) {
      mount_component(elwrap, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(elwrap.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(elwrap.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(elwrap, detaching);
    }
  };
}
function instance$O($$self) {
  const parent = getContext("view:root");
  let view = new General({ parent }).render();
  view.load();
  return [view];
}
class GeneralExt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$O, create_fragment$P, safe_not_equal, {});
  }
}
function create_default_slot$h(ctx) {
  let div7;
  let div6;
  let div4;
  let div1;
  let t3;
  let div2;
  let a0;
  let t5;
  let a1;
  let t7;
  let a2;
  let t9;
  let a3;
  let t11;
  let div3;
  let a4;
  let t12;
  let i4;
  let t13;
  let a5;
  let t14;
  let i5;
  let t15;
  let a6;
  let t16;
  let i6;
  let t17;
  let a7;
  let t18;
  let i7;
  let t19;
  let a8;
  let t20;
  let i8;
  let t21;
  let div5;
  let switch_instance;
  let current;
  var switch_value = ctx[1][ctx[0].module];
  function switch_props(ctx2) {
    return {};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }
  return {
    c() {
      div7 = element("div");
      div6 = element("div");
      div4 = element("div");
      div1 = element("div");
      div1.innerHTML = `<button type="button" data-toggle="collapse" data-target="#sidebar" aria-expanded="false" aria-controls="sidebar" style="margin-bottom: 10px; width: 100%; outline: none !important;" class="btn btn-primary btn-text visible-xs collapsed"><span>Show Navigation</span> 
            <div>Hide Navigation</div></button>`;
      t3 = space();
      div2 = element("div");
      a0 = element("a");
      a0.innerHTML = `General<i class="fa fa-chevron-right right"></i>`;
      t5 = space();
      a1 = element("a");
      a1.innerHTML = `Actions<i class="fa fa-chevron-right right"></i>`;
      t7 = space();
      a2 = element("a");
      a2.innerHTML = `Devices<i class="fa fa-chevron-right right"></i>`;
      t9 = space();
      a3 = element("a");
      a3.innerHTML = `Advanced<i class="fa fa-chevron-right right"></i>`;
      t11 = space();
      div3 = element("div");
      a4 = element("a");
      t12 = text("Account");
      i4 = element("i");
      t13 = space();
      a5 = element("a");
      t14 = text("Alert Format");
      i5 = element("i");
      t15 = space();
      a6 = element("a");
      t16 = text("Billing");
      i6 = element("i");
      t17 = space();
      a7 = element("a");
      t18 = text("Emails and Phones");
      i7 = element("i");
      t19 = space();
      a8 = element("a");
      t20 = text("Profile");
      i8 = element("i");
      t21 = space();
      div5 = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      set_style(div1, "text-align", "center");
      attr(div1, "class", "wrapper");
      attr(a0, "href", "#/settings/general/");
      attr(a0, "class", "list-group-item");
      toggle_class(a0, "active", ctx[0].module == "general");
      attr(a1, "href", "#/settings/actions/");
      attr(a1, "class", "list-group-item");
      toggle_class(a1, "active", ctx[0].module == "actions");
      attr(a2, "href", "#/settings/devices/");
      attr(a2, "class", "list-group-item");
      toggle_class(a2, "active", ctx[0].module == "devices");
      attr(a3, "href", "#/settings/advanced/");
      attr(a3, "class", "list-group-item");
      toggle_class(a3, "active", ctx[0].module == "advanced");
      attr(div2, "class", "list-group collapse dont-collapse-sm");
      attr(i4, "class", "fa fa-external-link right");
      attr(a4, "href", "" + (URL_ROOT + "#/settings/account/"));
      attr(a4, "class", "list-group-item");
      attr(a4, "target", "_blank");
      attr(i5, "class", "fa fa-external-link right");
      attr(a5, "href", "" + (URL_ROOT + "#/settings/actions/"));
      attr(a5, "class", "list-group-item");
      attr(a5, "target", "_blank");
      attr(i6, "class", "fa fa-external-link right");
      attr(a6, "href", "" + (URL_ROOT + "#/settings/billing/"));
      attr(a6, "class", "list-group-item");
      attr(a6, "target", "_blank");
      attr(i7, "class", "fa fa-external-link right");
      attr(a7, "href", "" + (URL_ROOT + "#/settings/emails_phones/"));
      attr(a7, "class", "list-group-item");
      attr(a7, "target", "_blank");
      attr(i8, "class", "fa fa-external-link right");
      attr(a8, "href", "" + (URL_ROOT + "#/settings/profile/"));
      attr(a8, "class", "list-group-item");
      attr(a8, "target", "_blank");
      attr(div3, "class", "list-group collapse dont-collapse-sm");
      attr(div4, "class", "col-sm-3");
      attr(div5, "class", "col-sm-9");
      attr(div6, "class", "row");
      attr(div7, "class", "container");
    },
    m(target, anchor) {
      insert(target, div7, anchor);
      append(div7, div6);
      append(div6, div4);
      append(div4, div1);
      append(div4, t3);
      append(div4, div2);
      append(div2, a0);
      append(div2, t5);
      append(div2, a1);
      append(div2, t7);
      append(div2, a2);
      append(div2, t9);
      append(div2, a3);
      append(div4, t11);
      append(div4, div3);
      append(div3, a4);
      append(a4, t12);
      append(a4, i4);
      append(div3, t13);
      append(div3, a5);
      append(a5, t14);
      append(a5, i5);
      append(div3, t15);
      append(div3, a6);
      append(a6, t16);
      append(a6, i6);
      append(div3, t17);
      append(div3, a7);
      append(a7, t18);
      append(a7, i7);
      append(div3, t19);
      append(div3, a8);
      append(a8, t20);
      append(a8, i8);
      append(div6, t21);
      append(div6, div5);
      if (switch_instance) {
        mount_component(switch_instance, div5, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        toggle_class(a0, "active", ctx2[0].module == "general");
      }
      if (dirty & 1) {
        toggle_class(a1, "active", ctx2[0].module == "actions");
      }
      if (dirty & 1) {
        toggle_class(a2, "active", ctx2[0].module == "devices");
      }
      if (dirty & 1) {
        toggle_class(a3, "active", ctx2[0].module == "advanced");
      }
      if (switch_value !== (switch_value = ctx2[1][ctx2[0].module])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div5, null);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
}
function create_extra_slot$4(ctx) {
  let topbar;
  let current;
  topbar = new Topbar$1({ props: { title: "Settings" } });
  return {
    c() {
      create_component(topbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topbar, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(topbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topbar, detaching);
    }
  };
}
function create_fragment$O(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      $$slots: {
        extra: [create_extra_slot$4],
        default: [create_default_slot$h]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 5) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function instance$N($$self, $$props, $$invalidate) {
  let { params: params2 } = $$props;
  const components = {
    actions: ActionsExt_1,
    advanced: AdvancedExt,
    devices: Devices,
    general: GeneralExt
  };
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(0, params2 = $$props2.params);
  };
  return [params2, components];
}
class Index_ext extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$N, create_fragment$O, safe_not_equal, { params: 0 });
  }
}
var ConfirmBtn_svelte_svelte_type_style_lang = "";
function create_if_block$p(ctx) {
  let ul;
  let t0;
  let li0;
  let a0;
  let t1;
  let t2;
  let li1;
  let a1;
  let t3;
  let mounted;
  let dispose;
  let if_block = ctx[2] && create_if_block_1$g(ctx);
  return {
    c() {
      ul = element("ul");
      if (if_block)
        if_block.c();
      t0 = space();
      li0 = element("li");
      a0 = element("a");
      t1 = text("No");
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      t3 = text("Yes");
      attr(a0, "href", href$4);
      attr(a1, "href", href$4);
      attr(a1, "class", "del svelte-wvb0dh");
      attr(ul, "class", "dropdown-menu");
      toggle_class(ul, "dropdown-menu-right", ctx[0]);
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      if (if_block)
        if_block.m(ul, null);
      append(ul, t0);
      append(ul, li0);
      append(li0, a0);
      append(a0, t1);
      append(ul, t2);
      append(ul, li1);
      append(li1, a1);
      append(a1, t3);
      if (!mounted) {
        dispose = [
          listen(a0, "click", ctx[6]),
          listen(a1, "click", ctx[11]),
          listen(a1, "click", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$g(ctx2);
          if_block.c();
          if_block.m(ul, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 1) {
        toggle_class(ul, "dropdown-menu-right", ctx2[0]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$g(ctx) {
  let li;
  let t;
  return {
    c() {
      li = element("li");
      t = text(ctx[2]);
      attr(li, "class", "dropdown-header");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$N(ctx) {
  let div;
  let button;
  let button_class_value;
  let t;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let if_block = ctx[4] && create_if_block$p(ctx);
  return {
    c() {
      div = element("div");
      button = element("button");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      attr(button, "class", button_class_value = "btn btn-default " + ctx[1] + " svelte-wvb0dh");
      button.disabled = ctx[4];
      attr(div, "class", "dropdown open inline");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, button);
      if (default_slot) {
        default_slot.m(button, null);
      }
      append(div, t);
      if (if_block)
        if_block.m(div, null);
      ctx[12](div);
      current = true;
      if (!mounted) {
        dispose = [
          listen(window, "keydown", ctx[7]),
          listen(window, "mousedown", ctx[8]),
          listen(button, "click", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, null), null);
        }
      }
      if (!current || dirty & 2 && button_class_value !== (button_class_value = "btn btn-default " + ctx2[1] + " svelte-wvb0dh")) {
        attr(button, "class", button_class_value);
      }
      if (!current || dirty & 16) {
        button.disabled = ctx2[4];
      }
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$p(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
      ctx[12](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let href$4 = "#";
function instance$M($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { alignRight = false } = $$props;
  let { class: clazz = "" } = $$props;
  let { msg = "" } = $$props;
  let el;
  let confirm2 = false;
  function onConfirm(e) {
    $$invalidate(4, confirm2 = true);
    e.preventDefault();
  }
  function onAClick(e) {
    e.preventDefault();
    $$invalidate(4, confirm2 = false);
  }
  function onKeydown(e) {
    if (e.key === "Escape") {
      $$invalidate(4, confirm2 = false);
    }
  }
  function onMouseDown(e) {
    if (!el.contains(e.target)) {
      $$invalidate(4, confirm2 = false);
    }
  }
  function click_handler2(event) {
    bubble.call(this, $$self, event);
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(3, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("alignRight" in $$props2)
      $$invalidate(0, alignRight = $$props2.alignRight);
    if ("class" in $$props2)
      $$invalidate(1, clazz = $$props2.class);
    if ("msg" in $$props2)
      $$invalidate(2, msg = $$props2.msg);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  return [
    alignRight,
    clazz,
    msg,
    el,
    confirm2,
    onConfirm,
    onAClick,
    onKeydown,
    onMouseDown,
    $$scope,
    slots,
    click_handler2,
    div_binding
  ];
}
class ConfirmBtn extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$M, create_fragment$N, safe_not_equal, { alignRight: 0, class: 1, msg: 2 });
  }
}
var Modal_svelte_svelte_type_style_lang$1 = "";
const get_buttons_slot_changes = (dirty) => ({});
const get_buttons_slot_context = (ctx) => ({});
const get_header_slot_changes$2 = (dirty) => ({});
const get_header_slot_context$2 = (ctx) => ({});
function create_fragment$M(ctx) {
  let div5;
  let div4;
  let div3;
  let div0;
  let button0;
  let t1;
  let h4;
  let t2;
  let div1;
  let t3;
  let div2;
  let t4;
  let button1;
  let current;
  let mounted;
  let dispose;
  const header_slot_template = ctx[5].header;
  const header_slot = create_slot(header_slot_template, ctx, ctx[4], get_header_slot_context$2);
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  const buttons_slot_template = ctx[5].buttons;
  const buttons_slot = create_slot(buttons_slot_template, ctx, ctx[4], get_buttons_slot_context);
  return {
    c() {
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      button0 = element("button");
      button0.innerHTML = `<span aria-hidden="true">\xD7</span>`;
      t1 = space();
      h4 = element("h4");
      if (header_slot)
        header_slot.c();
      t2 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      t3 = space();
      div2 = element("div");
      if (buttons_slot)
        buttons_slot.c();
      t4 = space();
      button1 = element("button");
      button1.textContent = `${T("a_cancel")}`;
      attr(button0, "type", "button");
      attr(button0, "class", "close");
      attr(button0, "data-dismiss", "modal");
      attr(button0, "aria-label", "Close");
      attr(h4, "class", "modal-title");
      attr(div0, "class", "modal-header");
      attr(div1, "class", "modal-body");
      attr(button1, "type", "button");
      attr(button1, "class", "btn btn-default");
      button1.autofocus = true;
      attr(div2, "class", "modal-footer flex svelte-2d6d73");
      attr(div3, "class", "modal-content");
      attr(div4, "class", "modal-dialog");
      attr(div4, "role", "document");
      attr(div5, "class", "modal svelte-2d6d73");
      attr(div5, "tabindex", "-1");
      attr(div5, "role", "dialog");
      set_style(div5, "display", "block");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div4);
      append(div4, div3);
      append(div3, div0);
      append(div0, button0);
      append(div0, t1);
      append(div0, h4);
      if (header_slot) {
        header_slot.m(h4, null);
      }
      append(div3, t2);
      append(div3, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append(div3, t3);
      append(div3, div2);
      if (buttons_slot) {
        buttons_slot.m(div2, null);
      }
      append(div2, t4);
      append(div2, button1);
      ctx[7](div5);
      current = true;
      button1.focus();
      if (!mounted) {
        dispose = [
          listen(window, "keydown", ctx[3]),
          listen(button0, "click", ctx[2]),
          listen(button1, "click", ctx[2]),
          listen(div4, "click", click_handler),
          listen(div5, "click", ctx[6]),
          action_destroyer(portal.call(null, div5))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & 16)) {
          update_slot_base(header_slot, header_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(header_slot_template, ctx2[4], dirty, get_header_slot_changes$2), get_header_slot_context$2);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null), null);
        }
      }
      if (buttons_slot) {
        if (buttons_slot.p && (!current || dirty & 16)) {
          update_slot_base(buttons_slot, buttons_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(buttons_slot_template, ctx2[4], dirty, get_buttons_slot_changes), get_buttons_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot, local);
      transition_in(default_slot, local);
      transition_in(buttons_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header_slot, local);
      transition_out(default_slot, local);
      transition_out(buttons_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      if (header_slot)
        header_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      if (buttons_slot)
        buttons_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
const click_handler = (e) => e.stopPropagation();
function instance$L($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { closeOnClickOut = false } = $$props;
  const dispatch = createEventDispatcher();
  const onClose = () => dispatch("close");
  let modal;
  const onKeydown = (e) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "Tab") {
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);
      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey)
        index = 0;
      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;
      tabbable[index].focus();
      e.preventDefault();
    }
  };
  const previouslyFocused = typeof document !== "undefined" && document.activeElement;
  if (previouslyFocused) {
    onDestroy(() => {
      previouslyFocused.focus();
    });
  }
  const click_handler_1 = (e) => closeOnClickOut && onClose();
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modal = $$value;
      $$invalidate(1, modal);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("closeOnClickOut" in $$props2)
      $$invalidate(0, closeOnClickOut = $$props2.closeOnClickOut);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [
    closeOnClickOut,
    modal,
    onClose,
    onKeydown,
    $$scope,
    slots,
    click_handler_1,
    div5_binding
  ];
}
class Modal$2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$L, create_fragment$M, safe_not_equal, { closeOnClickOut: 0 });
  }
}
function create_if_block$o(ctx) {
  let div;
  let t0;
  let t1_value = (ctx[2].message || JSON.stringify(ctx[2])) + "";
  let t1;
  let t2;
  return {
    c() {
      div = element("div");
      t0 = text("Please try again later. Error: ");
      t1 = text(t1_value);
      t2 = text(".");
      attr(div, "class", "error");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
      append(div, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t1_value !== (t1_value = (ctx2[2].message || JSON.stringify(ctx2[2])) + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$g(ctx) {
  let div;
  let t;
  let current;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  let if_block = ctx[2] && create_if_block$o(ctx);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append(div, t);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, null), null);
        }
      }
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$o(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
    }
  };
}
function create_header_slot$3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[0]);
      attr(div, "slot", "header");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_buttons_slot$1(ctx) {
  let div;
  let button;
  let t_value = T(ctx[1] ? "l_loading" : "a_save") + "";
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      t = text(t_value);
      attr(button, "type", "button");
      attr(button, "class", "btn btn-primary");
      button.disabled = ctx[1];
      attr(div, "slot", "buttons");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, button);
      append(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = T(ctx2[1] ? "l_loading" : "a_save") + ""))
        set_data(t, t_value);
      if (dirty & 2) {
        button.disabled = ctx2[1];
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$L(ctx) {
  let modal;
  let current;
  modal = new Modal$2({
    props: {
      $$slots: {
        buttons: [create_buttons_slot$1],
        header: [create_header_slot$3],
        default: [create_default_slot$g]
      },
      $$scope: { ctx }
    }
  });
  modal.$on("close", ctx[6]);
  modal.$on("save", ctx[7]);
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & 263) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function instance$K($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = "Edit" } = $$props;
  let { onSave } = $$props;
  let saving = false;
  let error = false;
  async function onSaveClick() {
    $$invalidate(1, saving = true);
    $$invalidate(2, error = false);
    try {
      await onSave();
      $$invalidate(1, saving = false);
    } catch (e) {
      console.error(e);
      $$invalidate(2, error = e);
    }
  }
  function close_handler(event) {
    bubble.call(this, $$self, event);
  }
  function save_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("onSave" in $$props2)
      $$invalidate(4, onSave = $$props2.onSave);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  return [
    title,
    saving,
    error,
    onSaveClick,
    onSave,
    slots,
    close_handler,
    save_handler,
    $$scope
  ];
}
class SaveModal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$K, create_fragment$L, safe_not_equal, { title: 0, onSave: 4 });
  }
}
function create_if_block_2$a(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      attr(input, "type", "checkbox");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      input.checked = ctx[0].permissions.edit;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[7]),
          listen(input, "change", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        input.checked = ctx2[0].permissions.edit;
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$f(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      attr(input, "type", "checkbox");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      input.checked = ctx[0].permissions.admin;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[9]),
          listen(input, "change", ctx[10])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        input.checked = ctx2[0].permissions.admin;
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$n(ctx) {
  let confirmbtn;
  let current;
  confirmbtn = new ConfirmBtn({
    props: {
      $$slots: { default: [create_default_slot$f] },
      $$scope: { ctx }
    }
  });
  confirmbtn.$on("click", ctx[4]);
  return {
    c() {
      create_component(confirmbtn.$$.fragment);
    },
    m(target, anchor) {
      mount_component(confirmbtn, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const confirmbtn_changes = {};
      if (dirty & 4096) {
        confirmbtn_changes.$$scope = { dirty, ctx: ctx2 };
      }
      confirmbtn.$set(confirmbtn_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(confirmbtn.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(confirmbtn.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(confirmbtn, detaching);
    }
  };
}
function create_default_slot$f(ctx) {
  let t;
  return {
    c() {
      t = text("Remove User");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$K(ctx) {
  let tr;
  let td0;
  let t0_value = ctx[0].full_name + "";
  let t0;
  let t1;
  let td1;
  let t2_value = ctx[0].email + "";
  let t2;
  let t3;
  let td2;
  let t4;
  let td3;
  let t5;
  let td4;
  let current;
  let if_block0 = !ctx[3] && ctx[1].permissions.admin && create_if_block_2$a(ctx);
  let if_block1 = !ctx[3] && ctx[1].permissions.admin && create_if_block_1$f(ctx);
  let if_block2 = ctx[0].id != ctx[2].id && ctx[1].permissions.admin && create_if_block$n(ctx);
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      if (if_block0)
        if_block0.c();
      t4 = space();
      td3 = element("td");
      if (if_block1)
        if_block1.c();
      t5 = space();
      td4 = element("td");
      if (if_block2)
        if_block2.c();
      attr(td0, "class", "pa3");
      set_style(td0, "border-bottom", "solid 1px #ccc");
      attr(td1, "class", "pa3");
      set_style(td1, "border-bottom", "solid 1px #ccc");
      attr(td2, "class", "pa3");
      set_style(td2, "border-bottom", "solid 1px #ccc");
      set_style(td3, "padding", "5px");
      set_style(td3, "border-bottom", "solid 1px #ccc");
      set_style(td4, "padding", "5px");
      set_style(td4, "border-bottom", "solid 1px #ccc");
      set_style(tr, "height", "50px");
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, t0);
      append(tr, t1);
      append(tr, td1);
      append(td1, t2);
      append(tr, t3);
      append(tr, td2);
      if (if_block0)
        if_block0.m(td2, null);
      append(tr, t4);
      append(tr, td3);
      if (if_block1)
        if_block1.m(td3, null);
      append(tr, t5);
      append(tr, td4);
      if (if_block2)
        if_block2.m(td4, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[0].full_name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[0].email + ""))
        set_data(t2, t2_value);
      if (!ctx2[3] && ctx2[1].permissions.admin) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$a(ctx2);
          if_block0.c();
          if_block0.m(td2, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!ctx2[3] && ctx2[1].permissions.admin) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$f(ctx2);
          if_block1.c();
          if_block1.m(td3, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[0].id != ctx2[2].id && ctx2[1].permissions.admin) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 3) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$n(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(td4, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
function instance$J($$self, $$props, $$invalidate) {
  let { group: group2 } = $$props;
  let { user } = $$props;
  let { reload } = $$props;
  const USER2 = getContext("user");
  const isSelf = user.id == USER2.id;
  async function onRemoveClick() {
    await Api.api(`/groups/${group2.id}/unsubscribe/${user.id}`, "DELETE");
    reload();
  }
  async function onChangeRole(e, context) {
    if (context == "admin") {
      if (e.target.checked) {
        await saveRole(user.id, { admin: true, edit: true });
      } else {
        await saveRole(user.id, { admin: false, edit: true });
      }
    } else if (context == "edit") {
      if (e.target.checked) {
        await saveRole(user.id, { admin: false, edit: true });
      } else {
        await saveRole(user.id, { admin: false, edit: false });
      }
    }
    reload();
  }
  async function saveRole(id, permissions) {
    try {
      await Api.api(`/groups/${group2.id}/role/${id}`, "PUT", permissions);
      reload();
    } catch (e) {
      console.error(e);
    }
  }
  const change_handler = (e) => onChangeRole(e, "edit");
  function input_change_handler() {
    user.permissions.edit = this.checked;
    $$invalidate(0, user);
  }
  const change_handler_1 = (e) => onChangeRole(e, "admin");
  function input_change_handler_1() {
    user.permissions.admin = this.checked;
    $$invalidate(0, user);
  }
  $$self.$$set = ($$props2) => {
    if ("group" in $$props2)
      $$invalidate(1, group2 = $$props2.group);
    if ("user" in $$props2)
      $$invalidate(0, user = $$props2.user);
    if ("reload" in $$props2)
      $$invalidate(6, reload = $$props2.reload);
  };
  return [
    user,
    group2,
    USER2,
    isSelf,
    onRemoveClick,
    onChangeRole,
    reload,
    change_handler,
    input_change_handler,
    change_handler_1,
    input_change_handler_1
  ];
}
class TeamUser extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$J, create_fragment$K, safe_not_equal, { group: 1, user: 0, reload: 6 });
  }
}
var Team_svelte_svelte_type_style_lang = "";
function get_each_context$d(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_catch_block$7(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$7(ctx) {
  let div9;
  let div3;
  let div0;
  let t0;
  let div1;
  let button;
  let t2;
  let div2;
  let t3;
  let div8;
  let div4;
  let t4;
  let div6;
  let div5;
  let h4;
  let t5;
  let t6_value = ctx[1].name + "";
  let t6;
  let t7;
  let t8;
  let table;
  let thead;
  let t18;
  let tbody;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t19;
  let t20;
  let div7;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[1].permissions.admin && create_if_block_2$9(ctx);
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[8].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$d(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$d(key, child_ctx));
  }
  let if_block1 = ctx[1].permissions.admin && create_if_block_1$e(ctx);
  return {
    c() {
      div9 = element("div");
      div3 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      button = element("button");
      button.innerHTML = `<i class="fa fa-caret-left mr2" aria-hidden="true"></i> Back`;
      t2 = space();
      div2 = element("div");
      t3 = space();
      div8 = element("div");
      div4 = element("div");
      t4 = space();
      div6 = element("div");
      div5 = element("div");
      h4 = element("h4");
      t5 = text("Team: ");
      t6 = text(t6_value);
      t7 = space();
      if (if_block0)
        if_block0.c();
      t8 = space();
      table = element("table");
      thead = element("thead");
      thead.innerHTML = `<tr><th class="pa3 svelte-15nnkot">Name</th> 
                <th class="pa3 svelte-15nnkot">Email</th> 
                <th class="pa3 svelte-15nnkot">Edit</th> 
                <th class="pa3 svelte-15nnkot">Admin</th> 
                <th class="pa3 svelte-15nnkot" style="width: 300px;">Remove</th></tr>`;
      t18 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t19 = space();
      if (if_block1)
        if_block1.c();
      t20 = space();
      div7 = element("div");
      attr(div0, "class", "col-md-2");
      attr(button, "class", "btn btn-default");
      attr(button, "type", "button");
      attr(div1, "class", "col-md-2");
      attr(div2, "class", "col-md-8");
      attr(div3, "class", "row");
      attr(div4, "class", "col-md-2");
      attr(div5, "class", "page-header");
      set_style(table, "width", "100%");
      set_style(table, "margin-bottom", "40px");
      attr(div6, "class", "col-md-8");
      attr(div7, "class", "col-md-2");
      attr(div8, "class", "row");
      attr(div9, "class", "container-fluid");
    },
    m(target, anchor) {
      insert(target, div9, anchor);
      append(div9, div3);
      append(div3, div0);
      append(div3, t0);
      append(div3, div1);
      append(div1, button);
      append(div3, t2);
      append(div3, div2);
      append(div9, t3);
      append(div9, div8);
      append(div8, div4);
      append(div8, t4);
      append(div8, div6);
      append(div6, div5);
      append(div5, h4);
      append(h4, t5);
      append(h4, t6);
      append(h4, t7);
      if (if_block0)
        if_block0.m(h4, null);
      append(div6, t8);
      append(div6, table);
      append(table, thead);
      append(table, t18);
      append(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      append(div6, t19);
      if (if_block1)
        if_block1.m(div6, null);
      append(div8, t20);
      append(div8, div7);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[11]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 2) && t6_value !== (t6_value = ctx2[1].name + ""))
        set_data(t6, t6_value);
      if (ctx2[1].permissions.admin) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$9(ctx2);
          if_block0.c();
          if_block0.m(h4, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & 131) {
        each_value = ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, tbody, outro_and_destroy_block, create_each_block$d, null, get_each_context$d);
        check_outros();
      }
      if (ctx2[1].permissions.admin) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$e(ctx2);
          if_block1.c();
          if_block1.m(div6, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div9);
      if (if_block0)
        if_block0.d();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2$9(ctx) {
  let a;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      a.textContent = "Edit";
      attr(a, "class", "f6");
      attr(a, "href", "#");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      if (!mounted) {
        dispose = listen(a, "click", ctx[5]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block$d(key_1, ctx) {
  let first;
  let teamuser;
  let current;
  teamuser = new TeamUser({
    props: {
      user: ctx[8],
      group: ctx[1],
      reload: ctx[7]
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(teamuser.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(teamuser, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const teamuser_changes = {};
      if (dirty & 1)
        teamuser_changes.user = ctx[8];
      if (dirty & 2)
        teamuser_changes.group = ctx[1];
      teamuser.$set(teamuser_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(teamuser.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(teamuser.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(teamuser, detaching);
    }
  };
}
function create_if_block_1$e(ctx) {
  let input;
  return {
    c() {
      input = element("input");
      attr(input, "placeholder", "Add User");
      attr(input, "type", "text");
      attr(input, "autocomplete", "off");
      attr(input, "class", "form-control");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      ctx[12](input);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(input);
      ctx[12](null);
    }
  };
}
function create_pending_block$7(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_1$6(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$7,
    then: create_then_block$7,
    catch: create_catch_block$7,
    blocks: [, , ,]
  };
  handle_promise(ctx[4], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_extra_slot$3(ctx) {
  let topbar;
  let current;
  topbar = new Topbar$1({ props: { title: "Manage Team" } });
  return {
    c() {
      create_component(topbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topbar, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(topbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topbar, detaching);
    }
  };
}
function create_if_block$m(ctx) {
  let savemodal;
  let current;
  savemodal = new SaveModal({
    props: {
      title: "Edit Team Name",
      onSave: ctx[6],
      $$slots: { default: [create_default_slot$e] },
      $$scope: { ctx }
    }
  });
  savemodal.$on("close", ctx[14]);
  return {
    c() {
      create_component(savemodal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(savemodal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const savemodal_changes = {};
      if (dirty & 1048578) {
        savemodal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      savemodal.$set(savemodal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(savemodal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(savemodal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(savemodal, detaching);
    }
  };
}
function create_default_slot$e(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      input.autofocus = true;
      attr(input, "class", "form-control");
      attr(input, "type", "text");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[1].name);
      input.focus();
      if (!mounted) {
        dispose = listen(input, "input", ctx[13]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && input.value !== ctx2[1].name) {
        set_input_value(input, ctx2[1].name);
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$J(ctx) {
  let layout;
  let t;
  let if_block_anchor;
  let current;
  layout = new Layout({
    props: {
      $$slots: {
        extra: [create_extra_slot$3],
        default: [create_default_slot_1$6]
      },
      $$scope: { ctx }
    }
  });
  let if_block = ctx[2] && create_if_block$m(ctx);
  return {
    c() {
      create_component(layout.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 1048587) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$m(ctx2);
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
      transition_in(layout.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$I($$self, $$props, $$invalidate) {
  let $user;
  let { params: params2 = null } = $$props;
  const user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(10, $user = value));
  let users = [];
  let nonMembers = [];
  let group2;
  let promiseLoad = reload();
  let editingName = false;
  let elUserInput;
  afterUpdate(async () => {
    await promiseLoad;
    window.$(elUserInput).atwho({
      at: "",
      data: nonMembers,
      displayTpl: "<li data-id=${id} data-full_name=${full_name}>${full_name} - ${email}</li>",
      searchKey: "full_name",
      callbacks: {
        beforeInsert: (value, $li) => {
          subscribe2($li.data("id"));
          return "";
        }
      }
    });
  });
  function changeName(e) {
    e.preventDefault();
    $$invalidate(2, editingName = true);
  }
  async function onSaveName() {
    $$invalidate(2, editingName = false);
    await Api.api(`/groups/${group2.id}`, "PATCH", { name: group2.name });
  }
  async function reload() {
    $$invalidate(1, group2 = await Api.api(`/groups/${params2.id}`));
    const resUsersGroup = await Api.api(`/groups/${group2.id}/users`);
    $$invalidate(0, users = resUsersGroup.data);
    const resUsersAll = await Api.api(`/accounts/users`);
    let usersAll = resUsersAll.data;
    let ids = users.map((u) => u.id);
    nonMembers = usersAll.filter((u) => !ids.includes(u.id));
  }
  async function subscribe2(user_id) {
    try {
      const response = await Api.api(`/groups/${group2.id}/subscribe`, "POST", { user_id, admin: false, edit: true });
      await reload();
    } catch (e) {
      console.error(e);
    }
  }
  const click_handler2 = (e) => history.back();
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elUserInput = $$value;
      $$invalidate(3, elUserInput);
    });
  }
  function input_input_handler() {
    group2.name = this.value;
    $$invalidate(1, group2);
  }
  const close_handler = (e) => $$invalidate(2, editingName = false);
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(9, params2 = $$props2.params);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1024) {
      !!$user.account_id;
    }
  };
  return [
    users,
    group2,
    editingName,
    elUserInput,
    promiseLoad,
    changeName,
    onSaveName,
    reload,
    user,
    params2,
    $user,
    click_handler2,
    input_binding,
    input_input_handler,
    close_handler
  ];
}
class Team extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$I, create_fragment$J, safe_not_equal, { params: 9 });
  }
}
function create_fragment$I(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "This account is not subscribed to an Enterprise plan. If your company has an Enterprise account with us or need to get one, please contact support.";
      attr(div, "class", "alert alert-info ma4");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class EnterpriseOnly extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$I, safe_not_equal, {});
  }
}
var index_svelte_svelte_type_style_lang = "";
function get_each_context$c(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function create_else_block$g(ctx) {
  let div12;
  let div11;
  let div10;
  let div0;
  let t0;
  let div8;
  let div5;
  let t8;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t9;
  let form;
  let div6;
  let input;
  let t10;
  let t11;
  let div7;
  let button;
  let t13;
  let div9;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[18].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$c(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$c(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1$6();
  }
  let if_block = ctx[1] && create_if_block_1$d();
  return {
    c() {
      div12 = element("div");
      div11 = element("div");
      div10 = element("div");
      div0 = element("div");
      t0 = space();
      div8 = element("div");
      div5 = element("div");
      div5.innerHTML = `<div class="col-md-4"><h4>Team Name</h4></div> 
              <div class="col-md-2 text-center"><h4>Role</h4></div> 
              <div class="col-md-3 text-center"><h4>Leave Team</h4></div> 
              <div class="col-md-3 text-center"><h4>Delete Team</h4></div>`;
      t8 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      t9 = space();
      form = element("form");
      div6 = element("div");
      input = element("input");
      t10 = space();
      if (if_block)
        if_block.c();
      t11 = space();
      div7 = element("div");
      button = element("button");
      button.textContent = "Create New Team";
      t13 = space();
      div9 = element("div");
      attr(div0, "class", "col-md-2");
      attr(div5, "class", "row team svelte-grlz0z");
      attr(div5, "data-id", "");
      attr(input, "type", "text");
      attr(input, "class", "form-control");
      attr(input, "placeholder", "New Team Name");
      attr(div6, "class", "col-md-6");
      attr(button, "class", "btn btn-primary");
      attr(button, "type", "button");
      attr(div7, "class", "col-md-3 text-center");
      attr(form, "class", "row team svelte-grlz0z");
      attr(div8, "class", "col-md-8");
      attr(div9, "class", "col-md-2");
      attr(div10, "class", "row");
      attr(div11, "class", "group-table container-fluid");
      attr(div12, "class", "add-group");
      toggle_class(div12, "hide", !ctx[3]);
    },
    m(target, anchor) {
      insert(target, div12, anchor);
      append(div12, div11);
      append(div11, div10);
      append(div10, div0);
      append(div10, t0);
      append(div10, div8);
      append(div8, div5);
      append(div8, t8);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div8, null);
      }
      if (each_1_else) {
        each_1_else.m(div8, null);
      }
      append(div8, t9);
      append(div8, form);
      append(form, div6);
      append(div6, input);
      set_input_value(input, ctx[2].name);
      append(div6, t10);
      if (if_block)
        if_block.m(div6, null);
      append(form, t11);
      append(form, div7);
      append(div7, button);
      append(div10, t13);
      append(div10, div9);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[12]),
          listen(button, "click", ctx[13]),
          listen(form, "submit", ctx[14])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 97) {
        each_value = ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div8, outro_and_destroy_block, create_each_block$c, t9, get_each_context$c);
        check_outros();
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block_1$6();
          each_1_else.c();
          each_1_else.m(div8, t9);
        }
      }
      if (dirty & 4 && input.value !== ctx2[2].name) {
        set_input_value(input, ctx2[2].name);
      }
      if (ctx2[1]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_1$d();
          if_block.c();
          if_block.m(div6, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 8) {
        toggle_class(div12, "hide", !ctx2[3]);
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div12);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (each_1_else)
        each_1_else.d();
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$l(ctx) {
  let entonly;
  let current;
  entonly = new EnterpriseOnly({});
  return {
    c() {
      create_component(entonly.$$.fragment);
    },
    m(target, anchor) {
      mount_component(entonly, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(entonly.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(entonly.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(entonly, detaching);
    }
  };
}
function create_else_block_1$6(ctx) {
  let div1;
  return {
    c() {
      div1 = element("div");
      div1.innerHTML = `<div class="col-md-9 alert alert-info ml3 mt2 mb2">Not part of any team. To be part of an existing team, please ask team admin to add you to the group.</div> 
              `;
      attr(div1, "class", "row team svelte-grlz0z");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function create_default_slot_2$3(ctx) {
  let t;
  return {
    c() {
      t = text("Leave");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_2$8(ctx) {
  let confirmbtn;
  let current;
  function click_handler_1(...args) {
    return ctx[11](ctx[18], ...args);
  }
  confirmbtn = new ConfirmBtn({
    props: {
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    }
  });
  confirmbtn.$on("click", click_handler_1);
  return {
    c() {
      create_component(confirmbtn.$$.fragment);
    },
    m(target, anchor) {
      mount_component(confirmbtn, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const confirmbtn_changes = {};
      if (dirty & 2097152) {
        confirmbtn_changes.$$scope = { dirty, ctx };
      }
      confirmbtn.$set(confirmbtn_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(confirmbtn.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(confirmbtn.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(confirmbtn, detaching);
    }
  };
}
function create_default_slot_1$5(ctx) {
  let t;
  return {
    c() {
      t = text("Delete");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$c(key_1, ctx) {
  let div4;
  let div0;
  let a;
  let t0_value = ctx[18].name + "";
  let t0;
  let a_href_value;
  let t1;
  let div1;
  let t2_value = checkRole(ctx[18]) + "";
  let t2;
  let t3;
  let div2;
  let confirmbtn;
  let t4;
  let div3;
  let t5;
  let current;
  function click_handler2(...args) {
    return ctx[10](ctx[18], ...args);
  }
  confirmbtn = new ConfirmBtn({
    props: {
      $$slots: { default: [create_default_slot_2$3] },
      $$scope: { ctx }
    }
  });
  confirmbtn.$on("click", click_handler2);
  let if_block = ctx[18].permissions.admin && create_if_block_2$8(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      div4 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      create_component(confirmbtn.$$.fragment);
      t4 = space();
      div3 = element("div");
      if (if_block)
        if_block.c();
      t5 = space();
      attr(a, "href", a_href_value = "#/teams/" + ctx[18].id);
      attr(div0, "class", "col-md-4");
      attr(div1, "class", "col-md-2 text-center ");
      attr(div2, "class", "col-md-3 text-center remove-user");
      attr(div3, "class", "col-md-3 text-center remove-user");
      attr(div4, "class", "row team svelte-grlz0z");
      this.first = div4;
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div0);
      append(div0, a);
      append(a, t0);
      append(div4, t1);
      append(div4, div1);
      append(div1, t2);
      append(div4, t3);
      append(div4, div2);
      mount_component(confirmbtn, div2, null);
      append(div4, t4);
      append(div4, div3);
      if (if_block)
        if_block.m(div3, null);
      append(div4, t5);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[18].name + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 1 && a_href_value !== (a_href_value = "#/teams/" + ctx[18].id)) {
        attr(a, "href", a_href_value);
      }
      if ((!current || dirty & 1) && t2_value !== (t2_value = checkRole(ctx[18]) + ""))
        set_data(t2, t2_value);
      const confirmbtn_changes = {};
      if (dirty & 2097152) {
        confirmbtn_changes.$$scope = { dirty, ctx };
      }
      confirmbtn.$set(confirmbtn_changes);
      if (ctx[18].permissions.admin) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$8(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div3, null);
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
      transition_in(confirmbtn.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(confirmbtn.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(confirmbtn);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1$d(ctx) {
  let p;
  return {
    c() {
      p = element("p");
      p.textContent = "Please enter a team name.";
      attr(p, "class", "error");
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot$d(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$l, create_else_block$g];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[3])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_extra_slot$2(ctx) {
  let topbar;
  let current;
  topbar = new Topbar$1({ props: { title: "Teams" } });
  return {
    c() {
      create_component(topbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topbar, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(topbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topbar, detaching);
    }
  };
}
function create_fragment$H(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      $$slots: {
        extra: [create_extra_slot$2],
        default: [create_default_slot$d]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 2097167) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function checkRole({ permissions }) {
  if (permissions.admin) {
    return "Admin";
  } else if (permissions.edit) {
    return "Editor";
  } else {
    return "Viewer";
  }
}
function instance$H($$self, $$props, $$invalidate) {
  let $user;
  let { params: params2 = null } = $$props;
  const user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(9, $user = value));
  let groups = [];
  let errEmptyTeam = false;
  let state = { name: "" };
  let isEnterprise = $user.account_id;
  fetchGroups();
  function validate() {
    $$invalidate(1, errEmptyTeam = false);
    let name = state.name;
    name = name.trim();
    if (!name || name == "") {
      $$invalidate(1, errEmptyTeam = true);
      return false;
    }
    return true;
  }
  async function fetchGroups() {
    let res2 = await Api.api("/groups", "GET", {
      user: { id: $user.id },
      _opt: { order: ["ts"] }
    });
    $$invalidate(0, groups = res2.data);
  }
  async function leaveGroup(id) {
    await Api.api(`/groups/${id}/unsubscribe`, "POST");
    fetchGroups();
  }
  async function deleteGroup(id) {
    await Api.api(`/groups/${id}`, "DELETE");
    fetchGroups();
  }
  function resetFieldData() {
    document.getElementById("new-team-field").value = "";
    $$invalidate(2, state.name = "", state);
  }
  async function addGroup() {
    const name = state.name;
    if (validate()) {
      await Api.api(`/groups`, "POST", { name });
      fetchGroups();
      resetFieldData();
    }
  }
  const click_handler2 = (group2, e) => leaveGroup(group2.id);
  const click_handler_1 = (group2, e) => deleteGroup(group2.id);
  function input_input_handler() {
    state.name = this.value;
    $$invalidate(2, state);
  }
  const click_handler_2 = () => addGroup();
  const submit_handler = (e) => addGroup();
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(8, params2 = $$props2.params);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 512) {
      $$invalidate(3, isEnterprise = !!$user.account_id);
    }
  };
  return [
    groups,
    errEmptyTeam,
    state,
    isEnterprise,
    user,
    leaveGroup,
    deleteGroup,
    addGroup,
    params2,
    $user,
    click_handler2,
    click_handler_1,
    input_input_handler,
    click_handler_2,
    submit_handler
  ];
}
class Teams extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$H, create_fragment$H, safe_not_equal, { params: 8 });
  }
}
function create_catch_block$6(ctx) {
  return { c: noop, m: noop, p: noop, d: noop };
}
function create_then_block$6(ctx) {
  let div8;
  let table;
  let thead0;
  let t0;
  let thead1;
  let t4;
  let tbody;
  let tr1;
  let td0;
  let t6;
  let td1;
  let div0;
  let t7_value = ctx[2].item + "";
  let t7;
  let t8;
  let tr2;
  let td2;
  let t10;
  let td3;
  let div1;
  let t11_value = ctx[2].run + "";
  let t11;
  let t12;
  let tr3;
  let td4;
  let t14;
  let td5;
  let div2;
  let t15_value = ctx[2].sms + "";
  let t15;
  let t16;
  let tr4;
  let td6;
  let t18;
  let td7;
  let div3;
  let t19_value = ctx[2].email + "";
  let t19;
  let t20;
  let tr5;
  let td8;
  let t22;
  let td9;
  let div4;
  let t23_value = ctx[2].action + "";
  let t23;
  let t24;
  let tr6;
  let td10;
  let t26;
  let td11;
  let div5;
  let t27_value = ctx[2].push + "";
  let t27;
  let t28;
  let div7;
  return {
    c() {
      div8 = element("div");
      table = element("table");
      thead0 = element("thead");
      t0 = space();
      thead1 = element("thead");
      thead1.innerHTML = `<tr><th>Resource</th> 
        <th>Quantity</th></tr>`;
      t4 = space();
      tbody = element("tbody");
      tr1 = element("tr");
      td0 = element("td");
      td0.textContent = "Monitors";
      t6 = space();
      td1 = element("td");
      div0 = element("div");
      t7 = text(t7_value);
      t8 = space();
      tr2 = element("tr");
      td2 = element("td");
      td2.textContent = "Checks";
      t10 = space();
      td3 = element("td");
      div1 = element("div");
      t11 = text(t11_value);
      t12 = space();
      tr3 = element("tr");
      td4 = element("td");
      td4.textContent = "SMSes";
      t14 = space();
      td5 = element("td");
      div2 = element("div");
      t15 = text(t15_value);
      t16 = space();
      tr4 = element("tr");
      td6 = element("td");
      td6.textContent = "Emails";
      t18 = space();
      td7 = element("td");
      div3 = element("div");
      t19 = text(t19_value);
      t20 = space();
      tr5 = element("tr");
      td8 = element("td");
      td8.textContent = "Actions (webhooks)";
      t22 = space();
      td9 = element("td");
      div4 = element("div");
      t23 = text(t23_value);
      t24 = space();
      tr6 = element("tr");
      td10 = element("td");
      td10.textContent = "Push";
      t26 = space();
      td11 = element("td");
      div5 = element("div");
      t27 = text(t27_value);
      t28 = space();
      div7 = element("div");
      div7.innerHTML = `Checks made using browser extensions are unlimited and not counted. <a href="https://distill.io/kb/help/cloud-local-monitors/">Learn More</a> 
    <div>In cloud, checks are counted in units of 7 seconds. If a check takes upto 7s, it is counted as
      one. If it takes more than 7s and less than 15s, it is counted as two.</div>`;
      attr(div0, "class", "xitem");
      attr(div1, "class", "xcheck");
      attr(div2, "class", "xsms");
      attr(div3, "class", "xemail");
      attr(div4, "class", "xaction");
      attr(div5, "class", "xpush");
      attr(table, "class", "table table-bordered xblock xblock-thin");
      attr(div7, "class", "xblock");
      attr(div8, "id", "availability");
    },
    m(target, anchor) {
      insert(target, div8, anchor);
      append(div8, table);
      append(table, thead0);
      append(table, t0);
      append(table, thead1);
      append(table, t4);
      append(table, tbody);
      append(tbody, tr1);
      append(tr1, td0);
      append(tr1, t6);
      append(tr1, td1);
      append(td1, div0);
      append(div0, t7);
      append(tbody, t8);
      append(tbody, tr2);
      append(tr2, td2);
      append(tr2, t10);
      append(tr2, td3);
      append(td3, div1);
      append(div1, t11);
      append(tbody, t12);
      append(tbody, tr3);
      append(tr3, td4);
      append(tr3, t14);
      append(tr3, td5);
      append(td5, div2);
      append(div2, t15);
      append(tbody, t16);
      append(tbody, tr4);
      append(tr4, td6);
      append(tr4, t18);
      append(tr4, td7);
      append(td7, div3);
      append(div3, t19);
      append(tbody, t20);
      append(tbody, tr5);
      append(tr5, td8);
      append(tr5, t22);
      append(tr5, td9);
      append(td9, div4);
      append(div4, t23);
      append(tbody, t24);
      append(tbody, tr6);
      append(tr6, td10);
      append(tr6, t26);
      append(tr6, td11);
      append(td11, div5);
      append(div5, t27);
      append(div8, t28);
      append(div8, div7);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div8);
    }
  };
}
function create_pending_block$6(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$G(ctx) {
  let await_block_anchor;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$6,
    then: create_then_block$6,
    catch: create_catch_block$6,
    value: 2
  };
  handle_promise(ctx[0], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance$G($$self) {
  let api = getContext("api");
  let resPromise = api("/users/constraints", "GET");
  return [resPromise];
}
class Avail extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$G, create_fragment$G, safe_not_equal, {});
  }
}
function get_each_context$b(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_catch_block$5(ctx) {
  return { c: noop, m: noop, p: noop, d: noop };
}
function create_then_block$5(ctx) {
  let table;
  let thead;
  let t11;
  let tbody;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_value = ctx[4].data;
  const get_key = (ctx2) => ctx2[5].ts;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$b(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$b(key, child_ctx));
  }
  return {
    c() {
      table = element("table");
      thead = element("thead");
      thead.innerHTML = `<tr><th>Date</th> 
      <th>Checks</th> 
      <th>Emails</th> 
      <th>SMSes</th> 
      <th>Webhooks</th> 
      <th>Push</th></tr>`;
      t11 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(table, "id", "daily");
      attr(table, "class", "table table-bordered xblock xblock-thin");
    },
    m(target, anchor) {
      insert(target, table, anchor);
      append(table, thead);
      append(table, t11);
      append(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 3) {
        each_value = ctx2[4].data;
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, tbody, destroy_block, create_each_block$b, null, get_each_context$b);
      }
    },
    d(detaching) {
      if (detaching)
        detach(table);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function create_each_block_1$1(ctx) {
  let td;
  let div;
  let t_value = ctx[5][ctx[8]] + "";
  let t;
  return {
    c() {
      td = element("td");
      div = element("div");
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      append(td, div);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[5][ctx2[8]] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_each_block$b(key_1, ctx) {
  let tr;
  let t;
  let each_value_1 = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      this.first = tr;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tr, null);
      }
      append(tr, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 3) {
        each_value_1 = ctx[1];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(tr, t);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_pending_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$F(ctx) {
  let await_block_anchor;
  let promise;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$5,
    then: create_then_block$5,
    catch: create_catch_block$5,
    value: 4
  };
  handle_promise(promise = ctx[0], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 1 && promise !== (promise = ctx[0]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance$F($$self, $$props, $$invalidate) {
  let { cycle } = $$props;
  let api = getContext("api");
  let resPromise;
  const NAMES = ["ts", "run", "email", "sms", "action", "push"];
  $$self.$$set = ($$props2) => {
    if ("cycle" in $$props2)
      $$invalidate(2, cycle = $$props2.cycle);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4) {
      $$invalidate(0, resPromise = api("/users/usage/" + cycle, "GET"));
    }
  };
  return [resPromise, NAMES, cycle];
}
class Usage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$F, create_fragment$F, safe_not_equal, { cycle: 2 });
  }
}
function create_else_block$f(ctx) {
  let usage;
  let current;
  usage = new Usage({ props: { cycle: ctx[0] } });
  return {
    c() {
      create_component(usage.$$.fragment);
    },
    m(target, anchor) {
      mount_component(usage, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usage_changes = {};
      if (dirty & 1)
        usage_changes.cycle = ctx2[0];
      usage.$set(usage_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(usage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usage, detaching);
    }
  };
}
function create_if_block$k(ctx) {
  let avail;
  let current;
  avail = new Avail({});
  return {
    c() {
      create_component(avail.$$.fragment);
    },
    m(target, anchor) {
      mount_component(avail, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(avail.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(avail.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(avail, detaching);
    }
  };
}
function create_default_slot$c(ctx) {
  let div4;
  let div3;
  let div1;
  let div0;
  let a0;
  let t1;
  let a1;
  let t3;
  let a2;
  let t5;
  let div2;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$k, create_else_block$f];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0] == "availability")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      a0.innerHTML = `Available Resources<i class="fa fa-chevron-right right"></i>`;
      t1 = space();
      a1 = element("a");
      a1.innerHTML = `Daily Usage<i class="fa fa-chevron-right right"></i>`;
      t3 = space();
      a2 = element("a");
      a2.innerHTML = `Monthly Usage<i class="fa fa-chevron-right right"></i>`;
      t5 = space();
      div2 = element("div");
      if_block.c();
      attr(a0, "href", "#/usage/availability/");
      attr(a0, "class", "list-group-item");
      toggle_class(a0, "active", ctx[0] == "availability");
      attr(a1, "href", "#/usage/daily/");
      attr(a1, "class", "list-group-item");
      toggle_class(a1, "active", ctx[0] == "daily");
      attr(a2, "href", "#/usage/monthly/");
      attr(a2, "class", "list-group-item");
      toggle_class(a2, "active", ctx[0] == "monthly");
      attr(div0, "id", "sidebar");
      attr(div0, "class", "list-group");
      attr(div1, "class", "col-sm-3");
      attr(div2, "class", "col-sm-9");
      attr(div3, "class", "row");
      attr(div4, "class", "container");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div3);
      append(div3, div1);
      append(div1, div0);
      append(div0, a0);
      append(div0, t1);
      append(div0, a1);
      append(div0, t3);
      append(div0, a2);
      append(div3, t5);
      append(div3, div2);
      if_blocks[current_block_type_index].m(div2, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        toggle_class(a0, "active", ctx2[0] == "availability");
      }
      if (dirty & 1) {
        toggle_class(a1, "active", ctx2[0] == "daily");
      }
      if (dirty & 1) {
        toggle_class(a2, "active", ctx2[0] == "monthly");
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div2, null);
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
        detach(div4);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_extra_slot$1(ctx) {
  let topbar;
  let current;
  topbar = new Topbar$1({});
  return {
    c() {
      create_component(topbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topbar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(topbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topbar, detaching);
    }
  };
}
function create_fragment$E(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      $$slots: {
        extra: [create_extra_slot$1],
        default: [create_default_slot$c]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 5) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function instance$E($$self, $$props, $$invalidate) {
  let { params: params2 } = $$props;
  let module;
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(1, params2 = $$props2.params);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(0, module = params2.module);
    }
  };
  return [module, params2];
}
class Usage_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$E, create_fragment$E, safe_not_equal, { params: 1 });
  }
}
const route = writable({
  prefix: "all"
});
const domo$6 = window.domo;
if (!domo$6) {
  throw new Error("ADD domo");
}
const async$6 = window.async;
if (!async$6) {
  throw new Error("ADD async");
}
const FeedEntry$1 = View$1.Base.extend({
  name: "FeedEntry",
  className: "mb3 bb b--black-20",
  render: function() {
    const attrs = this.model.attributes;
    let date = attrs.pubdate || attrs.date;
    let preview;
    this.$el.append(H4({ "class": "mb2" }, A({
      "class": "black-80",
      href: attrs.link
    }, attrs.title)), DIV({ "class": "mb2 black-40" }, moment(date).format("LLL")), preview = DIV({ "class": "summary mb2" }));
    $(preview).html(attrs.description || attrs.summary || "");
    return this;
  }
});
const FeedEntryList = View$1.Collection.extend({
  name: "FeedEntryList",
  addOne: function(model) {
    const view = new FeedEntry$1({
      parent: this,
      model
    }).render();
    this.$el.append(view.el);
    return view;
  }
});
const Feed$1 = View$1.Base.extend({
  name: "Feed",
  render: function() {
    const attrs = this.model.attributes;
    this.$el.append(H3(A({ href: attrs.link }, attrs.title)), DIV({ "class": "pb2 mb2 bb b--black-20" }, attrs.description || attrs.summary || ""), new FeedEntryList({
      parent: this,
      collection: this.model.get("entries")
    }).render().el);
    return this;
  }
});
var View = {
  Feed: Feed$1,
  FeedEntry: FeedEntry$1,
  FeedEntryList
};
const FeedEntry = base.Model.extend();
const FeedEntryCollection = base.Collection.extend({
  model: FeedEntry
});
const Feed = base.Model.extend({
  parse: function(response) {
    response.entries = new FeedEntryCollection(response.entries);
    return response;
  }
});
var Model$1 = {
  Feed,
  FeedEntry,
  FeedEntryCollection
};
const Backbone$6 = window.Backbone;
const feeddiff = window.feeddiff;
if (!feeddiff) {
  throw new Error("ADD feeddiff");
}
const PREFS_DEFAULT = {
  snipped: false,
  removed: false
};
let diffWorker;
const diffCallbacks = {};
var DiffableView = View$1.Base.extend({
  initialize: function(options) {
    DiffableView.__super__.initialize.call(this, options);
    this.oldModel = options.oldModel;
  },
  getDiffCount: function() {
    return [0, 0];
  },
  getDiffCount: function() {
    return [0, 0];
  },
  setState: function(state) {
    this.state = state;
    this.show(state);
  },
  show: function(state) {
    if (!state.diff) {
      return this.render();
    }
    const model = this.model;
    Msg.start("diff", { info: "l_loading" });
    try {
      const dmp = new diff_match_patch();
      const text_new = model.get("data");
      const text_old = (this.oldModel || model).get("data");
      const diffs = dmp.diff_main(text_old, text_new);
      dmp.diff_cleanupSemantic(diffs);
      this.$el.empty().append(dmp.diff_prettyHtml(diffs));
    } catch (e) {
      this.$el.empty().append("Error showing diff: ", e.message).append(e.stack);
    }
    Msg.stop("diff");
  },
  showDiffModal: function() {
    throw new Error("Not implemented");
  }
});
const SieveFeedView = DiffableView.extend({
  name: "SieveFeedView",
  tagName: "iframe",
  attributes: {
    frameborder: 0,
    style: "width:100%;height:80px"
  },
  onFrameLoad: function() {
    this.el.style.height = this.el.contentDocument.documentElement.scrollHeight + "px";
    this.frame_loaded = true;
    this.trigger("frame_loaded");
  },
  getDiffCount: function() {
    return [this.newFeedCount, this.updatedFeedCount];
  },
  postInit: function() {
    this.el.onload = this.onFrameLoad;
  },
  show: function(state) {
    if (!this.frame_loaded) {
      this.once("frame_loaded", () => this.show(state));
      return;
    }
    const feedNew = JSON.parse(this.model.get("data"));
    const feedOld = this.oldModel && JSON.parse(this.oldModel.get("data"));
    const feedDict = {};
    new DOMParser();
    const style = document.createElement("style");
    this.el.contentDocument;
    let css;
    feedDict["newHashedFeed"] = feedNew;
    feedDict["oldHashedFeed"] = feedOld;
    css = ".inserted{background-color:#b7fdcb;}";
    css += ".removed{background-color:#ff9494;}";
    css += "img{margin-top:2px;margin-bottom:5px;}";
    css += state.removed ? ".removed{display:inline}" : ".removed{display:none}";
    css += "body{width:700px;margin:0 auto;padding:0 10px;}";
    css += ".summary{padding-top:5px;}";
    style.type = "text/css";
    $(style).attr("class", "xdistill").text(css);
    feeddiff.getUpdatedEntries(diffHtml, feedDict, this.model.id, (err, result) => {
      if (err) {
        console.error("Error in update feed: ", err);
        Msg.error("Error finding changes in feed");
        return;
      }
      if (result["changes"].length == 0) {
        result.changes = feedDict.newHashedFeed.entries;
      } else {
        result.changes = result["newEntries"].concat(result["updatedEntries"]);
      }
      this.newFeedCount = result["newEntries"].length;
      this.updatedFeedCount = result["updatedEntries"].length;
      const view = new View.FeedEntryList({
        model: new Model$1.FeedEntryCollection(result.changes)
      }).render();
      view.$el.append(style);
      this.once("frame_loaded", () => this.bubbleEvent("sieve:data:loaded"));
      this.el.setAttribute("srcdoc", view.el.outerHTML);
    });
  }
});
var SieveXMLView = DiffableView.extend({
  name: "SieveXMLView",
  postInit: function(options) {
    SieveXMLView.__super__.postInit.call(this, options);
    this.show({ diff: true });
    _.defer(() => this.bubbleEvent("sieve:data:loaded"));
  }
});
var SieveJSONView = DiffableView.extend({
  name: "SieveJSONView",
  getDiffCount() {
    return [$(this.el).find(".jsondiffpatch-added").length + $(this.el).find(".jsondiffpatch-modified").length, $(this.el).find(".jsondiffpatch-deleted").length + $(this.el).find(".jsondiffpatch-modified").length];
  },
  show(state) {
    const jsonNew = JSON.parse(this.model.get("data"));
    const jsonOld = this.oldModel && JSON.parse(this.oldModel.get("data"));
    document.createElement("style");
    var delta = jsondiffpatch.diff(jsonOld, jsonNew);
    if (delta) {
      this.el.innerHTML = jsondiffpatch.formatters.html.format(delta, jsonOld);
      if (state.snipped) {
        jsondiffpatch.formatters.html.showUnchanged(false, this.el);
      } else {
        jsondiffpatch.formatters.html.showUnchanged(true, this.el);
      }
    } else
      this.el.appendChild(PRE(JSON.stringify(jsonNew, null, 2)));
    _.defer(() => this.bubbleEvent("sieve:data:loaded"));
  }
});
const SieveHTMLView = DiffableView.extend({
  name: "SieveHTMLView",
  attributes: {
    src: window.IE ? `javascript:document.write('<script>document.open();document.domain="` + document.domain + `";document.close();<\/script>')` : "about:blank",
    frameborder: 0,
    style: "width:100%;height:40px"
  },
  tagName: "iframe",
  getDiffCount: function() {
    return [$(this.doc).find(".inserted").length, $(this.doc).find(".removed").length];
  },
  postInit: function() {
    this.showingDiff = false;
    this.el.onload = this.onFrameLoad;
    this.sieve = this.model.parent;
    this.model.get("text");
    this.el.style.height = "40px";
  },
  onFrameLoad: function() {
    this.frameReady = true;
    this.trigger("frame_ready");
    $(this.el.contentDocument).on("click", function(e) {
      const href2 = e.target.href || "";
      if (href2.slice(0, 11) == "javascript:") {
        e.preventDefault();
      }
    });
  },
  onFrameReady: function(callback) {
    try {
      this.frameReady ? callback() : this.once("frame_ready", callback);
    } catch (e) {
      console.error("Error calling frame ready callback", e);
    }
  },
  renderHTML: function(html2, state) {
    this.model.id;
    let nSyncs = 0;
    const host = this.el;
    const win = host.contentWindow;
    const doc = win.document;
    const el = doc.documentElement;
    const uri = this.sieve.get("uri");
    updateFrameContent(doc, uri, html2);
    async.map($(el).find("link[rel=stylesheet]").toArray(), function(link, callback) {
      const img = doc.createElement("img");
      img.onerror = function() {
        callback();
      };
      img.src = link.href;
    }, (err, res2) => {
      if (this.syncIntervalId)
        clearInterval(this.syncIntervalId);
      this.syncIntervalId = setInterval(() => {
        try {
          const win2 = host.contentWindow;
          if (!win2 || !win2.document) {
            clearInterval(this.syncIntervalId);
            return;
          }
          const iframeRoot = win2.document.body || el;
          const height = Math.min(1e4, Math.max(el.scrollHeight, iframeRoot.scrollHeight));
          if (height > win2.innerHeight) {
            host.style.height = height + "px";
          }
          nSyncs += 1;
          if (nSyncs > 10)
            clearInterval(this.syncIntervalId);
        } catch (e) {
          clearInterval(this.syncIntervalId);
          throw e;
        }
      }, 100);
    });
    setTimeout(() => {
      this.$("span").css({ left: 0, position: "relative" });
      $(el).find("a[href]").attr("target", "_blank").attr("rel", "noopener");
      this.bubbleEvent("sieve:data:loaded");
    }, 200);
  },
  show: function(state) {
    this.state = state;
    if (this.shown) {
      return this.doc && this.showDoc(state);
    }
    this.shown = true;
    Msg.start("diff", { info: "l_loading" });
    const newHtml = this.model.get("data");
    const oldHtml = this.oldModel.get("data");
    const parser = new DOMParser();
    let showHTML = (data) => {
      this.markedHTML = data;
      this.doc = parser.parseFromString(data, "text/html");
      if (this.doc.querySelectorAll(".inserted,.removed").length == 0) {
        this.markedHTML = newHtml;
        this.doc = parser.parseFromString(newHtml, "text/html");
      }
      this.showDoc(this.state);
      Msg.stop("diff");
    };
    if (newHtml == oldHtml) {
      return showHTML(newHtml);
    }
    diffHtml(oldHtml, newHtml, this.model.id, (error, data) => {
      if (error) {
        showHTML(newHtml);
      } else {
        showHTML(data);
      }
    });
  },
  showDoc: function(state) {
    const doc = this.doc;
    const style = this.styleSheet || doc.createElement("style");
    let css = "";
    let html2;
    css = ".inserted{background-color:#b7fdcb;}";
    css += ".removed{background-color:#ff9494;}";
    css += "span.inserted, span.removed{padding: 1px 4px;}";
    css += "a.removed, a .removed{color: #008}";
    css += "img.inserted{border: solid 2px green; background-color: transparent; padding: 2px;}";
    css += "img.removed{border: solid 2px red; background-color: transparent; padding: 2px;}";
    css += state.removed ? ".removed{display:inline}" : ".removed{display:none}";
    if (state.snipped) {
      css += ".nonDiffHide {display:none}";
      this.srcStylesheet = doc.querySelectorAll("link[rel=stylesheet], style:not(.xdistill)");
      $(this.srcStylesheet).remove();
      this.styledElements2 = $(doc).find("[style]").each(function() {
        this.dataset.oldStyle2 = this.getAttribute("style");
        this.removeAttribute("style");
      });
      this.snippedHeight && this.$el.height(this.snippedHeight);
    } else {
      this.snippedHeight = this.snippedHeight || this.$el.height();
      $(doc).find("head").append(this.srcStylesheet);
      this.styledElements2 && this.styledElements2.each(function() {
        this.setAttribute("style", this.dataset.oldStyle2);
      });
    }
    if (!$(doc).find('link[rel="stylesheet"], style:not(.xdistill)').length) {
      css += "body {padding: 10px;}";
      css += "td {padding: 10px}";
      css += "body {font-size: 0.94em}";
    }
    style.type = "text/css";
    $(style).attr("class", "xdistill").text(css);
    doc.body.appendChild(style);
    this.styleSheet = style;
    html2 = doc.documentElement.outerHTML;
    this.onFrameReady(() => this.renderHTML(html2, state));
  },
  showDiffModal: function() {
    this.diffModal = new DiffHTMLModal({
      title: T("Highlighted Changes"),
      parent: this.getRoot(),
      model: this.model,
      html: this.markedHTML,
      width: "100%",
      height: "100%"
    });
    this.diffModal.show();
  }
});
const DiffPrefMenu = View$1.ContextMenu.extend({
  name: "DiffPrefMenu",
  events: {
    "change input": "event_change"
  },
  event_change: function(e) {
    e.stopPropagation();
    this.save();
  },
  getPrefs: function() {
    const prefs = {};
    this.$(":checkbox").each(function(_2, el) {
      prefs[el.name] = el.checked ? 1 : 0;
    });
    return prefs;
  },
  load: function() {
    Api.api("/users/prefs/ui_diff", "GET", (err, res2) => {
      if (err) {
        console.error("Failed to get prefs", err);
        this.showApiErr();
      } else {
        this.showPrefs(res2);
      }
      this.show();
    });
  },
  renderMenu: function() {
    this.load();
    this.$el.empty().append(LI({ "class": "xview" }, DIV(T("l_loading"), "...")));
  },
  save: function() {
    const prefs = this.getPrefs();
    Api.api("/users/prefs/ui_diff", "PUT", prefs, function(err, res2) {
      if (err) {
        Msg.error("e_req");
      } else {
        USER.prefs.ui_diff = prefs;
        if (Supports.agents.local) {
          Service.SyncMan.get(Service.store.UserStore, function() {
          });
        }
      }
    });
  },
  showApiErr: function(err) {
    this.$el.empty().append(LI({ "class": "xview error" }, DIV("Couldn't get prefs. ", A({ href: "/ui/settings.html#general" }, "Sign in to account."))));
  },
  showPrefs: function(prefs) {
    const tid = Date.now() * Math.random() | 0;
    _.defaults(prefs, PREFS_DEFAULT);
    this.$el.empty().append(LI({ "class": "xview" }, DIV({ style: "font-size: 1.1em; " }, T("Defaults")), DIV(INPUT({
      id: "removed" + tid,
      name: "removed",
      type: "checkbox",
      style: "position: relative; top: 2px;"
    }), LABEL({
      "for": "removed" + tid,
      "style": "margin:0 4px;padding:0;font-size:.9em; user-select: none;"
    }, T("Deleted"))), DIV(INPUT({
      id: "snipped" + tid,
      name: "snipped",
      type: "checkbox",
      style: "position: relative; top: 2px;"
    }), LABEL({
      "for": "snipped" + tid,
      "style": "margin:0 4px;padding:0;font-size:.9em; user-select: none;"
    }, T("Snipped")))));
    this.$(":checkbox").each(function(_2, el) {
      const checked = prefs[el.name];
      if (checked) {
        el.checked = 1;
      }
    });
  }
});
let diffMenu;
const BaseDiffBar = View$1.Base.extend({
  event_settings: function(e) {
    if (diffMenu && diffMenu.el.parentNode) {
      diffMenu.remove();
      diffMenu = null;
    } else {
      (diffMenu = new DiffPrefMenu({
        parent: this
      })).toggle(this.name, e.currentTarget);
    }
  }
});
const FeedBar = BaseDiffBar.extend({
  name: "FeedBar",
  events: {
    "click .xsettings": "event_settings",
    "click .xremoved": "event_show_removed"
  },
  event_show_removed: function(e) {
    this.state.removed = e.target.checked;
    this.updateState();
  },
  postInit: function(options) {
    this.state = _.extend({}, PREFS_DEFAULT, USER.prefs.ui_diff);
    this.view = options.view;
    this.view.setState(this.state);
  },
  render: function() {
    const tid = Date.now() * Math.random() | 0;
    this.$el.css({
      position: "absolute",
      right: 1,
      borderBottom: "solid 1px #ddd",
      backgroundColor: "#f3f3f3",
      backgroundColor: "#f0f0f0",
      marginTop: "-4px",
      padding: 0
    }).append(DIV({ "class": "inline-block" }, DIV({ "class": "btn", "style": "padding:0 6px;", "title": "Shows the number of new and updated feeds" }, SPAN({ style: "font-weight: bold;" }, this.elNewFeed = SPAN(0), " new, "), " ", SPAN({ style: "font-weight: bold;", title: "Shows the number of new and updated feeds" }, this.elChangedFeed = SPAN(0), " updated. ")), INPUT({ "class": "xremoved", "type": "checkbox", "id": "show-del" + tid }), LABEL({
      "for": "show-del" + tid,
      "style": "margin:0 4px;font-size:.9em; user-select: none;",
      "title": "Shows deleted content in changed feed entry"
    }, "Deleted"), BUTTON({
      "class": "btn btn-default btn-sm xsettings",
      "style": "min-width:20px;padding:0;margin:0;"
    }, I({ "class": "fa fa-cog" }))));
    return this;
  },
  setDiffCount: function(feedCount) {
    this.elNewFeed.textContent = Math.min(feedCount[0], 999);
    this.elChangedFeed.textContent = Math.min(feedCount[1], 999);
  },
  updateState: function() {
    this.$(".xremoved").prop("checked", this.state.removed);
    this.view.setState(this.state);
  }
});
const DiffBar = BaseDiffBar.extend({
  name: "DiffBar",
  events: {
    "click .xpopup": "event_popup",
    "click .xsettings": "event_settings",
    "click .xsnipped": "event_show_snipped",
    "click .xremoved": "event_show_removed"
  },
  event_popup: function(e) {
    this.popWindow(e);
  },
  event_show_removed: function(e) {
    this.state.removed = e.target.checked;
    this.updateState();
  },
  event_show_snipped: function(e) {
    this.state.snipped = e.target.checked;
    this.updateState();
  },
  postInit: function(options) {
    this.state = _.extend({}, PREFS_DEFAULT, USER.prefs.ui_diff);
    this.view = options.view;
    this.view.setState(this.state);
  },
  render: function() {
    const tid = Date.now() * Math.random() | 0;
    this.$el.css({
      position: "absolute",
      right: 1,
      borderBottom: "solid 1px #ddd",
      backgroundColor: "#f3f3f3",
      backgroundColor: "#f0f0f0",
      marginTop: "-4px",
      padding: 0
    }).append(DIV({ "class": "inline-block" }, A({
      "class": "btn btn-default btn-sm xpopup",
      "style": "padding:0 6px; margin-right: 4px;"
    }, T("Explore diff (beta)"), " ", SPAN({ style: "color: green;font-weight: bold;" }, this.elPlus = SPAN(0), "+"), " ", SPAN({ style: "color: red;font-weight: bold;" }, this.elMinus = SPAN(0), SPAN({ style: "font-size: 1.1em; line-height: 1.1" }, "\u2013"))), INPUT({
      "id": "removed" + tid,
      "class": "xremoved",
      "name": "removed",
      "type": "checkbox",
      "style": "position: relative; top: 2px;"
    }), LABEL({
      "for": "removed" + tid,
      "style": "margin:0 4px;padding:0;font-size:.9em; user-select: none;"
    }, T("Deleted")), INPUT({
      "id": "snipped" + tid,
      "class": "xsnipped",
      "name": "snipped",
      "type": "checkbox",
      "style": "position: relative; top: 2px;"
    }), LABEL({
      "for": "snipped" + tid,
      "style": "margin:0 4px;padding:0;font-size:.9em; user-select: none;"
    }, T("Snipped")), BUTTON({
      "class": "btn btn-default btn-sm xsettings",
      "style": "min-width:20px;padding:0;margin:0;"
    }, I({ "class": "fa fa-cog" }))));
    this.$(":checkbox").each((_2, el) => {
      if (this.state[el.name]) {
        el.checked = true;
      }
    });
    return this;
  },
  setDiffCount: function(diffCounts) {
    this.elPlus.textContent = Math.min(diffCounts[0], 999);
    this.elMinus.textContent = Math.min(diffCounts[1], 999);
    if (diffCounts[0] + diffCounts[1] == 0) {
      this.$(".xpopup,.xsnipped,.xremoved").attr("disabled", 1);
    }
  },
  updateState: function() {
    this.$(".xsnipped").prop("checked", this.state.snipped);
    this.$(".xremoved").prop("checked", this.state.removed);
    this.view.setState(this.state);
  },
  popWindow: function(event) {
    this.view.showDiffModal();
  }
});
const DiffHTMLView = View$1.Base.extend({
  attributes: {
    style: "width: 100%;"
  },
  getScrollHeight: function() {
    return this.frameReady ? this.iframe.contentWindow.document.body.scrollHeight : 400;
  },
  toggleStyle: function(flag) {
    this.onFrameReady(() => {
      const doc = this.iframe.contentWindow.document;
      if (flag) {
        this.styleSheets = doc.querySelectorAll("link[rel=stylesheet],style:not(.xdistill)");
        $(this.styleSheets).remove();
        this.styledElements = $(doc).find("[style]").each(function() {
          this.dataset.oldStyle = this.getAttribute("style");
          this.removeAttribute("style");
        });
      } else {
        $(doc.head).append(this.styleSheets);
        this.styledElements.each(function() {
          this.setAttribute("style", this.dataset.oldStyle);
        });
      }
    });
  },
  hideRemoved: function() {
    this.onFrameReady(() => {
      $(this.iframe.contentWindow.document).find(".removed").addClass("xdistill-hide");
    });
  },
  hideInserted: function() {
    this.onFrameReady(() => {
      $(this.iframe.contentWindow.document).find(".inserted").addClass("xdistill-hide");
    });
  },
  moveToNextDiff: function() {
    let count = 0;
    const scrollCt = this.options.scrollCt;
    const scrollTop = scrollCt.scrollTop;
    const viewportHeight = $(scrollCt).height();
    const elements = $(this.iframe.contentWindow.document).find(".diffMark:visible");
    while (count < elements.length && elements.eq(count++).offset().top - scrollTop < viewportHeight)
      ;
    count -= 1;
    if (elements[count]) {
      elements[count].scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  },
  moveToPrevDiff: function() {
    const scrollCt = this.options.scrollCt;
    const scrollTop = scrollCt.scrollTop;
    $(scrollCt).height();
    const element2 = $(this.iframe.contentWindow.document).find(".diffMark:visible");
    let count = element2.length;
    while (--count > 0 && element2.eq(count).offset().top + element2.eq(count).height() > scrollTop)
      ;
    element2[count].scrollIntoView({ behavior: "smooth" });
  },
  onFrameReady: function(callback) {
    try {
      this.frameReady ? callback() : this.once("frame_ready", callback);
    } catch (e) {
      console.error("Error calling frame ready callback", e);
    }
  },
  onViewReady: function(callback) {
    try {
      this.viewReady ? callback() : this.once("view_ready", callback);
    } catch (e) {
      console.error("Error calling view ready callback", e);
    }
  },
  render: function() {
    const iframe = IFRAME({ "class": "data-pad", "width": "100%", "scrolling": "no", "style": "border: none;" });
    this.iframe = iframe;
    this.$el.append(iframe);
    iframe.onload = () => {
      this.frameReady = true;
      this.trigger("frame_ready");
    };
    this.onFrameReady(this.renderFrameContent);
    return this;
  },
  renderFrameContent: function() {
    const sieve = this.options.model.parent;
    const html2 = this.options.html;
    const doc = this.iframe.contentWindow.document;
    const style = doc.createElement("style");
    updateFrameContent(doc, sieve.get("uri"), html2);
    $(style).attr({
      "class": "xdistill",
      "type": "text/css"
    }).text(".removed {background-color:#ff9494; display:inline !important}a.removed, a .removed {color: #008}.inserted {background-color:#b7fdcb; display:inline !important}span.inserted, span.removed{padding: 1px 4px;}.xdistill-hide {display: none !important} img.inserted{border: solid 2px green; background-color: transparent; padding: 2px;}img.removed{border: solid 2px red; background-color: transparent; padding: 2px;}");
    $(doc).find("body").append(style);
    const cssLinks = $(doc).find('link[rel="stylesheet"]');
    async.each(cssLinks, function(link, callback) {
      link.addEventListener("load", callback);
    }, (err, res2) => {
      this.viewReady = true;
      this.trigger("view_ready");
    });
  },
  scrollFirstDiffIntoView: function() {
    const el = $(this.iframe.contentWindow.document).find(".diffMark:visible")[0];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  },
  setFrameHeight: function(height) {
    $(this.iframe).css("height", height);
  },
  showDiff: function() {
    this.onFrameReady(() => {
      $(this.iframe.contentWindow.document).find(".inserted").removeClass("xdistill-hide");
      $(this.iframe.contentWindow.document).find(".removed").removeClass("xdistill-hide");
    });
  }
});
var DiffHTMLModal = View$1.Modal.extend({
  events: {
    "click .xdiff-toggle-mode": "toggleMode",
    "click .xdiff-toggle-style": "toggleStyle",
    "click .xleft-frame-up": "moveToPrevDiffLeftEle",
    "click .xleft-frame-down": "moveToNextDiffLeftEle",
    "click .xright-frame-up": "moveToPrevDiffRightEle",
    "click .xright-frame-down": "moveToNextDiffRightEle"
  },
  headerClass: "panel-heading xpanel-heading-alt",
  showSplitView: function() {
    this.view1.$el.parent().css("width", "50%");
    this.view2.$el.parent().css("width", "50%");
    $(this.elView2).show();
    this.view1.hideRemoved();
    this.view2.hideInserted();
    $(this.toolbarView1).css("right", "51%");
    this.syncHeight();
  },
  showInlinedView: function() {
    this.view1.$el.parent().css("width", "100%");
    $(this.elView2).hide();
    this.view1.showDiff();
    $(this.toolbarView1).css("right", "10px");
    this.syncHeight();
  },
  syncHeight: function() {
    const height = Math.max(this.view1.getScrollHeight(), this.view2.getScrollHeight());
    this.view1.setFrameHeight(height);
    this.view2.setFrameHeight(height);
    $(this.scrollCt).css("height", $(window).height() - this.scrollCt.getBoundingClientRect().y);
  },
  toggleMode: function(event) {
    this.isModeInlined = !this.isModeInlined;
    this[this.isModeInlined ? "showInlinedView" : "showSplitView"]();
    const tb = $(event.currentTarget);
    tb.find(".active").removeClass("active").removeClass("btn-primary");
    tb.find(this.isModeInlined ? ".xdiff-mode-inlined" : ".xdiff-mode-sbs").addClass("active btn-primary");
    this.syncHeight();
  },
  toggleStyle: function(event) {
    this.isStyleRemoved = !this.isStyleRemoved;
    this.view1.toggleStyle(this.isStyleRemoved);
    this.view2.toggleStyle(this.isStyleRemoved);
    const tb = $(event.currentTarget);
    tb.find(".active").removeClass("active").removeClass("btn-primary");
    tb.find(this.isStyleRemoved ? ".xdiff-style-restore" : ".xdiff-style-remove").addClass("active btn-primary");
    this.syncHeight();
  },
  moveToPrevDiffLeftEle: function() {
    this.view1.moveToPrevDiff();
  },
  moveToNextDiffLeftEle: function() {
    this.view1.moveToNextDiff();
  },
  moveToPrevDiffRightEle: function() {
    this.view2.moveToPrevDiff();
  },
  moveToNextDiffRightEle: function() {
    this.view2.moveToNextDiff();
  },
  renderHeader: function() {
    let header;
    header = DIV(DIV({ "class": "xtbar xvbar-margin pull-right" }, BUTTON({
      "class": "close",
      "data-action": "modal close",
      "title": T("a_window_close")
    }, "\u2715")), DIV({ "class": "xtbar xvbar-margin" }, DIV({ "class": "btn-group btn-toggle xdiff-toggle-mode" }, BUTTON({ "class": "btn btn-default xdiff-mode-sbs btn-primary active" }, T("Side-by-side diff")), BUTTON({ "class": "btn btn-default xdiff-mode-inlined" }, T("Inlined diff"))), DIV({ "class": "btn-group btn-toggle xdiff-toggle-style" }, BUTTON({ "class": "btn btn-default xdiff-style-remove btn-primary active" }, T("Styled Page")), BUTTON({ "class": "btn btn-default xdiff-style-restore" }, T("Unstyled Page"))), A({ "href": this.model.parent.get("uri"), "class": "btn btn-default", "target": "_blank", "rel": "noopener" }, I({ "class": "fa fa-external-link" }))));
    return header;
  },
  renderView: function() {
    const el = DIV({ "style": "overflow-y: scroll;" }, this.elView1 = DIV({ style: "width: 50%; height: 100%; float: left" }, this.toolbarView1 = DIV({ "class": "btn-group", "style": "position: fixed; right: 51%" }, BUTTON({ "class": "btn btn-default xleft-frame-up" }, I({ "class": "fa fa-chevron-up" })), BUTTON({ "class": "btn btn-default xleft-frame-down" }, I({ "class": "fa fa-chevron-down" })))), this.elView2 = DIV({ style: "width: 50%; height: 100%; float:right;" }, DIV({ "class": "btn-group", "style": "position: fixed; right: 15px;" }, BUTTON({ "class": "btn btn-default xright-frame-up" }, I({ "class": "fa fa-chevron-up" })), BUTTON({ "class": "btn btn-default xright-frame-down" }, I({ "class": "fa fa-chevron-down" })))));
    this.scrollCt = el;
    this.view1 = new DiffHTMLView({
      parent: this.parent,
      model: this.model,
      html: this.options.html,
      scrollCt: el
    }).render();
    this.elView1.appendChild(this.view1.el);
    this.view2 = new DiffHTMLView({
      parent: this.parent,
      model: this.model,
      html: this.options.html,
      scrollCt: el
    }).render();
    this.elView2.appendChild(this.view2.el);
    this.view1.hideRemoved();
    this.view2.hideInserted();
    this.view1.onViewReady(onViewReady);
    this.view2.onViewReady(onViewReady);
    const self = this;
    function onViewReady() {
      if (self.view1.frameReady && self.view2.frameReady) {
        self.syncHeight();
        $(self.view2.iframe).css("border-left", "solid 1px #666");
        if (!self.view1.scrollFirstDiffIntoView()) {
          self.view2.scrollFirstDiffIntoView();
        }
      }
      $(window).resize(self.syncHeight);
      self.on("remove", function() {
        $(window).off("resize", self.syncHeight);
      });
    }
    return el;
  }
});
const SieveToolbar = View$1.ActionProvider.extend({
  actions: {
    list_view: { fn: "action_list_view" }
  },
  action_list_view() {
    let team = get_store_value(params).team;
    push(`/w/${team}/list/all/`);
  },
  render: function() {
    let module = get_store_value(params).module;
    this.$el.empty().append(DIV({ "class": "form-actions btn-toolbar flex align-item justify-center pa3" }, BUTTON({
      "class": "btn btn-default ",
      "data-action": "sieve more data"
    }, T("Show More")), BUTTON({
      "class": "btn btn-default ",
      "data-action": "sieve edit"
    }, T(T("a_edit_options"))), BUTTON({
      "class": "btn btn-default",
      "data-action": module == "list" ? "sieve view" : "list_view"
    }, T("Close"))));
    return this;
  }
});
const SieveDataView = View$1.Base.extend({
  name: "SieveDataView",
  className: "xsieve-data-item",
  action_email: async function() {
    Msg.info("loading");
    let res2 = await Api.api("/users/attrs", { name: "email", state: 40 });
    Msg.reset();
    const select = SELECT(res2.data.map((attr2) => OPTION({ value: attr2.value }, attr2.value)));
    const view = new View$1.Base({
      el: DIV({ style: "margin: 5px;" }, select)
    });
    const modal = new View$1.SaveDiscardModal({
      name: "SieveData$Email",
      parent: this,
      title: "Email",
      a_save: "Send",
      view
    });
    modal.on("save", async () => {
      try {
        let doc1 = this.view.el.contentDocument.cloneNode(true);
        setDiffStyle(doc1);
        await Api.api("/agents/actions/email", "POST", {
          action: { config: { email: select.value } },
          sieve: this.model.parent.pick("id", "name", "uri", "ts"),
          sieve_data: this.model.pick("id", "text", "ts"),
          emailContent: `<div id="highlighted-inlined"
            style="padding: 10px; background-color: #fff">
            ${doc1.body.innerHTML}
          </div>`,
          hasDiff: true
        });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.on("discard", () => modal.remove());
    modal.show();
  },
  createView: function() {
    const model = this.model;
    const oldModel = this.options.oldModel;
    const opts = {
      index: this.options.index,
      parent: this,
      model,
      oldModel
    };
    switch (model.get("data_type")) {
      case C.TYPE_HTML:
        return new SieveHTMLView(opts);
      case C.TYPE_FEED:
        return new SieveFeedView(opts);
      case C.TYPE_XML:
        return new SieveXMLView(opts);
      case C.TYPE_PDF_HTML:
        return new SieveHTMLView(opts);
      case C.TYPE_DOC:
        return new SieveHTMLView(opts);
      case C.TYPE_JSON:
        return new SieveJSONView(opts);
      default:
        return new Backbone$6.View({
          el: SPAN("ERR! Unknown data type")
        });
    }
  },
  onViewLoad: function() {
    this.bubbleEvent("sieve:data:loaded");
    this.diffBar && this.diffBar.setDiffCount(this.view.getDiffCount());
  },
  postInit: function() {
    this.view = this.createView();
    this.view.on("sieve:data:loaded", this.onViewLoad);
    if (this.model.get("data_type") == C.TYPE_FEED) {
      this.diffBar = new FeedBar({ parent: this, view: this.view });
    }
    if (this.model.get("data_type") == C.TYPE_HTML) {
      this.diffBar = new DiffBar({ parent: this, view: this.view });
    }
    if (this.model.get("data_type") == C.TYPE_DOC) {
      this.diffBar = new DiffBar({ parent: this, view: this.view });
    }
    if (this.model.get("data_type") == C.TYPE_PDF_HTML) {
      this.diffBar = new DiffBar({ parent: this, view: this.view });
    }
    if (this.model.get("data_type") == C.TYPE_JSON) {
      this.diffBar = new DiffBar({ parent: this, view: this.view });
    }
    this.listenTo(this.model, "destroy", this.remove);
  },
  render: function() {
    const ts_mod = moment(this.model.get("ts_mod"));
    let aCollapseExpand, aSendEmail;
    this.$el.empty().append(this.diffBar ? this.diffBar.render().el : "", DIV({ style: "display:flex;margin:4px 0;" }, DIV({ style: "margin-right:10px;", title: ts_mod.format() }, aCollapseExpand = A({ href: "#" }, I({ "class": "fa fa-caret-down f4" }), " ", ts_mod.format("hh:mm A")), DIV({ style: "position: relative" }, A({
      href: "#",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown"
    }, I({ "class": "fa fa-caret-down f4" }), " ", ts_mod.format("MMM DD")), UL({ "class": "dropdown-menu", "role": "menu" }, LI(aSendEmail = A({
      tabindex: -1,
      href: "#"
    }, T("Email")))))), DIV({ "style": "flex:1;background-color:#fff;border-bottom:solid 1px #ccc;" }, DIV({
      "style": "flex:1;background-color:#fff;border-bottom:solid 1px #ccc;"
    }, this.view.render().el))));
    $(aCollapseExpand).click((e) => {
      e.preventDefault();
      this.collapsed = !this.collapsed;
      $(aCollapseExpand).find(".fa").toggleClass("fa-caret-right").toggleClass("fa-caret-down");
      this.view.$el[this.collapsed ? "hide" : "show"]();
    });
    $(aSendEmail).click((e) => {
      e.preventDefault();
      this.action_email();
    });
    return this;
  }
});
const SieveDataList = View$1.ActionProvider.extend({
  name: "SieveDataList",
  fetch: function() {
    const $btn = this.$('[data-action="sieve more data"]');
    const $msg = this.$(".xmsg");
    const init2 = !this.lastData;
    const limit = init2 ? this.options.initialFetchCount || 2 : 2;
    const query = { _opt: { limit } };
    if (!init2) {
      query["ts.lt"] = this.lastData.ts;
    }
    $btn.button("loading");
    Msg.start("sieve:data:fetch", { info: "l_loading" });
    Api.api("/sieves/" + this.model.id + "/data", "GET", query, (err, res2) => {
      $btn.button("reset");
      if (err) {
        this.removeProgress();
        return Msg.stop("sieve:data:fetch", { error: "err:sieve:data:fetch" });
      }
      const currentData = this.data;
      const newData = res2.data;
      let dataToDisplay = [];
      Msg.stop("sieve:data:fetch");
      if (init2 && res2.count == 0) {
        this.$data.append(DIV({ "class": "xinfo" }, T("m_history_empty")));
        this.removeProgress();
        return;
      }
      $msg.removeClass("hide").find(".info > span").text(res2.count);
      if (init2) {
        dataToDisplay = newData.slice(0);
        if (dataToDisplay.length > limit - 1) {
          dataToDisplay.pop();
        }
      } else {
        if (this.lastData.id != this.lastDisplayedData.id) {
          dataToDisplay.push(currentData[currentData.length - 1]);
        }
        if (newData.length > 1) {
          dataToDisplay = dataToDisplay.concat(newData);
          dataToDisplay.pop();
        }
      }
      if (newData.length > 0) {
        this.lastData = newData[newData.length - 1];
      }
      for (let i = 0; i < dataToDisplay.length; i += 1) {
        this.addDataView(dataToDisplay[i], dataToDisplay[i + 1] || this.lastData, i);
      }
      if (dataToDisplay.length > 0) {
        this.lastDisplayedData = dataToDisplay[dataToDisplay.length - 1];
      }
      this.data = currentData.concat(newData);
      if (res2.count == 0)
        ;
    });
  },
  addDataView: function(data, oldData, index) {
    const model = new Backbone$6.Model(data);
    model.parent = this.model;
    const view = new SieveDataView({
      index,
      model,
      oldModel: oldData && new Backbone$6.Model(oldData),
      parent: this
    }).render();
    this.listenTo(view, "sieve:data:loaded", this.removeProgress);
    this.$(".xinfo").remove();
    this.$data.append(view.el);
  },
  postInit: function(options) {
    this.listenTo(this.model, "change:ts_data", this.renderUpdateMsg);
    this.resetData();
  },
  removeProgress: function() {
    this.$(".xprogress").remove();
  },
  render: function() {
    const err = this.model.get("err");
    const aLog = A({
      "href": "https://distill.io/help/check-log",
      "data-action": "sieve log menu",
      "data-action-param": this.model.id
    }, "View log for details.");
    const elErr = err && DIV({ "class": "xinfo" }, SPAN({
      "class": "error"
    }, T("Error encountered checking for updates. It may correct automatically on next check."), " ", aLog), " ", A({ href: "https://distill.io/help/contact" }, "Get help.")) || "";
    const progressBar = DIV({ "class": "xprogress", "style": "margin-top: -2px;position:absolute;" }, DIV({ "class": "xindeterminate" }));
    const data = DIV({ "class": "xsieve-data" }, elErr);
    const actionMsg = DIV({ "class": "xmsg centered hide" }, SPAN({ "class": "info" }));
    this.$el.append(DIV({ "class": "xview-body" }, progressBar, data), actionMsg).css({ margin: "4px 0" });
    this.$data = $(data);
    return this;
  },
  resetData: function() {
    delete this.lastData;
    delete this.lastDisplayedData;
    this.data = [];
    this.removeChildren();
    this.fetch();
  },
  renderUpdateMsg: function() {
    const $msg = $(DIV({ style: "text-align:center;" }, "Updated. Reloading now... "));
    _.delay(this.resetData, 100);
    _.delay(function remove() {
      $msg.remove();
    }, 1400);
  }
});
const SieveDetail = View$1.ActionProvider.extend({
  name: "SieveDetail",
  actions: {
    "sieve edit": {
      fn: "action_edit"
    },
    "sieve more data": {
      fn: "action_more"
    }
  },
  action_edit: function() {
    let team = get_store_value(params).team;
    push(`/w/${team}/sieve/edit/${this.model.id}.id`);
  },
  action_more: function() {
    this.list.fetch();
  },
  postInit: function() {
    this.toolbar = new SieveToolbar({
      parent: this
    });
    this.list = new SieveDataList({
      parent: this,
      model: this.model,
      initialFetchCount: 3
    });
  },
  render: function() {
    this.$el.empty().append(this.list.render().el, this.toolbar.render().el);
    return this;
  }
});
function updateFrameContent(doc, uri, html2) {
  const base2 = doc.createElement("base");
  const baseURIMatch = html2.match(/<base\s*href=\"(.*?)\"/);
  let baseURI;
  if (baseURIMatch) {
    baseURI = baseURIMatch[1];
  } else {
    baseURI = uri;
    const index = html2.indexOf("</head>");
    html2 = html2.slice(0, index) + '<base href="' + baseURI + '">' + html2.slice(index);
  }
  base2.setAttribute("href", baseURI);
  $(doc.head || doc.documentElement).prepend(base2);
  if (window.IE) {
    html2 = html2.match(/^<html.*?>([\s\S]*)<\/html>$/)[1];
  }
  doc.documentElement.innerHTML = html2;
  $(doc.head || doc.documentElement).prepend(base2);
  $(doc.documentElement).find("a[href]").attr("target", "_blank").attr("rel", "noopener");
}
function setStyle(els, name, value) {
  _.each(els, function(el) {
    el.style[name] = value;
  });
}
function setDiffStyle(doc) {
  setStyle($(".removed"), "background-color", "#ff9494");
  setStyle($(".inserted"), "background-color", "#b7fdcb");
  setStyle($("span.inserted, span.removed"), "padding", "1px 4px");
  setStyle($("a.removed, a .removed"), "color", "#008");
  setStyle($("img.removed"), "border", "solid 2px red");
  setStyle($("img.removed"), "background-color", "transparent");
  setStyle($("img.removed"), "padding", "2px");
  setStyle($("img.inserted"), "border", "solid 2px green");
  setStyle($("img.inserted"), "background-color", "transparent");
  setStyle($("img.inserted"), "padding", "2px");
}
function diffHtml(oldHtml, newHtml, context, callback) {
  const arr = [oldHtml || "<html></html>", newHtml || "<html></html>", context];
  if (typeof Worker !== "undefined") {
    const isLocal = Supports.agents.local;
    const prefix = isLocal ? "/ui" : "";
    if (!diffWorker) {
      diffWorker = new Worker(prefix + "/lib/diff_html.js");
      diffWorker.addEventListener("message", function(event) {
        const data = event.data;
        const resCtx = data[0];
        const html2 = data[1];
        const callbacks2 = diffCallbacks[resCtx];
        if (!callbacks2 || callbacks2.length == 0) {
          throw new Error("No callback found for resCtx:" + resCtx);
        }
        try {
          for (let i = 0; i < callbacks2.length; i += 1) {
            callbacks2[i](null, html2);
          }
        } catch (e) {
          console.error("Error calling diff callbacks", e);
        }
        delete diffCallbacks[resCtx];
      });
    }
    const callbacks = diffCallbacks[context] || [];
    callbacks.push(callback);
    diffCallbacks[context] = callbacks;
    diffWorker.postMessage(arr);
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}
function create_catch_block$4(ctx) {
  return { c: noop, m: noop, p: noop, d: noop };
}
function create_then_block$4(ctx) {
  let h3;
  let t0_value = ctx[2].name + "";
  let t0;
  let t1;
  return {
    c() {
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = text(" - Change History");
    },
    m(target, anchor) {
      insert(target, h3, anchor);
      append(h3, t0);
      append(h3, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[2].name + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_pending_block$4(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$D(ctx) {
  let t;
  let div;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$4,
    then: create_then_block$4,
    catch: create_catch_block$4
  };
  handle_promise(ctx[4], info);
  return {
    c() {
      info.block.c();
      t = space();
      div = element("div");
    },
    m(target, anchor) {
      info.block.m(target, info.anchor = anchor);
      info.mount = () => t.parentNode;
      info.anchor = t;
      insert(target, t, anchor);
      insert(target, div, anchor);
      ctx[5](div);
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i: noop,
    o: noop,
    d(detaching) {
      info.block.d(detaching);
      info.token = null;
      info = null;
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      ctx[5](null);
    }
  };
}
function instance$D($$self, $$props, $$invalidate) {
  let $route, $$unsubscribe_route = noop, $$subscribe_route = () => ($$unsubscribe_route(), $$unsubscribe_route = subscribe(route2, ($$value) => $$invalidate(7, $route = $$value)), route2);
  let $model;
  $$self.$$.on_destroy.push(() => $$unsubscribe_route());
  let { route: route2 } = $$props;
  $$subscribe_route();
  let el;
  let model = new Model$2.Sieve({ id: $route.id });
  component_subscribe($$self, model, (value) => $$invalidate(2, $model = value));
  let parent = getContext("view:root");
  let view;
  let promiseLoad = model.fetch();
  onMount(() => {
    view = new SieveDetail({ parent, model });
    el.appendChild(view.render().el);
    return () => view.remove();
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(1, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$subscribe_route($$invalidate(0, route2 = $$props2.route));
  };
  return [route2, el, $model, model, promiseLoad, div_binding];
}
class Detail extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$D, create_fragment$D, safe_not_equal, { route: 0 });
  }
}
const $$6 = window.jQuery;
if (!$$6) {
  throw new Error("ADD jQuery");
}
const _$6 = window._;
if (!_$6) {
  throw new Error("ADD _");
}
const async$5 = window.async;
if (!async$5) {
  throw new Error("ADD async");
}
const domo$5 = window.domo;
if (!domo$5) {
  throw new Error("ADD domo");
}
const moment$3 = window.moment;
if (!moment$3) {
  throw new Error("ADD moment");
}
const Backbone$5 = window.Backbone;
if (!Backbone$5) {
  throw new Error("ADD Backbone");
}
const Base = View$1.Base.extend({
  offset: 0,
  fields: ["name", "uri", "config", "tags", "content_type", "state", "rule_id", "schedule", "ts"],
  load: async function() {
    const query = this.options.query || { "state.in": [40, 45] };
    this.out.value = T("l_loading");
    let limit = 5;
    let res2 = await Api.api("/sieves", "GET", _$6.extend({
      _opt: {
        order: ["ts"],
        limit,
        offset: this.offset,
        only: this.fields
      }
    }, query));
    this.list = this.list.concat(res2.data);
    this.offset += res2.count;
    if (res2.count == limit) {
      this.load();
    } else {
      this.onLoadListDone();
    }
  },
  onLoadListDone: function() {
  },
  render: function() {
    this.$el.append(DIV({
      "class": "alert alert-info",
      "style": ""
    }, this.helpText), this.out = TEXTAREA({
      "class": "from-control",
      "style": "width: 100%; min-height: 400px;"
    }), BUTTON({
      "class": "btn btn-primary"
    }, T("a_export")));
    this.list = [];
    return this;
  }
});
const AsCSV = Base.extend({
  name: "CSV",
  fields: ["id", "uri", "name", "tags", "text", "err", "ts", "ts_mod"],
  helpText: "Click Export button to generate CSV.",
  onLoadListDone: function() {
    let columns = [
      "Name",
      "URL",
      "Labels",
      "Created On",
      "Changed On",
      "Text",
      "Error?"
    ];
    let list = this.list.map((sieve) => {
      let tags = sieve.tags;
      if (typeof tags === "string") {
        tags = _$6.compact(tags.split(",").map((id) => {
          const tag = App.labels.get(id);
          return tag ? tag.get("name") : void 0;
        }));
      }
      return [
        sieve.name,
        sieve.uri,
        tags ? tags.join(",") : "",
        sieve.ts,
        sieve.ts_mod,
        sieve.text,
        sieve.err || ""
      ];
    });
    this.out.value = Papa.unparse([columns, ...list]);
  }
});
const AsJSON = Base.extend({
  name: "JSON",
  helpText: "Data exported in JSON format will be generated below. You can use this JSON to import monitors later.\nNote: Actions are not exported. You can create actions for all monitors when importing them.\n\nClick Export button to start.",
  onLoadListDone: async function() {
    this.out.value = T("l_loading") + " " + T("l_rule");
    let data = [];
    for (let i = 0, len = this.list.length; i < len; i += 5) {
      data = [
        ...data,
        ...await Promise.all(this.list.slice(i, i + 5).map(mapSieve))
      ];
    }
    this.out.value = JSON.stringify({
      client: Supports.agents,
      data
    });
    async function mapSieve(item) {
      if (item.rule_id) {
        try {
          item.rule = (await Api.api("/rules/" + item.rule_id, "GET", {
            _opt: {
              only: ["config"]
            }
          })).config;
        } catch (err) {
          console.error("error importing rule", err);
        }
      }
      if (!item.tags instanceof Array || typeof item.tags === "string") {
        item.tags = _$6.compact((item.tags || "").split(",").map(function(id) {
          const tag = App.labels.get(id);
          return tag ? tag.get("name") : void 0;
        }));
      }
      delete item.id;
      delete item.rule_id;
      delete item.ts_mod;
      delete item._state;
      return item;
    }
  }
});
const Exporter = View$1.ActionProvider.extend({
  name: "exporter",
  events: {
    "click .btn-primary": "event_click"
  },
  event_click: function() {
    this.view.load();
  },
  asCSV: function(query) {
    this.showView(new AsCSV({ parent: this, query }));
  },
  asJSON: function(query) {
    this.showView(new AsJSON({ parent: this, query }));
  },
  render: function() {
    this.$el.append(H2({ "class": "xpage-header" }, this.title = SPAN(""), SPAN(" - ", T("a_export"))));
    return this;
  },
  showView: function(view) {
    if (this.view) {
      this.view.remove();
    }
    this.$el.append(view.render().el);
    $$6(this.title).text(view.name);
    this.view = view;
  }
});
const tokenize = function(txtQuery, callback) {
  const quoteStartRegEx = new RegExp(/(\"|\').*/);
  const quoteEndRegEx = new RegExp(/.*(\"|\')$/);
  const keywords = [];
  const paramsObj = [];
  let expectingVal = false;
  let currParam = null;
  const tokens = txtQuery.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    let currToken = tokens[i];
    if (expectingVal) {
      for (let j = i; j < tokens.length; j++) {
        currToken = tokens[j];
        currParam.val = (currParam.val || "") + " " + currToken;
        if (currToken.match(quoteEndRegEx)) {
          expectingVal = false;
          i = j;
          currParam.val = currParam.val.replace('"', "");
          break;
        }
      }
    } else {
      if (currToken.indexOf(":") > -1) {
        if (currParam != null) {
          currParam.val = currParam.val.replace(/%22/g, '"');
          paramsObj.push(currParam);
        }
        currParam = {
          name: currToken.split(":")[0].trim(),
          val: ""
        };
        var tempVal = currToken.split(":")[1].trim();
        if (tempVal) {
          if (tempVal.match(quoteStartRegEx)) {
            currParam.val = (currParam.val || "") + " " + tempVal.match(quoteStartRegEx)[0].replace(/(\"|\')/gm, "");
            expectingVal = true;
          } else {
            currParam.val = (currParam.val || "") + " " + tempVal;
          }
        }
      } else {
        if (expectingVal) {
          currParam.val = (currParam.val || "") + " " + tempVal;
        } else {
          keywords.push(currToken.replace(/%22/g, '"'));
        }
      }
    }
  }
  if (currParam != null) {
    currParam.val = currParam.val.replace(/%22/g, '"');
    paramsObj.push(currParam);
  }
  paramsObj.push({
    name: "keyword",
    val: keywords.join(" ")
  });
  callback(null, paramsObj);
};
const tokenize_new = function(txtQuery, conditionClauses, callback) {
  const quoteStartRegEx = new RegExp(/(\"|\').*/);
  const quoteEndRegEx = new RegExp(/.*(\"|\')$/);
  const keywords = [];
  const paramsObj = [];
  let expectingVal = false;
  let currParam = null;
  let conditions = [];
  const tokens = txtQuery.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    let currToken = tokens[i];
    if (expectingVal) {
      for (let j = i; j < tokens.length; j++) {
        currToken = tokens[j];
        currParam.val = (currParam.val || "") + " " + currToken;
        if (currToken.match(quoteEndRegEx)) {
          expectingVal = false;
          i = j;
          currParam.val = currParam.val.replace('"', "");
          break;
        }
      }
    } else {
      if (currToken.indexOf(":") > -1) {
        if (currParam != null) {
          currParam.val = currParam.val.replace(/%22/g, '"');
          paramsObj.push(currParam);
        }
        currParam = {
          name: currToken.split(":")[0].trim(),
          val: "",
          operator: ""
        };
        var tempVal = currToken.split(":")[1].trim();
        if (tempVal) {
          if (tempVal.match(quoteStartRegEx)) {
            currParam.val = (currParam.val || "") + " " + tempVal.match(quoteStartRegEx)[0].replace(/(\"|\')/gm, "");
            expectingVal = true;
          } else {
            currParam.val = (currParam.val || "") + " " + tempVal;
          }
        }
        if (conditions.length > 0) {
          let operator = conditions.pop();
          currParam.operator = operator;
        }
      } else {
        if (expectingVal) {
          currParam.val = (currParam.val || "") + " " + tempVal;
        } else {
          if (_.contains(conditionClauses, currToken.toLowerCase())) {
            conditions.push(currToken.replace(/%22/g, '"'));
          } else {
            keywords.push(currToken.replace(/%22/g, '"'));
          }
        }
      }
    }
  }
  if (currParam != null) {
    currParam.val = currParam.val.replace(/%22/g, '"');
    paramsObj.push(currParam);
  }
  paramsObj.push({
    name: "keyword",
    val: keywords.join(" ")
  });
  callback(null, paramsObj);
};
var SearchQuery = {
  tokenize,
  tokenize_new
};
function getQuery(route2) {
  let query = {};
  switch (route2.prefix) {
    case "all": {
      query = { "state.in": [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED] };
      break;
    }
    case "error": {
      query = {
        "state.in": [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED],
        "err.ne": "$null"
      };
      break;
    }
    case "label": {
      query = {
        "state.in": [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED]
      };
      let id = route2.data;
      query["tags.like"] = "%" + id + "%";
      break;
    }
    case "search": {
      query = parseQuery(route2.query.q);
      break;
    }
    case "trash": {
      query = { "state": C.STATE_DISCARD };
      break;
    }
    case "unread": {
      query = {
        "state.in": [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED],
        "ts_view.lt": { name: "ts_data", type: "field" }
      };
      break;
    }
    default: {
      query = {
        _opt: {
          limit: 0
        }
      };
    }
  }
  if (!query || Object.keys(query).length <= 0) {
    query = {
      _opt: {
        limit: 0
      }
    };
  }
  if (App.store.get("ui.list.clientfilter") == 2) {
    query = __spreadProps(__spreadValues({}, query), { client_id: App.clients.defaultId });
  }
  return query;
}
function parseQuery(txtQuery) {
  let queryObj = {};
  const Ortokens = txtQuery.split(" OR ");
  if (Ortokens.length > 1) {
    let stateInFound = false;
    for (let i = 0; i < Ortokens.length; i++) {
      let orToken = Ortokens[i].trim();
      let andtokens = orToken.split(" AND ");
      let spaceTokens = orToken.split(" ");
      if (andtokens.length > 1) {
        let spaceTokens2 = [];
        for (let j = 0; j < andtokens.length; j++) {
          let spaceWithAndTokens = andtokens[j].split(" ");
          spaceTokens2 = [...spaceTokens2, ...spaceWithAndTokens];
        }
        if (spaceTokens2.length > 0) {
          andtokens = handleLabelsWithSpace(spaceTokens2);
        } else {
          andtokens = handleLabelsWithSpace(andtokens);
        }
        if (andtokens.length > 1) {
          let res2 = groupANDoperations(andtokens);
          let queryParams = res2.response || [];
          queryObj = __spreadProps(__spreadValues({}, queryObj), {
            "$or": [
              ...queryObj["$or"] || [],
              [...queryParams]
            ]
          });
          if (res2.stateInFound) {
            stateInFound = true;
          }
        } else if (andtokens.length == 1) {
          let queryParams = getQueryParams(andtokens[0]) || [];
          queryObj = __spreadProps(__spreadValues({}, queryObj), {
            "$or": [
              ...queryObj["$or"] || [],
              [...queryParams]
            ]
          });
          if (_.contains(queryParams, "state.in")) {
            stateInFound = true;
          }
        }
      } else if (spaceTokens.length > 1) {
        spaceTokens = handleLabelsWithSpace(spaceTokens);
        if (spaceTokens.length > 1) {
          let res2 = groupANDoperations(spaceTokens);
          let queryParams = res2.response || [];
          queryObj = __spreadProps(__spreadValues({}, queryObj), {
            "$or": [
              ...queryObj["$or"] || [],
              [...queryParams]
            ]
          });
          if (res2.stateInFound) {
            stateInFound = true;
          }
        } else if (spaceTokens.length == 1) {
          let queryParams = getQueryParams(spaceTokens[0]) || [];
          queryObj = __spreadProps(__spreadValues({}, queryObj), {
            "$or": [
              ...queryObj["$or"] || [],
              [...queryParams]
            ]
          });
          if (_.contains(queryParams, "state.in")) {
            stateInFound = true;
          }
        }
      } else {
        let queryParams = getQueryParams(orToken) || [];
        queryObj = __spreadProps(__spreadValues({}, queryObj), {
          "$or": [
            ...queryObj["$or"] || [],
            [...queryParams]
          ]
        });
        if (_.contains(queryParams, "state.in")) {
          stateInFound = true;
        }
      }
    }
    if (!stateInFound) {
      queryObj["state.in"] = [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED];
    }
  } else {
    SearchQuery.tokenize_new(txtQuery, ["and", "or"], function(error, data) {
      queryObj = buildQuery(data);
    });
  }
  return queryObj;
}
function groupANDoperations(tokens) {
  let queryObj = {};
  let stateInFound = false;
  for (let j = 0; j < tokens.length; j++) {
    let andToken = tokens[j].trim();
    let queryParams = getQueryParams(andToken) || [];
    queryObj = __spreadProps(__spreadValues({}, queryObj), {
      "$and": [
        ...queryObj["$and"] || [],
        [...queryParams]
      ]
    });
    if (_.contains(queryParams, "state.in")) {
      stateInFound = true;
    }
  }
  return {
    response: ["$and", queryObj["$and"]],
    stateInFound
  };
}
function handleLabelsWithSpace(tokens) {
  const quoteStartRegEx = new RegExp(/(\"|\').*/);
  const quoteEndRegEx = new RegExp(/.*(\"|\')$/);
  let currentVal = "";
  let currentKey = "";
  let expectingVal = false;
  let outputTokens = [];
  for (let i = 0; i < tokens.length; i++) {
    let currToken = tokens[i];
    if (expectingVal) {
      for (let j = i; j < tokens.length; j++) {
        currToken = tokens[j];
        currentVal = (currentVal || "") + " " + currToken;
        if (currToken.match(quoteEndRegEx)) {
          expectingVal = false;
          i = j;
          currentVal = currentVal.replace('"', "");
          break;
        }
      }
      let currentObj = currentKey + ":" + currentVal;
      outputTokens.push(currentObj);
      currentVal = "";
      currentKey = "";
    } else {
      if (currToken.indexOf(":") > -1) {
        currentKey = currToken.split(":")[0];
        var tempVal = currToken.split(":")[1].trim();
        if (tempVal) {
          if (tempVal.match(quoteStartRegEx) && tempVal.match(quoteEndRegEx)) {
            currentVal = (currentVal || "") + tempVal.match(quoteStartRegEx)[0].replace(/(\"|\')/gm, "");
            let currentObj = currentKey + ":" + currentVal;
            outputTokens.push(currentObj);
            currentVal = "";
            currentKey = "";
          } else if (tempVal.match(quoteStartRegEx)) {
            currentVal = (currentVal || "") + tempVal.match(quoteStartRegEx)[0].replace(/(\"|\')/gm, "");
            expectingVal = true;
          } else {
            currentVal = (currentVal || "") + tempVal;
            let currentObj = currentKey + ":" + currentVal;
            outputTokens.push(currentObj);
            currentVal = "";
            currentKey = "";
          }
        }
      } else {
        if (expectingVal) {
          currentVal = (currentVal || "") + " " + tempVal;
        }
      }
    }
  }
  return outputTokens;
}
function getQueryParams(token) {
  let queryObj = [];
  const nameVal = token.split(":");
  if (nameVal.length > 1) {
    let currName = nameVal[0];
    let currVal = nameVal[1];
    switch (currName) {
      case "label":
        var labels = App.labels.where({ name: currVal });
        if (labels && labels.length > 0) {
          _.forEach(labels, function(label) {
            queryObj.push("tags.ilike");
            queryObj.push("%" + label.id + "%");
          });
        } else {
          queryObj = [];
          return;
        }
        break;
      case "is":
        if (currVal.match(/on/i) && !queryObj["state.in"]) {
          queryObj.push("state.in");
          queryObj.push([C.STATE_READY]);
          break;
        } else if (currVal.match(/on/i) && queryObj["state.in"].indexOf(C.STATE_READY) >= 0) {
          break;
        } else if (currVal.match(/off/i) && !queryObj["state.in"]) {
          queryObj.push("state.in");
          queryObj.push([C.STATE_PAUSED, C.STATE_INIT]);
          break;
        } else if (currVal.match(/off/i) && queryObj["state.in"].indexOf(C.STATE_PAUSED) >= 0) {
          break;
        } else if (currVal.match(/unread/i)) {
          queryObj.push("ts_view.lt");
          queryObj.push({ name: "ts_data", type: "field" });
          break;
        } else if (currVal.match(/read/i)) {
          queryObj.push("ts_view.gt");
          queryObj.push({ name: "ts_data", type: "field" });
          break;
        } else {
          queryObj = {};
          return;
        }
      case "has":
        if (currVal.match(/error/i)) {
          queryObj.push("err.ne");
          queryObj.push("$null");
          break;
        } else {
          queryObj = {};
          return;
        }
      case "keyword":
        queryObj.push("$or");
        queryObj.push({ "uri.ilike": "%" + currVal + "%", "name.ilike": "%" + currVal + "%" });
        break;
      case "in":
        if (currVal.match(/trash/i) && !queryObj["state.in"]) {
          queryObj.push("state.in");
          queryObj.push([C.STATE_DISCARD]);
        } else if (currVal.match(/trash/i) && queryObj["state.in"])
          ;
        else {
          queryObj = {};
          return;
        }
        break;
      default:
        queryObj.push("state.ne");
        queryObj.push(C.STATE_DEL);
        queryObj.push("$or");
        queryObj.push({ "uri.ilike": "%" + currName + ":" + currVal + "%", "name.ilike": "%" + currName + ":" + currVal + "%" });
    }
  }
  return queryObj;
}
function buildQuery(paramsObj) {
  let queryObj = {};
  for (let i = 0; i < paramsObj.length; i++) {
    const currName = paramsObj[i].name.toLowerCase();
    if (!paramsObj[i].val)
      continue;
    const currVal = paramsObj[i].val.trim();
    switch (currName) {
      case "label":
        var labels = App.labels.where({ name: currVal });
        if (labels && labels.length > 0) {
          queryObj["tags.ilike"] = queryObj["tags.ilike"] || [];
          _.forEach(labels, function(label) {
            queryObj["tags.ilike"].push(label.id);
          });
        } else {
          queryObj = {};
          return;
        }
        break;
      case "is":
        if (currVal.match(/on/i) && !queryObj["state.in"]) {
          queryObj["state.in"] = [C.STATE_READY];
          break;
        } else if (currVal.match(/on/i) && queryObj["state.in"].indexOf(C.STATE_READY) >= 0) {
          break;
        } else if (currVal.match(/off/i) && !queryObj["state.in"]) {
          queryObj["state.in"] = [C.STATE_PAUSED, C.STATE_INIT];
          break;
        } else if (currVal.match(/off/i) && queryObj["state.in"].indexOf(C.STATE_PAUSED) >= 0) {
          break;
        } else if (currVal.match(/unread/i)) {
          queryObj["ts_view.lt"] = { name: "ts_data", type: "field" };
          break;
        } else if (currVal.match(/read/i)) {
          queryObj["ts_view.gt"] = { name: "ts_data", type: "field" };
          break;
        } else {
          queryObj = {};
          return;
        }
      case "keyword":
        queryObj["$or"] = { "uri.ilike": "%" + currVal + "%", "name.ilike": "%" + currVal + "%" };
        break;
      case "has":
        if (currVal.match(/error/i)) {
          queryObj["err.ne"] = "$null";
          break;
        } else {
          queryObj = {};
          return;
        }
      case "in":
        if (currVal.match(/trash/i) && !queryObj["state.in"]) {
          queryObj["state.in"] = [C.STATE_DISCARD];
        } else if (currVal.match(/trash/i) && queryObj["state.in"])
          ;
        else {
          queryObj = {};
          return;
        }
        break;
      default:
        queryObj["state.ne"] = C.STATE_DEL;
        queryObj["$or"] = { "uri.ilike": "%" + currName + ":" + currVal + "%", "name.ilike": "%" + currName + ":" + currVal + "%" };
    }
  }
  if (queryObj["tags.ilike"] && queryObj["tags.ilike"].length > 0) {
    if (queryObj["tags.ilike"].length == 1) {
      queryObj["tags.ilike"] = "%" + queryObj["tags.ilike"].join("%") + "%";
    } else {
      queryObj["$andTAGS"] = _.map(queryObj["tags.ilike"], function(id) {
        return ["tags.ilike", "%" + id + "%"];
      });
      delete queryObj["tags.ilike"];
    }
  }
  if (!_.isEmpty(queryObj) && !queryObj["state.in"]) {
    queryObj["state.in"] = [C.STATE_INIT, C.STATE_READY, C.STATE_PAUSED];
  }
  return queryObj;
}
function create_if_block$j(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "error";
      attr(div, "class", "error");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$C(ctx) {
  let div1;
  let t;
  let div0;
  let if_block = ctx[1] && create_if_block$j();
  return {
    c() {
      div1 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div0 = element("div");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      if (if_block)
        if_block.m(div1, null);
      append(div1, t);
      append(div1, div0);
      ctx[4](div0);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$j();
          if_block.c();
          if_block.m(div1, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      ctx[4](null);
    }
  };
}
function instance$C($$self, $$props, $$invalidate) {
  let { route: route2 } = $$props;
  let { user, clients, labels, sieves } = getContext("watchlist:stores");
  let root = getContext("view:root");
  let el;
  let view;
  let error;
  function show() {
    $$invalidate(1, error = null);
    let exportQueryInRouteData = lib.parse(route2.data);
    let query = getQuery(exportQueryInRouteData);
    if (route2.prefix == "csv") {
      view.asCSV(query);
    } else if ($$invalidate(2, route2.prefix = "json", route2)) {
      view.asJSON(query);
    } else {
      $$invalidate(1, error = "invalid export method");
    }
  }
  onMount(async () => {
    $$invalidate(3, view = new Exporter({ el, collection: sieves, parent: root }).render());
    show();
    return () => view.remove();
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$invalidate(2, route2 = $$props2.route);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      route2 && view && show();
    }
  };
  return [el, error, route2, view, div0_binding];
}
class Export extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$C, create_fragment$C, safe_not_equal, { route: 2 });
  }
}
const SieveActionEditor = View$1.Base.extend({
  name: "SieveActionEditor",
  postInit: function() {
    this.listenTo(this.model, "remove", this.remove);
    this.paramsModel = new Backbone.Model(this.model.get("config"));
    this.listenTo(this.paramsModel, "change", this.onEditParams);
  },
  onDelete: function() {
    this.model.collection.remove(this.model);
  },
  onEditParams: function() {
    this.model.set("config", this.paramsModel.toJSON());
  },
  render: function() {
    const desc = this.model.desc;
    let paramsEl;
    let editors;
    if (!desc.single) {
      let del;
      this.$el.append(del = A({
        "class": "btn fa fa-trash-o xbtn-light",
        "style": "vertical-align: top;margin-top: 5px;",
        "href": "javascript:void 0",
        "title": T("h_del_action")
      }));
      del.onclick = this.onDelete;
    } else {
      this.$el.css({
        "margin-left": 30,
        "line-height": 0
      });
    }
    this.$el.append(paramsEl = DIV({ style: "display:inline-block;width:80%; margin-bottom: 5px;" })).css({ position: "relative", overflow: "visible" });
    editors = this.paramEditors = _.map(desc.params, function(param) {
      const paramEditor = Editor.create(param.type, {
        param,
        parent: this,
        model: this.paramsModel
      });
      paramsEl.appendChild(paramEditor.render().el);
      if (!param.must) {
        paramEditor.$el.hide();
      }
      return paramEditor;
    }, this);
    if (_.any(desc.params, function(param) {
      return !param.must;
    })) {
      let elToggle;
      paramsEl.appendChild(elToggle = BUTTON({ "class": "btn btn-default btn-xs xbtn-light" }, T("l_options")));
      elToggle.onclick = function() {
        _.each(editors, function(editor) {
          editor.$el.show();
        });
        $(elToggle).remove();
      };
    }
    if (desc.plugin) {
      desc.plugin(this);
    }
    return this;
  }
});
const SieveActionGroup = View$1.Base.extend({
  name: "SieveActionGroup",
  className: "xtype-group",
  postInit: function(options) {
    this.desc = options.desc;
    this.models = options.models;
    this.views = {};
    this.listenTo(this.models, "add", this.addOne);
    this.listenTo(this.models, "remove", this.onActionRemove);
  },
  addOne: function(action) {
    if (this.views[action.cid] == null && action.desc.type == this.desc.type) {
      const view = new SieveActionEditor({
        model: action,
        parent: this
      }).render();
      this.$list.append(view.el);
      this.views[action.cid] = view;
    }
  },
  isVoid: function(view) {
    return this.desc.single || this.desc.params.length == 0;
  },
  onActionAdd: function() {
    this.models.add(new Model$2.SieveAction[this.desc.type]());
  },
  onActionRemove: function(action, actionGroup) {
    if (this.models.where({ type: this.desc.type }).length == 0) {
      this.remove();
    }
  },
  onDelete: function() {
    const actions = this.models.where({ type: this.desc.type });
    _.each(actions, function(action) {
      this.models.remove(action);
    }, this);
  },
  render: function() {
    const desc = this.desc;
    let btnAdd;
    let btnDel;
    this.$list = $(DIV());
    if (desc.single) {
      this.$el.append(btnDel = BUTTON({
        "class": "btn fa fa-trash-o xbtn-light",
        "title": T("h_del_action")
      }));
      btnDel.onclick = this.onDelete;
    }
    if (!desc.single) {
      this.$el.append(btnAdd = BUTTON({ "class": "btn fa fa-plus xbtn-light pull-right" }));
      btnAdd.onclick = this.onActionAdd;
    }
    this.$el.append(SPAN({ style: "" }, SPAN(T(desc.label)), this.$list[0]));
    this.models.each(this.addOne);
    return this;
  }
});
const SieveActionsEditor = View$1.ActionProvider.extend({
  name: "SieveActionsEditor",
  actions: {
    action_global_actions: { fn: "action_global_actions" }
  },
  action_global_actions: function() {
    showGlobalActionEditor();
  },
  postInit: function(options) {
    this.actionGroups = {};
    this.dels = [];
    this.sieve = options.sieve;
    this.models = options.actions;
    this.listenTo(this.models, "add", this.addOne);
    this.listenTo(this.models, "remove", this.onActionRemove);
    this.listenTo(this.models, "reset", this.render);
  },
  addOne: function(action) {
    const desc = action.desc;
    const type = desc.type;
    this.$emptyEl.remove();
    if (!this.actionGroups[type]) {
      const view = this.actionGroups[type] = new SieveActionGroup({
        models: this.models,
        desc,
        parent: this
      }).render();
      this.listenTo(view, "remove", function() {
        delete this.actionGroups[type];
      }, this);
      this.$list.append(view.el);
    }
  },
  getChanges: function() {
    return {
      dels: this.dels,
      posts: this.getPosts(),
      puts: this.getPuts()
    };
  },
  getPosts: function() {
    return this.models.filter(function(action) {
      return action.isNew();
    });
  },
  getPuts: function() {
    return this.models.filter(function(action) {
      return !action.isNew() && action.hasChanged();
    });
  },
  onAddActionMenuClick: function(e) {
    const type = $(e.currentTarget).attr("tag");
    const Type = Model$2.SieveAction[type];
    if (Type.desc.single && this.models.where({ type: Type.desc.type }).length > 0) {
      Msg.info("m_action_can_add_only_one");
      return;
    }
    this.models.add(new Type(null, {
      parent: this.sieve
    }));
    e.preventDefault();
  },
  onActionRemove: function(action) {
    if (!action.isNew()) {
      this.dels.push(action);
    }
  },
  render: function() {
    let menu;
    this.reset();
    this.$emptyEl = $(DIV({ "class": "alert alert-warning hide" }, "No action added - add one to get alerted on changes"));
    this.$list = $(DIV());
    this.$el.empty().append(DIV({ style: "position: relative;" }, DIV(A({
      "id": "menu_add_action",
      "class": "dropdown-toggle",
      "data-toggle": "dropdown",
      "href": "javascript:void 0"
    }, T("a_add_action"), " ", B({ "class": "caret" })), " ", menu = UL({
      "class": "dropdown-menu",
      "role": "menu",
      "aria-labelledby": "menu_add_action",
      "style": "z-index: 2000"
    }), " ", this.options.global ? "" : A({
      "href": "#",
      "class": "right pl4",
      "data-action": "action_global_actions"
    }, "Global")), DIV({
      "class": "right",
      "style": "margin-left:10px;"
    })), this.$emptyEl, DIV({ style: "max-height: 360px;overflow-y:auto;overflow-x-hidden;" }, this.$list[0]));
    _.each(Model$2.SieveActionDescList, function(desc) {
      menu.appendChild(LI(A({ tag: desc.type, tabindex: -1, href: "javascript:void 0" }, I({ "class": "fa " + desc.icon }), SPAN({ style: "margin-left: 10px;" }, T(desc.label), desc.paid ? " *" : ""))));
    });
    menu.appendChild(LI({ "class": "disabled" }, A({ href: "#" }, "* " + T("m_premium_only"))));
    $(menu).find("a").click(this.onAddActionMenuClick);
    this.models.each(this.addOne);
    this.$emptyEl[this.models.length == 0 ? "removeClass" : "addClass"]("hide");
    return this;
  },
  reset: function() {
    _.each(this.actionGroups, function(view) {
      view.remove();
    });
    this.actionGroups = {};
    this.dels = [];
  }
});
async function showGlobalActionEditor() {
  if (!USER.id) {
    return alert("Please sign in save global actions");
  }
  Msg.info("loading");
  let sieve = new Model$2.Sieve();
  let actions = new Model$2.SieveActions(null, { parent: sieve });
  let data;
  try {
    data = await Api.api("/prefs/actions");
    Msg.reset();
  } catch (e) {
    console.error(e);
    return Msg.error("Please try again later. Failed to load data.");
  }
  actions.set({ data }, { parse: true });
  let view = new SieveActionsEditor({
    actions,
    sieve,
    parent: App.root,
    global: true
  });
  const modal = new View$1.SaveDiscardModal({
    name: "GlobalActionEditor$SaveDiscardModal",
    title: "Global Actions",
    titleEx: `taken on changes for all monitors, merged with monitor's actions`,
    view,
    parent: App.root
  });
  modal.on("save", async () => {
    modal.remove();
    let data2 = actions.toJSON();
    try {
      await Api.api("/prefs/actions", "PUT", data2);
      USER.prefs.actions = data2;
    } catch (e) {
      console.error(e);
      Msg.error("Failed to save data, please try again later");
    }
  });
  modal.on("discard", () => {
    modal.remove();
  });
  modal.show();
}
const SieveRuleEditor = View$1.Base.extend({
  name: "SieveRuleEditor",
  className: "xtype-group",
  postInit: function() {
    this.paramsModel = new Backbone.Model(this.model.rule.params);
  },
  getConfig: function() {
    return {
      type: C.TYPE_RULE,
      contentType: this.getContentType(),
      rule: {
        type: this.getRuleType(),
        params: this.getParams()
      }
    };
  },
  getContentType: function() {
    return parseInt(this.selContentType.value);
  },
  getParams: function() {
    const keys = _.pluck(this.getRuleDesc().params, "name");
    const json = this.paramsModel.toJSON();
    return _.pick(...[json].concat(keys));
  },
  getRuleDesc: function() {
    return _.findWhere(Rules.DescList, { type: this.getRuleType() }) || {
      type: 0,
      lable: "l_rule_unknown",
      params: []
    };
  },
  getRuleType: function() {
    return parseInt(this.selRuleType.value);
  },
  onTypeChange: function() {
    this.renderParams();
    this.bubbleEvent("onTypeChange");
  },
  render: function() {
    let elParams;
    this.$el.append(this.selContentType = SELECT.apply(window, _.map(Rules.ContentList, function(item) {
      return OPTION({ value: item.type }, T(item.label));
    })), this.selRuleType = SELECT.apply(window, _.map(Rules.DescList, function(item) {
      return OPTION({ value: item.type }, T(item.label));
    })), elParams = DIV({
      style: "margin-top: 4px;"
    }));
    this.selContentType.value = this.model.contentType;
    this.selRuleType.value = this.model.rule.type;
    this.$elParams = $(elParams);
    this.renderParams();
    $(this.selRuleType).change(this.onTypeChange);
    return this;
  },
  renderParams: function() {
    const elParams = this.$elParams;
    const model = this.paramsModel;
    const desc = this.getRuleDesc();
    if (!desc)
      throw new Error("Unknown rule desc:" + this.getRuleType());
    elParams.empty();
    const els = _.map(desc.params, function(param) {
      return Editor.create(param.type, {
        param,
        parent: this,
        model
      }).render().el;
    }, this);
    elParams.append(els);
  }
});
var SieveRuleGroupEditor = View$1.Base.extend({
  name: "SieveRuleGroupEditor",
  tagName: "fieldset",
  className: "xrulegroup",
  postInit: function() {
    this.editors = [];
  },
  addOne: function(config) {
    if (config.type == C.TYPE_RULE) {
      this.addRule(config);
    } else if (config.type == C.TYPE_RULE_GROUP) {
      this.addRuleGroup(config);
    }
  },
  addEditor: function(editor, isGroup) {
    let btn;
    let wrapper;
    const self = this;
    this.$list.append(wrapper = DIV({ "class": "row" }, DIV({ "class": "col-md-1" }, btn = BUTTON({
      "class": "btn xbtn-light"
    }, I({ "class": "fa fa-trash-o" }))), DIV({
      "class": "col-md-11",
      "style": "padding-left: 0"
    }, editor.el)));
    $(btn).click(function() {
      editor.remove();
      wrapper.remove();
      self.editors.splice(_.indexOf(self.editors, editor), 1);
    });
    this.editors.push(editor);
  },
  addRule: function(ruleConfig) {
    ruleConfig || (ruleConfig = this.defaultRule());
    const editor = new SieveRuleEditor({
      model: ruleConfig,
      parent: this
    }).render();
    this.addEditor(editor, false);
  },
  addRuleGroup: function(ruleGroupConfig) {
    ruleGroupConfig || (ruleGroupConfig = this.defaultRuleGroup());
    const editor = new SieveRuleGroupEditor({
      model: ruleGroupConfig,
      parent: this
    }).render();
    editor.setConfig(ruleGroupConfig);
    this.addEditor(editor, true);
  },
  defaultRule: function() {
    return {
      type: C.TYPE_RULE,
      contentType: C.CONTENT_TYPE_CHANGED_TEXT,
      rule: {
        type: C.RULE_HAS_TEXT,
        params: { input: "" }
      }
    };
  },
  defaultRuleGroup: function() {
    return {
      type: C.TYPE_RULE_GROUP,
      op: C.OP_AND,
      rules: [this.defaultRule()]
    };
  },
  getConfig: function() {
    return {
      type: C.TYPE_RULE_GROUP,
      op: parseInt(this.selOp.value),
      rules: _.map(this.editors, function(editor) {
        return editor.getConfig();
      })
    };
  },
  isEmpty: function() {
    return this.editors.length == 0;
  },
  onAddClick: function(e) {
    const tag = e.target.getAttribute("tag");
    if (!tag)
      return;
    if (tag == C.TYPE_RULE) {
      this.addRule();
    } else if (tag == C.TYPE_RULE_GROUP) {
      this.addRuleGroup();
    } else
      ;
  },
  render: function() {
    let list;
    let actions;
    this.$el.append(LEGEND(T("l_rule_true_if_matches_x") + " ", this.selOp = SELECT(OPTION({ value: C.OP_AND }, T("l_all")), OPTION({ value: C.OP_OR }, T("l_any"))), " " + T("l_x_of_following_rules") + ":", actions = DIV({ "class": "btn-group xadd-rule right" }, BUTTON({ "class": "btn btn-default btn-xs", "tag": C.TYPE_RULE }, I({ "class": "fa fa-plus" }), " ", SPRINTF("a_action_object", "a_add", "l_rule")), BUTTON({
      "class": "btn btn-default btn-xs dropdown-toggle",
      "data-toggle": "dropdown"
    }, SPAN({ "class": "caret" })), UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({
      tag: C.TYPE_RULE_GROUP,
      tabindex: -1,
      href: "javascript:void 0"
    }, SPRINTF("a_action_object", "a_add", "l_rule_group")))))), list = DIV());
    $(actions).click(this.onAddClick);
    this.$list = $(list);
    return this;
  },
  setConfig: function(model) {
    this.selOp.value = model.op;
    _.each(this.editors, function(editor) {
      editor.remove();
    });
    this.editors = [];
    _.each(model.rules, this.addOne);
  }
});
const SieveRulesEditorV1 = View$1.ActionProvider.extend({
  name: "SieveRulesEditorV1",
  numberFormatModel: new Backbone.Model(),
  actions: {
    add_condition: { fn: "action_add" }
  },
  action_add: function() {
    this.ruleView.addRule();
    this.renderRules();
    this.trigger("onTypeChange");
  },
  postInit: function(options) {
    this.ruleView = new SieveRuleGroupEditor({
      parent: this
    }).render();
    if (!this.model.isEmpty()) {
      _.delay(this.onLoad);
    }
    this.on("onTypeChange", function() {
      let config = this.ruleView.getConfig();
      if (config) {
        if (containsRuleWithNumber(config)) {
          $(this.numberFormatElement).show();
        } else {
          $(this.numberFormatElement).hide();
        }
      }
    });
  },
  onLoad: function() {
    let config = this.model.get("config");
    if (!config.numberFormat) {
      this.numberFormatModel.set("numberFormat", C.NUM_FORMAT_COMMA_DOT);
    } else {
      this.numberFormatModel.set("numberFormat", config.numberFormat);
    }
    this.ruleView.setConfig(config);
    this.renderRules();
    this.trigger("onTypeChange");
  },
  render: function() {
    let body;
    this.$el.append(body = DIV({ style: "max-height: 600px; overflow-y: auto; overflow-x:hidden;" }));
    this.$body = $(body);
    this.renderRules();
    return this;
  },
  renderRules: function() {
    const $el = this.$body;
    $el.empty();
    if (this.ruleView.isEmpty()) {
      $el.append(A({
        "href": "#",
        "data-action": "add_condition"
      }, SPRINTF("a_action_object", "a_add", "l_rule")), " ", this.options.global ? "" : A({
        "href": "#",
        "class": "right pl4",
        "data-action": "action_global_rules"
      }, "Global"));
    } else {
      $el.append(this.ruleView.el);
      this.renderNumberFormat();
    }
  },
  renderNumberFormat: function() {
    const $el = this.$body;
    $el.append(this.numberFormatElement = DIV({
      "class": "flex"
    }, SPAN({
      "class": "pr2"
    }, T(Rules.NumberFormatOptions.label) + ":"), Editor.create(Rules.NumberFormatOptions.type, {
      param: Rules.NumberFormatOptions,
      parent: this,
      model: this.numberFormatModel
    }).render().el));
  },
  updateModel: function() {
    const config = this.ruleView.getConfig();
    config.numberFormat = this.numberFormatModel.get("numberFormat");
    this.model.set("config", config);
  }
});
function containsRuleWithNumber(config) {
  if (config.type === 1 && !!config.rule) {
    return Rules.NumericConditions.includes(config.rule.type);
  } else if (config.type === 2 && config.rules.length > 0) {
    return _.any(config.rules, function(config2) {
      return containsRuleWithNumber(config2);
    });
  }
  return false;
}
function create_fragment$B(ctx) {
  let div;
  let p0;
  let t1;
  let p1;
  return {
    c() {
      div = element("div");
      p0 = element("p");
      p0.textContent = "Please upgrade to the latest version of app/extension.";
      t1 = space();
      p1 = element("p");
      p1.textContent = `This condition was created using a newer version of the app which is not supported by this version. Current version is ${ctx[0]}`;
      attr(div, "class", "p-2 text-base");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p0);
      append(div, t1);
      append(div, p1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$B($$self) {
  let currentVersion = Supports.agent && Supports.agent.local ? Service$1.CFG.VERSION : "1.0.0";
  return [currentVersion];
}
class VersionUpdateMsg extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$B, create_fragment$B, safe_not_equal, {});
  }
}
const SieveRulesVersionManager = View$1.ActionProvider.extend({
  name: "SieveRulesVersionManager",
  actions: {
    action_global_rules: { fn: "action_global_rules" }
  },
  action_global_rules() {
    showGlobalRuleEditor();
  },
  postInit: function(options) {
    if (!this.model.isNew()) {
      this.loading = true;
      this.model.fetch({
        success: this.onLoad,
        error: this.onError
      });
    }
  },
  onError: function() {
    this.loading = false;
    this.$body.empty();
    this.$body.append(T("e_req"), " ", T("h_try_later"));
  },
  onLoad: function() {
    this.loading = false;
    this.renderEditor();
  },
  render: function() {
    let body;
    this.$el.append(body = DIV({ style: "max-height: 600px; overflow-y: auto; overflow-x:hidden;" }));
    this.$body = $(body);
    if (this.loading) {
      this.$body.text(T("l_loading"));
    } else {
      this.renderEditor();
    }
    return this;
  },
  renderEditor: function() {
    let version = this.model.get("version");
    const $el = this.$body;
    $el.empty();
    if (version && version !== "1.0.0") {
      new VersionUpdateMsg({
        target: this.$el[0]
      });
    } else {
      this.editor = new SieveRulesEditorV1(this.options).render();
      $el.append(this.editor.el);
    }
  },
  duplicate: async function(fromId) {
    const model = new Model$2.SieveRule({ id: fromId });
    await model.fetch({
      success: () => {
        this.model.set(_.omit(model.attributes, "id", "ts", "ts_mod"));
        this.onLoad();
      }
    });
  },
  updateModel: function() {
    if (this.editor) {
      this.editor.updateModel();
    }
  }
});
async function showGlobalRuleEditor() {
  if (!USER.id) {
    return alert("Please sign in save global conditions");
  }
  Msg.info("loading");
  let config;
  try {
    config = await Api.api("/prefs/rule");
    Msg.reset();
  } catch (e) {
    console.error(e);
    return Msg.error("Please try again later. Failed to load data.");
  }
  let model = new Model$2.SieveRule({ config });
  let view = new SieveRulesVersionManager({ model, global: true, parent: App.root });
  const modal = new View$1.SaveDiscardModal({
    name: "GlobalRuleEditor$SaveDiscardModal",
    title: "Global Conditions",
    titleEx: `used for all monitors and combined with each monitor's conditions`,
    view,
    parent: App.root
  });
  modal.on("save", async () => {
    modal.remove();
    view.updateModel();
    let config2 = model.get("config");
    try {
      await Api.api("/prefs/rule", "PUT", config2);
      USER.prefs.rule = config2;
    } catch (e) {
      console.error(e);
      Msg.error("Failed to save data, please try again later");
    }
  });
  modal.on("discard", () => {
    modal.remove();
  });
  modal.show();
}
const Backbone$4 = window.Backbone;
function getInterval($el, defaultUnit = "m", defaultValue = 120) {
  const units = { "s": 1, "m": 60, "h": 3600, "d": 86400, "w": 604800 };
  const parts = $el.val().trim().replace(/\s+/g, "").split(/(\d*\.*\d*)/);
  const num = parseInt(parts[1]) || defaultValue;
  const unit = (parts[2] || "").toLowerCase()[0] || defaultUnit;
  const value = num * units[unit];
  return value;
}
const WEEK_DAY_INDEX = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MONTH_INDEX = ["", "Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
class SieveCronScheduleEditor extends Base$1 {
  constructor(options) {
    super(__spreadProps(__spreadValues({}, options.model.toJSON()), {
      params: options.model.get("schedule").toJSON().params
    }));
    this.model = options.model;
    this.schedule = this.model.get("schedule");
    this.el.classList.add("xtype-group");
    this.el.classList.add("inline-block");
    this.el.style.minWidth = "480px";
  }
  onChange(name, value) {
    const index = ["m", "h", "dm", "mon", "dw"].indexOf(name);
    const params2 = __spreadValues({}, this.state.params);
    const { expr } = params2;
    const parts = expr.split(/\s/g);
    parts[index] = value;
    params2.expr = parts.join(" ");
    this.state.params = params2;
    if (parts.length == 5 && _.all(parts, (p) => p.length > 0)) {
      this.setModelParams(params2);
    }
  }
  onPresetClick(e) {
    e.preventDefault();
    const params2 = __spreadValues({}, this.state.params);
    params2.expr = e.target.dataset.expr;
    this.state.params = params2;
    this.setModelParams(params2);
  }
  setModelParams(params2) {
    this.schedule.set("params", new Backbone$4.Model(params2));
    this.model.trigger("change:schedule", this.schedule);
  }
  getDesc({ m, h, dm, mon, dw }) {
    function unit(name, val) {
      if (val.includes(",")) {
        const parts = val.split(",").map((expr) => unit(name, expr));
        const last = parts.pop();
        return `${parts.join(", ")} and ${last}`;
      }
      if (val == "*") {
        return `every ${name}`;
      }
      if (val.includes("-")) {
        let [start, end] = val.split("-");
        if (name == "month") {
          start = MONTH_INDEX[start];
          end = MONTH_INDEX[end];
        }
        if (name == "day-of-week") {
          start = WEEK_DAY_INDEX[start];
          end = WEEK_DAY_INDEX[end - 1];
        }
        return `every ${name} from ${start} through ${end}`;
      }
      if (val.includes("/")) {
        let [start, step] = val.split("/");
        const end = "";
        let startText = "every";
        if (step > 1) {
          const suffixes = ["", "st", "nd", "rd"];
          startText = step + (suffixes[step] || "th");
        }
        if (start == "*") {
          start = null;
        } else if (name == "month") {
          start = MONTH_INDEX[start];
        } else if (name == "day-of-week") {
          start = WEEK_DAY_INDEX[start];
        }
        return `every  ${startText} ${name} ${start ? `from ${start} through ${end}` : ""}`;
      }
      if (name == "month") {
        val = MONTH_INDEX[val];
        name = "";
      }
      if (name == "day-of-week") {
        val = WEEK_DAY_INDEX[val];
        name = "";
      }
      return `${name} ${val}`;
    }
    try {
      return `At ${unit("minute", m)} past ${unit("hour", h)} on ${unit("day-of-week", dw)} in ${unit("month", mon)}`;
    } catch (e) {
      console.error(e, arguments[0]);
      return "Invalid expression";
    }
  }
  createTpl({ params: params2 }) {
    const expr = params2.expr;
    params2.tz || new Date().getTimezoneOffset();
    const [m, h, dm, mon, dw] = expr.split(/\s/g);
    const attrMap = { m, h, dm, mon, dw };
    const desc = this.getDesc(attrMap);
    const names = {
      m: "Minute",
      h: "Hour",
      dm: "Day",
      mon: "Month",
      dw: "Weekday"
    };
    return html`
      <table>
        <thead>
          ${_.map(names, (name, key) => {
      return html`<th class='col-md-2'>${name}</th>`;
    })}
          <th></th>
        </thead>
        <tbody>
          <tr>
            ${_.map(names, (name, key) => {
      return html`
                <td class='col-md-2'>
                  <input
                    style='width: 60px; padding: 0 10px;'
                    .value=${attrMap[key]}
                    placeholder=${name}
                    @keyup=${(e) => this.onChange(key, e.target.value)}>
                  </input>
                </td>
                `;
    })}
            <td>
              <div class='dropdown'>
                <a href='#' data-toggle='dropdown'>Use Preset <i class='fa fa-caret-down'></i></a>
                <ul class='dropdown-menu' @click=${(e) => this.onPresetClick(e)}>
                  <li><a href='#' data-expr='0 9 * * 1-5'>Weekdays at 9am</a></li>
                  <li><a href='#' data-expr='0 9-17 * * 1-5'>Weekdays between 9am to 5pm</a></li>
                  <li><a href='#' data-expr='0 9 * * *'>All days at 9am</a></li>
                  <li><a href='#' data-expr='0 9-17 * * *'>All days between 9am to 5pm</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td 
              style='width: 60px; padding: 0 12px;'
              colspan=6><div class='help'>
                ${desc}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
  remove() {
  }
  render() {
    return this;
  }
}
var SieveIntervalScheduleEditor = View$1.ActionProvider.extend({
  name: "SieveIntervalScheduleEditor",
  convertToSlider: function(v) {
    return Math.log(v);
  },
  convertToModel: function(v) {
    return Math.round(Math.pow(Math.E, v));
  },
  focus: function() {
    this.textInput.focus();
  },
  getSliderValue: function() {
    return this.convertToModel(this.$slider.val());
  },
  setSliderValue: function(value) {
    this.$slider.slider("setValue", this.convertToSlider(value));
  },
  remove: function() {
    if (this.$slider.data("slider")) {
      this.$slider.slider("destroy");
    }
    SieveIntervalScheduleEditor.__super__.remove.call(this);
  },
  render: function() {
    const schedule = this.model.get("schedule");
    const params2 = schedule.get("params");
    const interval = params2.get("interval");
    const value = this.convertToSlider(interval);
    this.$el.empty().append(DIV({ style: "display:flex;min-width:420px;margin-bottom:25px;" }, this.slider = INPUT({
      style: "width:100%;",
      value
    }), this.textInput = INPUT({ "class": "xschdlr-input" })), SPAN({ "class": "help" }, this.constraint = SPAN({ style: "color: red; display: none;" }, T("h_schedule_constraint_1"), T(schedule.formatInterval(USER.constraint.interval, false) + "."), BR(), T("h_schedule_constraint_2"), A({ "href": "https://distill.io/pricing", "target": "_blank" }, "Upgrade Account"))), P({ "class": "help" }, T("h_schedule_interval")));
    this.$constraint = $(this.constraint);
    this.$slider = $(this.slider).slider({
      min: 1.6,
      max: 14.78,
      step: 0.05,
      tooltip: "hide",
      value,
      "ticks": [1.6, 3.4, 5.7, 8.3, 11.55, 14.78],
      "ticks_positions": [0, 13.657, 31.107, 50.834, 75.493, 100],
      "ticks_labels": ["5s", "30s", "5m", "1h", "1d", "Never"],
      "ticks_snap_bounds": 0
    }).on("slide", this.updateValue).on("slideStop", this.updateModel);
    this.$textInput = $(this.textInput).on("change", this.textInputChanged).on("focus", function() {
      this.select();
    });
    this.updateValue();
    return this;
  },
  textInputChanged: function() {
    const value = getInterval(this.$textInput, "m", 3600);
    this.setSliderValue(value);
    this.updateValue();
    this.updateModel();
  },
  updateModel: function() {
    this.updateValue();
    const schedule = this.model.get("schedule");
    this.model.trigger("change");
    this.model.trigger("change:schedule", schedule);
  },
  updateValue: function() {
    const seconds = this.getSliderValue();
    const client_id = this.model.get("client_id");
    const schedule = this.model.get("schedule");
    const params2 = schedule.get("params");
    const constraint = USER && USER.constraint;
    const minInt = constraint && constraint.interval || 5;
    if (client_id == ModelClient.Clients.webAppId && seconds < minInt) {
      params2.set("interval", USER.constraint.interval);
      this.$constraint.css("display", "block");
    } else {
      params2.set("interval", seconds);
      this.$constraint.css("display", "none");
    }
    this.$textInput.val(schedule.getShortDisplayText());
  }
});
const SieveLiveScheduleEditor = View$1.ActionProvider.extend({
  name: "SieveLiveScheduleEditor",
  render: function() {
    this.$el.append(DIV("Use it only if page auto-updates content using JavaScript."), DIV({ "class": "help" }, T("l_schedule_live_desc")));
    return this;
  }
});
const SieveRandomScheduleEditor = View$1.ActionProvider.extend({
  name: "SieveRandomScheduleEditor",
  render: function() {
    const schedule = this.model.get("schedule");
    const params2 = schedule.get("params");
    this.$el.empty().append(DIV(SPAN("Min: "), this.minInput = INPUT({ "class": "xschdlr-input" }), SPAN({ style: "margin-left: 20px;" }, "Max: "), this.maxInput = INPUT({ "class": "xschdlr-input" })), SPAN({ "class": "help" }, this.constraint = SPAN({ style: "color: black; display: none;" }, T("h_schedule_constraint_1"), T(USER.constraint.interval + " seconds. "), BR(), T("h_schedule_constraint_2"), A({ "href": "https://distill.io/pricing", "target": "_blank" }, "Upgrade Account"))), P({ "class": "help" }, T("h_schedule_random")));
    this.$constraint = $(this.constraint);
    (this.$minInput = $(this.minInput)).val(params2.get("min"));
    (this.$maxInput = $(this.maxInput)).val(params2.get("max"));
    $([this.minInput, this.maxInput]).on("change", this.updateModel);
    this.updateValue();
    return this;
  },
  updateModel: function() {
    this.updateValue();
    const schedule = this.model.get("schedule");
    this.model.trigger("change");
    this.model.trigger("change:schedule", schedule);
  },
  updateValue: function() {
    if (getInterval(this.$minInput, "s") > getInterval(this.$maxInput, "s")) {
      var maxSecs = Math.max(this.model.get("client_id") == ModelClient.Clients.webAppId ? USER.constraint.interval : 5, getInterval(this.$minInput, "s") + 1);
    } else {
      var maxSecs = Math.max(this.model.get("client_id") == ModelClient.Clients.webAppId ? USER.constraint.interval : 5, getInterval(this.$maxInput, "s"));
    }
    const minSecs = Math.max(this.model.get("client_id") == ModelClient.Clients.webAppId ? USER.constraint.interval : 5, getInterval(this.$minInput, "s"));
    const schedule = this.model.get("schedule");
    const params2 = schedule.get("params");
    const client_id = this.model.get("client_id");
    const constraint = USER && USER.constraint;
    constraint && constraint.interval || 5;
    params2.set("min", minSecs);
    params2.set("max", maxSecs);
    this.$minInput.val(minSecs);
    this.$maxInput.val(maxSecs);
    if (client_id == ModelClient.Clients.webAppId) {
      this.$constraint.css("display", "block");
    } else {
      this.$constraint.css("display", "none");
    }
  }
});
var SieveScheduleEditor = View$1.ActionProvider.extend({
  name: "SieveScheduleEditor",
  EDITORS: {
    "INTERVAL": SieveIntervalScheduleEditor,
    "LIVE": SieveLiveScheduleEditor,
    "RANDOM": SieveRandomScheduleEditor,
    "CRON": SieveCronScheduleEditor
  },
  focus: function() {
  },
  render: function() {
    let elSelect;
    let elEditor;
    var schedule = this.model.get("schedule");
    const type = schedule.get("type");
    Supports.agents.local;
    var schedule = this.model.get("schedule");
    let editor = new this.EDITORS[type](_.extend({ parent: this }, this.options));
    this.$el.css({
      "display": "flex",
      "flex-direction": "row"
    }).empty().append(DIV(elSelect = SELECT({ style: "margin-right: 20px;" }, OPTION({ value: "INTERVAL" }, "Interval"), OPTION({ value: "RANDOM" }, "Random"), OPTION({ value: "LIVE" }, "Live (beta)"), USER.account_id ? OPTION({ value: "CRON" }, "Crontab *") : OPTION({ value: "CRON", disabled: "" }, "Crontab *"), OPTION({ value: "", disabled: "" }, "*For Enterprise"))), elEditor = DIV({ style: "flex:1" }, editor.render().el));
    $(elSelect).val(type).on("change", () => {
      const type2 = elSelect.value;
      const schedule2 = new Model$2.Schedule({ type: type2 });
      if (type2 == "RANDOM") {
        schedule2.get("params").set({ min: 60, max: 120 });
      }
      if (type2 == "CRON") {
        schedule2.get("params").set({
          expr: "* * * * *",
          tz: new Date().getTimezoneOffset()
        });
      }
      editor.remove();
      this.model.set("schedule", schedule2);
      this.model.trigger("change:schedule", schedule2);
      editor = new this.EDITORS[type2](_.extend({ parent: this }, this.options));
      $(elEditor).empty().append(editor.render().el);
    });
    return this;
  }
});
var TagsEditor = View$1.Base.extend({
  name: "TagsEditor",
  events: {
    "click :checkbox": "event_check"
  },
  event_check: function(e) {
    const el = e.target;
    const id = el.dataset.id;
    const checked = el.checked;
    const tag = App.labels.get(id);
    if (checked) {
      this.tags.push(tag);
    } else {
      this.tags = _.without(this.tags, tag);
    }
    this.model.set("tags", _.pluck(this.tags, "id").join(","));
  },
  postInit: function() {
    this.tags = this.model.getTags(App.labels);
    this.listenTo(App.labels, "sync", this.render);
  },
  render: function() {
    this.$el.empty();
    if (App.labels.length > 0) {
      this.$el.append(_.map(App.labels.models, (tag) => {
        const input = INPUT({
          "type": "checkbox",
          "style": "vertical-align: top; margin: 0 4px;",
          "data-id": tag.id
        });
        const el = LABEL({ style: "font-weight:normal;margin-right:8px; " }, input, tag.get("name"));
        if (this.tags.indexOf(tag) >= 0) {
          input.checked = true;
        }
        return el;
      }));
    } else {
      this.$el.append("No label found.");
    }
    return this;
  }
});
const domo$4 = window.domo;
if (!domo$4) {
  throw new Error("ADD domo");
}
function SieveConstraints(constraint, url2) {
  return DIV({ "class": "xmonitor-limit" }, DIV({ "class": "alert alert-danger" }, SPRINTF("m_monitor_constraint_1", constraint.count, constraint.limit), " ", SPRINTF("m_monitor_constraint_2"), UL(LI(A({ href: Supports.agents.local ? "/ui/inbox.html" : "/watchlist" }, I({ "class": "fa fa-link" }), " ", SPRINTF("a_go_to_watchlist")), ": ", SPRINTF("m_monitor_constraint_3")), LI(A({ href: url2 + "/settings/billing" }, I({ "class": "fa fa-link" }), " ", SPRINTF("a_go_to_billing")), ": ", SPRINTF("m_monitor_constraint_4")))));
}
const $$5 = window.jQuery;
if (!$$5) {
  throw new Error("ADD jQuery");
}
const _$5 = window._;
if (!_$5) {
  throw new Error("ADD _");
}
const domo$3 = window.domo;
if (!domo$3) {
  throw new Error("ADD domo");
}
const async$4 = window.async;
if (!async$4) {
  throw new Error("ADD async");
}
const FeedFinder = View$1.ActionProvider.extend({
  events: {
    "keypress input": "event_load",
    "click .xtbar .btn.xload": "event_loadFeed",
    "click .xtbar .btn.xadd": "event_add"
  },
  event_add: function(event) {
    if (this.feed) {
      const uri = this.url;
      const attrs = this.feed.attributes;
      this.trigger("save", {
        name: attrs.title,
        uri: attrs.link,
        content_type: C.TYPE_FEED,
        config: {
          uri
        }
      });
    } else {
      this.error("Feed could not be loaded or parsed.");
    }
  },
  event_load: function(event) {
    if (event.keyCode == 13) {
      this.loadURL(this.$(".xurl").val());
    }
  },
  event_loadFeed: function(event) {
    const url2 = event.target.getAttribute("href");
    this.$(".xurl").val(url2);
    this.$(".xtbar").empty();
    this.loadURL(url2);
  },
  error: function(msg) {
    this.$(".xmsg").addClass("xerror").text(msg ? T(msg) : "");
  },
  msg: function(msg) {
    this.$(".xmsg").removeClass("xerror").text(msg ? T(msg) : "");
  },
  postInit(options) {
    FeedFinder.__super__.postInit.call(this, options);
    let query = get_store_value(route).query;
    this.url = query.url || "";
    if (this.url) {
      this.loadURL(this.url);
    }
  },
  loadURL(url2) {
    this.msg("");
    if (url2.indexOf(":") < 0) {
      url2 = "http://" + url2;
    }
    if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(url2)) {
      this.error("m_enter_valid_url");
      return;
    }
    this.url = url2;
    if (this.feedView) {
      this.feedView.remove();
    }
    this.$(".xtbar").empty();
    this.msg("l_loading");
    fetchResource$1(url2, (err, response, xhr) => {
      if (err) {
        this.error("e_load_source");
        return;
      }
      let contentType = xhr.getResponseHeader("content-type");
      contentType = contentType.split(";")[0];
      switch (contentType) {
        case "text/html":
        case "application/xhtml+xml":
          this.msg("m_feed_finding");
          var parser = new DOMParser();
          var doc = parser.parseFromString(xhr.responseText, contentType);
          if (!doc) {
            const htmlFramgment = res.match(/<link.*\/>/gim).join("");
            doc = parser.parseFromString(htmlFramgment, contentType);
          }
          findFeeds(doc, (err2, feedLinks) => {
            if (feedLinks.length == 0) {
              this.error("e_feed_in_page_na");
            } else if (feedLinks.length == 1) {
              const newURL = feedLinks[0].href;
              this.$(".xurl").val(newURL);
              this.loadURL(newURL);
            } else {
              this.showFeedSelectionList(feedLinks);
            }
          });
          break;
        case "application/xml":
        case "text/xml":
        case "application/rss+xml":
        case "application/atom+xml":
          this.msg("Parsing feed...");
          parseFeed(xhr.responseText, this.url, this.onParsedFeed);
          break;
        default:
          this.error(SPRINTF("e_unknown_content_type", contentType));
          break;
      }
    });
  },
  onParsedFeed: function(err, result) {
    this.msg("");
    if (err) {
      this.error(T("m_try_later") + " " + T("e_load_source"));
    } else {
      result = JSON.parse(JSON.stringify(result));
      this.feed = new Model$1.Feed(result, { parse: true });
      if (this.feedView) {
        this.feedView.remove();
      }
      this.feedView = new View.Feed({
        el: $$5("#feed")[0],
        model: this.feed,
        parent: this
      }).render();
      this.$el.append(this.feedView.el);
      this.$(".xtbar").empty().append(BUTTON({ "class": "btn btn-primary xadd" }, T("a_select")));
    }
  },
  render: function() {
    this.$el.empty().append(DIV(DIV(INPUT({
      "class": "form-control xurl",
      placeholder: T("m_enter_feed_url"),
      value: this.url
    })), DIV({ "class": "xmsg inline-block", "style": "margin: 5px 0;padding: 0 5px;" }), DIV({ "class": "xtbar " }), DIV({ "class": "xpreview" })));
    return this;
  },
  showFeedSelectionList: function(feedLinks) {
    this.msg("m_feed_multi_selection");
    this.$(".xtbar").empty().append(_$5.map(feedLinks, function(feedLink) {
      return BUTTON({
        "class": "btn btn-primary xload",
        "href": feedLink.href
      }, T("Load feed") + " - " + feedLink.title);
    }));
  }
});
function findFeeds(htmlDoc, callback) {
  if (!htmlDoc) {
    return callback({
      code: "NULL",
      msg: "HTML document is null"
    });
  }
  const result = htmlDoc.querySelectorAll('link[type="application/rss+xml"],link[type="application/atom+xml"]');
  const feedLinks = _$5.map(result, function(link) {
    return {
      title: link.getAttribute("title"),
      href: link.getAttribute("href")
    };
  });
  callback(null, feedLinks);
}
function parseFeed(text2, url2, callback) {
  if (Supports.agents.local) {
    Service$1.Feed.fromString(text2, url2, callback);
  } else {
    $$5.post(`${URL_UTILS}/v1/feed/json`, {
      text: text2
    }, function(data, status, xhr) {
      callback(xhr.status != 200 ? "Error parsing feed" : null, data);
    });
  }
}
function fetchResource$1(url2, callback) {
  if (Supports.agents.local) {
    Service$1.HTTP.get({ url: url2 }, callback);
  } else {
    $$5.get(`${URL_UTILS}/v1/http/get?url=${encodeURIComponent(url2)}`, function(res2, status, xhr) {
      callback(null, xhr.responseText, xhr);
    }).fail(function() {
      callback("Error fetching resource: " + url2);
    });
  }
}
const _$4 = window._;
if (!_$4) {
  throw new Error("ADD _");
}
const Selector = View$1.Base.extend({
  tagName: "div",
  events: {
    "click": "event_click"
  },
  close() {
    this.loader && this.loader.destroy();
  },
  event_click() {
    this.loader && chrome.tabs.update(this.loader.tabId, {
      active: true
    });
  },
  render() {
    this.$el.text(T("h_opening_selector_in_new_tab"));
    setTimeout(this.renderTab, 400);
    return this;
  },
  async renderTab() {
    let loader = await Service$1.createLoader({
      type: "tab",
      info: {
        active: false,
        pinned: false,
        after: "activeTab",
        url: this.model.get("uri") || "https://www.google.com"
      }
    });
    this.loader = loader;
    setTimeout(function() {
      chrome.tabs.update(loader.tabId, { active: true });
    }, 600);
    new Service$1.VisualSelector({
      loader,
      model: this.model.toJSON()
    }, this.selectorCallback);
    this.$el.text(T("h_opened_selector_in_tab"));
  },
  selectorCallback: function(err, modelJSON) {
    modelJSON && (modelJSON = JSON.parse(JSON.stringify(modelJSON)));
    chrome.tabs.getCurrent(function(tab) {
      chrome.tabs.update(tab.id, { active: true });
    });
    if (err) {
      Msg.error(err.msg || err.message || err);
    } else {
      if (!modelJSON) {
        this.trigger("discard");
        Msg.info("m_selection_discarded");
      } else {
        this.model.set(this.model.parse(modelJSON));
        this.trigger("save", null, this.model);
        Msg.info("m_selection_saved");
      }
    }
  }
});
var SelectorModal = View$1.Modal.extend({
  name: "SelectorModal",
  title: T("l_visual_selector"),
  initialize: function(options) {
    const selector = this.selector = new Selector(_$4.pick(options, "model", "parent"));
    _$4.defaults(options, {
      width: 400,
      height: 120,
      view: selector
    });
    this.on("discard", function() {
      options.onDiscard();
    });
    View$1.Modal.prototype.initialize.call(this, options);
    this.listenTo(selector, "discard", options.onDiscard);
    this.listenTo(selector, "save", options.onSave);
  },
  remove: function() {
    SelectorModal.__super__.remove.call(this);
    this.selector.close();
  }
});
var Selector$1 = { Modal: SelectorModal };
var svelteTree = "";
const APIUrl = URL_UTILS + "/json/fetch";
const JqFilterUrl = URL_UTILS + "/json/filter";
function fetchData(api, data) {
  return new Promise((resolve, reject) => {
    fetch(api, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then((data2) => {
      if (!data2.err) {
        resolve(data2.body);
      } else {
        if (data2.status >= 400 && data2.status < 500) {
          resolve({
            status: data2.status,
            body: data2.body || "Retry!! Something went wrong. "
          });
        } else if (data2.code >= 500) {
          resolve({
            status: data2.status,
            body: "Internal server error"
          });
        }
      }
    });
  });
}
function initStores(includedJSON = []) {
  const originalJson = writable("");
  const excludedJson = writable([]);
  const includedJson = writable(includedJSON.map((path) => [path, CheckState.selected]));
  return {
    originalJson,
    excludedJson,
    includedJson,
    previewJson: derived([excludedJson, includedJson], async ([$excludedJson, $includedJson], set) => {
      let exclude = "";
      let includedFilter = $includedJson.map((filter) => filter[0]);
      for (let filter of $excludedJson) {
        if (includedFilter.indexOf(filter) === -1) {
          if (exclude)
            exclude += ", " + filter;
          else
            exclude = filter;
        }
      }
      if (exclude)
        exclude = `. | del(${exclude})`;
      else
        exclude = ".";
      const output = await fetchData(JqFilterUrl, {
        filter: exclude,
        json: get_store_value(originalJson)
      });
      set(output);
    })
  };
}
const types = {
  "ARRAY": "Array",
  "ARRAY_OF_OBJECTS": "ArrayOfObjects",
  "OBJECT": "Object",
  "NUMBER": "number",
  "BOOLEAN": "boolean",
  "STRING": "string",
  "NULL": "Null",
  "PRIMITIVE": "Primitive"
};
function jsonType(json) {
  const type = Object.prototype.toString.call(json).slice(8, -1);
  if (type === "Object") {
    if (typeof json[Symbol.iterator] === "function") {
      return "Iterable";
    }
    return json.constructor.name;
  }
  return type;
}
function isPrimitive(value) {
  return typeof value !== "object";
}
function isArrayOfPrimitives(arr) {
  if (!arr) {
    return false;
  }
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!isPrimitive(arr[i])) {
      return false;
    }
  }
  return true;
}
function isArrayOfObject(array) {
  for (let arr of array) {
    if (jsonType(arr) === types.OBJECT) {
      return true;
    }
  }
  return false;
}
function isPrimitiveType(type) {
  switch (type) {
    case types.NUMBER:
    case types.BOOLEAN:
    case types.STRING:
    case types.PRIMITIVE:
    case types.NULL:
      return true;
    case types.ARRAY:
    case types.ARRAY_OF_OBJECTS:
    case types.OBJECT:
      return false;
  }
}
const ParsedPropertyName = "parsed__properties";
const NumberOfMerges = "number__merges";
const PrimitiveProperties = "primitive__properties";
function isInternalField(name) {
  switch (name) {
    case ParsedPropertyName:
    case NumberOfMerges:
    case PrimitiveProperties:
      return true;
    default:
      return false;
  }
}
let outputTemplate = {};
function merge(template, obj) {
  const primitivePropertiesEncountered = {};
  Object.keys(obj).filter((k) => !isInternalField(k)).forEach((k) => {
    switch (obj[ParsedPropertyName][k]) {
      case types.OBJECT:
        if (!template[k]) {
          template[k] = {};
        }
        merge(template[k], obj[k]);
        break;
      case types.ARRAY_OF_OBJECTS:
        if (!template[k]) {
          template[k] = obj[k];
        } else if (template[k].length === 1 && obj[k].length === 1) {
          merge(template[k][0], obj[k][0]);
        }
        break;
      case types.ARRAY:
        if (!template[k]) {
          template[k] = [];
        }
        template[k].push(obj[k]);
        break;
      case types.PRIMITIVE:
        if (!template[k]) {
          template[k] = [];
          const numberOfMerges = template[NumberOfMerges] || 0;
          for (let i = 0; i < numberOfMerges; i++) {
            template[k].push(null);
          }
        }
        if (Array.isArray(template[k]) && Array.isArray(obj[k])) {
          template[k].push(...obj[k]);
        } else {
          template[k].push(obj[k]);
        }
        if (!template[PrimitiveProperties]) {
          template[PrimitiveProperties] = {};
        }
        template[PrimitiveProperties][k] = true;
        primitivePropertiesEncountered[k] = true;
        break;
    }
  });
  if (!template[ParsedPropertyName]) {
    template[ParsedPropertyName] = obj[ParsedPropertyName];
  } else {
    template[ParsedPropertyName] = __spreadValues(__spreadValues({}, template[ParsedPropertyName]), obj[ParsedPropertyName]);
  }
  template[NumberOfMerges] = template[NumberOfMerges] ? ++template[NumberOfMerges] : 1;
  Object.keys(template[PrimitiveProperties]).filter((key) => !primitivePropertiesEncountered[key]).forEach((key) => {
    if (template[key]) {
      template[key].push(null);
    }
  });
}
function createArrayTemplate(array, template) {
  let mergedObject = {};
  for (let arr of array) {
    const type = jsonType(arr);
    if (type === types.OBJECT) {
      const innerTemplate = createTemplate(arr, {});
      merge(mergedObject, innerTemplate);
    }
  }
  template.push(mergedObject);
  return template;
}
function createTemplate(json, template) {
  let properties = {};
  for (let key in json) {
    if (json.hasOwnProperty(key)) {
      let type = jsonType(json[key]);
      if (type === types.OBJECT) {
        template[key] = createTemplate(json[key], {});
        properties[key] = types.OBJECT;
      } else if (type === types.ARRAY) {
        if (isArrayOfObject(json[key])) {
          template[key] = createArrayTemplate(json[key], []);
          properties[key] = types.ARRAY_OF_OBJECTS;
        } else {
          template[key] = json[key];
          properties[key] = types.ARRAY;
        }
      } else {
        template[key] = json[key];
        properties[key] = types.PRIMITIVE;
      }
    }
  }
  template[ParsedPropertyName] = properties;
  return template;
}
function performJSONParsing(json) {
  const type = jsonType(json);
  if (type === types.ARRAY) {
    if (isArrayOfObject(json)) {
      outputTemplate = createArrayTemplate(json, []);
    } else if (isArrayOfPrimitives(json)) {
      outputTemplate = json;
    } else {
      outputTemplate = "Array";
    }
  } else if (type === types.OBJECT) {
    outputTemplate = createTemplate(json, {});
  } else {
    return {
      msg: "Invalid Json"
    };
  }
  return outputTemplate;
}
function sanitize(parsedJSON, fieldName, value) {
  if (!parsedJSON) {
    return parsedJSON;
  } else if (Array.isArray(parsedJSON)) {
    for (let i = 0; i < parsedJSON.length; i++) {
      sanitize(parsedJSON[i], fieldName, value);
    }
  } else if (typeof parsedJSON === "object") {
    if (Object.prototype.hasOwnProperty.call(parsedJSON, fieldName)) {
      if (value) {
        parsedJSON[fieldName] = value;
      } else {
        delete parsedJSON[fieldName];
      }
    }
    Object.keys(parsedJSON).filter((k) => parsedJSON[k]).filter((k) => typeof parsedJSON[k] === "object").forEach((k) => sanitize(parsedJSON[k], fieldName, value));
  }
}
function jsonParser(json) {
  const parsedJSON = performJSONParsing(json);
  sanitize(parsedJSON, NumberOfMerges);
  sanitize(parsedJSON, PrimitiveProperties);
  return parsedJSON;
}
function prepareSchema(parsedJSON) {
  const schema = prepareSchema1(parsedJSON);
  return schema;
}
function prepareSchema1(parsedJSON) {
  const type = jsonType(parsedJSON);
  if (type === types.ARRAY) {
    if (isArrayOfObject(parsedJSON)) {
      return handleArrayOfObjects(parsedJSON);
    } else {
      return handleArrayOfPrimitives(parsedJSON);
    }
  } else if (type === types.OBJECT) {
    return handleObject(parsedJSON);
  } else {
    return parsedJSON;
  }
}
function handleObject(parsedJSON) {
  const deepCopy = JSON.parse(JSON.stringify(parsedJSON));
  const properties = parsedJSON[ParsedPropertyName];
  Object.keys(parsedJSON).filter((k) => k !== ParsedPropertyName).forEach((k) => {
    switch (properties[k]) {
      case types.PRIMITIVE:
        parsedJSON[k] = handlePrimitive(parsedJSON[k]);
        break;
      case types.ARRAY:
        parsedJSON[k] = handleArrayOfPrimitives(parsedJSON[k]);
        break;
      case types.ARRAY_OF_OBJECTS:
        parsedJSON[k] = handleArrayOfObjects(parsedJSON[k]);
        break;
      case types.OBJECT:
        parsedJSON[k] = handleObject(parsedJSON[k]);
        break;
    }
  });
  return {
    schema: parsedJSON,
    type: types.OBJECT,
    value: deepCopy
  };
}
function handlePrimitive(value) {
  return {
    value,
    type: Array.isArray(value) ? typeof findFirstNotNullElemFromArray(value) : typeof value
  };
}
function handleArrayOfPrimitives(value) {
  return {
    value,
    type: types.ARRAY
  };
}
function handleArrayOfObjects(value) {
  return {
    value,
    type: types.ARRAY_OF_OBJECTS,
    schema: handleObject(value[0])
  };
}
function findFirstNotNullElemFromArray(arr) {
  if (!arr) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      return arr[i];
    }
  }
  return null;
}
function create_label_slot(ctx) {
  let span;
  let t_value = ctx[1].label + "";
  let t;
  let span_title_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "label");
      attr(span, "title", span_title_value = ctx[1].label);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[1].label + ""))
        set_data(t, t_value);
      if (dirty & 2 && span_title_value !== (span_title_value = ctx2[1].label)) {
        attr(span, "title", span_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_else_block$e(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "fill", "none");
      attr(path0, "d", "M0 0h24v24H0z");
      attr(path1, "fill", "#bf3126");
      attr(path1, "d", "M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_5$3(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "fill", "none");
      attr(path0, "d", "M0 0h24v24H0z");
      attr(path1, "fill", "#bf3126");
      attr(path1, "d", "M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_4$4(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "fill", "none");
      attr(path0, "d", "M0 0h24v24H0z");
      attr(path1, "fill", "#0cc8d2");
      attr(path1, "d", "M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_3$4(ctx) {
  let svg;
  let g;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "fill", "none");
      attr(path0, "d", "M0 0h24v24H0z");
      attr(path1, "fill", "#0cc8d2");
      attr(path1, "d", "M9 3v2H6v14h3v2H4V3h5zm6 0h5v18h-5v-2h3V5h-3V3z");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_2$7(ctx) {
  let svg;
  let defs;
  let style;
  let t;
  let path;
  let circle;
  let rect;
  return {
    c() {
      svg = svg_element("svg");
      defs = svg_element("defs");
      style = svg_element("style");
      t = text(".cls-1{fill:none}");
      path = svg_element("path");
      circle = svg_element("circle");
      rect = svg_element("rect");
      attr(path, "fill", "#ec8f0c");
      attr(path, "d", "M23,23a7,7,0,1,1,7-7A7.0078,7.0078,0,0,1,23,23Zm0-12a5,5,0,1,0,5,5A5.0055,5.0055,0,0,0,23,11Z");
      attr(circle, "fill", "#ec8f0c");
      attr(circle, "cx", "9");
      attr(circle, "cy", "16");
      attr(circle, "r", "7");
      attr(rect, "id", "_Transparent_Rectangle_");
      attr(rect, "data-name", "<Transparent Rectangle>");
      attr(rect, "class", "cls-1");
      attr(rect, "width", "32");
      attr(rect, "height", "32");
      attr(svg, "viewBox", "0 0 32 32");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "120%");
      attr(svg, "height", "120%");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, defs);
      append(defs, style);
      append(style, t);
      append(svg, path);
      append(svg, circle);
      append(svg, rect);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block_1$c(ctx) {
  let svg;
  let g1;
  let g0;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      g1 = svg_element("g");
      g0 = svg_element("g");
      path = svg_element("path");
      attr(path, "fill", "#41b310");
      attr(path, "d", "M17.2881302,2.00089344 L17.3894,2.01308 C17.7964,2.09007 18.064,2.48242 17.987,2.88941 L17.987,2.88941 L17.0214,7.99404 L21.2496,7.99207 C21.6639,7.99187 21.9998,8.3275 21.9999999,8.74172 C21.9999999,9.15593 21.6646,9.49187 21.2503,9.49207 L21.2503,9.49207 L16.7376,9.49417 L15.7919,14.4939 L20.2496,14.4918 C20.6639,14.4916 20.9998,14.8273 20.9999999,15.2415 C21.0002,15.6557 20.6646,15.9916 20.2503,15.9918 L20.2503,15.9918 L15.5081,15.994 L14.4869,21.3924 C14.41,21.7994 14.0176,22.0669 13.6106,21.9899 C13.2036,21.9129 12.9361,21.5206 13.0131,21.1136 L13.0131,21.1136 L13.9814,15.9948 L8.50742,15.9973 L7.48688,21.3924 C7.4099,21.7994 7.01755,22.0669 6.61055,21.9899 C6.20356,21.9129 5.93603,21.5206 6.01302,21.1136 L6.01302,21.1136 L6.98068,15.998 L2.75035,16 C2.33614,16.0002 1.99999992,15.6646 1.99999992,15.2503 C1.99999992,14.8361 2.33544,14.5002 2.74965,14.5 L2.74965,14.5 L7.26445,14.4979 L8.2102,9.49816 L3.75035,9.50024 C3.33614,9.50044 3.00019,9.16481 2.99999992,8.75059 C2.99981,8.33638 3.33544,8.00044 3.74965,8.00024 L3.74965,8.00024 L8.49396,7.99803 L9.51305,2.61062 C9.59003,2.20362 9.98238,1.9361 10.3894,2.01308 C10.7964,2.09007 11.0639,2.48242 10.9869,2.88941 L10.9869,2.88941 L10.0207,7.99731 L15.4946,7.99476 L16.5131,2.61062 C16.5901,2.20362 16.9824,1.9361 17.3894,2.01308 Z M15.2109,9.49489 L9.73693,9.49745 L8.79118,14.4972 L14.2651,14.4946 L15.2109,9.49489 Z");
      attr(g0, "id", "ic_fluent_number_symbol_24_regular");
      attr(g0, "fill", "#212121");
      attr(g0, "fill-rule", "nonzero");
      attr(g1, "stroke", "none");
      attr(g1, "stroke-width", "1");
      attr(g1, "fill", "none");
      attr(g1, "fill-rule", "evenodd");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g1);
      append(g1, g0);
      append(g0, path);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block$i(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "fill", "#183a90");
      attr(path, "d", "M25.198,6.273c-0.014,0.23-0.045,0.389-0.087,0.467c-0.045,0.084-0.176,0.145-0.392,0.183 c-0.469,0.104-0.781-0.074-0.935-0.533C23.239,4.7,22.59,3.578,21.84,3.016c-1.041-0.773-2.862-1.161-5.469-1.161 c-1.054,0-1.633,0.115-1.734,0.343c-0.036,0.075-0.057,0.184-0.057,0.324v18.999c0,0.812,0.188,1.383,0.571,1.709 c0.382,0.32,1.069,0.731,2.201,0.999c0.483,0.103,0.97,0.2,1.034,0.239c0.46,0,0.504,1.057-0.376,1.057 c-0.025,0.016-10.375-0.008-10.375-0.008s-0.723-0.439-0.074-1.023c0.271-0.121,0.767-0.343,0.767-0.343s1.83-0.614,2.211-1.009 c0.434-0.445,0.648-1.164,0.648-2.154V2.521c0-0.369-0.229-0.585-0.687-0.647c-0.049-0.015-0.425-0.02-1.122-0.02 c-2.415,0-4.191,0.418-5.338,1.259C3.176,3.735,2.411,4.877,1.737,6.545C1.52,7.065,1.22,7.234,0.84,7.058 C0.408,6.957,0.251,6.719,0.363,6.353c0.445-1.374,0.668-3.31,0.668-5.814c0-0.292,0.387-0.586,1.163-0.533L23.56,0.064 c0.709-0.104,1.096,0.012,1.16,0.343C25.076,2.096,25.234,4.052,25.198,6.273z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "70%");
      attr(svg, "height", "90%");
      attr(svg, "viewBox", "0 0 25 25");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_icon_slot(ctx) {
  let span;
  let div;
  let div_title_value;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].type === types.STRING)
      return create_if_block$i;
    if (ctx2[1].type === types.NUMBER)
      return create_if_block_1$c;
    if (ctx2[1].type === types.BOOLEAN)
      return create_if_block_2$7;
    if (ctx2[1].type === types.ARRAY)
      return create_if_block_3$4;
    if (ctx2[1].type === types.ARRAY_OF_OBJECTS)
      return create_if_block_4$4;
    if (ctx2[1].type === types.OBJECT)
      return create_if_block_5$3;
    return create_else_block$e;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      span = element("span");
      div = element("div");
      if_block.c();
      attr(div, "class", "tv-svg");
      attr(div, "title", div_title_value = ctx[1].type);
      attr(span, "slot", "icon");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, div);
      if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
      if (dirty & 2 && div_title_value !== (div_title_value = ctx2[1].type)) {
        attr(div, "title", div_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if_block.d();
    }
  };
}
function create_meta_slot(ctx) {
  let span;
  let t_value = ctx[1].getPrettyValue() + "";
  let t;
  let span_title_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "slot", "meta");
      set_style(span, "white-space", "pre");
      attr(span, "title", span_title_value = ctx[1].getValue());
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[1].getPrettyValue() + ""))
        set_data(t, t_value);
      if (dirty & 2 && span_title_value !== (span_title_value = ctx2[1].getValue())) {
        attr(span, "title", span_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$A(ctx) {
  let div;
  let treeview;
  let current;
  treeview = new TreeView({
    props: {
      root: ctx[1],
      class: "tree-view bg-white bb bl br border-bootstrap-border overflow-auto",
      $$slots: {
        meta: [
          create_meta_slot,
          ({ node }) => ({ 1: node }),
          ({ node }) => node ? 2 : 0
        ],
        icon: [
          create_icon_slot,
          ({ node }) => ({ 1: node }),
          ({ node }) => node ? 2 : 0
        ],
        label: [
          create_label_slot,
          ({ node }) => ({ 1: node }),
          ({ node }) => node ? 2 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  treeview.$on("check", ctx[7]);
  return {
    c() {
      div = element("div");
      create_component(treeview.$$.fragment);
      set_style(div, "--max-depth", 2 * ctx[0] + "vw");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(treeview, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const treeview_changes = {};
      if (dirty & 2)
        treeview_changes.root = ctx2[1];
      if (dirty & 32770) {
        treeview_changes.$$scope = { dirty, ctx: ctx2 };
      }
      treeview.$set(treeview_changes);
      if (!current || dirty & 1) {
        set_style(div, "--max-depth", 2 * ctx2[0] + "vw");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(treeview.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(treeview.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(treeview);
    }
  };
}
const MaxAllowableDepthForWidth = 12;
const MinAllowableDepthForWidth = 8;
function instance$A($$self, $$props, $$invalidate) {
  let $maxDepth;
  let { obj } = $$props;
  let { includedJqFilter = [] } = $$props;
  let { stores = {} } = $$props;
  let maxDepth = writable(0);
  component_subscribe($$self, maxDepth, (value) => $$invalidate(0, $maxDepth = value));
  class Node extends BaseNode {
    constructor({ id, label, parent = null, type = null, key = null, jqSelector = ".", value = null, checkable = true, disabled = false }) {
      super(id, label, parent);
      this.checkable = checkable;
      this.selectable = false;
      this.disabled = disabled;
      this._expanded = true;
      this.type = type;
      this.key = key;
      this.jqSelector = jqSelector;
      this.value = value;
    }
    isSelectable() {
      return false;
    }
    getJqSelector() {
      return this.jqSelector;
    }
    getExcludedJqSelectors() {
      let result = [];
      for (let i = 0; i < this.getChildCount(); i++) {
        if (this.children[i].isCheckable()) {
          if (this.children[i].getCheckState() === CheckState.none) {
            result.push(this.children[i].getJqSelector());
          }
          result.push(...this.children[i].getExcludedJqSelectors());
        }
      }
      return result;
    }
    getIncludedJqSelectors() {
      let result = [];
      for (let i = 0; i < this.getChildCount(); i++) {
        if (this.children[i].isCheckable()) {
          let state = this.children[i].getCheckState();
          if (state !== CheckState.none) {
            result.push([this.children[i].getJqSelector(), state]);
          }
          result.push(...this.children[i].getIncludedJqSelectors());
        }
      }
      return result;
    }
    changeInitialJqSelector() {
      for (let i = 0; i < this.getChildCount(); i++) {
        let child = this.children[i];
        let selector = child.getJqSelector();
        get_store_value(stores.includedJson).filter((filter) => {
          if (selector === filter[0]) {
            child.checkAll(CheckState.selected);
          }
        });
        child.changeInitialJqSelector();
      }
    }
    firstValue(arrayOrValue) {
      if (!arrayOrValue) {
        return "";
      }
      if (Array.isArray(arrayOrValue) && arrayOrValue && arrayOrValue.length > 0) {
        for (let i = 0; i < arrayOrValue.length; i++) {
          if (arrayOrValue[i]) {
            return arrayOrValue[i];
          }
        }
        return arrayOrValue[0];
      }
      return arrayOrValue;
    }
    getValue() {
      switch (this.type) {
        case types.STRING:
          return this.value;
        default:
          return this.getPrettyValue();
      }
    }
    getPrettyValue() {
      switch (this.type) {
        case types.STRING:
          if (this.firstValue(this.value).length > 25) {
            return this.firstValue(this.value).replace(/\s/g, " ").substring(0, 25) + `...`;
          } else {
            return this.firstValue(this.value);
          }
        case types.NUMBER:
          return this.firstValue(this.value);
        case types.BOOLEAN:
          return this.value;
        case types.ARRAY:
          return `Array with ${this.value.length} values(s)`;
        case types.ARRAY_OF_OBJECTS:
          return "Array containing Objects";
        case types.OBJECT:
          return "";
        default:
          return this.value;
      }
    }
  }
  class ArrOfObjectNode extends Node {
    constructor({ id, label, parent = null, type = null, key = null, jqSelector = ".", value = null, checkable = true, previewJSONStore = null }) {
      super({
        id,
        label,
        parent,
        type,
        key,
        jqSelector,
        value,
        checkable
      });
      if (this.type === types.ARRAY_OF_OBJECTS) {
        this.previewJSONStore = previewJSONStore;
        this.unsubscribe = this.previewJSONStore.subscribe((val) => {
          if (this.unsubscribe) {
            this.updatePreview(val);
          }
        });
      }
    }
    getPreviewNode() {
      if (this.children && this.children.length > 0) {
        const lastChild = this.children[this.children.length - 1];
        if (lastChild && lastChild.label === "Preview") {
          return lastChild;
        }
      }
      return null;
    }
    async updatePreview(newContent) {
      if (this.type !== types.ARRAY_OF_OBJECTS) {
        return;
      }
      if (!this.children || this.children.length === 0) {
        return;
      }
      const itemsNode = this.children[0];
      const children = await itemsNode.getChildren();
      const previewValues = {};
      let valueLength = 0;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isPrimitiveType(child.type) && child.checkState === CheckState.selected) {
          previewValues[child.key] = child.value;
          valueLength = child.value.length;
        }
      }
      const preview = [];
      for (let i = 0; i < valueLength; i++) {
        const previewElem = {};
        Object.keys(previewValues).forEach((k) => {
          previewElem[k] = previewValues[k][i];
        });
        preview.push(previewElem);
      }
      if (preview) {
        this.getPreviewNode().setChildren(jsonToNodeForPreview(preview, this.getPreviewNode()));
        this.getPreviewNode().setDisabled(false);
      } else {
        this.getPreviewNode().setChildren([]);
        this.getPreviewNode().setDisabled(true);
      }
      this.getPreviewNode().notify();
      this.notify();
    }
  }
  let count = 0;
  let jqExtension = "";
  let node;
  function createNode(obj2) {
    if (types.ARRAY === jsonType(obj2)) {
      jqExtension = ".";
    }
    if (obj2 && types.ARRAY_OF_OBJECTS === obj2.type) {
      jqExtension = ".";
    }
    sanitize(obj2, ParsedPropertyName);
    $$invalidate(1, node = jsonToNode(obj2, "Properties", null, jqExtension, 0));
    if ($maxDepth > MaxAllowableDepthForWidth) {
      maxDepth.set(MaxAllowableDepthForWidth);
    } else if ($maxDepth < MinAllowableDepthForWidth) {
      maxDepth.set(MinAllowableDepthForWidth);
    }
    let jqSelectors = node.getExcludedJqSelectors();
    stores.excludedJson.set(jqSelectors);
    node.changeInitialJqSelector();
    const jq = node.getIncludedJqSelectors();
    stores.includedJson.update((val) => jq);
  }
  function jsonToNode(json, label, parent, jq, depth) {
    let type = json.type;
    let value;
    try {
      value = JSON.parse(JSON.stringify(json.value));
    } catch (e) {
      console.error("error while JSON conversion for creating the value", json.value, e);
    }
    let newNode;
    if ($maxDepth < depth) {
      maxDepth.set(depth);
    }
    delete json.value;
    switch (type) {
      case types.ARRAY_OF_OBJECTS:
        newNode = new ArrOfObjectNode({
          id: count++,
          label: `${label}`,
          parent,
          type,
          key: label,
          jqSelector: jq,
          value,
          previewJSONStore: stores.previewJson
        });
        const schema = json.schema;
        newNode.children = [];
        newNode.children.push(jsonToNode(schema, "Items", newNode, jq + "[]?", depth + 1));
        newNode.children.push(new Node({
          id: count++,
          label: "Preview",
          parent: newNode,
          checkable: false,
          value: "",
          disabled: true,
          expandable: false
        }));
        break;
      case types.OBJECT:
        newNode = new Node({
          id: count++,
          label: `${label}`,
          parent,
          type,
          key: label,
          jqSelector: jq,
          value
        });
        newNode.children = Object.keys(json.schema).map((key) => jsonToNode(json.schema[key], key, newNode, jq + `."${key}"`, depth + 1));
        break;
      case types.NUMBER:
      case types.BOOLEAN:
      case types.STRING:
      case types.PRIMITIVE:
      case types.ARRAY:
      default:
        newNode = new Node({
          id: count++,
          label: `${label}`,
          parent,
          type,
          key: label,
          jqSelector: jq,
          value
        });
        break;
    }
    return newNode;
  }
  function onCheck(detail) {
    let { checked, node: node2 } = detail;
    let jqSelectors = node2.getRoot().getIncludedJqSelectors();
    stores.includedJson.update(function(val) {
      return jqSelectors;
    });
  }
  function jsonToNodeForPreview(obj2, parent) {
    const newNodes = [];
    for (const key in obj2) {
      let newNode = new Node({
        id: count++,
        label: key,
        parent,
        value: isPrimitive(obj2[key]) || isArrayOfPrimitives(obj2[key]) ? obj2[key] : "",
        checkable: false,
        type: typeof obj2[key]
      });
      if (!isPrimitive(obj2[key]) && !Array.isArray(obj2[key])) {
        newNode.children = jsonToNodeForPreview(obj2[key], newNode);
      }
      newNodes.push(newNode);
    }
    return newNodes;
  }
  const check_handler = (e) => onCheck(e.detail);
  $$self.$$set = ($$props2) => {
    if ("obj" in $$props2)
      $$invalidate(4, obj = $$props2.obj);
    if ("includedJqFilter" in $$props2)
      $$invalidate(5, includedJqFilter = $$props2.includedJqFilter);
    if ("stores" in $$props2)
      $$invalidate(6, stores = $$props2.stores);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      createNode(obj);
    }
  };
  return [
    $maxDepth,
    node,
    maxDepth,
    onCheck,
    obj,
    includedJqFilter,
    stores,
    check_handler
  ];
}
class Tree extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$A, create_fragment$A, safe_not_equal, { obj: 4, includedJqFilter: 5, stores: 6 });
  }
}
function create_fragment$z(ctx) {
  let div;
  let ul;
  let li0;
  let a0;
  let t1;
  let li1;
  let a1;
  let t3;
  let pre;
  let t4_value = JSON.stringify(ctx[0] == "distilled" ? ctx[3] : ctx[1], null, 2) + "";
  let t4;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      a0.textContent = "Distilled";
      t1 = space();
      li1 = element("li");
      a1 = element("a");
      a1.textContent = "Response";
      t3 = space();
      pre = element("pre");
      t4 = text(t4_value);
      attr(a0, "href", "#distilled_tab");
      attr(a0, "data-toggle", "tab");
      toggle_class(li0, "active", ctx[0] === "distilled");
      attr(a1, "href", "#original_tab");
      attr(a1, "data-toggle", "tab");
      toggle_class(li1, "active", ctx[0] === "response");
      attr(ul, "class", "nav nav-tabs ");
      attr(pre, "class", "max-h-[600px] bg-white overflow-auto");
      set_style(pre, "border-top", "none");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, ul);
      append(ul, li0);
      append(li0, a0);
      append(ul, t1);
      append(ul, li1);
      append(li1, a1);
      append(div, t3);
      append(div, pre);
      append(pre, t4);
      if (!mounted) {
        dispose = [
          listen(a0, "click", ctx[6]),
          listen(a1, "click", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        toggle_class(li0, "active", ctx2[0] === "distilled");
      }
      if (dirty & 1) {
        toggle_class(li1, "active", ctx2[0] === "response");
      }
      if (dirty & 11 && t4_value !== (t4_value = JSON.stringify(ctx2[0] == "distilled" ? ctx2[3] : ctx2[1], null, 2) + ""))
        set_data(t4, t4_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$z($$self, $$props, $$invalidate) {
  let $previewJsonStore, $$unsubscribe_previewJsonStore = noop, $$subscribe_previewJsonStore = () => ($$unsubscribe_previewJsonStore(), $$unsubscribe_previewJsonStore = subscribe(previewJsonStore, ($$value) => $$invalidate(5, $previewJsonStore = $$value)), previewJsonStore);
  $$self.$$.on_destroy.push(() => $$unsubscribe_previewJsonStore());
  let { output = {} } = $$props;
  let { previewJsonStore } = $$props;
  $$subscribe_previewJsonStore();
  let distilledJSON = {};
  let { preview = "distilled" } = $$props;
  function onClickTabPreview(newValue) {
    $$invalidate(0, preview = newValue);
  }
  const click_handler2 = () => onClickTabPreview("distilled");
  const click_handler_1 = () => onClickTabPreview("response");
  $$self.$$set = ($$props2) => {
    if ("output" in $$props2)
      $$invalidate(1, output = $$props2.output);
    if ("previewJsonStore" in $$props2)
      $$subscribe_previewJsonStore($$invalidate(2, previewJsonStore = $$props2.previewJsonStore));
    if ("preview" in $$props2)
      $$invalidate(0, preview = $$props2.preview);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 36) {
      $$invalidate(3, distilledJSON = (previewJsonStore ? $previewJsonStore : {}) || {});
    }
  };
  return [
    preview,
    output,
    previewJsonStore,
    distilledJSON,
    onClickTabPreview,
    $previewJsonStore,
    click_handler2,
    click_handler_1
  ];
}
class DistilledJSONText extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$z, create_fragment$z, safe_not_equal, {
      output: 1,
      previewJsonStore: 2,
      preview: 0
    });
  }
}
function create_fragment$y(ctx) {
  let div;
  let input0;
  let t0;
  let input1;
  let t1;
  let button;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      attr(input0, "type", "text");
      attr(input0, "class", "form-control input-sm mr-2");
      attr(input0, "placeholder", "Key");
      attr(input1, "type", "text");
      attr(input1, "class", "form-control input-sm mr-2");
      attr(input1, "placeholder", "Value");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M6 18L18 6M6 6l12 12");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-6 w-6 col-center-block");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
      attr(button, "class", "btn btn-default btn-sm flex items-center");
      attr(button, "title", "Delete");
      attr(div, "class", "flex flex-row item-center mb-2");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input0);
      set_input_value(input0, ctx[0]);
      append(div, t0);
      append(div, input1);
      set_input_value(input1, ctx[1]);
      append(div, t1);
      append(div, button);
      append(button, svg);
      append(svg, path);
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[4]),
          listen(input0, "input", ctx[5]),
          listen(input1, "input", ctx[6]),
          listen(input1, "input", ctx[7]),
          listen(svg, "click", function() {
            if (is_function(ctx[2]))
              ctx[2].apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 1 && input0.value !== ctx[0]) {
        set_input_value(input0, ctx[0]);
      }
      if (dirty & 2 && input1.value !== ctx[1]) {
        set_input_value(input1, ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$y($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let { key } = $$props;
  let { value } = $$props;
  let { onRemove } = $$props;
  function input0_input_handler() {
    key = this.value;
    $$invalidate(0, key);
  }
  const input_handler = (e) => dispatch("keyUpdate", $$invalidate(0, key = e.target.value));
  function input1_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  const input_handler_1 = (e) => dispatch("valueUpdate", $$invalidate(1, value = e.target.value));
  $$self.$$set = ($$props2) => {
    if ("key" in $$props2)
      $$invalidate(0, key = $$props2.key);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
    if ("onRemove" in $$props2)
      $$invalidate(2, onRemove = $$props2.onRemove);
  };
  return [
    key,
    value,
    onRemove,
    dispatch,
    input0_input_handler,
    input_handler,
    input1_input_handler,
    input_handler_1
  ];
}
class KeyValueTable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$y, create_fragment$y, safe_not_equal, { key: 0, value: 1, onRemove: 2 });
  }
}
function get_each_context$a(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  child_ctx[47] = list;
  child_ctx[48] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[49] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  child_ctx[52] = list;
  child_ctx[48] = i;
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[46] = list[i];
  child_ctx[48] = i;
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[54] = list[i];
  child_ctx[48] = i;
  return child_ctx;
}
function create_each_block_4(ctx) {
  let li;
  let a;
  let t0_value = ctx[54] + "";
  let t0;
  let t1;
  let mounted;
  let dispose;
  function click_handler2() {
    return ctx[25](ctx[54]);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      attr(a, "href", "javascript:void(0)");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t0);
      append(li, t1);
      if (!mounted) {
        dispose = listen(li, "click", click_handler2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block_3(ctx) {
  let keyvaluetable;
  let current;
  function func() {
    return ctx[32](ctx[48]);
  }
  function keyUpdate_handler(...args) {
    return ctx[33](ctx[48], ...args);
  }
  function valueUpdate_handler(...args) {
    return ctx[34](ctx[48], ...args);
  }
  keyvaluetable = new KeyValueTable({
    props: {
      key: ctx[46][0],
      value: ctx[46][1],
      onRemove: func
    }
  });
  keyvaluetable.$on("keyUpdate", keyUpdate_handler);
  keyvaluetable.$on("valueUpdate", valueUpdate_handler);
  return {
    c() {
      create_component(keyvaluetable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(keyvaluetable, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const keyvaluetable_changes = {};
      if (dirty[0] & 512)
        keyvaluetable_changes.key = ctx[46][0];
      if (dirty[0] & 512)
        keyvaluetable_changes.value = ctx[46][1];
      keyvaluetable.$set(keyvaluetable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(keyvaluetable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(keyvaluetable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(keyvaluetable, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let keyvaluetable;
  let updating_key;
  let updating_value;
  let current;
  function func_1() {
    return ctx[35](ctx[48]);
  }
  function keyvaluetable_key_binding(value) {
    ctx[36](value, ctx[46]);
  }
  function keyvaluetable_value_binding(value) {
    ctx[37](value, ctx[46]);
  }
  let keyvaluetable_props = { onRemove: func_1 };
  if (ctx[46][0] !== void 0) {
    keyvaluetable_props.key = ctx[46][0];
  }
  if (ctx[46][1] !== void 0) {
    keyvaluetable_props.value = ctx[46][1];
  }
  keyvaluetable = new KeyValueTable({ props: keyvaluetable_props });
  binding_callbacks.push(() => bind(keyvaluetable, "key", keyvaluetable_key_binding));
  binding_callbacks.push(() => bind(keyvaluetable, "value", keyvaluetable_value_binding));
  return {
    c() {
      create_component(keyvaluetable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(keyvaluetable, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const keyvaluetable_changes = {};
      if (!updating_key && dirty[0] & 32) {
        updating_key = true;
        keyvaluetable_changes.key = ctx[46][0];
        add_flush_callback(() => updating_key = false);
      }
      if (!updating_value && dirty[0] & 32) {
        updating_value = true;
        keyvaluetable_changes.value = ctx[46][1];
        add_flush_callback(() => updating_value = false);
      }
      keyvaluetable.$set(keyvaluetable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(keyvaluetable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(keyvaluetable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(keyvaluetable, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let option;
  let t_value = ctx[49] + "";
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      option.__value = option_value_value = ctx[49];
      option.value = option.__value;
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_if_block_1$b(ctx) {
  let div;
  let textarea;
  let t;
  let mounted;
  let dispose;
  let if_block = ctx[8] && create_if_block_2$6();
  return {
    c() {
      div = element("div");
      textarea = element("textarea");
      t = space();
      if (if_block)
        if_block.c();
      attr(textarea, "placeholder", "JSON");
      attr(textarea, "rows", "6");
      attr(textarea, "name", "bodyjson");
      attr(textarea, "class", "form-control");
      textarea.value = ctx[7];
      attr(div, "class", "flex flex-col");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, textarea);
      append(div, t);
      if (if_block)
        if_block.m(div, null);
      if (!mounted) {
        dispose = [
          listen(textarea, "input", ctx[42]),
          listen(textarea, "blur", ctx[14])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 128) {
        textarea.value = ctx2[7];
      }
      if (ctx2[8]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block_2$6();
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$h(ctx) {
  let t0;
  let button;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[4].data;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      button = element("button");
      button.textContent = "Add Field";
      attr(button, "class", "btn btn-default btn-xs");
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, t0, anchor);
      insert(target, button, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[16]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 131088) {
        each_value = ctx2[4].data;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$a(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$a(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(t0.parentNode, t0);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_2$6(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "Invalid Json!!";
      attr(div, "class", "alert alert-danger");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block$a(ctx) {
  let keyvaluetable;
  let updating_key;
  let updating_value;
  let current;
  function func_2() {
    return ctx[39](ctx[48]);
  }
  function keyvaluetable_key_binding_1(value) {
    ctx[40](value, ctx[46]);
  }
  function keyvaluetable_value_binding_1(value) {
    ctx[41](value, ctx[46]);
  }
  let keyvaluetable_props = { onRemove: func_2 };
  if (ctx[46][0] !== void 0) {
    keyvaluetable_props.key = ctx[46][0];
  }
  if (ctx[46][1] !== void 0) {
    keyvaluetable_props.value = ctx[46][1];
  }
  keyvaluetable = new KeyValueTable({ props: keyvaluetable_props });
  binding_callbacks.push(() => bind(keyvaluetable, "key", keyvaluetable_key_binding_1));
  binding_callbacks.push(() => bind(keyvaluetable, "value", keyvaluetable_value_binding_1));
  return {
    c() {
      create_component(keyvaluetable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(keyvaluetable, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const keyvaluetable_changes = {};
      if (!updating_key && dirty[0] & 16) {
        updating_key = true;
        keyvaluetable_changes.key = ctx[46][0];
        add_flush_callback(() => updating_key = false);
      }
      if (!updating_value && dirty[0] & 16) {
        updating_value = true;
        keyvaluetable_changes.value = ctx[46][1];
        add_flush_callback(() => updating_value = false);
      }
      keyvaluetable.$set(keyvaluetable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(keyvaluetable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(keyvaluetable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(keyvaluetable, detaching);
    }
  };
}
function create_fragment$x(ctx) {
  let div1;
  let div0;
  let button0;
  let span0;
  let t0_value = ctx[0].method + "";
  let t0;
  let t1;
  let span1;
  let t2;
  let ul0;
  let t3;
  let input;
  let input_placeholder_value;
  let t4;
  let span2;
  let button1;
  let t6;
  let ul1;
  let li0;
  let a0;
  let t8;
  let li1;
  let a1;
  let t10;
  let li2;
  let a2;
  let t12;
  let div6;
  let div2;
  let t13;
  let button2;
  let t15;
  let div3;
  let t16;
  let button3;
  let t18;
  let div5;
  let div4;
  let label_1;
  let t20;
  let select;
  let select_value_value;
  let t21;
  let hr;
  let t22;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  let each_value_4 = ctx[12];
  let each_blocks_3 = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks_3[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  let each_value_3 = ctx[9];
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  const out = (i) => transition_out(each_blocks_2[i], 1, 1, () => {
    each_blocks_2[i] = null;
  });
  let each_value_2 = ctx[5];
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const out_1 = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  let each_value_1 = ctx[11];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const if_block_creators = [create_if_block$h, create_if_block_1$b];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[4].type === "urlencoded")
      return 0;
    if (ctx2[4].type === "json")
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      button0 = element("button");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      ul0 = element("ul");
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].c();
      }
      t3 = space();
      input = element("input");
      t4 = space();
      span2 = element("span");
      button1 = element("button");
      button1.textContent = "Send";
      t6 = space();
      ul1 = element("ul");
      li0 = element("li");
      a0 = element("a");
      a0.textContent = "Params";
      t8 = space();
      li1 = element("li");
      a1 = element("a");
      a1.textContent = "Header";
      t10 = space();
      li2 = element("li");
      a2 = element("a");
      a2.textContent = "Body";
      t12 = space();
      div6 = element("div");
      div2 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t13 = space();
      button2 = element("button");
      button2.textContent = "Add Query Param";
      t15 = space();
      div3 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t16 = space();
      button3 = element("button");
      button3.textContent = "Add Header";
      t18 = space();
      div5 = element("div");
      div4 = element("div");
      label_1 = element("label");
      label_1.textContent = "Content Type";
      t20 = space();
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t21 = space();
      hr = element("hr");
      t22 = space();
      if (if_block)
        if_block.c();
      attr(span1, "class", "caret");
      attr(button0, "type", "button");
      attr(button0, "class", "btn btn-default dropdown-toggle");
      attr(button0, "data-toggle", "dropdown");
      attr(button0, "id", "method-type");
      attr(ul0, "class", "dropdown-menu");
      attr(ul0, "role", "menu");
      attr(ul0, "aria-labelledby", "method-type");
      attr(div0, "class", "input-group-btn search-panel");
      attr(input, "type", "text");
      attr(input, "class", "form-control");
      attr(input, "placeholder", input_placeholder_value = "Enter URL to monitor " + ctx[2]);
      attr(button1, "class", "btn btn-success");
      attr(button1, "type", "button");
      attr(span2, "class", "input-group-btn");
      attr(div1, "class", "input-group");
      attr(a0, "href", "#params_tab");
      attr(a0, "data-toggle", "tab");
      toggle_class(li0, "active", ctx[6] == 1);
      attr(a1, "href", "#header_tab");
      attr(a1, "data-toggle", "tab");
      toggle_class(li1, "active", ctx[6] == 2);
      attr(a2, "href", "#body_tab");
      attr(a2, "data-toggle", "tab");
      toggle_class(li2, "active", ctx[6] == 3);
      attr(ul1, "class", "nav nav-tabs mt-2");
      attr(button2, "class", "btn btn-default btn-xs");
      attr(div2, "class", "tab-pane");
      attr(div2, "id", "params_tab");
      toggle_class(div2, "active", ctx[6] == 1);
      attr(button3, "class", "btn btn-default btn-xs");
      attr(div3, "class", "tab-pane");
      attr(div3, "id", "header_tab");
      toggle_class(div3, "active", ctx[6] == 2);
      attr(div4, "class", "mlb-3");
      attr(hr, "class", "m-3");
      attr(div5, "class", "tab-pane");
      attr(div5, "id", "body_tab");
      toggle_class(div5, "active", ctx[6] === 3);
      attr(div6, "class", "tab-content bg-white bb bl br border-bootstrap-border p-4");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, button0);
      append(button0, span0);
      append(span0, t0);
      append(button0, t1);
      append(button0, span1);
      append(div0, t2);
      append(div0, ul0);
      for (let i = 0; i < each_blocks_3.length; i += 1) {
        each_blocks_3[i].m(ul0, null);
      }
      append(div1, t3);
      append(div1, input);
      set_input_value(input, ctx[1]);
      append(div1, t4);
      append(div1, span2);
      append(span2, button1);
      insert(target, t6, anchor);
      insert(target, ul1, anchor);
      append(ul1, li0);
      append(li0, a0);
      append(ul1, t8);
      append(ul1, li1);
      append(li1, a1);
      append(ul1, t10);
      append(ul1, li2);
      append(li2, a2);
      insert(target, t12, anchor);
      insert(target, div6, anchor);
      append(div6, div2);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].m(div2, null);
      }
      append(div2, t13);
      append(div2, button2);
      append(div6, t15);
      append(div6, div3);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div3, null);
      }
      append(div3, t16);
      append(div3, button3);
      append(div6, t18);
      append(div6, div5);
      append(div5, div4);
      append(div4, label_1);
      append(div4, t20);
      append(div4, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(select, ctx[4].type);
      append(div5, t21);
      append(div5, hr);
      append(div5, t22);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div5, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[26]),
          listen(input, "input", ctx[27]),
          listen(button1, "click", ctx[28]),
          listen(a0, "click", ctx[29]),
          listen(a1, "click", ctx[30]),
          listen(a2, "click", ctx[31]),
          listen(button2, "click", ctx[20]),
          listen(button3, "click", ctx[18]),
          listen(select, "input", ctx[38])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty[0] & 1) && t0_value !== (t0_value = ctx2[0].method + ""))
        set_data(t0, t0_value);
      if (dirty[0] & 4104) {
        each_value_4 = ctx2[12];
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks_3[i]) {
            each_blocks_3[i].p(child_ctx, dirty);
          } else {
            each_blocks_3[i] = create_each_block_4(child_ctx);
            each_blocks_3[i].c();
            each_blocks_3[i].m(ul0, null);
          }
        }
        for (; i < each_blocks_3.length; i += 1) {
          each_blocks_3[i].d(1);
        }
        each_blocks_3.length = each_value_4.length;
      }
      if (!current || dirty[0] & 4 && input_placeholder_value !== (input_placeholder_value = "Enter URL to monitor " + ctx2[2])) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty[0] & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (dirty[0] & 64) {
        toggle_class(li0, "active", ctx2[6] == 1);
      }
      if (dirty[0] & 64) {
        toggle_class(li1, "active", ctx2[6] == 2);
      }
      if (dirty[0] & 64) {
        toggle_class(li2, "active", ctx2[6] == 3);
      }
      if (dirty[0] & 27263488) {
        each_value_3 = ctx2[9];
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
            transition_in(each_blocks_2[i], 1);
          } else {
            each_blocks_2[i] = create_each_block_3(child_ctx);
            each_blocks_2[i].c();
            transition_in(each_blocks_2[i], 1);
            each_blocks_2[i].m(div2, t13);
          }
        }
        group_outros();
        for (i = each_value_3.length; i < each_blocks_2.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (dirty[0] & 64) {
        toggle_class(div2, "active", ctx2[6] == 1);
      }
      if (dirty[0] & 524320) {
        each_value_2 = ctx2[5];
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_2(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div3, t16);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks_1.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      if (dirty[0] & 64) {
        toggle_class(div3, "active", ctx2[6] == 2);
      }
      if (dirty[0] & 2048) {
        each_value_1 = ctx2[11];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (!current || dirty[0] & 2064 && select_value_value !== (select_value_value = ctx2[4].type)) {
        select_option(select, ctx2[4].type);
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div5, null);
        } else {
          if_block = null;
        }
      }
      if (dirty[0] & 64) {
        toggle_class(div5, "active", ctx2[6] === 3);
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      transition_in(if_block);
      current = true;
    },
    o(local) {
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_each(each_blocks_3, detaching);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(ul1);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(div6);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function getParams(uri) {
  let params2 = [];
  try {
    let url2 = new URL(uri);
    let searchParams = new URLSearchParams(url2.search);
    for (let [key, value] of searchParams.entries()) {
      params2.push([key, value]);
    }
  } catch (e) {
  }
  return params2;
}
function getParameterizedURL(url2, params2) {
  let [left, rest] = url2.split("?");
  if (!left.startsWith("http")) {
    left = `https://${left}`;
  }
  let search = new URLSearchParams(params2.filter(([key, value]) => key));
  return `${left}?${search}`;
}
function instance$x($$self, $$props, $$invalidate) {
  let { request } = $$props;
  let { uri = "" } = $$props;
  let { label } = $$props;
  let dispatch = createEventDispatcher();
  const bodyTypes = ["none", "urlencoded", "json"];
  const methods = ["GET", "POST", "PATCH", "PUT", "DELETE"];
  let currentTab = 1;
  let { method, body, headers } = request;
  let jsonStr = null;
  let isBodyJSONInvalid = false;
  onBodyTypeChange(body.type);
  function onBodyTypeChange(type) {
    let data = body.data;
    switch (type) {
      case "json":
        if (data == null || !_.isObject(data) || _.isArray(data)) {
          $$invalidate(4, body.data = {}, body);
        }
        $$invalidate(7, jsonStr = JSON.stringify(body.data, null, 2));
        $$invalidate(8, isBodyJSONInvalid = false);
        break;
      case "urlencoded":
        if (!_.isArray(data)) {
          $$invalidate(4, body.data = [["", ""]], body);
        }
        break;
      default:
        $$invalidate(4, body.data = null, body);
    }
    $$invalidate(4, body.type = type, body);
  }
  function formatJSON(e) {
    try {
      $$invalidate(7, jsonStr = JSON.stringify(JSON.parse(e.target.value), null, 2));
    } catch (e2) {
    }
  }
  function parseBodyJSON(str) {
    try {
      $$invalidate(4, body.data = JSON.parse(str), body);
      $$invalidate(8, isBodyJSONInvalid = false);
    } catch (e) {
      $$invalidate(8, isBodyJSONInvalid = true);
    }
  }
  function checkFormBody() {
    body.data || $$invalidate(4, body.data = [], body);
  }
  function addURLEncodedParam() {
    checkFormBody();
    body.data.push(["", ""]);
    $$invalidate(4, body);
  }
  function onRemoveUrlencoded(index) {
    body.data.splice(index, 1);
    $$invalidate(4, body);
  }
  function addHeader() {
    headers.push(["", ""]);
    $$invalidate(5, headers);
  }
  function onRemoveHeader(index) {
    headers.splice(index, 1);
    $$invalidate(5, headers);
  }
  let params2 = uri ? getParams(uri) : [];
  function addNewParams() {
    $$invalidate(9, params2 = [...params2, ["", ""]]);
  }
  function onRemoveParam(index) {
    params2.splice(index, 1);
    $$invalidate(9, params2);
    $$invalidate(1, uri = getParameterizedURL(uri, params2));
  }
  let onURLInputUpdateParams = _.debounce((value) => {
    $$invalidate(9, params2 = []);
    try {
      let url2 = new URL(value);
      if (url2.search) {
        let searchParams = new URLSearchParams(url2.search);
        for (let [key, value2] of searchParams.entries()) {
          if (key || value2)
            params2.push([key, value2]);
        }
      }
    } catch (e) {
    }
  }, 200, false);
  let updateParamKey = _.debounce((index, key) => {
    $$invalidate(9, params2[index][0] = key, params2);
    $$invalidate(1, uri = getParameterizedURL(uri, params2));
  }, 200, false);
  let updateParamValue = _.debounce((index, value) => {
    $$invalidate(9, params2[index][1] = value, params2);
    $$invalidate(1, uri = getParameterizedURL(uri, params2));
  }, 200, false);
  const click_handler2 = (_method) => $$invalidate(3, method = _method);
  function input_input_handler() {
    uri = this.value;
    $$invalidate(1, uri);
  }
  const input_handler = ({ target: { value } }) => onURLInputUpdateParams(value);
  const click_handler_1 = (e) => dispatch("fetch");
  const click_handler_2 = (e) => $$invalidate(6, currentTab = 1);
  const click_handler_3 = (e) => $$invalidate(6, currentTab = 2);
  const click_handler_4 = (e) => $$invalidate(6, currentTab = 3);
  const func = (i) => onRemoveParam(i);
  const keyUpdate_handler = (i, e) => updateParamKey(i, e.detail);
  const valueUpdate_handler = (i, e) => updateParamValue(i, e.detail);
  const func_1 = (i) => onRemoveHeader(i);
  function keyvaluetable_key_binding(value, keyValue) {
    if ($$self.$$.not_equal(keyValue[0], value)) {
      keyValue[0] = value;
      $$invalidate(5, headers);
    }
  }
  function keyvaluetable_value_binding(value, keyValue) {
    if ($$self.$$.not_equal(keyValue[1], value)) {
      keyValue[1] = value;
      $$invalidate(5, headers);
    }
  }
  const input_handler_1 = (e) => onBodyTypeChange(e.target.value);
  const func_2 = (i) => onRemoveUrlencoded(i);
  function keyvaluetable_key_binding_1(value, keyValue) {
    if ($$self.$$.not_equal(keyValue[0], value)) {
      keyValue[0] = value;
      $$invalidate(4, body);
    }
  }
  function keyvaluetable_value_binding_1(value, keyValue) {
    if ($$self.$$.not_equal(keyValue[1], value)) {
      keyValue[1] = value;
      $$invalidate(4, body);
    }
  }
  const input_handler_2 = (e) => parseBodyJSON(e.target.value);
  $$self.$$set = ($$props2) => {
    if ("request" in $$props2)
      $$invalidate(0, request = $$props2.request);
    if ("uri" in $$props2)
      $$invalidate(1, uri = $$props2.uri);
    if ("label" in $$props2)
      $$invalidate(2, label = $$props2.label);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 56) {
      $$invalidate(0, request = { method, body, headers });
    }
  };
  return [
    request,
    uri,
    label,
    method,
    body,
    headers,
    currentTab,
    jsonStr,
    isBodyJSONInvalid,
    params2,
    dispatch,
    bodyTypes,
    methods,
    onBodyTypeChange,
    formatJSON,
    parseBodyJSON,
    addURLEncodedParam,
    onRemoveUrlencoded,
    addHeader,
    onRemoveHeader,
    addNewParams,
    onRemoveParam,
    onURLInputUpdateParams,
    updateParamKey,
    updateParamValue,
    click_handler2,
    input_input_handler,
    input_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    func,
    keyUpdate_handler,
    valueUpdate_handler,
    func_1,
    keyvaluetable_key_binding,
    keyvaluetable_value_binding,
    input_handler_1,
    func_2,
    keyvaluetable_key_binding_1,
    keyvaluetable_value_binding_1,
    input_handler_2
  ];
}
class FetchConfig extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$x, create_fragment$x, safe_not_equal, { request: 0, uri: 1, label: 2 }, null, [-1, -1]);
  }
}
function create_catch_block$3(ctx) {
  let p;
  let t0;
  let t1_value = ctx[30] + "";
  let t1;
  return {
    c() {
      p = element("p");
      t0 = text("Retry ");
      t1 = text(t1_value);
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t0);
      append(p, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t1_value !== (t1_value = ctx2[30] + ""))
        set_data(t1, t1_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_then_block$3(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[6] && create_if_block$g(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[6]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$g(ctx2);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block$g(ctx) {
  let div4;
  let div2;
  let div1;
  let ul;
  let li0;
  let a;
  let t1;
  let li1;
  let div0;
  let label_1;
  let input;
  let t2;
  let t3;
  let tree;
  let t4;
  let div3;
  let t5;
  let div5;
  let button;
  let t6;
  let button_disabled_value;
  let t7;
  let current;
  let mounted;
  let dispose;
  tree = new Tree({
    props: {
      obj: prepareSchema(jsonParser(ctx[6])),
      stores: ctx[9]
    }
  });
  let if_block0 = ctx[2] && create_if_block_2$5(ctx);
  let if_block1 = !ctx[5] && create_if_block_1$a();
  return {
    c() {
      div4 = element("div");
      div2 = element("div");
      div1 = element("div");
      ul = element("ul");
      li0 = element("li");
      a = element("a");
      a.textContent = `${T("a_select_properties")}`;
      t1 = space();
      li1 = element("li");
      div0 = element("div");
      label_1 = element("label");
      input = element("input");
      t2 = text("\n                  Preview JSON");
      t3 = space();
      create_component(tree.$$.fragment);
      t4 = space();
      div3 = element("div");
      if (if_block0)
        if_block0.c();
      t5 = space();
      div5 = element("div");
      button = element("button");
      t6 = text("Save");
      t7 = space();
      if (if_block1)
        if_block1.c();
      attr(a, "href", "#default");
      attr(a, "data-toggle", "tab");
      attr(li0, "class", "active");
      attr(input, "type", "checkbox");
      attr(div0, "class", "mt-2 mx-2 my-lg-0");
      attr(li1, "class", "pull-right");
      attr(ul, "class", "nav nav-tabs");
      attr(div1, "class", "flex flex-col");
      attr(div2, "class", "w-1/2");
      attr(div3, "class", "w-1/2");
      attr(div4, "class", "flex flex-row mt-4");
      attr(button, "class", "btn btn-primary");
      button.disabled = button_disabled_value = !ctx[5];
      attr(div5, "class", "mt1");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div2);
      append(div2, div1);
      append(div1, ul);
      append(ul, li0);
      append(li0, a);
      append(ul, t1);
      append(ul, li1);
      append(li1, div0);
      append(div0, label_1);
      append(label_1, input);
      input.checked = ctx[2];
      append(label_1, t2);
      append(div1, t3);
      mount_component(tree, div1, null);
      append(div4, t4);
      append(div4, div3);
      if (if_block0)
        if_block0.m(div3, null);
      insert(target, t5, anchor);
      insert(target, div5, anchor);
      append(div5, button);
      append(button, t6);
      append(div5, t7);
      if (if_block1)
        if_block1.m(div5, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[17]),
          listen(button, "click", ctx[13])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4) {
        input.checked = ctx2[2];
      }
      const tree_changes = {};
      if (dirty & 64)
        tree_changes.obj = prepareSchema(jsonParser(ctx2[6]));
      tree.$set(tree_changes);
      if (ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div3, null);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (!current || dirty & 32 && button_disabled_value !== (button_disabled_value = !ctx2[5])) {
        button.disabled = button_disabled_value;
      }
      if (!ctx2[5]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_1$a();
          if_block1.c();
          if_block1.m(div5, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(tree.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(tree.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      destroy_component(tree);
      if (if_block0)
        if_block0.d();
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div5);
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$5(ctx) {
  let distilledjsontext;
  let current;
  distilledjsontext = new DistilledJSONText({
    props: {
      output: ctx[6],
      preview: "distilled",
      previewJsonStore: ctx[9].previewJson
    }
  });
  return {
    c() {
      create_component(distilledjsontext.$$.fragment);
    },
    m(target, anchor) {
      mount_component(distilledjsontext, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const distilledjsontext_changes = {};
      if (dirty & 64)
        distilledjsontext_changes.output = ctx2[6];
      distilledjsontext.$set(distilledjsontext_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(distilledjsontext.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(distilledjsontext.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(distilledjsontext, detaching);
    }
  };
}
function create_if_block_1$a(ctx) {
  let p;
  return {
    c() {
      p = element("p");
      p.textContent = "Invalid api/json";
      attr(p, "class", "text-danger");
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_pending_block$3(ctx) {
  let p;
  return {
    c() {
      p = element("p");
      p.textContent = "Fetching data.....";
    },
    m(target, anchor) {
      insert(target, p, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_fragment$w(ctx) {
  let fetchconfig;
  let updating_uri;
  let updating_request;
  let t;
  let await_block_anchor;
  let promise;
  let current;
  function fetchconfig_uri_binding(value) {
    ctx[15](value);
  }
  function fetchconfig_request_binding(value) {
    ctx[16](value);
  }
  let fetchconfig_props = { label: ctx[8] };
  if (ctx[0] !== void 0) {
    fetchconfig_props.uri = ctx[0];
  }
  if (ctx[3] !== void 0) {
    fetchconfig_props.request = ctx[3];
  }
  fetchconfig = new FetchConfig({ props: fetchconfig_props });
  binding_callbacks.push(() => bind(fetchconfig, "uri", fetchconfig_uri_binding));
  binding_callbacks.push(() => bind(fetchconfig, "request", fetchconfig_request_binding));
  fetchconfig.$on("fetch", ctx[12]);
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block$3,
    then: create_then_block$3,
    catch: create_catch_block$3,
    value: 29,
    error: 30,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[4], info);
  return {
    c() {
      create_component(fetchconfig.$$.fragment);
      t = space();
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      mount_component(fetchconfig, target, anchor);
      insert(target, t, anchor);
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      const fetchconfig_changes = {};
      if (!updating_uri && dirty & 1) {
        updating_uri = true;
        fetchconfig_changes.uri = ctx[0];
        add_flush_callback(() => updating_uri = false);
      }
      if (!updating_request && dirty & 8) {
        updating_request = true;
        fetchconfig_changes.request = ctx[3];
        add_flush_callback(() => updating_request = false);
      }
      fetchconfig.$set(fetchconfig_changes);
      info.ctx = ctx;
      if (dirty & 16 && promise !== (promise = ctx[4]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(fetchconfig.$$.fragment, local);
      transition_in(info.block);
      current = true;
    },
    o(local) {
      transition_out(fetchconfig.$$.fragment, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      destroy_component(fetchconfig, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance$w($$self, $$props, $$invalidate) {
  let savable;
  let $includedJson;
  let $config;
  let $model, $$unsubscribe_model = noop, $$subscribe_model = () => ($$unsubscribe_model(), $$unsubscribe_model = subscribe(model, ($$value) => $$invalidate(20, $model = $$value)), model);
  let $originalJson;
  $$self.$$.on_destroy.push(() => $$unsubscribe_model());
  let expanded = true;
  let { onSave } = $$props;
  let { model } = $$props;
  $$subscribe_model();
  let { uri } = $$props;
  const labels = {
    [C.DS_ID_JSON]: "json",
    [C.DS_ID_UPTIME]: "uptime"
  };
  const fetchMethods = {
    [C.DS_ID_JSON]: fetchJSONAPI,
    [C.DS_ID_UPTIME]: fetchUptime
  };
  let datasource_id = $model.datasource_id;
  let config = $model.config || new Model$2.SieveConfigJSON({}, { parse: true, datasource_id });
  component_subscribe($$self, config, (value) => $$invalidate(19, $config = value));
  let label = labels[datasource_id] || "<unsupported type>";
  let request = $config.request;
  const stores = initStores($config.filters.included);
  const { includedJson, originalJson } = stores;
  component_subscribe($$self, includedJson, (value) => $$invalidate(18, $includedJson = value));
  component_subscribe($$self, originalJson, (value) => $$invalidate(6, $originalJson = value));
  let outputPromise;
  async function fetchJSONAPI(body) {
    try {
      $$invalidate(5, savable = false);
      let response = await fetch(APIUrl, {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      let data = await response.json();
      if (data.body) {
        $$invalidate(5, savable = true);
        originalJson.update((val) => data.body);
      } else {
        originalJson.update((val) => data);
      }
    } catch (e) {
      let error = {
        status: 500,
        body: e || "Internal server error, Retry"
      };
      originalJson.update((val) => error);
    }
  }
  async function fetchUptime(body) {
    try {
      $$invalidate(5, savable = false);
      let res2 = await Api.api(`/datasources/${datasource_id}/fetch`, "POST", getSieve());
      originalJson.update((val) => res2);
      $$invalidate(5, savable = true);
    } catch (e) {
      let error = {
        status: 500,
        body: e.message || e.msg || "Internal server error, Retry"
      };
      originalJson.update((val) => error);
    }
  }
  function fetchData2() {
    let method = fetchMethods[datasource_id];
    $$invalidate(4, outputPromise = method(getSieve()));
  }
  if (uri) {
    fetchData2();
  }
  function getSieve() {
    let uriObj = new URL(uri);
    return {
      name: uriObj.host,
      uri,
      config: getConfig()
    };
  }
  function getConfig() {
    return { request, filters: getFilters() };
  }
  function getFilters() {
    return {
      included: $includedJson.map((value) => value[1] === CheckState.selected ? value[0] : null).filter((value) => value)
    };
  }
  function save() {
    onSave(getSieve());
  }
  function fetchconfig_uri_binding(value) {
    uri = value;
    $$invalidate(0, uri);
  }
  function fetchconfig_request_binding(value) {
    request = value;
    $$invalidate(3, request);
  }
  function input_change_handler() {
    expanded = this.checked;
    $$invalidate(2, expanded);
  }
  $$self.$$set = ($$props2) => {
    if ("onSave" in $$props2)
      $$invalidate(14, onSave = $$props2.onSave);
    if ("model" in $$props2)
      $$subscribe_model($$invalidate(1, model = $$props2.model));
    if ("uri" in $$props2)
      $$invalidate(0, uri = $$props2.uri);
  };
  $$invalidate(5, savable = false);
  return [
    uri,
    model,
    expanded,
    request,
    outputPromise,
    savable,
    $originalJson,
    config,
    label,
    stores,
    includedJson,
    originalJson,
    fetchData2,
    save,
    onSave,
    fetchconfig_uri_binding,
    fetchconfig_request_binding,
    input_change_handler
  ];
}
class Json extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { onSave: 14, model: 1, uri: 0 });
  }
}
const JSONSelector = View$1.ActionProvider.extend({
  name: "JSONSelector",
  onSave: function(sieve) {
    this.trigger("save", sieve);
  },
  async postInit() {
    this.model.get("config") || new Model$2.SieveConfigJSON({}, {
      parse: true,
      datasource_id: this.model.get("datasource_id")
    });
    this.view = new Json({
      target: this.el,
      props: {
        onSave: this.onSave,
        model: this.model,
        uri: this.model.get("uri")
      }
    });
  },
  remove: function() {
    JSONSelector.__super__.remove.call(this);
    this.view.$destroy();
  }
});
const $$4 = window.jQuery;
if (!$$4) {
  throw new Error("ADD jQuery");
}
const _$3 = window._;
if (!_$3) {
  throw new Error("ADD _");
}
const domo$2 = window.domo;
if (!domo$2) {
  throw new Error("ADD domo");
}
const async$3 = window.async;
if (!async$3) {
  throw new Error("ADD async");
}
const XMLSelector = View$1.ActionProvider.extend({
  events: {
    "keypress input": "event_load",
    "click .xtbar .btn.xadd": "event_add"
  },
  event_add: function(event) {
    if (this.xml) {
      this.trigger("save", {
        uri: this.url,
        content_type: C.TYPE_XML,
        config: {
          selection: {
            excludes: [],
            includes: [{
              type: "xpath",
              expr: "/*"
            }]
          }
        }
      });
    } else {
      this.error("XML could not be loaded or parsed.");
    }
  },
  event_load: function(event) {
    if (event.keyCode == 13) {
      this.loadURL(this.$(".xurl").val());
    }
  },
  error: function(msg) {
    this.$(".xpreview").addClass("xerror").text(msg ? T(msg) : "");
  },
  msg: function(msg) {
    this.$(".xpreview").removeClass("xerror").text(msg ? T(msg) : "");
  },
  loadURL: function(url2) {
    const self = this;
    this.msg("");
    if (url2.indexOf(":") < 0) {
      url2 = "http://" + url2;
    }
    if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(url2)) {
      this.error("m_enter_valid_url");
      return;
    }
    this.url = url2;
    this.$(".xtbar").empty();
    this.msg("l_loading");
    fetchResource(url2, function(err, response, xhr) {
      if (err) {
        self.error("e_load_source");
        return;
      }
      let contentType = xhr.getResponseHeader("content-type");
      contentType = contentType.split(";")[0];
      switch (contentType) {
        case "application/xml":
        case "text/xml":
        case "application/rss+xml":
        case "application/atom+xml":
          self.msg("Parsing xml...");
          self.onXML(xhr.responseText);
          break;
        default:
          self.error(SPRINTF("e_unknown_content_type", contentType));
          break;
      }
    });
  },
  onXML: function(xmlStr) {
    const xml = new DOMParser().parseFromString(xmlStr, "text/xml");
    this.msg("");
    if (!xml) {
      this.xml = null;
      this.error("Failed to parse XML");
    } else {
      this.xml = xml;
      this.$(".xpreview").text(xmlStr);
      this.$(".xtbar").empty().append(BUTTON({ "class": "btn btn-primary xadd" }, T("a_select")));
    }
  },
  render: function() {
    this.$el.empty().append(DIV(DIV(INPUT({
      "class": "form-control xurl",
      "placeholder": T("m_enter_xml_url")
    })), DIV({ "class": "xtbar " }), PRE({ "class": "xpreview", "style": "max-height: 400px;overflow:auto;" })));
    return this;
  }
});
function fetchResource(url2, callback) {
  if (Supports.agents.local) {
    Service$1.HTTP.get({ url: url2 }, callback);
  } else {
    $$4.get(`${URL_UTILS}/v1/http/get?url=${encodeURIComponent(url2)}`, function(res2, status, xhr) {
      callback(null, xhr.responseText, xhr);
    }).fail(function() {
      callback("Error fetching resource: " + url2);
    });
  }
}
const HTMLSelector = View$1.ActionProvider.extend({
  name: "HTMLSelector",
  render: function() {
    this.selectorModal = new Selector$1.Modal({
      model: this.model.clone(),
      parent: this,
      onDiscard: this.onSelectorDiscard,
      onSave: this.onSelectorSave
    });
    this.selectorModal.show();
    return this;
  },
  onSelectorDiscard: function() {
    this.trigger("discard");
    this.selectorModal.remove();
  },
  onSelectorSave: function(err, model) {
    if (err) {
      Msg.error("Error running visual selector: " + err);
      this.trigger("error", err);
    } else {
      this.trigger("save", _.pick(model.toJSON(), "uri", "name", "config", "content_type", "macro_id", "session_id", "datasource_id"));
    }
    this.selectorModal.remove();
  }
});
const PDFSelector = View$1.ActionProvider.extend({
  name: "PDFSelector",
  postInit: function() {
    if (USER.constraint && USER.constraint.flexi) {
      this.editor = Editor.create("url", {
        param: {
          label: "m_enter_pdf_url",
          must: true,
          name: "uri"
        },
        parent: this
      }).render();
      this.listenTo(this.editor, "change", this.save);
    } else {
      this.editor = new View$1.Base({
        el: DIV({ class: "alert alert-info" }, "PDF monitoring is available to Flexi and Enterprise customers only. Please upgrade your account or contact support for more information.")
      });
    }
  },
  save: function() {
    const uri = this.editor.getValue();
    const parts = uri.split("/");
    const name = parts[parts.length - 1];
    const attrs = {
      name: name + (name.match(/\.pdf$/) ? "" : " pdf"),
      uri,
      content_type: C.TYPE_PDF_HTML,
      config: {}
    };
    this.trigger("save", attrs);
  },
  render: function() {
    this.$el.empty().append(this.editor.el);
    return this;
  }
});
const DOCSelector = View$1.ActionProvider.extend({
  name: "DOCSelector",
  postInit: function() {
    this.editor = Editor.create("url", {
      param: {
        label: "m_enter_doc_url",
        must: true,
        name: "uri"
      },
      parent: this
    }).render();
    this.listenTo(this.editor, "change", this.save);
  },
  save: function() {
    const uri = this.editor.getValue();
    const parts = uri.split("/");
    const name = parts[parts.length - 1];
    const attrs = {
      name: name + (name.match(/\.docx?$/) ? "" : " doc"),
      uri,
      content_type: C.TYPE_DOC,
      config: {}
    };
    this.trigger("save", attrs);
  },
  render: function() {
    this.$el.empty().append(this.editor.el);
    return this;
  }
});
const SieveSourceSelector = View$1.ActionProvider.extend({
  name: "SieveSourceSelector",
  postInit: function() {
    const model = this.model;
    let view;
    switch (model.get("content_type")) {
      case C.TYPE_HTML:
        view = new HTMLSelector({ parent: this, model });
        break;
      case C.TYPE_FEED:
        view = new FeedFinder({ parent: this, model });
        break;
      case C.TYPE_XML:
        view = new XMLSelector({ parent: this, model });
        break;
      case C.TYPE_PDF_HTML:
        view = new PDFSelector({ parent: this, model });
        break;
      case C.TYPE_DOC:
        view = new DOCSelector({ parent: this, model });
        break;
      case C.TYPE_JSON: {
        let dsId = model.get("datasource_id");
        if ([C.DS_ID_JSON, C.DS_ID_UPTIME].includes(dsId) || !dsId) {
          view = new JSONSelector({ parent: this, model });
        } else {
          view = new HTMLSelector({ parent: this, model });
        }
        break;
      }
      default:
        throw new Error("Unknown content_type");
    }
    view.on("save", (attrs) => this.trigger("save", attrs));
    view.on("discard", () => this.trigger("discard"));
    this.view = view;
  },
  render: function() {
    this.$el.append(this.view.render().el);
    return this;
  }
});
const SieveSourceEditor = View$1.ActionProvider.extend({
  name: "SieveSourceEditor",
  actions: {
    edit_url: {
      fn: "action_edit_url"
    },
    force_static: {
      fn: "action_force_static"
    },
    selector_config_show: {
      fn: "action_config_show"
    },
    selector_edit: {
      fn: "action_selector_edit"
    }
  },
  action_config_show: function() {
    openConfigEditor(this.model, T("l_selection_config"), (modal) => {
      modal.remove();
    });
  },
  action_edit_url: function() {
    const model = this.model;
    const view = Editor.create("url", {
      param: {
        label: "l_url",
        must: true,
        name: "uri"
      },
      model: model.clone(),
      parent: this
    });
    const modal = new View$1.SaveDiscardModal({
      name: "SieveSourceEditor$URLModal",
      parent: this,
      title: T("l_url"),
      view
    });
    modal.show();
    modal.on("save", function() {
      model.set({ uri: view.getValue() });
      modal.remove();
    });
    modal.on("discard", function() {
      modal.remove();
    });
  },
  action_force_static: function() {
    const model = this.model;
    const config = model.get("config");
    const pages = config.get("selections");
    const page = pages && pages.at(0);
    page.set("dynamic", false);
    this.checkURI(model);
    model.trigger("change");
  },
  action_selector_edit: function() {
    if (this.sourceSelector) {
      this.onEditSourceSelectorDiscard();
    } else {
      this.openSelector();
    }
  },
  checkURI: function(model) {
    if (model.get("content_type") != C.TYPE_HTML) {
      return;
    }
    const url2 = model.get("uri");
    const config = model.get("config");
    const pages = config.get("selections");
    const page = pages.at(0);
    const tabXF = Supports.tabForXFrame;
    const tabDn = Supports.tabForDynamic;
    const elMsg = this.elXFrameNotice;
    if (!url2 || page.get("dynamic") === false || !Supports.agents.local || !(tabXF || tabDn)) {
      return $(elMsg).addClass("hide");
    }
    if (tabDn) {
      $(elMsg).removeClass("hide");
    } else if (tabXF) {
      Service$1.HTTP.get({ url: url2 }, function(err, res2, xhr) {
        if (err) {
          return Msg.error("Failed to fetch URL.");
        }
        if (xhr.getResponseHeader("x-frame-options") || /x-frame-options/i.test(res2)) {
          $(elMsg).removeClass("hide");
        }
      });
    }
  },
  onSourceSelectorSave: function(attrs) {
    attrs.config = this.parseConfig(typeof attrs.config == "string" ? JSON.parse(attrs.config) : attrs.config);
    if (this.model.get("name")) {
      delete attrs.name;
    }
    this.model.set(attrs);
    this.sourceSelector.remove();
    this.sourceSelector = null;
  },
  onEditSourceSelectorDiscard: function() {
    this.sourceSelector.remove();
    this.sourceSelector = null;
    if (this.model.isNew()) {
      App.navBack();
    }
  },
  openSelector: function() {
    this.sourceSelector = new SieveSourceSelector({
      parent: this,
      model: this.model
    });
    this.listenTo(this.sourceSelector, "save", this.onSourceSelectorSave);
    this.listenTo(this.sourceSelector, "discard", this.onEditSourceSelectorDiscard);
    this.sourceSelector.render();
    this.elSelector.appendChild(this.sourceSelector.el);
    this.sourceSelector.$el.css({ padding: 10 });
  },
  parseConfig: function(config) {
    const ctor = this.model.get("config").constructor;
    return new ctor(config, { parse: true });
  },
  postInit: function() {
    const model = this.model;
    this.listenTo(model, "change:config change:uri", this.render);
    if (model.isEmpty()) {
      _.defer(this.openSelector);
    }
    this.elXFrameNotice = DIV({
      "class": "alert alert-info hide",
      "style": "margin: 5px 0; padding: 5px;"
    }, T("m_xframe_notice"), " ", BUTTON({
      "class": "btn btn-default btn-xs",
      "data-action": "force_static"
    }, T("a_static_load")), " ", A({ href: "https://distill.io/help/new-tab-chrome-extension" }, T("Learn More")));
    this.listenTo(model, "change:uri", this.checkURI);
    this.checkURI(model);
  },
  getContentTypeDescription: function() {
    switch (this.model.get("content_type")) {
      case C.TYPE_HTML:
        return SPRINTF("a_open_x_selector", "l_webpage");
      case C.TYPE_FEED:
        return SPRINTF("a_open_x_selector", "l_feed");
      case C.TYPE_XML:
        return SPRINTF("a_open_x_selector", "l_xml");
      case C.TYPE_PDF_HTML:
        return SPRINTF("a_open_x_selector", "l_pdf");
      case C.TYPE_DOC:
        return SPRINTF("a_open_x_selector", "l_doc");
      case C.TYPE_JSON:
        let name = "l_datasource";
        switch (this.model.get("datasource_id")) {
          case C.DS_ID_UPTIME:
            name = "l_uptime";
            break;
          case C.DS_ID_JSON:
          case null:
            name = "l_json";
        }
        return SPRINTF("a_open_x_selector", name);
      default:
        console.warn("getContentTypeDescription", "unknown content type", this.model.get("content_type"));
        return T("a_open_selector");
    }
  },
  render: function() {
    this.$el.empty().append(DIV({
      "class": "flex"
    }, DIV({
      "class": "btn-group mr2",
      "role": "group"
    }, BUTTON({
      "type": "button",
      "class": "btn btn-default",
      "data-action": "selector_edit",
      "title": T("h_selector_edit")
    }, this.getContentTypeDescription()), BUTTON({
      "class": "btn btn-default dropdown-toggle",
      "data-toggle": "dropdown"
    }, SPAN({ "class": "caret" })), UL({ "class": "dropdown-menu" }, LI(A({
      "data-action": "selector_config_show",
      "href": "javascript:void 0"
    }, T("h_config_show"))))), BUTTON({
      "class": "btn btn-default",
      "data-action": "edit_url"
    }, T("a_edit"), " ", this.model.get("uri"))), this.elXFrameNotice, this.elSelector = DIV());
    return this;
  }
});
const SieveOptions = View$1.ActionProvider.extend({
  name: "SieveOptions",
  actions: {
    sieve_save: { fn: "action_save" }
  },
  action_save: function(x, el) {
    const model = this.model;
    Msg.start("sieve:save", { info: "saving" });
    $(el).button("loading");
    async.series([
      (callback) => {
        const rule = this.rulesEditor.model;
        this.rulesEditor.updateModel();
        if (rule.isNew() && rule.isEmpty()) {
          return callback();
        }
        Msg.start("sieve:rule:save", { info: "l_loading" });
        rule.save(null, {
          error: function(rule2, res2) {
            Msg.stop("sieve:rule:save", { error: "e_req" });
            callback({ msg: "Failed to save conditions", err: res2 });
          },
          success: function() {
            if (model.get("rule_id") != rule.id) {
              model.set({ rule_id: rule.id }, { silent: true });
            }
            Msg.stop("sieve:rule:save");
            callback();
          }
        });
      },
      (callback) => {
        const attrs = _.omit(model.toJSON(), "err", "text", "ts", "ts_data", "ts_mod", "ts_view", "user_id");
        if (attrs.state == C.STATE_INIT) {
          attrs.state = C.STATE_READY;
        }
        model.save(null, {
          data: attrs,
          patch: true,
          silent: true,
          wait: true,
          error: function(model2, res2) {
            Msg.stop("sieve:save", { error: "Failed to save changes to server" });
            callback({ msg: "Failed to save changes", err: res2 });
          },
          success: function(model2) {
            Msg.stop("sieve:save");
            callback(null);
          }
        });
      },
      (callback) => {
        const changes = this.actionEditor.getChanges();
        if (!base.syncBatch(changes, callback)) {
          callback();
        }
      }
    ], (err, results) => {
      $(el).button("reset");
      if (err) {
        Msg.error("Failed to save data. Please check console for more info.");
      } else {
        this.trigger("save");
        App.navBack();
      }
    });
  },
  duplicate: async function(id) {
    const model = await this.fetch(id);
    const json = _.pick(model.toJSON(), "name", "uri", "config", "client_id", "content_type", "schedule", "tags");
    json.name = "Copy of " + json.name;
    this.setModel(new this.collection.model(json, { parse: true }), {
      defaultsModel: model,
      editURL: false
    });
  },
  edit: async function(id) {
    let model = await this.fetch(id);
    this.setModel(model);
  },
  editNew: function(type, options) {
    let content_type = 0;
    let attrs = {};
    switch (type) {
      case "page":
        content_type = C.TYPE_HTML;
        break;
      case "feed":
        content_type = C.TYPE_FEED;
        break;
      case "xml":
        content_type = C.TYPE_XML;
        break;
      case "pdf":
        content_type = C.TYPE_PDF_HTML;
        break;
      case "doc":
        content_type = C.TYPE_DOC;
        break;
      case "json":
        content_type = C.TYPE_JSON;
        switch (options.type) {
          case C.DS_TYPE_UPTIME:
            attrs.datasource_id = C.DS_ID_UPTIME;
            break;
          case C.DS_TYPE_JSON:
          default:
            attrs.datasource_id = C.DS_ID_JSON;
        }
        break;
      default:
        Msg.error("Unknown monitor type: " + type);
        throw new Error("Unknown monitor type: " + type);
    }
    this.setModel(new Model$2.Sieve(__spreadProps(__spreadValues({}, attrs), {
      content_type
    }), { parse: true }));
  },
  fetch: async function(id) {
    let model = new Model$2.Sieve({ id });
    await model.fetch();
    return model;
  },
  initEditors: async function(model, defaultsModel) {
    const actions = new Model$2.SieveActions(null, { parent: model });
    const rule = new Model$2.SieveRule({
      id: model.get("rule_id") || void 0
    });
    this.sourceEditor = new SieveSourceEditor({
      model,
      parent: this,
      className: "controls"
    }).render();
    this.clientSelector = new ViewClients.ClientSelector({ model });
    this.nameEditor = Editor.create("text", {
      model,
      param: {
        label: "l_name",
        must: true,
        name: "name",
        type: "text"
      },
      parent: this
    }).render();
    this.scheduleEditor = new SieveScheduleEditor({
      model,
      parent: this
    }).render();
    this.actionEditor = new SieveActionsEditor({
      actions,
      sieve: model,
      parent: this
    }).render();
    this.rulesEditor = new SieveRulesVersionManager({
      model: rule,
      parent: this
    }).render();
    this.tagsEditor = new TagsEditor({
      model,
      parent: this
    }).render();
    if (!model.isNew()) {
      await Promise.all([actions.fetch(), rule.fetch()]);
    }
    this.loadDefaults(model, actions, defaultsModel);
  },
  async createDefaults(sieve, actions, defaultsModel) {
    const uri = sieve.get("uri");
    const hostn = uri && new URL(uri).hostname;
    const colln = new Model$2.Sieves();
    if (_.isEmpty(sieve.get("name")) && uri) {
      sieve.set("name", T("l_loading"));
      $.get(URL_UTILS + "/v1/http/get?html_css_filter=title&url=" + encodeURIComponent(uri), function(res2) {
        if (res2) {
          sieve.set("name", $(res2).text().trim() || "Untitled");
        }
      });
    }
    let copyRef = (ref, defaultRules) => {
      const refActions = new Model$2.SieveActions(null, { parent: ref });
      refActions.fetch({
        data: { state: 0 },
        success: () => {
          refActions.each((action) => {
            const attrs = action.omit("id", "sieve_id", "ts", "ts_mod");
            actions.add(new Model$2.SieveAction[attrs.type](attrs, { parse: true }));
          });
          this.onChanges();
        }
      });
      let refSchedule = ref.get("schedule");
      if (refSchedule.get("type") == "LIVE") {
        refSchedule = new Model$2.Schedule({ type: "INTERVAL" });
      }
      sieve.set("schedule", refSchedule);
      this.scheduleEditor.render();
      const rule_id = ref.get("rule_id");
      if (defaultRules && rule_id) {
        this.rulesEditor.duplicate(rule_id);
      }
    };
    if (defaultsModel) {
      return copyRef(defaultsModel, true);
    }
    await colln.fetch({
      data: {
        "uri.like": "%" + hostn + "%",
        "state.in": [C.STATE_READY, C.STATE_PAUSED],
        "_opt": {
          limit: 1,
          order: ["-ts"],
          only: ["id", "schedule", "tags"]
        }
      }
    });
    if (colln.length > 0) {
      return copyRef(colln.at(0), false);
    }
    await colln.fetch({
      data: {
        "state.in": [C.STATE_READY, C.STATE_PAUSED],
        "_opt": {
          limit: 1,
          order: ["-ts"],
          only: ["id", "schedule", "tags"]
        }
      }
    });
    if (colln.length > 0) {
      return copyRef(colln.at(0), false);
    }
    _.each(Model$2.SieveActionDescList, (desc) => {
      if (desc.addByDefault(Supports)) {
        actions.add(new Model$2.SieveAction[desc.type]());
      }
    });
    this.onChanges();
  },
  loadDefaults: function(sieve, actions, defaultsModel) {
    if (sieve.isNew() || sieve.get("state") == C.STATE_INIT) {
      this.createDefaults(sieve, actions, defaultsModel);
    } else {
      actions.fetch({ data: { state: 0 } });
    }
  },
  postInit: function(options) {
    this.clients = options.clients;
  },
  showProgress: function() {
    this.$el.children(".xprogress").show();
  },
  removeProgress: function() {
    this.$el.children(".xprogress").hide();
  },
  render: function() {
    this.$el.empty().append(DIV({ "class": "xtbar xvbar-margin" }, BUTTON({
      "class": "btn btn-default",
      "data-action": "go_back"
    }, I({ "class": "fa fa-chevron-left" }), " ", T("a_discard"), " ", this.elUnsavedMsg = SPAN())), DIV({ "class": "xpage-header" }, H3(this.elHeading = SPAN())), DIV({ "class": "xprogress", "style": "margin-top: -2px;position:absolute;" }, DIV({ "class": "xindeterminate" })), DIV({ "class": "form-horizontal", "style": "padding: 10px;" }, this.elContent = DIV()));
    return this;
  },
  renderOptions: function() {
    const model = this.model;
    model.getTags(App.labels);
    $(this.elHeading).empty().append(T("l_options"), " - ", model.isNew() ? T("l_add_monitor") : model.get("name"));
    $(this.elContent).empty().append(DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_source")), DIV({ "class": "col-md-10" }, this.sourceEditor.el, P({ "class": "help" }, T("h_sieve_source")))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2", "for": "sieve-device" }, T("l_device")), DIV({ "class": "col-md-10" }, this.clientSelector.el, P({ "class": "help" }, T("h_sieve_device")))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2", "for": "sieve-name" }, T("l_name")), DIV({ "class": "col-md-10" }, this.nameEditor.el, P({ "class": "help" }, T("h_sieve_name")))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2", "for": "sieve-schedule" }, T("l_schedule")), DIV({ "class": "col-md-10" }, this.scheduleEditor.el)), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_actions")), DIV({ "class": "col-md-10" }, this.actionEditor.el, P({ "class": "help" }, T("h_sieve_actions")))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_conditions")), DIV({ "class": "col-md-10" }, this.rulesEditor.el, P({ "class": "help" }, T("h_sieve_rules")))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_label")), DIV({ "class": "col-md-10" }, this.tagsEditor.el)), DIV({ "class": "form-group" }, DIV({ "class": "col-md-offset-2 col-md-10 xtbar-form" }, BUTTON({
      "class": "btn btn-primary xbtn-default",
      "data-action": "sieve_save"
    }, T("a_save")), BUTTON({
      "class": "btn btn-default",
      "data-action": "go_back"
    }, T("a_discard")))));
  },
  onChanges: function() {
  },
  onSaveModel: function(attrs) {
    const model = new this.collection.model(_.defaults(attrs, {
      client_id: this.clients.defaultId,
      content_type: this.model.get("content_type"),
      datasource_id: this.model.get("datasource_id"),
      schedule: {
        type: "INTERVAL",
        params: {
          interval: 10800
        }
      },
      version: 1
    }), { parse: true });
    this.setModel(model);
  },
  onNewSourceSelectorDiscard: function() {
    this.sourceSelector.remove();
    App.navBack();
  },
  setModel: async function(model, options = {
    defaultsModel: null,
    editURL: false
  }) {
    this.showProgress();
    let sieveConstraint = {};
    if (this.model) {
      this.stopListening(this.model);
    }
    this.model = model;
    this.sourceSelector && this.sourceSelector.remove();
    this.listenTo(model, "change", this.onChanges);
    $(this.elUnsavedMsg).text("");
    try {
      sieveConstraint = await checkSieveConstraint(1);
    } catch (e) {
      console.error(e);
      sieveConstraint = { isOverLimit: false };
    }
    let accessInfo = await model.getAccess(App.user);
    if (model.isNew() && !accessInfo.hasAccess) {
      $(this.elHeading).text(T("m_upgrade_account"));
      let { minPlan } = accessInfo;
      if (minPlan) {
        $(this.elContent).empty().append(`${model.getTypeName()} monitors are available in ${minPlan} or higher subscriptions. `, A({
          href: urls.billing
        }, "Manage Subscription"));
      } else {
        $(this.elContent).append("Please sign in or contact support to get more information");
      }
    } else if (model.isNew() && sieveConstraint.isOverLimit) {
      $(this.elHeading).text(T("m_monitor_limit"));
      $(this.elContent).empty().append(SieveConstraints(sieveConstraint, url));
    } else if (model.isEmpty()) {
      this.showSourceSelector(model);
    } else {
      await this.initEditors(model, options.defaultsModel);
      this.renderOptions();
      if (options.editURL) {
        this.sourceEditor.action_edit_url();
      }
    }
    this.removeProgress();
  },
  showSourceSelector(model) {
    const sourceSelector = new SieveSourceSelector({
      model,
      parent: this
    }).render();
    sourceSelector.on("save", this.onSaveModel);
    sourceSelector.on("discard", this.onNewSourceSelectorDiscard);
    this.sourceSelector = sourceSelector;
    $(this.elHeading).text(T("l_source"));
    $(this.elContent).empty().append(sourceSelector.el);
  }
});
const openConfigEditor = function(model, title, callback) {
  const view = Editor.create("json", {
    param: {
      label: "l_selection_config",
      must: false,
      name: "config",
      type: "json"
    },
    model: new Backbone.Model({
      config: model.get("config").toJSON()
    })
  });
  const modal = new View$1.SaveDiscardModal({
    name: "SieveSourceEditor$ConfigModal",
    title,
    view
  });
  modal.on("save", function() {
    const config = view.model.get("config");
    model.set({ config: parseConfig(config) });
    callback(modal);
  });
  modal.on("discard", function() {
    modal.remove();
  });
  modal.show();
  view.$el.find("textarea").css("height", 300);
  function parseConfig(config) {
    const ctor = model.get("config").constructor;
    return new ctor(config, { parse: true });
  }
};
function create_fragment$v(ctx) {
  let div1;
  let div0;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      ctx[3](div0);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[3](null);
    }
  };
}
function instance$v($$self, $$props, $$invalidate) {
  let { route: route2 } = $$props;
  let { user, clients, labels, sieves } = getContext("watchlist:stores");
  let root = getContext("view:root");
  let el;
  let view;
  let lastRoute = null;
  function show() {
    if (route2 == lastRoute) {
      return;
    }
    if (route2.prefix == "dup") {
      view.duplicate(route2.id);
    } else if (route2.id) {
      view.edit(route2.id);
    } else {
      view.editNew(route2.data, route2.query);
    }
    lastRoute = route2;
  }
  onMount(() => {
    $$invalidate(2, view = new SieveOptions({
      el,
      clients,
      collection: sieves,
      parent: root
    }).render());
    show();
    return () => view.remove();
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$invalidate(1, route2 = $$props2.route);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      route2 && view && show();
    }
  };
  return [el, route2, view, div0_binding];
}
class Edit extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$v, create_fragment$v, safe_not_equal, { route: 1 });
  }
}
const diff_match_patch$1 = window.diff_match_patch;
if (!diff_match_patch$1) {
  throw new Error("ADD diff_match_patch");
}
const $$3 = window.jQuery;
if (!$$3) {
  throw new Error("ADD jQuery");
}
const _$2 = window._;
if (!_$2) {
  throw new Error("ADD _");
}
const async$2 = window.async;
if (!async$2) {
  throw new Error("ADD async");
}
const domo$1 = window.domo;
if (!domo$1) {
  throw new Error("ADD domo");
}
const moment$2 = window.moment;
if (!moment$2) {
  throw new Error("ADD moment");
}
const Backbone$3 = window.Backbone;
if (!Backbone$3) {
  throw new Error("ADD Backbone");
}
const Work = View$1.Base.extend({
  name: "Work",
  render: function() {
    const attrs = this.model.attributes;
    const err = attrs.err;
    if (err) {
      this.$el.append(A({ "href": "#", "class": "error" }, SPAN(formatTime(attrs.ts)), " ", SPAN(err.code || "EUNKNOWN")), " ", attrs.snap_id ? A({
        href: `${URL_ROOT}/snaps/${err.id}/index.html/`,
        target: "_blank"
      }, T("l_snapshot")) : "").find("a:first-child").popover({
        placement: "left",
        html: true,
        trigger: "click|focus",
        content: () => {
          return DIV(DIV(LABEL("Code:"), " ", SPAN(err.code || "NA")), DIV(LABEL("Msg:"), " ", SPAN(err.msg || err.message || JSON.stringify(err))), DIV({ style: "padding-top: 5px;" }, STRONG("Recommended Actions"), this.getSuggestions(err)), DIV({ style: "padding-top: 5px;" }, STRONG("Need help?"), DIV("Contact us at support@distill.io"))).outerHTML;
        }
      }).click(function(e) {
        e.preventDefault();
      });
    } else {
      this.$el.append(SPAN(formatTime(attrs.ts)));
    }
    return this;
  },
  getSuggestions: function(err) {
    switch (err.code || "NA") {
      case "SELECTION_EMPTY":
        return UL({ "style": "padding-left:14px;" }, LI("Ensure that seleced elements has text content."), LI("If website needs login, make sure that you are logged in."));
      case "TIMEOUT":
      case "ENOTFOUND":
      case "EREQUEST":
      case "ETIMEDOUT":
      case "ECONNREFUSED":
        return DIV("Please ensure that the webpage is accessible.");
      case "JAVASCRIPT":
        return DIV("Ensure that JavaScript is working in the page.");
      default:
        if (err.status === 0) {
          return DIV("Ensure that internet connection is working.");
        }
        return DIV("There is no information about this error.");
    }
  }
});
const Works = View$1.Collection.extend({
  name: "Works",
  postInit: function() {
    this.sieve = this.collection.parent;
    this.collection.fetch();
    this.collection.on("sync", this.onSync);
  },
  addOne: function(model) {
    const view = new Work({
      model,
      parent: this
    });
    this.$msg.empty();
    this.$list.append(view.render().el);
    return view;
  },
  onSync: function() {
    if (this.collection.length == 0) {
      if (this.sieve.get("client_id") == App.clients.defaultId) {
        this.$msg.text(T("m_log_na"));
      } else {
        this.$msg.text(T("Log for this monitor will be available on device that runs this monitor"));
      }
    }
  },
  renderBase: function() {
    this.$msg = $$3(DIV(T("l_loading")));
    this.$list = $$3(DIV());
    this.$el.append(this.$msg, this.$list);
  }
});
var SieveRow = View$1.Base.extend({
  name: "SieveRow",
  className: "xitem",
  tagName: "tr",
  events: {
    "click :checkbox": "event_check"
  },
  event_check: function() {
    this.model.prop("select", this.$("input[type=checkbox]:checked").length > 0);
  },
  onSelect: function(selected) {
    this.$el[selected ? "addClass" : "removeClass"]("active");
  },
  postInit: function(options) {
    const model = this.model;
    const id = model.id;
    this.listenTo(model, "change", this.renderRow);
    this.listenTo(model, "destroy", this.remove);
    this.listenTo(model, "remove", this.remove);
    this.listenTo(model, "sync", this.onSync);
    this.listenTo(model, "prop:select", this.onSelect);
    this.elDetail = TR(TD({ colspan: 8 }));
    this.listenTo(instance$W, "sieves:" + id, this.onSieveUpdate);
    this.listenTo(instance$W, "sieves:run_state:" + id, this.onSieveRunState);
    this.listenTo(instance$W, "sieves:on_demand_run_status:" + id, this.onSieveRunState);
  },
  reattach: function() {
    const parentNode = this.el.parentNode;
    parentNode && parentNode.removeChild(this.el);
    parentNode && parentNode.appendChild(this.el);
    if (this.elDetail.parentNode) {
      parentNode.removeChild(this.elDetail);
      parentNode.appendChild(this.elDetail);
    }
  },
  isSelected: function() {
    return this.model.prop("select");
  },
  onSieveRunState: function(e) {
    this.runState = e.state || e.doc.state || 0;
    this.renderRow();
  },
  onSieveUpdate: function(e) {
    if (e.doc) {
      this.model.set(this.model.parse(e.doc), { silent: true });
      this.model.trigger("change");
    } else {
      this.model.fetch();
    }
  },
  onSync: function() {
    this.render();
  },
  remove: function() {
    SieveRow.__super__.remove.call(this);
    $$3(this.elDetail).remove();
  },
  removeDetail: function() {
    this.$el.removeClass("active");
    this.detail && this.detail.remove();
    $$3(this.elDetail).remove();
    this.setSelected(false);
    delete this.detail;
  },
  render: function() {
    this.renderRow();
    this.detail && this.showDetail(this.detail);
    this.setSelected(this.isSelected());
    return this;
  },
  renderRow: function() {
    let { runState } = this;
    let url2 = this.model.attributes.uri;
    let host = "";
    try {
      host = "//" + new URL(url2).host;
    } catch (e) {
    }
    const renderRowTemplate = (model) => html`
      <td data-action = 'void 0'>
        <label class='xtd xdata xaction'>
          <input type="checkbox" style='margin:0;vertical-align:middle;'>
        </label>
      </td>
      <td data-action = 'void 0'>
        <button class='xtd xbtn xaction' style='margin: 0;' data-action= 'sieve context menu' data-action-param= '$parents [data-id]@data-id'>
          <i class="fa fa-caret-down"></i>
        </button>
      </td>
      <td>
        <a @click=${(e) => model.markRead()}
          class='xtd xdata' href=${model.attributes.uri || "#"}
          rel='noopener' target='_blank' title=${model.attributes.name}>
          <img width=14 src=${URL_ROOT + "/v1/getfavicon?url=" + escape(host)} loading='lazy'></img>
          ${model.attributes.name || SPRINTF("l_untitled")}
        </a>
      </td>
      <td data-action= 'sieve view' data-action-param=${model.id}>
        <div class= 'xtd xdata xaction' title= 'Click to view history'>
          <i class="xcaret fa fa-angle-double-down fa-lg"></i>
          ${model.attributes.state == C.STATE_DISCARD || model.attributes.state == C.STATE_DEL ? html`<span class= 'label label-danger xlabel xlabel-small'>Deleted</span>` : html`<span></span>`}
          <span>
            ${_$2.map(model.getTags(App.labels), (tag) => {
      return html`<span class='label label-info xlabel xlabel-small'>${tag.get("name")}</span>`;
    })}
          </span>
          <span>
          ${model.attributes.text != null ? model.attributes.text || "<" + SPRINTF("h_sieve_empty") + ">" : "<" + SPRINTF("h_sieve_new") + ">"}
          </span>
        </div>
      </td>
      <td class= ${model.attributes.schedule ? model.attributes.schedule.getFrequencyClass() : "error"}>
        <a 
          class= 'xtd xdata xaction'
          title= 'Click to edit schedule'
          data-action= 'sieve schedule menu'
          data-action-param= '$parents [data-id]@data-id'
          data-toggle= 'tooltip'>
            <small>${model.attributes.schedule ? model.attributes.schedule.getShortDisplayText() : "err: unset"}</small>
            <i class="xcaret fa fa-caret-down"></i>
        </a>
      </td>
      <td>
        <a
        class= ${"xtd xdata xaction xsieve-ts-data " + (model.attributes.err && JSON.parse(model.attributes.err) ? "xsieve-err" : "")}
        title= 'Click to view check/error log'
        data-action= 'sieve log menu'
        data-action-param= '$parents [data-id]@data-id'
        data-toggle= 'tooltip'>
          <small>${runState == C.RUN_STATE_WAIT ? "Waiting" : runState == C.RUN_STATE_WIP ? "Checking" : formatTime(model.attributes.ts_data, true) || "" || "NA"}</small>
          <i class="xcaret fa fa-caret-down"></i>
        </a>
      </td>
      <td style='padding: 0'>
        <a
        class= 'xtd xdata xaction xbtn'
        title= 'Click to edit device'
        data-action= 'sieve client menu'
        data-action-param= '$parents [data-id]@data-id'
        data-toggle= 'tooltip'
        style= 'text-align:center'>
          <i class="fa fa-lg ${App.clients.get(model.attributes.client_id) ? App.clients.get(model.attributes.client_id).getIcon() : " error fa-question"}"  style= 'margin: auto;'></i>
          <i class="xcaret fa fa-caret-down"></i>
        </a>
      </td>
      <td data-action= 'void 0' style= 'padding: 0'>
        <button
          class= ${"xtd btn btn-xs " + (model.attributes.state == C.STATE_READY ? "btn-success" : "btn-default") + (model.attributes.state == C.STATE_DISCARD ? " disabled" : "")}
          style= 'border-radius:0'
          data-action= 'sieve switch'
          data-action-param= '$parents [data-id]@data-id'
          title= 'Turn monitor ON or OFF'
          data-placement= 'left'>
          ${model.attributes.state == C.STATE_READY ? "ON " : "OFF"}
        </button>
      </td>
    `;
    render(renderRowTemplate(this.model), this.el);
    if (this.model.attributes._state && this.model.attributes._state != 0) {
      this.$el.addClass("xdirty").attr("title", T("m_sync_to_save"));
    } else {
      this.$el.removeClass("xdirty").removeAttr("title");
    }
    this.$('[data-toggle="tooltip"]').tooltip({ delay: { show: 400 } });
    if (this.model.isRead()) {
      this.$el.addClass("xfade").removeClass("xunread");
    } else {
      this.$el.addClass("xunread").removeClass("xfade");
    }
  },
  setSelected: function(selected) {
    if (this.$("input[type=checkbox]:checked").length > 0 !== selected) {
      this.$("input[type=checkbox]").prop("checked", selected);
      this.model.prop("select", selected);
    }
  },
  showDetail: function(view) {
    if (this.detail == view)
      return;
    this.listenTo(view, "remove", function() {
      if (this.detail == view) {
        delete this.detail;
        this.removeDetail();
      }
    }, this);
    this.elDetail.children[0].appendChild(view.el);
    this.detail = view;
    this.$el.addClass("active");
    this.$el.after(this.elDetail);
    view.listenTo(view, "remove", () => {
      this.model.markRead();
    });
    this.setSelected(true);
  }
});
const LogMenu = View$1.ContextMenu.extend({
  name: "LogMenu",
  actions: {
    "log menu close": { fn: "hide" },
    "clear-error": { fn: "clear_error" }
  },
  clear_error: function() {
    const model = this.collection.get(this.id);
    model.save("err", null, {
      error: function() {
        Msg.error("e_err");
      }
    });
    console.log("cleared error?");
  },
  onSync: function() {
    this.show();
  },
  postInit: function(options) {
    this.collection = this.options.collection;
  },
  renderMenu: function() {
    const model = this.collection.get(this.id);
    const works = new Model$2.Works(null, { parent: model });
    this.$el.empty().append(LI(BUTTON({
      "class": "btn xbtn-light pull-right",
      "data-action": "log menu close"
    }, I({ "class": "fa fa-times" })), SPAN({ style: "margin-left: 18px;" }, I(T("l_changed_on")))), LI({ "class": "xview" }, SPAN(formatTime(model.get("ts_data"))), I(T("l_check_log")), SPAN(new Works({
      parent: this,
      collection: works
    }).render().el)), LI({ "class": model.get("err") ? "xview" : "hide" }, A({
      "data-action": "clear-error"
    }, T("a_clear_error"))));
    this.listenTo(works, "sync", this.onSync);
  }
});
const ScheduleMenu = View$1.ContextMenu.extend({
  name: "ScheduleMenu",
  actions: {
    "schedule menu close": { fn: "hide" }
  },
  postInit: function(options) {
    this.collection = this.options.collection;
  },
  onScheduleChange: function(schedule) {
    const model = this.collection.get(this.id);
    Msg.start("save", "l_loading");
    model.set("schedule", schedule, { silent: true });
    model.save(null, {
      patch: true,
      silent: true,
      data: {
        schedule: JSON.stringify(schedule)
      },
      error: function() {
        Msg.stop("save", { error: "e_req" });
      },
      success: function() {
        Msg.stop("save", { info: "m_saved_schedule" });
      }
    });
  },
  renderMenu: function() {
    const model = this.collection.get(this.id).clone();
    if (!model) {
      this.$el.text("Model not found:" + this.id);
      return this;
    }
    this.editedModel = model;
    const scheduleEditor = new SieveScheduleEditor({
      model,
      parent: this
    });
    this.$el.empty().append(LI(BUTTON({
      "class": "btn xbtn-light pull-right",
      "data-action": "schedule menu close"
    }, I({ "class": "fa fa-times" })), SPAN({ style: "margin-left: 18px;" }, I(T("l_schedule")))), LI({ "class": "xview" }, scheduleEditor.render().el));
    this.off();
    this.listenTo(model, "change:schedule", this.onScheduleChange);
    setTimeout(() => scheduleEditor.focus(), 10);
  }
});
const SieveClientMenu = View$1.ContextMenu.extend({
  name: "SieveClientMenu",
  actions: {
    "menu client change": {
      fn: "action_client_change"
    },
    "menu client settings": {
      fn: "action_client_settings"
    }
  },
  action_client_change: function(id) {
    const model = this.collection.get(this.id);
    Msg.start("save", "l_loading");
    model.save("client_id", id, {
      wait: true,
      error: function() {
        Msg.stop("save", { error: "e_req" });
      },
      success: () => {
        Msg.stop("save");
        this.hide();
      }
    });
  },
  action_client_settings: function() {
    const modal = new View$1.Modal({
      parent: this.getRoot(),
      title: "l_devices",
      view: new ViewClients.ClientManager({
        parent: this.getRoot(),
        collection: App.clients
      })
    });
    modal.show();
  },
  postInit: function(options) {
    this.collection = this.options.collection;
  },
  renderMenu: function() {
    const model = this.collection.get(this.id);
    let availableClients = model.getAccessibleClients(App.clients);
    this.$el.empty();
    this.$el.append(LI({ "class": "xview" }, SPAN(T("a_select_device"))), LI({ "class": "divider" })).append(availableClients.map(function(client) {
      return LI(client.id == model.get("client_id") ? A({ "style": "font-weight:bold;" }, I({ "class": "fa fa-check" }), " ", client.getInfo()) : A({
        "data-action": "menu client change",
        "data-action-param": client.id
      }, I({ "class": client.getIcon() }), " ", client.getInfo()));
    })).append(LI({ "class": "divider" }), LI(A({
      "data-action": "menu client settings"
    }, I({ "class": "fa fa-edit" }), " ", T("a_edit"))));
  }
});
const SieveContextMenu = View$1.ContextMenu.extend({
  name: "SieveContextMenu",
  actions: {
    "menu check changes": {
      fn: "action_check_for_changes"
    },
    "menu del": {
      fn: "action_del"
    },
    "menu del permanent": {
      fn: "action_del_permanent"
    },
    "menu duplicate": {
      fn: "action_duplicate"
    },
    "menu edit": {
      fn: "action_edit"
    },
    "menu_create_tpl": {
      fn: "action_create_tpl"
    }
  },
  action_check_for_changes: function() {
    const model = this.collection.get(this.id);
    const ids = [this.id];
    let cId = model.get("client_id");
    if (cId !== C.CLIENT_WEB) {
      Service$1.service.checkNow(ids);
    } else {
      Msg.info("m_check_local_only");
    }
    this.hide();
    if (!Service$1.service.active) {
      Msg.error("m_checks_paused");
    }
  },
  action_create_tpl: function() {
    let team = get_store_value(params).team;
    push(`/w/${team}/tpls/add-from/${this.id}.id`);
    this.hide();
  },
  action_del: function() {
    const model = this.collection.get(this.id);
    Msg.start("discard", "l_loading");
    model.save("state", C.STATE_DISCARD, {
      patch: true,
      error: function() {
        Msg.stop("discard", { error: "e_req" });
      },
      success: () => {
        model.collection.remove(model);
        Msg.stop("discard");
        this.hide();
      }
    });
  },
  action_duplicate: function() {
    let team = get_store_value(params).team;
    push(`/w/${team}/sieve/dup/${this.id}.id`);
    this.hide();
  },
  action_del_permanent: function() {
    const model = this.collection.get(this.id);
    Msg.start("destroy", "l_loading");
    model.destroy({
      error: () => {
        Msg.stop("destroy", { error: "e_req" });
      },
      success: () => {
        Msg.stop("destroy");
        this.hide();
      }
    });
  },
  action_edit: function() {
    console.log(get_store_value(params));
    let team = get_store_value(params).team;
    push(`/w/${team}/sieve/edit/${this.id}.id`);
    this.hide();
  },
  onActionAdd: function(model) {
    if (model.id)
      return;
    Msg.start("save", "m_saving");
    model.save(null, {
      error: () => {
        Msg.stop("save", { error: "e_req" });
      },
      success: () => {
        Msg.stop("save", { info: "m_saved_action" });
      }
    });
  },
  onActionChange: function(model) {
    if (!model.id) {
      const data = model.changed;
      model.once("sync", () => {
        model.set(data);
      }, this);
    } else {
      Msg.start("save", "m_saving");
      model.save(null, {
        silent: true,
        error: () => {
          Msg.stop("save", { error: "e_req" });
        },
        success: () => {
          Msg.stop("save", { info: "m_saved_action" });
        }
      });
    }
  },
  onActionRemove: function(model) {
    if (!model.id)
      return;
    Msg.start("save", "m_saving");
    model.destroy({
      error: () => {
        Msg.stop("save", { error: "e_req" });
      },
      success: () => {
        Msg.stop("save", { info: "m_deleted_action" });
      }
    });
  },
  postInit: function(options) {
    this.collection = this.options.collection;
  },
  renderMenu: function() {
    const model = this.collection.get(this.id);
    const actions = new Model$2.SieveActions(null, { parent: model });
    if (!model) {
      this.$el.text("Model not found:" + this.id);
      return this;
    }
    actions.fetch({ data: { state: 0 } });
    this.actionEditor = new SieveActionsEditor({
      actions,
      sieve: model,
      parent: this
    });
    this.$el.empty();
    if (Supports.agents.local) {
      this.$el.append(LI(A({ "data-action": "menu check changes" }, T("a_check_changes"))));
    }
    this.$el.append(LI(A({ "data-action": "menu edit" }, T("a_edit_options"))), LI(A({ "data-action": "menu duplicate" }, T("a_duplicate"))), LI(A({ "data-action": "menu_create_tpl" }, SPRINTF("a_action_object", "a_create", "l_tpl"))), LI({ "class": "divider" }), LI({ "class": "xview" }, this.actionEditor.render().el), LI({ "class": "divider" }), LI(A({ "data-action": "menu del" }, T("a_move_to_trash"))), LI(A({ "data-action": "menu del permanent" }, T("a_del_permanent"))));
    this.listenTo(this.actionEditor.models, "add", this.onActionAdd);
    this.listenTo(this.actionEditor.models, "change", this.onActionChange);
    this.listenTo(this.actionEditor.models, "remove", this.onActionRemove);
  }
});
const SievesListMenu = View$1.ContextMenu.extend({
  name: "SievesListMenu",
  renderMenu: function() {
    this.$el.empty().append(LI({ "class": "xview" }, DIV(LABEL(T("l_sort_by"), ": "), this.selSort = SELECT({ "class": "pull-right" }, OPTION({ value: "-ts_data" }, T("l_time_changed_on")), OPTION({ value: "name" }, T("l_name")), OPTION({ value: "client_id" }, T("l_device"))))), LI({ "class": "xview" }, DIV(LABEL(T("l_page_size"), ": "), this.selPageSize = SELECT({ "class": "pull-right" }, OPTION({ value: 5 }, 5), OPTION({ value: 20 }, 20), OPTION({ value: 50 }, 50), OPTION({ value: 100 }, 100), OPTION({ value: 200 }, "200!!"), OPTION({ value: 500 }, "500!!!")))), LI({ "class": "xview" }, DIV(LABEL(T("l_device_filter"), ": "), this.selClientFilter = SELECT({ "class": "pull-right" }, OPTION({ value: 1 }, T("l_devices_all")), OPTION({ value: 2 }, T("l_device_this"))))));
    this.selSort.value = App.store.get("ui.list.sortby") || "-ts_data";
    this.selPageSize.value = App.store.get("ui.list.pagesize") || "50";
    this.selClientFilter.value = App.store.get("ui.list.clientfilter") || "1";
    $$3(this.selSort).change(() => {
      App.store.set("ui.list.sortby", this.selSort.value);
      this.parent.reload();
    });
    $$3(this.selPageSize).change(() => {
      const size = parseInt(this.selPageSize.value);
      App.store.set("ui.list.pagesize", size);
      this.parent.reload(true);
    });
    $$3(this.selClientFilter).change(() => {
      App.store.set("ui.list.clientfilter", this.selClientFilter.value);
      this.parent.reload(true);
    });
  }
});
const SievesPageMenu = View$1.ContextMenu.extend({
  name: "SievesPageMenu",
  actions: {
    "menu topage": { fn: "action_topage" }
  },
  action_topage: function(n) {
    this.parent.navToPage(parseInt(n));
    this.hide();
  },
  renderMenu: function() {
    const { limit, nPages, total_count } = this.parent.collection.info();
    this.$el.empty().append(_$2.map(_$2.range(0, nPages), function(n) {
      return LI(A({
        "data-action": "menu topage",
        "data-action-param": n
      }, n * limit + 1 + " - " + Math.min((n + 1) * limit, total_count)));
    })).css({
      maxHeight: 600,
      overflowY: "auto",
      fontSize: ".8em"
    });
  }
});
var Sieves = View$1.Entities.extend({
  name: "Sieves",
  actions: {
    "action_be_action_add": { fn: "action_be_action_add" },
    "action_be_action_remove": { fn: "action_be_action_remove" },
    "action_be_config": { fn: "action_be_config" },
    "action_be_device": { fn: "action_be_device" },
    "action_be_schedule": { fn: "action_be_schedule" },
    "action_be_switch_on": { fn: "action_be_switch_on" },
    "action_be_switch_off": { fn: "action_be_switch_off" },
    "action_global_actions": { fn: "action_global_actions" },
    "action_global_rules": { fn: "action_global_rules" },
    "sieve c4c": { fn: "action_check_for_changes" },
    "sieve client menu": { fn: "action_client_menu" },
    "sieve context menu": { fn: "action_context_menu" },
    "sieve del": { fn: "action_del" },
    "sieve del permanent": { fn: "action_del_permanent" },
    "sieve label apply": { fn: "action_apply_label" },
    "sieve list menu": { fn: "action_list_menu" },
    "sieve log menu": { fn: "action_log_menu" },
    "sieve mark_read": { fn: "action_mark_read" },
    "sieve mark_unread": { fn: "action_mark_unread" },
    "sieve nav next": { fn: "action_next" },
    "sieve nav prev": { fn: "action_prev" },
    "sieve nav topage menu": { fn: "action_topage_menu" },
    "sieve restore": { fn: "action_restore" },
    "sieve schedule menu": { fn: "action_schedule_menu" },
    "sieve select all": { fn: "action_select_all" },
    "sieve select none": { fn: "action_select_none" },
    "sieve select read": { fn: "action_select_read" },
    "sieve select unread": { fn: "action_select_unread" },
    "sieve switch": { fn: "action_switch_on_off" },
    "sieve sync": { fn: "action_sync" },
    "sieve view": { fn: "action_view", doc: "View sieve details" }
  },
  events: {
    "click .xselect-all": "event_check"
  },
  ViewClass: SieveDetail,
  action_apply_label: function(id, target) {
    const models = this.getSelectedModels();
    Msg.info("l_loading");
    async$2.eachSeries(models, function(model, callback) {
      let tags = model.get("tags");
      if (tags) {
        if (tags.indexOf(id) >= 0) {
          return callback();
        }
        tags += "," + id;
      } else {
        tags = id;
      }
      model.save("tags", tags, {
        patch: true,
        error: function() {
          callback("e_req");
        },
        success: function() {
          callback();
        }
      });
    }, function(err) {
      if (err) {
        Msg.error("e_req");
      } else {
        Msg.reset();
      }
    });
  },
  action_be_action_add: function() {
    const sieve = new Backbone$3.Model();
    const actions = new Model$2.SieveActions(null, { parent: sieve });
    const actionEditor = new SieveActionsEditor({
      actions,
      sieve,
      parent: this
    }).render();
    const modal = new View$1.SaveDiscardModal({
      name: "BatchEdit$ActionAddModal",
      parent: this,
      title: "Add Actions - Batch Editor",
      view: actionEditor
    });
    modal.on("save", async () => {
      const ids = this.getSelectedIds();
      const actions2 = actionEditor.getPosts();
      try {
        for (let i = 0; i < actions2.length; i += 1) {
          const doc = actions2[i].toJSON();
          await Api.api("/batch/sieves/actions", "POST", __spreadProps(__spreadValues({}, doc), { ids }));
        }
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.on("discard", function() {
      modal.remove();
    });
    modal.show();
    setTimeout(() => actionEditor.$(".dropdown-toggle").click(), 10);
  },
  action_be_action_remove: function() {
    const modal = new View$1.PromptModal({
      name: "BatchEdit$ActionRemoveModal",
      parent: this.getRoot(),
      title: "Remove Actions - Batch Edit",
      a_save: "Remove",
      msg: "This action will remove all actions for selected monitors. Remove all actions?"
    });
    modal.on("save", async () => {
      const ids = this.getSelectedIds();
      try {
        await Api.api("/batch/sieves/actions", "PUT", { ids, state: C.STATE_DEL });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.show();
  },
  action_be_config: function() {
    const selectedModels = this.getSelectedModels();
    const model = new Model$2.Sieve({
      content_type: C.TYPE_HTML,
      config: selectedModels[0].get("config").clone(),
      uri: selectedModels[0].get("uri")
    });
    openConfigEditor(model, "Config - Batch Edit", async (modal) => {
      Msg.info("l_loading");
      modal.remove();
      const ids = this.getSelectedIds();
      const config = model.toJSON().config;
      try {
        await Api.api("/batch/sieves", "PUT", { ids, config });
        Msg.reset();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
  },
  action_be_device: function() {
    const selectedModels = this.getSelectedModels();
    if (selectedModels.length == 0) {
      return;
    }
    const modelOne = selectedModels[0];
    const model = new Model$2.Sieve({
      content_type: C.TYPE_HTML,
      client_id: modelOne.get("client_id")
    });
    const clientSelector = new ViewClients.ClientSelector({ model });
    const view = new View$1.Base({
      el: DIV({ style: "margin: 5px;" }, clientSelector.el)
    });
    const modal = new View$1.SaveDiscardModal({
      name: "BatchEdit$Device",
      parent: this,
      title: "Device - Batch Editor",
      view
    });
    modal.on("save", async () => {
      try {
        const ids = this.getSelectedIds();
        const client_id = model.get("client_id");
        const proxy_id = model.get("proxy_id");
        const session_id = model.get("session_id");
        await Api.api("/batch/sieves", "PUT", { ids, client_id, proxy_id, session_id });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.on("discard", function() {
      modal.remove();
    });
    modal.show();
  },
  action_be_schedule: function() {
    const model = new Backbone$3.Model({ schedule: new Model$2.Schedule() });
    const scheduleEditor = new SieveScheduleEditor({
      model,
      parent: this
    }).render();
    const modal = new View$1.SaveDiscardModal({
      name: "BatchEdit$ActionAddModal",
      parent: this,
      title: "Schedule - Batch Editor",
      view: scheduleEditor
    });
    modal.on("save", async () => {
      const ids = this.getSelectedIds();
      const schedule = model.toJSON().schedule;
      try {
        await Api.api("/batch/sieves", "PUT", { ids, schedule });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.on("discard", function() {
      modal.remove();
    });
    modal.show();
  },
  action_be_switch_on: function() {
    const ids = this.getSelectedIds();
    const modal = new View$1.PromptModal({
      name: "BatchEdit$ActionRemoveModal",
      parent: this.getRoot(),
      title: "Switch On Monitors - Batch Edit",
      a_save: "Switch ON",
      msg: `${ids.length} monitors will be switched ON.`
    });
    modal.on("save", async () => {
      try {
        await Api.api("/batch/sieves", "PUT", { ids, state: C.STATE_READY });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.show();
  },
  action_be_switch_off: function() {
    const ids = this.getSelectedIds();
    const modal = new View$1.PromptModal({
      name: "BatchEdit$ActionRemoveModal",
      parent: this.getRoot(),
      title: "Switch Off Monitors - Batch Edit",
      a_save: "Switch OFF",
      msg: `${ids.length} monitors will be switched OFF.`
    });
    modal.on("save", async () => {
      try {
        await Api.api("/batch/sieves", "PUT", { ids, state: C.STATE_PAUSED });
        modal.remove();
      } catch (e) {
        console.error(e);
        Msg.error(`Please try again later - error in batch action ${e.message || e.msg}`);
      }
    });
    modal.show();
  },
  action_global_actions: function() {
    showGlobalActionEditor();
  },
  action_global_rules: function() {
    showGlobalRuleEditor();
  },
  action_run_cloud_sieves: async function(models) {
    Msg.info("l_loading");
    const cloudIds = _$2.pluck(_$2.filter(models, function(model) {
      return model.get("client_id") === C.CLIENT_WEB;
    }), "id");
    if (cloudIds.length > 0) {
      try {
        let sieveRunRes = await fetch(`${URL_UTILS}/sieve/run`, {
          method: "POST",
          credentials: "include",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ids: cloudIds })
        });
        if (sieveRunRes.ok) {
          Msg.info("m_started_check_for_changes");
        } else {
          let resData = await sieveRunRes.json();
          console.error("Could not check for changes", resData);
          Msg.error("m_check_for_changes_failed");
        }
      } catch (err) {
        console.error("Could not check for changes", err);
        Msg.error("m_check_for_changes_failed");
      }
    }
  },
  action_check_for_changes: async function(target) {
    const models = this.getSelectedModels();
    if (!Supports.agents.local) {
      this.action_run_cloud_sieves(models);
      return;
    }
    const ids = _$2.pluck(_$2.filter(models, function(model) {
      return model.get("client_id") !== C.CLIENT_WEB;
    }), "id");
    Service$1.service.checkNow(ids);
    if (models.length > ids.length) {
      Msg.info("m_check_local_only");
    }
    if (!Service$1.service.active) {
      Msg.error("m_checks_paused");
    }
  },
  action_client_menu: function(id, target) {
    this.clientMenu || (this.clientMenu = new SieveClientMenu({
      parent: this,
      collection: this.collection
    }));
    this.clientMenu.toggle(id, target.nodeName == "I" ? target.parentNode : target);
  },
  action_context_menu: function(id, target) {
    this.contextMenu || (this.contextMenu = new SieveContextMenu({
      parent: this,
      collection: this.collection
    }));
    this.contextMenu.toggle(id, target.nodeName == "I" ? target.parentNode : target);
  },
  action_del: function() {
    const models = this.getSelectedModels();
    async$2.map(models, (model, callback) => {
      model.save("state", C.STATE_DISCARD, {
        patch: true,
        error: function() {
          callback(new Error("sieve:del:err"));
        },
        success: function() {
          model.collection.remove(model);
          callback();
        }
      });
    }, (err) => {
      if (err) {
        Msg.error("sieve:del:err");
      } else {
        const value = models.length;
        const msg = i18n.translate("m_del_item").ifPlural(value, T("m_del_items")).fetch(value);
        Msg.info(msg);
      }
    });
    return true;
  },
  action_del_permanent: function() {
    const models = this.getSelectedModels();
    async$2.eachLimit(models, 5, function(model, callback) {
      model.destroy({
        error: function() {
          callback(new Error("sieve:del:err"));
        },
        success: function() {
          callback();
        }
      });
    }, (err) => {
      if (err) {
        Msg.error("sieve:del:err");
      } else {
        Msg.info("Permanently deleted selected items.");
      }
    });
  },
  action_list_menu: function(param, target) {
    this.listMenu || (this.listMenu = new SievesListMenu({
      parent: this
    }));
    this.listMenu.toggle("list", $$3(target).parent(".btn-group")[0]);
  },
  action_log_menu: function(id, target) {
    this.logMenu || (this.logMenu = new LogMenu({
      parent: this,
      collection: this.collection
    }));
    this.logMenu.toggle(id, target ? target : this.getRow(id).$el.find(".xsieve-ts-data")[0]);
  },
  action_mark_read: function() {
    const models = this.getSelectedModels();
    async$2.map(models, function(model, callback) {
      model.save({
        ts_view: dateToDBFormat(Date.now())
      }, {
        patch: true,
        error: function() {
          callback(new Error("sieve:update:err"));
        },
        success: function() {
          callback();
        }
      });
    }, function(err) {
      if (err) {
        Msg.error("sieve:update:err");
      }
    });
  },
  action_mark_unread: async function() {
    const models = this.getSelectedModels();
    for (let i = 0; i < models.length; i += 1) {
      let model = models[i], ts_view = dateToDBFormat(0);
      await Api.api(`/sieves/${model.id}`, "PATCH", { ts_view });
      model.set({ ts_view });
    }
  },
  action_next: function() {
    let { currentPage, nPages } = this.collection.info();
    if (currentPage >= nPages - 1)
      return;
    this.navToPage(currentPage + 1);
  },
  action_prev: function() {
    let { currentPage } = this.collection.info();
    if (currentPage == 0)
      return;
    this.navToPage(currentPage - 1);
  },
  action_topage_menu: function(param, target) {
    this.pageMenu || (this.pageMenu = new SievesPageMenu({
      parent: this
    }));
    this.pageMenu.toggle("list", target);
  },
  action_restore: async function() {
    const models = this.getSelectedModels();
    let sieveConstraint = {};
    try {
      sieveConstraint = await checkSieveConstraint(models.length);
    } catch (e) {
      console.error(e);
      sieveConstraint = {
        isOverLimit: false
      };
    }
    if (sieveConstraint.isOverLimit) {
      Msg.error("m_monitor_limit");
      return;
    }
    async$2.map(models, function(model, callback) {
      model.save("state", C.STATE_READY, {
        patch: true,
        error: function() {
          callback(new Error("sieve:restore:err"));
        },
        success: function() {
          model.collection.remove(model);
          callback();
        }
      });
    }, (err) => {
      if (err) {
        Msg.error("sieve:restore:err");
      } else {
        Msg.info("m_restored_from_trash");
      }
    });
  },
  action_schedule_menu: function(id, target) {
    this.scheduleMenu || (this.scheduleMenu = new ScheduleMenu({
      parent: this,
      collection: this.collection
    }));
    this.scheduleMenu.toggle(id, target);
  },
  action_select_all: function() {
    this._select(_$2.identity, true);
  },
  action_select_none: function() {
    this._select(_$2.identity, false);
  },
  action_select_read: function() {
    this.action_select_none();
    this._select(function(view) {
      return view.model.isRead();
    }, true);
  },
  action_select_unread: function() {
    this.action_select_none();
    this._select(function(view) {
      return !view.model.isRead();
    }, true);
  },
  action_switch_on_off: function(id) {
    const model = this.collection.get(id);
    const state = model.get("state");
    const toggledState = state == C.STATE_READY ? C.STATE_PAUSED : C.STATE_READY;
    Msg.start("sieve:save", { info: "l_saving" });
    model.save(null, {
      data: { state: toggledState },
      patch: true,
      err: function(err, res2) {
        Msg.stop("sieve:save", { error: "e_req" });
      },
      success: function() {
        Msg.stop("sieve:save");
        model.set("state", toggledState);
      }
    });
  },
  action_sync: function() {
    if (!Supports.agents.local)
      return;
    Msg.info("l_syncing");
    let complete = false;
    Service$1.service.SyncMan.sync(true, function(err) {
      complete = true;
      if (err) {
        Service$1.service.initSync(function(err2) {
          if (err2) {
            Msg.error(err.msg || err.message || JSON.stringify(err));
          }
        });
      } else {
        Msg.reset();
      }
    });
    setTimeout(function() {
      if (!complete) {
        Msg.info("l_syncing_wait");
      }
    }, 5e3);
  },
  action_view: function(id) {
    let base2 = this._getBasePath();
    let path = base2;
    if (!this.modelView || this.modelView.model.id != id) {
      path += `${id}.id`;
    }
    let queryStr = lib.stringify(this.route.query);
    if (queryStr.length > 0) {
      path += `?${queryStr}`;
    }
    push(path);
  },
  event_check: function(e) {
    this._select(_$2.identity, e.target.checked);
  },
  _getBasePath() {
    let { module, team, prefix, data } = this.route;
    let base2 = `/w/${team}/${module}/${prefix}/`;
    if (data) {
      base2 = base2 + `${data}.d/`;
    }
    return base2;
  },
  _select: function(selector, selected) {
    _$2.each(this.views, function(view) {
      if (selector(view)) {
        view.setSelected(selected);
      }
    });
  },
  addOne: function(model, top) {
    if (!this.$list)
      return;
    const view = new SieveRow({ model, parent: this });
    const modelIndex = this.collection.indexOf(model);
    this.$list[top === true || modelIndex == 0 ? "prepend" : "append"](view.render().el);
    return view;
  },
  close_edit: function() {
    this.optsPanel.remove();
    this.opts = null;
  },
  recentFetchAndShow: function(id) {
    const tsModMax = this.collection.length > 0 ? this.collection.max((model) => new Date(model.get("ts_mod")).valueOf()).get("ts_mod") : new Date(0).toISOString();
    const tCollection = new Model$2.Sieves();
    Msg.start("fetch", { info: "l_loading" });
    tCollection.fetch({
      data: _$2.extend({
        "ts_mod.gt": tsModMax,
        "_opt": {}
      }, getQuery(this.route)),
      success: () => {
        Msg.stop("fetch");
        this.collection.add(tCollection["models"], { merge: true, at: 0 });
      }
    });
  },
  async fetchAndShow(route2, force = false) {
    const limit = App.store.get("ui.list.pagesize") || 50;
    let oldRoute = this.route;
    let routeKeys = ["team", "prefix", "data", "query"];
    let reloadList = force || !oldRoute || routeKeys.filter((key) => !_$2.isEqual(route2[key], oldRoute[key])).length > 0;
    this.route = __spreadValues({}, route2);
    if (reloadList) {
      Msg.start("fetch", { info: "l_loading" });
      this.collection.limit = limit;
      let currentPage = parseInt(route2.query.page || "1") - 1;
      await this.collection.goto(currentPage, {
        sort: false,
        data: _$2.extend({
          _opt: {
            order: [this.getSortField()],
            limit
          }
        }, getQuery(this.route)),
        success: (collection, resp, options) => {
          _$2.each(options.previousModels, function(model) {
            model.trigger("remove");
          });
        }
      });
      Msg.stop("fetch");
      this.onSelectionChange();
      if (this.collection.length == 0) {
        this.renderEmpty();
      } else {
        this.removeEmpty();
      }
      this.el.scrollIntoView();
    }
    if (route2.id) {
      this.show(route2.id);
    } else {
      this.removeModelView();
    }
  },
  reload(resetCurrentPage) {
    if (resetCurrentPage && this.route.query.page > 1) {
      push(this._getBasePath());
    } else {
      this.fetchAndShow(this.route, true);
    }
  },
  getRow: function(id) {
    return _$2.find(this.views, function(view) {
      return view.model.id == id;
    });
  },
  getSelectedIds: function() {
    return _$2.chain(this.children).select(function(child) {
      return child.isSelected && child.isSelected();
    }).map(function(child) {
      return child.model.id;
    }).value();
  },
  getSelectedModels: function() {
    return _$2.chain(this.children).select((child) => {
      return child.isSelected && child.isSelected();
    }).map((child) => {
      return this.collection.get(child.model.id);
    }).value();
  },
  getSortField: function() {
    const field = App.store.get("ui.list.sortby") || "-ts_data";
    this.collection.sortField = field;
    if (field == "name" && Supports.agents.local) {
      return "name nocase";
    }
    return field;
  },
  navToPage: function(n) {
    let base2 = this._getBasePath();
    if (n == 0 || !n) {
      let query = __spreadValues({}, this.route.query);
      delete query.page;
      let queryStr = lib.stringify(query);
      push(`${base2}?${queryStr}`);
    } else {
      let query = lib.stringify(__spreadProps(__spreadValues({}, this.route.query), { page: n + 1 }));
      push(`${base2}?${query}`);
    }
  },
  labelAddOne: function(model) {
    this.$labelList.append(LI(A({
      "href": "#",
      "data-action": "sieve label apply",
      "data-action-param": model.id
    }, model.get("name"))));
  },
  labelRemoveOne: function(model) {
  },
  labelReset: function() {
    this.$labelList.empty();
    this.labels.each(this.labelAddOne);
  },
  onChangeUnreadError: function(data) {
    const oldError = this.errorUnreadModel.get("error");
    const oldUnread = this.errorUnreadModel.get("unread");
    const { error, unread } = data;
    this.errorUnreadModel.set(data);
    let { currentPage } = this.collection.info();
    if (oldError < error && this.route.prefix == "error" && currentPage == 0) {
      this.recentFetchAndShow();
    }
    if (oldUnread < unread && this.route.prefix == "unread" && currentPage == 0) {
      this.recentFetchAndShow();
    }
  },
  onSelectionChange: function() {
    const n = this.getSelectedModels().length;
    if (n > 0) {
      $$3(this.tbar).addClass("xselected");
    } else {
      $$3(this.tbar).removeClass("xselected");
    }
  },
  onSieveInsert: _$2.debounce(function() {
    this.reload();
  }, 15e3, true),
  onSieveUpdate: function(e) {
    if (e.op == "I") {
      if (!this.collection.get(e.id)) {
        this.onSieveInsert();
      }
    }
  },
  onSort: function() {
    const newKeys = this.collection.pluck("id");
    const oldKeys = _$2.keys(this.views);
    if (!_$2.isEqual(newKeys, oldKeys)) {
      this.collection.each(function(model) {
        const view = this.views[model.id];
        view.reattach();
      }, this);
    }
  },
  postInit: function(options) {
    this.listenTo(this.collection, "sort", this.onSort);
    this.listenTo(this.collection, "sync", this.updatePageInfo);
    this.listenTo(this.collection, "prop:select", this.onSelectionChange);
    this.route = {};
    this.clients = options.clients;
    this.labels = options.labels;
    this.labels.on("add", this.labelAddOne);
    this.labels.on("remove", this.labelRemoveOne);
    this.labels.on("reset", this.labelReset);
    this.listenTo(instance$W, "sieves", this.onSieveUpdate);
    this.errorUnreadModel = new Backbone$3.Model();
    this.listenTo(instance$W, "user_states", this.onChangeUnreadError);
  },
  removeOne: function(model) {
    View$1.Entities.prototype.removeOne.call(this, model);
    if (this.model && this.model.id == model.id) {
      this.removeModelView();
    }
    model.trigger("remove");
  },
  renderBase: function() {
    params.subscribe(this.renderTBar);
    let list;
    let empty2;
    this.$el.append(this.renderTBar(), TABLE({ "class": "xlist", "cellpadding": 0, style: "box-shadow: 3px 3px 3px #ccc" }, COLGROUP(COL({ style: "width:28px" }), COL({ style: "width:28px" }), COL({ style: "width:304px; padding: 0 10px;" }), COL({ style: "" }), COL({ style: "width:72px; padding: 0 10px;" }), COL({ style: "width:72px" }), COL({ style: "width:42px" }), COL({ style: "width:40px" })), list = TBODY()), empty2 = DIV());
    this.$empty = $$3(empty2);
    this.$list = $$3(list);
  },
  renderTBar() {
    let $params = get_store_value(params) || {};
    let team = $params.team;
    let elExport;
    const labelList = UL({
      "class": "dropdown-menu",
      "style": "overflow-y:auto;max-height:" + ($$3(window).height() - 120) + "px"
    });
    let route2 = this.route;
    let tbar = DIV({
      "class": "xtbar xvbar-margin xalt" + (Supports.agents.local ? " xlocal" : ""),
      context: (route2 && route2.prefix) + (Supports.agents.local ? " local" : " cloud")
    }, DIV({ "class": "btn-group" }, INPUT({
      "class": "xselect-all",
      "type": "checkbox",
      "style": "margin: 0 6px 0 0;"
    }), BUTTON({
      "type": "button",
      "class": "dropdown-toggle xbtn-light",
      "data-toggle": "dropdown"
    }, SPAN({ "class": "caret" }), SPAN({ "class": "sr-only" }, "Dropdown Toggle")), UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({ "href": "#", "data-action": "sieve select all" }, T("l_all"))), LI(A({ "href": "#", "data-action": "sieve select none" }, T("l_none"))), LI(A({ "href": "#", "data-action": "sieve select read" }, T("l_read"))), LI(A({ "href": "#", "data-action": "sieve select unread" }, T("l_unread"))))), BUTTON({
      "data-action": "sieve c4c",
      "class": "btn btn-default",
      "context": "selected local notrash",
      "title": T("a_check_changes")
    }, I({ "class": "im-run" })), BUTTON({
      "data-action": "sieve restore",
      "class": "btn btn-default",
      "context": "trash"
    }, T("a_restore")), USER.account_id ? DIV({
      "class": "btn-group",
      context: "selected all notrash"
    }, A({
      "data-action": "sieve mark_read",
      "class": "btn btn-default",
      "context": "selected all notrash",
      "title": T("a_mark_read")
    }, I({ "class": "fa fa-check" })), BUTTON({
      "class": "btn btn-default dropdown-toggle",
      "data-toggle": "dropdown",
      style: "min-width: 20px"
    }, I({ "class": "caret" })), UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({
      tabindex: -1,
      href: "#",
      "data-action": "sieve mark_unread"
    }, T("Mark as unread"))))) : BUTTON({
      "data-action": "sieve mark_read",
      "class": "btn btn-default",
      "context": "selected all notrash",
      "title": T("a_mark_read")
    }, I({ "class": "fa fa-check" })), BUTTON({
      "data-action": "sieve del",
      "class": "btn btn-default",
      "context": "selected all notrash",
      "title": T("a_move_to_trash")
    }, I({ "class": "im-trash" })), BUTTON({
      "data-action": "sieve del permanent",
      "class": "btn btn-default",
      "context": "trash"
    }, T("a_del_permanent")), DIV({
      "class": "btn-group",
      "context": "selected all notrash",
      "title": T("l_label")
    }, BUTTON({ "class": "btn btn-default dropdown-toggle", "data-toggle": "dropdown" }, I({ "class": "fa fa-tags" }), " ", SPAN({ "class": "caret" })), labelList), BUTTON({
      "class": "btn btn-default",
      "context": "all nocloud",
      "data-action": "sieve sync",
      "title": T("l_sync")
    }, I({ "class": "fa fa-refresh" })), DIV({
      "class": "btn-group",
      "context": "all"
    }, BUTTON({ "class": "btn btn-default dropdown-toggle", "data-toggle": "dropdown" }, I({ "class": "fa fa-bars" }), " ", SPAN({ "class": "caret" })), UL({ "class": "dropdown-menu", "role": "menu" }, LI({ "class": "dropdown-submenu" }, A({ href: "javascript:void(0);" }, T("a_export")), elExport = UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({ href: "#/w/export/json/", "data-type": "json" }, "JSON")), LI(A({ href: "#/w/export/csv/", "data-type": "csv" }, "CSV")))), LI({ "class": "dropdown-submenu" }, A({ href: "javascript:void(0);" }, T("a_import")), UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({ href: `#/w/${team}/import/csv/` }, "CSV")), LI(A({ href: `#/w/${team}/import/json/` }, "JSON")))), LI(A({ href: `#/w/${team}/macros/` }, T("Macros"))), LI(A({ href: `#/w/${team}/profiles/` }, T("Profiles"))), LI(A({ href: `#/w/${team}/proxies/` }, T("Proxies"))), LI(A({ href: `#/w/${team}/tpls/all/` }, T("l_sieve_tpl_list"))), LI({ "class": "divider" }), LI(A({ "href": "javascript:void(0);", "data-action": "action_global_actions" }, T("Global Actions"))), LI(A({ "href": "javascript:void(0);", "data-action": "action_global_rules" }, T("Global Conditions"))), "")), DIV({
      "class": "btn-group mr0",
      "context": "selected all"
    }, BUTTON({ "class": "btn btn-default dropdown-toggle", "data-toggle": "dropdown" }, `${T("a_bulk_edit")} `, SPAN({ "class": "caret" })), !USER.id ? UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({ "href": "/ui/settings.html#general" }, T("Sign in")))) : UL({ "class": "dropdown-menu", "role": "menu" }, LI({ "class": "dropdown-submenu" }, A({ href: "#" }, "Actions"), UL({ "class": "dropdown-menu", "role": "menu" }, LI(A({ "href": "#", "data-action": "action_be_action_add" }, "Add")), LI({ "class": "divider" }), LI(A({ "href": "#", "data-action": "action_be_action_remove", "style": "color: red" }, "Remove All")))), LI(A({ "href": "#", "data-action": "action_be_config" }, T("Config"))), LI(A({ "href": "#", "data-action": "action_be_device" }, T("l_device"))), LI(A({ "href": "#", "data-action": "action_be_schedule" }, T("l_schedule"))), LI(A({ "href": "#", "data-action": "action_be_switch_on" }, T("Switch ON"))), LI(A({ "href": "#", "data-action": "action_be_switch_off" }, T("Switch OFF"))), "")), DIV({ "class": "btn-group right xoptional" }, BUTTON({
      "class": "btn btn-default",
      "data-action": "sieve list menu"
    }, I({ "class": "fa fa-cog" }), " ", SPAN({ "class": "caret" }))), UL({ "class": "pagination pagination-sm right", "style": "margin: 0 5px 0 0" }, LI(A({ "href": "", "data-action": "sieve nav topage menu" }, this.pageInfo = SPAN(T("l_loading")), " ", I({ "class": "fa fa-caret-down" }))), this.pagePrev = LI(A({ "href": "", "data-action": "sieve nav prev" }, I({ "class": "fa fa-chevron-left" }))), this.pageNext = LI(A({ "href": "", "data-action": "sieve nav next" }, I({ "class": "fa fa-chevron-right" })))));
    this.$labelList = $$3(labelList);
    elExport.onclick = (e) => {
      e.preventDefault();
      let path = location.hash.slice(1);
      if (path.startsWith(`/w/${team}/export/`)) {
        return;
      }
      let { prefix, data, id, query } = this.route;
      let exportQueryData = { prefix, data, id, query };
      push(`/w/${team}/export/${e.target.dataset.type}/${lib.stringify(exportQueryData)}.d/`);
    };
    if (this.tbar) {
      this.tbar.replaceWith(tbar);
    }
    this.tbar = tbar;
    this.updatePageInfo();
    this.labelReset();
    return this.tbar;
  },
  removeEmpty: function() {
    this.$empty.empty();
  },
  renderEmpty: function() {
    App.sieves.reset();
    const isInbox = this.route.prefix == "all";
    this.$empty.empty().append(isInbox && !Supports.agents.local ? DIV({ "class": "pt-4" }, P({ style: "font-size: 1em" }, "This is webapp's Watchlist. It contains list of all monitors. ", "Start monitoring web by adding a monitor using the Add button. ", "Install Distill's browser extension to get the fastest web monitoring experience: ", A({ href: "https://distill.io/apps/web-monitor" }, "download extension."), BR(), A({ "class": "mt3", href: "https://distill.io/help/watchlist" }, "Learn More"))) : H4("No monitor found."));
  },
  renderModelView: function(model, view) {
    const row = this.getRow(model.id);
    row && row.showDetail(view.render());
  },
  show: function(id) {
    if (this.model) {
      if (this.model.id == id) {
        return;
      }
      this.removeModelView();
    }
    this.model = this.collection.get(id);
    if (this.model) {
      return this.showModelView(this.model);
    } else {
      return this.show404();
    }
  },
  show404: function() {
    console.trace();
    Msg.error("Monitor not found");
    return false;
  },
  showDefault: function() {
    this.removeModelView();
  },
  showModelView: function(model) {
    model.markRead();
    return Sieves.__super__.showModelView.call(this, model);
  },
  updatePageInfo: function() {
    const coll = this.collection;
    const { currentPage, offset, nPages, total_count } = coll.info();
    const { length } = coll;
    this.pageInfo.textContent = SPRINTF("m_start_end_of_total", offset + (length > 0 ? 1 : 0), offset + length, total_count);
    $$3(this.pagePrev)[currentPage <= 0 ? "addClass" : "removeClass"]("disabled");
    $$3(this.pageNext)[currentPage + 1 >= nPages ? "addClass" : "removeClass"]("disabled");
  }
});
var ViewSieve = {
  SieveActionsEditor,
  Sieves,
  SieveOptions,
  SieveScheduleEditor,
  TagsEditor
};
function formatTime(ts, trim) {
  if (!ts)
    return "";
  const then = moment$2(ts);
  const now = moment$2();
  const diff = now.diff(then) / 1e3 | 0;
  if (diff < 60) {
    return then.format("h:mm a");
  } else if (diff < 24 * 3600 && now.date() == then.date()) {
    return then.format("h:mm a");
  } else if (diff < 365 * 24 * 3600) {
    return trim ? then.format("MMM DD") : then.format("MMM DD h:mm a");
  } else {
    return trim ? then.format("YYYY/MM") : then.format("h:mm a, MMM DD, YYYY");
  }
}
function dateToDBFormat(date) {
  return moment$2(date).format();
}
const STAGE_PICK_FILE = 1;
const STAGE_MARK_DATA = 2;
const STAGE_OPTIONS = 3;
const STAGE_IMPORT = 4;
const KNOWN_COLUMNS = [
  "name",
  "url",
  "labels"
];
class CSVMarker extends Base$1 {
  init() {
    this.state.loading = true;
    setTimeout(() => {
      const { result } = this.state;
      const fields = result.meta.fields;
      const normalizedFields = fields.map((field) => field.toLowerCase());
      const rows = result.data;
      result.data;
      const index = {};
      for (let i = 1; i < fields.length; i += 1) {
        const field = fields[i];
        if (field in KNOWN_COLUMNS) {
          index[field] = i;
        }
      }
      setTimeout(() => {
        this.setState({
          index,
          fields,
          normalizedFields,
          rows,
          loading: false
        });
      }, 200);
    }, 50);
    this.inputFields = {};
  }
  getInputFields() {
    const inputFields = {};
    const selects = this.el.querySelectorAll("select");
    for (let i = 0; i < selects.length; i += 1) {
      const val = selects[i].value;
      if (val && val.length > 0) {
        inputFields[val] = this.state.fields[i];
      }
    }
    return inputFields;
  }
  getRows() {
    const fields = this.getInputFields();
    const rows = this.state.result.data;
    return rows.map((row) => {
      const newRow = {};
      for (const name in fields) {
        newRow[name] = row[fields[name]];
      }
      return newRow;
    });
  }
  onSelectHeader(e, index) {
  }
  createTpl({ loading, index, fields, normalizedFields, rows }) {
    return loading ? html`Loading...` : html`
      <div class='page-header'>
        <h3>
          Data
          <small>
            Column headers show identified column attributes. You can edit them to manually specify or correct them.
          </small>
        </h3>
      </div>
      <div style='max-height: 200px; overflow-y: scroll;'>
        <table>
        <thead style=''>
          <tr style='border-top: solid 1px #ccc;'>
            ${normalizedFields.map((field, index2) => html`
            <th style='max-width: 100px; padding: 5px; border: solid 1px #ccc;'>
              <div><select @change=${(e) => this.onSelectHeader(e, index2)}>
                <option></option>
                ${KNOWN_COLUMNS.map((col) => html`<option value='${col}' ?selected=${field == col}>${col}</option>`)}
              </select></div>
            </th>`)}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => html`
            <tr style='border-bottom: solid 1px #ccc; white-space: nowrap;'>
              ${fields.map((field) => html`<td style='max-width: 200px; overflow: hidden; padding: 5px; border: solid 1px #ccc' title=${row[field]}>${row[field]}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    </div>

    `;
  }
}
class CommonOptions extends Base$1 {
  init() {
    this.model = new Model$2.Sieve();
    this.actions = new Model$2.SieveActions(null, {});
    this.actionEditor = new ViewSieve.SieveActionsEditor({
      actions: this.actions
    }).render();
    this.clientSelector = new ViewClients.ClientSelector({
      model: this.model
    });
    this.scheduleEditor = new ViewSieve.SieveScheduleEditor({
      model: this.model
    }).render();
    this.tagsEditor = new ViewSieve.TagsEditor({
      model: this.model
    }).render();
  }
  getOptions() {
    return __spreadProps(__spreadValues({}, this.model.toJSON()), { actions: this.actions.toJSON() });
  }
  createTpl({ inputFields }) {
    return html`
      <div class='page-header'>
        <h3>
          Options
        </h3>
      </div>

      <div class='form-horizontal'>

        <div class='form-group'>
          <label class='control-label col-md-2'>Device</label>
          <div class='col-md-10'>
            ${this.clientSelector.el}
          </div>
        </div>

        <div class='form-group'>
          <label class='control-label col-md-2'>Schedule</label>
          <div class='col-md-10'>
            ${this.scheduleEditor.el}
          </div>
        </div>

        <div class='form-group'>
          <label class='control-label col-md-2'>Actions</label>
          <div class='col-md-10'>
            ${this.actionEditor.el}
          </div>
        </div>

        <div class='form-group'>
          <label class='control-label col-md-2'>Labels</label>
          <div class='col-md-10'>
            ${this.tagsEditor.el}
          </div>
        </div>
      </div>`;
  }
}
class CSVImporter extends Base$1 {
  init() {
    this.reset();
  }
  reset() {
    this.setState({
      progress: { index: 0, total: 0, msg: "" },
      result: null,
      stage: STAGE_PICK_FILE,
      errorImport: null
    });
  }
  async onImport() {
    this.state.stage = STAGE_IMPORT;
    try {
      const rows = this.csvMarker.getRows();
      const options = this.commonOptions.getOptions();
      let constraint;
      try {
        constraint = await checkSieveConstraint(rows.length);
      } catch (e) {
        console.error(e);
        constraint = { isOverLimit: false };
      }
      if (constraint.isOverLimit) {
        this.state.errorImport = { msg: `Monitor limit exceeded` };
        return;
      }
      this.importAll(rows, options);
    } catch (e) {
      console.error(e);
      this.state.errorImport = { msg: `Import failed: ${e.message || e.msg}` };
    }
  }
  async importAll(sieves, options) {
    const state = this.state;
    state.progress = { index: 0, total: sieves.length, msg: "Importing labels..." };
    for (let i = 0; i < sieves.length; i += 1) {
      const sieve = sieves[i];
      state.progress = __spreadProps(__spreadValues({}, state.progress), { msg: `Importing ${sieve.url}` });
      await this.importOne(sieve, options);
    }
    state.progress = __spreadProps(__spreadValues({}, state.progress), { msg: `Imported ${sieves.length}` });
  }
  async importOne(sieve, _a) {
    var _b = _a, { tags, actions } = _b, sieveOptions = __objRest(_b, ["tags", "actions"]);
    if (sieve.rule) {
      const rule = await Api.api("/rules", "POST", { config: sieve.rule });
      sieve.rule_id = rule.id;
    }
    const labels = [], labelsStr = sieve.labels || "";
    delete sieve.label;
    if (labelsStr.length > 0) {
      let rowLevelLabels = await App.labels.getOrCreateLabels(labelsStr);
      labels.push(...rowLevelLabels);
    }
    if (tags && tags.length > 0) {
      tags = tags.split(",");
      for (let i = 0; i < tags.length; i += 1) {
        labels.push(App.labels.get(tags[i]));
      }
    }
    sieve.tags = labels.map((l) => l.id).join(",");
    sieve.uri = sieve.url;
    delete sieve.url;
    let doc = _.extend({
      client_id: App.clients.defaultId,
      content_type: 2,
      config: JSON.stringify({
        "includeStyle": true,
        "ignoreEmptyText": true,
        "dataAttr": "text",
        "selections": [
          {
            "frames": [
              {
                "index": 0,
                "excludes": [],
                "includes": [
                  {
                    "type": "css",
                    "expr": "body"
                  }
                ]
              }
            ],
            "dynamic": true,
            "delay": 2
          }
        ]
      })
    }, sieve, sieveOptions);
    let savedSieve = await Api.api("/sieves", "POST", doc);
    for (let i = 0; i < actions.length; i += 1) {
      await Api.api(`/sieves/${savedSieve.id}/actions`, "POST", _.extend({
        sieve_id: savedSieve.id
      }, actions[i]));
    }
    this.state.progress = __spreadProps(__spreadValues({}, this.state.progress), { index: this.state.progress.index + 1 });
  }
  onBack() {
    this.state.stage -= 1;
  }
  onFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "utf-8");
    reader.onload = (e2) => this.onFileRead(e2.target.result);
    reader.onerror = (e2) => this.onFileReadError(e2);
    this.state.filename = file.name;
  }
  onFileRead(text2) {
    Papa.parse(text2, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        this.showData(result);
      }
    });
  }
  onFileReadError(e) {
    console.error("error reading file", e);
    this.state.errorFile = e.message;
  }
  onFileSelect(e) {
    this.el.querySelector("[type=file]").click();
  }
  onNextToOptions() {
    let errorMap;
    const inputFields = this.csvMarker.getInputFields();
    if (!inputFields.name == null) {
      errorMap = { key: "name", msg: "Missing name" };
    } else if (!inputFields.url) {
      errorMap = { key: "url", msg: "Missing URL" };
    } else {
      const [row1, row2] = this.state.resultOrig.data;
      const urlColumnName = inputFields.url;
      const url1 = row1[urlColumnName];
      const url2 = row2[urlColumnName];
      try {
        new URL(url1);
        new URL(url2);
      } catch (e) {
        console.error(urlColumnName, row1, e);
        errorMap = { key: "url", msg: "malformed url" };
      }
    }
    if (errorMap) {
      this.setState({ errorMap });
      return;
    }
    this.commonOptions = new CommonOptions({
      inputFields
    });
    this.state.stage = STAGE_OPTIONS;
  }
  showData(result) {
    this.state.resultOrig = result;
    this.state.stage = STAGE_MARK_DATA;
    this.csvMarker = new CSVMarker({ result });
  }
  createTpl({ csvText, progress, stage, errorMap, errorImport }) {
    const importing = progress.index < progress.total - 1;
    return html`
      <style> .actions { margin: 20px 0; }</style>
      <div class='xpage-header'>
        <h2>
          CSV 
          ${T("a_import")}
        </h2>
      </div>
      <div class='' style='padding: 10px; background-color: #fff; border-radius: 2px;'>
        ${stage == STAGE_PICK_FILE ? html`
          <div class='row'>
            <div class='col-md-4'>
              <input class='btn btn-default btn-lg' type='file' accept='.csv' style='display:none' @change=${(e) => this.onFileChange(e)}></input>
              <button class='btn btn-primary btn-lg' @click=${(e) => this.onFileSelect(e)}>
                Select CSV file to import monitors
              </button>
              ${stage > STAGE_PICK_FILE ? html`<span>File: ${this.state.filename}</span>` : ""}
            </div>
            <div class='col-md-8'>
              Please note that the file should have columns with following headers:
              <ul>
                <li>Name</li>
                <li>URL</li>
                <li class='hide'>Config (Optional)</li>
                <li>Labels (Optional)</li>
              </ul>
            </div>
          </div>` : ""}

        ${stage == STAGE_MARK_DATA ? html`
        <div>
          ${this.csvMarker.el}
          <div class='actions'>
            <button class='btn btn-default' @click=${(e) => this.onBack()}>Back</button>
            <button class='btn btn-primary' @click=${(e) => this.onNextToOptions()}>
              Next - configure options and actions
            </button>
          </div>
          ${errorMap ? html`<div class='error'>${errorMap.msg}</div>` : ""}
        </div>` : ""}

        ${stage == STAGE_OPTIONS ? html`
        <div>
          ${this.commonOptions.el}
          <div class='actions'>
            <button class='btn btn-default' @click=${(e) => this.onBack()}>Back</button>
            <button class='btn btn-primary' @click=${(e) => this.onImport()}>${T("a_import")}</button>
          </div>
        </div>` : ""}

      ${stage == STAGE_IMPORT && importing ? html`
        <div> <span>${progress.index}</span> of <span>${progress.total}</span> </div>
        <div>${progress.msg || ""}</div>
        ` : ""}

      ${stage == STAGE_IMPORT && !importing ? html`
        <div>${progress.msg || ""}
          <button class='btn btn-default' @click=${(e) => this.reset()}>Start Over</button>
        </div>` : ""}
      ${errorImport ? html`<div class='error'>${errorImport.msg}</div>` : ""}

    </div>`;
  }
  setActive(active) {
  }
}
const $$2 = window.jQuery;
const Importer = View$1.ActionProvider.extend({
  name: "importer",
  events: {
    "click .btn-primary": "event_click"
  },
  event_click: function() {
    this.doImport();
  },
  doImport: async function() {
    try {
      const text2 = this.input.value;
      const data = JSON.parse(text2);
      const actions = this.actions.toJSON();
      let sieveConstraint = {};
      try {
        sieveConstraint = await checkSieveConstraint(data.data.length);
      } catch (e) {
        console.error(e);
        sieveConstraint = {
          isOverLimit: false
        };
      }
      if (sieveConstraint.isOverLimit) {
        Msg.error("Monitor limit exceeded!");
        return;
      }
      await this.importAll(data, actions);
    } catch (e) {
      console.error(e);
      Msg.error("Failed to parse data. Invalid JSON.");
    }
  },
  fromJSON: function() {
    this.progress = 0;
    this.totalCount = 0;
    this.input.value = "";
    this.updateStatus();
  },
  importAll: async function(data, actions) {
    this.$(".btn-primary").button("loading");
    Msg.info("Importing labels...");
    try {
      const names = _.uniq(_.flatten(_.pluck(data.data, "tags")));
      const labels = await App.labels.getOrCreateLabels(names);
      const labelsMap = _.object(_.pluck(labels, "name"), _.pluck(labels, "id"));
      this.progress = 0;
      this.totalCount = data.data.length;
      this.updateStatus();
      let sieves = data.data;
      for (let i = 0; i < sieves.length; i += 1) {
        const sieve = sieves[i];
        await this.importOne(sieve, actions, labelsMap);
      }
      Msg.info("Import completed");
      this.$(".btn-primary").button("reset");
    } catch (e) {
      console.error("failed to import data:", e);
      Msg.error("Error importing data: " + e);
    }
  },
  importOne: async function(sieve, actions, labelsMap) {
    if (sieve.rule) {
      let rule = await Api.api("/rules", "POST", {
        config: sieve.rule
      });
      sieve.rule_id = rule.id;
    }
    if (sieve.tags) {
      sieve.tags = _.map(sieve.tags, function(name) {
        return labelsMap[name];
      }).join(",");
    }
    let res2 = await Api.api("/sieves", "POST", __spreadProps(__spreadValues({}, sieve), {
      client_id: App.clients.defaultId
    }));
    let sieve_id = res2.id;
    for (let i = 0; i < actions.length; i += 1) {
      let action = actions[i];
      await Api.api(`/sieves/${sieve_id}/actions`, "POST", __spreadProps(__spreadValues({}, action), { sieve_id }));
    }
    this.progress += 1;
    this.updateStatus();
  },
  updateStatus: function() {
    $$2(this.counter).text(this.progress);
    $$2(this.total).text(this.totalCount);
    if (this.totalCount > 0 && this.progress == this.totalCount) {
      $$2(this.msgStatus).text(" - Complete!");
    } else {
      $$2(this.msgStatus).text("");
    }
  },
  postInit: function() {
    this.actions = new Model$2.SieveActions(null, {});
    this.actionEditor = new ViewSieve.SieveActionsEditor({
      actions: this.actions,
      parent: this
    });
  },
  render: function() {
    this.$el.append(DIV({ "class": "xtbar  xvbar-margin" }, BUTTON({
      "class": "btn btn-default",
      "data-action": "go_back"
    }, I({
      "class": "fa fa-chevron-left"
    }), " Back")), H2({ "class": "xpage-header pb2 mb2" }, H2(this.title = SPAN(""), SPAN(T("a_import")))), DIV({ "class": "row" }, DIV({ "class": "col-md-5" }, H4({ "class": "pb2" }, "Actions for imported monitors"), this.actionEditor.render().el), DIV({ "class": "col-md-7" }, this.input = TEXTAREA({
      "class": "form-control",
      "style": "width:100%;min-height:300px",
      "placeholder": "Paste JSON data to import and click Import."
    }))), DIV({ "style": "margin-top: 20px;" }, BUTTON({ "class": "btn btn-primary" }, T("a_import")), " Imported: ", this.counter = SPAN("0"), " of ", this.total = SPAN("0"), this.msgStatus = SPAN()), DIV());
    return this;
  }
});
function create_if_block$f(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "error";
      attr(div, "class", "error");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$u(ctx) {
  let t;
  let div;
  let if_block = ctx[1] && create_if_block$f();
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      div = element("div");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t, anchor);
      insert(target, div, anchor);
      ctx[3](div);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      ctx[3](null);
    }
  };
}
function instance$u($$self, $$props, $$invalidate) {
  let { route: route2 } = $$props;
  getContext("watchlist:stores");
  let parent = getContext("view:root");
  let el;
  let view;
  let error;
  onMount(async () => {
    view = route2.prefix == "csv" ? new CSVImporter({}, { el }) : new Importer({ el, parent });
    if (view.render) {
      view.render();
    }
    return () => view.remove();
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$invalidate(2, route2 = $$props2.route);
  };
  return [el, error, route2, div_binding];
}
class Import extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$u, safe_not_equal, { route: 2 });
  }
}
function create_if_block$e(ctx) {
  let savemodal;
  let current;
  savemodal = new SaveModal({
    props: {
      onSave: ctx[7],
      title: T("Rename Label"),
      $$slots: { default: [create_default_slot$b] },
      $$scope: { ctx }
    }
  });
  savemodal.$on("close", ctx[11]);
  return {
    c() {
      create_component(savemodal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(savemodal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const savemodal_changes = {};
      if (dirty & 4100) {
        savemodal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      savemodal.$set(savemodal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(savemodal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(savemodal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(savemodal, detaching);
    }
  };
}
function create_default_slot$b(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      attr(input, "class", "form-control");
      attr(input, "type", "text");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[2]);
      if (!mounted) {
        dispose = listen(input, "input", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$t(ctx) {
  let li2;
  let a0;
  let t0_value = ctx[4].name + "";
  let t0;
  let a0_href_value;
  let t1;
  let div;
  let button;
  let t2;
  let ul;
  let li0;
  let a1;
  let i1;
  let t3;
  let t4_value = T("a_rename") + "";
  let t4;
  let t5;
  let li1;
  let a2;
  let i2;
  let t6;
  let t7_value = T("a_del") + "";
  let t7;
  let t8;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block$e(ctx);
  return {
    c() {
      li2 = element("li");
      a0 = element("a");
      t0 = text(t0_value);
      t1 = space();
      div = element("div");
      button = element("button");
      button.innerHTML = `<i class="fa fa-caret-down"></i>`;
      t2 = space();
      ul = element("ul");
      li0 = element("li");
      a1 = element("a");
      i1 = element("i");
      t3 = space();
      t4 = text(t4_value);
      t5 = space();
      li1 = element("li");
      a2 = element("a");
      i2 = element("i");
      t6 = space();
      t7 = text(t7_value);
      t8 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr(a0, "href", a0_href_value = "#/w/" + ctx[3].team + "/list/label/" + ctx[8]() + ".d/");
      attr(button, "class", "btn btn-mini xbtn-light dropdown-toggle");
      attr(button, "data-toggle", "dropdown");
      attr(i1, "class", "fa fa-pencil");
      attr(i1, "aria-hidden", "true");
      attr(a1, "href", "#");
      attr(i2, "class", "fa fa-trash-o");
      attr(i2, "aria-hidden", "true");
      attr(a2, "href", "#");
      attr(ul, "class", "dropdown-menu dropdown-menu-right");
      attr(div, "class", "dropdown");
      set_style(div, "position", "absolute");
      set_style(div, "top", "2px");
      set_style(div, "right", "0");
      toggle_class(li2, "active", ctx[3].prefix == "label" && ctx[9]());
    },
    m(target, anchor) {
      insert(target, li2, anchor);
      append(li2, a0);
      append(a0, t0);
      append(li2, t1);
      append(li2, div);
      append(div, button);
      append(div, t2);
      append(div, ul);
      append(ul, li0);
      append(li0, a1);
      append(a1, i1);
      append(a1, t3);
      append(a1, t4);
      append(ul, t5);
      append(ul, li1);
      append(li1, a2);
      append(a2, i2);
      append(a2, t6);
      append(a2, t7);
      insert(target, t8, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a1, "click", ctx[6]),
          listen(a2, "click", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 16) && t0_value !== (t0_value = ctx2[4].name + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 8 && a0_href_value !== (a0_href_value = "#/w/" + ctx2[3].team + "/list/label/" + ctx2[8]() + ".d/")) {
        attr(a0, "href", a0_href_value);
      }
      if (dirty & 520) {
        toggle_class(li2, "active", ctx2[3].prefix == "label" && ctx2[9]());
      }
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$e(ctx2);
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
        detach(li2);
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
function instance$t($$self, $$props, $$invalidate) {
  let $route;
  let $label, $$unsubscribe_label = noop, $$subscribe_label = () => ($$unsubscribe_label(), $$unsubscribe_label = subscribe(label, ($$value) => $$invalidate(4, $label = $$value)), label);
  component_subscribe($$self, route, ($$value) => $$invalidate(3, $route = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_label());
  let { label } = $$props;
  $$subscribe_label();
  let renameModal = false;
  let newLabelName = $label.name;
  async function onDel(e) {
    e.preventDefault();
    await label.destroy();
  }
  async function onRename(e) {
    e.preventDefault();
    $$invalidate(1, renameModal = true);
  }
  async function onSaveName() {
    let name = newLabelName;
    await label.save({ name }, { patch: true, wait: true });
    $$invalidate(1, renameModal = false);
  }
  function getPath() {
    return $label.id;
  }
  function isActive() {
    return $label.id == $route.data;
  }
  function input_input_handler() {
    newLabelName = this.value;
    $$invalidate(2, newLabelName);
  }
  const close_handler = (e) => $$invalidate(1, renameModal = false);
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2)
      $$subscribe_label($$invalidate(0, label = $$props2.label));
  };
  return [
    label,
    renameModal,
    newLabelName,
    $route,
    $label,
    onDel,
    onRename,
    onSaveName,
    getPath,
    isActive,
    input_input_handler,
    close_handler
  ];
}
class Label extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$t, safe_not_equal, { label: 0 });
  }
}
function get_each_context$9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}
function create_if_block_2$4(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[2]);
      attr(span, "class", "badge xbadge-unread");
      set_style(span, "float", "right");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_1$9(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[1]);
      attr(span, "class", "badge xbadge-error fr");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_each_block$9(key_1, ctx) {
  let first;
  let label;
  let current;
  label = new Label({ props: { label: ctx[14] } });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(label.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(label, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const label_changes = {};
      if (dirty & 64)
        label_changes.label = ctx[14];
      label.$set(label_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(label.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(label.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(label, detaching);
    }
  };
}
function create_if_block$d(ctx) {
  let savemodal;
  let current;
  savemodal = new SaveModal({
    props: {
      title: "Add Label",
      onSave: ctx[9],
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx }
    }
  });
  savemodal.$on("close", ctx[11]);
  return {
    c() {
      create_component(savemodal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(savemodal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const savemodal_changes = {};
      if (dirty & 131088) {
        savemodal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      savemodal.$set(savemodal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(savemodal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(savemodal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(savemodal, detaching);
    }
  };
}
function create_default_slot$a(ctx) {
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      attr(input, "type", "text");
      attr(input, "class", "form-control");
    },
    m(target, anchor) {
      insert(target, input, anchor);
      set_input_value(input, ctx[4]);
      if (!mounted) {
        dispose = listen(input, "input", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 16 && input.value !== ctx2[4]) {
        set_input_value(input, ctx2[4]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$s(ctx) {
  let div1;
  let div0;
  let a0;
  let t0_value = T("a_add") + "";
  let t0;
  let t1;
  let t2_value = T("l_webpage") + "";
  let t2;
  let a0_href_value;
  let t3;
  let button0;
  let t4;
  let ul0;
  let li0;
  let a1;
  let t5_value = T("l_webpage") + "";
  let t5;
  let a1_href_value;
  let t6;
  let li1;
  let a2;
  let t7_value = T("l_feed") + "";
  let t7;
  let a2_href_value;
  let t8;
  let li2;
  let a3;
  let t9_value = T("l_json") + "";
  let t9;
  let a3_href_value;
  let t10;
  let li3;
  let a4;
  let t11_value = T("l_pdf") + "";
  let t11;
  let a4_href_value;
  let t12;
  let li4;
  let a5;
  let t13_value = T("l_uptime") + "";
  let t13;
  let a5_href_value;
  let t14;
  let li5;
  let a6;
  let t15_value = T("l_doc") + "";
  let t15;
  let a6_href_value;
  let t16;
  let li6;
  let a7;
  let t17_value = T("l_xml") + "";
  let t17;
  let a7_href_value;
  let t18;
  let ul1;
  let li7;
  let a8;
  let t19_value = T("l_all") + "";
  let t19;
  let a8_href_value;
  let t20;
  let li8;
  let a9;
  let t21;
  let t22_value = T("l_unread") + "";
  let t22;
  let a9_href_value;
  let t23;
  let li9;
  let a10;
  let t24;
  let t25_value = T("l_error") + "";
  let t25;
  let a10_href_value;
  let t26;
  let li10;
  let a11;
  let t27_value = T("l_trash") + "";
  let t27;
  let a11_href_value;
  let t28;
  let li11;
  let t29;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t30;
  let li12;
  let t31;
  let li13;
  let button1;
  let t33;
  let if_block2_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[2] > 0 && create_if_block_2$4(ctx);
  let if_block1 = ctx[1] > 0 && create_if_block_1$9(ctx);
  let each_value = ctx[6].models;
  const get_key = (ctx2) => ctx2[14].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$9(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$9(key, child_ctx));
  }
  let if_block2 = ctx[3] && create_if_block$d(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
      button0 = element("button");
      button0.innerHTML = `<i class="caret"></i>`;
      t4 = space();
      ul0 = element("ul");
      li0 = element("li");
      a1 = element("a");
      t5 = text(t5_value);
      t6 = space();
      li1 = element("li");
      a2 = element("a");
      t7 = text(t7_value);
      t8 = space();
      li2 = element("li");
      a3 = element("a");
      t9 = text(t9_value);
      t10 = space();
      li3 = element("li");
      a4 = element("a");
      t11 = text(t11_value);
      t12 = space();
      li4 = element("li");
      a5 = element("a");
      t13 = text(t13_value);
      t14 = space();
      li5 = element("li");
      a6 = element("a");
      t15 = text(t15_value);
      t16 = space();
      li6 = element("li");
      a7 = element("a");
      t17 = text(t17_value);
      t18 = space();
      ul1 = element("ul");
      li7 = element("li");
      a8 = element("a");
      t19 = text(t19_value);
      t20 = space();
      li8 = element("li");
      a9 = element("a");
      if (if_block0)
        if_block0.c();
      t21 = space();
      t22 = text(t22_value);
      t23 = space();
      li9 = element("li");
      a10 = element("a");
      if (if_block1)
        if_block1.c();
      t24 = space();
      t25 = text(t25_value);
      t26 = space();
      li10 = element("li");
      a11 = element("a");
      t27 = text(t27_value);
      t28 = space();
      li11 = element("li");
      t29 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t30 = space();
      li12 = element("li");
      t31 = space();
      li13 = element("li");
      button1 = element("button");
      button1.textContent = `${T("a_add_label")}`;
      t33 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
      attr(a0, "class", "btn btn-success text-left pl-3");
      attr(a0, "href", a0_href_value = "#/w/" + ctx[5] + "/sieve/add/page.d");
      attr(button0, "class", "btn btn-success dropdown-toggle");
      attr(button0, "data-toggle", "dropdown");
      attr(a1, "href", a1_href_value = "#/w/" + ctx[5] + "/sieve/add/page.d");
      attr(a2, "href", a2_href_value = "#/w/" + ctx[5] + "/sieve/add/feed.d");
      attr(a3, "href", a3_href_value = "#/w/" + ctx[5] + "/sieve/add/json.d?type=" + C.DS_TYPE_JSON);
      attr(a4, "href", a4_href_value = "#/w/" + ctx[5] + "/sieve/add/pdf.d");
      attr(a5, "href", a5_href_value = "#/w/" + ctx[5] + "/sieve/add/json.d?type=" + C.DS_TYPE_UPTIME);
      attr(a6, "href", a6_href_value = "#/w/" + ctx[5] + "/sieve/add/doc.d");
      attr(a7, "href", a7_href_value = "#/w/" + ctx[5] + "/sieve/add/xml.d");
      attr(ul0, "class", "dropdown-menu");
      attr(ul0, "role", "menu");
      attr(div0, "class", "btn-group btn-block mb3 w-100");
      attr(a8, "href", a8_href_value = "#/w/" + ctx[5] + "/list/all/");
      toggle_class(li7, "active", ctx[0].prefix == "all");
      attr(a9, "href", a9_href_value = "#/w/" + ctx[5] + "/list/unread/");
      toggle_class(li8, "active", ctx[0].prefix == "unread");
      attr(a10, "href", a10_href_value = "#/w/" + ctx[5] + "/list/error/");
      toggle_class(li9, "active", ctx[0].prefix == "error");
      attr(a11, "href", a11_href_value = "#/w/" + ctx[5] + "/list/trash/");
      toggle_class(li10, "active", ctx[0].prefix == "trash");
      attr(li11, "class", "divider bb b--light-blue");
      attr(li12, "class", "divider");
      attr(button1, "class", "btn btn-default btn-block py-0");
      attr(ul1, "class", "nav nav-pills nav-stacked mb4");
      attr(ul1, "viewclass", "LabelNavList");
      attr(div1, "class", "xsidebar");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, a0);
      append(a0, t0);
      append(a0, t1);
      append(a0, t2);
      append(div0, t3);
      append(div0, button0);
      append(div0, t4);
      append(div0, ul0);
      append(ul0, li0);
      append(li0, a1);
      append(a1, t5);
      append(ul0, t6);
      append(ul0, li1);
      append(li1, a2);
      append(a2, t7);
      append(ul0, t8);
      append(ul0, li2);
      append(li2, a3);
      append(a3, t9);
      append(ul0, t10);
      append(ul0, li3);
      append(li3, a4);
      append(a4, t11);
      append(ul0, t12);
      append(ul0, li4);
      append(li4, a5);
      append(a5, t13);
      append(ul0, t14);
      append(ul0, li5);
      append(li5, a6);
      append(a6, t15);
      append(ul0, t16);
      append(ul0, li6);
      append(li6, a7);
      append(a7, t17);
      append(div1, t18);
      append(div1, ul1);
      append(ul1, li7);
      append(li7, a8);
      append(a8, t19);
      append(ul1, t20);
      append(ul1, li8);
      append(li8, a9);
      if (if_block0)
        if_block0.m(a9, null);
      append(a9, t21);
      append(a9, t22);
      append(ul1, t23);
      append(ul1, li9);
      append(li9, a10);
      if (if_block1)
        if_block1.m(a10, null);
      append(a10, t24);
      append(a10, t25);
      append(ul1, t26);
      append(ul1, li10);
      append(li10, a11);
      append(a11, t27);
      append(ul1, t28);
      append(ul1, li11);
      append(ul1, t29);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul1, null);
      }
      append(ul1, t30);
      append(ul1, li12);
      append(ul1, t31);
      append(ul1, li13);
      append(li13, button1);
      insert(target, t33, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, if_block2_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(button1, "click", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 32 && a0_href_value !== (a0_href_value = "#/w/" + ctx2[5] + "/sieve/add/page.d")) {
        attr(a0, "href", a0_href_value);
      }
      if (!current || dirty & 32 && a1_href_value !== (a1_href_value = "#/w/" + ctx2[5] + "/sieve/add/page.d")) {
        attr(a1, "href", a1_href_value);
      }
      if (!current || dirty & 32 && a2_href_value !== (a2_href_value = "#/w/" + ctx2[5] + "/sieve/add/feed.d")) {
        attr(a2, "href", a2_href_value);
      }
      if (!current || dirty & 32 && a3_href_value !== (a3_href_value = "#/w/" + ctx2[5] + "/sieve/add/json.d?type=" + C.DS_TYPE_JSON)) {
        attr(a3, "href", a3_href_value);
      }
      if (!current || dirty & 32 && a4_href_value !== (a4_href_value = "#/w/" + ctx2[5] + "/sieve/add/pdf.d")) {
        attr(a4, "href", a4_href_value);
      }
      if (!current || dirty & 32 && a5_href_value !== (a5_href_value = "#/w/" + ctx2[5] + "/sieve/add/json.d?type=" + C.DS_TYPE_UPTIME)) {
        attr(a5, "href", a5_href_value);
      }
      if (!current || dirty & 32 && a6_href_value !== (a6_href_value = "#/w/" + ctx2[5] + "/sieve/add/doc.d")) {
        attr(a6, "href", a6_href_value);
      }
      if (!current || dirty & 32 && a7_href_value !== (a7_href_value = "#/w/" + ctx2[5] + "/sieve/add/xml.d")) {
        attr(a7, "href", a7_href_value);
      }
      if (!current || dirty & 32 && a8_href_value !== (a8_href_value = "#/w/" + ctx2[5] + "/list/all/")) {
        attr(a8, "href", a8_href_value);
      }
      if (dirty & 1) {
        toggle_class(li7, "active", ctx2[0].prefix == "all");
      }
      if (ctx2[2] > 0) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$4(ctx2);
          if_block0.c();
          if_block0.m(a9, t21);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty & 32 && a9_href_value !== (a9_href_value = "#/w/" + ctx2[5] + "/list/unread/")) {
        attr(a9, "href", a9_href_value);
      }
      if (dirty & 1) {
        toggle_class(li8, "active", ctx2[0].prefix == "unread");
      }
      if (ctx2[1] > 0) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$9(ctx2);
          if_block1.c();
          if_block1.m(a10, t24);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & 32 && a10_href_value !== (a10_href_value = "#/w/" + ctx2[5] + "/list/error/")) {
        attr(a10, "href", a10_href_value);
      }
      if (dirty & 1) {
        toggle_class(li9, "active", ctx2[0].prefix == "error");
      }
      if (!current || dirty & 32 && a11_href_value !== (a11_href_value = "#/w/" + ctx2[5] + "/list/trash/")) {
        attr(a11, "href", a11_href_value);
      }
      if (dirty & 1) {
        toggle_class(li10, "active", ctx2[0].prefix == "trash");
      }
      if (dirty & 64) {
        each_value = ctx2[6].models;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul1, outro_and_destroy_block, create_each_block$9, t30, get_each_context$9);
        check_outros();
      }
      if (ctx2[3]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$d(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (detaching)
        detach(t33);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(if_block2_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance$s($$self, $$props, $$invalidate) {
  let $route;
  let $labels;
  component_subscribe($$self, route, ($$value) => $$invalidate(0, $route = $$value));
  let labels = getContext("labels");
  component_subscribe($$self, labels, (value) => $$invalidate(6, $labels = value));
  getContext("user");
  let nError = 0;
  let nUnread = 0;
  let addLabel = false;
  let newLabelName = "";
  let team = 0;
  onMount(() => {
    instance$W.on("user_states", onChangeUnreadError);
  });
  onDestroy(() => {
    instance$W.off("user_states", onChangeUnreadError);
  });
  async function onAddLabel() {
    $$invalidate(3, addLabel = true);
  }
  async function onAddLabelSave() {
    if (_.isEmpty(newLabelName)) {
      throw new Error("e_value_incorrect_check");
    } else {
      await labels.create({ name: newLabelName }, { wait: true });
      $$invalidate(3, addLabel = false);
    }
  }
  function onChangeUnreadError({ error, unread }) {
    $$invalidate(1, nError = error);
    $$invalidate(2, nUnread = unread);
  }
  function input_input_handler() {
    newLabelName = this.value;
    $$invalidate(4, newLabelName);
  }
  const close_handler = (e) => $$invalidate(3, addLabel = false);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        $$invalidate(5, team = $route.team);
      }
    }
  };
  return [
    $route,
    nError,
    nUnread,
    addLabel,
    newLabelName,
    team,
    $labels,
    labels,
    onAddLabel,
    onAddLabelSave,
    input_input_handler,
    close_handler
  ];
}
class Sidebar$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$s, create_fragment$s, safe_not_equal, {});
  }
}
function create_fragment$r(ctx) {
  let form_1;
  return {
    c() {
      form_1 = element("form");
      form_1.innerHTML = `<i class="fa fa-search p-4"></i> 
  <input name="q" class="flex-grow p-4 border-0 border-l border-solid border-gray-300" type="text" autocomplete="off" placeholder="Search..."/>`;
      attr(form_1, "class", "xsearchbar flex -mb-1 border border-solid border-gray-300");
    },
    m(target, anchor) {
      insert(target, form_1, anchor);
      ctx[3](form_1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(form_1);
      ctx[3](null);
    }
  };
}
function instance$r($$self, $$props, $$invalidate) {
  let $params;
  component_subscribe($$self, params, ($$value) => $$invalidate(2, $params = $$value));
  let form;
  let labels = getContext("labels");
  let parent = getContext("view:root");
  let view;
  onMount(() => {
    $$invalidate(1, view = new SearchForm({ el: form, parent, labels }));
    return () => view.remove();
  });
  function form_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      form = $$value;
      $$invalidate(0, form);
    });
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      view && view.setRouteParams($params);
    }
  };
  return [form, view, $params, form_1_binding];
}
class Search extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$r, safe_not_equal, {});
  }
}
function create_fragment$q(ctx) {
  let div5;
  let div2;
  let div0;
  let t1;
  let div1;
  let t2_value = (ctx[1] ? ctx[1].info || ctx[1].name : "") + "";
  let t2;
  let t3;
  let div4;
  let search;
  let t4;
  let div3;
  let t5;
  let selector;
  let current;
  search = new Search({});
  selector = new Selector$2({
    props: {
      menuAlign: "right",
      team: ctx[2].team
    }
  });
  return {
    c() {
      div5 = element("div");
      div2 = element("div");
      div0 = element("div");
      div0.textContent = "Watchlist";
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div4 = element("div");
      create_component(search.$$.fragment);
      t4 = space();
      div3 = element("div");
      t5 = space();
      create_component(selector.$$.fragment);
      attr(div0, "class", "inline-block fw4 f2");
      attr(div1, "class", "absolute f5 -mx-4 px-4");
      attr(div2, "class", "relative title-header ttu pl4");
      attr(div3, "class", "flex-grow");
      attr(div4, "class", "flex-grow flex items-center border-b border-gray-300");
      set_style(div4, "border-bottom-style", "solid");
      attr(div5, "id", "topbar");
      attr(div5, "class", "flex items-center");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div2);
      append(div2, div0);
      append(div2, t1);
      append(div2, div1);
      append(div1, t2);
      append(div5, t3);
      append(div5, div4);
      mount_component(search, div4, null);
      append(div4, t4);
      append(div4, div3);
      append(div4, t5);
      mount_component(selector, div4, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 2) && t2_value !== (t2_value = (ctx2[1] ? ctx2[1].info || ctx2[1].name : "") + ""))
        set_data(t2, t2_value);
      const selector_changes = {};
      if (dirty & 4)
        selector_changes.team = ctx2[2].team;
      selector.$set(selector_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(search.$$.fragment, local);
      transition_in(selector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(search.$$.fragment, local);
      transition_out(selector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      destroy_component(search);
      destroy_component(selector);
    }
  };
}
function instance$q($$self, $$props, $$invalidate) {
  let $clients;
  let $client, $$unsubscribe_client = noop, $$subscribe_client = () => ($$unsubscribe_client(), $$unsubscribe_client = subscribe(client, ($$value) => $$invalidate(1, $client = $$value)), client);
  let $route;
  component_subscribe($$self, route, ($$value) => $$invalidate(2, $route = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_client());
  let clients = getContext("clients");
  component_subscribe($$self, clients, (value) => $$invalidate(4, $clients = value));
  let client;
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      {
        $$subscribe_client($$invalidate(0, client = $clients && clients.get(clients.defaultId)));
      }
    }
  };
  return [client, $client, $route, clients, $clients];
}
class Topbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$q, safe_not_equal, {});
  }
}
function create_if_block$c(ctx) {
  let div2;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = `<div class="xtbar xvbar-margin" style="display: flex;"><button class="btn btn-default" data-action="go_back"><i class="fa fa-chevron-left"></i> Back</button> 
        <div class="centered" style="flex: 1; margin: 0; padding: 0;"></div></div>`;
      attr(div2, "viewclass", "");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_default_slot$9(ctx) {
  let sidebar;
  let t0;
  let div;
  let t1;
  let current;
  sidebar = new Sidebar$1({});
  let if_block = ctx[0] && create_if_block$c();
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  return {
    c() {
      create_component(sidebar.$$.fragment);
      t0 = space();
      div = element("div");
      if (if_block)
        if_block.c();
      t1 = space();
      if (default_slot)
        default_slot.c();
      attr(div, "class", "xcontainer");
    },
    m(target, anchor) {
      mount_component(sidebar, target, anchor);
      insert(target, t0, anchor);
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append(div, t1);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[0]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$c();
          if_block.c();
          if_block.m(div, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(sidebar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sidebar, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_extra_slot(ctx) {
  let topbar;
  let current;
  topbar = new Topbar({});
  return {
    c() {
      create_component(topbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(topbar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(topbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(topbar, detaching);
    }
  };
}
function create_fragment$p(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      contentScrollTop: ctx[1],
      $$slots: {
        extra: [create_extra_slot],
        default: [create_default_slot$9]
      },
      $$scope: { ctx }
    }
  });
  layout.$on("scroll", ctx[3]);
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 2)
        layout_changes.contentScrollTop = ctx2[1];
      if (dirty & 17) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { renderDefaultToolbar = true } = $$props;
  let { contentScrollTop = 0 } = $$props;
  function scroll_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("renderDefaultToolbar" in $$props2)
      $$invalidate(0, renderDefaultToolbar = $$props2.renderDefaultToolbar);
    if ("contentScrollTop" in $$props2)
      $$invalidate(1, contentScrollTop = $$props2.contentScrollTop);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [renderDefaultToolbar, contentScrollTop, slots, scroll_handler, $$scope];
}
class Layout_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$p, safe_not_equal, {
      renderDefaultToolbar: 0,
      contentScrollTop: 1
    });
  }
}
function create_fragment$o(ctx) {
  let div1;
  let div0;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      attr(div0, "id", "list");
      toggle_class(div1, "hide", ctx[1]);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      ctx[3](div0);
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        toggle_class(div1, "hide", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[3](null);
    }
  };
}
function instance$o($$self, $$props, $$invalidate) {
  let $route, $$unsubscribe_route = noop, $$subscribe_route = () => ($$unsubscribe_route(), $$unsubscribe_route = subscribe(route2, ($$value) => $$invalidate(6, $route = $$value)), route2);
  $$self.$$.on_destroy.push(() => $$unsubscribe_route());
  let { route: route2 } = $$props;
  $$subscribe_route();
  let { hidden = false } = $$props;
  let el;
  getContext("user");
  let labels = getContext("labels");
  let { clients, sieves } = getContext("watchlist:stores");
  let parent = getContext("view:root");
  let view;
  let unsubscribe;
  async function show() {
    view && $route.module == "list" && await view.fetchAndShow($route);
  }
  onMount(async () => {
    view = new ViewSieve.Sieves({
      el,
      clients,
      collection: sieves,
      labels,
      parent
    }).render();
    unsubscribe = route2.subscribe(show);
  });
  onDestroy(() => {
    unsubscribe();
    view.remove();
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(2, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$subscribe_route($$invalidate(0, route2 = $$props2.route));
    if ("hidden" in $$props2)
      $$invalidate(1, hidden = $$props2.hidden);
  };
  return [route2, hidden, el, div0_binding];
}
class List$4 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { route: 0, hidden: 1 });
  }
}
class Macro$1 extends base.Model {
}
class Macros extends base.PagedCollection {
  constructor() {
    super(...arguments);
    __publicField(this, "model", Macro$1);
    __publicField(this, "url", "/macros");
    __publicField(this, "limit", 20);
  }
}
function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  child_ctx[13] = i;
  return child_ctx;
}
function create_each_block$8(ctx) {
  let li;
  let a;
  let t0_value = ctx[4](ctx[13]) + "";
  let t0;
  let t1;
  let mounted;
  let dispose;
  function click_handler2(...args) {
    return ctx[7](ctx[13], ...args);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      attr(a, "href", href$3);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t0);
      append(li, t1);
      if (!mounted) {
        dispose = listen(a, "click", prevent_default(click_handler2));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$n(ctx) {
  let ul1;
  let li0;
  let a0;
  let t0;
  let t1;
  let i0;
  let t2;
  let ul0;
  let t3;
  let li1;
  let a1;
  let i1;
  let t4;
  let li2;
  let a2;
  let i2;
  let mounted;
  let dispose;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
  }
  return {
    c() {
      ul1 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t0 = text(ctx[3]);
      t1 = space();
      i0 = element("i");
      t2 = space();
      ul0 = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      li1 = element("li");
      a1 = element("a");
      i1 = element("i");
      t4 = space();
      li2 = element("li");
      a2 = element("a");
      i2 = element("i");
      attr(i0, "class", "fa fa-caret-down");
      attr(a0, "href", href$3);
      attr(a0, "class", "dropdown-toggle");
      attr(a0, "data-toggle", "dropdown");
      attr(ul0, "class", "dropdown-menu dropdown-menu-right");
      attr(i1, "class", "fa fa-chevron-left");
      attr(a1, "href", href$3);
      toggle_class(li1, "disabled", !ctx[1].hasPrev());
      attr(i2, "class", "fa fa-chevron-right");
      attr(a2, "href", href$3);
      toggle_class(li2, "disabled", !ctx[1].hasNext());
      attr(ul1, "class", "pagination pagination-sm dropdown");
      set_style(ul1, "margin", "0 5px 0 0");
    },
    m(target, anchor) {
      insert(target, ul1, anchor);
      append(ul1, li0);
      append(li0, a0);
      append(a0, t0);
      append(a0, t1);
      append(a0, i0);
      append(li0, t2);
      append(li0, ul0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul0, null);
      }
      append(ul1, t3);
      append(ul1, li1);
      append(li1, a1);
      append(a1, i1);
      append(ul1, t4);
      append(ul1, li2);
      append(li2, a2);
      append(a2, i2);
      if (!mounted) {
        dispose = [
          listen(a1, "click", prevent_default(ctx[8])),
          listen(a2, "click", prevent_default(ctx[9]))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 8)
        set_data(t0, ctx2[3]);
      if (dirty & 21) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 2) {
        toggle_class(li1, "disabled", !ctx2[1].hasPrev());
      }
      if (dirty & 2) {
        toggle_class(li2, "disabled", !ctx2[1].hasNext());
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(ul1);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
const href$3 = "";
function instance$n($$self, $$props, $$invalidate) {
  let $store, $$unsubscribe_store = noop, $$subscribe_store = () => ($$unsubscribe_store(), $$unsubscribe_store = subscribe(store2, ($$value) => $$invalidate(1, $store = $$value)), store2);
  $$self.$$.on_destroy.push(() => $$unsubscribe_store());
  let { name = "list-nav" } = $$props;
  let { store: store2 } = $$props;
  $$subscribe_store();
  let info = {};
  let pages = [];
  let currentRange = "0-0";
  function setCurrentRange() {
    let { count, offset } = info;
    $$invalidate(3, currentRange = `${offset + (count > 0 ? 1 : 0)} - ${offset + count}`);
  }
  function getRange(index) {
    let { limit, offset, total_count } = info;
    offset += limit * index;
    return `${offset + 1} - ${Math.min(offset + limit, total_count)}`;
  }
  const click_handler2 = (i, e) => store2.goto(i);
  const click_handler_1 = (e) => store2.onPrev();
  const click_handler_2 = (e) => store2.onNext();
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(5, name = $$props2.name);
    if ("store" in $$props2)
      $$subscribe_store($$invalidate(0, store2 = $$props2.store));
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 66) {
      {
        $$invalidate(6, info = $store.info());
        $$invalidate(2, pages = Array(info.nPages));
        setCurrentRange();
      }
    }
  };
  return [
    store2,
    $store,
    pages,
    currentRange,
    getRange,
    name,
    info,
    click_handler2,
    click_handler_1,
    click_handler_2
  ];
}
class ListPager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { name: 5, store: 0 });
  }
}
function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block$7(ctx) {
  let li;
  let a;
  let t0_value = ctx[4].label + "";
  let t0;
  let t1;
  let mounted;
  let dispose;
  function click_handler2(...args) {
    return ctx[3](ctx[4], ...args);
  }
  return {
    c() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      attr(a, "href", href$2);
      toggle_class(li, "active", ctx[4].value == ctx[2]);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, a);
      append(a, t0);
      append(a, t1);
      if (!mounted) {
        dispose = listen(a, "click", prevent_default(click_handler2));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 2 && t0_value !== (t0_value = ctx[4].label + ""))
        set_data(t0, t0_value);
      if (dirty & 6) {
        toggle_class(li, "active", ctx[4].value == ctx[2]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$m(ctx) {
  let ul1;
  let li;
  let a;
  let i;
  let i_class_value;
  let t0;
  let span;
  let t1;
  let ul0;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$7(get_each_context$7(ctx, each_value, i2));
  }
  return {
    c() {
      ul1 = element("ul");
      li = element("li");
      a = element("a");
      i = element("i");
      t0 = space();
      span = element("span");
      t1 = space();
      ul0 = element("ul");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      attr(i, "class", i_class_value = "fa fa-sort-amount-" + (ctx[2][0] == "-" ? "desc" : "asc"));
      attr(span, "class", "caret");
      attr(a, "href", href$2);
      attr(a, "class", "dropdown-toggle");
      attr(a, "data-toggle", "dropdown");
      attr(ul0, "class", "dropdown-menu dropdown-menu-right");
      attr(ul1, "class", "pagination pagination-sm dropdown");
      set_style(ul1, "margin", "0 5px 0 0");
    },
    m(target, anchor) {
      insert(target, ul1, anchor);
      append(ul1, li);
      append(li, a);
      append(a, i);
      append(a, t0);
      append(a, span);
      append(li, t1);
      append(li, ul0);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].m(ul0, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4 && i_class_value !== (i_class_value = "fa fa-sort-amount-" + (ctx2[2][0] == "-" ? "desc" : "asc"))) {
        attr(i, "class", i_class_value);
      }
      if (dirty & 7) {
        each_value = ctx2[1];
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block$7(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(ul0, null);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(ul1);
      destroy_each(each_blocks, detaching);
    }
  };
}
let href$2 = "";
function instance$m($$self, $$props, $$invalidate) {
  let { onSort } = $$props;
  let { sortingFields } = $$props;
  let { currentFieldName } = $$props;
  const click_handler2 = (field, e) => onSort(field.value);
  $$self.$$set = ($$props2) => {
    if ("onSort" in $$props2)
      $$invalidate(0, onSort = $$props2.onSort);
    if ("sortingFields" in $$props2)
      $$invalidate(1, sortingFields = $$props2.sortingFields);
    if ("currentFieldName" in $$props2)
      $$invalidate(2, currentFieldName = $$props2.currentFieldName);
  };
  return [onSort, sortingFields, currentFieldName, click_handler2];
}
class SortBy extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, {
      onSort: 0,
      sortingFields: 1,
      currentFieldName: 2
    });
  }
}
function create_fragment$l(ctx) {
  let div1;
  let div0;
  let div1_class_value;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      attr(div0, "class", "xindeterminate");
      attr(div1, "class", div1_class_value = "xprogress " + ctx[0]);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && div1_class_value !== (div1_class_value = "xprogress " + ctx2[0])) {
        attr(div1, "class", div1_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
  let { classes = "" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("classes" in $$props2)
      $$invalidate(0, classes = $$props2.classes);
  };
  return [classes];
}
class Loader extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { classes: 0 });
  }
}
function create_else_block_1$5(ctx) {
  let a;
  let t0_value = ctx[1].length + "";
  let t0;
  let t1;
  let mounted;
  let dispose;
  return {
    c() {
      a = element("a");
      t0 = text(t0_value);
      t1 = text(" steps");
      attr(a, "href", href$1);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t0);
      append(a, t1);
      if (!mounted) {
        dispose = listen(a, "click", ctx[8]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t0_value !== (t0_value = ctx2[1].length + ""))
        set_data(t0, t0_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$b(ctx) {
  let datatable;
  let current;
  datatable = new DataTable({
    props: {
      class: "xsteps",
      style: "max-width: 500px;",
      headers: ctx[4],
      rows: ctx[3],
      $$slots: {
        cell: [
          create_cell_slot$1,
          ({ row, cell }) => ({ 15: row, 16: cell }),
          ({ row, cell }) => (row ? 32768 : 0) | (cell ? 65536 : 0)
        ],
        default: [create_default_slot_1$4]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(datatable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(datatable, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const datatable_changes = {};
      if (dirty & 8)
        datatable_changes.rows = ctx2[3];
      if (dirty & 196608) {
        datatable_changes.$$scope = { dirty, ctx: ctx2 };
      }
      datatable.$set(datatable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(datatable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(datatable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(datatable, detaching);
    }
  };
}
function create_default_slot_5$1(ctx) {
  let t;
  return {
    c() {
      t = text("Cancel");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_4$1(ctx) {
  let t;
  return {
    c() {
      t = text("Save");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_3$1(ctx) {
  let button0;
  let t;
  let button1;
  let current;
  button0 = new Button({
    props: {
      kind: "ghost",
      $$slots: { default: [create_default_slot_5$1] },
      $$scope: { ctx }
    }
  });
  button0.$on("click", ctx[6]);
  button1 = new Button({
    props: {
      $$slots: { default: [create_default_slot_4$1] },
      $$scope: { ctx }
    }
  });
  button1.$on("click", ctx[7]);
  return {
    c() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button0, target, anchor);
      insert(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button0_changes = {};
      if (dirty & 131072) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 131072) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button0, detaching);
      if (detaching)
        detach(t);
      destroy_component(button1, detaching);
    }
  };
}
function create_default_slot_2$2(ctx) {
  let toolbarcontent;
  let current;
  toolbarcontent = new ToolbarContent({
    props: {
      $$slots: { default: [create_default_slot_3$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbarcontent.$$.fragment);
    },
    m(target, anchor) {
      mount_component(toolbarcontent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbarcontent_changes = {};
      if (dirty & 131072) {
        toolbarcontent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarcontent.$set(toolbarcontent_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarcontent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarcontent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarcontent, detaching);
    }
  };
}
function create_default_slot_1$4(ctx) {
  let toolbar;
  let current;
  toolbar = new Toolbar({
    props: {
      $$slots: { default: [create_default_slot_2$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(toolbar, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbar_changes = {};
      if (dirty & 131072) {
        toolbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbar.$set(toolbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbar, detaching);
    }
  };
}
function create_else_block$d(ctx) {
  let t_value = ctx[16].value + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 65536 && t_value !== (t_value = ctx2[16].value + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1$8(ctx) {
  let button;
  let current;
  function click_handler2() {
    return ctx[10](ctx[15]);
  }
  button = new Button({
    props: {
      iconOnly: true,
      kind: "ghost",
      class: "p-1 p-2",
      title: "Delete Step",
      $$slots: { default: [create_default_slot$8] },
      $$scope: { ctx }
    }
  });
  button.$on("click", click_handler2);
  return {
    c() {
      create_component(button.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & 131072) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot$8(ctx) {
  let close16;
  let current;
  close16 = new Close16({});
  return {
    c() {
      create_component(close16.$$.fragment);
    },
    m(target, anchor) {
      mount_component(close16, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(close16.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(close16.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(close16, detaching);
    }
  };
}
function create_cell_slot$1(ctx) {
  let span;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_1$8, create_else_block$d];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[16].key === "action")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      span = element("span");
      if_block.c();
      attr(span, "slot", "cell");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if_blocks[current_block_type_index].m(span, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(span, null);
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
        detach(span);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_fragment$k(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$b, create_else_block_1$5];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
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
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
let href$1 = "#";
function instance$k($$self, $$props, $$invalidate) {
  let $macro, $$unsubscribe_macro = noop, $$subscribe_macro = () => ($$unsubscribe_macro(), $$unsubscribe_macro = subscribe(macro, ($$value) => $$invalidate(9, $macro = $$value)), macro);
  $$self.$$.on_destroy.push(() => $$unsubscribe_macro());
  let { macro } = $$props;
  $$subscribe_macro();
  let steps = [...$macro.steps];
  let expanded = false;
  let { StepType } = Recorder;
  const dispatch = createEventDispatcher();
  let headers = [
    { key: "type", value: "Step" },
    { key: "detail", value: "Detail" },
    { key: "action", empty: true }
  ];
  let rows = getRows();
  function getRows() {
    return steps.map((step, id) => ({
      id,
      type: step.type,
      detail: getStepDetail(step),
      step
    }));
  }
  function onDeleteStep(row) {
    $$invalidate(1, steps = steps.filter((step) => step != row.step));
    $$invalidate(3, rows = getRows());
  }
  function onCancel() {
    $$invalidate(1, steps = [...$macro.steps]);
    $$invalidate(3, rows = getRows());
    $$invalidate(2, expanded = false);
  }
  function onSave() {
    macro.set({ steps: [...steps] });
    dispatch("save", macro);
    $$invalidate(2, expanded = false);
  }
  function showSteps(e) {
    e.preventDefault();
    $$invalidate(2, expanded = true);
  }
  function getStepDetail(step) {
    var _a;
    let data = step.data;
    let selector = ((_a = data.selector) == null ? void 0 : _a.value) || "";
    if (step.type == StepType.INPUT || step.type == StepType.SELECT || step.type == StepType.TYPE) {
      return `${selector} - ${data.value}`;
    } else if (step.type == StepType.KEYPRESS) {
      return data.code;
    } else if (step.type == StepType.WAIT_NAV) {
      return data.url;
    }
    return selector || "-";
  }
  const click_handler2 = (row) => onDeleteStep(row);
  $$self.$$set = ($$props2) => {
    if ("macro" in $$props2)
      $$subscribe_macro($$invalidate(0, macro = $$props2.macro));
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 512) {
      {
        $$invalidate(1, steps = [...$macro.steps]);
        $$invalidate(3, rows = getRows());
      }
    }
  };
  return [
    macro,
    steps,
    expanded,
    rows,
    headers,
    onDeleteStep,
    onCancel,
    onSave,
    showSteps,
    $macro,
    click_handler2
  ];
}
class Steps extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, { macro: 0 });
  }
}
function create_default_slot$7(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "fa fa-trash-o error");
      set_style(i, "font-size", "1.5em");
    },
    m(target, anchor) {
      insert(target, i, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_fragment$j(ctx) {
  let tr;
  let td0;
  let div2;
  let t0_value = ctx[5].name + "";
  let t0;
  let div1;
  let div0;
  let t1_value = (ctx[5].meta.url || "") + "";
  let t1;
  let t2;
  let td1;
  let steps;
  let t3;
  let td2;
  let button0;
  let t5;
  let button1;
  let t7;
  let td3;
  let confirmbtn;
  let current;
  let mounted;
  let dispose;
  steps = new Steps({ props: { macro: ctx[0] } });
  steps.$on("save", function() {
    if (is_function(ctx[1]))
      ctx[1].apply(this, arguments);
  });
  confirmbtn = new ConfirmBtn({
    props: {
      alignRight: "1",
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx }
    }
  });
  confirmbtn.$on("click", ctx[8]);
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      div2 = element("div");
      t0 = text(t0_value);
      div1 = element("div");
      div0 = element("div");
      t1 = text(t1_value);
      t2 = space();
      td1 = element("td");
      create_component(steps.$$.fragment);
      t3 = space();
      td2 = element("td");
      button0 = element("button");
      button0.textContent = "Re-record Macro";
      t5 = space();
      button1 = element("button");
      button1.textContent = "View Monitors";
      t7 = space();
      td3 = element("td");
      create_component(confirmbtn.$$.fragment);
      attr(button0, "class", "btn btn-default btn-xs");
      attr(button1, "class", "btn btn-default btn-xs");
      attr(td3, "title", "Delete");
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, div2);
      append(div2, t0);
      append(div2, div1);
      append(div1, div0);
      append(div0, t1);
      append(tr, t2);
      append(tr, td1);
      mount_component(steps, td1, null);
      append(tr, t3);
      append(tr, td2);
      append(td2, button0);
      append(td2, t5);
      append(td2, button1);
      append(tr, t7);
      append(tr, td3);
      mount_component(confirmbtn, td3, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[6]),
          listen(button1, "click", ctx[7])
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if ((!current || dirty & 32) && t0_value !== (t0_value = ctx[5].name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 32) && t1_value !== (t1_value = (ctx[5].meta.url || "") + ""))
        set_data(t1, t1_value);
      const steps_changes = {};
      if (dirty & 1)
        steps_changes.macro = ctx[0];
      steps.$set(steps_changes);
      const confirmbtn_changes = {};
      if (dirty & 512) {
        confirmbtn_changes.$$scope = { dirty, ctx };
      }
      confirmbtn.$set(confirmbtn_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(steps.$$.fragment, local);
      transition_in(confirmbtn.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(steps.$$.fragment, local);
      transition_out(confirmbtn.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      destroy_component(steps);
      destroy_component(confirmbtn);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  let $macro, $$unsubscribe_macro = noop, $$subscribe_macro = () => ($$unsubscribe_macro(), $$unsubscribe_macro = subscribe(macro, ($$value) => $$invalidate(5, $macro = $$value)), macro);
  $$self.$$.on_destroy.push(() => $$unsubscribe_macro());
  let { macro } = $$props;
  $$subscribe_macro();
  let { onSaveSteps: onSaveSteps2 } = $$props;
  let { openBrowser } = $$props;
  let { showMonitors } = $$props;
  let { onDelete } = $$props;
  const click_handler2 = (e) => openBrowser(macro);
  const click_handler_1 = (e) => showMonitors($macro);
  const click_handler_2 = (e) => onDelete(macro);
  $$self.$$set = ($$props2) => {
    if ("macro" in $$props2)
      $$subscribe_macro($$invalidate(0, macro = $$props2.macro));
    if ("onSaveSteps" in $$props2)
      $$invalidate(1, onSaveSteps2 = $$props2.onSaveSteps);
    if ("openBrowser" in $$props2)
      $$invalidate(2, openBrowser = $$props2.openBrowser);
    if ("showMonitors" in $$props2)
      $$invalidate(3, showMonitors = $$props2.showMonitors);
    if ("onDelete" in $$props2)
      $$invalidate(4, onDelete = $$props2.onDelete);
  };
  return [
    macro,
    onSaveSteps2,
    openBrowser,
    showMonitors,
    onDelete,
    $macro,
    click_handler2,
    click_handler_1,
    click_handler_2
  ];
}
class Macro extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      macro: 0,
      onSaveSteps: 1,
      openBrowser: 2,
      showMonitors: 3,
      onDelete: 4
    });
  }
}
function create_fragment$i(ctx) {
  let div;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input = element("input");
      attr(input, "type", "text");
      attr(input, "class", "form-control xform-control-sm p-1");
      attr(input, "placeholder", "Search...");
      attr(div, "class", "form-group mb-0 mr-6");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      set_input_value(input, ctx[0]);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[2]),
          listen(input, "input", ctx[1])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let phrase = "";
  function onInput() {
    dispatch("search", { phrase: phrase.trim() });
  }
  function input_input_handler() {
    phrase = this.value;
    $$invalidate(0, phrase);
  }
  return [phrase, onInput, input_input_handler];
}
class SearchBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, {});
  }
}
function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  child_ctx[13] = i;
  return child_ctx;
}
function create_catch_block$2(ctx) {
  return {
    c: noop,
    m: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$2(ctx) {
  return {
    c: noop,
    m: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_pending_block$2(ctx) {
  let td;
  let loader;
  let current;
  loader = new Loader({});
  return {
    c() {
      td = element("td");
      create_component(loader.$$.fragment);
      attr(td, "colspan", "4");
    },
    m(target, anchor) {
      insert(target, td, anchor);
      mount_component(loader, td, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(loader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      destroy_component(loader);
    }
  };
}
function create_else_block$c(ctx) {
  let tr;
  return {
    c() {
      tr = element("tr");
      tr.innerHTML = `<td>No macro found. 
        </td>`;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block$6(key_1, ctx) {
  let first;
  let macro;
  let current;
  macro = new Macro({
    props: {
      macro: ctx[11],
      onSaveSteps,
      openBrowser: ctx[1],
      showMonitors: ctx[2],
      onDelete: ctx[0]
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(macro.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(macro, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const macro_changes = {};
      if (dirty & 16)
        macro_changes.macro = ctx[11];
      if (dirty & 2)
        macro_changes.openBrowser = ctx[1];
      if (dirty & 4)
        macro_changes.showMonitors = ctx[2];
      if (dirty & 1)
        macro_changes.onDelete = ctx[0];
      macro.$set(macro_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(macro.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(macro.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(macro, detaching);
    }
  };
}
function create_fragment$h(ctx) {
  let div3;
  let div2;
  let div0;
  let h3;
  let t1;
  let small;
  let t2;
  let a;
  let t3;
  let t4;
  let div1;
  let t5;
  let searchbar;
  let t6;
  let listpager;
  let t7;
  let sortby;
  let t8;
  let table;
  let tbody;
  let tr0;
  let td;
  let t9;
  let tr1;
  let t16;
  let promise;
  let t17;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let current;
  searchbar = new SearchBar({});
  searchbar.$on("search", ctx[6]);
  listpager = new ListPager({ props: { store: ctx[3] } });
  sortby = new SortBy({
    props: {
      onSort: ctx[7],
      sortingFields: ctx[5],
      currentFieldName: ctx[4].orderBy
    }
  });
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$2,
    then: create_then_block$2,
    catch: create_catch_block$2,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[4].fetchPromise, info);
  let each_value = ctx[4].models;
  const get_key = (ctx2) => ctx2[11].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$6(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$6(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block$c();
  }
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      h3 = element("h3");
      h3.textContent = "Macros (beta)";
      t1 = space();
      small = element("small");
      t2 = text("Create and use macros to perform automated actions.\n      ");
      a = element("a");
      t3 = text("Learn More");
      t4 = space();
      div1 = element("div");
      t5 = space();
      create_component(searchbar.$$.fragment);
      t6 = space();
      create_component(listpager.$$.fragment);
      t7 = space();
      create_component(sortby.$$.fragment);
      t8 = space();
      table = element("table");
      tbody = element("tbody");
      tr0 = element("tr");
      td = element("td");
      if (default_slot)
        default_slot.c();
      t9 = space();
      tr1 = element("tr");
      tr1.innerHTML = `<th style="width: 50%;">Name</th> 
        <th>Recorded Steps</th> 
        <th>Actions</th> 
        <th style="width: 20px"></th>`;
      t16 = space();
      info.block.c();
      t17 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      attr(a, "href", "" + (window.URL_WEBSITE + "/kb/help/macro-to-record-replay-actions"));
      attr(a, "target", "_blank");
      set_style(div0, "flex", "1");
      attr(div1, "class", "flex-1");
      attr(div2, "class", "panel-heading flex items-center");
      attr(td, "colspan", "4");
      set_style(td, "background-color", "#eee");
      attr(tr1, "class", "bg-gray-200");
      attr(table, "class", "table");
      attr(div3, "class", "panel panel-default");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, div0);
      append(div0, h3);
      append(div0, t1);
      append(div0, small);
      append(small, t2);
      append(small, a);
      append(a, t3);
      append(div2, t4);
      append(div2, div1);
      append(div2, t5);
      mount_component(searchbar, div2, null);
      append(div2, t6);
      mount_component(listpager, div2, null);
      append(div2, t7);
      mount_component(sortby, div2, null);
      append(div3, t8);
      append(div3, table);
      append(table, tbody);
      append(tbody, tr0);
      append(tr0, td);
      if (default_slot) {
        default_slot.m(td, null);
      }
      append(tbody, t9);
      append(tbody, tr1);
      append(tbody, t16);
      info.block.m(tbody, info.anchor = null);
      info.mount = () => tbody;
      info.anchor = t17;
      append(tbody, t17);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      if (each_1_else) {
        each_1_else.m(tbody, null);
      }
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      const listpager_changes = {};
      if (dirty & 8)
        listpager_changes.store = ctx[3];
      listpager.$set(listpager_changes);
      const sortby_changes = {};
      if (dirty & 16)
        sortby_changes.currentFieldName = ctx[4].orderBy;
      sortby.$set(sortby_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(default_slot, default_slot_template, ctx, ctx[8], !current ? get_all_dirty_from_scope(ctx[8]) : get_slot_changes(default_slot_template, ctx[8], dirty, null), null);
        }
      }
      info.ctx = ctx;
      dirty & 16 && promise !== (promise = ctx[4].fetchPromise) && handle_promise(promise, info);
      if (dirty & 23) {
        each_value = ctx[4].models;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, tbody, outro_and_destroy_block, create_each_block$6, null, get_each_context$6);
        check_outros();
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block$c();
          each_1_else.c();
          each_1_else.m(tbody, null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(searchbar.$$.fragment, local);
      transition_in(listpager.$$.fragment, local);
      transition_in(sortby.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(info.block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(searchbar.$$.fragment, local);
      transition_out(listpager.$$.fragment, local);
      transition_out(sortby.$$.fragment, local);
      transition_out(default_slot, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(searchbar);
      destroy_component(listpager);
      destroy_component(sortby);
      if (default_slot)
        default_slot.d(detaching);
      info.block.d();
      info.token = null;
      info = null;
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (each_1_else)
        each_1_else.d();
    }
  };
}
async function onSaveSteps(e) {
  let macro = e.detail;
  await macro.save();
}
function instance$h($$self, $$props, $$invalidate) {
  let $store;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { onDelete } = $$props;
  let { openBrowser } = $$props;
  let { showMonitors } = $$props;
  let searchQuery = "";
  let sortingFields = [
    { value: "-ts", label: "Newest First" },
    { value: "ts", label: "Oldest First" },
    { value: "name", label: "Name" },
    {
      value: "-name",
      label: "Name - Descending"
    }
  ];
  let store2 = getContext("store");
  component_subscribe($$self, store2, (value) => $$invalidate(4, $store = value));
  async function onSearch(e) {
    let { phrase } = e.detail;
    if (!phrase) {
      store2.setQuery({});
      return await store2.fetch({ reset: true });
    }
    searchQuery = `%${phrase}%`;
    store2.setQuery({
      $or: {
        "name.ilike": searchQuery,
        "meta:->>'url'.ilike": searchQuery
      }
    });
    return await store2.fetch({ reset: true });
  }
  async function onSort(by) {
    $$invalidate(3, store2.orderBy = by, store2);
    await store2.fetch({ reset: true });
  }
  $$self.$$set = ($$props2) => {
    if ("onDelete" in $$props2)
      $$invalidate(0, onDelete = $$props2.onDelete);
    if ("openBrowser" in $$props2)
      $$invalidate(1, openBrowser = $$props2.openBrowser);
    if ("showMonitors" in $$props2)
      $$invalidate(2, showMonitors = $$props2.showMonitors);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  return [
    onDelete,
    openBrowser,
    showMonitors,
    store2,
    $store,
    sortingFields,
    onSearch,
    onSort,
    $$scope,
    slots
  ];
}
class List$3 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {
      onDelete: 0,
      openBrowser: 1,
      showMonitors: 2
    });
  }
}
var Modal_svelte_svelte_type_style_lang = "";
const get_header_slot_changes$1 = (dirty) => ({});
const get_header_slot_context$1 = (ctx) => ({});
const get_after_close_slot_changes = (dirty) => ({});
const get_after_close_slot_context = (ctx) => ({});
const get_before_close_slot_changes = (dirty) => ({});
const get_before_close_slot_context = (ctx) => ({});
function create_fragment$g(ctx) {
  let div5;
  let div4;
  let div3;
  let div1;
  let div0;
  let t0;
  let button;
  let t2;
  let t3;
  let h3;
  let t4;
  let div2;
  let div2_class_value;
  let div4_class_value;
  let current;
  let mounted;
  let dispose;
  const before_close_slot_template = ctx[6]["before-close"];
  const before_close_slot = create_slot(before_close_slot_template, ctx, ctx[5], get_before_close_slot_context);
  const after_close_slot_template = ctx[6]["after-close"];
  const after_close_slot = create_slot(after_close_slot_template, ctx, ctx[5], get_after_close_slot_context);
  const header_slot_template = ctx[6].header;
  const header_slot = create_slot(header_slot_template, ctx, ctx[5], get_header_slot_context$1);
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  return {
    c() {
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      if (before_close_slot)
        before_close_slot.c();
      t0 = space();
      button = element("button");
      button.textContent = "Close";
      t2 = space();
      if (after_close_slot)
        after_close_slot.c();
      t3 = space();
      h3 = element("h3");
      if (header_slot)
        header_slot.c();
      t4 = space();
      div2 = element("div");
      if (default_slot)
        default_slot.c();
      attr(button, "type", "button");
      button.autofocus = true;
      attr(button, "class", "btn btn-default");
      attr(div0, "class", "right");
      attr(h3, "class", "modal-title");
      attr(div1, "class", "modal-header");
      attr(div2, "class", div2_class_value = "modal-body " + ctx[0] + " svelte-17bnzlt");
      attr(div3, "class", "modal-content");
      attr(div4, "class", div4_class_value = "modal-dialog " + ctx[1] + " svelte-17bnzlt");
      attr(div4, "role", "document");
      attr(div5, "class", "modal");
      attr(div5, "tabindex", "-1");
      attr(div5, "role", "dialog");
      set_style(div5, "display", "block");
      set_style(div5, "background-color", "#fffc");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div4);
      append(div4, div3);
      append(div3, div1);
      append(div1, div0);
      if (before_close_slot) {
        before_close_slot.m(div0, null);
      }
      append(div0, t0);
      append(div0, button);
      append(div0, t2);
      if (after_close_slot) {
        after_close_slot.m(div0, null);
      }
      append(div1, t3);
      append(div1, h3);
      if (header_slot) {
        header_slot.m(h3, null);
      }
      append(div3, t4);
      append(div3, div2);
      if (default_slot) {
        default_slot.m(div2, null);
      }
      ctx[7](div5);
      current = true;
      button.focus();
      if (!mounted) {
        dispose = [
          listen(window, "keydown", ctx[4]),
          listen(button, "click", ctx[3])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (before_close_slot) {
        if (before_close_slot.p && (!current || dirty & 32)) {
          update_slot_base(before_close_slot, before_close_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(before_close_slot_template, ctx2[5], dirty, get_before_close_slot_changes), get_before_close_slot_context);
        }
      }
      if (after_close_slot) {
        if (after_close_slot.p && (!current || dirty & 32)) {
          update_slot_base(after_close_slot, after_close_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(after_close_slot_template, ctx2[5], dirty, get_after_close_slot_changes), get_after_close_slot_context);
        }
      }
      if (header_slot) {
        if (header_slot.p && (!current || dirty & 32)) {
          update_slot_base(header_slot, header_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(header_slot_template, ctx2[5], dirty, get_header_slot_changes$1), get_header_slot_context$1);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      if (!current || dirty & 1 && div2_class_value !== (div2_class_value = "modal-body " + ctx2[0] + " svelte-17bnzlt")) {
        attr(div2, "class", div2_class_value);
      }
      if (!current || dirty & 2 && div4_class_value !== (div4_class_value = "modal-dialog " + ctx2[1] + " svelte-17bnzlt")) {
        attr(div4, "class", div4_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(before_close_slot, local);
      transition_in(after_close_slot, local);
      transition_in(header_slot, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(before_close_slot, local);
      transition_out(after_close_slot, local);
      transition_out(header_slot, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      if (before_close_slot)
        before_close_slot.d(detaching);
      if (after_close_slot)
        after_close_slot.d(detaching);
      if (header_slot)
        header_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { bodyClass = "" } = $$props;
  let { widthClass = "" } = $$props;
  let elModal;
  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");
  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      const nodes = elModal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);
      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey)
        index = 0;
      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;
      tabbable[index].focus();
      e.preventDefault();
    }
  };
  const previously_focused = typeof document !== "undefined" && document.activeElement;
  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elModal = $$value;
      $$invalidate(2, elModal);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("bodyClass" in $$props2)
      $$invalidate(0, bodyClass = $$props2.bodyClass);
    if ("widthClass" in $$props2)
      $$invalidate(1, widthClass = $$props2.widthClass);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [
    bodyClass,
    widthClass,
    elModal,
    close,
    handle_keydown,
    $$scope,
    slots,
    div5_binding
  ];
}
class Modal$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, { bodyClass: 0, widthClass: 1 });
  }
}
function debounce(callback, wait2) {
  let timeout = null;
  return (...args) => {
    const next = () => callback(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, wait2);
  };
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var Sidebar_svelte_svelte_type_style_lang = "";
function create_else_block_2(ctx) {
  let t;
  return {
    c() {
      t = text("Stopped");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_6$1(ctx) {
  let t;
  return {
    c() {
      t = text("Recording");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5(ctx) {
  let if_block_anchor;
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block_6$1;
    return create_else_block_2;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type_2(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block_1$4(ctx) {
  let t;
  return {
    c() {
      t = text("Test");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_5$2(ctx) {
  let t;
  return {
    c() {
      t = text("Playing");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_4(ctx) {
  let if_block_anchor;
  function select_block_type_3(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block_5$2;
    return create_else_block_1$4;
  }
  let current_block_type = select_block_type_3(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type_3(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_3(ctx) {
  let t;
  return {
    c() {
      t = text("Reset");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let button0;
  let t0;
  let button1;
  let t1;
  let button2;
  let current;
  button0 = new Button({
    props: {
      kind: "ghost",
      disabled: ctx[1],
      icon: ctx[3] ? StopFilled16 : RecordingFilled16,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  button0.$on("click", ctx[10]);
  button1 = new Button({
    props: {
      kind: "ghost",
      disabled: ctx[1],
      icon: ctx[2] ? StopFilledAlt16 : PlayFilledAlt16,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  button1.$on("click", ctx[11]);
  button2 = new Button({
    props: {
      danger: true,
      kind: "ghost",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  button2.$on("click", ctx[12]);
  return {
    c() {
      create_component(button0.$$.fragment);
      t0 = space();
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
    },
    m(target, anchor) {
      mount_component(button0, target, anchor);
      insert(target, t0, anchor);
      mount_component(button1, target, anchor);
      insert(target, t1, anchor);
      mount_component(button2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button0_changes = {};
      if (dirty & 2)
        button0_changes.disabled = ctx2[1];
      if (dirty & 8)
        button0_changes.icon = ctx2[3] ? StopFilled16 : RecordingFilled16;
      if (dirty & 65544) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 2)
        button1_changes.disabled = ctx2[1];
      if (dirty & 4)
        button1_changes.icon = ctx2[2] ? StopFilledAlt16 : PlayFilledAlt16;
      if (dirty & 65540) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty & 65536) {
        button2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button2.$set(button2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button0, detaching);
      if (detaching)
        detach(t0);
      destroy_component(button1, detaching);
      if (detaching)
        detach(t1);
      destroy_component(button2, detaching);
    }
  };
}
function create_default_slot_1$3(ctx) {
  let toolbarcontent;
  let current;
  toolbarcontent = new ToolbarContent({
    props: {
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbarcontent.$$.fragment);
    },
    m(target, anchor) {
      mount_component(toolbarcontent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbarcontent_changes = {};
      if (dirty & 65550) {
        toolbarcontent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarcontent.$set(toolbarcontent_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarcontent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarcontent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarcontent, detaching);
    }
  };
}
function create_default_slot$6(ctx) {
  let toolbar;
  let current;
  toolbar = new Toolbar({
    props: {
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbar.$$.fragment);
    },
    m(target, anchor) {
      mount_component(toolbar, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbar_changes = {};
      if (dirty & 65550) {
        toolbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbar.$set(toolbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbar, detaching);
    }
  };
}
function create_else_block$b(ctx) {
  let t_value = ctx[15].value + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32768 && t_value !== (t_value = ctx2[15].value + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$a(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$7, create_if_block_2$3, create_if_block_3$3, create_if_block_4$3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[15].value == ctx2[6].ACTIVE)
      return 0;
    if (ctx2[15].value == ctx2[6].ERR)
      return 1;
    if (ctx2[15].value == ctx2[6].DONE)
      return 2;
    if (ctx2[15].value == ctx2[6].PENDING)
      return 3;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index !== previous_block_index) {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_4$3(ctx) {
  let t;
  return {
    c() {
      t = text("...");
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
function create_if_block_3$3(ctx) {
  let checkmark16;
  let current;
  checkmark16 = new Checkmark16({ props: { style: "fill: green" } });
  return {
    c() {
      create_component(checkmark16.$$.fragment);
    },
    m(target, anchor) {
      mount_component(checkmark16, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(checkmark16.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkmark16.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(checkmark16, detaching);
    }
  };
}
function create_if_block_2$3(ctx) {
  let error16;
  let current;
  error16 = new Error16({ props: { style: "fill: red" } });
  return {
    c() {
      create_component(error16.$$.fragment);
    },
    m(target, anchor) {
      mount_component(error16, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(error16.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(error16.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(error16, detaching);
    }
  };
}
function create_if_block_1$7(ctx) {
  let loading_1;
  let current;
  loading_1 = new Loading({
    props: {
      withOverlay: false,
      small: true,
      class: "-mx-2"
    }
  });
  return {
    c() {
      create_component(loading_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(loading_1, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(loading_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loading_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(loading_1, detaching);
    }
  };
}
function create_cell_slot(ctx) {
  let span;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$a, create_else_block$b];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[15].key === "status")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      span = element("span");
      if_block.c();
      attr(span, "slot", "cell");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if_blocks[current_block_type_index].m(span, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(span, null);
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
        detach(span);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_fragment$f(ctx) {
  let datatable;
  let current;
  datatable = new DataTable({
    props: {
      class: "xsteps " + ctx[0],
      headers: ctx[7],
      rows: ctx[4],
      $$slots: {
        cell: [
          create_cell_slot,
          ({ cell }) => ({ 15: cell }),
          ({ cell }) => cell ? 32768 : 0
        ],
        default: [create_default_slot$6]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(datatable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(datatable, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const datatable_changes = {};
      if (dirty & 1)
        datatable_changes.class = "xsteps " + ctx2[0];
      if (dirty & 16)
        datatable_changes.rows = ctx2[4];
      if (dirty & 98318) {
        datatable_changes.$$scope = { dirty, ctx: ctx2 };
      }
      datatable.$set(datatable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(datatable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(datatable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(datatable, detaching);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  let { StepType } = Recorder;
  let { class: clazz = "" } = $$props;
  let { loading = false } = $$props;
  let { playing = false } = $$props;
  let { playingStatus } = $$props;
  let { steps } = $$props;
  let { recording = false } = $$props;
  const dispatch = createEventDispatcher();
  const STATUS = {
    ACTIVE: "ACTIVE",
    ERR: "ERR",
    DONE: "DONE",
    PENDING: "PENDING"
  };
  let headers = [
    { key: "name", value: "Step" },
    { key: "detail", value: "Detail" },
    { key: "status", empty: true }
  ];
  let rows = [];
  function getStepDetail(step) {
    var _a;
    let selector = ((_a = step.data.selector) == null ? void 0 : _a.value) || "";
    if (step.is(StepType.INPUT) || step.is(StepType.TYPE)) {
      return `${selector} - ${step.value}`;
    } else if (step.is(StepType.KEYPRESS)) {
      return step.repr;
    } else if (step.is(StepType.WAIT_NAV)) {
      return step.url;
    } else if (step.is(StepType.SCROLL)) {
      return `(${step.left}, ${step.top})`;
    }
    return selector || "-";
  }
  const click_handler2 = () => dispatch(recording ? "stop" : "record");
  const click_handler_1 = () => dispatch(playing ? "stop" : "replay");
  const click_handler_2 = () => dispatch("reset");
  $$self.$$set = ($$props2) => {
    if ("class" in $$props2)
      $$invalidate(0, clazz = $$props2.class);
    if ("loading" in $$props2)
      $$invalidate(1, loading = $$props2.loading);
    if ("playing" in $$props2)
      $$invalidate(2, playing = $$props2.playing);
    if ("playingStatus" in $$props2)
      $$invalidate(8, playingStatus = $$props2.playingStatus);
    if ("steps" in $$props2)
      $$invalidate(9, steps = $$props2.steps);
    if ("recording" in $$props2)
      $$invalidate(3, recording = $$props2.recording);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 768) {
      {
        let curStep = playingStatus.step;
        let curIdx = steps.indexOf(curStep);
        $$invalidate(4, rows = steps.map((step, id) => ({
          id,
          name: step.name,
          detail: getStepDetail(step),
          step,
          status: step == curStep ? playingStatus.status : id < curIdx ? STATUS.DONE : STATUS.PENDING
        })));
      }
    }
  };
  return [
    clazz,
    loading,
    playing,
    recording,
    rows,
    dispatch,
    STATUS,
    headers,
    playingStatus,
    steps,
    click_handler2,
    click_handler_1,
    click_handler_2
  ];
}
class Sidebar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {
      class: 0,
      loading: 1,
      playing: 2,
      playingStatus: 8,
      steps: 9,
      recording: 3
    });
  }
}
function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[33] = list[i];
  child_ctx[35] = i;
  return child_ctx;
}
function create_else_block$a(ctx) {
  let div;
  let input;
  let t0;
  let select;
  let option;
  let mounted;
  let dispose;
  let each_value = ctx[11];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      select = element("select");
      option = element("option");
      option.textContent = "-- Use a Profile --";
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      input.disabled = true;
      attr(input, "class", "flex-1");
      option.__value = "";
      option.value = option.__value;
      if (ctx[12] === void 0)
        add_render_callback(() => ctx[20].call(select));
      attr(div, "class", "flex");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      set_input_value(input, ctx[0]);
      append(div, t0);
      append(div, select);
      append(select, option);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(select, ctx[12]);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[19]),
          listen(select, "change", ctx[13]),
          listen(select, "change", ctx[20])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if (dirty[0] & 2048) {
        each_value = ctx2[11];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$5(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$5(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty[0] & 6144) {
        select_option(select, ctx2[12]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$6(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(ctx[4]);
      set_style(div, "padding", "5px");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$9(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "loading...";
      set_style(div, "padding", "5px");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block$5(ctx) {
  let option;
  let t_value = ctx[33].name + "";
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      option.__value = option_value_value = ctx[33].id;
      option.value = option.__value;
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048 && t_value !== (t_value = ctx2[33].name + ""))
        set_data(t, t_value);
      if (dirty[0] & 2048 && option_value_value !== (option_value_value = ctx2[33].id)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_fragment$e(ctx) {
  let div3;
  let sidebar;
  let t0;
  let div2;
  let div1;
  let t1;
  let div0;
  let div3_class_value;
  let current;
  sidebar = new Sidebar({
    props: {
      class: "w-96 border-1 z-10 border-solid border-0 border-r border-gray-300 p-0",
      loading: ctx[3],
      playing: ctx[9],
      playingStatus: ctx[10],
      recorder: ctx[6],
      steps: ctx[8],
      recording: ctx[7]
    }
  });
  sidebar.$on("record", ctx[14]);
  sidebar.$on("replay", ctx[16]);
  sidebar.$on("reset", ctx[17]);
  sidebar.$on("stop", ctx[15]);
  function select_block_type(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block$9;
    if (ctx2[4])
      return create_if_block_1$6;
    return create_else_block$a;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  let div3_levels = [
    {
      class: div3_class_value = "px-0 py-0 flex " + ctx[1]
    },
    ctx[18]
  ];
  let div3_data = {};
  for (let i = 0; i < div3_levels.length; i += 1) {
    div3_data = assign(div3_data, div3_levels[i]);
  }
  return {
    c() {
      div3 = element("div");
      create_component(sidebar.$$.fragment);
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      if_block.c();
      t1 = space();
      div0 = element("div");
      attr(div0, "class", "flex-1");
      set_style(div0, "position", "relative");
      set_style(div0, "background-color", "#fff");
      attr(div1, "class", "flex-1 flex flex-col");
      attr(div2, "class", "flex-1 flex flex-col");
      set_attributes(div3, div3_data);
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      mount_component(sidebar, div3, null);
      append(div3, t0);
      append(div3, div2);
      append(div2, div1);
      if_block.m(div1, null);
      append(div1, t1);
      append(div1, div0);
      ctx[21](div0);
      current = true;
    },
    p(ctx2, dirty) {
      const sidebar_changes = {};
      if (dirty[0] & 8)
        sidebar_changes.loading = ctx2[3];
      if (dirty[0] & 512)
        sidebar_changes.playing = ctx2[9];
      if (dirty[0] & 1024)
        sidebar_changes.playingStatus = ctx2[10];
      if (dirty[0] & 64)
        sidebar_changes.recorder = ctx2[6];
      if (dirty[0] & 256)
        sidebar_changes.steps = ctx2[8];
      if (dirty[0] & 128)
        sidebar_changes.recording = ctx2[7];
      sidebar.$set(sidebar_changes);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, t1);
        }
      }
      set_attributes(div3, div3_data = get_spread_update(div3_levels, [
        (!current || dirty[0] & 2 && div3_class_value !== (div3_class_value = "px-0 py-0 flex " + ctx2[1])) && { class: div3_class_value },
        dirty[0] & 262144 && ctx2[18]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(sidebar);
      if_block.d();
      ctx[21](null);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  const omit_props_names = ["class", "macro", "url"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $macro, $$unsubscribe_macro = noop, $$subscribe_macro = () => ($$unsubscribe_macro(), $$unsubscribe_macro = subscribe(macro, ($$value) => $$invalidate(26, $macro = $$value)), macro);
  $$self.$$.on_destroy.push(() => $$unsubscribe_macro());
  let { class: clazz } = $$props;
  let { macro } = $$props;
  $$subscribe_macro();
  let { url: url2 = $macro.meta.url || "https://www.google.com" } = $$props;
  let api = getContext("api");
  getContext("store");
  let loading = true;
  let loadError;
  let container;
  let bbx;
  let browser;
  let browserView;
  let recorder;
  let recording = false;
  let steps = [];
  let playing = false;
  let playingStatus = {};
  let sessions = [];
  let selectedSessionId = null;
  const dispatch = createEventDispatcher();
  onMount(async () => {
    try {
      bbx = await api("/selectors2", "POST");
      browserView = await createView(__spreadProps(__spreadValues({}, bbx), { container }));
      browser = browserView.store;
      $$invalidate(6, recorder = new Base$2(browserView, findSelector));
      recorder.start();
      $$invalidate(7, recording = true);
      $$invalidate(3, loading = false);
      recorder.on("change", onRecordingChanged);
      go();
      $$invalidate(11, sessions = (await api("/sessions", { state: 0 })).data);
    } catch (e) {
      $$invalidate(3, loading = false);
      $$invalidate(4, loadError = `Please try again later, failed to load recorder: ${e.message}`);
    }
  });
  onDestroy(() => {
    api("/selectors2/" + bbx.id, "DELETE");
    recorder.off("change", onRecordingChanged);
  });
  async function onSelectSession(e) {
    let id = e.target.value;
    $$invalidate(12, selectedSessionId = id);
    let res2 = await api(`/sessions/${id}`);
    $$invalidate(3, loading = true);
    $$invalidate(9, playing = false);
    $$invalidate(7, recording = false);
    await browser.call("setCookies", res2.cookies || []);
    $$invalidate(7, recording = true);
    await go();
    $$invalidate(3, loading = false);
  }
  onRecordingChanged = debounce(onRecordingChanged, 100);
  function onRecordingChanged() {
    $$invalidate(8, steps = recorder.getSteps());
    dispatch("steps", toJSON(steps));
  }
  async function go() {
    if (url2) {
      await browser.pages[0].goto(url2);
    }
  }
  async function onRecord() {
    recorder.start();
    $$invalidate(9, playing = false);
    $$invalidate(7, recording = true);
  }
  async function onStop() {
    recorder.stop();
    $$invalidate(9, playing = false);
    $$invalidate(7, recording = false);
  }
  async function onReplay() {
    $$invalidate(9, playing = true);
    $$invalidate(7, recording = false);
    recorder.stop();
    await resetBBX();
    browser.pages[0].goto(url2);
    try {
      $$invalidate(10, playingStatus = {});
      for (let step of steps) {
        $$invalidate(10, playingStatus = { step, status: "ACTIVE" });
        if (!step.isEffect()) {
          await wait(2e3);
        }
        await step.play(browserView);
        $$invalidate(10, playingStatus = { step, status: "DONE" });
      }
      $$invalidate(9, playing = false);
    } catch (e) {
      console.error(`ERR: play step: `, e);
      $$invalidate(10, playingStatus = __spreadProps(__spreadValues({}, playingStatus), {
        status: "ERR",
        msg: e.message
      }));
    }
    $$invalidate(7, recording = false);
  }
  async function onReset() {
    recorder.stop();
    recorder.reset();
    recorder.start();
    await resetBBX();
    await go();
    $$invalidate(9, playing = false);
    $$invalidate(7, recording = false);
  }
  async function resetBBX() {
    let pages = browser.pages.slice(0);
    await browser.newPage();
    for (let i = 0; i < pages.length; i += 1) {
      pages[i].mainFrame.url;
      await pages[i].close();
    }
  }
  function findSelector(el) {
    let sel = _default(el, { root: el.ownerDocument });
    return new CSSSelector(sel);
  }
  function input_input_handler() {
    url2 = this.value;
    $$invalidate(0, url2);
  }
  function select_change_handler() {
    selectedSessionId = select_value(this);
    $$invalidate(12, selectedSessionId);
    $$invalidate(11, sessions);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(5, container);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("class" in $$new_props)
      $$invalidate(1, clazz = $$new_props.class);
    if ("macro" in $$new_props)
      $$subscribe_macro($$invalidate(2, macro = $$new_props.macro));
    if ("url" in $$new_props)
      $$invalidate(0, url2 = $$new_props.url);
  };
  return [
    url2,
    clazz,
    macro,
    loading,
    loadError,
    container,
    recorder,
    recording,
    steps,
    playing,
    playingStatus,
    sessions,
    selectedSessionId,
    onSelectSession,
    onRecord,
    onStop,
    onReplay,
    onReset,
    $$restProps,
    input_input_handler,
    select_change_handler,
    div0_binding
  ];
}
class Recorder_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { class: 1, macro: 2, url: 0 }, null, [-1, -1]);
  }
}
function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[27] = list[i];
  child_ctx[29] = i;
  return child_ctx;
}
function create_if_block_5$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "Please enter name and a valid start url for the recorder";
      attr(div, "class", "error");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block_4$2(ctx) {
  let span;
  let t0;
  let t1_value = ctx[1].models.length + "";
  let t1;
  let t2;
  let t3;
  let t4;
  return {
    c() {
      span = element("span");
      t0 = text("Used ");
      t1 = text(t1_value);
      t2 = text(" of ");
      t3 = text(ctx[9]);
      t4 = text(" macros.");
      attr(span, "class", "error");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
      append(span, t2);
      append(span, t3);
      append(span, t4);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t1_value !== (t1_value = ctx2[1].models.length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3$2(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "Upgrade account to create and use macros in cloud.";
      attr(span, "class", "error");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_2(ctx) {
  let div1;
  let div0;
  let input0;
  let t0;
  let input1;
  let t1;
  let span;
  let button;
  let t2;
  let button_disabled_value;
  let t3;
  let t4;
  let mounted;
  let dispose;
  let if_block0 = ctx[5] && create_if_block_5$1();
  function select_block_type(ctx2, dirty) {
    if (ctx2[9] == 0)
      return create_if_block_3$2;
    if (ctx2[2])
      return create_if_block_4$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type && current_block_type(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      span = element("span");
      button = element("button");
      t2 = text("Add New Macro");
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      if (if_block1)
        if_block1.c();
      attr(input0, "type", "text");
      attr(input0, "class", "form-control w-96");
      attr(input0, "placeholder", "New Macro Name");
      attr(input1, "type", "text");
      attr(input1, "class", "form-control w-96");
      attr(input1, "placeholder", "Start URL");
      attr(button, "class", "btn btn-default");
      attr(button, "role", "button");
      button.disabled = button_disabled_value = ctx[2] || ctx[7];
      attr(span, "class", "inline-block");
      attr(div0, "class", "flex");
      attr(div1, "class", "");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, input0);
      set_input_value(input0, ctx[3]);
      append(div0, t0);
      append(div0, input1);
      set_input_value(input1, ctx[4]);
      append(div0, t1);
      append(div0, span);
      append(span, button);
      append(button, t2);
      append(div1, t3);
      if (if_block0)
        if_block0.m(div1, null);
      append(div1, t4);
      if (if_block1)
        if_block1.m(div1, null);
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[18]),
          listen(input1, "input", ctx[19]),
          listen(button, "click", ctx[11])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 8 && input0.value !== ctx2[3]) {
        set_input_value(input0, ctx2[3]);
      }
      if (dirty & 16 && input1.value !== ctx2[4]) {
        set_input_value(input1, ctx2[4]);
      }
      if (dirty & 132 && button_disabled_value !== (button_disabled_value = ctx2[2] || ctx2[7])) {
        button.disabled = button_disabled_value;
      }
      if (ctx2[5]) {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_5$1();
          if_block0.c();
          if_block0.m(div1, t4);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if (if_block1)
          if_block1.d(1);
        if_block1 = current_block_type && current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1) {
        if_block1.d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$2(ctx) {
  let modal;
  let current;
  modal = new Modal$1({
    props: {
      widthClass: "w-11/12",
      bodyClass: "p-0",
      $$slots: {
        "before-close": [create_before_close_slot],
        header: [create_header_slot_1],
        default: [create_default_slot_1$2]
      },
      $$scope: { ctx }
    }
  });
  modal.$on("close", ctx[14]);
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty & 1073741888) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_default_slot_1$2(ctx) {
  let recorder;
  let current;
  recorder = new Recorder_1({
    props: {
      class: "w-full",
      style: "height: 90vh; width: 100%",
      macro: ctx[6]
    }
  });
  recorder.$on("steps", ctx[21]);
  return {
    c() {
      create_component(recorder.$$.fragment);
    },
    m(target, anchor) {
      mount_component(recorder, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const recorder_changes = {};
      if (dirty & 64)
        recorder_changes.macro = ctx2[6];
      recorder.$set(recorder_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(recorder.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(recorder.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(recorder, detaching);
    }
  };
}
function create_header_slot_1(ctx) {
  let div;
  let t0;
  let t1_value = ctx[6].name + "";
  let t1;
  return {
    c() {
      div = element("div");
      t0 = text("Recorder - ");
      t1 = text(t1_value);
      attr(div, "slot", "header");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t0);
      append(div, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t1_value !== (t1_value = ctx2[6].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_before_close_slot(ctx) {
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      button.textContent = "Save";
      attr(button, "slot", "before-close");
      attr(button, "class", "btn btn-primary text-white");
      set_style(button, "color", "#fff");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (!mounted) {
        dispose = listen(button, "click", ctx[20]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$8(ctx) {
  let modal;
  let current;
  modal = new Modal$1({
    props: {
      $$slots: {
        header: [create_header_slot$2],
        default: [create_default_slot$5]
      },
      $$scope: { ctx }
    }
  });
  modal.$on("close", ctx[22]);
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty & 1073742080) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_else_block$9(ctx) {
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let each_value = ctx[8].sieves;
  const get_key = (ctx2) => ctx2[27].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$4(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$4(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1$3();
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      if (each_1_else) {
        each_1_else.c();
      }
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      if (each_1_else) {
        each_1_else.m(target, anchor);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 256) {
        each_value = ctx2[8].sieves;
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block$4, each_1_anchor, get_each_context$4);
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block_1$3();
          each_1_else.c();
          each_1_else.m(each_1_anchor.parentNode, each_1_anchor);
        }
      }
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
      if (each_1_else)
        each_1_else.d(detaching);
    }
  };
}
function create_if_block_1$5(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block_1$3(ctx) {
  let t;
  return {
    c() {
      t = text("No monitor found using this macro.");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$4(key_1, ctx) {
  let div;
  let t_value = ctx[27].name + "";
  let t;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      t = text(t_value);
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 256 && t_value !== (t_value = ctx[27].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$5(ctx) {
  let div;
  function select_block_type_1(ctx2, dirty) {
    if (!ctx2[8].sieves)
      return create_if_block_1$5;
    return create_else_block$9;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      set_style(div, "max-height", "70vh");
      set_style(div, "overflow", "auto");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function create_header_slot$2(ctx) {
  let span;
  let t0;
  let t1_value = ctx[8].name + "";
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Monitors - ");
      t1 = text(t1_value);
      attr(span, "slot", "header");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 256 && t1_value !== (t1_value = ctx2[8].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$d(ctx) {
  let list;
  let t0;
  let t1;
  let if_block1_anchor;
  let current;
  list = new List$3({
    props: {
      onDelete: ctx[12],
      openBrowser: ctx[15],
      showMonitors: ctx[16],
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  let if_block0 = ctx[6] && create_if_block_2$2(ctx);
  let if_block1 = ctx[8] && create_if_block$8(ctx);
  return {
    c() {
      create_component(list.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      mount_component(list, target, anchor);
      insert(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const list_changes = {};
      if (dirty & 1073742014) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
      if (ctx2[6]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[8]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 256) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$8(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      destroy_component(list, detaching);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let $store;
  let $user, $$unsubscribe_user = noop, $$subscribe_user = () => ($$unsubscribe_user(), $$unsubscribe_user = subscribe(user, ($$value) => $$invalidate(23, $user = $$value)), user);
  $$self.$$.on_destroy.push(() => $$unsubscribe_user());
  let { api = getContext("api") } = $$props;
  let { user = getContext("user") } = $$props;
  $$subscribe_user();
  let limit = $user.constraint.macro;
  let limitReached = false;
  let newName = "";
  let url2 = "";
  let missingInfo = false;
  let openMacro;
  let savingMacro = false;
  let showMonitorsForMacro = null;
  let store2 = new Macros([], { orderBy: "-ts" });
  component_subscribe($$self, store2, (value) => $$invalidate(1, $store = value));
  setContext("store", store2);
  onMount(async () => {
    await store2.fetch();
  });
  async function onAdd() {
    if (!newName || !url2) {
      $$invalidate(5, missingInfo = true);
      return;
    }
    if (!url2.startsWith("http")) {
      $$invalidate(4, url2 = "https://" + url2);
    }
    $$invalidate(5, missingInfo = false);
    $$invalidate(7, savingMacro = true);
    $$invalidate(6, openMacro = await store2.create({
      name: newName || "Untitled",
      meta: { url: url2 }
    }, { wait: true }));
    $$invalidate(3, newName = "");
    $$invalidate(7, savingMacro = false);
    store2.fetch();
  }
  async function onDelete(model) {
    await removeMacroFromSieve(model.id);
    await model.destroy();
  }
  async function removeMacroFromSieve(id) {
    let res2 = await api(`/sieves?macro_id=${id}`, {
      "state.in": [40, 45, 90],
      _opt: { only: ["id"], limit: 100 }
    });
    let ids = res2.data.map((s) => s.id);
    if (ids.length == 0) {
      return;
    }
    await api("/batch/sieves", "PUT", { ids, macro_id: null });
    if (res2.total_count > res2.count) {
      await removeMacroFromSieve(id);
    }
  }
  async function onSaveMacro() {
    await openMacro.save();
    $$invalidate(6, openMacro = null);
    await store2.fetch();
  }
  function onDiscardMacro() {
    $$invalidate(6, openMacro = null);
  }
  function openBrowser(macro) {
    $$invalidate(6, openMacro = macro);
  }
  async function showMonitors(macro) {
    $$invalidate(8, showMonitorsForMacro = __spreadProps(__spreadValues({}, macro), { sieves: null }));
    $$invalidate(8, showMonitorsForMacro.sieves = (await api(`/sieves?state.in[0]=40&state.in[1]=45&_opt[limit]=500&macro_id=${macro.id}`)).data, showMonitorsForMacro);
  }
  function input0_input_handler() {
    newName = this.value;
    $$invalidate(3, newName);
  }
  function input1_input_handler() {
    url2 = this.value;
    $$invalidate(4, url2);
  }
  const click_handler2 = () => onSaveMacro();
  const steps_handler = (e) => openMacro.set({ steps: e.detail });
  const close_handler = () => $$invalidate(8, showMonitorsForMacro = null);
  $$self.$$set = ($$props2) => {
    if ("api" in $$props2)
      $$invalidate(17, api = $$props2.api);
    if ("user" in $$props2)
      $$subscribe_user($$invalidate(0, user = $$props2.user));
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      $$invalidate(2, limitReached = $store.models.length >= limit);
    }
  };
  return [
    user,
    $store,
    limitReached,
    newName,
    url2,
    missingInfo,
    openMacro,
    savingMacro,
    showMonitorsForMacro,
    limit,
    store2,
    onAdd,
    onDelete,
    onSaveMacro,
    onDiscardMacro,
    openBrowser,
    showMonitors,
    api,
    input0_input_handler,
    input1_input_handler,
    click_handler2,
    steps_handler,
    close_handler
  ];
}
class Macros_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { api: 17, user: 0 });
  }
}
class Session extends base.Model {
}
class Sessions extends base.PagedCollection {
  constructor() {
    super(...arguments);
    __publicField(this, "model", Session);
    __publicField(this, "url", "/sessions");
    __publicField(this, "limit", 20);
  }
}
function create_else_block$8(ctx) {
  let div;
  let input_1;
  let t0;
  let span;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input_1 = element("input");
      t0 = space();
      span = element("span");
      button = element("button");
      button.textContent = "Go";
      attr(input_1, "class", "form-control");
      attr(input_1, "type", "text");
      attr(button, "class", "btn btn-default");
      attr(span, "class", "input-group-btn");
      attr(div, "class", "input-group");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input_1);
      set_input_value(input_1, ctx[4]);
      ctx[11](input_1);
      append(div, t0);
      append(div, span);
      append(span, button);
      if (!mounted) {
        dispose = [
          listen(input_1, "input", ctx[10]),
          listen(input_1, "keypress", ctx[9]),
          listen(button, "click", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 16 && input_1.value !== ctx2[4]) {
        set_input_value(input_1, ctx2[4]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$7(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "loading...";
      set_style(div, "padding", "5px");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$c(ctx) {
  let div4;
  let div1;
  let h3;
  let t0_value = ctx[5].name + "";
  let t0;
  let t1;
  let t2;
  let div0;
  let button0;
  let t4;
  let button1;
  let t7;
  let ul;
  let li;
  let a;
  let t8;
  let t9;
  let div3;
  let t10;
  let div2;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$7;
    return create_else_block$8;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div4 = element("div");
      div1 = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = text(" - Remote Browser");
      t2 = space();
      div0 = element("div");
      button0 = element("button");
      button0.textContent = "Save Cookies and Close";
      t4 = space();
      button1 = element("button");
      button1.innerHTML = `<span class="caret"></span> 
        <span class="sr-only">Toogle</span>`;
      t7 = space();
      ul = element("ul");
      li = element("li");
      a = element("a");
      t8 = text("Close (New Cookies not saved)");
      t9 = space();
      div3 = element("div");
      if_block.c();
      t10 = space();
      div2 = element("div");
      set_style(h3, "flex", "1");
      attr(button0, "class", "btn btn-default");
      attr(button1, "type", "button");
      attr(button1, "class", "btn btn-default drowdown-toggle");
      attr(button1, "data-toggle", "dropdown");
      attr(a, "href", href);
      attr(ul, "class", "dropdown-menu");
      attr(div0, "class", "btn-group");
      attr(div1, "class", "panel-heading");
      set_style(div1, "display", "flex");
      set_style(div1, "align-items", "center");
      attr(div2, "class", "flex-auto");
      set_style(div2, "position", "relative");
      set_style(div2, "background-color", "#fff");
      attr(div3, "class", "panel-body flex-auto flex flex-column");
      set_style(div3, "padding", "0");
      attr(div4, "class", "panel panel-default flex-auto flex flex-column");
      set_style(div4, "margin", "0");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div1);
      append(div1, h3);
      append(h3, t0);
      append(h3, t1);
      append(div1, t2);
      append(div1, div0);
      append(div0, button0);
      append(div0, t4);
      append(div0, button1);
      append(div0, t7);
      append(div0, ul);
      append(ul, li);
      append(li, a);
      append(a, t8);
      append(div4, t9);
      append(div4, div3);
      if_block.m(div3, null);
      append(div3, t10);
      append(div3, div2);
      ctx[12](div2);
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[7]),
          listen(a, "click", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 32 && t0_value !== (t0_value = ctx2[5].name + ""))
        set_data(t0, t0_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div3, t10);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
      if_block.d();
      ctx[12](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
let href = "#";
function instance$c($$self, $$props, $$invalidate) {
  let $session, $$unsubscribe_session = noop, $$subscribe_session = () => ($$unsubscribe_session(), $$unsubscribe_session = subscribe(session, ($$value) => $$invalidate(5, $session = $$value)), session);
  $$self.$$.on_destroy.push(() => $$unsubscribe_session());
  let { session } = $$props;
  $$subscribe_session();
  let api = getContext("api");
  getContext("store");
  let loading = true;
  let input;
  let container;
  let bbx;
  let browser;
  let url2 = "https://www.google.com";
  const dispatch = createEventDispatcher();
  onMount(async () => {
    bbx = await api("/selectors2", "POST");
    console.log("bbx:", bbx);
    let browserView = await createView(__spreadProps(__spreadValues({}, bbx), { container }));
    browser = browserView.store;
    await browser.call("setCookies", session.cookies || []);
    $$invalidate(1, loading = false);
    go();
  });
  onDestroy(() => {
    api("/selectors2/" + bbx.id, "DELETE");
  });
  function go() {
    if (url2) {
      browser.pages[0].goto(url2);
    }
  }
  async function onSaveAndClose() {
    let res2 = await browser.call("getCookies");
    let cookies = res2.data;
    dispatch("save", { url: url2, cookies });
  }
  function onDiscard(e) {
    e.preventDefault();
    dispatch("discard");
  }
  function onInputKey(e) {
    if (e.keyCode == 13) {
      go();
      input.blur();
    }
  }
  function input_1_input_handler() {
    url2 = this.value;
    $$invalidate(4, url2);
  }
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(2, input);
    });
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(3, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("session" in $$props2)
      $$subscribe_session($$invalidate(0, session = $$props2.session));
  };
  return [
    session,
    loading,
    input,
    container,
    url2,
    $session,
    go,
    onSaveAndClose,
    onDiscard,
    onInputKey,
    input_1_input_handler,
    input_1_binding,
    div2_binding
  ];
}
class Browser extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { session: 0 });
  }
}
function create_default_slot_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("clear cookies");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$4(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "fa fa-trash-o error");
      set_style(i, "font-size", "1.5em");
    },
    m(target, anchor) {
      insert(target, i, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_fragment$b(ctx) {
  let tr;
  let td0;
  let t0_value = ctx[5].name + "";
  let t0;
  let t1;
  let td1;
  let t2_value = (ctx[5].cookies ? ctx[5].cookies.length : 0) + "";
  let t2;
  let t3;
  let td2;
  let button0;
  let t5;
  let button1;
  let t7;
  let div1;
  let confirmbtn0;
  let t8;
  let div0;
  let t9;
  let td3;
  let confirmbtn1;
  let current;
  let mounted;
  let dispose;
  confirmbtn0 = new ConfirmBtn({
    props: {
      class: "btn-xs",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  confirmbtn0.$on("click", ctx[8]);
  confirmbtn1 = new ConfirmBtn({
    props: {
      alignRight: "1",
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    }
  });
  confirmbtn1.$on("click", ctx[9]);
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      button0 = element("button");
      button0.textContent = "open remote browser";
      t5 = space();
      button1 = element("button");
      button1.textContent = "view monitors";
      t7 = space();
      div1 = element("div");
      create_component(confirmbtn0.$$.fragment);
      t8 = space();
      div0 = element("div");
      t9 = space();
      td3 = element("td");
      create_component(confirmbtn1.$$.fragment);
      attr(button0, "class", "btn btn-default btn-xs");
      attr(button1, "class", "btn btn-default btn-xs");
      attr(div1, "class", "inline");
      attr(td3, "title", "Delete");
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, t0);
      append(tr, t1);
      append(tr, td1);
      append(td1, t2);
      append(tr, t3);
      append(tr, td2);
      append(td2, button0);
      append(td2, t5);
      append(td2, button1);
      append(td2, t7);
      append(td2, div1);
      mount_component(confirmbtn0, div1, null);
      append(div1, t8);
      append(div1, div0);
      append(tr, t9);
      append(tr, td3);
      mount_component(confirmbtn1, td3, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button0, "click", ctx[6]),
          listen(button1, "click", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 32) && t0_value !== (t0_value = ctx2[5].name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 32) && t2_value !== (t2_value = (ctx2[5].cookies ? ctx2[5].cookies.length : 0) + ""))
        set_data(t2, t2_value);
      const confirmbtn0_changes = {};
      if (dirty & 1024) {
        confirmbtn0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      confirmbtn0.$set(confirmbtn0_changes);
      const confirmbtn1_changes = {};
      if (dirty & 1024) {
        confirmbtn1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      confirmbtn1.$set(confirmbtn1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(confirmbtn0.$$.fragment, local);
      transition_in(confirmbtn1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(confirmbtn0.$$.fragment, local);
      transition_out(confirmbtn1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      destroy_component(confirmbtn0);
      destroy_component(confirmbtn1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let $sess, $$unsubscribe_sess = noop, $$subscribe_sess = () => ($$unsubscribe_sess(), $$unsubscribe_sess = subscribe(sess, ($$value) => $$invalidate(5, $sess = $$value)), sess);
  $$self.$$.on_destroy.push(() => $$unsubscribe_sess());
  let { sess } = $$props;
  $$subscribe_sess();
  let { onClear: onClear2 } = $$props;
  let { openBrowser } = $$props;
  let { showMonitors } = $$props;
  let { onDelete } = $$props;
  const click_handler2 = (e) => openBrowser(sess);
  const click_handler_1 = (e) => showMonitors($sess);
  const click_handler_2 = (e) => onClear2(sess);
  const click_handler_3 = (e) => onDelete(sess);
  $$self.$$set = ($$props2) => {
    if ("sess" in $$props2)
      $$subscribe_sess($$invalidate(0, sess = $$props2.sess));
    if ("onClear" in $$props2)
      $$invalidate(1, onClear2 = $$props2.onClear);
    if ("openBrowser" in $$props2)
      $$invalidate(2, openBrowser = $$props2.openBrowser);
    if ("showMonitors" in $$props2)
      $$invalidate(3, showMonitors = $$props2.showMonitors);
    if ("onDelete" in $$props2)
      $$invalidate(4, onDelete = $$props2.onDelete);
  };
  return [
    sess,
    onClear2,
    openBrowser,
    showMonitors,
    onDelete,
    $sess,
    click_handler2,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class Profile extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {
      sess: 0,
      onClear: 1,
      openBrowser: 2,
      showMonitors: 3,
      onDelete: 4
    });
  }
}
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[14] = i;
  return child_ctx;
}
function create_catch_block$1(ctx) {
  return {
    c: noop,
    m: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$1(ctx) {
  return {
    c: noop,
    m: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_pending_block$1(ctx) {
  let td;
  let loader;
  let current;
  loader = new Loader({});
  return {
    c() {
      td = element("td");
      create_component(loader.$$.fragment);
      attr(td, "colspan", "4");
    },
    m(target, anchor) {
      insert(target, td, anchor);
      mount_component(loader, td, null);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(loader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      destroy_component(loader);
    }
  };
}
function create_else_block$7(ctx) {
  let tr;
  return {
    c() {
      tr = element("tr");
      tr.innerHTML = `<td>No session found. 
      </td>`;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_each_block$3(key_1, ctx) {
  let first;
  let profile;
  let current;
  profile = new Profile({
    props: {
      sess: ctx[12],
      onClear: ctx[2],
      openBrowser: ctx[0],
      showMonitors: ctx[1],
      onDelete: ctx[3]
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(profile.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(profile, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const profile_changes = {};
      if (dirty & 32)
        profile_changes.sess = ctx[12];
      if (dirty & 4)
        profile_changes.onClear = ctx[2];
      if (dirty & 1)
        profile_changes.openBrowser = ctx[0];
      if (dirty & 2)
        profile_changes.showMonitors = ctx[1];
      if (dirty & 8)
        profile_changes.onDelete = ctx[3];
      profile.$set(profile_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(profile.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(profile.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(profile, detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let div3;
  let div2;
  let div0;
  let h3;
  let t1;
  let small;
  let t2;
  let a;
  let t3;
  let t4;
  let div1;
  let t5;
  let searchbar;
  let t6;
  let listpager;
  let t7;
  let sortby;
  let t8;
  let table;
  let tbody;
  let tr0;
  let td;
  let t9;
  let tr1;
  let t16;
  let promise;
  let t17;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let current;
  searchbar = new SearchBar({});
  searchbar.$on("search", ctx[7]);
  listpager = new ListPager({ props: { store: ctx[4] } });
  sortby = new SortBy({
    props: {
      onSort: ctx[8],
      sortingFields: ctx[6],
      currentFieldName: ctx[5].orderBy
    }
  });
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[5].fetchPromise, info);
  let each_value = ctx[5].models;
  const get_key = (ctx2) => ctx2[12].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$3(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block$7();
  }
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      h3 = element("h3");
      h3.textContent = "Profiles";
      t1 = space();
      small = element("small");
      t2 = text("Create and use profiles for checks in cloud that require cookies or authentication.\n      ");
      a = element("a");
      t3 = text("Learn More");
      t4 = space();
      div1 = element("div");
      t5 = space();
      create_component(searchbar.$$.fragment);
      t6 = space();
      create_component(listpager.$$.fragment);
      t7 = space();
      create_component(sortby.$$.fragment);
      t8 = space();
      table = element("table");
      tbody = element("tbody");
      tr0 = element("tr");
      td = element("td");
      if (default_slot)
        default_slot.c();
      t9 = space();
      tr1 = element("tr");
      tr1.innerHTML = `<th>Name</th> 
        <th>Cookies</th> 
        <th>Options</th> 
        <th style="width: 20px"></th>`;
      t16 = space();
      info.block.c();
      t17 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      attr(a, "href", "" + (URL_WEBSITE + "/kb/help/profiles-for-cloud-monitors"));
      attr(a, "target", "_blank");
      set_style(div0, "flex", "1");
      attr(div1, "class", "flex-1");
      set_style(div1, "max-width", "50px");
      attr(div2, "class", "panel-heading flex items-center");
      attr(td, "colspan", "4");
      set_style(td, "background-color", "#eee");
      attr(tr1, "class", "bg-gray-200");
      attr(table, "class", "table");
      attr(div3, "class", "panel panel-default");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div2, div0);
      append(div0, h3);
      append(div0, t1);
      append(div0, small);
      append(small, t2);
      append(small, a);
      append(a, t3);
      append(div2, t4);
      append(div2, div1);
      append(div2, t5);
      mount_component(searchbar, div2, null);
      append(div2, t6);
      mount_component(listpager, div2, null);
      append(div2, t7);
      mount_component(sortby, div2, null);
      append(div3, t8);
      append(div3, table);
      append(table, tbody);
      append(tbody, tr0);
      append(tr0, td);
      if (default_slot) {
        default_slot.m(td, null);
      }
      append(tbody, t9);
      append(tbody, tr1);
      append(tbody, t16);
      info.block.m(tbody, info.anchor = null);
      info.mount = () => tbody;
      info.anchor = t17;
      append(tbody, t17);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      if (each_1_else) {
        each_1_else.m(tbody, null);
      }
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      const listpager_changes = {};
      if (dirty & 16)
        listpager_changes.store = ctx[4];
      listpager.$set(listpager_changes);
      const sortby_changes = {};
      if (dirty & 32)
        sortby_changes.currentFieldName = ctx[5].orderBy;
      sortby.$set(sortby_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx, ctx[9], !current ? get_all_dirty_from_scope(ctx[9]) : get_slot_changes(default_slot_template, ctx[9], dirty, null), null);
        }
      }
      info.ctx = ctx;
      dirty & 32 && promise !== (promise = ctx[5].fetchPromise) && handle_promise(promise, info);
      if (dirty & 47) {
        each_value = ctx[5].models;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, tbody, outro_and_destroy_block, create_each_block$3, null, get_each_context$3);
        check_outros();
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block$7();
          each_1_else.c();
          each_1_else.m(tbody, null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(searchbar.$$.fragment, local);
      transition_in(listpager.$$.fragment, local);
      transition_in(sortby.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(info.block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(searchbar.$$.fragment, local);
      transition_out(listpager.$$.fragment, local);
      transition_out(sortby.$$.fragment, local);
      transition_out(default_slot, local);
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(searchbar);
      destroy_component(listpager);
      destroy_component(sortby);
      if (default_slot)
        default_slot.d(detaching);
      info.block.d();
      info.token = null;
      info = null;
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (each_1_else)
        each_1_else.d();
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let $store;
  let { $$slots: slots = {}, $$scope } = $$props;
  let store2 = getContext("store");
  component_subscribe($$self, store2, (value) => $$invalidate(5, $store = value));
  let { openBrowser } = $$props;
  let { showMonitors } = $$props;
  let { onClear: onClear2 } = $$props;
  let { onDelete } = $$props;
  let searchQuery = "";
  let sortingFields = [
    { value: "-ts", label: "Newest First" },
    { value: "ts", label: "Oldest First" },
    { value: "name", label: "Name" },
    {
      value: "-name",
      label: "Name - Descending"
    }
  ];
  async function onSearch(e) {
    let { phrase } = e.detail;
    if (!phrase) {
      store2.setQuery({});
      return await store2.fetch({ reset: true });
    }
    searchQuery = `%${phrase}%`;
    store2.setQuery({ "name.ilike": searchQuery });
    await store2.fetch({ reset: true });
  }
  async function onSort(by) {
    $$invalidate(4, store2.orderBy = by, store2);
    await store2.fetch({ reset: true });
  }
  $$self.$$set = ($$props2) => {
    if ("openBrowser" in $$props2)
      $$invalidate(0, openBrowser = $$props2.openBrowser);
    if ("showMonitors" in $$props2)
      $$invalidate(1, showMonitors = $$props2.showMonitors);
    if ("onClear" in $$props2)
      $$invalidate(2, onClear2 = $$props2.onClear);
    if ("onDelete" in $$props2)
      $$invalidate(3, onDelete = $$props2.onDelete);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  return [
    openBrowser,
    showMonitors,
    onClear2,
    onDelete,
    store2,
    $store,
    sortingFields,
    onSearch,
    onSort,
    $$scope,
    slots
  ];
}
class List$2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      openBrowser: 0,
      showMonitors: 1,
      onClear: 2,
      onDelete: 3
    });
  }
}
const get_header_slot_changes = (dirty) => ({});
const get_header_slot_context = (ctx) => ({});
function create_fragment$9(ctx) {
  let div5;
  let div4;
  let div3;
  let div0;
  let button0;
  let t1;
  let h4;
  let t2;
  let div1;
  let t3;
  let div2;
  let button1;
  let current;
  let mounted;
  let dispose;
  const header_slot_template = ctx[4].header;
  const header_slot = create_slot(header_slot_template, ctx, ctx[3], get_header_slot_context);
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      button0 = element("button");
      button0.innerHTML = `<span aria-hidden="true">\xD7</span>`;
      t1 = space();
      h4 = element("h4");
      if (header_slot)
        header_slot.c();
      t2 = space();
      div1 = element("div");
      if (default_slot)
        default_slot.c();
      t3 = space();
      div2 = element("div");
      button1 = element("button");
      button1.textContent = "close modal";
      attr(button0, "type", "button");
      attr(button0, "class", "close");
      attr(button0, "data-dismiss", "modal");
      attr(button0, "aria-label", "Close");
      attr(h4, "class", "modal-title");
      attr(div0, "class", "modal-header");
      attr(div1, "class", "modal-body");
      attr(button1, "type", "button");
      button1.autofocus = true;
      attr(button1, "class", "btn btn-default");
      attr(div2, "class", "modal-footer");
      attr(div3, "class", "modal-content");
      attr(div4, "class", "modal-dialog");
      attr(div4, "role", "document");
      attr(div5, "class", "modal");
      attr(div5, "tabindex", "-1");
      attr(div5, "role", "dialog");
      set_style(div5, "display", "block");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div4);
      append(div4, div3);
      append(div3, div0);
      append(div0, button0);
      append(div0, t1);
      append(div0, h4);
      if (header_slot) {
        header_slot.m(h4, null);
      }
      append(div3, t2);
      append(div3, div1);
      if (default_slot) {
        default_slot.m(div1, null);
      }
      append(div3, t3);
      append(div3, div2);
      append(div2, button1);
      ctx[5](div5);
      current = true;
      button1.focus();
      if (!mounted) {
        dispose = [
          listen(window, "keydown", ctx[2]),
          listen(button1, "click", ctx[1]),
          listen(div5, "click", ctx[1])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (header_slot) {
        if (header_slot.p && (!current || dirty & 8)) {
          update_slot_base(header_slot, header_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(header_slot_template, ctx2[3], dirty, get_header_slot_changes), get_header_slot_context);
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header_slot, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header_slot, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      if (header_slot)
        header_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");
  let modal;
  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);
      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey)
        index = 0;
      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;
      tabbable[index].focus();
      e.preventDefault();
    }
  };
  const previously_focused = typeof document !== "undefined" && document.activeElement;
  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
  function div5_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modal = $$value;
      $$invalidate(0, modal);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [modal, close, handle_keydown, $$scope, slots, div5_binding];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  child_ctx[24] = i;
  return child_ctx;
}
function create_if_block_4$1(ctx) {
  let span;
  let t0;
  let t1_value = ctx[0].models.length + "";
  let t1;
  let t2;
  let t3;
  let t4;
  return {
    c() {
      span = element("span");
      t0 = text("Used ");
      t1 = text(t1_value);
      t2 = text(" of ");
      t3 = text(ctx[6]);
      t4 = text(" profiles.");
      attr(span, "class", "error");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
      append(span, t2);
      append(span, t3);
      append(span, t4);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].models.length + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3$1(ctx) {
  let span;
  return {
    c() {
      span = element("span");
      span.textContent = "Upgrade account to create and use profiles in cloud.";
      attr(span, "class", "error");
    },
    m(target, anchor) {
      insert(target, span, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_default_slot_1(ctx) {
  let div1;
  let div0;
  let input;
  let t0;
  let span;
  let button;
  let t1;
  let t2;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[6] == 0)
      return create_if_block_3$1;
    if (ctx2[1])
      return create_if_block_4$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      input = element("input");
      t0 = space();
      span = element("span");
      button = element("button");
      t1 = text("Add New Profile");
      t2 = space();
      if (if_block)
        if_block.c();
      attr(input, "type", "text");
      attr(input, "class", "form-control");
      attr(input, "placeholder", "New Profile Name");
      attr(button, "class", "btn btn-default");
      attr(button, "role", "button");
      button.disabled = ctx[1];
      attr(span, "class", "input-group-btn");
      attr(div0, "class", "input-group mr3");
      attr(div1, "class", "flex items-center");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, input);
      set_input_value(input, ctx[2]);
      append(div0, t0);
      append(div0, span);
      append(span, button);
      append(button, t1);
      append(div1, t2);
      if (if_block)
        if_block.m(div1, null);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[14]),
          listen(button, "click", ctx[8])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
      if (dirty & 2) {
        button.disabled = ctx2[1];
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block) {
        if_block.d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let div;
  let browser;
  let current;
  browser = new Browser({
    props: { session: ctx[3] }
  });
  browser.$on("save", ctx[10]);
  browser.$on("discard", ctx[11]);
  browser.$on("clear", ctx[15]);
  return {
    c() {
      div = element("div");
      create_component(browser.$$.fragment);
      attr(div, "class", "flex");
      set_style(div, "z-index", "10");
      set_style(div, "background-color", "#fff");
      set_style(div, "position", "fixed");
      set_style(div, "right", "0");
      set_style(div, "bottom", "0");
      set_style(div, "width", "70vw");
      set_style(div, "height", "80vh");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(browser, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const browser_changes = {};
      if (dirty & 8)
        browser_changes.session = ctx2[3];
      browser.$set(browser_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(browser.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(browser.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(browser);
    }
  };
}
function create_if_block$6(ctx) {
  let modal;
  let current;
  modal = new Modal({
    props: {
      $$slots: {
        header: [create_header_slot$1],
        default: [create_default_slot$3]
      },
      $$scope: { ctx }
    }
  });
  modal.$on("close", ctx[16]);
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty & 33554448) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_else_block$6(ctx) {
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let each_value = ctx[4].sieves;
  const get_key = (ctx2) => ctx2[22].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$2(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1$2();
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      if (each_1_else) {
        each_1_else.c();
      }
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      if (each_1_else) {
        each_1_else.m(target, anchor);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 16) {
        each_value = ctx2[4].sieves;
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block$2, each_1_anchor, get_each_context$2);
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block_1$2();
          each_1_else.c();
          each_1_else.m(each_1_anchor.parentNode, each_1_anchor);
        }
      }
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
      if (each_1_else)
        each_1_else.d(detaching);
    }
  };
}
function create_if_block_1$4(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("No monitor found");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block$2(key_1, ctx) {
  let div;
  let t_value = ctx[22].name + "";
  let t;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      t = text(t_value);
      this.first = div;
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 16 && t_value !== (t_value = ctx[22].name + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$3(ctx) {
  let div;
  function select_block_type_1(ctx2, dirty) {
    if (!ctx2[4].sieves)
      return create_if_block_1$4;
    return create_else_block$6;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      set_style(div, "max-height", "70vh");
      set_style(div, "overflow", "auto");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function create_header_slot$1(ctx) {
  let span;
  let t0;
  let t1_value = ctx[4].name + "";
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("Monitors - ");
      t1 = text(t1_value);
      attr(span, "slot", "header");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t1_value !== (t1_value = ctx2[4].name + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$8(ctx) {
  let list;
  let t0;
  let t1;
  let if_block1_anchor;
  let current;
  list = new List$2({
    props: {
      store: ctx[7],
      openBrowser: ctx[12],
      showMonitors: ctx[13],
      onClear,
      onDelete: ctx[9],
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  let if_block0 = ctx[3] && create_if_block_2$1(ctx);
  let if_block1 = ctx[4] && create_if_block$6(ctx);
  return {
    c() {
      create_component(list.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      mount_component(list, target, anchor);
      insert(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const list_changes = {};
      if (dirty & 33554439) {
        list_changes.$$scope = { dirty, ctx: ctx2 };
      }
      list.$set(list_changes);
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[4]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$6(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      destroy_component(list, detaching);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
async function onClear(session) {
  await session.save({ cookies: [] });
}
function instance$8($$self, $$props, $$invalidate) {
  let $store;
  let $user;
  let api = getContext("api");
  let user = getContext("user");
  component_subscribe($$self, user, (value) => $$invalidate(17, $user = value));
  getContext("labels");
  let limit = $user.constraint.session;
  let limitReached = false;
  let newName;
  let openSession;
  let showMonitorsForSession = null;
  let store2 = new Sessions([], { orderBy: "-ts" });
  component_subscribe($$self, store2, (value) => $$invalidate(0, $store = value));
  setContext("api", api);
  setContext("store", store2);
  onMount(async () => {
    await store2.fetch();
  });
  async function onAdd() {
    $$invalidate(3, openSession = await store2.create({ name: newName || "Untitled" }));
    $$invalidate(2, newName = "");
  }
  async function onDelete(model) {
    await removeSessionFromSieve(model.id);
    await model.destroy();
  }
  async function removeSessionFromSieve(id) {
    let res2 = await api(`/sieves?session_id=${id}`, {
      "state.in": [40, 45, 90],
      _opt: { only: ["id"], limit: 100 }
    });
    let ids = res2.data.map((s) => s.id);
    if (ids.length == 0) {
      return;
    }
    await api("/batch/sieves", "PUT", { ids, session_id: null });
    if (res2.total_count > res2.count) {
      await removeSessionFromSieve(id);
    }
  }
  async function onSaveData(e) {
    let { cookies } = e.detail;
    await openSession.save({ cookies });
    $$invalidate(3, openSession = null);
  }
  function onDiscard() {
    $$invalidate(3, openSession = null);
  }
  function openBrowser(session) {
    $$invalidate(3, openSession = session);
  }
  async function showMonitors(session) {
    $$invalidate(4, showMonitorsForSession = __spreadProps(__spreadValues({}, session), { sieves: null }));
    $$invalidate(4, showMonitorsForSession.sieves = (await api(`/sieves?state.in[0]=40&state.in[1]=45&_opt[limit]=500&session_id=${session.id}`)).data, showMonitorsForSession);
  }
  function input_input_handler() {
    newName = this.value;
    $$invalidate(2, newName);
  }
  const clear_handler = (e) => onClear(openSession.id);
  const close_handler = () => $$invalidate(4, showMonitorsForSession = null);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, limitReached = $store.length >= limit);
    }
  };
  return [
    $store,
    limitReached,
    newName,
    openSession,
    showMonitorsForSession,
    user,
    limit,
    store2,
    onAdd,
    onDelete,
    onSaveData,
    onDiscard,
    openBrowser,
    showMonitors,
    input_input_handler,
    clear_handler,
    close_handler
  ];
}
class Profiles extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
function createProxies(api) {
  let fetched = false;
  const { subscribe: subscribe2, set, update } = writable({
    loading: true,
    cus_data: {
      total_count: 0,
      count: 0,
      offset: 0,
      data: []
    },
    distill_data: {
      total_count: 0,
      count: 0,
      offset: 0,
      data: []
    },
    plan_id: ""
  });
  async function fetch_custom_proxy() {
    const user_proxy = await api("/proxies");
    const constraints = await api("/users/constraints");
    const distill_proxy = await api("/proxies/global");
    update((old) => ({
      loading: false,
      cus_data: __spreadValues({}, user_proxy),
      distill_data: __spreadValues({}, distill_proxy),
      plan_id: constraints.plan_id
    }));
  }
  async function del(id) {
    let res2 = await api("/proxies/" + id, "DELETE");
    fetch_custom_proxy();
    return res2;
  }
  async function add(doc) {
    const res2 = await api("/proxies", "POST", doc);
    fetch_custom_proxy();
    return res2;
  }
  async function patch(doc) {
    const res2 = await api("/proxies/" + doc.id, "PATCH", doc);
    await fetch_custom_proxy();
    return res2;
  }
  return {
    subscribe: subscribe2,
    async fetch() {
      !fetched && await fetch_custom_proxy();
      fetched = true;
    },
    del,
    add,
    patch
  };
}
var EditProxy_svelte_svelte_type_style_lang = "";
function create_if_block_1$3(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(ctx[1]);
      attr(p, "class", "error");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_default_slot$2(ctx) {
  let form;
  let div1;
  let label0;
  let t1;
  let div0;
  let input;
  let t2;
  let div3;
  let label1;
  let t4;
  let div2;
  let textarea;
  let t5;
  let span;
  let t10;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block_1$3(ctx);
  return {
    c() {
      form = element("form");
      div1 = element("div");
      label0 = element("label");
      label0.textContent = "Name";
      t1 = space();
      div0 = element("div");
      input = element("input");
      t2 = space();
      div3 = element("div");
      label1 = element("label");
      label1.textContent = "Proxy List";
      t4 = space();
      div2 = element("div");
      textarea = element("textarea");
      t5 = space();
      span = element("span");
      span.innerHTML = `Add one proxy on one line. Proxies must authenticate using username and password. <br/> 
          Format: username:password@address:port<br/>
          Example: alpha:bravo@1.1.1.1:9000<br/>
          Example: alpha:bravo@my-proxy-host:9000`;
      t10 = space();
      if (if_block)
        if_block.c();
      attr(label0, "for", "proxyname");
      attr(label0, "class", "col-sm-3 col-form-label svelte-va63su");
      attr(input, "type", "text");
      attr(input, "class", "form-control");
      attr(input, "placeholder", "A name to identify proxies from dropdowns");
      attr(div0, "class", "col-sm-9");
      attr(div1, "class", "form-group row");
      attr(label1, "for", "proxylist");
      attr(label1, "class", "col-sm-3 col-form-label svelte-va63su");
      attr(textarea, "type", "text");
      attr(textarea, "class", "form-control");
      attr(textarea, "rows", "4");
      attr(span, "class", "help");
      attr(div2, "class", "col-sm-9");
      attr(div3, "class", "form-group row");
    },
    m(target, anchor) {
      insert(target, form, anchor);
      append(form, div1);
      append(div1, label0);
      append(div1, t1);
      append(div1, div0);
      append(div0, input);
      set_input_value(input, ctx[0].name);
      append(form, t2);
      append(form, div3);
      append(div3, label1);
      append(div3, t4);
      append(div3, div2);
      append(div2, textarea);
      set_input_value(textarea, ctx[2]);
      append(div2, t5);
      append(div2, span);
      append(form, t10);
      if (if_block)
        if_block.m(form, null);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[6]),
          listen(textarea, "input", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 1 && input.value !== ctx2[0].name) {
        set_input_value(input, ctx2[0].name);
      }
      if (dirty & 4) {
        set_input_value(textarea, ctx2[2]);
      }
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$3(ctx2);
          if_block.c();
          if_block.m(form, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(form);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_else_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Edit Proxy");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Add New Proxy");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_header_slot(ctx) {
  let span;
  function select_block_type(ctx2, dirty) {
    if (ctx2[3])
      return create_if_block$5;
    return create_else_block$5;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      span = element("span");
      if_block.c();
      attr(span, "slot", "header");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if_block.m(span, null);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      if_block.d();
    }
  };
}
function create_buttons_slot(ctx) {
  let span;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      button = element("button");
      button.textContent = "Save";
      attr(button, "class", "btn btn-primary");
      attr(span, "slot", "buttons");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, button);
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$7(ctx) {
  let modal;
  let current;
  modal = new Modal$2({
    props: {
      $$slots: {
        buttons: [create_buttons_slot],
        header: [create_header_slot],
        default: [create_default_slot$2]
      },
      $$scope: { ctx }
    }
  });
  modal.$on("close", ctx[4]);
  modal.$on("submit", ctx[5]);
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & 1031) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { detail } = $$props;
  const dispatch = createEventDispatcher();
  const store2 = getContext("store");
  let errMsg = "";
  let isNew = !detail.id;
  let peersStr = detail.peers.join("\n");
  function close() {
    dispatch("close");
  }
  async function handleEdit() {
    let tPeers = peersStr.split(/[\n,]+/);
    let peers = [];
    let hosts = new Set();
    $$invalidate(1, errMsg = "");
    for (let i = 0, len = tPeers.length; i < len; i += 1) {
      let peer = tPeers[i].trim();
      if (peer.length == 0) {
        continue;
      }
      if (/https*:\/\//.test(peer)) {
        peer = peer.slice(peer.indexOf(":") + 3);
      }
      try {
        let url2 = new URL("http://" + peer);
        if (!url2.username || !url2.password) {
          throw new Error("Missing username or password");
        }
        if (hosts.has(url2.host)) {
          throw new Error("Duplicate records are not supported");
        }
        hosts.add(url2.host);
      } catch (e) {
        $$invalidate(1, errMsg = `Invalid proxy ${peer} at line #${i + 1} (${e.message})`);
        return;
      }
      peers.push(peer);
    }
    if (peers.length == 0) {
      $$invalidate(1, errMsg = "No valid proxy entries found");
      return;
    }
    const LIMIT = 50;
    if (peers.length > LIMIT) {
      $$invalidate(1, errMsg = `Can't add more than ${LIMIT} servers, ${peers.length} added.`);
      return;
    }
    try {
      if (isNew) {
        await store2.add(__spreadProps(__spreadValues({}, detail), { peers }));
      } else {
        await store2.patch(__spreadProps(__spreadValues({}, detail), { peers }));
      }
      close();
    } catch (err) {
      $$invalidate(1, errMsg = err.message);
    }
  }
  function input_input_handler() {
    detail.name = this.value;
    $$invalidate(0, detail);
  }
  function textarea_input_handler() {
    peersStr = this.value;
    $$invalidate(2, peersStr);
  }
  $$self.$$set = ($$props2) => {
    if ("detail" in $$props2)
      $$invalidate(0, detail = $$props2.detail);
  };
  return [
    detail,
    errMsg,
    peersStr,
    isNew,
    close,
    handleEdit,
    input_input_handler,
    textarea_input_handler
  ];
}
class EditProxy extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { detail: 0 });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function create_else_block_1$1(ctx) {
  let tr;
  return {
    c() {
      tr = element("tr");
      tr.innerHTML = `<td colspan="4">Click the add button to add your own proxies and use them for checks in cloud.</td>`;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_if_block$4(ctx) {
  let tr;
  let td0;
  let t0_value = ctx[6].name + "";
  let t0;
  let t1;
  let td1;
  let t2_value = ctx[6].description + "";
  let t2;
  let t3;
  let t4;
  let td2;
  let t5;
  let td3;
  let confirmbtn;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[6].peers.length > 0)
      return create_if_block_1$2;
    return create_else_block$4;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  function click_handler2(...args) {
    return ctx[3](ctx[6], ...args);
  }
  function click_handler_1(...args) {
    return ctx[4](ctx[6], ...args);
  }
  confirmbtn = new ConfirmBtn({
    props: {
      alignRight: "1",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  confirmbtn.$on("click", click_handler_1);
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      if_block.c();
      t4 = space();
      td2 = element("td");
      td2.innerHTML = `<button class="btn btn-default btn-xs btn-slim"><i class="fa fa-edit"></i></button>`;
      t5 = space();
      td3 = element("td");
      create_component(confirmbtn.$$.fragment);
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, t0);
      append(tr, t1);
      append(tr, td1);
      append(td1, t2);
      append(tr, t3);
      if_block.m(tr, null);
      append(tr, t4);
      append(tr, td2);
      append(tr, t5);
      append(tr, td3);
      mount_component(confirmbtn, td3, null);
      current = true;
      if (!mounted) {
        dispose = listen(td2, "click", click_handler2);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx[6].name + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 1) && t2_value !== (t2_value = ctx[6].description + ""))
        set_data(t2, t2_value);
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(tr, t4);
        }
      }
      const confirmbtn_changes = {};
      if (dirty & 512) {
        confirmbtn_changes.$$scope = { dirty, ctx };
      }
      confirmbtn.$set(confirmbtn_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(confirmbtn.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(confirmbtn.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if_block.d();
      destroy_component(confirmbtn);
      mounted = false;
      dispose();
    }
  };
}
function create_else_block$4(ctx) {
  let td;
  return {
    c() {
      td = element("td");
      td.textContent = "Empty List";
    },
    m(target, anchor) {
      insert(target, td, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_if_block_1$2(ctx) {
  let td;
  let div;
  let t_value = ctx[6].peers + "";
  let t;
  return {
    c() {
      td = element("td");
      div = element("div");
      t = text(t_value);
      set_style(div, "max-height", "200px");
      set_style(div, "overflow", "hidden");
    },
    m(target, anchor) {
      insert(target, td, anchor);
      append(td, div);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[6].peers + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(td);
    }
  };
}
function create_default_slot$1(ctx) {
  let i;
  return {
    c() {
      i = element("i");
      attr(i, "class", "fa fa-times error");
      set_style(i, "font-size", "1.5em");
    },
    m(target, anchor) {
      insert(target, i, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(i);
    }
  };
}
function create_each_block$1(key_1, ctx) {
  let first;
  let if_block_anchor;
  let current;
  let if_block = ctx[6].state == 40 && create_if_block$4(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (ctx[6].state == 40) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx);
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
        detach(first);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$6(ctx) {
  let div2;
  let div1;
  let t1;
  let table;
  let thead;
  let t9;
  let tbody;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t10;
  let tr1;
  let td;
  let button;
  let t12;
  let p;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[6].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$1(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1$1();
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div1.innerHTML = `<div style="flex: 1"><h3>My Proxies (beta)</h3></div>`;
      t1 = space();
      table = element("table");
      thead = element("thead");
      thead.innerHTML = `<tr><th class="col-name">Name</th> 
        <th class="col-desc">Description</th> 
        <th class="col-peers">Proxies</th> 
        <th class="col-edit"></th> 
        <th class="col-del"></th></tr>`;
      t9 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      t10 = space();
      tr1 = element("tr");
      td = element("td");
      button = element("button");
      button.textContent = "Add New Proxy";
      t12 = space();
      p = element("p");
      p.textContent = "Be careful when using slow proxies. Checks that take longer time cost more. A check that takes 7s is counted as 1. Each additional 7s is counted as a check.";
      attr(div1, "class", "panel-heading flex items-center");
      attr(button, "class", "btn btn-primary");
      attr(p, "class", "help");
      attr(td, "colspan", "5");
      attr(table, "class", "table");
      attr(div2, "class", "panel panel-default");
      toggle_class(div2, "hide", !USER.prefs.proxy);
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      append(div2, t1);
      append(div2, table);
      append(table, thead);
      append(table, t9);
      append(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      if (each_1_else) {
        each_1_else.m(tbody, null);
      }
      append(tbody, t10);
      append(tbody, tr1);
      append(tr1, td);
      append(td, button);
      append(td, t12);
      append(td, p);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 7) {
        each_value = ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, tbody, outro_and_destroy_block, create_each_block$1, t10, get_each_context$1);
        check_outros();
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block_1$1();
          each_1_else.c();
          each_1_else.m(tbody, t10);
        }
      }
      if (dirty & 0) {
        toggle_class(div2, "hide", !USER.prefs.proxy);
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (each_1_else)
        each_1_else.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { proxies } = $$props;
  let { onDelete } = $$props;
  let { onEdit } = $$props;
  const click_handler2 = (proxy, e) => onEdit(proxy);
  const click_handler_1 = (proxy, e) => onDelete(proxy.id);
  const click_handler_2 = (e) => onEdit({
    name: "New Proxy Name",
    peers: [],
    description: ""
  });
  $$self.$$set = ($$props2) => {
    if ("proxies" in $$props2)
      $$invalidate(0, proxies = $$props2.proxies);
    if ("onDelete" in $$props2)
      $$invalidate(1, onDelete = $$props2.onDelete);
    if ("onEdit" in $$props2)
      $$invalidate(2, onEdit = $$props2.onEdit);
  };
  return [proxies, onDelete, onEdit, click_handler2, click_handler_1, click_handler_2];
}
class List$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { proxies: 0, onDelete: 1, onEdit: 2 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
}
function create_else_block_1(ctx) {
  let tr;
  return {
    c() {
      tr = element("tr");
      tr.innerHTML = `<td colspan="3">We are adding proxies to the inventory. Check back soon to view updated list.</td>`;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_else_block$3(ctx) {
  let t;
  return {
    c() {
      t = text("Available");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$3(ctx) {
  let t_value = ctx[1].msgUpgrade + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[1].msgUpgrade + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block(key_1, ctx) {
  let tr;
  let td0;
  let t0_value = ctx[1].name + "";
  let t0;
  let t1;
  let td1;
  let t2_value = (ctx[1].cost || 2) + "";
  let t2;
  let t3;
  let td2;
  let t4_value = ctx[1].description + "";
  let t4;
  let t5;
  let td3;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].msgUpgrade)
      return create_if_block$3;
    return create_else_block$3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      td3 = element("td");
      if_block.c();
      this.first = tr;
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      append(tr, td0);
      append(td0, t0);
      append(tr, t1);
      append(tr, td1);
      append(td1, t2);
      append(tr, t3);
      append(tr, td2);
      append(td2, t4);
      append(tr, t5);
      append(tr, td3);
      if_block.m(td3, null);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && t0_value !== (t0_value = ctx[1].name + ""))
        set_data(t0, t0_value);
      if (dirty & 1 && t2_value !== (t2_value = (ctx[1].cost || 2) + ""))
        set_data(t2, t2_value);
      if (dirty & 1 && t4_value !== (t4_value = ctx[1].description + ""))
        set_data(t4, t4_value);
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(td3, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if_block.d();
    }
  };
}
function create_fragment$5(ctx) {
  let div2;
  let div1;
  let t3;
  let table;
  let thead;
  let t11;
  let tbody;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let t12;
  let tr1;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[1].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1();
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div1.innerHTML = `<div style="flex: 1"><h3>Managed Proxies</h3> 
      <small>Distill provided premium proxies available for checks in cloud.</small></div>`;
      t3 = space();
      table = element("table");
      thead = element("thead");
      thead.innerHTML = `<tr><th width="200">Name</th> 
        <th width="100">Cost*</th> 
        <th>Description</th> 
        <th width="200">Availability</th></tr>`;
      t11 = space();
      tbody = element("tbody");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      if (each_1_else) {
        each_1_else.c();
      }
      t12 = space();
      tr1 = element("tr");
      tr1.innerHTML = `<td colspan="4">*The cost of using a proxy is accounted as checks in the account. If a proxy&#39;s cost is N, 1 check using that proxy will be counted as N checks.</td>`;
      attr(div1, "class", "panel-heading flex items-center");
      attr(table, "class", "table");
      attr(div2, "class", "panel panel-default");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div1);
      append(div2, t3);
      append(div2, table);
      append(table, thead);
      append(table, t11);
      append(table, tbody);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(tbody, null);
      }
      if (each_1_else) {
        each_1_else.m(tbody, null);
      }
      append(tbody, t12);
      append(tbody, tr1);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, tbody, destroy_block, create_each_block, t12, get_each_context);
        if (each_value.length) {
          if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        } else if (!each_1_else) {
          each_1_else = create_else_block_1();
          each_1_else.c();
          each_1_else.m(tbody, t12);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (each_1_else)
        each_1_else.d();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { proxies } = $$props;
  $$self.$$set = ($$props2) => {
    if ("proxies" in $$props2)
      $$invalidate(0, proxies = $$props2.proxies);
  };
  return [proxies];
}
class ListManaged extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { proxies: 0 });
  }
}
function create_else_block$2(ctx) {
  let list;
  let t;
  let listmanaged;
  let current;
  list = new List$1({
    props: {
      proxies: ctx[1].cus_data.data,
      onDelete: ctx[5],
      onEdit: ctx[4]
    }
  });
  listmanaged = new ListManaged({
    props: {
      proxies: ctx[1].distill_data.data
    }
  });
  return {
    c() {
      create_component(list.$$.fragment);
      t = space();
      create_component(listmanaged.$$.fragment);
    },
    m(target, anchor) {
      mount_component(list, target, anchor);
      insert(target, t, anchor);
      mount_component(listmanaged, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const list_changes = {};
      if (dirty & 2)
        list_changes.proxies = ctx2[1].cus_data.data;
      list.$set(list_changes);
      const listmanaged_changes = {};
      if (dirty & 2)
        listmanaged_changes.proxies = ctx2[1].distill_data.data;
      listmanaged.$set(listmanaged_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(list.$$.fragment, local);
      transition_in(listmanaged.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(list.$$.fragment, local);
      transition_out(listmanaged.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(list, detaching);
      if (detaching)
        detach(t);
      destroy_component(listmanaged, detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.textContent = "Loading data...";
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$2(ctx) {
  let modaleditproxy;
  let current;
  modaleditproxy = new EditProxy({
    props: {
      detail: ctx[0],
      api: ctx[2]
    }
  });
  modaleditproxy.$on("close", ctx[6]);
  return {
    c() {
      create_component(modaleditproxy.$$.fragment);
    },
    m(target, anchor) {
      mount_component(modaleditproxy, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modaleditproxy_changes = {};
      if (dirty & 1)
        modaleditproxy_changes.detail = ctx2[0];
      modaleditproxy.$set(modaleditproxy_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modaleditproxy.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modaleditproxy.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modaleditproxy, detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let current_block_type_index;
  let if_block0;
  let t;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_1$1, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1].loading)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = ctx[0] != null && create_if_block$2(ctx);
  return {
    c() {
      if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(t.parentNode, t);
      }
      if (ctx2[0] != null) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let $store;
  let api = getContext("api");
  let store2 = createProxies(api);
  component_subscribe($$self, store2, (value) => $$invalidate(1, $store = value));
  window.store = store2;
  setContext("store", store2);
  let proxyDetail = null;
  onMount(async () => {
    await store2.fetch();
  });
  async function onEdit(proxy) {
    if (!proxy.id && USER.subscription.plan_id[0] == "0") {
      alert("Only paid customers can add custom proxies.");
      return;
    }
    $$invalidate(0, proxyDetail = proxy);
  }
  async function onDelete(id) {
    await store2.del(id);
  }
  const close_handler = () => $$invalidate(0, proxyDetail = null);
  return [proxyDetail, $store, api, store2, onEdit, onDelete, close_handler];
}
class Proxies extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
  }
}
const Backbone$2 = window.Backbone;
if (!Backbone$2) {
  throw new Error("ADD Backbone");
}
const Model = base.Model;
const Collection$1 = base.Collection;
const InputParam = Model.extend({
  defaults: {
    name: "",
    type: "text"
  }
});
var Tpl = Model.extend({
  encodedFields: ["params", "sieve_config", "sieve_rule"],
  urlRoot: "/tpls/sieves",
  defaults: function() {
    return {
      desc_name: "Search Result",
      desc_uri: "https://www.domain.tld",
      desc_info: "Selection contains search result containing url and snippet. Does not contain ads.",
      sieve_type: C.TYPE_HTML,
      sieve_uri: null,
      sieve_config: {
        selections: [{
          frames: [{
            index: 0,
            excludes: [],
            includes: [{
              type: "css",
              expr: "body"
            }]
          }],
          dynamic: true
        }],
        includeStyle: false,
        dataAttr: "text"
      },
      params: new Collection$1([])
    };
  },
  parse: function(response) {
    var response = Tpl.__super__.parse.call(this, response);
    response.params = new Collection$1(response.params);
    return response;
  }
});
const Tpls = base.PagedCollection.extend({
  model: Tpl,
  url: "/tpls/sieves"
});
var Pattern = Model.extend({
  encodedFields: ["pattern_params"],
  defaults: function() {
    return {
      pattern: null,
      uri_ref: null,
      pattern_params: new Collection$1()
    };
  },
  parse: function(response) {
    var response = Pattern.__super__.parse.call(this, response);
    response.pattern_params = new Collection$1(response.pattern_params);
    return response;
  }
});
const Patterns = Collection$1.extend({
  model: Pattern,
  url: function() {
    return ["/tpls/sieves", this.tpl.id, "patterns"].join("/");
  }
});
var ModelTpl = {
  Pattern,
  Patterns,
  InputParam,
  Tpl,
  Tpls
};
const domo = window.domo;
if (!domo) {
  throw new Error("ADD domo");
}
const $$1 = window.jQuery;
if (!$$1) {
  throw new Error("ADD jQuery");
}
const _$1 = window._;
if (!_$1) {
  throw new Error("ADD _");
}
const async$1 = window.async;
if (!async$1) {
  throw new Error("ADD async");
}
const moment$1 = window.moment;
if (!moment$1) {
  throw new Error("ADD moment");
}
const Backbone$1 = window.Backbone;
if (!Backbone$1) {
  throw new Error("ADD Backbone");
}
function strToRe(str) {
  return str.replace(/[[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function getSearchParams(url2) {
  const params2 = {};
  url2.searchParams.forEach(function(v, k) {
    params2[k] = v;
  });
  return params2;
}
const Row = View$1.Base.extend({
  name: "SieveTplRow",
  tagName: "li",
  className: "list-group-item",
  onDel: function() {
    this.model.destroy();
  },
  render: function() {
    const attrs = this.model.attributes;
    let btnDel;
    this.$el.empty().attr({
      "data-id": attrs.id
    }).append(DIV(DIV({ style: "float: left" }, btnDel = BUTTON({
      "class": "btn btn-default xbtn-light",
      "title": T("a_del")
    }, I({ "class": "fa fa-trash-o" }))), DIV(DIV(attrs.desc_name), DIV(attrs.desc_uri))));
    btnDel.onclick = this.onDel;
    return this;
  }
});
const Collection = View$1.Collection.extend({
  name: "TplCollection",
  tagName: "ul",
  className: "list-group",
  addOne: function(model) {
    const view = new Row({ model, parent: this });
    this.$el.append(view.render().el);
    return view;
  }
});
const TplList = View$1.ActionProvider.extend({
  postInit: function() {
    if (Supports.agents.local && !Supports.isSignedIn()) {
      this.view = new Backbone$1.View({ el: DIV("Please sign in to your account and try again") });
    } else {
      this.view = new Collection({
        collection: this.collection = new ModelTpl.Tpls(),
        parent: this
      });
    }
  },
  render: function() {
    this.$el.empty().append(DIV({ "class": "xpage-header" }, H3(T("l_sieve_tpl_list"), " ", SMALL("(beta)"))), this.view.render().el);
    return this;
  },
  showList: function() {
    this.collection && this.collection.fetch({ data: { user_id: USER.id } });
  }
});
const DescEditor = View$1.ActionProvider.extend({
  postInit: function(options) {
    const model = this.model;
    this.fields = {
      name: Editor.create("text", {
        parent: this,
        model,
        param: {
          name: "desc_name",
          help: "h_tpl_desc_name"
        }
      }),
      info: Editor.create("textarea", {
        parent: this,
        model,
        param: {
          name: "desc_info",
          help: "h_desc"
        }
      })
    };
  },
  render: function() {
    const fields = this.fields;
    this.$el.empty().append(_$1.map(["name", "info"], function(key) {
      return DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_tpl_desc_" + key)), DIV({ "class": "col-md-10" }, fields[key].render().el));
    }));
    return this;
  }
});
const SimpleTplEditor = View$1.ActionProvider.extend({
  name: "SimpleTplEditor",
  actions: {
    "tpl_save": { fn: "action_save" }
  },
  action_save: function(x, el) {
    const self = this;
    const newModel = this.model.clone();
    $$1(el).button("loading");
    newModel.save({
      sieve_config: JSON.parse(this.sieve.config),
      sieve_type: this.sieve.content_type
    }, {
      error: onError,
      success: function(model) {
        Msg.info("Template saved!");
        setTimeout(savePatterns, 0);
      }
    });
    function savePatterns() {
      self.patterns.tpl = newModel;
      async$1.each(self.patterns.models, savePattern, function(err, res2) {
        if (err) {
          onError(err);
        } else {
          onFinish();
        }
      });
    }
    function savePattern(pattern, callback) {
      pattern.save(null, {
        error: function() {
          callback(new Error("Failed to save pattern"));
        },
        success: function() {
          callback();
        }
      });
    }
    function onFinish() {
      $$1(el).button("reset");
      push("/w/tpls/all/");
    }
    function onError(err) {
      console.error("Error saving template", err);
      $$1(el).button("reset");
      Msg.error("Failed to save template");
    }
  },
  handleNetworkError: function() {
    let msg = "Failed to load data. Please check network connection and try again.";
    if (Supports.agents.local && !Supports.isSignedIn()) {
      msg = "Please sign in to your account and try again";
    }
    this.$elLoad.addClass("error").text(msg);
  },
  postInit: function(options) {
    const model = this.model;
    this.patterns = new ModelTpl.Patterns();
    this.pattern = new ModelTpl.Pattern();
    this.patterns.add(this.pattern);
    this.views = {
      patternURIEditor: new Editor.create("text", {
        parent: this,
        model: this.pattern,
        param: {
          name: "pattern",
          help: "h_tpl_url_pattern"
        }
      }),
      desc: new DescEditor({ parent: this, model }).render()
    };
    this.$el.addClass("form-horizontal");
    this.$el.empty().append(DIV({ "class": "xpage-header" }, H4(T("Match URL"))), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_uri_pattern")), this.elTip = DIV({ "class": "col-md-10 hide" }, this.views.patternURIEditor.render().el), this.elLoad = DIV({ "class": "col-md-10" }, "Loading data...")), DIV({ "class": "form-group" }, LABEL({ "class": "control-label col-md-2" }, T("l_url")), DIV({ "class": "col-md-10" }, this.elURL = DIV())), this.elDesc = DIV({ "class": "hide" }, DIV({ "class": "xpage-header" }, H4(T("l_desc"))), this.views.desc.el, DIV({ "class": "form-group" }, DIV({ "class": "col-md-offset-2 col-md-10 xtbar-form" }, BUTTON({
      "class": "btn btn-primary xbtn-default",
      "data-action": "tpl_save"
    }, T("a_save")), BUTTON({
      "class": "btn btn-default",
      "data-action": "go_back"
    }, T("a_discard"))))));
    this.$elLoad = $$1(this.elLoad);
    this.start();
  },
  setPattern: function(pattern) {
    const sieve = this.sieve;
    new URL(sieve.uri);
    $$1(this.elLoad).remove();
    $$1(this.elTip).removeClass("hide");
    $$1(this.elDesc).removeClass("hide");
    if (!pattern) {
      $$1(this.elTip).find("input").focus();
    } else {
      $$1(this.elDesc).find("input").first().focus();
    }
    this.pattern.set({
      pattern: pattern || strToRe(sieve.uri.split("/").slice(2).join("/")) + "$",
      uri_ref: sieve.uri
    });
    this.model.set({
      desc_name: sieve.name,
      desc_info: "",
      desc_uri: sieve.uri.split("/").slice(0, 3).join("/")
    });
  },
  start: function() {
    const self = this;
    Api.api("/sieves/" + this.options.sieveId, "GET", {}, function(err, sieve) {
      if (err) {
        self.handleNetworkError();
        return;
      }
      self.sieve = sieve;
      const uri = sieve.uri;
      self.$elLoad.text("Finding URL pattern...");
      self.elURL.textContent = uri;
      async$1.parallel({
        sieves: function(callback) {
          const host = new URL(uri).host;
          Api.api("/sieves", "GET", {
            "uri.ne": uri,
            "uri.like": "%" + host + "%",
            "state.in": [40, 45]
          }, callback);
        },
        patterns: function(callback) {
          Api.api("/tpls/patterns/search", "GET", {
            url: uri
          }, callback);
        }
      }, function(err2, result) {
        if (err2) {
          console.error("Failed to fetch data: ", err2);
          self.handleNetworkError();
        } else {
          self.suggestOptions(sieve, result.sieves.data, result.patterns.data);
        }
      });
    });
  },
  suggestOptions: function(sieve, sieves, patterns) {
    const self = this;
    const uri = sieve.uri;
    let suggestedPatterns;
    this.$elLoad.empty();
    if (patterns.length > 0) {
      suggestedPatterns = patterns;
    } else if (sieves.length > 0) {
      suggestedPatterns = this.generatePatterns(uri, sieves);
    }
    if (suggestedPatterns) {
      suggestedPatterns = _$1.uniq(suggestedPatterns, function(sp) {
        return sp.pattern;
      });
      this.$elLoad.append(DIV({ "class": "list-group" }, _$1.map(suggestedPatterns, function(pattern) {
        return A({ "href": "#", "class": "list-group-item" }, DIV(SAMP(pattern.pattern)), SMALL(pattern.uri_ref));
      })), P(), BUTTON({ "class": "btn btn-default" }, "Or, use custom pattern"));
      this.$(".list-group-item").click(".list-group-item", function(e) {
        e.preventDefault();
        self.setPattern($$1(e.currentTarget).find("samp").text());
      });
      this.$elLoad.find("button").click(function() {
        self.setPattern();
      });
    } else {
      this.setPattern();
    }
  },
  generatePatterns: function(uri, sieves) {
    const parts = uri.split("/");
    const url2 = new URL(uri);
    const pathParts = url2.pathname.split("/");
    const searchParams = getSearchParams(url2);
    const similarSieves = _$1.filter(sieves, function(sieve) {
      const url22 = new URL(sieve.uri);
      const pathParts2 = url22.pathname.split("/");
      const searchParams2 = getSearchParams(url22);
      return pathParts.length == pathParts2.length && _$1.isEqual(_$1.keys(searchParams), _$1.keys(searchParams2));
    });
    if (similarSieves.length > 0) {
      return _$1.map(similarSieves, function(sieve) {
        const refParts = sieve.uri.split("/");
        const exprParts = _$1.map(parts, function(part, i) {
          return part === refParts[i] ? strToRe(part) : part.length > 0 ? "(.*)" : "";
        });
        exprParts[2] = strToRe(parts[2]);
        return {
          pattern: exprParts.slice(2).join("/") + (url2.pathname == "/" ? "$" : ""),
          uri_ref: sieve.uri
        };
      });
    }
  }
});
const TplEditor = View$1.ActionProvider.extend({
  name: "TplEditor",
  create: function(sieveId) {
    if (this.view) {
      this.view.remove();
    }
    this.view = new SimpleTplEditor({
      parent: this,
      sieveId,
      model: new ModelTpl.Tpl()
    });
    this.elView.appendChild(this.view.render().el);
  },
  render: function() {
    this.$el.empty().append(DIV({ "class": "xtbar" }, BUTTON({
      "class": "btn btn-default",
      "data-action": "go_back"
    }, I({ "class": "fa fa-chevron-left" }), " ", T("a_discard"))), DIV({ "class": "xpage-header" }, H3(T("l_tpl"), " ", SMALL("Templates help add monitors using preconfigured selections."))), this.elView = DIV());
    return this;
  }
});
var ViewSieveTpls = {
  TplList,
  Editor: TplEditor
};
function create_fragment$3(ctx) {
  let div1;
  let div0;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      ctx[1](div0);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[1](null);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  getContext("api");
  let parent = getContext("view:root");
  let el;
  let view;
  onMount(() => {
    view = new ViewSieveTpls.TplList({ el, parent }).render();
    view.showList();
    return () => view.remove();
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  return [el, div0_binding];
}
class List extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
function create_fragment$2(ctx) {
  let div1;
  let div0;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      ctx[2](div0);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      ctx[2](null);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { route: route2 } = $$props;
  getContext("api");
  let parent = getContext("view:root");
  let el;
  let view;
  onMount(() => {
    view = new ViewSieveTpls.Editor({ el, parent }).render();
    view.create(route2.id);
    return () => view.remove();
  });
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("route" in $$props2)
      $$invalidate(1, route2 = $$props2.route);
  };
  return [el, route2, div0_binding];
}
class AddFrom extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { route: 1 });
  }
}
function create_catch_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let current_block_type_index;
  let if_block;
  let t;
  let list;
  let current;
  const if_block_creators = [
    create_if_block$1,
    create_if_block_3,
    create_if_block_4,
    create_if_block_5,
    create_if_block_8,
    create_if_block_9,
    create_if_block_10,
    create_if_block_11,
    create_else_block$1
  ];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0].module == "sieve")
      return 0;
    if (ctx2[0].module == "export")
      return 1;
    if (ctx2[0].module == "import")
      return 2;
    if (ctx2[0].module == "tpls")
      return 3;
    if (ctx2[0].module == "macros")
      return 4;
    if (ctx2[0].module == "profiles")
      return 5;
    if (ctx2[0].module == "proxies")
      return 6;
    if (ctx2[0].module == "list")
      return 7;
    return 8;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  list = new List$4({
    props: {
      route,
      hidden: ctx[0].module != "list"
    }
  });
  return {
    c() {
      if_block.c();
      t = space();
      create_component(list.$$.fragment);
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t, anchor);
      mount_component(list, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(t.parentNode, t);
      }
      const list_changes = {};
      if (dirty & 1)
        list_changes.hidden = ctx2[0].module != "list";
      list.$set(list_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t);
      destroy_component(list, detaching);
    }
  };
}
function create_else_block$1(ctx) {
  let error404;
  let current;
  error404 = new Error404({ props: { useLayout: false } });
  return {
    c() {
      create_component(error404.$$.fragment);
    },
    m(target, anchor) {
      mount_component(error404, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(error404.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(error404.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(error404, detaching);
    }
  };
}
function create_if_block_11(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_if_block_10(ctx) {
  let proxies;
  let current;
  proxies = new Proxies({});
  return {
    c() {
      create_component(proxies.$$.fragment);
    },
    m(target, anchor) {
      mount_component(proxies, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(proxies.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(proxies.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(proxies, detaching);
    }
  };
}
function create_if_block_9(ctx) {
  let profiles;
  let current;
  profiles = new Profiles({});
  return {
    c() {
      create_component(profiles.$$.fragment);
    },
    m(target, anchor) {
      mount_component(profiles, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(profiles.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(profiles.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(profiles, detaching);
    }
  };
}
function create_if_block_8(ctx) {
  let macros;
  let current;
  macros = new Macros_1({});
  return {
    c() {
      create_component(macros.$$.fragment);
    },
    m(target, anchor) {
      mount_component(macros, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(macros.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(macros.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(macros, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_6, create_if_block_7];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[0].prefix == "all")
      return 0;
    if (ctx2[0].prefix == "add-from")
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_2(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_4(ctx) {
  let import_1;
  let current;
  import_1 = new Import({ props: { route: ctx[0] } });
  return {
    c() {
      create_component(import_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(import_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const import_1_changes = {};
      if (dirty & 1)
        import_1_changes.route = ctx2[0];
      import_1.$set(import_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(import_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(import_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(import_1, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let export_1;
  let current;
  export_1 = new Export({ props: { route: ctx[0] } });
  return {
    c() {
      create_component(export_1.$$.fragment);
    },
    m(target, anchor) {
      mount_component(export_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const export_1_changes = {};
      if (dirty & 1)
        export_1_changes.route = ctx2[0];
      export_1.$set(export_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(export_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(export_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(export_1, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_if_block_2];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0].prefix == "dup" || ctx2[0].prefix == "add" || ctx2[0].prefix == "edit")
      return 0;
    if (ctx2[0].prefix == "detail")
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_1(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_7(ctx) {
  let addtplfrom;
  let current;
  addtplfrom = new AddFrom({ props: { route: ctx[0] } });
  return {
    c() {
      create_component(addtplfrom.$$.fragment);
    },
    m(target, anchor) {
      mount_component(addtplfrom, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const addtplfrom_changes = {};
      if (dirty & 1)
        addtplfrom_changes.route = ctx2[0];
      addtplfrom.$set(addtplfrom_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(addtplfrom.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(addtplfrom.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(addtplfrom, detaching);
    }
  };
}
function create_if_block_6(ctx) {
  let tpllist;
  let current;
  tpllist = new List({});
  return {
    c() {
      create_component(tpllist.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tpllist, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(tpllist.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tpllist.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tpllist, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let detail;
  let current;
  detail = new Detail({ props: { route } });
  return {
    c() {
      create_component(detail.$$.fragment);
    },
    m(target, anchor) {
      mount_component(detail, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(detail.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(detail.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(detail, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let edit;
  let current;
  edit = new Edit({ props: { route: ctx[0] } });
  return {
    c() {
      create_component(edit.$$.fragment);
    },
    m(target, anchor) {
      mount_component(edit, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const edit_changes = {};
      if (dirty & 1)
        edit_changes.route = ctx2[0];
      edit.$set(edit_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(edit.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(edit.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(edit, detaching);
    }
  };
}
function create_pending_block(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let await_block_anchor;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    blocks: [, , ,]
  };
  handle_promise(ctx[2], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    m(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_fragment$1(ctx) {
  let layout;
  let current;
  layout = new Layout_1({
    props: {
      renderDefaultToolbar: ctx[0].module !== "list",
      contentScrollTop: ctx[1],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  layout.$on("scroll", ctx[3]);
  return {
    c() {
      create_component(layout.$$.fragment);
    },
    m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const layout_changes = {};
      if (dirty & 1)
        layout_changes.renderDefaultToolbar = ctx2[0].module !== "list";
      if (dirty & 2)
        layout_changes.contentScrollTop = ctx2[1];
      if (dirty & 131073) {
        layout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}
function matchRoute(rParam, path) {
  let i = 0, params2 = {};
  let matches = rParam.pattern.exec(path);
  while (i < rParam.keys.length) {
    params2[rParam.keys[i]] = matches[++i] || null;
  }
  return params2;
}
function instance$1($$self, $$props, $$invalidate) {
  let $route;
  let $querystring;
  component_subscribe($$self, route, ($$value) => $$invalidate(0, $route = $$value));
  component_subscribe($$self, querystring, ($$value) => $$invalidate(7, $querystring = $$value));
  let { params: params2 = {} } = $$props;
  let contentScrollTop = 0;
  let lastListScrollTop = 0;
  const user = getContext("user");
  const labels = getContext("labels");
  const clients = new ModelClient.Clients(user.clients);
  clients.defaultId = getContext("clientId");
  const sieves = new Model$2.Sieves(null, {
    comparator(model) {
      return -new Date(model.get("ts_data"));
    }
  });
  setContext("clients", clients);
  setContext("watchlist:stores", { clients, sieves });
  set_store_value(route, $route.team = "0", $route);
  const initPromise = fetchAll();
  window.App.clients = clients;
  window.App.sieves = sieves;
  const routes = [":data.d/:id.id", ":data.d/", ":id.id", ""];
  const rParams = routes.map(parse);
  onParamsChange(params2);
  function onParamsChange(params3) {
    if (params3.prefix == "error") {
      if (Supports.agents.local) {
        Service$1.ErrorActions.clearErrorUnreadList();
      }
    }
    let { prefix, wild } = params3;
    if (wild) {
      let path = "/" + wild;
      for (let rp of rParams) {
        if (rp.pattern.test(path)) {
          params3 = __spreadValues(__spreadValues({}, params3), matchRoute(rp, path));
          break;
        }
      }
    }
    params3.query = lib.parse($querystring);
    let oldModule = $route.module;
    let newModule = params3.module;
    let oldTeam = $route.team;
    let newTeam = params3.team;
    if (oldTeam != newTeam) {
      Api.setIdentityId(newTeam == 0 ? null : newTeam);
      fetchAll();
    }
    route.set(params3);
    if (oldModule != newModule) {
      if (oldModule == "list") {
        $$invalidate(1, contentScrollTop = lastListScrollTop);
      } else if (newModule == "list") {
        $$invalidate(1, contentScrollTop += 1);
      }
    }
  }
  function onScroll(e) {
    $route.module == "list" && (lastListScrollTop = e.target.scrollTop);
  }
  instance$W.on("clients", fetchClients);
  instance$W.on("open", fetchAll);
  instance$W.on("tags", fetchLabels);
  onDestroy(() => {
    instance$W.off("clients", fetchClients);
    instance$W.off("open", fetchAll);
    instance$W.off("tags", fetchLabels);
  });
  async function fetchClients() {
    await clients.fetch();
  }
  async function fetchAll() {
    await Promise.all([fetchClients(), labels.fetch()]);
  }
  async function fetchLabels() {
    await labels.fetch();
  }
  $$self.$$set = ($$props2) => {
    if ("params" in $$props2)
      $$invalidate(4, params2 = $$props2.params);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      {
        window.App.route = $route;
      }
    }
    if ($$self.$$.dirty & 16) {
      {
        onParamsChange(params2);
      }
    }
  };
  return [$route, contentScrollTop, initPromise, onScroll, params2];
}
class Watchlist extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { params: 4 });
  }
}
var AppExt_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let t;
  return {
    c() {
      t = text("Loading...");
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block(ctx) {
  let router;
  let current;
  router = new Router({ props: { routes: ctx[3] } });
  return {
    c() {
      create_component(router.$$.fragment);
    },
    m(target, anchor) {
      mount_component(router, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(router.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(router.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(router, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let t1;
  let current_block_type_index;
  let if_block;
  let t2;
  let a;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = `<div class="xmsg" style="display:inline-block;"></div> 
  <div class="xerror" style="display:inline-block;"></div>`;
      t1 = space();
      if_block.c();
      t2 = space();
      a = element("a");
      a.textContent = "Get Help";
      attr(div2, "id", "msg");
      attr(div2, "class", "container-fluid xmsgbox");
      set_style(div2, "width", "100%");
      attr(a, "class", "btn btn-danger xbtn-help xbtn-default");
      attr(a, "href", "https://distill.io/help/contact");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      ctx[7](div2);
      insert(target, t1, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, t2, anchor);
      insert(target, a, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(t2.parentNode, t2);
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
        detach(div2);
      ctx[7](null);
      if (detaching)
        detach(t1);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(a);
    }
  };
}
let theme = "white";
function instance($$self, $$props, $$invalidate) {
  let $user, $$unsubscribe_user = noop, $$subscribe_user = () => ($$unsubscribe_user(), $$unsubscribe_user = subscribe(user, ($$value) => $$invalidate(8, $user = $$value)), user);
  $$self.$$.on_destroy.push(() => $$unsubscribe_user());
  let { labels = new ModelLabel.Labels() } = $$props;
  let { user = new Self() } = $$props;
  $$subscribe_user();
  let loaded = false;
  let elMsg;
  setContext("api", Api.api);
  setContext("user", user);
  setContext("labels", labels);
  setContext("clientId", Service$1.store.Prefs.get("client.id"));
  const routes = {
    "/settings/:module/": Index_ext,
    "/teams/": Teams,
    "/teams/:id": Team,
    "/usage/:module/": Usage_1,
    "/w/:team/:module/": Watchlist,
    "/w/:team/:module/:prefix/*": Watchlist,
    "*": Error404
  };
  if (location.hash == "" || location.hash.startsWith("#inbox")) {
    replace("/w/0/list/all/");
  }
  instance$W.on("users", syncUser);
  var Root = View$1.RoutedRoot.extend({
    actions: {
      "go_back": { fn: "action_go_back" },
      "go_up": { fn: "action_go_up" }
    },
    action_go_back() {
      navBack();
    },
    action_go_up() {
      let path = location.hash.slice(1);
      if (path.endsWith("/")) {
        let parts = path.split("/");
        let newParts = parts.slice(0, parts.length - 2);
        let newPath = newParts.join("/") + "/";
        push(newPath);
      } else {
        push(path.slice(0, path.lastIndexOf("/") + 1));
      }
    },
    route(path) {
      push(`/${path}`);
    }
  });
  let { root = new Root() } = $$props;
  setContext("view:root", root);
  Core.Acts.setView(root);
  onMount(async () => {
    Msg.bind(elMsg);
    window.USER = $user;
    await isReady();
    await Promise.all([syncUser()]);
    $$invalidate(1, loaded = true);
  });
  onDestroy(() => {
    instance$W.off("users", syncUser);
  });
  function navBack() {
    if (history.length > 1) {
      history.back();
    } else {
      replace("/w/0/list/all/");
    }
  }
  async function isReady() {
    return new Promise((resolve) => {
      if (Service$1.service.ready) {
        if (Service$1.auth.isReady()) {
          resolve();
        } else {
          location.href = Service$1.service.serviceLoginUrl;
        }
      } else {
        Service$1.service.once("init", resolve);
      }
    });
  }
  async function syncUser() {
    if (Service$1.auth.isLoggedIn()) {
      await user.fetch().catch(async (e) => {
        let tUser = await Service$1.store.UserStore.findOne({ id: Service$1.auth.getId() });
        tUser && user.set(tUser);
      });
    }
    $user.locale || Service$1.store.Prefs.get("locale");
    await loadLang($user.locale || "en-US");
  }
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      elMsg = $$value;
      $$invalidate(2, elMsg);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("labels" in $$props2)
      $$invalidate(4, labels = $$props2.labels);
    if ("user" in $$props2)
      $$subscribe_user($$invalidate(0, user = $$props2.user));
    if ("root" in $$props2)
      $$invalidate(5, root = $$props2.root);
  };
  document.documentElement.setAttribute("theme", theme);
  return [user, loaded, elMsg, routes, labels, root, navBack, div2_binding];
}
class AppExt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { labels: 4, user: 0, root: 5, navBack: 6 });
  }
  get labels() {
    return this.$$.ctx[4];
  }
  set labels(labels) {
    this.$$set({ labels });
    flush();
  }
  get user() {
    return this.$$.ctx[0];
  }
  set user(user) {
    this.$$set({ user });
    flush();
  }
  get root() {
    return this.$$.ctx[5];
  }
  set root(root) {
    this.$$set({ root });
    flush();
  }
  get navBack() {
    return this.$$.ctx[6];
  }
}
Api.init({
  events: true,
  identityId: window.group ? group.id : null
});
const store = new Store();
const app = new AppExt({
  target: document.body
});
app.store = store;
window.App = app;
