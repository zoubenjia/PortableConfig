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
function noop() {
}
function assign$1(tar, src2) {
  for (const k in src2)
    tar[k] = src2[k];
  return tar;
}
function is_promise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign$1($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);
  for (const k in props)
    if (!keys.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function compute_slots(slots) {
  const result = {};
  for (const key in slots) {
    result[key] = true;
  }
  return result;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
function append(target, node2) {
  target.appendChild(node2);
}
function insert(target, node2, anchor) {
  target.insertBefore(node2, anchor || null);
}
function detach(node2) {
  node2.parentNode.removeChild(node2);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data2) {
  return document.createTextNode(data2);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node2, event, handler, options) {
  node2.addEventListener(event, handler, options);
  return () => node2.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function stop_propagation(fn) {
  return function(event) {
    event.stopPropagation();
    return fn.call(this, event);
  };
}
function attr$1(node2, attribute, value) {
  if (value == null)
    node2.removeAttribute(attribute);
  else if (node2.getAttribute(attribute) !== value)
    node2.setAttribute(attribute, value);
}
function set_attributes(node2, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node2.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node2.removeAttribute(key);
    } else if (key === "style") {
      node2.style.cssText = attributes[key];
    } else if (key === "__value") {
      node2.value = node2[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node2[key] = attributes[key];
    } else {
      attr$1(node2, key, attributes[key]);
    }
  }
}
function set_svg_attributes(node2, attributes) {
  for (const key in attributes) {
    attr$1(node2, key, attributes[key]);
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data2) {
  data2 = "" + data2;
  if (text2.wholeText !== data2)
    text2.data = data2;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node2, key, value, important) {
  node2.style.setProperty(key, value, important ? "important" : "");
}
function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  select.selectedIndex = -1;
}
function select_value(select) {
  const selected_option = select.querySelector(":checked") || select.options[0];
  return selected_option && selected_option.__value;
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
  if (flushing)
    return;
  flushing = true;
  do {
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const outroing = new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
function handle_promise(promise, info) {
  const token = info.token = {};
  function update2(type, index2, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index2 && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index2] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise)) {
    const current_component2 = get_current_component();
    promise.then((value) => {
      set_current_component(current_component2);
      update2(info.then, 1, info.value, value);
      set_current_component(null);
    }, (error) => {
      set_current_component(current_component2);
      update2(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    if (info.current !== info.pending) {
      update2(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update2(info.then, 1, info.value, promise);
      return true;
    }
    info.resolved = promise;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const { resolved } = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node2, destroy, create_each_block2, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block2(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes)
      deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = new Set();
  const did_move = new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node2, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function bind$2(component, name, callback) {
  const index2 = component.$$.props[name];
  if (index2 !== void 0) {
    component.$$.bound[index2] = callback;
    callback(component.$$.ctx[index2]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, on_mount, on_destroy, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index2 = callbacks.indexOf(callback);
      if (index2 !== -1)
        callbacks.splice(index2, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
const subscriber_queue = [];
function readable(value, start2) {
  return {
    subscribe: writable(value, start2).subscribe
  };
}
function writable(value, start2 = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
function parse$2(str, loose) {
  if (str instanceof RegExp)
    return { keys: false, pattern: str };
  var c, o, tmp, ext, keys = [], pattern = "", arr = str.split("/");
  arr[0] || arr.shift();
  while (tmp = arr.shift()) {
    c = tmp[0];
    if (c === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c === ":") {
      o = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext)
        pattern += (!!~o ? "?" : "") + "\\" + tmp.substring(ext);
    } else {
      pattern += "/" + tmp;
    }
  }
  return {
    keys,
    pattern: new RegExp("^" + pattern + (loose ? "(?=$|/)" : "/?$"), "i")
  };
}
function create_else_block$8(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign$1(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[7]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 4 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[2])]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
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
          switch_instance.$on("routeEvent", ctx2[7]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
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
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$m(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{ params: ctx[1] }, ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign$1(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[6]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 6 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 2 && { params: ctx2[1] },
        dirty & 4 && get_spread_object(ctx2[2])
      ]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
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
          switch_instance.$on("routeEvent", ctx2[6]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
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
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment$u(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$m, create_else_block$8];
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
function getLocation() {
  const hashPosition = window.location.href.indexOf("#/");
  let location2 = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : "/";
  const qsPosition = location2.indexOf("?");
  let querystring2 = "";
  if (qsPosition > -1) {
    querystring2 = location2.substr(qsPosition + 1);
    location2 = location2.substr(0, qsPosition);
  }
  return { location: location2, querystring: querystring2 };
}
const loc = readable(null, function start(set) {
  set(getLocation());
  const update2 = () => {
    set(getLocation());
  };
  window.addEventListener("hashchange", update2, false);
  return function stop() {
    window.removeEventListener("hashchange", update2, false);
  };
});
derived(loc, ($loc) => $loc.location);
const querystring = derived(loc, ($loc) => $loc.querystring);
const params = writable(void 0);
async function push$1(location2) {
  if (!location2 || location2.length < 1 || location2.charAt(0) != "/" && location2.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  }
  await tick();
  history.replaceState(__spreadProps(__spreadValues({}, history.state), {
    __svelte_spa_router_scrollX: window.scrollX,
    __svelte_spa_router_scrollY: window.scrollY
  }), void 0, void 0);
  window.location.hash = (location2.charAt(0) == "#" ? "" : "#") + location2;
}
async function replace$1(location2) {
  if (!location2 || location2.length < 1 || location2.charAt(0) != "/" && location2.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  }
  await tick();
  const dest = (location2.charAt(0) == "#" ? "" : "#") + location2;
  try {
    const newState = __spreadValues({}, history.state);
    delete newState["__svelte_spa_router_scrollX"];
    delete newState["__svelte_spa_router_scrollY"];
    window.history.replaceState(newState, void 0, dest);
  } catch (e) {
    console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.");
  }
  window.dispatchEvent(new Event("hashchange"));
}
function instance$u($$self, $$props, $$invalidate) {
  let { routes = {} } = $$props;
  let { prefix = "" } = $$props;
  let { restoreScrollState = false } = $$props;
  class RouteItem {
    constructor(path, component2) {
      if (!component2 || typeof component2 != "function" && (typeof component2 != "object" || component2._sveltesparouter !== true)) {
        throw Error("Invalid component object");
      }
      if (!path || typeof path == "string" && (path.length < 1 || path.charAt(0) != "/" && path.charAt(0) != "*") || typeof path == "object" && !(path instanceof RegExp)) {
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      }
      const { pattern, keys } = parse$2(path);
      this.path = path;
      if (typeof component2 == "object" && component2._sveltesparouter === true) {
        this.component = component2.component;
        this.conditions = component2.conditions || [];
        this.userData = component2.userData;
        this.props = component2.props || {};
      } else {
        this.component = () => Promise.resolve(component2);
        this.conditions = [];
        this.props = {};
      }
      this._pattern = pattern;
      this._keys = keys;
    }
    match(path) {
      if (prefix) {
        if (typeof prefix == "string") {
          if (path.startsWith(prefix)) {
            path = path.substr(prefix.length) || "/";
          } else {
            return null;
          }
        } else if (prefix instanceof RegExp) {
          const match2 = path.match(prefix);
          if (match2 && match2[0]) {
            path = path.substr(match2[0].length) || "/";
          } else {
            return null;
          }
        }
      }
      const matches = this._pattern.exec(path);
      if (matches === null) {
        return null;
      }
      if (this._keys === false) {
        return matches;
      }
      const out = {};
      let i = 0;
      while (i < this._keys.length) {
        try {
          out[this._keys[i]] = decodeURIComponent(matches[i + 1] || "") || null;
        } catch (e) {
          out[this._keys[i]] = null;
        }
        i++;
      }
      return out;
    }
    async checkConditions(detail) {
      for (let i = 0; i < this.conditions.length; i++) {
        if (!await this.conditions[i](detail)) {
          return false;
        }
      }
      return true;
    }
  }
  const routesList = [];
  if (routes instanceof Map) {
    routes.forEach((route, path) => {
      routesList.push(new RouteItem(path, route));
    });
  } else {
    Object.keys(routes).forEach((path) => {
      routesList.push(new RouteItem(path, routes[path]));
    });
  }
  let component = null;
  let componentParams = null;
  let props = {};
  const dispatch = createEventDispatcher();
  async function dispatchNextTick(name, detail) {
    await tick();
    dispatch(name, detail);
  }
  let previousScrollState = null;
  let popStateChanged = null;
  if (restoreScrollState) {
    popStateChanged = (event) => {
      if (event.state && event.state.__svelte_spa_router_scrollY) {
        previousScrollState = event.state;
      } else {
        previousScrollState = null;
      }
    };
    window.addEventListener("popstate", popStateChanged);
    afterUpdate(() => {
      if (previousScrollState) {
        window.scrollTo(previousScrollState.__svelte_spa_router_scrollX, previousScrollState.__svelte_spa_router_scrollY);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
  let lastLoc = null;
  let componentObj = null;
  const unsubscribeLoc = loc.subscribe(async (newLoc) => {
    lastLoc = newLoc;
    let i = 0;
    while (i < routesList.length) {
      const match2 = routesList[i].match(newLoc.location);
      if (!match2) {
        i++;
        continue;
      }
      const detail = {
        route: routesList[i].path,
        location: newLoc.location,
        querystring: newLoc.querystring,
        userData: routesList[i].userData,
        params: match2 && typeof match2 == "object" && Object.keys(match2).length ? match2 : null
      };
      if (!await routesList[i].checkConditions(detail)) {
        $$invalidate(0, component = null);
        componentObj = null;
        dispatchNextTick("conditionsFailed", detail);
        return;
      }
      dispatchNextTick("routeLoading", Object.assign({}, detail));
      const obj = routesList[i].component;
      if (componentObj != obj) {
        if (obj.loading) {
          $$invalidate(0, component = obj.loading);
          componentObj = obj;
          $$invalidate(1, componentParams = obj.loadingParams);
          $$invalidate(2, props = {});
          dispatchNextTick("routeLoaded", Object.assign({}, detail, {
            component,
            name: component.name,
            params: componentParams
          }));
        } else {
          $$invalidate(0, component = null);
          componentObj = null;
        }
        const loaded = await obj();
        if (newLoc != lastLoc) {
          return;
        }
        $$invalidate(0, component = loaded && loaded.default || loaded);
        componentObj = obj;
      }
      if (match2 && typeof match2 == "object" && Object.keys(match2).length) {
        $$invalidate(1, componentParams = match2);
      } else {
        $$invalidate(1, componentParams = null);
      }
      $$invalidate(2, props = routesList[i].props);
      dispatchNextTick("routeLoaded", Object.assign({}, detail, {
        component,
        name: component.name,
        params: componentParams
      })).then(() => {
        params.set(componentParams);
      });
      return;
    }
    $$invalidate(0, component = null);
    componentObj = null;
    params.set(void 0);
  });
  onDestroy(() => {
    unsubscribeLoc();
    popStateChanged && window.removeEventListener("popstate", popStateChanged);
  });
  function routeEvent_handler(event) {
    bubble.call(this, $$self, event);
  }
  function routeEvent_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(3, routes = $$props2.routes);
    if ("prefix" in $$props2)
      $$invalidate(4, prefix = $$props2.prefix);
    if ("restoreScrollState" in $$props2)
      $$invalidate(5, restoreScrollState = $$props2.restoreScrollState);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      history.scrollRestoration = restoreScrollState ? "manual" : "auto";
    }
  };
  return [
    component,
    componentParams,
    props,
    routes,
    prefix,
    restoreScrollState,
    routeEvent_handler,
    routeEvent_handler_1
  ];
}
class Router extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$u, safe_not_equal, {
      routes: 3,
      prefix: 4,
      restoreScrollState: 5
    });
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
const directive = (f) => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};
const isDirective = (o) => {
  return typeof o === "function" && directives.has(o);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
const reparentNodes = (container, start2, end = null, before = null) => {
  while (start2 !== end) {
    const n = start2.nextSibling;
    container.insertBefore(start2, before);
    start2 = n;
  }
};
const removeNodes = (container, start2, end = null) => {
  while (start2 !== end) {
    const n = start2.nextSibling;
    container.removeChild(start2);
    start2 = n;
  }
};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const noChange = {};
const nothing = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
const boundAttributeSuffix = "$lit$";
class Template {
  constructor(result, element2) {
    this.parts = [];
    this.element = element2;
    const nodesToRemove = [];
    const stack = [];
    const walker = document.createTreeWalker(element2.content, 133, null, false);
    let lastPartIndex = 0;
    let index2 = -1;
    let partIndex = 0;
    const { strings, values: { length } } = result;
    while (partIndex < length) {
      const node2 = walker.nextNode();
      if (node2 === null) {
        walker.currentNode = stack.pop();
        continue;
      }
      index2++;
      if (node2.nodeType === 1) {
        if (node2.hasAttributes()) {
          const attributes = node2.attributes;
          const { length: length2 } = attributes;
          let count = 0;
          for (let i = 0; i < length2; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }
          while (count-- > 0) {
            const stringForPart = strings[partIndex];
            const name = lastAttributeNameRegex.exec(stringForPart)[2];
            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            const attributeValue = node2.getAttribute(attributeLookupName);
            node2.removeAttribute(attributeLookupName);
            const statics = attributeValue.split(markerRegex);
            this.parts.push({ type: "attribute", index: index2, name, strings: statics });
            partIndex += statics.length - 1;
          }
        }
        if (node2.tagName === "TEMPLATE") {
          stack.push(node2);
          walker.currentNode = node2.content;
        }
      } else if (node2.nodeType === 3) {
        const data2 = node2.data;
        if (data2.indexOf(marker) >= 0) {
          const parent2 = node2.parentNode;
          const strings2 = data2.split(markerRegex);
          const lastIndex = strings2.length - 1;
          for (let i = 0; i < lastIndex; i++) {
            let insert2;
            let s = strings2[i];
            if (s === "") {
              insert2 = createMarker();
            } else {
              const match2 = lastAttributeNameRegex.exec(s);
              if (match2 !== null && endsWith(match2[2], boundAttributeSuffix)) {
                s = s.slice(0, match2.index) + match2[1] + match2[2].slice(0, -boundAttributeSuffix.length) + match2[3];
              }
              insert2 = document.createTextNode(s);
            }
            parent2.insertBefore(insert2, node2);
            this.parts.push({ type: "node", index: ++index2 });
          }
          if (strings2[lastIndex] === "") {
            parent2.insertBefore(createMarker(), node2);
            nodesToRemove.push(node2);
          } else {
            node2.data = strings2[lastIndex];
          }
          partIndex += lastIndex;
        }
      } else if (node2.nodeType === 8) {
        if (node2.data === marker) {
          const parent2 = node2.parentNode;
          if (node2.previousSibling === null || index2 === lastPartIndex) {
            index2++;
            parent2.insertBefore(createMarker(), node2);
          }
          lastPartIndex = index2;
          this.parts.push({ type: "node", index: index2 });
          if (node2.nextSibling === null) {
            node2.data = "";
          } else {
            nodesToRemove.push(node2);
            index2--;
          }
          partIndex++;
        } else {
          let i = -1;
          while ((i = node2.data.indexOf(marker, i + 1)) !== -1) {
            this.parts.push({ type: "node", index: -1 });
            partIndex++;
          }
        }
      }
    }
    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }
}
const endsWith = (str, suffix) => {
  const index2 = str.length - suffix.length;
  return index2 >= 0 && str.slice(index2) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
const createMarker = () => document.createComment("");
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }
  update(values) {
    let i = 0;
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.setValue(values[i]);
      }
      i++;
    }
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.commit();
      }
    }
  }
  _clone() {
    const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts2 = this.template.parts;
    const walker = document.createTreeWalker(fragment, 133, null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node2 = walker.nextNode();
    while (partIndex < parts2.length) {
      part = parts2[partIndex];
      if (!isTemplatePartActive(part)) {
        this.__parts.push(void 0);
        partIndex++;
        continue;
      }
      while (nodeIndex < part.index) {
        nodeIndex++;
        if (node2.nodeName === "TEMPLATE") {
          stack.push(node2);
          walker.currentNode = node2.content;
        }
        if ((node2 = walker.nextNode()) === null) {
          walker.currentNode = stack.pop();
          node2 = walker.nextNode();
        }
      }
      if (part.type === "node") {
        const part2 = this.processor.handleTextExpression(this.options);
        part2.insertAfterNode(node2.previousSibling);
        this.__parts.push(part2);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node2, part.name, part.strings, this.options));
      }
      partIndex++;
    }
    if (isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }
    return fragment;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (s) => s });
const commentMarker = ` ${marker} `;
class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  getHTML() {
    const l = this.strings.length - 1;
    let html2 = "";
    let isCommentBinding = false;
    for (let i = 0; i < l; i++) {
      const s = this.strings[i];
      const commentOpen = s.lastIndexOf("<!--");
      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf("-->", commentOpen + 1) === -1;
      const attributeMatch = lastAttributeNameRegex.exec(s);
      if (attributeMatch === null) {
        html2 += s + (isCommentBinding ? commentMarker : nodeMarker);
      } else {
        html2 += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
      }
    }
    html2 += this.strings[l];
    return html2;
  }
  getTemplateElement() {
    const template = document.createElement("template");
    let value = this.getHTML();
    if (policy !== void 0) {
      value = policy.createHTML(value);
    }
    template.innerHTML = value;
    return template;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
  return value === null || !(typeof value === "object" || typeof value === "function");
};
const isIterable = (value) => {
  return Array.isArray(value) || !!(value && value[Symbol.iterator]);
};
class AttributeCommitter {
  constructor(element2, name, strings) {
    this.dirty = true;
    this.element = element2;
    this.name = name;
    this.strings = strings;
    this.parts = [];
    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  _createPart() {
    return new AttributePart(this);
  }
  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts2 = this.parts;
    if (l === 1 && strings[0] === "" && strings[1] === "") {
      const v = parts2[0].value;
      if (typeof v === "symbol") {
        return String(v);
      }
      if (typeof v === "string" || !isIterable(v)) {
        return v;
      }
    }
    let text2 = "";
    for (let i = 0; i < l; i++) {
      text2 += strings[i];
      const part = parts2[i];
      if (part !== void 0) {
        const v = part.value;
        if (isPrimitive(v) || !isIterable(v)) {
          text2 += typeof v === "string" ? v : String(v);
        } else {
          for (const t of v) {
            text2 += typeof t === "string" ? t : String(t);
          }
        }
      }
    }
    text2 += strings[l];
    return text2;
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }
}
class AttributePart {
  constructor(committer) {
    this.value = void 0;
    this.committer = committer;
  }
  setValue(value) {
    if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value;
      if (!isDirective(value)) {
        this.committer.dirty = true;
      }
    }
  }
  commit() {
    while (isDirective(this.value)) {
      const directive2 = this.value;
      this.value = noChange;
      directive2(this);
    }
    if (this.value === noChange) {
      return;
    }
    this.committer.commit();
  }
}
class NodePart {
  constructor(options) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.options = options;
  }
  appendInto(container) {
    this.startNode = container.appendChild(createMarker());
    this.endNode = container.appendChild(createMarker());
  }
  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  appendIntoPart(part) {
    part.__insert(this.startNode = createMarker());
    part.__insert(this.endNode = createMarker());
  }
  insertAfterPart(ref) {
    ref.__insert(this.startNode = createMarker());
    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    const value = this.__pendingValue;
    if (value === noChange) {
      return;
    }
    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === nothing) {
      this.value = nothing;
      this.clear();
    } else {
      this.__commitText(value);
    }
  }
  __insert(node2) {
    this.endNode.parentNode.insertBefore(node2, this.endNode);
  }
  __commitNode(value) {
    if (this.value === value) {
      return;
    }
    this.clear();
    this.__insert(value);
    this.value = value;
  }
  __commitText(value) {
    const node2 = this.startNode.nextSibling;
    value = value == null ? "" : value;
    const valueAsString = typeof value === "string" ? value : String(value);
    if (node2 === this.endNode.previousSibling && node2.nodeType === 3) {
      node2.data = valueAsString;
    } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }
    this.value = value;
  }
  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);
    if (this.value instanceof TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      const instance2 = new TemplateInstance(template, value.processor, this.options);
      const fragment = instance2._clone();
      instance2.update(value.values);
      this.__commitNode(fragment);
      this.value = instance2;
    }
  }
  __commitIterable(value) {
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    }
    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      itemPart = itemParts[partIndex];
      if (itemPart === void 0) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);
        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }
      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }
  clear(startNode = this.startNode) {
    removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }
}
class BooleanAttributePart {
  constructor(element2, name, strings) {
    this.value = void 0;
    this.__pendingValue = void 0;
    if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
      throw new Error("Boolean attributes can only contain a single expression");
    }
    this.element = element2;
    this.name = name;
    this.strings = strings;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const value = !!this.__pendingValue;
    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, "");
      } else {
        this.element.removeAttribute(this.name);
      }
      this.value = value;
    }
    this.__pendingValue = noChange;
  }
}
class PropertyCommitter extends AttributeCommitter {
  constructor(element2, name, strings) {
    super(element2, name, strings);
    this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
  }
  _createPart() {
    return new PropertyPart(this);
  }
  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }
    return super._getValue();
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element[this.name] = this._getValue();
    }
  }
}
class PropertyPart extends AttributePart {
}
let eventOptionsSupported = false;
(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }
    };
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (_e) {
  }
})();
class EventPart {
  constructor(element2, eventName, eventContext) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.element = element2;
    this.eventName = eventName;
    this.eventContext = eventContext;
    this.__boundHandleEvent = (e) => this.handleEvent(e);
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive2 = this.__pendingValue;
      this.__pendingValue = noChange;
      directive2(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    this.value = newListener;
    this.__pendingValue = noChange;
  }
  handleEvent(event) {
    if (typeof this.value === "function") {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }
}
const getOptions = (o) => o && (eventOptionsSupported ? { capture: o.capture, passive: o.passive, once: o.once } : o.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class DefaultTemplateProcessor {
  handleAttributeExpressions(element2, name, strings, options) {
    const prefix = name[0];
    if (prefix === ".") {
      const committer2 = new PropertyCommitter(element2, name.slice(1), strings);
      return committer2.parts;
    }
    if (prefix === "@") {
      return [new EventPart(element2, name.slice(1), options.eventContext)];
    }
    if (prefix === "?") {
      return [new BooleanAttributePart(element2, name.slice(1), strings)];
    }
    const committer = new AttributeCommitter(element2, name, strings);
    return committer.parts;
  }
  handleTextExpression(options) {
    return new NodePart(options);
  }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);
  if (templateCache === void 0) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== void 0) {
    return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === void 0) {
    template = new Template(result, result.getTemplateElement());
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
const render = (result, container, options) => {
  let part = parts.get(container);
  if (part === void 0) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
if (typeof window !== "undefined") {
  (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.4.1");
}
const html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const createAndInsertPart = (containerPart, beforePart) => {
  const container = containerPart.startNode.parentNode;
  const beforeNode = beforePart === void 0 ? containerPart.endNode : beforePart.startNode;
  const startNode = container.insertBefore(createMarker(), beforeNode);
  container.insertBefore(createMarker(), beforeNode);
  const newPart = new NodePart(containerPart.options);
  newPart.insertAfterNode(startNode);
  return newPart;
};
const updatePart = (part, value) => {
  part.setValue(value);
  part.commit();
  return part;
};
const insertPartBefore = (containerPart, part, ref) => {
  const container = containerPart.startNode.parentNode;
  const beforeNode = ref ? ref.startNode : containerPart.endNode;
  const endNode = part.endNode.nextSibling;
  if (endNode !== beforeNode) {
    reparentNodes(container, part.startNode, endNode, beforeNode);
  }
};
const removePart = (part) => {
  removeNodes(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
};
const generateMap = (list, start2, end) => {
  const map = new Map();
  for (let i = start2; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
const partListCache = new WeakMap();
const keyListCache = new WeakMap();
const repeat = directive((items, keyFnOrTemplate, template) => {
  let keyFn;
  if (template === void 0) {
    template = keyFnOrTemplate;
  } else if (keyFnOrTemplate !== void 0) {
    keyFn = keyFnOrTemplate;
  }
  return (containerPart) => {
    if (!(containerPart instanceof NodePart)) {
      throw new Error("repeat can only be used in text bindings");
    }
    const oldParts = partListCache.get(containerPart) || [];
    const oldKeys = keyListCache.get(containerPart) || [];
    const newParts = [];
    const newValues = [];
    const newKeys = [];
    let index2 = 0;
    for (const item of items) {
      newKeys[index2] = keyFn ? keyFn(item, index2) : index2;
      newValues[index2] = template(item, index2);
      index2++;
    }
    let newKeyToIndexMap;
    let oldKeyToIndexMap;
    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1;
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
        insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
        insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === void 0) {
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== void 0 ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            const newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
            updatePart(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            newParts[newHead] = updatePart(oldPart, newValues[newHead]);
            insertPartBefore(containerPart, oldPart, oldParts[oldHead]);
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    while (newHead <= newTail) {
      const newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);
      updatePart(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    }
    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];
      if (oldPart !== null) {
        removePart(oldPart);
      }
    }
    partListCache.set(containerPart, newParts);
    keyListCache.set(containerPart, newKeys);
  };
});
function portal(el, target = "body") {
  let targetEl;
  async function update2(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
  update2(target);
  return { update: update2, destroy };
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var shams = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$1.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
  try {
    $gOPD({}, "");
  } catch (e) {
    $gOPD = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$1();
};
var ThrowTypeError = $gOPD ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var getProto = Object.getPrototypeOf || function(x) {
  return x.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$1,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn$1 = src;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string, rePropName, function(match2, number, quote2, subString) {
    result[result.length] = quote2 ? $replace(subString, reEscapeChar, "$1") : number || match2;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$1("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$1("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$1('"allowMissing" argument must be a boolean');
  }
  var parts2 = stringToPath(name);
  var intrinsicBaseName = parts2.length > 0 ? parts2[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts2, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts2.length; i += 1) {
    var part = parts2[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$1("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD && i + 1 >= parts2.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn$1(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBind$1 = { exports: {} };
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __viteBrowserExternal
});
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
var inspectCustom = require$$0.custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag !== "undefined" ? Symbol.toStringTag : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$3(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    return String(obj);
  }
  if (typeof obj === "bigint") {
    return String(obj) + "n";
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$3(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf$1(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from, noIndent) {
    if (from) {
      seen = seen.slice();
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$3(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function") {
    var name = nameOf(obj);
    var keys = arrObjKeys(obj, inspect2);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + keys.join(", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + String(obj.nodeName).toLowerCase();
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + String(obj.nodeName).toLowerCase() + ">";
    return s;
  }
  if (isArray$3(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + xs.join(", ") + " ]";
  }
  if (isError(obj)) {
    var parts2 = arrObjKeys(obj, inspect2);
    if (parts2.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + parts2.join(", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
      return obj[inspectSymbol]();
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    mapForEach.call(obj, function(value, key) {
      mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
    });
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    setForEach.call(obj, function(value) {
      setParts.push(inspect2(value, obj));
    });
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (!isDate(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + [].concat(stringTag || [], protoTag || []).join(": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + ys.join(", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return String(s).replace(/"/g, "&quot;");
}
function isArray$3(obj) {
  return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
  return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
  return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$3(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf$1(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x) {
  if (!x || typeof x !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
  }
  var s = str.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n];
  if (x) {
    return "\\" + x;
  }
  return "\\x" + (n < 16 ? "0" : "") + n.toString(16).toUpperCase();
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(", ");
  return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf$1(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = Array(opts.indent + 1).join(" ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: Array(depth + 1).join(baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + xs.join("," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$3(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$3(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    if (!has$3(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if (/[^\w$]/.test(key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var GetIntrinsic2 = getIntrinsic;
var callBound = callBound$1;
var inspect = objectInspect;
var $TypeError = GetIntrinsic2("%TypeError%");
var $WeakMap = GetIntrinsic2("%WeakMap%", true);
var $Map = GetIntrinsic2("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
var listGetNode = function(list, key) {
  for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      curr.next = list.next;
      list.next = curr;
      return curr;
    }
  }
};
var listGet = function(objects, key) {
  var node2 = listGetNode(objects, key);
  return node2 && node2.value;
};
var listSet = function(objects, key, value) {
  var node2 = listGetNode(objects, key);
  if (node2) {
    node2.value = value;
  } else {
    objects.next = {
      key,
      next: objects.next,
      value
    };
  }
};
var listHas = function(objects, key) {
  return !!listGetNode(objects, key);
};
var sideChannel = function getSideChannel() {
  var $wm;
  var $m;
  var $o;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError("Side channel does not contain " + inspect(key));
      }
    },
    get: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapGet($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key);
        }
      } else {
        if ($o) {
          return listGet($o, key);
        }
      }
    },
    has: function(key) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if ($wm) {
          return $weakMapHas($wm, key);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key);
        }
      } else {
        if ($o) {
          return listHas($o, key);
        }
      }
      return false;
    },
    set: function(key, value) {
      if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key, value);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      } else {
        if (!$o) {
          $o = { key: {}, next: null };
        }
        listSet($o, key, value);
      }
    }
  };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$4 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$3 = formats$4;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$2(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge$1 = function merge(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (isArray$2(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$2(target) && !isArray$2(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$2(target) && isArray$2(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var encode = function encode2(str, defaultEncoder, charset, kind, format) {
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats$3.RFC1738 && (c === 40 || c === 41)) {
      out += string.charAt(i);
      continue;
    }
    if (c < 128) {
      out = out + hexTable[c];
      continue;
    }
    if (c < 2048) {
      out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
      continue;
    }
    i += 1;
    c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
    out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
  }
  return out;
};
var compact = function compact2(value) {
  var queue = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$2(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge: merge$1
};
var getSideChannel2 = sideChannel;
var utils$1 = utils$2;
var formats$2 = formats$4;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat2(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$2["default"];
var defaults$2 = {
  addQueryPrefix: false,
  allowDots: false,
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats$2.formatters[defaultFormat],
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var stringify$1 = function stringify(object2, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort2, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object2;
  if (sideChannel2.has(object2)) {
    throw new RangeError("Cyclic object value");
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    obj = utils$1.maybeMap(obj, function(value2) {
      if (value2 instanceof Date) {
        return serializeDate2(value2);
      }
      return value2;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$2.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$2.encoder, charset, "key", format);
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$2.encoder, charset, "value", format))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort2 ? keys.sort(sort2) : keys;
  }
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    var value = typeof key === "object" && key.value !== void 0 ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
    sideChannel2.set(object2, true);
    var valueSideChannel = getSideChannel2();
    pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort2, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, valueSideChannel));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$2;
  }
  if (opts.encoder !== null && opts.encoder !== void 0 && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$2.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$2["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$2.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$2.formatters[format];
  var filter = defaults$2.filter;
  if (typeof opts.filter === "function" || isArray$1(opts.filter)) {
    filter = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$2.addQueryPrefix,
    allowDots: typeof opts.allowDots === "undefined" ? defaults$2.allowDots : !!opts.allowDots,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$2.charsetSentinel,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$2.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$2.encode,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$2.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$2.encodeValuesOnly,
    filter,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$2.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$2.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$2.strictNullHandling
  };
};
var stringify_1 = function(object2, opts) {
  var obj = object2;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && "indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel2 = getSideChannel2();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    pushToArray(keys, stringify$1(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel2));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults$1 = {
  allowDots: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options) {
  if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts2 = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts2.length; ++i) {
      if (parts2[i].indexOf("utf8=") === 0) {
        if (parts2[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts2[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts2.length;
      }
    }
  }
  for (i = 0; i < parts2.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts2[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key, val;
    if (pos === -1) {
      key = options.decoder(part, defaults$1.decoder, charset, "key");
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, "key");
      val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
        return options.decoder(encodedVal, defaults$1.decoder, charset, "value");
      });
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (part.indexOf("[]=") > -1) {
      val = isArray(val) ? [val] : val;
    }
    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === "[]" && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
      var index2 = parseInt(cleanRoot, 10);
      if (!options.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index2) && root !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
        obj = [];
        obj[index2] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options.depth > 0 && brackets2.exec(key);
  var parent2 = segment ? key.slice(0, segment.index) : key;
  var keys = [];
  if (parent2) {
    if (!options.plainObjects && has.call(Object.prototype, parent2)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent2);
  }
  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }
  if (segment) {
    keys.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults$1.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults$1.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults$1.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults$1.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults$1.comma,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults$1.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults$1.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults$1.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults$1.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {};
  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats$1 = formats$4;
var lib = {
  formats: formats$1,
  parse,
  stringify: stringify2
};
const get_tvi_right_content_slot_changes = (dirty) => ({});
const get_tvi_right_content_slot_context = (ctx) => ({});
const get_tvi_label_slot_changes = (dirty) => ({});
const get_tvi_label_slot_context = (ctx) => ({});
const get_tvi_icon_slot_changes = (dirty) => ({});
const get_tvi_icon_slot_context = (ctx) => ({});
const get_tvi_checkbox_slot_changes = (dirty) => ({});
const get_tvi_checkbox_slot_context = (ctx) => ({});
const get_tvi_expandable_slot_changes = (dirty) => ({});
const get_tvi_expandable_slot_context = (ctx) => ({});
function create_if_block$l(ctx) {
  let current;
  const tvi_expandable_slot_template = ctx[8]["tvi-expandable"];
  const tvi_expandable_slot = create_slot(tvi_expandable_slot_template, ctx, ctx[7], get_tvi_expandable_slot_context);
  return {
    c() {
      if (tvi_expandable_slot)
        tvi_expandable_slot.c();
    },
    m(target, anchor) {
      if (tvi_expandable_slot) {
        tvi_expandable_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (tvi_expandable_slot) {
        if (tvi_expandable_slot.p && (!current || dirty & 128)) {
          update_slot_base(tvi_expandable_slot, tvi_expandable_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(tvi_expandable_slot_template, ctx2[7], dirty, get_tvi_expandable_slot_changes), get_tvi_expandable_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(tvi_expandable_slot, local);
      current = true;
    },
    o(local) {
      transition_out(tvi_expandable_slot, local);
      current = false;
    },
    d(detaching) {
      if (tvi_expandable_slot)
        tvi_expandable_slot.d(detaching);
    }
  };
}
function fallback_block$d(ctx) {
  let t_value = ctx[4].label + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && t_value !== (t_value = ctx2[4].label + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$t(ctx) {
  let div7;
  let div5;
  let div4;
  let div0;
  let show_if = ctx[4].isExpandable();
  let t0;
  let div1;
  let t1;
  let div2;
  let t2;
  let div3;
  let div4_class_value;
  let div4_disabled_value;
  let t3;
  let div6;
  let div6_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block = show_if && create_if_block$l(ctx);
  const tvi_checkbox_slot_template = ctx[8]["tvi-checkbox"];
  const tvi_checkbox_slot = create_slot(tvi_checkbox_slot_template, ctx, ctx[7], get_tvi_checkbox_slot_context);
  const tvi_icon_slot_template = ctx[8]["tvi-icon"];
  const tvi_icon_slot = create_slot(tvi_icon_slot_template, ctx, ctx[7], get_tvi_icon_slot_context);
  const tvi_label_slot_template = ctx[8]["tvi-label"];
  const tvi_label_slot = create_slot(tvi_label_slot_template, ctx, ctx[7], get_tvi_label_slot_context);
  const tvi_label_slot_or_fallback = tvi_label_slot || fallback_block$d(ctx);
  const tvi_right_content_slot_template = ctx[8]["tvi-right-content"];
  const tvi_right_content_slot = create_slot(tvi_right_content_slot_template, ctx, ctx[7], get_tvi_right_content_slot_context);
  return {
    c() {
      div7 = element("div");
      div5 = element("div");
      div4 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      div1 = element("div");
      if (tvi_checkbox_slot)
        tvi_checkbox_slot.c();
      t1 = space();
      div2 = element("div");
      if (tvi_icon_slot)
        tvi_icon_slot.c();
      t2 = space();
      div3 = element("div");
      if (tvi_label_slot_or_fallback)
        tvi_label_slot_or_fallback.c();
      t3 = space();
      div6 = element("div");
      if (tvi_right_content_slot)
        tvi_right_content_slot.c();
      attr$1(div0, "class", "tv-caret");
      toggle_class(div1, "tv-checkbox", ctx[4].isCheckable());
      toggle_class(div2, "tv-icon", ctx[2]);
      attr$1(div3, "class", "tv-label");
      attr$1(div4, "class", div4_class_value = `tv-flex tv-flex-row tv-flex-wrap tv-tree-item ${ctx[3] === "medium" ? "tv-md" : ctx[3] === "small" ? "tv-sm" : "tv-lg"}`);
      attr$1(div4, "disabled", div4_disabled_value = ctx[4].isDisabled());
      attr$1(div4, "tabindex", ctx[1]);
      set_style(div4, "padding-left", "calc(" + ctx[4].getNodeLevel() + "*16px - 4px)");
      toggle_class(div4, "tv-hover-select", ctx[4].selected && ctx[4].isSelectable());
      attr$1(div5, "class", "tv-key");
      attr$1(div6, "class", div6_class_value = `tv-key-meta tv-flex tv-flex-row tv-flex-wrap tv-tree-item ${ctx[3] === "medium" ? "tv-md" : ctx[3] === "small" ? "tv-sm" : "tv-lg"}`);
      attr$1(div7, "class", "tv-flex tv-container");
    },
    m(target, anchor) {
      insert(target, div7, anchor);
      append(div7, div5);
      append(div5, div4);
      append(div4, div0);
      if (if_block)
        if_block.m(div0, null);
      append(div4, t0);
      append(div4, div1);
      if (tvi_checkbox_slot) {
        tvi_checkbox_slot.m(div1, null);
      }
      append(div4, t1);
      append(div4, div2);
      if (tvi_icon_slot) {
        tvi_icon_slot.m(div2, null);
      }
      append(div4, t2);
      append(div4, div3);
      if (tvi_label_slot_or_fallback) {
        tvi_label_slot_or_fallback.m(div3, null);
      }
      append(div7, t3);
      append(div7, div6);
      if (tvi_right_content_slot) {
        tvi_right_content_slot.m(div6, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(div3, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 16)
        show_if = ctx2[4].isExpandable();
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$l(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (tvi_checkbox_slot) {
        if (tvi_checkbox_slot.p && (!current || dirty & 128)) {
          update_slot_base(tvi_checkbox_slot, tvi_checkbox_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(tvi_checkbox_slot_template, ctx2[7], dirty, get_tvi_checkbox_slot_changes), get_tvi_checkbox_slot_context);
        }
      }
      if (dirty & 16) {
        toggle_class(div1, "tv-checkbox", ctx2[4].isCheckable());
      }
      if (tvi_icon_slot) {
        if (tvi_icon_slot.p && (!current || dirty & 128)) {
          update_slot_base(tvi_icon_slot, tvi_icon_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(tvi_icon_slot_template, ctx2[7], dirty, get_tvi_icon_slot_changes), get_tvi_icon_slot_context);
        }
      }
      if (dirty & 4) {
        toggle_class(div2, "tv-icon", ctx2[2]);
      }
      if (tvi_label_slot) {
        if (tvi_label_slot.p && (!current || dirty & 128)) {
          update_slot_base(tvi_label_slot, tvi_label_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(tvi_label_slot_template, ctx2[7], dirty, get_tvi_label_slot_changes), get_tvi_label_slot_context);
        }
      } else {
        if (tvi_label_slot_or_fallback && tvi_label_slot_or_fallback.p && (!current || dirty & 16)) {
          tvi_label_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (!current || dirty & 8 && div4_class_value !== (div4_class_value = `tv-flex tv-flex-row tv-flex-wrap tv-tree-item ${ctx2[3] === "medium" ? "tv-md" : ctx2[3] === "small" ? "tv-sm" : "tv-lg"}`)) {
        attr$1(div4, "class", div4_class_value);
      }
      if (!current || dirty & 16 && div4_disabled_value !== (div4_disabled_value = ctx2[4].isDisabled())) {
        attr$1(div4, "disabled", div4_disabled_value);
      }
      if (!current || dirty & 2) {
        attr$1(div4, "tabindex", ctx2[1]);
      }
      if (!current || dirty & 16) {
        set_style(div4, "padding-left", "calc(" + ctx2[4].getNodeLevel() + "*16px - 4px)");
      }
      if (dirty & 24) {
        toggle_class(div4, "tv-hover-select", ctx2[4].selected && ctx2[4].isSelectable());
      }
      if (tvi_right_content_slot) {
        if (tvi_right_content_slot.p && (!current || dirty & 128)) {
          update_slot_base(tvi_right_content_slot, tvi_right_content_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(tvi_right_content_slot_template, ctx2[7], dirty, get_tvi_right_content_slot_changes), get_tvi_right_content_slot_context);
        }
      }
      if (!current || dirty & 8 && div6_class_value !== (div6_class_value = `tv-key-meta tv-flex tv-flex-row tv-flex-wrap tv-tree-item ${ctx2[3] === "medium" ? "tv-md" : ctx2[3] === "small" ? "tv-sm" : "tv-lg"}`)) {
        attr$1(div6, "class", div6_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(tvi_checkbox_slot, local);
      transition_in(tvi_icon_slot, local);
      transition_in(tvi_label_slot_or_fallback, local);
      transition_in(tvi_right_content_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(tvi_checkbox_slot, local);
      transition_out(tvi_icon_slot, local);
      transition_out(tvi_label_slot_or_fallback, local);
      transition_out(tvi_right_content_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      if (if_block)
        if_block.d();
      if (tvi_checkbox_slot)
        tvi_checkbox_slot.d(detaching);
      if (tvi_icon_slot)
        tvi_icon_slot.d(detaching);
      if (tvi_label_slot_or_fallback)
        tvi_label_slot_or_fallback.d(detaching);
      if (tvi_right_content_slot)
        tvi_right_content_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$t($$self, $$props, $$invalidate) {
  let $node, $$unsubscribe_node = noop, $$subscribe_node = () => ($$unsubscribe_node(), $$unsubscribe_node = subscribe(node2, ($$value) => $$invalidate(4, $node = $$value)), node2);
  $$self.$$.on_destroy.push(() => $$unsubscribe_node());
  let { $$slots: slots = {}, $$scope } = $$props;
  let { node: node2 } = $$props;
  $$subscribe_node();
  let { tv_tabindex = "-1" } = $$props;
  let { isIcon = false } = $$props;
  let { size = "medium" } = $$props;
  const dispatch = createEventDispatcher();
  function onClick(e) {
    e.preventDefault();
    dispatch("click", { e, node: node2 });
  }
  let { showRoot } = $$props;
  $$self.$$set = ($$props2) => {
    if ("node" in $$props2)
      $$subscribe_node($$invalidate(0, node2 = $$props2.node));
    if ("tv_tabindex" in $$props2)
      $$invalidate(1, tv_tabindex = $$props2.tv_tabindex);
    if ("isIcon" in $$props2)
      $$invalidate(2, isIcon = $$props2.isIcon);
    if ("size" in $$props2)
      $$invalidate(3, size = $$props2.size);
    if ("showRoot" in $$props2)
      $$invalidate(6, showRoot = $$props2.showRoot);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  return [node2, tv_tabindex, isIcon, size, $node, onClick, showRoot, $$scope, slots];
}
class TreeviewItem extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$t, safe_not_equal, {
      node: 0,
      tv_tabindex: 1,
      isIcon: 2,
      size: 3,
      showRoot: 6
    });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
const get_expandable_slot_changes_1 = (dirty) => ({ node: dirty & 8 });
const get_expandable_slot_context_1 = (ctx) => ({
  slot: "expandable",
  node: ctx[3]
});
const get_checkbox_slot_changes_1 = (dirty) => ({ node: dirty & 8 });
const get_checkbox_slot_context_1 = (ctx) => ({ slot: "checkbox", node: ctx[3] });
const get_icon_slot_changes_1 = (dirty) => ({ node: dirty & 8 });
const get_icon_slot_context_1 = (ctx) => ({ slot: "icon", node: ctx[3] });
const get_label_slot_changes_1 = (dirty) => ({ node: dirty & 8 });
const get_label_slot_context_1 = (ctx) => ({ slot: "label", node: ctx[3] });
const get_right_content_slot_changes_1 = (dirty) => ({ node: dirty & 8 });
const get_right_content_slot_context_1 = (ctx) => ({
  slot: "right-content",
  node: ctx[3]
});
const get_expandable_slot_changes$1 = (dirty) => ({ node: dirty & 8 });
const get_expandable_slot_context$1 = (ctx) => ({ node: ctx[3] });
const get_checkbox_slot_changes$1 = (dirty) => ({ node: dirty & 8 });
const get_checkbox_slot_context$1 = (ctx) => ({ node: ctx[3] });
const get_icon_slot_changes$1 = (dirty) => ({ node: dirty & 8 });
const get_icon_slot_context$1 = (ctx) => ({ node: ctx[3] });
const get_label_slot_changes$1 = (dirty) => ({ node: dirty & 8 });
const get_label_slot_context$1 = (ctx) => ({ slot: "tvi-label", node: ctx[3] });
const get_right_content_slot_changes = (dirty) => ({ node: dirty & 8 });
const get_right_content_slot_context = (ctx) => ({ node: ctx[3] });
function create_tvi_expandable_slot(ctx) {
  let div;
  let current;
  const expandable_slot_template = ctx[8].expandable;
  const expandable_slot = create_slot(expandable_slot_template, ctx, ctx[11], get_expandable_slot_context$1);
  return {
    c() {
      div = element("div");
      if (expandable_slot)
        expandable_slot.c();
      attr$1(div, "slot", "tvi-expandable");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (expandable_slot) {
        expandable_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (expandable_slot) {
        if (expandable_slot.p && (!current || dirty & 2056)) {
          update_slot_base(expandable_slot, expandable_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(expandable_slot_template, ctx2[11], dirty, get_expandable_slot_changes$1), get_expandable_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable_slot, local);
      current = true;
    },
    o(local) {
      transition_out(expandable_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (expandable_slot)
        expandable_slot.d(detaching);
    }
  };
}
function create_tvi_checkbox_slot(ctx) {
  let div;
  let current;
  const checkbox_slot_template = ctx[8].checkbox;
  const checkbox_slot = create_slot(checkbox_slot_template, ctx, ctx[11], get_checkbox_slot_context$1);
  return {
    c() {
      div = element("div");
      if (checkbox_slot)
        checkbox_slot.c();
      attr$1(div, "slot", "tvi-checkbox");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (checkbox_slot) {
        checkbox_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (checkbox_slot) {
        if (checkbox_slot.p && (!current || dirty & 2056)) {
          update_slot_base(checkbox_slot, checkbox_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(checkbox_slot_template, ctx2[11], dirty, get_checkbox_slot_changes$1), get_checkbox_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox_slot, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (checkbox_slot)
        checkbox_slot.d(detaching);
    }
  };
}
function create_tvi_icon_slot(ctx) {
  let div;
  let current;
  const icon_slot_template = ctx[8].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[11], get_icon_slot_context$1);
  return {
    c() {
      div = element("div");
      if (icon_slot)
        icon_slot.c();
      attr$1(div, "slot", "tvi-icon");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (icon_slot) {
        icon_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 2056)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(icon_slot_template, ctx2[11], dirty, get_icon_slot_changes$1), get_icon_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_tvi_label_slot(ctx) {
  let current;
  const label_slot_template = ctx[8].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[11], get_label_slot_context$1);
  return {
    c() {
      if (label_slot)
        label_slot.c();
    },
    m(target, anchor) {
      if (label_slot) {
        label_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (label_slot) {
        if (label_slot.p && (!current || dirty & 2056)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(label_slot_template, ctx2[11], dirty, get_label_slot_changes$1), get_label_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(label_slot, local);
      current = true;
    },
    o(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d(detaching) {
      if (label_slot)
        label_slot.d(detaching);
    }
  };
}
function create_tvi_right_content_slot(ctx) {
  let div;
  let current;
  const right_content_slot_template = ctx[8]["right-content"];
  const right_content_slot = create_slot(right_content_slot_template, ctx, ctx[11], get_right_content_slot_context);
  return {
    c() {
      div = element("div");
      if (right_content_slot)
        right_content_slot.c();
      attr$1(div, "slot", "tvi-right-content");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (right_content_slot) {
        right_content_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (right_content_slot) {
        if (right_content_slot.p && (!current || dirty & 2056)) {
          update_slot_base(right_content_slot, right_content_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(right_content_slot_template, ctx2[11], dirty, get_right_content_slot_changes), get_right_content_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(right_content_slot, local);
      current = true;
    },
    o(local) {
      transition_out(right_content_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (right_content_slot)
        right_content_slot.d(detaching);
    }
  };
}
function create_if_block$k(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$4, create_else_block$7];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6])
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
function create_else_block$7(ctx) {
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[5];
  const get_key = (ctx2) => ctx2[12].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$1(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 2093) {
        each_value = ctx2[5];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$1, each_1_anchor, get_each_context$1);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block_1$4(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text("Loading...");
      set_style(div, "padding-left", "calc(" + (ctx[4].getNodeLevel() + 1) + "*16px - 4px)");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & 16) {
        set_style(div, "padding-left", "calc(" + (ctx2[4].getNodeLevel() + 1) + "*16px - 4px)");
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_expandable_slot$1(ctx) {
  let current;
  const expandable_slot_template = ctx[8].expandable;
  const expandable_slot = create_slot(expandable_slot_template, ctx, ctx[11], get_expandable_slot_context_1);
  return {
    c() {
      if (expandable_slot)
        expandable_slot.c();
    },
    m(target, anchor) {
      if (expandable_slot) {
        expandable_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (expandable_slot) {
        if (expandable_slot.p && (!current || dirty & 2056)) {
          update_slot_base(expandable_slot, expandable_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(expandable_slot_template, ctx2[11], dirty, get_expandable_slot_changes_1), get_expandable_slot_context_1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable_slot, local);
      current = true;
    },
    o(local) {
      transition_out(expandable_slot, local);
      current = false;
    },
    d(detaching) {
      if (expandable_slot)
        expandable_slot.d(detaching);
    }
  };
}
function create_checkbox_slot$1(ctx) {
  let current;
  const checkbox_slot_template = ctx[8].checkbox;
  const checkbox_slot = create_slot(checkbox_slot_template, ctx, ctx[11], get_checkbox_slot_context_1);
  return {
    c() {
      if (checkbox_slot)
        checkbox_slot.c();
    },
    m(target, anchor) {
      if (checkbox_slot) {
        checkbox_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (checkbox_slot) {
        if (checkbox_slot.p && (!current || dirty & 2056)) {
          update_slot_base(checkbox_slot, checkbox_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(checkbox_slot_template, ctx2[11], dirty, get_checkbox_slot_changes_1), get_checkbox_slot_context_1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox_slot, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox_slot, local);
      current = false;
    },
    d(detaching) {
      if (checkbox_slot)
        checkbox_slot.d(detaching);
    }
  };
}
function create_icon_slot$1(ctx) {
  let current;
  const icon_slot_template = ctx[8].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[11], get_icon_slot_context_1);
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 2056)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(icon_slot_template, ctx2[11], dirty, get_icon_slot_changes_1), get_icon_slot_context_1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_label_slot$1(ctx) {
  let current;
  const label_slot_template = ctx[8].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[11], get_label_slot_context_1);
  return {
    c() {
      if (label_slot)
        label_slot.c();
    },
    m(target, anchor) {
      if (label_slot) {
        label_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (label_slot) {
        if (label_slot.p && (!current || dirty & 2056)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(label_slot_template, ctx2[11], dirty, get_label_slot_changes_1), get_label_slot_context_1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(label_slot, local);
      current = true;
    },
    o(local) {
      transition_out(label_slot, local);
      current = false;
    },
    d(detaching) {
      if (label_slot)
        label_slot.d(detaching);
    }
  };
}
function create_right_content_slot$1(ctx) {
  let current;
  const right_content_slot_template = ctx[8]["right-content"];
  const right_content_slot = create_slot(right_content_slot_template, ctx, ctx[11], get_right_content_slot_context_1);
  return {
    c() {
      if (right_content_slot)
        right_content_slot.c();
    },
    m(target, anchor) {
      if (right_content_slot) {
        right_content_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (right_content_slot) {
        if (right_content_slot.p && (!current || dirty & 2056)) {
          update_slot_base(right_content_slot, right_content_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(right_content_slot_template, ctx2[11], dirty, get_right_content_slot_changes_1), get_right_content_slot_context_1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(right_content_slot, local);
      current = true;
    },
    o(local) {
      transition_out(right_content_slot, local);
      current = false;
    },
    d(detaching) {
      if (right_content_slot)
        right_content_slot.d(detaching);
    }
  };
}
function create_each_block$1(key_1, ctx) {
  let first;
  let treenode;
  let current;
  treenode = new TreeNode({
    props: {
      node: ctx[12],
      isIcon: ctx[0],
      size: ctx[2],
      $$slots: {
        "right-content": [
          create_right_content_slot$1,
          ({ node: node2 }) => ({ 3: node2 }),
          ({ node: node2 }) => node2 ? 8 : 0
        ],
        label: [
          create_label_slot$1,
          ({ node: node2 }) => ({ 3: node2 }),
          ({ node: node2 }) => node2 ? 8 : 0
        ],
        icon: [
          create_icon_slot$1,
          ({ node: node2 }) => ({ 3: node2 }),
          ({ node: node2 }) => node2 ? 8 : 0
        ],
        checkbox: [
          create_checkbox_slot$1,
          ({ node: node2 }) => ({ 3: node2 }),
          ({ node: node2 }) => node2 ? 8 : 0
        ],
        expandable: [
          create_expandable_slot$1,
          ({ node: node2 }) => ({ 3: node2 }),
          ({ node: node2 }) => node2 ? 8 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  treenode.$on("click", ctx[10]);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(treenode.$$.fragment);
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(treenode, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const treenode_changes = {};
      if (dirty & 32)
        treenode_changes.node = ctx[12];
      if (dirty & 1)
        treenode_changes.isIcon = ctx[0];
      if (dirty & 4)
        treenode_changes.size = ctx[2];
      if (dirty & 2056) {
        treenode_changes.$$scope = { dirty, ctx };
      }
      treenode.$set(treenode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(treenode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(treenode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(treenode, detaching);
    }
  };
}
function create_fragment$s(ctx) {
  let treeviewitem;
  let t;
  let show_if = ctx[4].isExpanded();
  let if_block_anchor;
  let current;
  treeviewitem = new TreeviewItem({
    props: {
      tv_tabindex: ctx[4].getSelected() || ctx[7] ? "0" : "-1",
      node: ctx[4],
      isIcon: ctx[0],
      size: ctx[2],
      showRoot: ctx[7] ? ctx[1] : true,
      $$slots: {
        "tvi-right-content": [create_tvi_right_content_slot],
        "tvi-label": [create_tvi_label_slot],
        "tvi-icon": [create_tvi_icon_slot],
        "tvi-checkbox": [create_tvi_checkbox_slot],
        "tvi-expandable": [create_tvi_expandable_slot]
      },
      $$scope: { ctx }
    }
  });
  treeviewitem.$on("click", ctx[9]);
  let if_block = show_if && create_if_block$k(ctx);
  return {
    c() {
      create_component(treeviewitem.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(treeviewitem, target, anchor);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const treeviewitem_changes = {};
      if (dirty & 144)
        treeviewitem_changes.tv_tabindex = ctx2[4].getSelected() || ctx2[7] ? "0" : "-1";
      if (dirty & 16)
        treeviewitem_changes.node = ctx2[4];
      if (dirty & 1)
        treeviewitem_changes.isIcon = ctx2[0];
      if (dirty & 4)
        treeviewitem_changes.size = ctx2[2];
      if (dirty & 130)
        treeviewitem_changes.showRoot = ctx2[7] ? ctx2[1] : true;
      if (dirty & 2056) {
        treeviewitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      treeviewitem.$set(treeviewitem_changes);
      if (dirty & 16)
        show_if = ctx2[4].isExpanded();
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$k(ctx2);
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
      transition_in(treeviewitem.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(treeviewitem.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      destroy_component(treeviewitem, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$s($$self, $$props, $$invalidate) {
  let _root;
  let $node, $$unsubscribe_node = noop, $$subscribe_node = () => ($$unsubscribe_node(), $$unsubscribe_node = subscribe(node2, ($$value) => $$invalidate(4, $node = $$value)), node2);
  $$self.$$.on_destroy.push(() => $$unsubscribe_node());
  let { $$slots: slots = {}, $$scope } = $$props;
  let { node: node2 } = $$props;
  $$subscribe_node();
  let { isIcon } = $$props;
  let { showRoot = true } = $$props;
  let { size = "medium" } = $$props;
  let children2 = [];
  let loading = false;
  onMount(() => {
    return node2.subscribe(async () => {
      if (node2.isExpanded()) {
        if (children2.length === 0) {
          $$invalidate(6, loading = true);
        }
        $$invalidate(5, children2 = await node2.getChildren());
        $$invalidate(6, loading = false);
      } else {
        $$invalidate(5, children2 = []);
      }
    });
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("node" in $$props2)
      $$subscribe_node($$invalidate(3, node2 = $$props2.node));
    if ("isIcon" in $$props2)
      $$invalidate(0, isIcon = $$props2.isIcon);
    if ("showRoot" in $$props2)
      $$invalidate(1, showRoot = $$props2.showRoot);
    if ("size" in $$props2)
      $$invalidate(2, size = $$props2.size);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $$invalidate(7, _root = $node.isRoot());
    }
  };
  return [
    isIcon,
    showRoot,
    size,
    node2,
    $node,
    children2,
    loading,
    _root,
    slots,
    click_handler,
    click_handler_1,
    $$scope
  ];
}
class TreeNode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { node: 3, isIcon: 0, showRoot: 1, size: 2 });
  }
}
function create_else_block$6(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr$1(path, "fill-rule", "evenodd");
      attr$1(path, "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z");
      attr$1(path, "clip-rule", "evenodd");
      attr$1(svg, "class", "tv-svg");
      attr$1(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr$1(svg, "viewBox", "0 0 20 20");
      attr$1(svg, "fill", "currentColor");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (!mounted) {
        dispose = listen(svg, "click", ctx[4]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$j(ctx) {
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr$1(path, "fill-rule", "evenodd");
      attr$1(path, "d", "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z");
      attr$1(path, "clip-rule", "evenodd");
      attr$1(svg, "class", "tv-svg");
      attr$1(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr$1(svg, "viewBox", "0 0 20 20");
      attr$1(svg, "fill", "currentColor");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (!mounted) {
        dispose = listen(svg, "click", ctx[3]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$r(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (!ctx2[0])
      return create_if_block$j;
    return create_else_block$6;
  }
  let current_block_type = select_block_type(ctx);
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
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$r($$self, $$props, $$invalidate) {
  let { node: node2 } = $$props;
  let expanded = node2.isExpanded();
  const dispatch = createEventDispatcher();
  function click(e) {
    $$invalidate(0, expanded = !expanded);
    node2.setExpanded(expanded);
    dispatch("expanded", { expanded, node: node2 });
  }
  const click_handler = (e) => click();
  const click_handler_1 = (e) => click();
  $$self.$$set = ($$props2) => {
    if ("node" in $$props2)
      $$invalidate(2, node2 = $$props2.node);
  };
  return [expanded, click, node2, click_handler, click_handler_1];
}
class Expandable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$r, safe_not_equal, { node: 2 });
  }
}
Object.freeze({
  none: "none",
  single: "single",
  multi: "multi"
});
const CheckState = Object.freeze({
  none: "none",
  indeterminate: "indeterminate",
  selected: "selected"
});
function create_fragment$q(ctx) {
  let input_1;
  let mounted;
  let dispose;
  return {
    c() {
      input_1 = element("input");
      attr$1(input_1, "class", "");
      input_1.checked = ctx[2];
      attr$1(input_1, "type", "checkbox");
      attr$1(input_1, "tabindex", "-1");
      input_1.disabled = ctx[0];
    },
    m(target, anchor) {
      insert(target, input_1, anchor);
      ctx[5](input_1);
      if (!mounted) {
        dispose = listen(input_1, "click", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4) {
        input_1.checked = ctx2[2];
      }
      if (dirty & 1) {
        input_1.disabled = ctx2[0];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(input_1);
      ctx[5](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$q($$self, $$props, $$invalidate) {
  let checked;
  let { disabled = false } = $$props;
  let { node: node2 } = $$props;
  let input;
  const dispatch = createEventDispatcher();
  onMount(() => {
    $$invalidate(1, input.indeterminate = node2.checkState === CheckState.indeterminate, input);
  });
  function click(e) {
    $$invalidate(2, checked = !checked);
    $$invalidate(4, node2.checkState = checked ? CheckState.selected : CheckState.none, node2);
    dispatch("checked", { checked, node: node2 });
  }
  function input_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      input = $$value;
      $$invalidate(1, input), $$invalidate(4, node2);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("disabled" in $$props2)
      $$invalidate(0, disabled = $$props2.disabled);
    if ("node" in $$props2)
      $$invalidate(4, node2 = $$props2.node);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16) {
      $$invalidate(2, checked = node2.checkState === CheckState.none ? false : true);
    }
    if ($$self.$$.dirty & 18) {
      if (input) {
        $$invalidate(1, input.indeterminate = node2.checkState === CheckState.indeterminate, input);
      }
    }
  };
  return [disabled, input, checked, click, node2, input_1_binding];
}
class Checkbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$q, safe_not_equal, { disabled: 0, node: 4 });
  }
}
function classes(...classArray) {
  if (!classArray)
    return "";
  return classArray.filter((cls) => !!cls).join(" ");
}
const get_expandable_slot_changes = (dirty) => ({ node: dirty & 131072 });
const get_expandable_slot_context = (ctx) => ({ node: ctx[17] });
const get_checkbox_slot_changes = (dirty) => ({ node: dirty & 131072 });
const get_checkbox_slot_context = (ctx) => ({ node: ctx[17] });
const get_icon_slot_changes = (dirty) => ({ node: dirty & 131072 });
const get_icon_slot_context = (ctx) => ({ node: ctx[17] });
const get_label_slot_changes = (dirty) => ({ node: dirty & 131072 });
const get_label_slot_context = (ctx) => ({ node: ctx[17] });
const get_meta_slot_changes = (dirty) => ({ node: dirty & 131072 });
const get_meta_slot_context = (ctx) => ({ node: ctx[17] });
function create_if_block_2$3(ctx) {
  let current;
  const expandable_slot_template = ctx[10].expandable;
  const expandable_slot = create_slot(expandable_slot_template, ctx, ctx[11], get_expandable_slot_context);
  const expandable_slot_or_fallback = expandable_slot || fallback_block_2$1(ctx);
  return {
    c() {
      if (expandable_slot_or_fallback)
        expandable_slot_or_fallback.c();
    },
    m(target, anchor) {
      if (expandable_slot_or_fallback) {
        expandable_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (expandable_slot) {
        if (expandable_slot.p && (!current || dirty & 133120)) {
          update_slot_base(expandable_slot, expandable_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(expandable_slot_template, ctx2[11], dirty, get_expandable_slot_changes), get_expandable_slot_context);
        }
      } else {
        if (expandable_slot_or_fallback && expandable_slot_or_fallback.p && (!current || dirty & 131072)) {
          expandable_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(expandable_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (expandable_slot_or_fallback)
        expandable_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_2$1(ctx) {
  let expandable;
  let current;
  expandable = new Expandable({ props: { node: ctx[17] } });
  expandable.$on("expanded", ctx[9]);
  return {
    c() {
      create_component(expandable.$$.fragment);
    },
    m(target, anchor) {
      mount_component(expandable, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const expandable_changes = {};
      if (dirty & 131072)
        expandable_changes.node = ctx2[17];
      expandable.$set(expandable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(expandable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(expandable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(expandable, detaching);
    }
  };
}
function create_expandable_slot(ctx) {
  let div;
  let show_if = ctx[17].isExpandable();
  let current;
  let if_block = show_if && create_if_block_2$3(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr$1(div, "slot", "expandable");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 131072)
        show_if = ctx2[17].isExpandable();
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 131072) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1$3(ctx) {
  let current;
  const checkbox_slot_template = ctx[10].checkbox;
  const checkbox_slot = create_slot(checkbox_slot_template, ctx, ctx[11], get_checkbox_slot_context);
  const checkbox_slot_or_fallback = checkbox_slot || fallback_block_1$1(ctx);
  return {
    c() {
      if (checkbox_slot_or_fallback)
        checkbox_slot_or_fallback.c();
    },
    m(target, anchor) {
      if (checkbox_slot_or_fallback) {
        checkbox_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (checkbox_slot) {
        if (checkbox_slot.p && (!current || dirty & 133120)) {
          update_slot_base(checkbox_slot, checkbox_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(checkbox_slot_template, ctx2[11], dirty, get_checkbox_slot_changes), get_checkbox_slot_context);
        }
      } else {
        if (checkbox_slot_or_fallback && checkbox_slot_or_fallback.p && (!current || dirty & 131072)) {
          checkbox_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (checkbox_slot_or_fallback)
        checkbox_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1$1(ctx) {
  let checkbox;
  let current;
  checkbox = new Checkbox({
    props: {
      node: ctx[17],
      disabled: ctx[17].isDisabled()
    }
  });
  checkbox.$on("checked", ctx[6]);
  return {
    c() {
      create_component(checkbox.$$.fragment);
    },
    m(target, anchor) {
      mount_component(checkbox, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const checkbox_changes = {};
      if (dirty & 131072)
        checkbox_changes.node = ctx2[17];
      if (dirty & 131072)
        checkbox_changes.disabled = ctx2[17].isDisabled();
      checkbox.$set(checkbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(checkbox, detaching);
    }
  };
}
function create_checkbox_slot(ctx) {
  let div;
  let show_if = ctx[17].isCheckable();
  let current;
  let if_block = show_if && create_if_block_1$3(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr$1(div, "slot", "checkbox");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 131072)
        show_if = ctx2[17].isCheckable();
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 131072) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block$i(ctx) {
  let current;
  const icon_slot_template = ctx[10].icon;
  const icon_slot = create_slot(icon_slot_template, ctx, ctx[11], get_icon_slot_context);
  return {
    c() {
      if (icon_slot)
        icon_slot.c();
    },
    m(target, anchor) {
      if (icon_slot) {
        icon_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & 133120)) {
          update_slot_base(icon_slot, icon_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(icon_slot_template, ctx2[11], dirty, get_icon_slot_changes), get_icon_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_icon_slot(ctx) {
  let div;
  let current;
  let if_block = ctx[4] && create_if_block$i(ctx);
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr$1(div, "slot", "icon");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[4]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$i(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function fallback_block$c(ctx) {
  let t_value = ctx[17].label + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 131072 && t_value !== (t_value = ctx2[17].label + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_label_slot(ctx) {
  let div;
  let current;
  const label_slot_template = ctx[10].label;
  const label_slot = create_slot(label_slot_template, ctx, ctx[11], get_label_slot_context);
  const label_slot_or_fallback = label_slot || fallback_block$c(ctx);
  return {
    c() {
      div = element("div");
      if (label_slot_or_fallback)
        label_slot_or_fallback.c();
      attr$1(div, "slot", "label");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (label_slot_or_fallback) {
        label_slot_or_fallback.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (label_slot) {
        if (label_slot.p && (!current || dirty & 133120)) {
          update_slot_base(label_slot, label_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(label_slot_template, ctx2[11], dirty, get_label_slot_changes), get_label_slot_context);
        }
      } else {
        if (label_slot_or_fallback && label_slot_or_fallback.p && (!current || dirty & 131072)) {
          label_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(label_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(label_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (label_slot_or_fallback)
        label_slot_or_fallback.d(detaching);
    }
  };
}
function create_right_content_slot(ctx) {
  let div;
  let current;
  const meta_slot_template = ctx[10].meta;
  const meta_slot = create_slot(meta_slot_template, ctx, ctx[11], get_meta_slot_context);
  return {
    c() {
      div = element("div");
      if (meta_slot)
        meta_slot.c();
      attr$1(div, "slot", "right-content");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (meta_slot) {
        meta_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (meta_slot) {
        if (meta_slot.p && (!current || dirty & 133120)) {
          update_slot_base(meta_slot, meta_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(meta_slot_template, ctx2[11], dirty, get_meta_slot_changes), get_meta_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(meta_slot, local);
      current = true;
    },
    o(local) {
      transition_out(meta_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (meta_slot)
        meta_slot.d(detaching);
    }
  };
}
function create_fragment$p(ctx) {
  let div;
  let treenode;
  let div_class_value;
  let current;
  let mounted;
  let dispose;
  treenode = new TreeNode({
    props: {
      node: ctx[5],
      size: ctx[3],
      isIcon: ctx[4],
      $$slots: {
        "right-content": [
          create_right_content_slot,
          ({ node: node2 }) => ({ 17: node2 }),
          ({ node: node2 }) => node2 ? 131072 : 0
        ],
        label: [
          create_label_slot,
          ({ node: node2 }) => ({ 17: node2 }),
          ({ node: node2 }) => node2 ? 131072 : 0
        ],
        icon: [
          create_icon_slot,
          ({ node: node2 }) => ({ 17: node2 }),
          ({ node: node2 }) => node2 ? 131072 : 0
        ],
        checkbox: [
          create_checkbox_slot,
          ({ node: node2 }) => ({ 17: node2 }),
          ({ node: node2 }) => node2 ? 131072 : 0
        ],
        expandable: [
          create_expandable_slot,
          ({ node: node2 }) => ({ 17: node2 }),
          ({ node: node2 }) => node2 ? 131072 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  treenode.$on("click", ctx[8]);
  return {
    c() {
      div = element("div");
      create_component(treenode.$$.fragment);
      attr$1(div, "class", div_class_value = classes(ctx[1]));
      attr$1(div, "showroot", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(treenode, div, null);
      current = true;
      if (!mounted) {
        dispose = listen(div, "keydown", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const treenode_changes = {};
      if (dirty & 32)
        treenode_changes.node = ctx2[5];
      if (dirty & 8)
        treenode_changes.size = ctx2[3];
      if (dirty & 16)
        treenode_changes.isIcon = ctx2[4];
      if (dirty & 133136) {
        treenode_changes.$$scope = { dirty, ctx: ctx2 };
      }
      treenode.$set(treenode_changes);
      if (!current || dirty & 2 && div_class_value !== (div_class_value = classes(ctx2[1]))) {
        attr$1(div, "class", div_class_value);
      }
      if (!current || dirty & 4) {
        attr$1(div, "showroot", ctx2[2]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(treenode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(treenode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(treenode);
      mounted = false;
      dispose();
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  let isIcon;
  let $root, $$unsubscribe_root = noop, $$subscribe_root = () => ($$unsubscribe_root(), $$unsubscribe_root = subscribe(root, ($$value) => $$invalidate(5, $root = $$value)), root);
  $$self.$$.on_destroy.push(() => $$unsubscribe_root());
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { root } = $$props;
  $$subscribe_root();
  let { class: _class = "" } = $$props;
  let selectedNode = null;
  const dispatch = createEventDispatcher();
  let { showRoot = true } = $$props;
  let { size = "medium" } = $$props;
  function onChecked(e) {
    let { checked, node: node2 } = e.detail;
    if (checked) {
      node2.checkAll(CheckState.selected);
    } else {
      node2.checkAll(CheckState.none);
    }
    dispatch("check", { checked, node: node2 });
  }
  function selectNext() {
    if (!selectedNode) {
      selectedNode = root;
      selectedNode.setSelected(true);
    } else {
      selectedNode = selectedNode.selectNext();
    }
    dispatch("select", { node: selectedNode });
  }
  function selectPrevious() {
    if (!selectedNode) {
      selectedNode = root;
      selectedNode.setSelected(true);
    } else {
      selectedNode = selectedNode.selectPrevious();
    }
    dispatch("select", { node: selectedNode });
  }
  function onKeypress(e) {
    let { keyCode } = e;
    if (keyCode === 40) {
      selectNext();
    } else if (keyCode === 38) {
      selectPrevious();
    } else if (keyCode === 37) {
      if (!selectedNode)
        selectedNode = root;
      selectedNode.setExpanded(false);
      dispatch("expand", { expanded: false, node: selectedNode });
    } else if (keyCode === 39) {
      if (!selectedNode)
        selectedNode = root;
      if (selectedNode.isExpandable()) {
        selectedNode.setExpanded(true);
        dispatch("expand", { expanded: true, node: selectedNode });
      }
    } else if (keyCode === 32) {
      if (!selectedNode)
        selectedNode = node;
      onChecked({
        detail: {
          checked: selectedNode.checkState === CheckState.none,
          node: selectedNode
        }
      });
    }
  }
  function onClick(e) {
    let { node: node2 } = e.detail;
    if (!node2.isDisabled() && node2.isSelectable()) {
      if (selectedNode)
        selectedNode.setSelected(false);
      selectedNode = node2;
      node2.setSelected(true);
      dispatch("select", { node: node2 });
    }
  }
  function onExpand(e) {
    dispatch("expand", {
      expanded: e.detail.expanded,
      node: e.detail.node
    });
  }
  $$self.$$set = ($$props2) => {
    if ("root" in $$props2)
      $$subscribe_root($$invalidate(0, root = $$props2.root));
    if ("class" in $$props2)
      $$invalidate(1, _class = $$props2.class);
    if ("showRoot" in $$props2)
      $$invalidate(2, showRoot = $$props2.showRoot);
    if ("size" in $$props2)
      $$invalidate(3, size = $$props2.size);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$invalidate(4, isIcon = $$slots.icon);
  return [
    root,
    _class,
    showRoot,
    size,
    isIcon,
    $root,
    onChecked,
    onKeypress,
    onClick,
    onExpand,
    slots,
    $$scope
  ];
}
class TreeView extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$p, safe_not_equal, { root: 0, class: 1, showRoot: 2, size: 3 });
  }
}
class BaseNode {
  constructor(id2, label, parent2 = null) {
    if (this.constructor === BaseNode) {
      throw new Error("unable to instantiate the abstract class");
    }
    this.id = id2;
    this.label = label;
    this.children = null;
    this.parent = parent2;
    this._expanded = false;
    this.selected = false;
    this.checkState = CheckState.none;
    this.listeners = [];
    this.checkable = false;
    this.disabled = false;
    this.selectable = false;
    this.loading = false;
  }
  subscribe(listener) {
    this.listeners.push(listener);
    listener(this);
    return () => {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
  }
  notify() {
    for (let listener of this.listeners) {
      listener(this);
    }
  }
  getId() {
    return this.id;
  }
  getLabel() {
    return this.label;
  }
  setLabel(label) {
    this.label = label;
    this.notify();
  }
  getChildCount() {
    return this.children ? this.children.length : 0;
  }
  async getChildren() {
    return this.children ? this.children : [];
  }
  setChildren(children2) {
    this.children = children2;
  }
  pushChild(child) {
    if (this.children !== null)
      this.children.push(child);
  }
  getParent() {
    return this.parent;
  }
  setParent(parent2) {
    this.parent = parent2;
  }
  isExpanded() {
    return this._expanded;
  }
  setExpanded(state) {
    if (!this.isExpandable())
      return;
    this._expanded = state;
    this.notify();
  }
  isExpandable() {
    return this.children ? this.children.length > 0 : false;
  }
  isSelectable() {
    return this.selectable && !this.disabled;
  }
  setSelectable(selectable) {
    this.selectable = selectable;
  }
  getCheckState() {
    return this.checkState;
  }
  setCheckState(checkState) {
    this.checkState = checkState;
    this.notify();
  }
  isDisabled() {
    return this.disabled;
  }
  setDisabled(disabled) {
    this.disabled = disabled;
  }
  isCheckable() {
    return this.checkable && !this.disabled;
  }
  setCheckable(checkable) {
    this.checkable = checkable;
  }
  isLoading() {
    return this.loading;
  }
  setLoading(state) {
    this.loading = state;
    this.notify();
  }
  isRoot() {
    return !this.parent;
  }
  getRoot() {
    let node2 = this;
    let root = node2;
    while (node2.parent) {
      root = node2.parent;
      node2 = node2.parent;
    }
    return root;
  }
  checkAllChild(state) {
    this.checkState = state;
    if (!this.children) {
      return;
    }
    for (let child of this.children) {
      child.checkState = state;
      child.checkAllChild(state);
    }
  }
  checkAllParent(state) {
    if (this.parent === null)
      return;
    let siblings = this.getSiblings();
    let countOfNone = 0, partial = false;
    for (let sibling of siblings) {
      if (sibling.checkState === CheckState.none) {
        countOfNone++;
      } else if (sibling.checkState === CheckState.indeterminate) {
        partial = true;
        break;
      }
    }
    if (partial || countOfNone > 0 && countOfNone < siblings.length) {
      this.parent.checkState = CheckState.indeterminate;
    } else if (countOfNone === 0) {
      this.parent.checkState = CheckState.selected;
    } else {
      this.parent.checkState = CheckState.none;
    }
    this.parent.checkAllParent(state);
  }
  checkAll(state) {
    this.checkAllChild(state);
    this.checkAllParent(state);
    this.checkState = state;
    this.getRoot().notify();
  }
  expandedAll(state, root) {
    root._expanded = state;
    for (let child of parent.children) {
      child._expanded = state;
      this.expandedAll(state, child);
    }
    this.notify();
  }
  getSelected() {
    return this.selected;
  }
  setSelected(selected) {
    this.selected = selected;
    this.notify();
  }
  getSiblings() {
    if (this.parent === null)
      return null;
    if (this.parent.getChildCount() > 0)
      return this.parent.children;
    return null;
  }
  findNextSibling() {
    let siblings = this.getSiblings();
    if (!siblings)
      return null;
    const index2 = siblings.indexOf(this);
    return siblings[index2 + 1] || this.parent.findNextSibling();
  }
  findPreviousSibling() {
    let siblings = this.getSiblings();
    if (!siblings)
      return null;
    const index2 = siblings.indexOf(this);
    return siblings[index2 - 1] || null;
  }
  findInnermostChild() {
    let childCount = this.getChildCount();
    if (childCount === 0 || (!this.isExpanded() || this.isLoading()))
      return this;
    return this.children[childCount - 1].findInnermostChild();
  }
  selectNext() {
    let next;
    if (this.isExpanded() && !this.isLoading() && this.getChildCount() > 0) {
      next = this.children[0];
    } else {
      next = this.findNextSibling();
    }
    if (next) {
      this.setSelected(false);
      if (next.isDisabled() || !next.isSelectable())
        return next.selectNext();
      next.setSelected(true);
      return next;
    } else {
      return null;
    }
  }
  selectPrevious() {
    let previous;
    let previousSibling = this.findPreviousSibling();
    if (!previousSibling)
      previous = this.parent;
    else if (previousSibling.isExpanded() && !previousSibling.isLoading()) {
      previous = previousSibling.findInnermostChild();
    } else {
      previous = previousSibling;
    }
    if (previous) {
      this.setSelected(false);
      if (previous.isDisabled() || !previous.isSelectable())
        return previous.selectPrevious();
      previous.setSelected(true);
      return previous;
    } else {
      return null;
    }
  }
  getNodeLevel() {
    if (!this.parent)
      return 0;
    return 1 + this.parent.getNodeLevel();
  }
}
function create_if_block$h(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$b(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$h(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$h(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$o(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$b(ctx);
  let svg_levels = [
    { "data-carbon-icon": "ChevronRight16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "ChevronRight16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 16 16" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$o($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class ChevronRight16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$o, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
function create_else_block$5(ctx) {
  let div;
  let mounted;
  let dispose;
  let div_levels = [ctx[3]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign$1(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      set_attributes(div, div_data);
      toggle_class(div, "bx--skeleton", true);
      toggle_class(div, "bx--btn", true);
      toggle_class(div, "bx--btn--field", ctx[1] === "field");
      toggle_class(div, "bx--btn--sm", ctx[1] === "small" || ctx[2]);
      toggle_class(div, "bx--btn--lg", ctx[1] === "lg");
      toggle_class(div, "bx--btn--xl", ctx[1] === "xl");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (!mounted) {
        dispose = [
          listen(div, "click", ctx[8]),
          listen(div, "mouseover", ctx[9]),
          listen(div, "mouseenter", ctx[10]),
          listen(div, "mouseleave", ctx[11])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 8 && ctx2[3]]));
      toggle_class(div, "bx--skeleton", true);
      toggle_class(div, "bx--btn", true);
      toggle_class(div, "bx--btn--field", ctx2[1] === "field");
      toggle_class(div, "bx--btn--sm", ctx2[1] === "small" || ctx2[2]);
      toggle_class(div, "bx--btn--lg", ctx2[1] === "lg");
      toggle_class(div, "bx--btn--xl", ctx2[1] === "xl");
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$g(ctx) {
  let a;
  let t_value = "";
  let t;
  let a_rel_value;
  let mounted;
  let dispose;
  let a_levels = [
    { href: ctx[0] },
    {
      rel: a_rel_value = ctx[3].target === "_blank" ? "noopener noreferrer" : void 0
    },
    { role: "button" },
    ctx[3]
  ];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign$1(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      t = text(t_value);
      set_attributes(a, a_data);
      toggle_class(a, "bx--skeleton", true);
      toggle_class(a, "bx--btn", true);
      toggle_class(a, "bx--btn--field", ctx[1] === "field");
      toggle_class(a, "bx--btn--sm", ctx[1] === "small" || ctx[2]);
      toggle_class(a, "bx--btn--lg", ctx[1] === "lg");
      toggle_class(a, "bx--btn--xl", ctx[1] === "xl");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      append(a, t);
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[4]),
          listen(a, "mouseover", ctx[5]),
          listen(a, "mouseenter", ctx[6]),
          listen(a, "mouseleave", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      set_attributes(a, a_data = get_spread_update(a_levels, [
        dirty & 1 && { href: ctx2[0] },
        dirty & 8 && a_rel_value !== (a_rel_value = ctx2[3].target === "_blank" ? "noopener noreferrer" : void 0) && { rel: a_rel_value },
        { role: "button" },
        dirty & 8 && ctx2[3]
      ]));
      toggle_class(a, "bx--skeleton", true);
      toggle_class(a, "bx--btn", true);
      toggle_class(a, "bx--btn--field", ctx2[1] === "field");
      toggle_class(a, "bx--btn--sm", ctx2[1] === "small" || ctx2[2]);
      toggle_class(a, "bx--btn--lg", ctx2[1] === "lg");
      toggle_class(a, "bx--btn--xl", ctx2[1] === "xl");
    },
    d(detaching) {
      if (detaching)
        detach(a);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$n(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block$g;
    return create_else_block$5;
  }
  let current_block_type = select_block_type(ctx);
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
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$n($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "size", "small"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { small = false } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props)
      $$invalidate(0, href = $$new_props.href);
    if ("size" in $$new_props)
      $$invalidate(1, size = $$new_props.size);
    if ("small" in $$new_props)
      $$invalidate(2, small = $$new_props.small);
  };
  return [
    href,
    size,
    small,
    $$restProps,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1
  ];
}
class ButtonSkeleton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$n, safe_not_equal, { href: 0, size: 1, small: 2 });
  }
}
const get_default_slot_changes = (dirty) => ({ props: dirty[0] & 512 });
const get_default_slot_context = (ctx) => ({ props: ctx[9] });
function create_else_block$4(ctx) {
  let button;
  let t;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block_4$1(ctx);
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], null);
  var switch_value = ctx[3];
  function switch_props(ctx2) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": ctx2[4]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  let button_levels = [ctx[9]];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign$1(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      append(button, t);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (switch_instance) {
        mount_component(switch_instance, button, null);
      }
      if (button.autofocus)
        button.focus();
      ctx[33](button);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[24]),
          listen(button, "mouseover", ctx[25]),
          listen(button, "mouseenter", ctx[26]),
          listen(button, "mouseleave", ctx[27])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4$1(ctx2);
          if_block.c();
          if_block.m(button, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262144)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, null), null);
        }
      }
      const switch_instance_changes = {};
      if (dirty[0] & 16)
        switch_instance_changes["aria-label"] = ctx2[4];
      if (switch_value !== (switch_value = ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, button, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [dirty[0] & 512 && ctx2[9]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[33](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$2(ctx) {
  let a;
  let t;
  let switch_instance;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block_3$1(ctx);
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], null);
  var switch_value = ctx[3];
  function switch_props(ctx2) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": ctx2[4]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  let a_levels = [ctx[9]];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign$1(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert(target, a, anchor);
      if (if_block)
        if_block.m(a, null);
      append(a, t);
      if (default_slot) {
        default_slot.m(a, null);
      }
      if (switch_instance) {
        mount_component(switch_instance, a, null);
      }
      ctx[32](a);
      current = true;
      if (!mounted) {
        dispose = [
          listen(a, "click", ctx[20]),
          listen(a, "mouseover", ctx[21]),
          listen(a, "mouseenter", ctx[22]),
          listen(a, "mouseleave", ctx[23])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_3$1(ctx2);
          if_block.c();
          if_block.m(a, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262144)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, null), null);
        }
      }
      const switch_instance_changes = {};
      if (dirty[0] & 16)
        switch_instance_changes["aria-label"] = ctx2[4];
      if (switch_value !== (switch_value = ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, a, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [dirty[0] & 512 && ctx2[9]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
      if (switch_instance)
        destroy_component(switch_instance);
      ctx[32](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$2(ctx) {
  let current;
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & 262656)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, get_default_slot_changes), get_default_slot_context);
        }
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$f(ctx) {
  let buttonskeleton;
  let current;
  const buttonskeleton_spread_levels = [
    { href: ctx[8] },
    { size: ctx[2] },
    ctx[10],
    {
      style: ctx[0] && "width: 3rem;"
    }
  ];
  let buttonskeleton_props = {};
  for (let i = 0; i < buttonskeleton_spread_levels.length; i += 1) {
    buttonskeleton_props = assign$1(buttonskeleton_props, buttonskeleton_spread_levels[i]);
  }
  buttonskeleton = new ButtonSkeleton({ props: buttonskeleton_props });
  buttonskeleton.$on("click", ctx[28]);
  buttonskeleton.$on("mouseover", ctx[29]);
  buttonskeleton.$on("mouseenter", ctx[30]);
  buttonskeleton.$on("mouseleave", ctx[31]);
  return {
    c() {
      create_component(buttonskeleton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(buttonskeleton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const buttonskeleton_changes = dirty[0] & 1285 ? get_spread_update(buttonskeleton_spread_levels, [
        dirty[0] & 256 && { href: ctx2[8] },
        dirty[0] & 4 && { size: ctx2[2] },
        dirty[0] & 1024 && get_spread_object(ctx2[10]),
        dirty[0] & 1 && {
          style: ctx2[0] && "width: 3rem;"
        }
      ]) : {};
      buttonskeleton.$set(buttonskeleton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(buttonskeleton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(buttonskeleton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(buttonskeleton, detaching);
    }
  };
}
function create_if_block_4$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[4]);
      toggle_class(span, "bx--assistive-text", true);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_3$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[4]);
      toggle_class(span, "bx--assistive-text", true);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16)
        set_data(t, ctx2[4]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$m(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$f, create_if_block_1$2, create_if_block_2$2, create_else_block$4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6])
      return 0;
    if (ctx2[5])
      return 1;
    if (ctx2[8] && !ctx2[7])
      return 2;
    return 3;
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
function instance$m($$self, $$props, $$invalidate) {
  let buttonProps;
  const omit_props_names = [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "hasIconOnly",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { hasIconOnly = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_2(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("kind" in $$new_props)
      $$invalidate(11, kind = $$new_props.kind);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("expressive" in $$new_props)
      $$invalidate(12, expressive = $$new_props.expressive);
    if ("isSelected" in $$new_props)
      $$invalidate(13, isSelected = $$new_props.isSelected);
    if ("hasIconOnly" in $$new_props)
      $$invalidate(0, hasIconOnly = $$new_props.hasIconOnly);
    if ("icon" in $$new_props)
      $$invalidate(3, icon = $$new_props.icon);
    if ("iconDescription" in $$new_props)
      $$invalidate(4, iconDescription = $$new_props.iconDescription);
    if ("tooltipAlignment" in $$new_props)
      $$invalidate(14, tooltipAlignment = $$new_props.tooltipAlignment);
    if ("tooltipPosition" in $$new_props)
      $$invalidate(15, tooltipPosition = $$new_props.tooltipPosition);
    if ("as" in $$new_props)
      $$invalidate(5, as = $$new_props.as);
    if ("skeleton" in $$new_props)
      $$invalidate(6, skeleton = $$new_props.skeleton);
    if ("disabled" in $$new_props)
      $$invalidate(7, disabled = $$new_props.disabled);
    if ("href" in $$new_props)
      $$invalidate(8, href = $$new_props.href);
    if ("tabindex" in $$new_props)
      $$invalidate(16, tabindex = $$new_props.tabindex);
    if ("type" in $$new_props)
      $$invalidate(17, type = $$new_props.type);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(18, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2) {
      if (ctx && ref) {
        ctx.declareRef(ref);
      }
    }
    if ($$self.$$.dirty[0] & 8) {
      $$invalidate(0, hasIconOnly = icon && !$$slots.default);
    }
    $$invalidate(9, buttonProps = __spreadProps(__spreadValues({
      type: href && !disabled ? void 0 : type,
      tabindex,
      disabled: disabled === true ? true : void 0,
      href,
      "aria-pressed": hasIconOnly && kind === "ghost" ? isSelected : void 0
    }, $$restProps), {
      class: [
        "bx--btn",
        expressive && "bx--btn--expressive",
        (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
        size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
        size === "field" && "bx--btn--field",
        size === "small" && "bx--btn--sm",
        size === "lg" && "bx--btn--lg",
        size === "xl" && "bx--btn--xl",
        kind && `bx--btn--${kind}`,
        disabled && "bx--btn--disabled",
        hasIconOnly && "bx--btn--icon-only",
        hasIconOnly && "bx--tooltip__trigger",
        hasIconOnly && "bx--tooltip--a11y",
        hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
        hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
        hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
        $$restProps.class
      ].filter(Boolean).join(" ")
    }));
  };
  return [
    hasIconOnly,
    ref,
    size,
    icon,
    iconDescription,
    as,
    skeleton,
    disabled,
    href,
    buttonProps,
    $$restProps,
    kind,
    expressive,
    isSelected,
    tooltipAlignment,
    tooltipPosition,
    tabindex,
    type,
    $$scope,
    slots,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1,
    click_handler_2,
    mouseover_handler_2,
    mouseenter_handler_2,
    mouseleave_handler_2,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    a_binding,
    button_binding
  ];
}
class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$m, safe_not_equal, {
      kind: 11,
      size: 2,
      expressive: 12,
      isSelected: 13,
      hasIconOnly: 0,
      icon: 3,
      iconDescription: 4,
      tooltipAlignment: 14,
      tooltipPosition: 15,
      as: 5,
      skeleton: 6,
      disabled: 7,
      href: 8,
      tabindex: 16,
      type: 17,
      ref: 1
    }, null, [-1, -1]);
  }
}
function create_fragment$l(ctx) {
  let input;
  let input_checked_value;
  let input_aria_checked_value;
  let t;
  let label;
  let label_aria_label_value;
  let mounted;
  let dispose;
  let input_levels = [
    { type: "checkbox" },
    {
      checked: input_checked_value = ctx[2] ? false : ctx[1]
    },
    { indeterminate: ctx[2] },
    { id: ctx[4] },
    ctx[5],
    { "aria-label": void 0 },
    {
      "aria-checked": input_aria_checked_value = ctx[2] ? "mixed" : ctx[1]
    }
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign$1(input_data, input_levels[i]);
  }
  return {
    c() {
      input = element("input");
      t = space();
      label = element("label");
      set_attributes(input, input_data);
      toggle_class(input, "bx--checkbox", true);
      attr$1(label, "for", ctx[4]);
      attr$1(label, "title", ctx[3]);
      attr$1(label, "aria-label", label_aria_label_value = ctx[6]["aria-label"]);
      toggle_class(label, "bx--checkbox-label", true);
    },
    m(target, anchor) {
      insert(target, input, anchor);
      if (input.autofocus)
        input.focus();
      ctx[8](input);
      insert(target, t, anchor);
      insert(target, label, anchor);
      if (!mounted) {
        dispose = listen(input, "change", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "checkbox" },
        dirty & 6 && input_checked_value !== (input_checked_value = ctx2[2] ? false : ctx2[1]) && { checked: input_checked_value },
        dirty & 4 && { indeterminate: ctx2[2] },
        dirty & 16 && { id: ctx2[4] },
        dirty & 32 && ctx2[5],
        { "aria-label": void 0 },
        dirty & 6 && input_aria_checked_value !== (input_aria_checked_value = ctx2[2] ? "mixed" : ctx2[1]) && { "aria-checked": input_aria_checked_value }
      ]));
      toggle_class(input, "bx--checkbox", true);
      if (dirty & 16) {
        attr$1(label, "for", ctx2[4]);
      }
      if (dirty & 8) {
        attr$1(label, "title", ctx2[3]);
      }
      if (dirty & 64 && label_aria_label_value !== (label_aria_label_value = ctx2[6]["aria-label"])) {
        attr$1(label, "aria-label", label_aria_label_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(input);
      ctx[8](null);
      if (detaching)
        detach(t);
      if (detaching)
        detach(label);
      mounted = false;
      dispose();
    }
  };
}
function instance$l($$self, $$props, $$invalidate) {
  const omit_props_names = ["checked", "indeterminate", "title", "id", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id: id2 = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("checked" in $$new_props)
      $$invalidate(1, checked = $$new_props.checked);
    if ("indeterminate" in $$new_props)
      $$invalidate(2, indeterminate = $$new_props.indeterminate);
    if ("title" in $$new_props)
      $$invalidate(3, title = $$new_props.title);
    if ("id" in $$new_props)
      $$invalidate(4, id2 = $$new_props.id);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
  };
  $$props = exclude_internal_props($$props);
  return [
    ref,
    checked,
    indeterminate,
    title,
    id2,
    $$restProps,
    $$props,
    change_handler,
    input_binding
  ];
}
class InlineCheckbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$l, safe_not_equal, {
      checked: 1,
      indeterminate: 2,
      title: 3,
      id: 4,
      ref: 0
    });
  }
}
const get_labelText_slot_changes = (dirty) => ({});
const get_labelText_slot_context = (ctx) => ({});
function create_if_block$e(ctx) {
  let span;
  let current;
  const labelText_slot_template = ctx[15].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[14], get_labelText_slot_context);
  const labelText_slot_or_fallback = labelText_slot || fallback_block$a(ctx);
  return {
    c() {
      span = element("span");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      toggle_class(span, "bx--visually-hidden", ctx[6]);
    },
    m(target, anchor) {
      insert(target, span, anchor);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty & 16384)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[14], !current ? get_all_dirty_from_scope(ctx2[14]) : get_slot_changes(labelText_slot_template, ctx2[14], dirty, get_labelText_slot_changes), get_labelText_slot_context);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty & 32)) {
          labelText_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (dirty & 64) {
        toggle_class(span, "bx--visually-hidden", ctx2[6]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(labelText_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(labelText_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block$a(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[5]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32)
        set_data(t, ctx2[5]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$k(ctx) {
  let div;
  let input;
  let t0;
  let label;
  let span;
  let t1;
  let current;
  let mounted;
  let dispose;
  let if_block = (ctx[5] || ctx[12].labelText) && create_if_block$e(ctx);
  let div_levels = [ctx[11]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign$1(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      span = element("span");
      t1 = space();
      if (if_block)
        if_block.c();
      attr$1(input, "type", "radio");
      attr$1(input, "id", ctx[7]);
      attr$1(input, "name", ctx[8]);
      input.checked = ctx[0];
      input.disabled = ctx[3];
      input.value = ctx[2];
      toggle_class(input, "bx--radio-button", true);
      toggle_class(span, "bx--radio-button__appearance", true);
      attr$1(label, "for", ctx[7]);
      toggle_class(label, "bx--radio-button__label", true);
      set_attributes(div, div_data);
      toggle_class(div, "bx--radio-button-wrapper", true);
      toggle_class(div, "bx--radio-button-wrapper--label-left", ctx[4] === "left");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, input);
      ctx[17](input);
      append(div, t0);
      append(div, label);
      append(label, span);
      append(label, t1);
      if (if_block)
        if_block.m(label, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[16]),
          listen(input, "change", ctx[18])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 128) {
        attr$1(input, "id", ctx2[7]);
      }
      if (!current || dirty & 256) {
        attr$1(input, "name", ctx2[8]);
      }
      if (!current || dirty & 1) {
        input.checked = ctx2[0];
      }
      if (!current || dirty & 8) {
        input.disabled = ctx2[3];
      }
      if (!current || dirty & 4) {
        input.value = ctx2[2];
      }
      if (ctx2[5] || ctx2[12].labelText) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4128) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$e(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(label, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 128) {
        attr$1(label, "for", ctx2[7]);
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 2048 && ctx2[11]]));
      toggle_class(div, "bx--radio-button-wrapper", true);
      toggle_class(div, "bx--radio-button-wrapper--label-left", ctx2[4] === "left");
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
      ctx[17](null);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$k($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "value",
    "checked",
    "disabled",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selectedValue;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id: id2 = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  component_subscribe($$self, selectedValue, (value2) => $$invalidate(13, $selectedValue = value2));
  if (ctx) {
    ctx.add({ id: id2, checked, disabled, value });
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  const change_handler_1 = () => {
    if (ctx) {
      ctx.update(value);
    }
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(2, value = $$new_props.value);
    if ("checked" in $$new_props)
      $$invalidate(0, checked = $$new_props.checked);
    if ("disabled" in $$new_props)
      $$invalidate(3, disabled = $$new_props.disabled);
    if ("labelPosition" in $$new_props)
      $$invalidate(4, labelPosition = $$new_props.labelPosition);
    if ("labelText" in $$new_props)
      $$invalidate(5, labelText = $$new_props.labelText);
    if ("hideLabel" in $$new_props)
      $$invalidate(6, hideLabel = $$new_props.hideLabel);
    if ("id" in $$new_props)
      $$invalidate(7, id2 = $$new_props.id);
    if ("name" in $$new_props)
      $$invalidate(8, name = $$new_props.name);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(14, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8196) {
      $$invalidate(0, checked = $selectedValue === value);
    }
  };
  return [
    checked,
    ref,
    value,
    disabled,
    labelPosition,
    labelText,
    hideLabel,
    id2,
    name,
    ctx,
    selectedValue,
    $$restProps,
    $$slots,
    $selectedValue,
    $$scope,
    slots,
    change_handler,
    input_binding,
    change_handler_1
  ];
}
class RadioButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$k, safe_not_equal, {
      value: 2,
      checked: 0,
      disabled: 3,
      labelPosition: 4,
      labelText: 5,
      hideLabel: 6,
      id: 7,
      name: 8,
      ref: 1
    });
  }
}
function create_else_block$3(ctx) {
  let table;
  let current;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  let table_levels = [ctx[6]];
  let table_data = {};
  for (let i = 0; i < table_levels.length; i += 1) {
    table_data = assign$1(table_data, table_levels[i]);
  }
  return {
    c() {
      table = element("table");
      if (default_slot)
        default_slot.c();
      set_attributes(table, table_data);
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx[4]);
      toggle_class(table, "bx--data-table--zebra", ctx[1]);
      toggle_class(table, "bx--data-table--static", ctx[2]);
      toggle_class(table, "bx--data-table--no-border", !ctx[3]);
      toggle_class(table, "bx--data-table--sticky-header", ctx[5]);
    },
    m(target, anchor) {
      insert(target, table, anchor);
      if (default_slot) {
        default_slot.m(table, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
        }
      }
      set_attributes(table, table_data = get_spread_update(table_levels, [dirty & 64 && ctx2[6]]));
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx2[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx2[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx2[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx2[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx2[4]);
      toggle_class(table, "bx--data-table--zebra", ctx2[1]);
      toggle_class(table, "bx--data-table--static", ctx2[2]);
      toggle_class(table, "bx--data-table--no-border", !ctx2[3]);
      toggle_class(table, "bx--data-table--sticky-header", ctx2[5]);
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
        detach(table);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$d(ctx) {
  let section;
  let table;
  let current;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  let section_levels = [ctx[6]];
  let section_data = {};
  for (let i = 0; i < section_levels.length; i += 1) {
    section_data = assign$1(section_data, section_levels[i]);
  }
  return {
    c() {
      section = element("section");
      table = element("table");
      if (default_slot)
        default_slot.c();
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx[4]);
      toggle_class(table, "bx--data-table--zebra", ctx[1]);
      toggle_class(table, "bx--data-table--static", ctx[2]);
      toggle_class(table, "bx--data-table--no-border", !ctx[3]);
      toggle_class(table, "bx--data-table--sticky-header", ctx[5]);
      set_attributes(section, section_data);
      toggle_class(section, "bx--data-table_inner-container", true);
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, table);
      if (default_slot) {
        default_slot.m(table, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
        }
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--compact", ctx2[0] === "compact");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--short", ctx2[0] === "short");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--tall", ctx2[0] === "tall");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--md", ctx2[0] === "medium");
      }
      if (dirty & 16) {
        toggle_class(table, "bx--data-table--sort", ctx2[4]);
      }
      if (dirty & 2) {
        toggle_class(table, "bx--data-table--zebra", ctx2[1]);
      }
      if (dirty & 4) {
        toggle_class(table, "bx--data-table--static", ctx2[2]);
      }
      if (dirty & 8) {
        toggle_class(table, "bx--data-table--no-border", !ctx2[3]);
      }
      if (dirty & 32) {
        toggle_class(table, "bx--data-table--sticky-header", ctx2[5]);
      }
      set_attributes(section, section_data = get_spread_update(section_levels, [dirty & 64 && ctx2[6]]));
      toggle_class(section, "bx--data-table_inner-container", true);
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
        detach(section);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$j(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$d, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
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
function instance$j($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "zebra", "useStaticWidth", "shouldShowBorder", "sortable", "stickyHeader"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { shouldShowBorder = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("zebra" in $$new_props)
      $$invalidate(1, zebra = $$new_props.zebra);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(2, useStaticWidth = $$new_props.useStaticWidth);
    if ("shouldShowBorder" in $$new_props)
      $$invalidate(3, shouldShowBorder = $$new_props.shouldShowBorder);
    if ("sortable" in $$new_props)
      $$invalidate(4, sortable = $$new_props.sortable);
    if ("stickyHeader" in $$new_props)
      $$invalidate(5, stickyHeader = $$new_props.stickyHeader);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  return [
    size,
    zebra,
    useStaticWidth,
    shouldShowBorder,
    sortable,
    stickyHeader,
    $$restProps,
    $$scope,
    slots
  ];
}
class Table extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, {
      size: 0,
      zebra: 1,
      useStaticWidth: 2,
      shouldShowBorder: 3,
      sortable: 4,
      stickyHeader: 5
    });
  }
}
function create_fragment$i(ctx) {
  let tbody;
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let tbody_levels = [{ "aria-live": "polite" }, ctx[0]];
  let tbody_data = {};
  for (let i = 0; i < tbody_levels.length; i += 1) {
    tbody_data = assign$1(tbody_data, tbody_levels[i]);
  }
  return {
    c() {
      tbody = element("tbody");
      if (default_slot)
        default_slot.c();
      set_attributes(tbody, tbody_data);
    },
    m(target, anchor) {
      insert(target, tbody, anchor);
      if (default_slot) {
        default_slot.m(tbody, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(tbody, tbody_data = get_spread_update(tbody_levels, [
        { "aria-live": "polite" },
        dirty & 1 && ctx2[0]
      ]));
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
        detach(tbody);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class TableBody extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, {});
  }
}
function create_fragment$h(ctx) {
  let td;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let td_levels = [ctx[0]];
  let td_data = {};
  for (let i = 0; i < td_levels.length; i += 1) {
    td_data = assign$1(td_data, td_levels[i]);
  }
  return {
    c() {
      td = element("td");
      if (default_slot)
        default_slot.c();
      set_attributes(td, td_data);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      if (default_slot) {
        default_slot.m(td, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(td, "click", ctx[3]),
          listen(td, "mouseover", ctx[4]),
          listen(td, "mouseenter", ctx[5]),
          listen(td, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(td, td_data = get_spread_update(td_levels, [dirty & 1 && ctx2[0]]));
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
        detach(td);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableCell extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {});
  }
}
function create_if_block$c(ctx) {
  let div;
  let h4;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      div = element("div");
      h4 = element("h4");
      t0 = text(ctx[0]);
      t1 = space();
      p = element("p");
      t2 = text(ctx[1]);
      toggle_class(h4, "bx--data-table-header__title", true);
      toggle_class(p, "bx--data-table-header__description", true);
      toggle_class(div, "bx--data-table-header", true);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, h4);
      append(h4, t0);
      append(div, t1);
      append(div, p);
      append(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t0, ctx2[0]);
      if (dirty & 2)
        set_data(t2, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$g(ctx) {
  let div;
  let t;
  let current;
  let if_block = ctx[0] && create_if_block$c(ctx);
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let div_levels = [ctx[4]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign$1(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      set_attributes(div, div_data);
      toggle_class(div, "bx--data-table-container", true);
      toggle_class(div, "bx--data-table-container--static", ctx[3]);
      toggle_class(div, "bx--data-table--max-width", ctx[2]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$c(ctx2);
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 16 && ctx2[4]]));
      toggle_class(div, "bx--data-table-container", true);
      toggle_class(div, "bx--data-table-container--static", ctx2[3]);
      toggle_class(div, "bx--data-table--max-width", ctx2[2]);
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
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  const omit_props_names = ["title", "description", "stickyHeader", "useStaticWidth"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("title" in $$new_props)
      $$invalidate(0, title = $$new_props.title);
    if ("description" in $$new_props)
      $$invalidate(1, description = $$new_props.description);
    if ("stickyHeader" in $$new_props)
      $$invalidate(2, stickyHeader = $$new_props.stickyHeader);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(3, useStaticWidth = $$new_props.useStaticWidth);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [title, description, stickyHeader, useStaticWidth, $$restProps, $$scope, slots];
}
class TableContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, {
      title: 0,
      description: 1,
      stickyHeader: 2,
      useStaticWidth: 3
    });
  }
}
function create_fragment$f(ctx) {
  let thead;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let thead_levels = [ctx[0]];
  let thead_data = {};
  for (let i = 0; i < thead_levels.length; i += 1) {
    thead_data = assign$1(thead_data, thead_levels[i]);
  }
  return {
    c() {
      thead = element("thead");
      if (default_slot)
        default_slot.c();
      set_attributes(thead, thead_data);
    },
    m(target, anchor) {
      insert(target, thead, anchor);
      if (default_slot) {
        default_slot.m(thead, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(thead, "click", ctx[3]),
          listen(thead, "mouseover", ctx[4]),
          listen(thead, "mouseenter", ctx[5]),
          listen(thead, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(thead, thead_data = get_spread_update(thead_levels, [dirty & 1 && ctx2[0]]));
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
        detach(thead);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableHead extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {});
  }
}
function create_if_block$b(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$9(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$b(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$b(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$e(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$9(ctx);
  let svg_levels = [
    { "data-carbon-icon": "ArrowUp20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "ArrowUp20" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "20" },
        { height: "20" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class ArrowUp20 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
function create_if_block$a(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$8(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$a(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$a(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$d(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$8(ctx);
  let svg_levels = [
    { "data-carbon-icon": "ArrowsVertical20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "ArrowsVertical20" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "20" },
        { height: "20" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class ArrowsVertical20 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
function create_else_block$2(ctx) {
  let th;
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
  let th_levels = [{ scope: ctx[1] }, { id: ctx[2] }, ctx[9]];
  let th_data = {};
  for (let i = 0; i < th_levels.length; i += 1) {
    th_data = assign$1(th_data, th_levels[i]);
  }
  return {
    c() {
      th = element("th");
      div = element("div");
      if (default_slot)
        default_slot.c();
      toggle_class(div, "bx--table-header-label", true);
      set_attributes(th, th_data);
    },
    m(target, anchor) {
      insert(target, th, anchor);
      append(th, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(th, "click", ctx[17]),
          listen(th, "mouseover", ctx[18]),
          listen(th, "mouseenter", ctx[19]),
          listen(th, "mouseleave", ctx[20])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
        }
      }
      set_attributes(th, th_data = get_spread_update(th_levels, [
        (!current || dirty & 2) && { scope: ctx2[1] },
        (!current || dirty & 4) && { id: ctx2[2] },
        dirty & 512 && ctx2[9]
      ]));
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
        detach(th);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$9(ctx) {
  let th;
  let button;
  let div;
  let t0;
  let arrowup20;
  let t1;
  let arrowsvertical20;
  let th_aria_sort_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
  arrowup20 = new ArrowUp20({
    props: {
      "aria-label": ctx[4],
      class: "bx--table-sort__icon"
    }
  });
  arrowsvertical20 = new ArrowsVertical20({
    props: {
      "aria-label": ctx[4],
      class: "bx--table-sort__icon-unsorted"
    }
  });
  let th_levels = [
    {
      "aria-sort": th_aria_sort_value = ctx[5] ? ctx[3].sortDirection : "none"
    },
    { scope: ctx[1] },
    { id: ctx[2] },
    ctx[9]
  ];
  let th_data = {};
  for (let i = 0; i < th_levels.length; i += 1) {
    th_data = assign$1(th_data, th_levels[i]);
  }
  return {
    c() {
      th = element("th");
      button = element("button");
      div = element("div");
      if (default_slot)
        default_slot.c();
      t0 = space();
      create_component(arrowup20.$$.fragment);
      t1 = space();
      create_component(arrowsvertical20.$$.fragment);
      toggle_class(div, "bx--table-header-label", true);
      toggle_class(button, "bx--table-sort", true);
      toggle_class(button, "bx--table-sort--active", ctx[5]);
      toggle_class(button, "bx--table-sort--ascending", ctx[5] && ctx[3].sortDirection === "descending");
      set_attributes(th, th_data);
    },
    m(target, anchor) {
      insert(target, th, anchor);
      append(th, button);
      append(button, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append(button, t0);
      mount_component(arrowup20, button, null);
      append(button, t1);
      mount_component(arrowsvertical20, button, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[16]),
          listen(th, "mouseover", ctx[13]),
          listen(th, "mouseenter", ctx[14]),
          listen(th, "mouseleave", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
        }
      }
      const arrowup20_changes = {};
      if (dirty & 16)
        arrowup20_changes["aria-label"] = ctx2[4];
      arrowup20.$set(arrowup20_changes);
      const arrowsvertical20_changes = {};
      if (dirty & 16)
        arrowsvertical20_changes["aria-label"] = ctx2[4];
      arrowsvertical20.$set(arrowsvertical20_changes);
      if (dirty & 32) {
        toggle_class(button, "bx--table-sort--active", ctx2[5]);
      }
      if (dirty & 40) {
        toggle_class(button, "bx--table-sort--ascending", ctx2[5] && ctx2[3].sortDirection === "descending");
      }
      set_attributes(th, th_data = get_spread_update(th_levels, [
        (!current || dirty & 40 && th_aria_sort_value !== (th_aria_sort_value = ctx2[5] ? ctx2[3].sortDirection : "none")) && { "aria-sort": th_aria_sort_value },
        (!current || dirty & 2) && { scope: ctx2[1] },
        (!current || dirty & 4) && { id: ctx2[2] },
        dirty & 512 && ctx2[9]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(arrowup20.$$.fragment, local);
      transition_in(arrowsvertical20.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(arrowup20.$$.fragment, local);
      transition_out(arrowsvertical20.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(th);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(arrowup20);
      destroy_component(arrowsvertical20);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$c(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$9, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6] && !ctx2[0])
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
function instance$c($$self, $$props, $$invalidate) {
  let active;
  let ariaLabel;
  const omit_props_names = ["disableSorting", "scope", "translateWithId", "id"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $sortHeader;
  let $tableSortable;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { disableSorting = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id: id2 = "ccs-" + Math.random().toString(36) } = $$props;
  const { sortHeader, tableSortable, add } = getContext("DataTable");
  component_subscribe($$self, sortHeader, (value) => $$invalidate(3, $sortHeader = value));
  component_subscribe($$self, tableSortable, (value) => $$invalidate(6, $tableSortable = value));
  add(id2);
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("disableSorting" in $$new_props)
      $$invalidate(0, disableSorting = $$new_props.disableSorting);
    if ("scope" in $$new_props)
      $$invalidate(1, scope = $$new_props.scope);
    if ("translateWithId" in $$new_props)
      $$invalidate(10, translateWithId = $$new_props.translateWithId);
    if ("id" in $$new_props)
      $$invalidate(2, id2 = $$new_props.id);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      $$invalidate(5, active = $sortHeader.id === id2);
    }
    if ($$self.$$.dirty & 1024) {
      $$invalidate(4, ariaLabel = translateWithId());
    }
  };
  return [
    disableSorting,
    scope,
    id2,
    $sortHeader,
    ariaLabel,
    active,
    $tableSortable,
    sortHeader,
    tableSortable,
    $$restProps,
    translateWithId,
    $$scope,
    slots,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    click_handler,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1
  ];
}
class TableHeader extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      disableSorting: 0,
      scope: 1,
      translateWithId: 10,
      id: 2
    });
  }
}
function create_fragment$b(ctx) {
  let tr;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let tr_levels = [ctx[0]];
  let tr_data = {};
  for (let i = 0; i < tr_levels.length; i += 1) {
    tr_data = assign$1(tr_data, tr_levels[i]);
  }
  return {
    c() {
      tr = element("tr");
      if (default_slot)
        default_slot.c();
      set_attributes(tr, tr_data);
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      if (default_slot) {
        default_slot.m(tr, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(tr, "click", ctx[3]),
          listen(tr, "mouseover", ctx[4]),
          listen(tr, "mouseenter", ctx[5]),
          listen(tr, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(tr, tr_data = get_spread_update(tr_levels, [dirty & 1 && ctx2[0]]));
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
        detach(tr);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableRow extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {});
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[57] = list[i];
  child_ctx[59] = i;
  return child_ctx;
}
const get_expanded_row_slot_changes = (dirty) => ({
  row: dirty[0] & 16908289
});
const get_expanded_row_slot_context = (ctx) => ({ row: ctx[57] });
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[60] = list[i];
  child_ctx[62] = i;
  return child_ctx;
}
const get_cell_slot_changes_1 = (dirty) => ({
  row: dirty[0] & 16908289,
  cell: dirty[0] & 16908289
});
const get_cell_slot_context_1 = (ctx) => ({
  row: ctx[57],
  cell: ctx[60]
});
const get_cell_slot_changes = (dirty) => ({
  row: dirty[0] & 16908289,
  cell: dirty[0] & 16908289
});
const get_cell_slot_context = (ctx) => ({
  row: ctx[57],
  cell: ctx[60]
});
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[63] = list[i];
  child_ctx[59] = i;
  return child_ctx;
}
const get_cell_header_slot_changes = (dirty) => ({ header: dirty[0] & 32 });
const get_cell_header_slot_context = (ctx) => ({ header: ctx[63] });
const get_description_slot_changes = (dirty) => ({});
const get_description_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block_11(ctx) {
  let div;
  let t;
  let current;
  let if_block0 = (ctx[7] || ctx[34].title) && create_if_block_13(ctx);
  let if_block1 = (ctx[8] || ctx[34].description) && create_if_block_12(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      toggle_class(div, "bx--data-table-header", true);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[7] || ctx2[34].title) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 128 | dirty[1] & 8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_13(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[8] || ctx2[34].description) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 256 | dirty[1] & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_12(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
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
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_13(ctx) {
  let h4;
  let current;
  const title_slot_template = ctx[38].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[52], get_title_slot_context);
  const title_slot_or_fallback = title_slot || fallback_block_4(ctx);
  return {
    c() {
      h4 = element("h4");
      if (title_slot_or_fallback)
        title_slot_or_fallback.c();
      toggle_class(h4, "bx--data-table-header__title", true);
    },
    m(target, anchor) {
      insert(target, h4, anchor);
      if (title_slot_or_fallback) {
        title_slot_or_fallback.m(h4, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty[1] & 2097152)) {
          update_slot_base(title_slot, title_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(title_slot_template, ctx2[52], dirty, get_title_slot_changes), get_title_slot_context);
        }
      } else {
        if (title_slot_or_fallback && title_slot_or_fallback.p && (!current || dirty[0] & 128)) {
          title_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(title_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h4);
      if (title_slot_or_fallback)
        title_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_4(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[7]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 128)
        set_data(t, ctx2[7]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_12(ctx) {
  let p;
  let current;
  const description_slot_template = ctx[38].description;
  const description_slot = create_slot(description_slot_template, ctx, ctx[52], get_description_slot_context);
  const description_slot_or_fallback = description_slot || fallback_block_3(ctx);
  return {
    c() {
      p = element("p");
      if (description_slot_or_fallback)
        description_slot_or_fallback.c();
      toggle_class(p, "bx--data-table-header__description", true);
    },
    m(target, anchor) {
      insert(target, p, anchor);
      if (description_slot_or_fallback) {
        description_slot_or_fallback.m(p, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (description_slot) {
        if (description_slot.p && (!current || dirty[1] & 2097152)) {
          update_slot_base(description_slot, description_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(description_slot_template, ctx2[52], dirty, get_description_slot_changes), get_description_slot_context);
        }
      } else {
        if (description_slot_or_fallback && description_slot_or_fallback.p && (!current || dirty[0] & 256)) {
          description_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(description_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(description_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (description_slot_or_fallback)
        description_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_3(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[8]);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 256)
        set_data(t, ctx2[8]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_9(ctx) {
  let th;
  let th_data_previous_value_value;
  let current;
  let if_block = ctx[11] && create_if_block_10(ctx);
  return {
    c() {
      th = element("th");
      if (if_block)
        if_block.c();
      attr$1(th, "scope", "col");
      attr$1(th, "data-previous-value", th_data_previous_value_value = ctx[20] ? "collapsed" : void 0);
      toggle_class(th, "bx--table-expand", true);
    },
    m(target, anchor) {
      insert(target, th, anchor);
      if (if_block)
        if_block.m(th, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[11]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 2048) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_10(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(th, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 1048576 && th_data_previous_value_value !== (th_data_previous_value_value = ctx2[20] ? "collapsed" : void 0)) {
        attr$1(th, "data-previous-value", th_data_previous_value_value);
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
        detach(th);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_10(ctx) {
  let button;
  let chevronright16;
  let current;
  let mounted;
  let dispose;
  chevronright16 = new ChevronRight16({
    props: { class: "bx--table-expand__svg" }
  });
  return {
    c() {
      button = element("button");
      create_component(chevronright16.$$.fragment);
      attr$1(button, "type", "button");
      toggle_class(button, "bx--table-expand__button", true);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(chevronright16, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[39]);
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(chevronright16.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronright16.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(chevronright16);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_8(ctx) {
  let th;
  return {
    c() {
      th = element("th");
      attr$1(th, "scope", "col");
    },
    m(target, anchor) {
      insert(target, th, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function create_if_block_7(ctx) {
  let th;
  let inlinecheckbox;
  let updating_ref;
  let current;
  function inlinecheckbox_ref_binding(value) {
    ctx[40](value);
  }
  let inlinecheckbox_props = {
    "aria-label": "Select all rows",
    checked: ctx[22],
    indeterminate: ctx[25]
  };
  if (ctx[23] !== void 0) {
    inlinecheckbox_props.ref = ctx[23];
  }
  inlinecheckbox = new InlineCheckbox({ props: inlinecheckbox_props });
  binding_callbacks.push(() => bind$2(inlinecheckbox, "ref", inlinecheckbox_ref_binding));
  inlinecheckbox.$on("change", ctx[41]);
  return {
    c() {
      th = element("th");
      create_component(inlinecheckbox.$$.fragment);
      attr$1(th, "scope", "col");
      toggle_class(th, "bx--table-column-checkbox", true);
    },
    m(target, anchor) {
      insert(target, th, anchor);
      mount_component(inlinecheckbox, th, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inlinecheckbox_changes = {};
      if (dirty[0] & 4194304)
        inlinecheckbox_changes.checked = ctx2[22];
      if (dirty[0] & 33554432)
        inlinecheckbox_changes.indeterminate = ctx2[25];
      if (!updating_ref && dirty[0] & 8388608) {
        updating_ref = true;
        inlinecheckbox_changes.ref = ctx2[23];
        add_flush_callback(() => updating_ref = false);
      }
      inlinecheckbox.$set(inlinecheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(th);
      destroy_component(inlinecheckbox);
    }
  };
}
function create_else_block_2(ctx) {
  let tableheader;
  let current;
  function click_handler_1() {
    return ctx[42](ctx[63]);
  }
  tableheader = new TableHeader({
    props: {
      disableSorting: ctx[63].sort === false,
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  tableheader.$on("click", click_handler_1);
  return {
    c() {
      create_component(tableheader.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tableheader, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tableheader_changes = {};
      if (dirty[0] & 32)
        tableheader_changes.disableSorting = ctx[63].sort === false;
      if (dirty[0] & 32 | dirty[1] & 2097152) {
        tableheader_changes.$$scope = { dirty, ctx };
      }
      tableheader.$set(tableheader_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tableheader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tableheader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tableheader, detaching);
    }
  };
}
function create_if_block_6(ctx) {
  let th;
  return {
    c() {
      th = element("th");
      attr$1(th, "scope", "col");
    },
    m(target, anchor) {
      insert(target, th, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function fallback_block_2(ctx) {
  let t_value = ctx[63].value + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32 && t_value !== (t_value = ctx2[63].value + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_9(ctx) {
  let t;
  let current;
  const cell_header_slot_template = ctx[38]["cell-header"];
  const cell_header_slot = create_slot(cell_header_slot_template, ctx, ctx[52], get_cell_header_slot_context);
  const cell_header_slot_or_fallback = cell_header_slot || fallback_block_2(ctx);
  return {
    c() {
      if (cell_header_slot_or_fallback)
        cell_header_slot_or_fallback.c();
      t = space();
    },
    m(target, anchor) {
      if (cell_header_slot_or_fallback) {
        cell_header_slot_or_fallback.m(target, anchor);
      }
      insert(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_header_slot) {
        if (cell_header_slot.p && (!current || dirty[0] & 32 | dirty[1] & 2097152)) {
          update_slot_base(cell_header_slot, cell_header_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(cell_header_slot_template, ctx2[52], dirty, get_cell_header_slot_changes), get_cell_header_slot_context);
        }
      } else {
        if (cell_header_slot_or_fallback && cell_header_slot_or_fallback.p && (!current || dirty[0] & 32)) {
          cell_header_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_header_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_header_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (cell_header_slot_or_fallback)
        cell_header_slot_or_fallback.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(key_1, ctx) {
  let first;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_6, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[63].empty)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
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
      if (detaching)
        detach(first);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_8(ctx) {
  let t0;
  let t1;
  let t2;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let current;
  let if_block0 = ctx[3] && create_if_block_9(ctx);
  let if_block1 = ctx[4] && !ctx[14] && create_if_block_8();
  let if_block2 = ctx[14] && !ctx[13] && create_if_block_7(ctx);
  let each_value_2 = ctx[5];
  const get_key = (ctx2) => ctx2[63].key;
  for (let i = 0; i < each_value_2.length; i += 1) {
    let child_ctx = get_each_context_2(ctx, each_value_2, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
  }
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert(target, t2, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_9(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[4] && !ctx2[14]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_8();
          if_block1.c();
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[14] && !ctx2[13]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 24576) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_7(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t2.parentNode, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (dirty[0] & 2013790240 | dirty[1] & 2097152) {
        each_value_2 = ctx2[5];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_2, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_2, each_1_anchor, get_each_context_2);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_7(ctx) {
  let tablerow;
  let current;
  tablerow = new TableRow({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablerow.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablerow, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablerow_changes = {};
      if (dirty[0] & 182216767 | dirty[1] & 2097152) {
        tablerow_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablerow.$set(tablerow_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablerow.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablerow.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablerow, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let tablecell;
  let current;
  tablecell = new TableCell({
    props: {
      class: "bx--table-expand",
      headers: "expand",
      "data-previous-value": !ctx[12].includes(ctx[57].id) && ctx[26][ctx[57].id] ? "collapsed" : void 0,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablecell.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablecell, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablecell_changes = {};
      if (dirty[0] & 84021249)
        tablecell_changes["data-previous-value"] = !ctx2[12].includes(ctx2[57].id) && ctx2[26][ctx2[57].id] ? "collapsed" : void 0;
      if (dirty[0] & 84021251 | dirty[1] & 2097152) {
        tablecell_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecell, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let button;
  let chevronright16;
  let button_aria_label_value;
  let current;
  let mounted;
  let dispose;
  chevronright16 = new ChevronRight16({
    props: { class: "bx--table-expand__svg" }
  });
  function click_handler_2() {
    return ctx[43](ctx[57]);
  }
  return {
    c() {
      button = element("button");
      create_component(chevronright16.$$.fragment);
      attr$1(button, "type", "button");
      attr$1(button, "aria-label", button_aria_label_value = ctx[26][ctx[57].id] ? "Collapse current row" : "Expand current row");
      toggle_class(button, "bx--table-expand__button", true);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(chevronright16, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", stop_propagation(click_handler_2));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty[0] & 84017153 && button_aria_label_value !== (button_aria_label_value = ctx[26][ctx[57].id] ? "Collapse current row" : "Expand current row")) {
        attr$1(button, "aria-label", button_aria_label_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(chevronright16.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronright16.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(chevronright16);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_6(ctx) {
  let show_if = !ctx[12].includes(ctx[57].id);
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block_5(ctx);
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
      if (dirty[0] & 16912385)
        show_if = !ctx2[12].includes(ctx2[57].id);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 16912385) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_5(ctx2);
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
function create_if_block_2$1(ctx) {
  let td;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_3, create_else_block_1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[13])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      td = element("td");
      if_block.c();
      toggle_class(td, "bx--table-column-checkbox", true);
      toggle_class(td, "bx--table-column-radio", ctx[13]);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      if_blocks[current_block_type_index].m(td, null);
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
        if_block.m(td, null);
      }
      if (dirty[0] & 8192) {
        toggle_class(td, "bx--table-column-radio", ctx2[13]);
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
        detach(td);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_else_block_1(ctx) {
  let inlinecheckbox;
  let current;
  function change_handler_2() {
    return ctx[45](ctx[57]);
  }
  inlinecheckbox = new InlineCheckbox({
    props: {
      name: "select-row-" + ctx[57].id,
      checked: ctx[2].includes(ctx[57].id)
    }
  });
  inlinecheckbox.$on("change", change_handler_2);
  return {
    c() {
      create_component(inlinecheckbox.$$.fragment);
    },
    m(target, anchor) {
      mount_component(inlinecheckbox, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const inlinecheckbox_changes = {};
      if (dirty[0] & 16908289)
        inlinecheckbox_changes.name = "select-row-" + ctx[57].id;
      if (dirty[0] & 16908293)
        inlinecheckbox_changes.checked = ctx[2].includes(ctx[57].id);
      inlinecheckbox.$set(inlinecheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inlinecheckbox, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let radiobutton;
  let current;
  function change_handler_1() {
    return ctx[44](ctx[57]);
  }
  radiobutton = new RadioButton({
    props: {
      name: "select-row-" + ctx[57].id,
      checked: ctx[2].includes(ctx[57].id)
    }
  });
  radiobutton.$on("change", change_handler_1);
  return {
    c() {
      create_component(radiobutton.$$.fragment);
    },
    m(target, anchor) {
      mount_component(radiobutton, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const radiobutton_changes = {};
      if (dirty[0] & 16908289)
        radiobutton_changes.name = "select-row-" + ctx[57].id;
      if (dirty[0] & 16908293)
        radiobutton_changes.checked = ctx[2].includes(ctx[57].id);
      radiobutton.$set(radiobutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(radiobutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(radiobutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(radiobutton, detaching);
    }
  };
}
function create_else_block$1(ctx) {
  let tablecell;
  let current;
  function click_handler_3() {
    return ctx[46](ctx[57], ctx[60]);
  }
  tablecell = new TableCell({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  tablecell.$on("click", click_handler_3);
  return {
    c() {
      create_component(tablecell.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablecell, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tablecell_changes = {};
      if (dirty[0] & 16908289 | dirty[1] & 2097152) {
        tablecell_changes.$$scope = { dirty, ctx };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecell, detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let td;
  let t;
  let current;
  const cell_slot_template = ctx[38].cell;
  const cell_slot = create_slot(cell_slot_template, ctx, ctx[52], get_cell_slot_context);
  const cell_slot_or_fallback = cell_slot || fallback_block$7(ctx);
  return {
    c() {
      td = element("td");
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.c();
      t = space();
      toggle_class(td, "bx--table-column-menu", ctx[5][ctx[62]].columnMenu);
    },
    m(target, anchor) {
      insert(target, td, anchor);
      if (cell_slot_or_fallback) {
        cell_slot_or_fallback.m(td, null);
      }
      append(td, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_slot) {
        if (cell_slot.p && (!current || dirty[0] & 16908289 | dirty[1] & 2097152)) {
          update_slot_base(cell_slot, cell_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(cell_slot_template, ctx2[52], dirty, get_cell_slot_changes), get_cell_slot_context);
        }
      } else {
        if (cell_slot_or_fallback && cell_slot_or_fallback.p && (!current || dirty[0] & 16908289)) {
          cell_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
      if (dirty[0] & 16908321) {
        toggle_class(td, "bx--table-column-menu", ctx2[5][ctx2[62]].columnMenu);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let t_value = (ctx[60].display ? ctx[60].display(ctx[60].value) : ctx[60].value) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16908289 && t_value !== (t_value = (ctx2[60].display ? ctx2[60].display(ctx2[60].value) : ctx2[60].value) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  let current;
  const cell_slot_template = ctx[38].cell;
  const cell_slot = create_slot(cell_slot_template, ctx, ctx[52], get_cell_slot_context_1);
  const cell_slot_or_fallback = cell_slot || fallback_block_1(ctx);
  return {
    c() {
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.c();
      t = space();
    },
    m(target, anchor) {
      if (cell_slot_or_fallback) {
        cell_slot_or_fallback.m(target, anchor);
      }
      insert(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_slot) {
        if (cell_slot.p && (!current || dirty[0] & 16908289 | dirty[1] & 2097152)) {
          update_slot_base(cell_slot, cell_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(cell_slot_template, ctx2[52], dirty, get_cell_slot_changes_1), get_cell_slot_context_1);
        }
      } else {
        if (cell_slot_or_fallback && cell_slot_or_fallback.p && (!current || dirty[0] & 16908289)) {
          cell_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function fallback_block$7(ctx) {
  let t_value = (ctx[60].display ? ctx[60].display(ctx[60].value) : ctx[60].value) + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16908289 && t_value !== (t_value = (ctx2[60].display ? ctx2[60].display(ctx2[60].value) : ctx2[60].value) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(key_1, ctx) {
  let first;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[5][ctx2[62]].empty)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
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
      if (detaching)
        detach(first);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_4(ctx) {
  let t0;
  let t1;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let current;
  let if_block0 = ctx[3] && create_if_block_4(ctx);
  let if_block1 = ctx[4] && create_if_block_2$1(ctx);
  let each_value_1 = ctx[57].cells;
  const get_key = (ctx2) => ctx2[60].key;
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  }
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert(target, t1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
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
          if (dirty[0] & 16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (dirty[0] & 553779233 | dirty[1] & 2097152) {
        each_value_1 = ctx2[57].cells;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block$8(ctx) {
  let tr;
  let tablecell;
  let t;
  let current;
  let mounted;
  let dispose;
  tablecell = new TableCell({
    props: {
      colspan: ctx[4] ? ctx[5].length + 2 : ctx[5].length + 1,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  function mouseenter_handler_1() {
    return ctx[50](ctx[57]);
  }
  return {
    c() {
      tr = element("tr");
      create_component(tablecell.$$.fragment);
      t = space();
      attr$1(tr, "data-child-row", "");
      toggle_class(tr, "bx--expandable-row", true);
    },
    m(target, anchor) {
      insert(target, tr, anchor);
      mount_component(tablecell, tr, null);
      append(tr, t);
      current = true;
      if (!mounted) {
        dispose = [
          listen(tr, "mouseenter", mouseenter_handler_1),
          listen(tr, "mouseleave", ctx[51])
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tablecell_changes = {};
      if (dirty[0] & 48)
        tablecell_changes.colspan = ctx[4] ? ctx[5].length + 2 : ctx[5].length + 1;
      if (dirty[0] & 16908289 | dirty[1] & 2097152) {
        tablecell_changes.$$scope = { dirty, ctx };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      destroy_component(tablecell);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot_3(ctx) {
  let div;
  let current;
  const expanded_row_slot_template = ctx[38]["expanded-row"];
  const expanded_row_slot = create_slot(expanded_row_slot_template, ctx, ctx[52], get_expanded_row_slot_context);
  return {
    c() {
      div = element("div");
      if (expanded_row_slot)
        expanded_row_slot.c();
      toggle_class(div, "bx--child-row-inner-container", true);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (expanded_row_slot) {
        expanded_row_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (expanded_row_slot) {
        if (expanded_row_slot.p && (!current || dirty[0] & 16908289 | dirty[1] & 2097152)) {
          update_slot_base(expanded_row_slot, expanded_row_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(expanded_row_slot_template, ctx2[52], dirty, get_expanded_row_slot_changes), get_expanded_row_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expanded_row_slot, local);
      current = true;
    },
    o(local) {
      transition_out(expanded_row_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (expanded_row_slot)
        expanded_row_slot.d(detaching);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let tablerow;
  let t;
  let show_if = ctx[3] && ctx[26][ctx[57].id] && !ctx[12].includes(ctx[57].id);
  let if_block_anchor;
  let current;
  function click_handler_4() {
    return ctx[47](ctx[57]);
  }
  function mouseenter_handler() {
    return ctx[48](ctx[57]);
  }
  function mouseleave_handler() {
    return ctx[49](ctx[57]);
  }
  tablerow = new TableRow({
    props: {
      id: "row-" + ctx[57].id,
      class: "" + ((ctx[2].includes(ctx[57].id) ? "bx--data-table--selected" : "") + " " + (ctx[26][ctx[57].id] ? "bx--expandable-row" : "") + " " + (ctx[3] ? "bx--parent-row" : "") + " " + (ctx[3] && ctx[21] === ctx[57].id ? "bx--expandable-row--hover" : "")),
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  tablerow.$on("click", click_handler_4);
  tablerow.$on("mouseenter", mouseenter_handler);
  tablerow.$on("mouseleave", mouseleave_handler);
  let if_block = show_if && create_if_block$8(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(tablerow.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      mount_component(tablerow, target, anchor);
      insert(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tablerow_changes = {};
      if (dirty[0] & 16908289)
        tablerow_changes.id = "row-" + ctx[57].id;
      if (dirty[0] & 86114317)
        tablerow_changes.class = "" + ((ctx[2].includes(ctx[57].id) ? "bx--data-table--selected" : "") + " " + (ctx[26][ctx[57].id] ? "bx--expandable-row" : "") + " " + (ctx[3] ? "bx--parent-row" : "") + " " + (ctx[3] && ctx[21] === ctx[57].id ? "bx--expandable-row--hover" : ""));
      if (dirty[0] & 84029503 | dirty[1] & 2097152) {
        tablerow_changes.$$scope = { dirty, ctx };
      }
      tablerow.$set(tablerow_changes);
      if (dirty[0] & 84021257)
        show_if = ctx[3] && ctx[26][ctx[57].id] && !ctx[12].includes(ctx[57].id);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty[0] & 84021257) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$8(ctx);
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
      transition_in(tablerow.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(tablerow.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(tablerow, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_2(ctx) {
  let each_blocks = [];
  let each_1_lookup = new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[17] ? ctx[24] : ctx[0];
  const get_key = (ctx2) => ctx2[57].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 622997567 | dirty[1] & 2097152) {
        each_value = ctx2[17] ? ctx2[24] : ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_1(ctx) {
  let tablehead;
  let t;
  let tablebody;
  let current;
  tablehead = new TableHead({
    props: {
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  tablebody = new TableBody({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablehead.$$.fragment);
      t = space();
      create_component(tablebody.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablehead, target, anchor);
      insert(target, t, anchor);
      mount_component(tablebody, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablehead_changes = {};
      if (dirty[0] & 182216767 | dirty[1] & 2097152) {
        tablehead_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablehead.$set(tablehead_changes);
      const tablebody_changes = {};
      if (dirty[0] & 86126655 | dirty[1] & 2097152) {
        tablebody_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablebody.$set(tablebody_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablehead.$$.fragment, local);
      transition_in(tablebody.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablehead.$$.fragment, local);
      transition_out(tablebody.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablehead, detaching);
      if (detaching)
        detach(t);
      destroy_component(tablebody, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let t0;
  let t1;
  let table;
  let current;
  let if_block = (ctx[7] || ctx[34].title || ctx[8] || ctx[34].description) && create_if_block_11(ctx);
  const default_slot_template = ctx[38].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[52], null);
  table = new Table({
    props: {
      zebra: ctx[9],
      size: ctx[6],
      stickyHeader: ctx[15],
      sortable: ctx[10],
      useStaticWidth: ctx[16],
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(table.$$.fragment);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert(target, t0, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert(target, t1, anchor);
      mount_component(table, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[7] || ctx2[34].title || ctx2[8] || ctx2[34].description) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 384 | dirty[1] & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_11(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & 2097152)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[52], !current ? get_all_dirty_from_scope(ctx2[52]) : get_slot_changes(default_slot_template, ctx2[52], dirty, null), null);
        }
      }
      const table_changes = {};
      if (dirty[0] & 512)
        table_changes.zebra = ctx2[9];
      if (dirty[0] & 64)
        table_changes.size = ctx2[6];
      if (dirty[0] & 32768)
        table_changes.stickyHeader = ctx2[15];
      if (dirty[0] & 1024)
        table_changes.sortable = ctx2[10];
      if (dirty[0] & 65536)
        table_changes.useStaticWidth = ctx2[16];
      if (dirty[0] & 268335167 | dirty[1] & 2097152) {
        table_changes.$$scope = { dirty, ctx: ctx2 };
      }
      table.$set(table_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      transition_in(table.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      transition_out(table.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(table, detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let tablecontainer;
  let current;
  const tablecontainer_spread_levels = [
    {
      useStaticWidth: ctx[16]
    },
    ctx[33]
  ];
  let tablecontainer_props = {
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  for (let i = 0; i < tablecontainer_spread_levels.length; i += 1) {
    tablecontainer_props = assign$1(tablecontainer_props, tablecontainer_spread_levels[i]);
  }
  tablecontainer = new TableContainer({ props: tablecontainer_props });
  return {
    c() {
      create_component(tablecontainer.$$.fragment);
    },
    m(target, anchor) {
      mount_component(tablecontainer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablecontainer_changes = dirty[0] & 65536 | dirty[1] & 4 ? get_spread_update(tablecontainer_spread_levels, [
        dirty[0] & 65536 && {
          useStaticWidth: ctx2[16]
        },
        dirty[1] & 4 && get_spread_object(ctx2[33])
      ]) : {};
      if (dirty[0] & 268435455 | dirty[1] & 2097160) {
        tablecontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablecontainer.$set(tablecontainer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecontainer, detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let expandedRows;
  let expandableRowIds;
  let indeterminate;
  let headerKeys;
  let sortedRows;
  let ascending;
  let sortKey;
  let sorting;
  const omit_props_names = [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "stickyHeader",
    "useStaticWidth"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $sortHeader;
  let $headerItems;
  let $thKeys;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  const sortDirectionMap = {
    none: "ascending",
    ascending: "descending",
    descending: "none"
  };
  const dispatch = createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableSortable = writable(sortable);
  const sortHeader = writable({
    id: null,
    key: null,
    sort: void 0,
    sortDirection: "none"
  });
  component_subscribe($$self, sortHeader, (value) => $$invalidate(19, $sortHeader = value));
  const headerItems = writable([]);
  component_subscribe($$self, headerItems, (value) => $$invalidate(53, $headerItems = value));
  const thKeys = derived(headerItems, () => headers.map(({ key }, i) => ({ key, id: $headerItems[i] })).reduce((a, c) => __spreadProps(__spreadValues({}, a), { [c.key]: c.id }), {}));
  component_subscribe($$self, thKeys, (value) => $$invalidate(27, $thKeys = value));
  const resolvePath = (object2, path) => path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object2);
  setContext("DataTable", {
    sortHeader,
    tableSortable,
    batchSelectedIds,
    resetSelectedRowIds: () => {
      $$invalidate(22, selectAll = false);
      $$invalidate(2, selectedRowIds = []);
      if (refSelectAll)
        $$invalidate(23, refSelectAll.checked = false, refSelectAll);
    },
    add: (id2) => {
      headerItems.update((_) => [..._, id2]);
    }
  });
  let expanded = false;
  let parentRowId = null;
  let selectAll = false;
  let refSelectAll = null;
  const click_handler = () => {
    $$invalidate(20, expanded = !expanded);
    $$invalidate(1, expandedRowIds = expanded ? expandableRowIds : []);
    dispatch("click:header--expand", { expanded });
  };
  function inlinecheckbox_ref_binding(value) {
    refSelectAll = value;
    $$invalidate(23, refSelectAll);
  }
  const change_handler = (e) => {
    if (indeterminate) {
      e.target.checked = false;
      $$invalidate(22, selectAll = false);
      $$invalidate(2, selectedRowIds = []);
      return;
    }
    if (e.target.checked) {
      $$invalidate(2, selectedRowIds = rows.map((row) => row.id));
    } else {
      $$invalidate(2, selectedRowIds = []);
    }
  };
  const click_handler_1 = (header) => {
    dispatch("click", { header });
    if (header.sort === false) {
      dispatch("click:header", { header });
    } else {
      let active = header.key === $sortHeader.key;
      let currentSortDirection = active ? $sortHeader.sortDirection : "none";
      let sortDirection = sortDirectionMap[currentSortDirection];
      dispatch("click:header", { header, sortDirection });
      sortHeader.set({
        id: sortDirection === "none" ? null : $thKeys[header.key],
        key: header.key,
        sort: header.sort,
        sortDirection
      });
    }
  };
  const click_handler_2 = (row) => {
    const rowExpanded = !!expandedRows[row.id];
    $$invalidate(1, expandedRowIds = rowExpanded ? expandedRowIds.filter((id2) => id2 !== row.id) : [...expandedRowIds, row.id]);
    dispatch("click:row--expand", { row, expanded: !rowExpanded });
  };
  const change_handler_1 = (row) => {
    $$invalidate(2, selectedRowIds = [row.id]);
  };
  const change_handler_2 = (row) => {
    if (selectedRowIds.includes(row.id)) {
      $$invalidate(2, selectedRowIds = selectedRowIds.filter((id2) => id2 !== row.id));
    } else {
      $$invalidate(2, selectedRowIds = [...selectedRowIds, row.id]);
    }
  };
  const click_handler_3 = (row, cell) => {
    dispatch("click", { row, cell });
    dispatch("click:cell", cell);
  };
  const click_handler_4 = (row) => {
    dispatch("click", { row });
    dispatch("click:row", row);
  };
  const mouseenter_handler = (row) => {
    dispatch("mouseenter:row", row);
  };
  const mouseleave_handler = (row) => {
    dispatch("mouseleave:row", row);
  };
  const mouseenter_handler_1 = (row) => {
    $$invalidate(21, parentRowId = row.id);
  };
  const mouseleave_handler_1 = () => {
    $$invalidate(21, parentRowId = null);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(33, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("headers" in $$new_props)
      $$invalidate(5, headers = $$new_props.headers);
    if ("rows" in $$new_props)
      $$invalidate(0, rows = $$new_props.rows);
    if ("size" in $$new_props)
      $$invalidate(6, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(7, title = $$new_props.title);
    if ("description" in $$new_props)
      $$invalidate(8, description = $$new_props.description);
    if ("zebra" in $$new_props)
      $$invalidate(9, zebra = $$new_props.zebra);
    if ("sortable" in $$new_props)
      $$invalidate(10, sortable = $$new_props.sortable);
    if ("expandable" in $$new_props)
      $$invalidate(3, expandable = $$new_props.expandable);
    if ("batchExpansion" in $$new_props)
      $$invalidate(11, batchExpansion = $$new_props.batchExpansion);
    if ("expandedRowIds" in $$new_props)
      $$invalidate(1, expandedRowIds = $$new_props.expandedRowIds);
    if ("nonExpandableRowIds" in $$new_props)
      $$invalidate(12, nonExpandableRowIds = $$new_props.nonExpandableRowIds);
    if ("radio" in $$new_props)
      $$invalidate(13, radio = $$new_props.radio);
    if ("selectable" in $$new_props)
      $$invalidate(4, selectable = $$new_props.selectable);
    if ("batchSelection" in $$new_props)
      $$invalidate(14, batchSelection = $$new_props.batchSelection);
    if ("selectedRowIds" in $$new_props)
      $$invalidate(2, selectedRowIds = $$new_props.selectedRowIds);
    if ("stickyHeader" in $$new_props)
      $$invalidate(15, stickyHeader = $$new_props.stickyHeader);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(16, useStaticWidth = $$new_props.useStaticWidth);
    if ("$$scope" in $$new_props)
      $$invalidate(52, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 2) {
      $$invalidate(26, expandedRows = expandedRowIds.reduce((a, id2) => __spreadProps(__spreadValues({}, a), { [id2]: true }), {}));
    }
    if ($$self.$$.dirty[0] & 4) {
      batchSelectedIds.set(selectedRowIds);
    }
    if ($$self.$$.dirty[0] & 32) {
      $$invalidate(37, headerKeys = headers.map(({ key }) => key));
    }
    if ($$self.$$.dirty[0] & 33 | $$self.$$.dirty[1] & 64) {
      $$invalidate(0, rows = rows.map((row) => __spreadProps(__spreadValues({}, row), {
        cells: headerKeys.map((key, index2) => ({
          key,
          value: resolvePath(row, key),
          display: headers[index2].display
        }))
      })));
    }
    if ($$self.$$.dirty[0] & 4097) {
      $$invalidate(18, expandableRowIds = rows.map((row) => row.id).filter((id2) => !nonExpandableRowIds.includes(id2)));
    }
    if ($$self.$$.dirty[0] & 5) {
      $$invalidate(25, indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < rows.length);
    }
    if ($$self.$$.dirty[0] & 264194) {
      if (batchExpansion) {
        $$invalidate(3, expandable = true);
        $$invalidate(20, expanded = expandedRowIds.length === expandableRowIds.length);
      }
    }
    if ($$self.$$.dirty[0] & 24576) {
      if (radio || batchSelection)
        $$invalidate(4, selectable = true);
    }
    if ($$self.$$.dirty[0] & 1024) {
      tableSortable.set(sortable);
    }
    if ($$self.$$.dirty[0] & 1) {
      $$invalidate(24, sortedRows = rows);
    }
    if ($$self.$$.dirty[0] & 524288) {
      $$invalidate(35, ascending = $sortHeader.sortDirection === "ascending");
    }
    if ($$self.$$.dirty[0] & 524288) {
      $$invalidate(36, sortKey = $sortHeader.key);
    }
    if ($$self.$$.dirty[0] & 1024 | $$self.$$.dirty[1] & 32) {
      $$invalidate(17, sorting = sortable && sortKey != null);
    }
    if ($$self.$$.dirty[0] & 655361 | $$self.$$.dirty[1] & 48) {
      if (sorting) {
        if ($sortHeader.sortDirection === "none") {
          $$invalidate(24, sortedRows = rows);
        } else {
          $$invalidate(24, sortedRows = [...rows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if ($sortHeader.sort)
              return $sortHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          }));
        }
      }
    }
  };
  return [
    rows,
    expandedRowIds,
    selectedRowIds,
    expandable,
    selectable,
    headers,
    size,
    title,
    description,
    zebra,
    sortable,
    batchExpansion,
    nonExpandableRowIds,
    radio,
    batchSelection,
    stickyHeader,
    useStaticWidth,
    sorting,
    expandableRowIds,
    $sortHeader,
    expanded,
    parentRowId,
    selectAll,
    refSelectAll,
    sortedRows,
    indeterminate,
    expandedRows,
    $thKeys,
    sortDirectionMap,
    dispatch,
    sortHeader,
    headerItems,
    thKeys,
    $$restProps,
    $$slots,
    ascending,
    sortKey,
    headerKeys,
    slots,
    click_handler,
    inlinecheckbox_ref_binding,
    change_handler,
    click_handler_1,
    click_handler_2,
    change_handler_1,
    change_handler_2,
    click_handler_3,
    click_handler_4,
    mouseenter_handler,
    mouseleave_handler,
    mouseenter_handler_1,
    mouseleave_handler_1,
    $$scope
  ];
}
class DataTable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      headers: 5,
      rows: 0,
      size: 6,
      title: 7,
      description: 8,
      zebra: 9,
      sortable: 10,
      expandable: 3,
      batchExpansion: 11,
      expandedRowIds: 1,
      nonExpandableRowIds: 12,
      radio: 13,
      selectable: 4,
      batchSelection: 14,
      selectedRowIds: 2,
      stickyHeader: 15,
      useStaticWidth: 16
    }, null, [-1, -1, -1]);
  }
}
function create_fragment$9(ctx) {
  let section;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  let section_levels = [{ "aria-label": "data table toolbar" }, ctx[2]];
  let section_data = {};
  for (let i = 0; i < section_levels.length; i += 1) {
    section_data = assign$1(section_data, section_levels[i]);
  }
  return {
    c() {
      section = element("section");
      if (default_slot)
        default_slot.c();
      set_attributes(section, section_data);
      toggle_class(section, "bx--table-toolbar", true);
      toggle_class(section, "bx--table-toolbar--small", ctx[0] === "sm");
      toggle_class(section, "bx--table-toolbar--normal", ctx[0] === "default");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      if (default_slot) {
        default_slot.m(section, null);
      }
      ctx[5](section);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      set_attributes(section, section_data = get_spread_update(section_levels, [
        { "aria-label": "data table toolbar" },
        dirty & 4 && ctx2[2]
      ]));
      toggle_class(section, "bx--table-toolbar", true);
      toggle_class(section, "bx--table-toolbar--small", ctx2[0] === "sm");
      toggle_class(section, "bx--table-toolbar--normal", ctx2[0] === "default");
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
        detach(section);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  const omit_props_names = ["size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
      if (ref)
        $$invalidate(1, ref.style.overflow = visible ? "visible" : "inherit", ref);
    }
  });
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  return [size, ref, $$restProps, $$scope, slots, section_binding];
}
class Toolbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { size: 0 });
  }
}
function create_fragment$8(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      toggle_class(div, "bx--toolbar-content", true);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        }
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
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class ToolbarContent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
const HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
const defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
  getWeek: (givenDate) => {
    const date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};
const english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: (nth) => {
    const s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
const pad = (number, length = 2) => `000${number}`.slice(length * -1);
const int = (bool) => bool === true ? 1 : 0;
function debounce$1(fn, wait2) {
  let t;
  return function() {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait2);
  };
}
const arrayify = (obj) => obj instanceof Array ? obj : [obj];
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement$1(tag, className, content) {
  const e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node2) {
  while (node2.firstChild)
    node2.removeChild(node2.firstChild);
}
function findParent(node2, condition) {
  if (condition(node2))
    return node2;
  else if (node2.parentNode)
    return findParent(node2.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  const wrapper = createElement$1("div", "numInputWrapper"), numInput = createElement$1("input", "numInput " + inputClassName), arrowUp = createElement$1("span", "arrowUp"), arrowDown = createElement$1("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (const key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      const path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}
const doNothing = () => void 0;
const monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
const revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  H: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  J: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  K: (dateObj, amPM, locale) => {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1e3),
  W: function(dateObj, weekNum, locale) {
    const weekNumber = parseInt(weekNum);
    const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: (dateObj, year) => {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: (_, ISODate) => new Date(ISODate),
  d: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  h: (dateObj, hour) => {
    dateObj.setHours(parseFloat(hour));
  },
  i: (dateObj, minutes) => {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: (dateObj, day) => {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: (dateObj, month) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: (dateObj, seconds) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
  w: doNothing,
  y: (dateObj, year) => {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
const tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
const formats = {
  Z: (date) => date.toISOString(),
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: (date) => pad(date.getHours()),
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: (date, locale) => locale.amPM[int(date.getHours() > 11)],
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: (date) => pad(date.getSeconds()),
  U: (date) => date.getTime() / 1e3,
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: (date) => pad(date.getFullYear(), 4),
  d: (date) => pad(date.getDate()),
  h: (date) => date.getHours() % 12 ? date.getHours() % 12 : 12,
  i: (date) => pad(date.getMinutes()),
  j: (date) => date.getDate(),
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: (date) => pad(date.getMonth() + 1),
  n: (date) => date.getMonth() + 1,
  s: (date) => date.getSeconds(),
  u: (date) => date.getTime(),
  w: (date) => date.getDay(),
  y: (date) => String(date.getFullYear()).substring(2)
};
const createDateFormatter = ({ config: config2 = defaults, l10n = english, isMobile = false }) => (dateObj, frmt, overrideLocale) => {
  const locale = overrideLocale || l10n;
  if (config2.formatDate !== void 0 && !isMobile) {
    return config2.formatDate(dateObj, frmt, locale);
  }
  return frmt.split("").map((c, i, arr) => formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config2) : c !== "\\" ? c : "").join("");
};
const createDateParser = ({ config: config2 = defaults, l10n = english }) => (date, givenFormat, timeless, customLocale) => {
  if (date !== 0 && !date)
    return void 0;
  const locale = customLocale || l10n;
  let parsedDate;
  const dateOrig = date;
  if (date instanceof Date)
    parsedDate = new Date(date.getTime());
  else if (typeof date !== "string" && date.toFixed !== void 0)
    parsedDate = new Date(date);
  else if (typeof date === "string") {
    const format = givenFormat || (config2 || defaults).dateFormat;
    const datestr = String(date).trim();
    if (datestr === "today") {
      parsedDate = new Date();
      timeless = true;
    } else if (/Z$/.test(datestr) || /GMT$/.test(datestr))
      parsedDate = new Date(date);
    else if (config2 && config2.parseDate)
      parsedDate = config2.parseDate(date, format);
    else {
      parsedDate = !config2 || !config2.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
      let matched, ops = [];
      for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
        const token = format[i];
        const isBackSlash = token === "\\";
        const escaped = format[i - 1] === "\\" || isBackSlash;
        if (tokenRegex[token] && !escaped) {
          regexStr += tokenRegex[token];
          const match2 = new RegExp(regexStr).exec(date);
          if (match2 && (matched = true)) {
            ops[token !== "Y" ? "push" : "unshift"]({
              fn: revFormat[token],
              val: match2[++matchIndex]
            });
          }
        } else if (!isBackSlash)
          regexStr += ".";
        ops.forEach(({ fn, val }) => parsedDate = fn(parsedDate, val, locale) || parsedDate);
      }
      parsedDate = matched ? parsedDate : void 0;
    }
  }
  if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
    config2.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
    return void 0;
  }
  if (timeless === true)
    parsedDate.setHours(0, 0, 0, 0);
  return parsedDate;
};
function compareDates(date1, date2, timeless = true) {
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
const isBetween = (ts, ts1, ts2) => {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
  DAY: 864e5
};
function getDefaultHours(config2) {
  let hours = config2.defaultHour;
  let minutes = config2.defaultMinute;
  let seconds = config2.defaultSeconds;
  if (config2.minDate !== void 0) {
    const minHour = config2.minDate.getHours();
    const minMinutes = config2.minDate.getMinutes();
    const minSeconds = config2.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config2.minDate.getSeconds();
  }
  if (config2.maxDate !== void 0) {
    const maxHr = config2.maxDate.getHours();
    const maxMinutes = config2.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config2.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}
if (typeof Object.assign !== "function") {
  Object.assign = function(target, ...args) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    for (const source of args) {
      if (source) {
        Object.keys(source).forEach((key) => target[key] = source[key]);
      }
    }
    return target;
  };
}
const DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element2, instanceConfig) {
  const self2 = {
    config: Object.assign(Object.assign({}, defaults), flatpickr.defaultConfig),
    l10n: english
  };
  self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
  self2._handlers = [];
  self2.pluginElements = [];
  self2.loadedPlugins = [];
  self2._bind = bind3;
  self2._setHoursFromDate = setHoursFromDate;
  self2._positionCalendar = positionCalendar;
  self2.changeMonth = changeMonth;
  self2.changeYear = changeYear;
  self2.clear = clear;
  self2.close = close;
  self2._createElement = createElement$1;
  self2.destroy = destroy;
  self2.isEnabled = isEnabled;
  self2.jumpToDate = jumpToDate;
  self2.open = open;
  self2.redraw = redraw;
  self2.set = set;
  self2.setDate = setDate;
  self2.toggle = toggle;
  function setupHelperFunctions() {
    self2.utils = {
      getDaysInMonth(month = self2.currentMonth, yr = self2.currentYear) {
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self2.l10n.daysInMonth[month];
      }
    };
  }
  function init2() {
    self2.element = self2.input = element2;
    self2.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self2.isMobile)
      build();
    bindEvents();
    if (self2.selectedDates.length || self2.config.noCalendar) {
      if (self2.config.enableTime) {
        setHoursFromDate(self2.config.noCalendar ? self2.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self2.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function bindToInstance(fn) {
    return fn.bind(self2);
  }
  function setCalendarWidth() {
    const config2 = self2.config;
    if (config2.weekNumbers === false && config2.showMonths === 1) {
      return;
    } else if (config2.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self2.calendarContainer !== void 0) {
          self2.calendarContainer.style.visibility = "hidden";
          self2.calendarContainer.style.display = "block";
        }
        if (self2.daysContainer !== void 0) {
          const daysWidth = (self2.days.offsetWidth + 1) * config2.showMonths;
          self2.daysContainer.style.width = daysWidth + "px";
          self2.calendarContainer.style.width = daysWidth + (self2.weekWrapper !== void 0 ? self2.weekWrapper.offsetWidth : 0) + "px";
          self2.calendarContainer.style.removeProperty("visibility");
          self2.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self2.selectedDates.length === 0) {
      const defaultDate = self2.config.minDate === void 0 || compareDates(new Date(), self2.config.minDate) >= 0 ? new Date() : new Date(self2.config.minDate.getTime());
      const defaults2 = getDefaultHours(self2.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self2.selectedDates = [defaultDate];
      self2.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    const prevValue = self2._input.value;
    setHoursFromInputs();
    updateValue();
    if (self2._input.value !== prevValue) {
      self2._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self2.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self2.hourElement === void 0 || self2.minuteElement === void 0)
      return;
    let hours = (parseInt(self2.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self2.minuteElement.value, 10) || 0) % 60, seconds = self2.secondElement !== void 0 ? (parseInt(self2.secondElement.value, 10) || 0) % 60 : 0;
    if (self2.amPM !== void 0) {
      hours = ampm2military(hours, self2.amPM.textContent);
    }
    const limitMinHours = self2.config.minTime !== void 0 || self2.config.minDate && self2.minDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.minDate, true) === 0;
    const limitMaxHours = self2.config.maxTime !== void 0 || self2.config.maxDate && self2.maxDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.maxDate, true) === 0;
    if (limitMaxHours) {
      const maxTime = self2.config.maxTime !== void 0 ? self2.config.maxTime : self2.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours())
        minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes())
        seconds = Math.min(seconds, maxTime.getSeconds());
    }
    if (limitMinHours) {
      const minTime = self2.config.minTime !== void 0 ? self2.config.minTime : self2.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes())
        minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes())
        seconds = Math.max(seconds, minTime.getSeconds());
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    const date = dateObj || self2.latestSelectedDateObj;
    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self2.latestSelectedDateObj !== void 0) {
      self2.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self2.hourElement || !self2.minuteElement || self2.isMobile)
      return;
    self2.hourElement.value = pad(!self2.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self2.minuteElement.value = pad(minutes);
    if (self2.amPM !== void 0)
      self2.amPM.textContent = self2.l10n.amPM[int(hours >= 12)];
    if (self2.secondElement !== void 0)
      self2.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    const eventTarget = getEventTarget(event);
    const year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind3(element3, event, handler, options) {
    if (event instanceof Array)
      return event.forEach((ev) => bind3(element3, ev, handler, options));
    if (element3 instanceof Array)
      return element3.forEach((el) => bind3(el, event, handler, options));
    element3.addEventListener(event, handler, options);
    self2._handlers.push({
      remove: () => element3.removeEventListener(event, handler)
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self2.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach((evt) => {
        Array.prototype.forEach.call(self2.element.querySelectorAll(`[data-${evt}]`), (el) => bind3(el, "click", self2[evt]));
      });
    }
    if (self2.isMobile) {
      setupMobile();
      return;
    }
    const debouncedResize = debounce$1(onResize, 50);
    self2._debouncedChange = debounce$1(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self2.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind3(self2.daysContainer, "mouseover", (e) => {
        if (self2.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind3(window.document.body, "keydown", onKeyDown);
    if (!self2.config.inline && !self2.config.static)
      bind3(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind3(window.document, "touchstart", documentClick);
    else
      bind3(window.document, "mousedown", documentClick);
    bind3(window.document, "focus", documentClick, { capture: true });
    if (self2.config.clickOpens === true) {
      bind3(self2._input, "focus", self2.open);
      bind3(self2._input, "click", self2.open);
    }
    if (self2.daysContainer !== void 0) {
      bind3(self2.monthNav, "click", onMonthNavClick);
      bind3(self2.monthNav, ["keyup", "increment"], onYearInput);
      bind3(self2.daysContainer, "click", selectDate);
    }
    if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0) {
      const selText = (e) => getEventTarget(e).select();
      bind3(self2.timeContainer, ["increment"], updateTime);
      bind3(self2.timeContainer, "blur", updateTime, { capture: true });
      bind3(self2.timeContainer, "click", timeIncrement);
      bind3([self2.hourElement, self2.minuteElement], ["focus", "click"], selText);
      if (self2.secondElement !== void 0)
        bind3(self2.secondElement, "focus", () => self2.secondElement && self2.secondElement.select());
      if (self2.amPM !== void 0) {
        bind3(self2.amPM, "click", (e) => {
          updateTime(e);
          triggerChange();
        });
      }
    }
    if (self2.config.allowInput) {
      bind3(self2._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    const jumpTo = jumpDate !== void 0 ? self2.parseDate(jumpDate) : self2.latestSelectedDateObj || (self2.config.minDate && self2.config.minDate > self2.now ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate < self2.now ? self2.config.maxDate : self2.now);
    const oldYear = self2.currentYear;
    const oldMonth = self2.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self2.currentYear = jumpTo.getFullYear();
        self2.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self2.config.errorHandler(e);
    }
    if (triggerChange2 && self2.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self2.currentYear !== oldYear || self2.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self2.redraw();
  }
  function timeIncrement(e) {
    const eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    const target = e && getEventTarget(e);
    const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    const event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    const fragment = window.document.createDocumentFragment();
    self2.calendarContainer = createElement$1("div", "flatpickr-calendar");
    self2.calendarContainer.tabIndex = -1;
    if (!self2.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self2.innerContainer = createElement$1("div", "flatpickr-innerContainer");
      if (self2.config.weekNumbers) {
        const { weekWrapper, weekNumbers } = buildWeeks();
        self2.innerContainer.appendChild(weekWrapper);
        self2.weekNumbers = weekNumbers;
        self2.weekWrapper = weekWrapper;
      }
      self2.rContainer = createElement$1("div", "flatpickr-rContainer");
      self2.rContainer.appendChild(buildWeekdays());
      if (!self2.daysContainer) {
        self2.daysContainer = createElement$1("div", "flatpickr-days");
        self2.daysContainer.tabIndex = -1;
      }
      buildDays();
      self2.rContainer.appendChild(self2.daysContainer);
      self2.innerContainer.appendChild(self2.rContainer);
      fragment.appendChild(self2.innerContainer);
    }
    if (self2.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self2.calendarContainer, "rangeMode", self2.config.mode === "range");
    toggleClass(self2.calendarContainer, "animate", self2.config.animate === true);
    toggleClass(self2.calendarContainer, "multiMonth", self2.config.showMonths > 1);
    self2.calendarContainer.appendChild(fragment);
    const customAppend = self2.config.appendTo !== void 0 && self2.config.appendTo.nodeType !== void 0;
    if (self2.config.inline || self2.config.static) {
      self2.calendarContainer.classList.add(self2.config.inline ? "inline" : "static");
      if (self2.config.inline) {
        if (!customAppend && self2.element.parentNode)
          self2.element.parentNode.insertBefore(self2.calendarContainer, self2._input.nextSibling);
        else if (self2.config.appendTo !== void 0)
          self2.config.appendTo.appendChild(self2.calendarContainer);
      }
      if (self2.config.static) {
        const wrapper = createElement$1("div", "flatpickr-wrapper");
        if (self2.element.parentNode)
          self2.element.parentNode.insertBefore(wrapper, self2.element);
        wrapper.appendChild(self2.element);
        if (self2.altInput)
          wrapper.appendChild(self2.altInput);
        wrapper.appendChild(self2.calendarContainer);
      }
    }
    if (!self2.config.static && !self2.config.inline)
      (self2.config.appendTo !== void 0 ? self2.config.appendTo : window.document.body).appendChild(self2.calendarContainer);
  }
  function createDay(className, date, dayNumber, i) {
    const dateIsEnabled = isEnabled(date, true), dayElement = createElement$1("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self2.formatDate(date, self2.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self2.now) === 0) {
      self2.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self2.selectedDateElem = dayElement;
        if (self2.config.mode === "range") {
          toggleClass(dayElement, "startRange", self2.selectedDates[0] && compareDates(date, self2.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self2.selectedDates[1] && compareDates(date, self2.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self2.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self2.weekNumbers && self2.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self2.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self2.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self2.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    const startMonth = delta > 0 ? 0 : self2.config.showMonths - 1;
    const endMonth = delta > 0 ? self2.config.showMonths : -1;
    for (let m = startMonth; m != endMonth; m += delta) {
      const month = self2.daysContainer.children[m];
      const startIndex = delta > 0 ? 0 : month.children.length - 1;
      const endIndex = delta > 0 ? month.children.length : -1;
      for (let i = startIndex; i != endIndex; i += delta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self2.currentMonth;
    const endMonth = delta > 0 ? self2.config.showMonths : -1;
    const loopDelta = delta > 0 ? 1 : -1;
    for (let m = givenMonth - self2.currentMonth; m != endMonth; m += loopDelta) {
      const month = self2.daysContainer.children[m];
      const startIndex = givenMonth - self2.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      const numMonthDays = month.children.length;
      for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        const c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self2.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    const dayFocused = isInView(document.activeElement || document.body);
    const startElem = current !== void 0 ? current : dayFocused ? document.activeElement : self2.selectedDateElem !== void 0 && isInView(self2.selectedDateElem) ? self2.selectedDateElem : self2.todayDateElem !== void 0 && isInView(self2.todayDateElem) ? self2.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self2._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    const firstOfMonth = (new Date(year, month, 1).getDay() - self2.l10n.firstDayOfWeek + 7) % 7;
    const prevMonthDays = self2.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    const daysInMonth = self2.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self2.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self2.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    const dayContainer = createElement$1("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self2.daysContainer === void 0) {
      return;
    }
    clearNode(self2.daysContainer);
    if (self2.weekNumbers)
      clearNode(self2.weekNumbers);
    const frag = document.createDocumentFragment();
    for (let i = 0; i < self2.config.showMonths; i++) {
      const d = new Date(self2.currentYear, self2.currentMonth, 1);
      d.setMonth(self2.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self2.daysContainer.appendChild(frag);
    self2.days = self2.daysContainer.firstChild;
    if (self2.config.mode === "range" && self2.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self2.config.showMonths > 1 || self2.config.monthSelectorType !== "dropdown")
      return;
    const shouldBuildMonth = function(month) {
      if (self2.config.minDate !== void 0 && self2.currentYear === self2.config.minDate.getFullYear() && month < self2.config.minDate.getMonth()) {
        return false;
      }
      return !(self2.config.maxDate !== void 0 && self2.currentYear === self2.config.maxDate.getFullYear() && month > self2.config.maxDate.getMonth());
    };
    self2.monthsDropdownContainer.tabIndex = -1;
    self2.monthsDropdownContainer.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i))
        continue;
      const month = createElement$1("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self2.currentYear, i).getMonth().toString();
      month.textContent = monthToStr(i, self2.config.shorthandCurrentMonth, self2.l10n);
      month.tabIndex = -1;
      if (self2.currentMonth === i) {
        month.selected = true;
      }
      self2.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    const container = createElement$1("div", "flatpickr-month");
    const monthNavFragment = window.document.createDocumentFragment();
    let monthElement;
    if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
      monthElement = createElement$1("span", "cur-month");
    } else {
      self2.monthsDropdownContainer = createElement$1("select", "flatpickr-monthDropdown-months");
      self2.monthsDropdownContainer.setAttribute("aria-label", self2.l10n.monthAriaLabel);
      bind3(self2.monthsDropdownContainer, "change", (e) => {
        const target = getEventTarget(e);
        const selectedMonth = parseInt(target.value, 10);
        self2.changeMonth(selectedMonth - self2.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self2.monthsDropdownContainer;
    }
    const yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    const yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self2.l10n.yearAriaLabel);
    if (self2.config.minDate) {
      yearElement.setAttribute("min", self2.config.minDate.getFullYear().toString());
    }
    if (self2.config.maxDate) {
      yearElement.setAttribute("max", self2.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self2.config.minDate && self2.config.minDate.getFullYear() === self2.config.maxDate.getFullYear();
    }
    const currentMonth = createElement$1("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self2.monthNav);
    self2.monthNav.appendChild(self2.prevMonthNav);
    if (self2.config.showMonths) {
      self2.yearElements = [];
      self2.monthElements = [];
    }
    for (let m = self2.config.showMonths; m--; ) {
      const month = buildMonth();
      self2.yearElements.push(month.yearElement);
      self2.monthElements.push(month.monthElement);
      self2.monthNav.appendChild(month.container);
    }
    self2.monthNav.appendChild(self2.nextMonthNav);
  }
  function buildMonthNav() {
    self2.monthNav = createElement$1("div", "flatpickr-months");
    self2.yearElements = [];
    self2.monthElements = [];
    self2.prevMonthNav = createElement$1("span", "flatpickr-prev-month");
    self2.prevMonthNav.innerHTML = self2.config.prevArrow;
    self2.nextMonthNav = createElement$1("span", "flatpickr-next-month");
    self2.nextMonthNav.innerHTML = self2.config.nextArrow;
    buildMonths();
    Object.defineProperty(self2, "_hidePrevMonthArrow", {
      get: () => self2.__hidePrevMonthArrow,
      set(bool) {
        if (self2.__hidePrevMonthArrow !== bool) {
          toggleClass(self2.prevMonthNav, "flatpickr-disabled", bool);
          self2.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self2, "_hideNextMonthArrow", {
      get: () => self2.__hideNextMonthArrow,
      set(bool) {
        if (self2.__hideNextMonthArrow !== bool) {
          toggleClass(self2.nextMonthNav, "flatpickr-disabled", bool);
          self2.__hideNextMonthArrow = bool;
        }
      }
    });
    self2.currentYearElement = self2.yearElements[0];
    updateNavigationCurrentMonth();
    return self2.monthNav;
  }
  function buildTime() {
    self2.calendarContainer.classList.add("hasTime");
    if (self2.config.noCalendar)
      self2.calendarContainer.classList.add("noCalendar");
    const defaults2 = getDefaultHours(self2.config);
    self2.timeContainer = createElement$1("div", "flatpickr-time");
    self2.timeContainer.tabIndex = -1;
    const separator = createElement$1("span", "flatpickr-time-separator", ":");
    const hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self2.l10n.hourAriaLabel
    });
    self2.hourElement = hourInput.getElementsByTagName("input")[0];
    const minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self2.l10n.minuteAriaLabel
    });
    self2.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self2.hourElement.tabIndex = self2.minuteElement.tabIndex = -1;
    self2.hourElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getHours() : self2.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self2.minuteElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self2.hourElement.setAttribute("step", self2.config.hourIncrement.toString());
    self2.minuteElement.setAttribute("step", self2.config.minuteIncrement.toString());
    self2.hourElement.setAttribute("min", self2.config.time_24hr ? "0" : "1");
    self2.hourElement.setAttribute("max", self2.config.time_24hr ? "23" : "12");
    self2.hourElement.setAttribute("maxlength", "2");
    self2.minuteElement.setAttribute("min", "0");
    self2.minuteElement.setAttribute("max", "59");
    self2.minuteElement.setAttribute("maxlength", "2");
    self2.timeContainer.appendChild(hourInput);
    self2.timeContainer.appendChild(separator);
    self2.timeContainer.appendChild(minuteInput);
    if (self2.config.time_24hr)
      self2.timeContainer.classList.add("time24hr");
    if (self2.config.enableSeconds) {
      self2.timeContainer.classList.add("hasSeconds");
      const secondInput = createNumberInput("flatpickr-second");
      self2.secondElement = secondInput.getElementsByTagName("input")[0];
      self2.secondElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self2.secondElement.setAttribute("step", self2.minuteElement.getAttribute("step"));
      self2.secondElement.setAttribute("min", "0");
      self2.secondElement.setAttribute("max", "59");
      self2.secondElement.setAttribute("maxlength", "2");
      self2.timeContainer.appendChild(createElement$1("span", "flatpickr-time-separator", ":"));
      self2.timeContainer.appendChild(secondInput);
    }
    if (!self2.config.time_24hr) {
      self2.amPM = createElement$1("span", "flatpickr-am-pm", self2.l10n.amPM[int((self2.latestSelectedDateObj ? self2.hourElement.value : self2.config.defaultHour) > 11)]);
      self2.amPM.title = self2.l10n.toggleTitle;
      self2.amPM.tabIndex = -1;
      self2.timeContainer.appendChild(self2.amPM);
    }
    return self2.timeContainer;
  }
  function buildWeekdays() {
    if (!self2.weekdayContainer)
      self2.weekdayContainer = createElement$1("div", "flatpickr-weekdays");
    else
      clearNode(self2.weekdayContainer);
    for (let i = self2.config.showMonths; i--; ) {
      const container = createElement$1("div", "flatpickr-weekdaycontainer");
      self2.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self2.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self2.weekdayContainer) {
      return;
    }
    const firstDayOfWeek = self2.l10n.firstDayOfWeek;
    let weekdays = [...self2.l10n.weekdays.shorthand];
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [
        ...weekdays.splice(firstDayOfWeek, weekdays.length),
        ...weekdays.splice(0, firstDayOfWeek)
      ];
    }
    for (let i = self2.config.showMonths; i--; ) {
      self2.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
    }
  }
  function buildWeeks() {
    self2.calendarContainer.classList.add("hasWeeks");
    const weekWrapper = createElement$1("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement$1("span", "flatpickr-weekday", self2.l10n.weekAbbreviation));
    const weekNumbers = createElement$1("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset = true) {
    const delta = isOffset ? value : value - self2.currentMonth;
    if (delta < 0 && self2._hidePrevMonthArrow === true || delta > 0 && self2._hideNextMonthArrow === true)
      return;
    self2.currentMonth += delta;
    if (self2.currentMonth < 0 || self2.currentMonth > 11) {
      self2.currentYear += self2.currentMonth > 11 ? 1 : -1;
      self2.currentMonth = (self2.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent = true, toInitial = true) {
    self2.input.value = "";
    if (self2.altInput !== void 0)
      self2.altInput.value = "";
    if (self2.mobileInput !== void 0)
      self2.mobileInput.value = "";
    self2.selectedDates = [];
    self2.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self2.currentYear = self2._initialDate.getFullYear();
      self2.currentMonth = self2._initialDate.getMonth();
    }
    if (self2.config.enableTime === true) {
      const { hours, minutes, seconds } = getDefaultHours(self2.config);
      setHours(hours, minutes, seconds);
    }
    self2.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self2.isOpen = false;
    if (!self2.isMobile) {
      if (self2.calendarContainer !== void 0) {
        self2.calendarContainer.classList.remove("open");
      }
      if (self2._input !== void 0) {
        self2._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self2.config !== void 0)
      triggerEvent("onDestroy");
    for (let i = self2._handlers.length; i--; ) {
      self2._handlers[i].remove();
    }
    self2._handlers = [];
    if (self2.mobileInput) {
      if (self2.mobileInput.parentNode)
        self2.mobileInput.parentNode.removeChild(self2.mobileInput);
      self2.mobileInput = void 0;
    } else if (self2.calendarContainer && self2.calendarContainer.parentNode) {
      if (self2.config.static && self2.calendarContainer.parentNode) {
        const wrapper = self2.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self2.calendarContainer.parentNode.removeChild(self2.calendarContainer);
    }
    if (self2.altInput) {
      self2.input.type = "text";
      if (self2.altInput.parentNode)
        self2.altInput.parentNode.removeChild(self2.altInput);
      delete self2.altInput;
    }
    if (self2.input) {
      self2.input.type = self2.input._type;
      self2.input.classList.remove("flatpickr-input");
      self2.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach((k) => {
      try {
        delete self2[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    if (self2.config.appendTo && self2.config.appendTo.contains(elem))
      return true;
    return self2.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self2.isOpen && !self2.config.inline) {
      const eventTarget = getEventTarget(e);
      const isCalendarElement = isCalendarElem(eventTarget);
      const isInput = eventTarget === self2.input || eventTarget === self2.altInput || self2.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self2.input) || ~e.path.indexOf(self2.altInput));
      const lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      const isIgnored = !self2.config.ignoredFocusElements.some((elem) => elem.contains(eventTarget));
      if (lostFocus && isIgnored) {
        if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0 && self2.input.value !== "" && self2.input.value !== void 0) {
          updateTime();
        }
        self2.close();
        if (self2.config && self2.config.mode === "range" && self2.selectedDates.length === 1) {
          self2.clear(false);
          self2.redraw();
        }
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self2.config.minDate && newYear < self2.config.minDate.getFullYear() || self2.config.maxDate && newYear > self2.config.maxDate.getFullYear())
      return;
    const newYearNum = newYear, isNewYear = self2.currentYear !== newYearNum;
    self2.currentYear = newYearNum || self2.currentYear;
    if (self2.config.maxDate && self2.currentYear === self2.config.maxDate.getFullYear()) {
      self2.currentMonth = Math.min(self2.config.maxDate.getMonth(), self2.currentMonth);
    } else if (self2.config.minDate && self2.currentYear === self2.config.minDate.getFullYear()) {
      self2.currentMonth = Math.max(self2.config.minDate.getMonth(), self2.currentMonth);
    }
    if (isNewYear) {
      self2.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless = true) {
    var _a;
    const dateToCheck = self2.parseDate(date, void 0, timeless);
    if (self2.config.minDate && dateToCheck && compareDates(dateToCheck, self2.config.minDate, timeless !== void 0 ? timeless : !self2.minDateHasTime) < 0 || self2.config.maxDate && dateToCheck && compareDates(dateToCheck, self2.config.maxDate, timeless !== void 0 ? timeless : !self2.maxDateHasTime) > 0)
      return false;
    if (!self2.config.enable && self2.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    const bool = !!self2.config.enable, array = (_a = self2.config.enable) !== null && _a !== void 0 ? _a : self2.config.disable;
    for (let i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        const parsed = self2.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self2.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self2.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    const isInput = e.target === self2._input;
    if (isInput && (self2.selectedDates.length > 0 || self2._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self2.setDate(self2._input.value, true, e.target === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    const eventTarget = getEventTarget(e);
    const isInput = self2.config.wrap ? element2.contains(eventTarget) : eventTarget === self2._input;
    const allowInput = self2.config.allowInput;
    const allowKeydown = self2.isOpen && (!allowInput || !isInput);
    const allowInlineKeydown = self2.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self2.setDate(self2._input.value, true, eventTarget === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
        return eventTarget.blur();
      } else {
        self2.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      const isTimeObj = !!self2.timeContainer && self2.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self2.config.allowInput) {
            e.preventDefault();
            self2.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            if (self2.daysContainer !== void 0 && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              const delta2 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta2);
              else {
                e.stopPropagation();
                changeMonth(delta2);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self2.hourElement)
            self2.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          const delta = e.keyCode === 40 ? 1 : -1;
          if (self2.daysContainer && eventTarget.$i !== void 0 || eventTarget === self2.input || eventTarget === self2.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self2.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self2.currentYearElement) {
            changeYear(self2.currentYear - delta);
          } else if (self2.config.enableTime) {
            if (!isTimeObj && self2.hourElement)
              self2.hourElement.focus();
            updateTime(e);
            self2._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            const elems = [
              self2.hourElement,
              self2.minuteElement,
              self2.secondElement,
              self2.amPM
            ].concat(self2.pluginElements).filter((x) => x);
            const i = elems.indexOf(eventTarget);
            if (i !== -1) {
              const target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self2._input).focus();
            }
          } else if (!self2.config.noCalendar && self2.daysContainer && self2.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self2._input.focus();
          }
          break;
      }
    }
    if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
      switch (e.key) {
        case self2.l10n.amPM[0].charAt(0):
        case self2.l10n.amPM[0].charAt(0).toLowerCase():
          self2.amPM.textContent = self2.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self2.l10n.amPM[1].charAt(0):
        case self2.l10n.amPM[1].charAt(0).toLowerCase():
          self2.amPM.textContent = self2.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem) {
    if (self2.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled")))
      return;
    const hoverDate = elem ? elem.dateObj.getTime() : self2.days.firstElementChild.dateObj.getTime(), initialDate = self2.parseDate(self2.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self2.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self2.selectedDates[0].getTime());
    let containsDisabled = false;
    let minRange = 0, maxRange = 0;
    for (let t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    for (let m = 0; m < self2.config.showMonths; m++) {
      const month = self2.daysContainer.children[m];
      for (let i = 0, l = month.children.length; i < l; i++) {
        const dayElem = month.children[i], date = dayElem.dateObj;
        const timestamp = date.getTime();
        const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach((c) => {
            dayElem.classList.remove(c);
          });
          continue;
        } else if (containsDisabled && !outOfRange)
          continue;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
          dayElem.classList.remove(c);
        });
        if (elem !== void 0) {
          elem.classList.add(hoverDate <= self2.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate)
            dayElem.classList.add("startRange");
          else if (initialDate > hoverDate && timestamp === initialDate)
            dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
            dayElem.classList.add("inRange");
        }
      }
    }
  }
  function onResize() {
    if (self2.isOpen && !self2.config.static && !self2.config.inline)
      positionCalendar();
  }
  function open(e, positionElement = self2._positionElement) {
    if (self2.isMobile === true) {
      if (e) {
        e.preventDefault();
        const eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self2.mobileInput !== void 0) {
        self2.mobileInput.focus();
        self2.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self2._input.disabled || self2.config.inline) {
      return;
    }
    const wasOpen = self2.isOpen;
    self2.isOpen = true;
    if (!wasOpen) {
      self2.calendarContainer.classList.add("open");
      self2._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self2.config.enableTime === true && self2.config.noCalendar === true) {
      if (self2.config.allowInput === false && (e === void 0 || !self2.timeContainer.contains(e.relatedTarget))) {
        setTimeout(() => self2.hourElement.select(), 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return (date) => {
      const dateObj = self2.config[`_${type}Date`] = self2.parseDate(date, self2.config.dateFormat);
      const inverseDateObj = self2.config[`_${type === "min" ? "max" : "min"}Date`];
      if (dateObj !== void 0) {
        self2[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self2.selectedDates) {
        self2.selectedDates = self2.selectedDates.filter((d) => isEnabled(d));
        if (!self2.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self2.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self2.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self2.currentYearElement.removeAttribute(type);
        self2.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    const boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    const userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element2.dataset || {}))), instanceConfig);
    const formats2 = {};
    self2.config.parseDate = userConfig.parseDate;
    self2.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self2.config, "enable", {
      get: () => self2.config._enable,
      set: (dates) => {
        self2.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self2.config, "disable", {
      get: () => self2.config._disable,
      set: (dates) => {
        self2.config._disable = parseDateRules(dates);
      }
    });
    const timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      const defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      const defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
    }
    Object.defineProperty(self2.config, "minDate", {
      get: () => self2.config._minDate,
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self2.config, "maxDate", {
      get: () => self2.config._maxDate,
      set: minMaxDateSetter("max")
    });
    const minMaxTimeSetter = (type) => (val) => {
      self2.config[type === "min" ? "_minTime" : "_maxTime"] = self2.parseDate(val, "H:i:S");
    };
    Object.defineProperty(self2.config, "minTime", {
      get: () => self2.config._minTime,
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self2.config, "maxTime", {
      get: () => self2.config._maxTime,
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self2.config.noCalendar = true;
      self2.config.enableTime = true;
    }
    Object.assign(self2.config, formats2, userConfig);
    for (let i = 0; i < boolOpts.length; i++)
      self2.config[boolOpts[i]] = self2.config[boolOpts[i]] === true || self2.config[boolOpts[i]] === "true";
    HOOKS.filter((hook) => self2.config[hook] !== void 0).forEach((hook) => {
      self2.config[hook] = arrayify(self2.config[hook] || []).map(bindToInstance);
    });
    self2.isMobile = !self2.config.disableMobile && !self2.config.inline && self2.config.mode === "single" && !self2.config.disable.length && !self2.config.enable && !self2.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (let i = 0; i < self2.config.plugins.length; i++) {
      const pluginConf = self2.config.plugins[i](self2) || {};
      for (const key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self2.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self2.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self2.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self2.config.altInputClass = getInputElem().className + " " + self2.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self2.config.wrap ? element2.querySelector("[data-input]") : element2;
  }
  function setupLocale() {
    if (typeof self2.config.locale !== "object" && typeof flatpickr.l10ns[self2.config.locale] === "undefined")
      self2.config.errorHandler(new Error(`flatpickr: invalid locale ${self2.config.locale}`));
    self2.l10n = Object.assign(Object.assign({}, flatpickr.l10ns.default), typeof self2.config.locale === "object" ? self2.config.locale : self2.config.locale !== "default" ? flatpickr.l10ns[self2.config.locale] : void 0);
    tokenRegex.K = `(${self2.l10n.amPM[0]}|${self2.l10n.amPM[1]}|${self2.l10n.amPM[0].toLowerCase()}|${self2.l10n.amPM[1].toLowerCase()})`;
    const userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element2.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self2.config.time_24hr = self2.l10n.time_24hr;
    }
    self2.formatDate = createDateFormatter(self2);
    self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self2.config.position === "function") {
      return void self2.config.position(self2, customPositionElement);
    }
    if (self2.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    const positionElement = customPositionElement || self2._positionElement;
    const calendarHeight = Array.prototype.reduce.call(self2.calendarContainer.children, (acc, child) => acc + child.offsetHeight, 0), calendarWidth = self2.calendarContainer.offsetWidth, configPos = self2.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self2.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self2.calendarContainer, "arrowBottom", showOnTop);
    if (self2.config.inline)
      return;
    let left = window.pageXOffset + inputBounds.left;
    let isCenter = false;
    let isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self2.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self2.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self2.calendarContainer, "arrowRight", isRight);
    const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    const rightMost = left + calendarWidth > window.document.body.offsetWidth;
    const centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self2.calendarContainer, "rightMost", rightMost);
    if (self2.config.static)
      return;
    self2.calendarContainer.style.top = `${top}px`;
    if (!rightMost) {
      self2.calendarContainer.style.left = `${left}px`;
      self2.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self2.calendarContainer.style.left = "auto";
      self2.calendarContainer.style.right = `${right}px`;
    } else {
      const doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      const bodyWidth = window.document.body.offsetWidth;
      const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      const centerBefore = ".flatpickr-calendar.centerMost:before";
      const centerAfter = ".flatpickr-calendar.centerMost:after";
      const centerIndex = doc.cssRules.length;
      const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
      toggleClass(self2.calendarContainer, "rightMost", false);
      toggleClass(self2.calendarContainer, "centerMost", true);
      doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
      self2.calendarContainer.style.left = `${centerLeft}px`;
      self2.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    let editableSheet = null;
    for (let i = 0; i < document.styleSheets.length; i++) {
      const sheet = document.styleSheets[i];
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    const style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self2.config.noCalendar || self2.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self2._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self2.close, 0);
    } else {
      self2.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    const isSelectable = (day) => day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    const t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    const target = t;
    const selectedDate = self2.latestSelectedDateObj = new Date(target.dateObj.getTime());
    const shouldChangeMonth = (selectedDate.getMonth() < self2.currentMonth || selectedDate.getMonth() > self2.currentMonth + self2.config.showMonths - 1) && self2.config.mode !== "range";
    self2.selectedDateElem = target;
    if (self2.config.mode === "single")
      self2.selectedDates = [selectedDate];
    else if (self2.config.mode === "multiple") {
      const selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self2.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self2.selectedDates.push(selectedDate);
    } else if (self2.config.mode === "range") {
      if (self2.selectedDates.length === 2) {
        self2.clear(false, false);
      }
      self2.latestSelectedDateObj = selectedDate;
      self2.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self2.selectedDates[0], true) !== 0)
        self2.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      const isNewYear = self2.currentYear !== selectedDate.getFullYear();
      self2.currentYear = selectedDate.getFullYear();
      self2.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self2.config.mode !== "range" && self2.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self2.selectedDateElem !== void 0 && self2.hourElement === void 0) {
      self2.selectedDateElem && self2.selectedDateElem.focus();
    }
    if (self2.hourElement !== void 0)
      self2.hourElement !== void 0 && self2.hourElement.focus();
    if (self2.config.closeOnSelect) {
      const single = self2.config.mode === "single" && !self2.config.enableTime;
      const range = self2.config.mode === "range" && self2.selectedDates.length === 2 && !self2.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  const CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    clickOpens: [
      () => {
        if (self2.config.clickOpens === true) {
          bind3(self2._input, "focus", self2.open);
          bind3(self2._input, "click", self2.open);
        } else {
          self2._input.removeEventListener("focus", self2.open);
          self2._input.removeEventListener("click", self2.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self2.config, option);
      for (const key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach((x) => x());
      }
    } else {
      self2.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach((x) => x());
      else if (HOOKS.indexOf(option) > -1)
        self2.config[option] = arrayify(value);
    }
    self2.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    let dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map((d) => self2.parseDate(d, format));
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self2.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self2.config.mode) {
        case "single":
        case "time":
          dates = [self2.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self2.config.conjunction).map((date) => self2.parseDate(date, format));
          break;
        case "range":
          dates = inputDate.split(self2.l10n.rangeSeparator).map((date) => self2.parseDate(date, format));
          break;
      }
    } else
      self2.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
    self2.selectedDates = self2.config.allowInvalidPreload ? dates : dates.filter((d) => d instanceof Date && isEnabled(d, false));
    if (self2.config.mode === "range")
      self2.selectedDates.sort((a, b) => a.getTime() - b.getTime());
  }
  function setDate(date, triggerChange2 = false, format = self2.config.dateFormat) {
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self2.clear(triggerChange2);
    setSelectedDate(date, format);
    self2.latestSelectedDateObj = self2.selectedDates[self2.selectedDates.length - 1];
    self2.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self2.selectedDates.length === 0) {
      self2.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map((rule) => {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self2.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self2.parseDate(rule.from, void 0),
          to: self2.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter((x) => x);
  }
  function setupDates() {
    self2.selectedDates = [];
    self2.now = self2.parseDate(self2.config.now) || new Date();
    const preloadedDate = self2.config.defaultDate || ((self2.input.nodeName === "INPUT" || self2.input.nodeName === "TEXTAREA") && self2.input.placeholder && self2.input.value === self2.input.placeholder ? null : self2.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self2.config.dateFormat);
    self2._initialDate = self2.selectedDates.length > 0 ? self2.selectedDates[0] : self2.config.minDate && self2.config.minDate.getTime() > self2.now.getTime() ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate.getTime() < self2.now.getTime() ? self2.config.maxDate : self2.now;
    self2.currentYear = self2._initialDate.getFullYear();
    self2.currentMonth = self2._initialDate.getMonth();
    if (self2.selectedDates.length > 0)
      self2.latestSelectedDateObj = self2.selectedDates[0];
    if (self2.config.minTime !== void 0)
      self2.config.minTime = self2.parseDate(self2.config.minTime, "H:i");
    if (self2.config.maxTime !== void 0)
      self2.config.maxTime = self2.parseDate(self2.config.maxTime, "H:i");
    self2.minDateHasTime = !!self2.config.minDate && (self2.config.minDate.getHours() > 0 || self2.config.minDate.getMinutes() > 0 || self2.config.minDate.getSeconds() > 0);
    self2.maxDateHasTime = !!self2.config.maxDate && (self2.config.maxDate.getHours() > 0 || self2.config.maxDate.getMinutes() > 0 || self2.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self2.input = getInputElem();
    if (!self2.input) {
      self2.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self2.input._type = self2.input.type;
    self2.input.type = "text";
    self2.input.classList.add("flatpickr-input");
    self2._input = self2.input;
    if (self2.config.altInput) {
      self2.altInput = createElement$1(self2.input.nodeName, self2.config.altInputClass);
      self2._input = self2.altInput;
      self2.altInput.placeholder = self2.input.placeholder;
      self2.altInput.disabled = self2.input.disabled;
      self2.altInput.required = self2.input.required;
      self2.altInput.tabIndex = self2.input.tabIndex;
      self2.altInput.type = "text";
      self2.input.setAttribute("type", "hidden");
      if (!self2.config.static && self2.input.parentNode)
        self2.input.parentNode.insertBefore(self2.altInput, self2.input.nextSibling);
    }
    if (!self2.config.allowInput)
      self2._input.setAttribute("readonly", "readonly");
    self2._positionElement = self2.config.positionElement || self2._input;
  }
  function setupMobile() {
    const inputType = self2.config.enableTime ? self2.config.noCalendar ? "time" : "datetime-local" : "date";
    self2.mobileInput = createElement$1("input", self2.input.className + " flatpickr-mobile");
    self2.mobileInput.tabIndex = 1;
    self2.mobileInput.type = inputType;
    self2.mobileInput.disabled = self2.input.disabled;
    self2.mobileInput.required = self2.input.required;
    self2.mobileInput.placeholder = self2.input.placeholder;
    self2.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self2.selectedDates.length > 0) {
      self2.mobileInput.defaultValue = self2.mobileInput.value = self2.formatDate(self2.selectedDates[0], self2.mobileFormatStr);
    }
    if (self2.config.minDate)
      self2.mobileInput.min = self2.formatDate(self2.config.minDate, "Y-m-d");
    if (self2.config.maxDate)
      self2.mobileInput.max = self2.formatDate(self2.config.maxDate, "Y-m-d");
    if (self2.input.getAttribute("step"))
      self2.mobileInput.step = String(self2.input.getAttribute("step"));
    self2.input.type = "hidden";
    if (self2.altInput !== void 0)
      self2.altInput.type = "hidden";
    try {
      if (self2.input.parentNode)
        self2.input.parentNode.insertBefore(self2.mobileInput, self2.input.nextSibling);
    } catch (_a) {
    }
    bind3(self2.mobileInput, "change", (e) => {
      self2.setDate(getEventTarget(e).value, false, self2.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self2.isOpen === true)
      return self2.close();
    self2.open(e);
  }
  function triggerEvent(event, data2) {
    if (self2.config === void 0)
      return;
    const hooks = self2.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (let i = 0; hooks[i] && i < hooks.length; i++)
        hooks[i](self2.selectedDates, self2.input.value, self2, data2);
    }
    if (event === "onChange") {
      self2.input.dispatchEvent(createEvent("change"));
      self2.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    const e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (let i = 0; i < self2.selectedDates.length; i++) {
      if (compareDates(self2.selectedDates[i], date) === 0)
        return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self2.config.mode !== "range" || self2.selectedDates.length < 2)
      return false;
    return compareDates(date, self2.selectedDates[0]) >= 0 && compareDates(date, self2.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self2.config.noCalendar || self2.isMobile || !self2.monthNav)
      return;
    self2.yearElements.forEach((yearElement, i) => {
      const d = new Date(self2.currentYear, self2.currentMonth, 1);
      d.setMonth(self2.currentMonth + i);
      if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
        self2.monthElements[i].textContent = monthToStr(d.getMonth(), self2.config.shorthandCurrentMonth, self2.l10n) + " ";
      } else {
        self2.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self2._hidePrevMonthArrow = self2.config.minDate !== void 0 && (self2.currentYear === self2.config.minDate.getFullYear() ? self2.currentMonth <= self2.config.minDate.getMonth() : self2.currentYear < self2.config.minDate.getFullYear());
    self2._hideNextMonthArrow = self2.config.maxDate !== void 0 && (self2.currentYear === self2.config.maxDate.getFullYear() ? self2.currentMonth + 1 > self2.config.maxDate.getMonth() : self2.currentYear > self2.config.maxDate.getFullYear());
  }
  function getDateStr(format) {
    return self2.selectedDates.map((dObj) => self2.formatDate(dObj, format)).filter((d, i, arr) => self2.config.mode !== "range" || self2.config.enableTime || arr.indexOf(d) === i).join(self2.config.mode !== "range" ? self2.config.conjunction : self2.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2 = true) {
    if (self2.mobileInput !== void 0 && self2.mobileFormatStr) {
      self2.mobileInput.value = self2.latestSelectedDateObj !== void 0 ? self2.formatDate(self2.latestSelectedDateObj, self2.mobileFormatStr) : "";
    }
    self2.input.value = getDateStr(self2.config.dateFormat);
    if (self2.altInput !== void 0) {
      self2.altInput.value = getDateStr(self2.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    const eventTarget = getEventTarget(e);
    const isPrevMonth = self2.prevMonthNav.contains(eventTarget);
    const isNextMonth = self2.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self2.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self2.changeYear(self2.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self2.changeYear(self2.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    const isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
      self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
    }
    const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    let newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      const isHourElem = input === self2.hourElement, isMinuteElem = input === self2.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self2.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self2.hourElement);
      } else if (newValue > max) {
        newValue = input === self2.hourElement ? newValue - max - int(!self2.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self2.hourElement);
      }
      if (self2.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init2();
  return self2;
}
function _flatpickr(nodeList, config2) {
  const nodes = Array.prototype.slice.call(nodeList).filter((x) => x instanceof HTMLElement);
  const instances = [];
  for (let i = 0; i < nodes.length; i++) {
    const node2 = nodes[i];
    try {
      if (node2.getAttribute("data-fp-omit") !== null)
        continue;
      if (node2._flatpickr !== void 0) {
        node2._flatpickr.destroy();
        node2._flatpickr = void 0;
      }
      node2._flatpickr = FlatpickrInstance(node2, config2 || {});
      instances.push(node2._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config2) {
    return _flatpickr(this, config2);
  };
  HTMLElement.prototype.flatpickr = function(config2) {
    return _flatpickr([this], config2);
  };
}
var flatpickr = function(selector2, config2) {
  if (typeof selector2 === "string") {
    return _flatpickr(window.document.querySelectorAll(selector2), config2);
  } else if (selector2 instanceof Node) {
    return _flatpickr([selector2], config2);
  } else {
    return _flatpickr(selector2, config2);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, english),
  default: Object.assign({}, english)
};
flatpickr.localize = (l10n) => {
  flatpickr.l10ns.default = Object.assign(Object.assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = (config2) => {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config2);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config2) {
    return _flatpickr(this, config2);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
function create_else_block(ctx) {
  let div;
  let label;
  let t0;
  let t1;
  let svg;
  let title;
  let t2;
  let circle;
  let div_aria_live_value;
  let if_block = ctx[0] && create_if_block_2(ctx);
  let div_levels = [
    { "aria-atomic": "true" },
    { "aria-labelledby": ctx[4] },
    {
      "aria-live": div_aria_live_value = ctx[1] ? "assertive" : "off"
    },
    ctx[6]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign$1(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      label = element("label");
      t0 = text(ctx[3]);
      t1 = space();
      svg = svg_element("svg");
      title = svg_element("title");
      t2 = text(ctx[3]);
      if (if_block)
        if_block.c();
      circle = svg_element("circle");
      attr$1(label, "id", ctx[4]);
      toggle_class(label, "bx--visually-hidden", true);
      attr$1(circle, "cx", "50%");
      attr$1(circle, "cy", "50%");
      attr$1(circle, "r", ctx[5]);
      toggle_class(circle, "bx--loading__stroke", true);
      attr$1(svg, "viewBox", "0 0 100 100");
      toggle_class(svg, "bx--loading__svg", true);
      set_attributes(div, div_data);
      toggle_class(div, "bx--loading", true);
      toggle_class(div, "bx--loading--small", ctx[0]);
      toggle_class(div, "bx--loading--stop", !ctx[1]);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, label);
      append(label, t0);
      append(div, t1);
      append(div, svg);
      append(svg, title);
      append(title, t2);
      if (if_block)
        if_block.m(svg, null);
      append(svg, circle);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t0, ctx2[3]);
      if (dirty & 16) {
        attr$1(label, "id", ctx2[4]);
      }
      if (dirty & 8)
        set_data(t2, ctx2[3]);
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          if_block.m(svg, circle);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 32) {
        attr$1(circle, "r", ctx2[5]);
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        { "aria-atomic": "true" },
        dirty & 16 && { "aria-labelledby": ctx2[4] },
        dirty & 2 && div_aria_live_value !== (div_aria_live_value = ctx2[1] ? "assertive" : "off") && { "aria-live": div_aria_live_value },
        dirty & 64 && ctx2[6]
      ]));
      toggle_class(div, "bx--loading", true);
      toggle_class(div, "bx--loading--small", ctx2[0]);
      toggle_class(div, "bx--loading--stop", !ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block$7(ctx) {
  let div1;
  let div0;
  let label;
  let t0;
  let t1;
  let svg;
  let title;
  let t2;
  let circle;
  let div0_aria_live_value;
  let if_block = ctx[0] && create_if_block_1(ctx);
  let div1_levels = [ctx[6]];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign$1(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      label = element("label");
      t0 = text(ctx[3]);
      t1 = space();
      svg = svg_element("svg");
      title = svg_element("title");
      t2 = text(ctx[3]);
      if (if_block)
        if_block.c();
      circle = svg_element("circle");
      attr$1(label, "id", ctx[4]);
      toggle_class(label, "bx--visually-hidden", true);
      attr$1(circle, "cx", "50%");
      attr$1(circle, "cy", "50%");
      attr$1(circle, "r", ctx[5]);
      toggle_class(circle, "bx--loading__stroke", true);
      attr$1(svg, "viewBox", "0 0 100 100");
      toggle_class(svg, "bx--loading__svg", true);
      attr$1(div0, "aria-atomic", "true");
      attr$1(div0, "aria-labelledby", ctx[4]);
      attr$1(div0, "aria-live", div0_aria_live_value = ctx[1] ? "assertive" : "off");
      toggle_class(div0, "bx--loading", true);
      toggle_class(div0, "bx--loading--small", ctx[0]);
      toggle_class(div0, "bx--loading--stop", !ctx[1]);
      set_attributes(div1, div1_data);
      toggle_class(div1, "bx--loading-overlay", true);
      toggle_class(div1, "bx--loading-overlay--stop", !ctx[1]);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, label);
      append(label, t0);
      append(div0, t1);
      append(div0, svg);
      append(svg, title);
      append(title, t2);
      if (if_block)
        if_block.m(svg, null);
      append(svg, circle);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t0, ctx2[3]);
      if (dirty & 16) {
        attr$1(label, "id", ctx2[4]);
      }
      if (dirty & 8)
        set_data(t2, ctx2[3]);
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(svg, circle);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 32) {
        attr$1(circle, "r", ctx2[5]);
      }
      if (dirty & 16) {
        attr$1(div0, "aria-labelledby", ctx2[4]);
      }
      if (dirty & 2 && div0_aria_live_value !== (div0_aria_live_value = ctx2[1] ? "assertive" : "off")) {
        attr$1(div0, "aria-live", div0_aria_live_value);
      }
      if (dirty & 1) {
        toggle_class(div0, "bx--loading--small", ctx2[0]);
      }
      if (dirty & 2) {
        toggle_class(div0, "bx--loading--stop", !ctx2[1]);
      }
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [dirty & 64 && ctx2[6]]));
      toggle_class(div1, "bx--loading-overlay", true);
      toggle_class(div1, "bx--loading-overlay--stop", !ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_2(ctx) {
  let circle;
  return {
    c() {
      circle = svg_element("circle");
      attr$1(circle, "cx", "50%");
      attr$1(circle, "cy", "50%");
      attr$1(circle, "r", ctx[5]);
      toggle_class(circle, "bx--loading__background", true);
    },
    m(target, anchor) {
      insert(target, circle, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32) {
        attr$1(circle, "r", ctx2[5]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle);
    }
  };
}
function create_if_block_1(ctx) {
  let circle;
  return {
    c() {
      circle = svg_element("circle");
      attr$1(circle, "cx", "50%");
      attr$1(circle, "cy", "50%");
      attr$1(circle, "r", ctx[5]);
      toggle_class(circle, "bx--loading__background", true);
    },
    m(target, anchor) {
      insert(target, circle, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 32) {
        attr$1(circle, "r", ctx2[5]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(circle);
    }
  };
}
function create_fragment$7(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block$7;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
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
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let spinnerRadius;
  const omit_props_names = ["small", "active", "withOverlay", "description", "id"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "Active loading indicator" } = $$props;
  let { id: id2 = "ccs-" + Math.random().toString(36) } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("small" in $$new_props)
      $$invalidate(0, small = $$new_props.small);
    if ("active" in $$new_props)
      $$invalidate(1, active = $$new_props.active);
    if ("withOverlay" in $$new_props)
      $$invalidate(2, withOverlay = $$new_props.withOverlay);
    if ("description" in $$new_props)
      $$invalidate(3, description = $$new_props.description);
    if ("id" in $$new_props)
      $$invalidate(4, id2 = $$new_props.id);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(5, spinnerRadius = small ? "42" : "44");
    }
  };
  return [small, active, withOverlay, description, id2, spinnerRadius, $$restProps];
}
class Loading extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      small: 0,
      active: 1,
      withOverlay: 2,
      description: 3,
      id: 4
    });
  }
}
var HeaderAction_svelte_svelte_type_style_lang = "";
var HeaderActionLink_svelte_svelte_type_style_lang = "";
const data = [
  {
    href: "#",
    title: "Test title search 1",
    menu: "Test menu 1",
    description: "This is a description for seach #1"
  },
  {
    href: "#",
    title: "Changing text to simulate search",
    menu: "Test menu 2",
    description: "This is a description for seach #2"
  },
  {
    href: "#",
    title: "More testing texts",
    menu: "Test menu 3",
    description: "This is a description for seach #3"
  },
  {
    href: "#",
    title: "We can find here another test text",
    menu: "Test menu 4",
    description: "This is a description for seach #4"
  }
];
const globalStore = writable(void 0);
({
  subscribe: globalStore.subscribe,
  search: (searchString) => {
    if (searchString.length > 1) {
      let resultSearch = [];
      data.forEach((item) => {
        if (item.title.toLowerCase().includes(searchString.toLowerCase())) {
          resultSearch.push(item);
        }
      });
      if (resultSearch.length > 0) {
        globalStore.set(resultSearch);
      } else {
        globalStore.set(void 0);
      }
    } else {
      globalStore.set(void 0);
    }
  },
  clear: () => {
    globalStore.set(void 0);
  }
});
var HeaderActionSearch_svelte_svelte_type_style_lang = "";
var HeaderPanelDivider_svelte_svelte_type_style_lang = "";
var HeaderSearch_svelte_svelte_type_style_lang = "";
function create_if_block$6(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$6(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$6(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$6(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$6(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$6(ctx);
  let svg_levels = [
    { "data-carbon-icon": "Close16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "Close16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class Close16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var Close16$1 = Close16;
class Selector {
  constructor(value, meta = {}) {
    this.value = value;
    this.meta = meta;
  }
  toJSON() {
    return {
      type: this.getType(),
      meta: this.meta,
      value: this.value
    };
  }
}
class CSSSelector extends Selector {
  select(doc) {
    return Promise.resolve([...doc.querySelectorAll(this.value)]);
  }
  getType() {
    return "css";
  }
}
var Feature;
(function(Feature2) {
  Feature2["command"] = "command";
  Feature2["stream_dom"] = "stream_dom";
  Feature2["state"] = "state";
  Feature2["stream_video"] = "video";
})(Feature || (Feature = {}));
var EventNames;
(function(EventNames2) {
  EventNames2["ALL"] = "all";
  EventNames2["DOM_STREAM"] = "DS";
  EventNames2["WEBRTC_STREAM"] = "WS";
  EventNames2["FRAME_DEL"] = "frame:del";
  EventNames2["FRAME_NEW"] = "frame:new";
  EventNames2["FRAME_UPDATE"] = "frame:update";
  EventNames2["PAGE_DEL"] = "page:del";
  EventNames2["PAGE_NEW"] = "page:new";
  EventNames2["VIEWPORT"] = "viewport";
  EventNames2["MSG_EVENT"] = "EV";
  EventNames2["MSG_REQUEST"] = "RQ";
  EventNames2["MSG_RESPONSE"] = "RS";
  EventNames2["MSG_STATE"] = "ST";
  EventNames2["NET_RESPONSE"] = "NETRS";
})(EventNames || (EventNames = {}));
var StreamTypes;
(function(StreamTypes2) {
  StreamTypes2["AUDIO"] = "audio";
  StreamTypes2["VIDEO"] = "video";
  StreamTypes2["CANVAS"] = "canvas";
})(StreamTypes || (StreamTypes = {}));
var SignalEvent;
(function(SignalEvent2) {
  SignalEvent2["STREAM_VIDEO"] = "stream-video";
  SignalEvent2["MAP_ELEMENT"] = "map-element";
  SignalEvent2["ADD_PEER"] = "add-peer";
  SignalEvent2["CLIENT_CANDIDATE"] = "client-candidate";
  SignalEvent2["CLIENT_DESCRIPTION"] = "client-description";
  SignalEvent2["SERVER_CANDIDATE"] = "server-candidate";
  SignalEvent2["SERVER_DESCRIPTION"] = "server-description";
  SignalEvent2["REMOVE_PEER"] = "remove-peer";
  SignalEvent2["DISCONNECT_ALL"] = "disconnect-all";
})(SignalEvent || (SignalEvent = {}));
var DiffOp;
(function(DiffOp2) {
  DiffOp2[DiffOp2["DEL"] = -1] = "DEL";
  DiffOp2[DiffOp2["INS"] = 1] = "INS";
  DiffOp2[DiffOp2["NOOP"] = 0] = "NOOP";
})(DiffOp || (DiffOp = {}));
var DocumentContentType;
(function(DocumentContentType2) {
  DocumentContentType2["JSON"] = "application/json";
  DocumentContentType2["HTML"] = "text/html";
})(DocumentContentType || (DocumentContentType = {}));
function id$1(prefix = "", seed = 0) {
  return () => `${prefix}${seed++}`;
}
class EventEmitter {
  constructor() {
    this.__ee_listeners = {};
  }
  emit(name, ...args) {
    (this.__ee_listeners[name] || []).forEach((l) => l(...args));
  }
  off(name, listener) {
    let listeners = this.__ee_listeners[name];
    if (listeners == void 0) {
      listeners = this.__ee_listeners[name] = [];
    }
    let index2 = listeners.indexOf(listener);
    while (index2 >= 0) {
      listeners.splice(index2, 1);
      index2 = listeners.indexOf(listener);
    }
    return this;
  }
  on(name, listener) {
    let listeners = this.__ee_listeners[name];
    if (listeners == void 0) {
      listeners = this.__ee_listeners[name] = [];
    }
    listeners.push(listener);
    return this;
  }
  once(name, listener) {
    const l2 = (...args) => {
      this.off(name, l2);
      listener(...args);
    };
    this.on(name, l2);
    return this;
  }
  reset() {
    this.__ee_listeners = [];
  }
  waitForEvent(name, ...selectors) {
    return new Promise((resolve) => {
      const l2 = (...args) => {
        for (let i = 0, length = selectors.length; i < length; i += 1) {
          if (selectors[i] !== args[i]) {
            return;
          }
        }
        resolve(args[0]);
      };
      this.on(name, l2);
    });
  }
}
const CLIENT_VERSION = "2.2.3";
const idFn = id$1("_");
class APIClient extends EventEmitter {
  constructor(options) {
    super();
    this.messageListeners = [];
    this.messageQueue = [];
    this._responseListeners = new Map();
    this.options = options;
    this.onMessage = this.onMessage.bind(this);
    this.onSocketClose = this.onSocketClose.bind(this);
    this.onSocketError = this.onSocketError.bind(this);
    this.onSocketOpen = this.onSocketOpen.bind(this);
    this._isS = !(location.protocol == "http:" && options.host.startsWith("localhost:"));
  }
  addMessageListener(messageListener) {
    this.messageListeners.push(messageListener);
  }
  removeMessageListener(messageListener) {
    let index2 = this.messageListeners.indexOf(messageListener);
    if (index2 >= 0) {
      this.messageListeners.splice(index2, 1);
    }
  }
  close() {
    if (this.socket) {
      this.removeSocketListeners();
      if (this.socket.readyState != WebSocket.CLOSED) {
        this.socket.close(1e3);
      }
    }
  }
  async connect() {
    if (this.socket) {
      this.removeSocketListeners();
    }
    let url;
    if (this.options.host) {
      url = `ws${this._isS ? "s" : ""}://${this.options.host}`;
      let checkReady = this.options.checkReady == void 0 ? true : this.options.checkReady;
      if (checkReady) {
        await this.waitForInstanceToBeReady();
      }
    } else {
      if (this.options.url) {
        console.warn(`Browser-box has deprecated Url as connect option, host can be given as option
 Eg: {host:abc.bbx.net}  `);
      } else {
        console.error(`Host was not given as option, host can be given as option
  Eg: {host:abc.bbx.net}  `);
      }
    }
    this.socket = new WebSocket(url);
    this.addSocketListeners();
  }
  async waitForInstanceToBeReady() {
    let retryCount = 22, ready = false;
    while (retryCount > 0 && !ready) {
      try {
        let res = await this.api("about");
        ready = true;
      } catch (e) {
        console.error("bbx runner not ready?", e);
        await wait$1(2400);
      }
      retryCount--;
    }
    if (!ready) {
      this.emit("socket:error", { message: "Browser server not ready" });
      throw new Error("Browser server not ready");
    }
  }
  addSocketListeners() {
    this.socket.addEventListener("open", this.onSocketOpen);
    this.socket.addEventListener("error", this.onSocketError);
    this.socket.addEventListener("close", this.onSocketClose);
    this.socket.addEventListener("message", this.onMessage);
  }
  removeSocketListeners() {
    this.socket.removeEventListener("open", this.onSocketOpen);
    this.socket.removeEventListener("error", this.onSocketError);
    this.socket.removeEventListener("close", this.onSocketClose);
    this.socket.removeEventListener("message", this.onMessage);
  }
  async api(path, method = "GET", data2 = void 0) {
    let { host, key } = this.options;
    let hasData = !!data2;
    let res = await fetch(`http${this._isS ? "s" : ""}://${host}/${path}`, {
      method,
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "x-auth": key
      },
      body: hasData ? JSON.stringify(data2) : void 0
    });
    switch (res.status) {
      case 200:
        return await res.json();
      case 401:
        throw new Error("Invalid authentication credentials");
      default:
        console.error("invalid response", res);
        throw new Error("Error response received.");
    }
  }
  async call(name, ...args) {
    let id2 = idFn();
    try {
      this.send(JSON.stringify({
        type: EventNames.MSG_REQUEST,
        id: id2,
        name,
        args
      }));
      return this._waitForResponse(id2);
    } catch (e) {
      this.emit("api:error", e);
      throw e;
    }
  }
  async callPup(path, method, ...args) {
    return this.call("pup", path, method, ...args);
  }
  async _waitForResponse(id2) {
    return new Promise((resolve, reject) => {
      this._responseListeners.set(id2, (res) => {
        let err = res.err;
        if (err) {
          reject(res.err);
        } else {
          resolve(res);
        }
      });
    });
  }
  onMessage(msg) {
    let data2 = JSON.parse(msg.data);
    if (data2.type == EventNames.MSG_RESPONSE) {
      this.onResponse(data2);
      return;
    }
    this.messageListeners.forEach((l) => l.onMessage(data2));
  }
  onResponse(response) {
    let { id: id2 } = response;
    let handler = this._responseListeners.get(id2);
    if (handler) {
      this._responseListeners.delete(id2);
      handler(response);
    } else {
      console.error("Unhandled response", response);
      throw new Error("Unhandled response: " + id2);
    }
  }
  onSocketClose(e) {
    this.emit("socket:close", { code: e.code });
  }
  onSocketError(e) {
    this.emit("socket:error");
  }
  async onSocketOpen(e) {
    await this.register();
    this.messageQueue.forEach((msg) => this.send(msg));
    this.messageQueue = [];
  }
  async register() {
    let data2 = {
      features: this.options.features,
      key: this.options.key,
      clientVersion: CLIENT_VERSION,
      allowJSON: true
    };
    await this.call("register", data2);
  }
  send(msg) {
    let socket = this.socket;
    if (socket && socket.readyState == WebSocket.OPEN) {
      this.socket.send(msg);
    } else {
      this.messageQueue.push(msg);
    }
  }
}
async function wait$1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function connect(options) {
  let apiClient = new APIClient(options);
  apiClient.connect();
  return apiClient;
}
class Base$1 extends EventEmitter {
  constructor(caller, id2) {
    super();
    this.caller = caller;
    this.id = id2;
  }
  async call(method, ...args) {
    this.emit("call", this, { method, args });
    return this.caller.call(this.getPath(), method, ...args);
  }
  getPath() {
    let parent2 = this.getParent();
    let path = parent2 ? parent2.getPath() : [];
    path.push(this.getNodeId());
    return path;
  }
}
class Frame extends Base$1 {
  constructor(page, state) {
    super(page.caller, state.id);
    this.page = page;
  }
  getIndex() {
    return this.page.frames.indexOf(this);
  }
  getNodeId() {
    return { name: "frame", id: this.id };
  }
  getParent() {
    return this.page;
  }
  isMain() {
    return this.page.mainFrame == this;
  }
  update(state) {
    Object.assign(this, state);
    this.emit("change", state);
  }
}
class Page extends Base$1 {
  constructor(browser, state) {
    super(browser.caller, state.id);
    this.frames = [];
    this.browser = browser;
    for (let i = 0; i < state.frames.length; i += 1) {
      let frame = new Frame(this, state.frames[i]);
      this.frames.push(frame);
    }
    this.mainFrame = this.frames[0];
    this.mainFrame.on("change", (e) => this.emit("change", e));
  }
  addFrame(state) {
    let frame = new Frame(this, state);
    this.frames.push(frame);
    this.emit("frameadded", frame);
    return frame;
  }
  delFrame(frameId) {
    let frame = this.getFrame(frameId);
    if (frame) {
      let index2 = this.frames.indexOf(frame);
      this.frames.splice(index2, 1);
      this.emit("framedetached", frame);
    } else {
      console.warn("warn: failed to delete frame");
    }
    return frame;
  }
  async close() {
    return this.call("close");
  }
  async goto(url, options) {
    return this.call("goto", ...arguments);
  }
  async trigger(name, params2) {
    this.emit("trigger", name, params2);
    return this.browser.call("trigger", this.id, name, params2);
  }
  getFrame(frameId) {
    let frames = this.frames;
    let len = frames.length;
    for (let i = 0; i < len; i += 1) {
      let frame = frames[i];
      if (frame.id == frameId) {
        return frame;
      }
    }
  }
  getNodeId() {
    return { name: "page", id: this.id };
  }
  getParent() {
    return this.browser;
  }
}
class Browser extends Base$1 {
  constructor(caller, state) {
    super(caller, "0");
    this.pages = [];
    for (let i = 0; i < state.pages.length; i += 1) {
      this.pages.push(new Page(this, state.pages[i]));
    }
    this.viewport = state.viewport;
  }
  async newPage() {
    let res = await this.call("newPage");
    let pageState = res.data;
    let page = this.getPage(pageState.id);
    if (page) {
      return page;
    }
    return await this.waitForEvent("pageadded");
  }
  onNewPage(state) {
    let page = new Page(this, state);
    this.pages.push(page);
    this.emit("pageadded", page);
    return page;
  }
  onDelPage(pageId) {
    let page = this.getPage(pageId);
    if (page) {
      let index2 = this.pages.indexOf(page);
      this.pages.splice(index2, 1);
      this.emit("pagedeleted", page);
    } else {
      console.warn("warn: failed to delete page");
    }
    return page;
  }
  onViewport(viewport) {
    this.viewport = viewport;
    this.emit("viewport", viewport);
  }
  getNodeId() {
    return { name: "browser", id: this.id };
  }
  getPage(id2) {
    let pages = this.pages;
    let len = pages.length;
    for (let i = 0; i < len; i += 1) {
      let page = pages[i];
      if (page.id == id2) {
        return page;
      }
    }
  }
  getParent() {
    return null;
  }
}
class StoreManager extends EventEmitter {
  constructor(apiClient) {
    super();
    this._domStreamListeners = [];
    this._webrtcStreamListeners = [];
    this.apiClient = apiClient;
    this.apiClient.addMessageListener(this);
  }
  addDOMStreamListener(listener) {
    this._domStreamListeners.push(listener);
  }
  removeDOMStreamListener(listener) {
    let index2 = this._domStreamListeners.indexOf(listener);
    while (index2 >= 0) {
      this._domStreamListeners.splice(index2, 1);
      index2 = this._domStreamListeners.indexOf(listener);
    }
  }
  addWEBRTCStreamListener(listener) {
    this._webrtcStreamListeners.push(listener);
  }
  removeWEBRTCStreamListener(listener) {
    let index2 = this._webrtcStreamListeners.indexOf(listener);
    while (index2 >= 0) {
      this._webrtcStreamListeners.splice(index2, 1);
      index2 = this._webrtcStreamListeners.indexOf(listener);
    }
  }
  onMessage(data2) {
    let { type } = data2;
    switch (type) {
      case EventNames.MSG_EVENT:
        this.onEvent(data2);
        break;
      case EventNames.MSG_STATE:
        this.onState(data2.data);
        break;
    }
  }
  onEvent(event) {
    let { name, data: data2 } = event;
    let obj;
    switch (name) {
      case EventNames.WEBRTC_STREAM: {
        let [pageId2, frameId2, peerId, webrtcEvent] = data2;
        const webrtcData = JSON.parse(webrtcEvent);
        this._webrtcStreamListeners.forEach(async (l) => await l.onWEBRTCEvent(pageId2, frameId2, peerId, webrtcData));
        let frame2 = this.browser.getPage(pageId2).getFrame(frameId2);
        frame2.emit(EventNames.WEBRTC_STREAM, webrtcData);
        break;
      }
      case EventNames.DOM_STREAM:
        let [pageId, frameId, domEvent] = data2;
        this._domStreamListeners.forEach((l) => l.onDOMEvent(pageId, frameId, domEvent));
        let page = this.browser.getPage(pageId);
        let frame = obj = page.getFrame(frameId);
        frame.emit(EventNames.DOM_STREAM, domEvent);
        break;
      case EventNames.FRAME_DEL: {
        let [pageId2, frameId2] = data2;
        let page2 = obj = this.browser.getPage(pageId2);
        page2.delFrame(frameId2);
        break;
      }
      case EventNames.FRAME_NEW: {
        let [pageId2, frameState] = data2;
        let page2 = this.browser.getPage(pageId2);
        obj = page2.addFrame(frameState);
        break;
      }
      case EventNames.FRAME_UPDATE: {
        let [pageId2, frameState] = data2;
        let page2 = this.browser.getPage(pageId2);
        let frame2 = obj = page2.getFrame(frameState.id);
        frame2.update(frameState);
        break;
      }
      case EventNames.PAGE_DEL: {
        let [pageId2] = data2;
        obj = this.browser.onDelPage(pageId2);
        break;
      }
      case EventNames.PAGE_NEW: {
        let [pageState] = data2;
        obj = this.browser.onNewPage(pageState);
        break;
      }
      case EventNames.VIEWPORT: {
        let [viewport] = data2;
        this.browser.onViewport(viewport);
        obj = this.browser;
        break;
      }
      default:
        console.warn("Unhandled event:", name, data2);
    }
    this.emit("bbx", name, obj, data2);
  }
  onState(state) {
    this.browser = new Browser(this, state);
    this.emit("ready");
  }
  async call(path, method, ...args) {
    this.emit("api", path, method, ...args);
    return await this.apiClient.callPup(getNodePath(path), method, ...args);
  }
}
function getNodePath(nodes) {
  return nodes.map((node2) => node2.id).join("/");
}
function debounce(func, wait2, immediate = false) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait2);
    if (callNow)
      func.apply(context, args);
  };
}
function findPath(child, pathArr = []) {
  let parent2 = child.parentElement;
  if (parent2 === null) {
    pathArr.reverse();
    return pathArr;
  }
  let childList = parent2.childNodes;
  let index2;
  for (let i = 0; i < childList.length; ++i) {
    if (childList[i] === child) {
      index2 = i;
      break;
    }
  }
  pathArr.push(index2);
  return findPath(parent2, pathArr);
}
function getNode(path, doc) {
  let next = doc.documentElement;
  for (let i = 0, len = path.length; i < len; i++) {
    let ind = path[i], child;
    if (ind == -1) {
      child = next.shadowRoot;
    } else {
      child = next.childNodes[path[i]];
    }
    if (!child) {
      throw new Error(`Failed to find node at: ${i} for path: ${path}. Last parent found is: ${next.nodeName}`);
    }
    next = child;
  }
  return next;
}
function createElement(node2, parentNamespace) {
  if (!!node2[4]) {
    if (node2[4] === "http://www.w3.org/1999/xhtml") {
      return document.createElementNS(node2[4], node2[1].toLowerCase());
    }
    return document.createElementNS(node2[4], node2[1]);
  } else if (!!parentNamespace && parentNamespace.length > 0) {
    if (parentNamespace === "http://www.w3.org/1999/xhtml") {
      return document.createElementNS(parentNamespace, node2[1].toLowerCase());
    }
    return document.createElementNS(parentNamespace, node2[1]);
  } else {
    return document.createElement(node2[1].toLowerCase());
  }
}
function setAttributes(elem, attributes) {
  for (let i = 0; !!attributes && i < attributes.length; i++) {
    let attribute = attributes[i];
    setAttribute(attribute, elem);
  }
}
function setAttribute(attribute, elem) {
  let keys = Object.keys(attribute);
  let namespace, qualifiedName, value;
  try {
    if (!!keys && keys.length === 2) {
      if (keys[0] === "namespaceURI") {
        namespace = attribute[keys[0]];
        qualifiedName = keys[1];
        value = attribute[keys[1]];
      } else {
        namespace = attribute[keys[1]];
        qualifiedName = keys[0];
        value = attribute[keys[0]];
      }
      elem.setAttributeNS(namespace, qualifiedName, value);
    } else if (keys.length === 1) {
      qualifiedName = keys[0];
      value = attribute[keys[0]];
      elem.setAttribute(qualifiedName, value);
    }
  } catch (err) {
    if (namespace) {
      console.error("error while setting attributesNs", namespace, qualifiedName, value);
    } else {
      console.error("error while setting attributes", qualifiedName, value);
    }
  }
}
function appendDOM(elem, child) {
  if (child) {
    if (elem.nodeType === Node.COMMENT_NODE) {
      if (child.nodeType === Node.TEXT_NODE) {
        elem.nodeValue += child.nodeValue;
      }
    } else {
      elem.appendChild(child);
    }
  }
}
function patch(elem, jsonNode) {
  let childNodes = jsonNode[3];
  for (let i = 0; !!childNodes && i < childNodes.length; i++) {
    if (!!childNodes[i]) {
      appendDOM(elem, toDOM(childNodes[i], elem.namespaceURI));
    }
  }
  let attributes = jsonNode[2];
  if (!!attributes && attributes.length > 0) {
    setAttributes(elem, attributes);
  }
  return elem;
}
function toDOM(jsonNode, parentNamespace) {
  if (!jsonNode) {
    return null;
  }
  if (jsonNode[0] === Node.TEXT_NODE) {
    jsonNode = jsonNode;
    return document.createTextNode(jsonNode[1]);
  }
  if (jsonNode[0] === Node.CDATA_SECTION_NODE) {
    jsonNode = jsonNode;
    return document.createCDATASection(jsonNode[1]);
  }
  if (jsonNode[0] === Node.COMMENT_NODE) {
    jsonNode = jsonNode;
    return document.createComment(jsonNode[1]);
  }
  jsonNode = jsonNode;
  return patch(createElement(jsonNode, parentNamespace), jsonNode);
}
function parseHTML(documentContent, doc = document) {
  let node2;
  if (typeof documentContent == "string") {
    let parser = new DOMParser();
    node2 = parser.parseFromString(documentContent, "text/html").documentElement;
  } else if (documentContent.type === DocumentContentType.JSON) {
    node2 = toDOM(documentContent.content, null);
  }
  if (node2.nodeType === Node.ELEMENT_NODE) {
    let el = node2;
    revertTextNodes(el);
  }
  return node2;
}
function parseHTMLFrag(documentContent, doc) {
  let node2;
  if (typeof documentContent == "string") {
    node2 = parseHTMLUsingTemplate(documentContent, doc);
  } else if (documentContent.type === DocumentContentType.JSON) {
    node2 = toDOM(documentContent.content, null);
  }
  if (node2.nodeType == doc.ELEMENT_NODE) {
    revertTextNodes(node2);
  }
  return node2;
}
function parseHTMLUsingTemplate(html2, doc) {
  if (html2[0] == "#") {
    return doc.createTextNode(html2.slice(1));
  }
  if (html2.slice(0, 4) == "<!--") {
    return doc.createComment("");
  }
  const template = doc.createElement("template");
  template.innerHTML = html2;
  let clone = doc.importNode(template.content, true);
  return clone.childNodes[0];
}
function revertTextNodes(el) {
  const elTextNodes = Array.from(el.querySelectorAll("text-node"));
  for (let i = 0, len = elTextNodes.length; i < len; i += 1) {
    const tEl = elTextNodes[i];
    tEl.replaceWith(document.createTextNode(tEl.innerHTML));
  }
}
function applyPatch(doc, path, diffs) {
  let currentInd = 0;
  const parentNode = getNode(path, doc);
  if (!parentNode) {
    throw new Error("Failed to find node for path: " + JSON.stringify(path));
  }
  diffs.forEach((diff) => {
    diff[0];
    switch (diff[0]) {
      case DiffOp.NOOP: {
        let count = diff[1];
        currentInd += count;
        break;
      }
      case DiffOp.DEL: {
        diff[1];
        for (let _i = 0; _i < diff[1]; _i++) {
          parentNode.childNodes[currentInd].remove();
        }
        break;
      }
      case DiffOp.INS: {
        let nodes = diff[1];
        let refNode = parentNode.childNodes[currentInd];
        for (let _i = 0; _i < nodes.length; _i++) {
          let newNode = parseHTMLFrag(nodes[_i], doc);
          parentNode.insertBefore(newNode, refNode);
        }
        currentInd += nodes.length;
        break;
      }
      default:
        throw new Error();
    }
  });
}
class WebrtcClient extends EventEmitter {
  constructor(peerId, frame, rtcConfig) {
    super();
    this._rtcEvents = [];
    this.rtcConfig = {
      "iceServers": [{
        "urls": "stun:stun.l.google.com:19302"
      }],
      "sdpSemantics": "unified-plan"
    };
    this.peerId = peerId;
    this.frame = frame;
    this.controllers = new Map();
    if (rtcConfig)
      this.rtcConfig = rtcConfig;
  }
  getId() {
    return this.peerId;
  }
  addPeer() {
    this.peer = new RTCPeerConnection(this.rtcConfig);
    this.peer.ontrack = (event) => {
      const controllers = this.controllers.get(event.streams[0].id);
      if (!controllers.isTrackEmpty()) {
        controllers.initializeTrack(event);
      } else {
        controllers.appendTrack(event);
      }
    };
    this.peer.oniceconnectionstatechange = () => {
      if (this.peer.iceConnectionState === "disconnected") {
        this.removePeer();
      }
    };
    this.peer.onnegotiationneeded = async () => {
    };
    this.trigger(SignalEvent.ADD_PEER, {
      id: this.peerId,
      initiator: false,
      frameId: this.frame.store.id
    });
  }
  removePeer() {
    this.peer.close();
  }
  clientCandidate(ev) {
    if (ev.candidate) {
      this.trigger(SignalEvent.CLIENT_CANDIDATE, {
        id: this.peerId,
        initiator: false,
        candidate: ev.candidate,
        frameId: this.frame.store.id
      });
    }
  }
  clientDescription(sdp) {
    this.trigger(SignalEvent.CLIENT_DESCRIPTION, {
      id: this.peerId,
      initiator: false,
      sdp,
      frameId: this.frame.store.id
    });
  }
  async serverCandidate(candidate) {
    if (candidate) {
      await this.peer.addIceCandidate(candidate);
      this.peer.onicecandidate = this.clientCandidate.bind(this);
    }
  }
  async serverDescription(sdp) {
    if (sdp) {
      await this.peer.setRemoteDescription(sdp);
      const answer = await this.peer.createAnswer();
      await this.peer.setLocalDescription(answer);
      this.clientDescription(answer);
    }
  }
  mapElementWithStream(event) {
    try {
      let element2 = getNode(event.path, this.frame.getDoc());
      if (event.mappingType === StreamTypes.CANVAS) {
        const canvasController = new CanvasController(event.mappedId, this.frame, element2);
        this.controllers.set(event.mappedId, canvasController);
      } else if (event.mappingType === StreamTypes.VIDEO) {
        const videoController = new VideoController(event.mappedId, this.frame, element2);
        this.controllers.set(event.mappedId, videoController);
      } else if (event.mappingType === StreamTypes.AUDIO) {
        const audioController = new AudioController(event.mappedId, this.frame, element2);
        this.controllers.set(event.mappedId, audioController);
      }
    } catch (e) {
      console.error("stream element not found ", e);
    }
  }
  trigger(name, params2) {
    this.frame.triggerSignallingServer(name, params2);
  }
  async onWEBRTCEvent(peerId, event) {
    if (peerId !== this.peerId)
      return;
    if (event.initiator) {
      switch (event.name) {
        case SignalEvent.SERVER_CANDIDATE: {
          await this.serverCandidate(event.candidate);
          break;
        }
        case SignalEvent.SERVER_DESCRIPTION: {
          await this.serverDescription(event.sdp);
          break;
        }
        case SignalEvent.MAP_ELEMENT: {
          this.mapElementWithStream(event);
          break;
        }
      }
    }
  }
}
class StreamController {
  constructor(frame) {
    this.frame = frame;
    this.istrackInitialized = false;
  }
}
class VideoController extends StreamController {
  constructor(streamId, frame, element2) {
    super(frame);
    this.streamId = streamId;
    this.video = element2;
  }
  getController(id2) {
    return this;
  }
  isTrackEmpty() {
    return this.istrackInitialized;
  }
  initializeTrack(event) {
    this.video.srcObject = event.streams[0];
    this.video.addEventListener("loadeddata", () => {
      if (this.video.readyState == 4) {
        this.video.muted = true;
        this.video.autoplay = true;
        this.video.play();
      }
    });
    this.video.addEventListener("playing", (ev) => {
      this.video.muted = false;
    });
    this.video.onerror = (e) => {
      console.error("error ", e);
    };
    this.istrackInitialized = true;
  }
  appendTrack(event) {
    if (event.track.kind === "audio") {
      this.video.srcObject.addTrack(event.track);
      this.video.srcObject.getAudioTracks().forEach((audioTrack) => {
        if (audioTrack.id !== event.track.id) {
          this.video.srcObject.removeTrack(audioTrack);
        }
      });
    } else {
      this.video.srcObject.addTrack(event.track);
      this.video.srcObject.getVideoTracks().forEach((videoTrack) => {
        if (videoTrack.id !== event.track.id)
          this.video.srcObject.removeTrack(videoTrack);
      });
    }
  }
}
class CanvasController extends StreamController {
  constructor(streamId, frame, element2) {
    super(frame);
    this.streamId = streamId;
    this.element = element2;
    this.video = this._getCanvasVideo(this.element);
  }
  getController(id2) {
    return this;
  }
  isTrackEmpty() {
    return this.istrackInitialized;
  }
  initializeTrack(event) {
    this.video.srcObject = event.streams[0];
    this.video.addEventListener("loadeddata", () => {
      if (this.video.readyState == 4) {
        this.video.muted = true;
        this.video.autoplay = true;
        this.video.play();
      }
    });
    this.video.onerror = (e) => {
      console.error("error ", e);
    };
    this.istrackInitialized = true;
  }
  appendTrack(event) {
    if (event.track.kind === "audio") {
      this.video.srcObject.addTrack(event.track);
      this.video.srcObject.getAudioTracks().forEach((audioTrack) => {
        if (audioTrack.id !== event.track.id) {
          this.video.srcObject.removeTrack(audioTrack);
        }
      });
    } else {
      this.video.srcObject.addTrack(event.track);
      this.video.srcObject.getVideoTracks().forEach((videoTrack) => {
        if (videoTrack.id !== event.track.id)
          this.video.srcObject.removeTrack(videoTrack);
      });
    }
  }
  _getCanvasVideo(canvas) {
    if (canvas) {
      return this._createVideoElement(canvas);
    }
    return;
  }
  _createVideoElement(canvas) {
    const video = document.createElement("video");
    canvas.classList.forEach((value) => video.classList.add(value));
    video.setAttribute("hidden", "true");
    video.setAttribute("loop", "true");
    this.frame.elMeta.appendChild(video);
    video.addEventListener("play", () => {
      const context = canvas.getContext("2d");
      requestAnimationFrame((time) => {
        this._runVideoInCanvas(context, video);
      });
    });
    return video;
  }
  _runVideoInCanvas(context, video) {
    if (video.paused || video.ended) {
      return;
    }
    this._computeFrame(context, video);
    requestAnimationFrame((time) => {
      this._runVideoInCanvas(context, video);
    });
  }
  _computeFrame(context, video) {
    const width = context.canvas.width;
    const height = context.canvas.height;
    context.drawImage(video, 0, 0, width, height);
    return;
  }
}
class AudioController extends StreamController {
  constructor(streamId, frame, element2) {
    super(frame);
    this.streamId = streamId;
    this.audio = element2;
  }
  getController(id2) {
    return this;
  }
  isTrackEmpty() {
    return this.istrackInitialized;
  }
  initializeTrack(event) {
    this.audio.srcObject = event.streams[0];
    this.audio.addEventListener("loadeddata", () => {
      if (this.audio.readyState == 4) {
        this.audio.autoplay = true;
      }
    });
    this.audio.addEventListener("playing", (ev) => {
      this.audio.muted = false;
    });
    this.audio.onerror = (e) => {
      console.error("error ", e);
    };
    this.istrackInitialized = true;
  }
  appendTrack(event) {
    if (event.track.kind === "audio") {
      this.audio.srcObject.addTrack(event.track);
      this.audio.srcObject.getAudioTracks().forEach((audioTrack) => {
        if (audioTrack.id !== event.track.id) {
          this.audio.srcObject.removeTrack(audioTrack);
        }
      });
    } else {
      this.audio.srcObject.addTrack(event.track);
      this.audio.srcObject.getVideoTracks().forEach((videoTrack) => {
        if (videoTrack.id !== event.track.id)
          this.audio.srcObject.removeTrack(videoTrack);
      });
    }
  }
}
var FrameLoadState;
(function(FrameLoadState2) {
  FrameLoadState2[FrameLoadState2["INIT"] = 0] = "INIT";
  FrameLoadState2[FrameLoadState2["LOADING"] = 1] = "LOADING";
  FrameLoadState2[FrameLoadState2["LOADED"] = 2] = "LOADED";
  FrameLoadState2[FrameLoadState2["LOADED_DOCTYPE"] = 3] = "LOADED_DOCTYPE";
  FrameLoadState2[FrameLoadState2["LOADED_DOC"] = 4] = "LOADED_DOC";
})(FrameLoadState || (FrameLoadState = {}));
class FrameView extends EventEmitter {
  constructor(pageView, store) {
    super();
    this._altDown = null;
    this._localFrameLoadState = FrameLoadState.INIT;
    this._events = [];
    this._streamEvents = [];
    this._data = new Map();
    this.pageView = pageView;
    this.store = store;
    this.onFrameLoad = this.onFrameLoad.bind(this);
    this.elMeta = this.createMetaElement();
    this.streamMap = new Map();
    this._listeners = {
      blur: (e) => this.onBlur(e),
      mousedown: this.dispatchEvent("mousedown", "button"),
      mouseup: this.dispatchEvent("mouseup", "button"),
      mousemove: (e) => this.dispatchEventMousemove(e),
      keydown: this.dispatchEvent("keydown", "code", "keyCode"),
      keyup: this.dispatchEvent("keyup", "code", "keyCode"),
      wheel: (e) => this.dispatchEventWheel(e),
      change: (e) => this.dispatchEventChange(e),
      input: (e) => this.dispatchEventInput(e),
      scroll: (e) => this.dispatchEventScroll(e),
      click: (e) => {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  }
  onBlur(e) {
    if (!!this._altDown) {
      this.trigger("keyup", {
        code: this._altDown,
        keyCode: 18
      }, this.getDoc().documentElement);
      this._altDown = null;
    }
  }
  addDocListeners() {
    const doc = this.getDoc();
    if (!doc) {
      console.error("FIXME trying to add listener for null document");
      return;
    }
    for (let name in this._listeners) {
      doc.addEventListener(name, this._listeners[name], true);
    }
  }
  appendHost() {
    this.getDoc().documentElement.appendChild(this.elMeta);
  }
  removeHost() {
    this.getDoc().documentElement.removeChild(this.elMeta);
  }
  createMetaElement() {
    if (!customElements.get("bbx-d")) {
      customElements.define("bbx-d", class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
      });
    } else {
      console.warn("a copy of @bbx/client has already been loaded; loading different versions can result in conflicts");
    }
    const elMeta = document.createElement("bbx-d");
    return elMeta;
  }
  destroy() {
    if (this._localFrameLoadState == FrameLoadState.LOADING) {
      this.removeDocListners();
    }
    this.elMeta.remove();
    this.emit("destroy");
    this.reset();
  }
  _dispatchEventMousemove(el, x, y) {
    if (el != this._currentMouseTarget) {
      this.dispatchEventMouseover(el);
    }
    const offset = this.getFrameOffset();
    this.trigger("mousemove", {
      path: findPath(el),
      clientX: x + offset[0],
      clientY: y + offset[1],
      frameId: this.store.id
    }, el);
    this._currentMouseTarget = el;
  }
  dispatchEventMousemove(e) {
    this._dispatchEventMousemove(e.target, e.clientX, e.clientY);
  }
  dispatchEventMousemove2(selector2, x, y) {
    let doc = this.getDoc();
    let el = doc.querySelector(selector2);
    this._dispatchEventMousemove(el, x, y);
  }
  getClientR(el) {
    if (el.nodeType != document.ELEMENT_NODE) {
      return null;
    }
    let bcr = el.getBoundingClientRect();
    let offset = this.frameOffSet(this.elFrame, this.store.parentId);
    return {
      top: bcr.top + offset.top,
      left: bcr.left + offset.left,
      bottom: bcr.bottom + offset.top,
      right: bcr.right + offset.left
    };
  }
  frameOffSet(el, parentId) {
    let mainFrameOffset = {
      top: 0,
      left: 0
    };
    let offset = this.pageView.elMainFrame == el ? mainFrameOffset : el.getBoundingClientRect();
    if (!parentId) {
      return offset;
    }
    let parentView = this.pageView.getFrame(parentId);
    let parentFrame = parentView.elFrame;
    parentId = parentView.store.parentId;
    return this.addRect(offset, this.frameOffSet(parentFrame, parentId));
  }
  addRect(a, b) {
    return {
      left: a.left + b.left,
      top: a.top + b.top
    };
  }
  dispatchEventMouseover(el) {
    this.trigger("syncsize", {
      path: findPath(el),
      rect: this.getClientR(el),
      frameId: this.store.id
    }, el);
  }
  dispatchEventChange(e) {
    let path;
    let value;
    let el = e.target;
    let name = "change";
    if (el.tagName == "INPUT") {
      let inputTarget = el;
      if (inputTarget.type == "date" || inputTarget.type == "text" || inputTarget.type == "password" || inputTarget.type == "email") {
        path = findPath(inputTarget);
        value = inputTarget.value;
      }
    } else if (el.tagName == "SELECT") {
      let selectTarget = el;
      path = findPath(selectTarget);
      value = selectTarget.value;
      name = "select";
    }
    this.trigger(name, {
      path,
      value,
      frameId: this.store.id
    }, el);
  }
  dispatchEventChange2(selector2, value) {
    let doc = this.getDoc();
    let el = doc.querySelector(selector2);
    this.trigger(el.tagName == "SELECT" ? "select" : "change", {
      path: findPath(el),
      value,
      frameId: this.store.id
    }, el);
  }
  dispatchEventInput(e) {
    let path;
    let value;
    let target = e.target;
    if (target.tagName == "INPUT") {
      path = findPath(target);
      value = target.value;
    }
    this.trigger("input", {
      path,
      value,
      frameId: this.store.id
    }, target);
  }
  _dispatchEventScroll(el) {
    let event = {
      path: findPath(el),
      top: el.scrollTop,
      left: el.scrollLeft,
      frameId: this.store.id
    };
    this.trigger("scroll", event, el);
  }
  dispatchEventScroll(e) {
    let el;
    let target = e.target;
    if (target.nodeType == document.DOCUMENT_NODE) {
      el = target.scrollingElement;
    } else {
      el = target;
    }
    this._dispatchEventScroll(el);
  }
  dispatchEventScroll2(selector2, left, top) {
    let el = this.getDoc().querySelector(selector2);
    el.scrollTo(left, top);
    this._dispatchEventScroll(el);
  }
  dispatchEventWheel(e) {
    let scrollEvent = e;
    let target = e.target;
    const offset = this.getFrameOffset();
    if (target.documentElement) {
      target = target.scrollingElement;
    }
    this.trigger("wheel", {
      deltaX: scrollEvent.deltaX,
      deltaY: scrollEvent.deltaY,
      path: findPath(target),
      x: scrollEvent.x + offset[0],
      y: scrollEvent.y + offset[1],
      frameId: this.store.id
    }, target);
  }
  dispatchEvent(name, ...keys) {
    if (keys.length == 0)
      console.log(name);
    return (e) => {
      let target = e.target;
      if (target.tagName !== "SELECT" && name != "wheel") {
        e.preventDefault();
        e.stopPropagation();
      }
      let params2 = {};
      keys.forEach((key) => params2[key] = e[key]);
      params2.frameId = this.store.id;
      if (name == "keydown") {
        if (params2.code == "AltLeft" || params2.code == "AltRight") {
          this._altDown = params2.code;
        }
      }
      if (!((name == "keyup" || name == "keydown") && !params2.keyCode)) {
        this.trigger(name, params2, target);
      } else {
        console.error("Chrome bug!");
      }
    };
  }
  getDoc() {
    return this.elFrame.contentDocument;
  }
  getMetaEl() {
    return this.elMeta;
  }
  getFrameOffset() {
    return this.pageView.getOffset(this.elFrame);
  }
  getNode(path) {
    return getNode(path, this.getDoc());
  }
  getState() {
    return this._localFrameLoadState;
  }
  isDocReady() {
    return this.getState() == FrameLoadState.LOADED_DOC;
  }
  on_change_attributes({ path, patch: patch2 }) {
    let el = getNode(path, this.getDoc());
    if (!patch2.ns) {
      if (patch2.value === null) {
        el.removeAttribute(patch2.name);
      } else {
        el.setAttribute(patch2.name, patch2.value);
      }
    } else {
      if (patch2.value === null) {
        el.removeAttributeNS(patch2.ns, patch2.name);
      } else {
        el.setAttributeNS(patch2.ns, patch2.name, patch2.value);
      }
    }
  }
  on_change_childlist({ path, patches }) {
    const canAffectHost = path.length == 1;
    canAffectHost && this.removeHost();
    try {
      applyPatch(this.getDoc(), path, patches);
    } finally {
      canAffectHost && this.appendHost();
    }
  }
  on_change_checked({ path, checked }) {
    let input = getNode(path, this.getDoc());
    input.checked = checked;
  }
  on_change_value({ path, value }) {
    let dateInput = getNode(path, this.getDoc());
    dateInput.value = value;
  }
  on_change_text({ path, patch: patch2 }) {
    let node2 = getNode(path, this.getDoc());
    node2.nodeValue = patch2;
  }
  on_bbx_debug({ value }) {
    console.log("ignored on_bbx_debug");
  }
  on_bbx_debug_default({ value }) {
    console.log("on_bbx_debug", new Date(), "start comparing HTML", this.store.id);
    let nodeFromServer = parseHTML(value);
    if (nodeFromServer.nodeType === Node.ELEMENT_NODE) {
      let elementFromServer = nodeFromServer;
      let elementFromClient = this.getDoc().documentElement.cloneNode(true);
      let styleElements = elementFromClient.querySelectorAll("style");
      for (let i = 0; i < styleElements.length; i++) {
        styleElements[i].textContent = "";
      }
      let metaElements = elementFromClient.querySelectorAll("meta");
      for (let i = 0; i < metaElements.length; i++) {
        metaElements[i].outerHTML = "<meta/>";
      }
      let bbxElements = elementFromClient.querySelectorAll("bbx-d");
      for (let i = 0; i < bbxElements.length; i++) {
        bbxElements[i].remove();
      }
      styleElements = elementFromServer.querySelectorAll("style");
      for (let i = 0; i < styleElements.length; i++) {
        styleElements[i].textContent = "";
      }
      metaElements = elementFromServer.querySelectorAll("meta");
      for (let i = 0; i < metaElements.length; i++) {
        metaElements[i].outerHTML = "<meta/>";
      }
      const isEqual = elementFromServer.isEqualNode(elementFromClient);
      if (!isEqual) {
        console.log("on_bbx_debug", new Date(), "end comparing HTML", this.store.id, "isEqual", isEqual, elementFromClient.outerHTML === elementFromServer.outerHTML);
        this.pageView.browserView.manager.emit("frame_content_mismatch", elementFromClient, elementFromServer);
      }
    } else {
      console.error("on_bbx_debug", "Invalid Node sent from server");
    }
  }
  on_document({ value }) {
    this.setState(FrameLoadState.LOADED_DOC);
    const doc = this.getDoc();
    doc.documentElement.replaceWith(parseHTML(value, doc));
    this.appendHost();
    this._streamEvents.forEach(async (stream, index2) => {
      await this.addPeerToFrame(stream);
    });
    this._streamEvents = [];
    this.emit("document_ready", this);
    this.on_bbx_debug = this.on_bbx_debug_default;
  }
  on_document_start({ doctype }) {
    this.setState(FrameLoadState.LOADING);
    let html2 = (doctype ? `<!doctype ${doctype}>` : "") + "<html><body></body></html>";
    this.elFrame.setAttribute("srcdoc", html2);
    this.appendHost();
  }
  on_shadow_root({ path, value }) {
    let el = getNode(path, this.getDoc());
    if (!el.shadowRoot) {
      el.attachShadow({ mode: "open" });
    }
  }
  on_text_patch({ path, diff }) {
    let el = getNode(path, this.getDoc());
    let oldStr = el.nodeValue;
    let newStr = this.apply_text_patch(oldStr, diff);
    el.nodeValue = newStr;
  }
  apply_text_patch(oldStr, diff) {
    let result = "";
    let currentInd = 0;
    diff.forEach((d) => {
      switch (d[0]) {
        case DiffOp.NOOP:
          let subStr = oldStr.slice(currentInd, currentInd + d[1]);
          result = result + subStr;
          currentInd = currentInd + d[1];
          break;
        case DiffOp.DEL:
          currentInd = currentInd + d[1];
          break;
        case DiffOp.INS:
          result = result + d[1];
          break;
      }
    });
    return result;
  }
  on_focus({ path }) {
    let el = getNode(path, this.getDoc());
    el.focus();
  }
  on_frame_src({ path, childFrameId }) {
    let childFrameView = this.pageView.getFrame(childFrameId);
    let iframe = getNode(path, this.getDoc());
    if (!iframe || iframe.nodeName != "IFRAME") {
      console.error("on_frame_src", path, childFrameId, iframe);
      throw new Error("on_frame_src: mismatched path to iframe");
    }
    if (childFrameView)
      childFrameView.setIFrame(iframe);
  }
  on_input({ path, value }) {
    let el = getNode(path, this.getDoc());
    el.value = value;
  }
  on_navigated({ doctype }) {
    this.emit("navigated");
  }
  on_select_input({ path, start: start2, end }) {
    let el = getNode(path, this.getDoc());
    if (!el.type || el.type == "text" || el.type == "search" || el.type == "url" || el.type == "tel" || el.type == "password") {
      el.setSelectionRange(start2, end);
    }
  }
  on_select_range({ ranges }) {
    const doc = this.getDoc();
    const s = doc.getSelection();
    s.empty();
    ranges.forEach((rangeObj) => {
      let range = doc.createRange();
      let { start: start2, end } = rangeObj;
      range.setStart(getNode(start2[0], doc), start2[1]);
      range.setEnd(getNode(end[0], doc), end[1]);
      s.addRange(range);
    });
  }
  on_scroll(event) {
    let path = event.path;
    let el = getNode(path, this.getDoc());
    let fn = this.getDebouncedFunction(el, "scroll", this.on_scroll_deb, 300);
    fn(event);
  }
  on_scroll_deb(elScroll, event) {
    let left = event.left;
    let top = event.top;
    elScroll.scrollTo(left, top);
  }
  getDebouncedFunction(el, name, func, wait2) {
    let fns = el.__fns || (el.__fns = {});
    let fn = fns[name];
    if (!fn) {
      fn = debounce((event) => func.call(this, el, event), wait2);
      fns[name] = fn;
    }
    return fn;
  }
  onDOMEvent(_a) {
    var _b = _a, { name } = _b, event = __objRest(_b, ["name"]);
    if (name != "navigated" && !this._isReadyForEvents(name)) {
      this._events.push(__spreadValues({ name }, event));
      return;
    }
    name = name.replace(/:/g, "_");
    let method = `on_${name}`;
    if (this[method]) {
      this[method](event);
      this.emit(name, event, this);
      this.emit("bbx", name, event, this);
    } else {
      console.warn("TODO: unhandled event:", this.store.id, name, event);
    }
  }
  async onWEBRTCEvent(peerId, event) {
    if (event.name === SignalEvent.STREAM_VIDEO) {
      await this.addPeerToFrame(event);
      return;
    }
    await this.webrtcClient.onWEBRTCEvent(peerId, event);
  }
  async addPeerToFrame(event) {
    if (event.name === SignalEvent.STREAM_VIDEO) {
      if (this.webrtcClient) {
        this.webrtcClient.removePeer();
        this.webrtcClient = void 0;
      }
      if (this._isReadyForStreaming()) {
        this.webrtcClient = new WebrtcClient(Math.random().toString(36), this);
        this.webrtcClient.addPeer();
      } else {
        this._streamEvents.push(event);
      }
    }
  }
  _isReadyForEvents(name) {
    if (name == "document_start") {
      return this._localFrameLoadState >= FrameLoadState.LOADED;
    } else {
      return this._localFrameLoadState >= FrameLoadState.LOADED_DOCTYPE;
    }
  }
  _isReadyForStreaming() {
    return this._localFrameLoadState >= FrameLoadState.LOADED_DOC;
  }
  onFrameLoad() {
    this.setState(FrameLoadState.LOADED);
    this.elFrame.removeEventListener("load", this.onFrameLoad);
    this.elFrame.addEventListener("load", (e) => this.onFrameLoadDoctype());
    this.appendHost();
    let eDocStart = this._events.find((e) => e.name == "document_start");
    if (eDocStart) {
      let index2 = this._events.indexOf(eDocStart);
      this._events = this._events.slice(index2 + 1);
      this.onDOMEvent(eDocStart);
    }
  }
  onFrameLoadDoctype() {
    this.setState(FrameLoadState.LOADED_DOCTYPE);
    let pendingEvents = this._events;
    this._events = [];
    let eDoc = pendingEvents.find((e) => e.name == "document");
    if (eDoc) {
      let index2 = pendingEvents.indexOf(eDoc);
      pendingEvents = pendingEvents.slice(index2);
    }
    pendingEvents.forEach((e) => this.onDOMEvent(e));
    this.removeDocListners();
    !this._paused && this.addDocListeners();
    this.appendHost();
    this.emit("ready", this);
  }
  pause() {
    this._paused = true;
    if (this._localFrameLoadState >= FrameLoadState.LOADED_DOCTYPE) {
      this.removeDocListners();
    }
  }
  resume() {
    this._paused = false;
    if (this._localFrameLoadState >= FrameLoadState.LOADED_DOCTYPE) {
      this.addDocListeners();
    }
  }
  removeDocListners() {
    const doc = this.getDoc();
    if (!doc) {
      console.error("FIXME trying to remove listener for null document");
      return;
    }
    for (let name in this._listeners) {
      doc.removeEventListener(name, this._listeners[name], true);
    }
  }
  setState(state) {
    this._localFrameLoadState = state;
  }
  setIFrame(iframe) {
    this.elFrame = iframe;
    if (iframe.contentDocument) {
      this.onFrameLoad();
    } else {
      this.elFrame.addEventListener("load", this.onFrameLoad);
    }
  }
  trigger(name, params2, target) {
    this.pageView.store.trigger(name, params2);
    this.emit("trigger", name, params2, target, this);
  }
  triggerSignallingServer(name, params2) {
    this.pageView.store.browser.call("signalEvent", this.pageView.store.id, name, params2);
  }
  delData(key) {
    return this._data.delete(key);
  }
  getData(key) {
    return this._data.get(key);
  }
  setData(key, value) {
    return this._data.set(key, value);
  }
}
class PageView extends EventEmitter {
  constructor(store, browserView) {
    super();
    this.frameViews = new Map();
    this.overlays = [];
    this.store = store;
    this.browserView = browserView;
    this.onFrameAdded = this.onFrameAdded.bind(this);
    this.onFrameDetached = this.onFrameDetached.bind(this);
    this.addListeners();
    this.mainFrameView = this.onFrameAdded(this.store.mainFrame);
    this.store.frames.slice(1).forEach((frame) => this.onFrameAdded(frame));
    this.elMainFrame = document.createElement("iframe");
    this.elMainFrame.setAttribute("frameborder", "0");
    this.mainFrameView.setIFrame(this.elMainFrame);
  }
  addListeners() {
    this.store.on("frameadded", this.onFrameAdded);
    this.store.on("framedetached", this.onFrameDetached);
  }
  addOverlay(overlay) {
    this.overlays.push(overlay);
    for (let fv of this.frameViews.values()) {
      overlay.onFrameInit(fv);
    }
  }
  removeOverlay(overlay) {
    let index2 = this.overlays.indexOf(overlay);
    this.overlays.splice(index2, 1);
    for (let fv of this.frameViews.values()) {
      overlay.onFrameUninit(fv);
    }
  }
  destroy() {
    let fvs = [...this.frameViews.values()];
    for (let fv of fvs) {
      this.onFrameDetached(fv.store);
    }
    this.elMainFrame.remove();
    this.store.off("frameadded", this.onFrameAdded);
    this.store.off("framedetached", this.onFrameDetached);
  }
  getOffset(el) {
    if (el == this.elMainFrame) {
      return [0, 0];
    }
    let rect = el.getBoundingClientRect();
    const offset = [rect.left, rect.top];
    const elWin = el.ownerDocument.defaultView;
    const parentOffset = this.getOffset(elWin.frameElement);
    return [offset[0] + parentOffset[0], offset[1] + parentOffset[1]];
  }
  getFrame(frameId) {
    return this.frameViews.get(frameId);
  }
  onDOMEvent(frameId, event) {
    let frameView = this.getFrame(frameId);
    frameView.onDOMEvent(event);
  }
  async onWEBRTCEvent(frameId, peerId, event) {
    await this.getFrame(frameId).onWEBRTCEvent(peerId, event);
  }
  onFrameAdded(frame) {
    const fv = new FrameView(this, frame);
    this.frameViews.set(frame.id, fv);
    this.overlays.forEach((o) => o.onFrameInit(fv));
    this.emit("frameadded", fv);
    return fv;
  }
  onFrameDetached(frame) {
    let fv = this.frameViews.get(frame.id);
    if (fv) {
      for (let overlay of this.overlays) {
        overlay.onFrameUninit(fv);
      }
      fv.destroy();
      this.frameViews.delete(frame.id);
      this.emit("framedetached", fv);
    }
  }
  pause() {
    for (const fv of this.frameViews.values()) {
      fv.pause();
    }
  }
  resume() {
    for (const fv of this.frameViews.values()) {
      fv.resume();
    }
  }
  render() {
    return this.elMainFrame;
  }
}
class BrowserView extends EventEmitter {
  constructor(options) {
    super();
    this.overlays = [];
    this.pageViews = new Map();
    Object.assign(this, options);
    this.manager.addDOMStreamListener(this);
    this.manager.addWEBRTCStreamListener(this);
    this.addListeners();
  }
  async addListeners() {
    if (!this.manager.browser) {
      await this.manager.waitForEvent("ready");
    }
    this.store = this.manager.browser;
    this.client = this.manager.apiClient;
    this.store.on("pageadded", (e) => this.onPageAdded(e));
    this.store.on("pagedeleted", (e) => this.onPageDeleted(e));
    this.store.pages.forEach((page) => this.onPageAdded(page));
  }
  addPageOverlay(overlay) {
    this.overlays.push(overlay);
    for (let pv of this.pageViews.values()) {
      pv.addOverlay(overlay);
    }
  }
  getPage(id2) {
    if (typeof id2 == "number") {
      let size = this.pageViews.size;
      let index2 = id2;
      if (index2 < 0) {
        index2 += size;
      }
      if (index2 >= size) {
        throw new Error("Page index out of bounds: " + index2);
      }
      let pages = this.pageViews.values();
      let i = 0;
      for (let page of pages) {
        if (i == index2) {
          return page;
        }
        i += 1;
      }
      throw new Error("(unreachable code) Page not found: " + id2);
    } else {
      return this.pageViews.get(id2);
    }
  }
  onDOMEvent(pageId, frameId, event) {
    this.getPage(pageId).onDOMEvent(frameId, event);
  }
  async onWEBRTCEvent(pageId, frameId, peerId, event) {
    await this.getPage(pageId).onWEBRTCEvent(frameId, peerId, event);
  }
  onPageAdded(page) {
    let pageView = new PageView(page, this);
    this.pageViews.set(page.id, pageView);
    this.overlays.forEach((o) => pageView.addOverlay(o));
    let el = pageView.render();
    this.setPageElStyle(el);
    this.container.appendChild(el);
    this.emit("pageadded", pageView);
  }
  onPageDeleted(page) {
    let pageView = this.getPage(page.id);
    pageView.destroy();
    this.pageViews.delete(page.id);
    this.emit("pagedeleted", pageView);
  }
  setPageElStyle(el) {
    Object.assign(el.style, {
      position: "absolute",
      height: "100%",
      width: "100%",
      backgroundColor: "#fff"
    });
  }
  getNode(pageId, frameId, path) {
    return this.getPage(pageId).getFrame(frameId).getNode(path);
  }
  async syncSize() {
    let r = this.container.getBoundingClientRect();
    await this.store.call("setViewport", {
      width: Math.trunc(r.width),
      height: Math.trunc(r.height)
    });
  }
}
async function createView({ key, host, container }) {
  let apiClient = connect({
    key,
    host,
    features: [Feature.command, Feature.state, Feature.stream_dom, Feature.stream_video]
  });
  let manager = new StoreManager(apiClient);
  await manager.waitForEvent("ready");
  await manager.browser.call("setContentConfig", "stream_dom", true);
  let view = new BrowserView({
    manager,
    container
  });
  view.syncSize();
  return view;
}
class BrowserListener extends EventEmitter {
  constructor(view) {
    super();
    this.view = view;
    this.mgr = view.manager;
    [
      "onAction",
      "onEffect",
      "onFrameAdded",
      "onFrameDetached",
      "onPageAdded",
      "onPageDeleted"
    ].forEach((name) => this[name] = this[name].bind(this));
  }
  onFrameAdded(fv) {
    fv.on("bbx", this.onEffect);
    fv.on("trigger", this.onAction);
  }
  onFrameDetached(fv) {
    fv.off("bbx", this.onEffect);
    fv.off("trigger", this.onAction);
  }
  onPageAdded(pv) {
    pv.on("frameadded", this.onFrameAdded);
    pv.on("framedetached", this.onFrameDetached);
    pv.frameViews.forEach(this.onFrameAdded);
  }
  onPageDeleted(pv) {
    pv.off("frameadded", this.onFrameAdded);
    pv.off("framedetached", this.onFrameDetached);
    pv.frameViews.forEach(this.onFrameDetached);
  }
  start() {
    this.view.on("pageadded", this.onPageAdded);
    this.view.on("pagedeleted", this.onPageDeleted);
    this.view.pageViews.forEach(this.onPageAdded);
  }
  stop() {
    this.view.off("pageadded", this.onPageAdded);
    this.view.off("pagedeleted", this.onPageDeleted);
    this.view.pageViews.forEach(this.onPageDeleted);
  }
}
var StepType;
(function(StepType2) {
  StepType2["CLICK"] = "CLICK";
  StepType2["DRAG"] = "DRAG";
  StepType2["FOCUS"] = "FOCUS";
  StepType2["INPUT"] = "INPUT";
  StepType2["KEYPRESS"] = "KEYPRESS";
  StepType2["MOUSEMOVE"] = "MOUSEMOVE";
  StepType2["OPEN"] = "OPEN";
  StepType2["SCROLL"] = "SCROLL";
  StepType2["SELECT"] = "SELECT";
  StepType2["TYPE"] = "TYPE";
  StepType2["WAIT_DOC"] = "WAIT_DOC";
  StepType2["WAIT_NAV"] = "WAIT_NAV";
  StepType2["__END"] = "__END";
})(StepType || (StepType = {}));
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
class BaseStep {
  constructor(type, data2, frame = 0, ts = Date.now()) {
    this.type = type;
    this.data = data2;
    this.frame = frame;
    this.ts = ts;
  }
  is(type) {
    return this.type == type;
  }
  isEffect() {
    return false;
  }
  isKey() {
    return false;
  }
  isMouse() {
    return false;
  }
  get name() {
    return this.type;
  }
  getFrameView(view) {
    let pageView = view.getPage(-1);
    let page = pageView.store;
    let frame = page.frames[this.frame];
    return pageView.getFrame(frame.id);
  }
  async play(_view) {
    throw new Error(`${this.name}.play() not implemented`);
  }
}
class Open extends BaseStep {
  constructor(url, frame, ts) {
    super(StepType.OPEN, { url }, frame, ts);
  }
  get url() {
    return this.data.url;
  }
  set url(url) {
    this.data.url = url;
  }
  async play(view) {
    let page = view.getPage(-1);
    await page.store.goto(this.url);
  }
}
class End extends BaseStep {
  constructor(frame) {
    super(StepType.__END, {}, frame);
  }
}
class Key extends BaseStep {
  isKey() {
    return true;
  }
}
class Mouse extends BaseStep {
  isMouse() {
    return true;
  }
}
class EffectStep extends BaseStep {
  isEffect() {
    return true;
  }
}
class Click extends Mouse {
  constructor(selector2, pos, frame, ts) {
    super(StepType.CLICK, { selector: selector2, pos }, frame, ts);
  }
  get selector() {
    return this.data.selector;
  }
  set selector(selector2) {
    this.data.selector = selector2;
  }
  async play(view) {
    let page = view.getPage(-1);
    await page.store.call("click", this.selector.value);
  }
}
class Keypress extends Key {
  constructor(code, keyCode, count, frame, ts) {
    super(StepType.KEYPRESS, { code, keyCode, count }, frame, ts);
  }
  get code() {
    return this.data.code;
  }
  get keyCode() {
    return this.data.keyCode;
  }
  get count() {
    return this.data.count || 1;
  }
  set count(n) {
    this.data.count = n;
  }
  get repr() {
    return this.code + (this.count > 1 ? " x " + this.count : "");
  }
  async play(view) {
    let page = view.getPage(-1).store;
    await page.trigger("keypress", this.data);
  }
}
class Drag extends Mouse {
  constructor(start2, end, frame, ts) {
    super(StepType.DRAG, { start: start2, end }, frame, ts);
    this._el = null;
  }
  get el() {
    return this._el;
  }
  set el(el) {
    this._el = el;
  }
  get end() {
    return this.data.end;
  }
  get start() {
    return this.data.start;
  }
  set end(end) {
    this.data.end = end;
  }
  set start(start2) {
    this.data.start = start2;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    let page = frameView.pageView.store;
    var { selector: selector2, pos } = this.start;
    frameView.dispatchEventMousemove2((await selector2).value, pos.x, pos.y);
    await wait(100);
    await page.call("mousedown");
    await wait(100);
    var { selector: selector2, pos } = this.end;
    frameView.dispatchEventMousemove2((await selector2).value, pos.x, pos.y);
    await wait(100);
    await page.call("mouseup");
  }
}
class MouseMove extends Mouse {
  constructor(selector2, pos, frame, ts) {
    super(StepType.MOUSEMOVE, { selector: selector2, pos }, frame, ts);
  }
  get pos() {
    return this.data.pos;
  }
  set pos(pos) {
    this.data.pos = pos;
  }
  get selector() {
    return this.data.selector;
  }
  set selector(selector2) {
    this.data.selector = selector2;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    let selector2 = this.data.selector;
    let pos = this.data.pos;
    frameView.dispatchEventMousemove2((await selector2).value, pos.x, pos.y);
  }
}
class Focus extends EffectStep {
  constructor(selector2, frame, ts) {
    super(StepType.FOCUS, { selector: selector2 }, frame, ts);
  }
  get selector() {
    return this.data.selector;
  }
  async play(view) {
    let page = view.getPage(-1).store;
    let frame = page.frames[this.frame];
    await frame.call("focus", this.selector.value);
  }
}
class Scroll extends EffectStep {
  constructor(selector2, left, top, frame, ts) {
    super(StepType.SCROLL, { selector: selector2, left, top }, frame, ts);
  }
  get left() {
    return this.data.left;
  }
  get top() {
    return this.data.top;
  }
  get selector() {
    return this.data.selector;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.dispatchEventScroll2(this.selector.value, this.left, this.top);
  }
}
class WaitForDoc extends EffectStep {
  constructor(frame, ts) {
    super(StepType.WAIT_DOC, {}, frame, ts);
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.waitForEvent("document");
    await wait(2e3);
  }
}
class WaitForNav extends EffectStep {
  constructor(data2, frame, ts) {
    super(StepType.WAIT_NAV, data2, frame, ts);
  }
  get url() {
    return this.data.url;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.waitForEvent("navigated");
  }
}
class Input extends Key {
  constructor(selector2, value, frame, ts) {
    super(StepType.INPUT, { value, selector: selector2 }, frame, ts);
    this._el = null;
  }
  get el() {
    return this._el;
  }
  set el(el) {
    this._el = el;
  }
  get selector() {
    return this.data.selector;
  }
  set selector(selector2) {
    this.data.selector = selector2;
  }
  get value() {
    return this.data.value;
  }
  set value(value) {
    this.data.value = value;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.dispatchEventChange2(this.selector.value, this.value);
  }
}
class Select extends BaseStep {
  constructor(selector2, value, frame, ts) {
    super(StepType.SELECT, { value, selector: selector2 }, frame, ts);
    this._el = null;
  }
  get el() {
    return this._el;
  }
  set el(el) {
    this._el = el;
  }
  get selector() {
    return this.data.selector;
  }
  set selector(selector2) {
    this.data.selector = selector2;
  }
  get value() {
    return this.data.value;
  }
  set value(value) {
    this.data.value = value;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.dispatchEventChange2(this.selector.value, this.value);
  }
}
class Type extends Key {
  constructor(selector2, value, frame, ts) {
    super(StepType.TYPE, { value, selector: selector2 }, frame, ts);
    this._el = null;
  }
  get el() {
    return this._el;
  }
  set el(el) {
    this._el = el;
  }
  get selector() {
    return this.data.selector;
  }
  set selector(selector2) {
    this.data.selector = selector2;
  }
  get value() {
    return this.data.value;
  }
  set value(value) {
    this.data.value = value;
  }
  async play(view) {
    let frameView = this.getFrameView(view);
    await frameView.store.call("type", this.selector.value, this.value);
  }
}
function toJSON(steps) {
  return steps.map(({ type, data: data2, ts, frame }) => ({ type, data: data2, ts, frame }));
}
function toSteps(steps, selectorParser) {
  return steps.map(({ type, data: data2, frame, ts }) => {
    frame || (frame = 0);
    ts || (ts = 0);
    let selector2 = data2.selector ? selectorParser(data2.selector) : new CSSSelector("body");
    switch (type) {
      case StepType.CLICK:
        return new Click(selector2, data2 === null || data2 === void 0 ? void 0 : data2.pos, frame, ts);
      case StepType.DRAG:
        return new Drag(data2.start, data2.end, frame, ts);
      case StepType.FOCUS:
        return new Focus(selector2, frame, ts);
      case StepType.INPUT:
        return new Input(selector2, data2.value, frame, ts);
      case StepType.KEYPRESS:
        return new Keypress(data2.code, data2.keyCode, data2.count || 1, frame, ts);
      case StepType.MOUSEMOVE:
        return new MouseMove(selector2, data2.pos, frame, ts);
      case StepType.OPEN:
        return new Open(data2.url, frame, ts);
      case StepType.SCROLL:
        return new Scroll(selector2, data2.top, data2.left, frame, ts);
      case StepType.SELECT:
        return new Select(selector2, data2.value, frame, ts);
      case StepType.TYPE:
        return new Type(selector2, data2.value, frame, ts);
      case StepType.WAIT_DOC:
        return new WaitForDoc(frame, ts);
      case StepType.WAIT_NAV:
        return new WaitForNav(data2, frame, ts);
      default:
        throw new Error("Unknown step type:" + type);
    }
  });
}
async function replay(_view, _steps) {
  throw new Error("TODO: Not implemented");
}
let REPLACE_PATTERNS = [
  [[StepType.WAIT_DOC, StepType.FOCUS], 0],
  [[StepType.WAIT_NAV, StepType.WAIT_NAV], 1],
  [[StepType.FOCUS, StepType.FOCUS], 1],
  [[StepType.FOCUS, StepType.CLICK], 1],
  [[StepType.CLICK, StepType.FOCUS], 0],
  [[StepType.MOUSEMOVE, StepType.FOCUS, StepType.CLICK], 1],
  [[StepType.MOUSEMOVE, StepType.CLICK], 1],
  [[StepType.MOUSEMOVE, StepType.__END], 1]
];
class Base extends BrowserListener {
  constructor(view, find) {
    super(view);
    this.actions = [];
    this.effects = [];
    this.find = find;
  }
  getSteps() {
    let steps = [...this.actions, ...this.effects, new End(0)];
    steps.sort((s1, s2) => s1.ts - s2.ts);
    reduceSteps(steps, REPLACE_PATTERNS);
    reduceSteps(steps, REPLACE_PATTERNS);
    return steps.slice(0, -1);
  }
  getStepsRaw() {
    let steps = [...this.actions, ...this.effects];
    steps.sort((s1, s2) => s1.ts - s2.ts);
    return steps;
  }
  getTargetPos(el, { clientX, clientY }) {
    let elRect = el.getBoundingClientRect();
    let x = clientX - elRect.left;
    let y = clientY - elRect.top;
    return { x, y };
  }
  async onAction(name, params2, target, fv) {
    let actions = this.actions;
    if (name == "select") {
      let selector3 = await this.find(target);
      actions.push(new Select(selector3, params2.value, ...stepCtx(fv)));
      return;
    }
    let isKey = name.startsWith("key");
    let isMouse = name.startsWith("mouse");
    if (isKey) {
      let lastEl = this.dirtyEl;
      this.dirtyEl = target;
      let lastAction = actions[actions.length - 1];
      let { code, keyCode } = params2;
      if (name == "keydown" && (code == "Enter" || code == "Backspace")) {
        if (lastAction instanceof Keypress && lastAction.code == code && lastEl == this.dirtyEl) {
          lastAction.count += 1;
        } else {
          actions.push(new Keypress(code, keyCode, 1, ...stepCtx(fv)));
        }
      }
      return;
    }
    if (!isMouse) {
      return;
    }
    let selector2 = await this.find(target);
    let pos = this.getTargetPos(target, params2);
    if (actions.length == 0) {
      actions.push(new MouseMove(new CSSSelector("body"), { x: 120, y: 80 }, ...stepCtx(fv)));
    }
    let lastStep = actions[actions.length - 1];
    let suffix = name.split("mouse")[1];
    switch (suffix) {
      case "move":
        if (lastStep instanceof MouseMove && lastStep.selector.value == selector2.value) {
          lastStep.data = { selector: selector2, pos };
        } else if (lastStep instanceof Drag) {
          lastStep.end = { selector: selector2, pos };
        } else {
          actions.push(new MouseMove(selector2, pos, ...stepCtx(fv)));
        }
        break;
      case "down":
        let drag = new Drag({ selector: selector2, pos }, null, ...stepCtx(fv));
        drag.el = target;
        actions.push(drag);
        break;
      case "up":
        if (lastStep instanceof Drag) {
          if (lastStep.el == target) {
            let { selector: selector3, pos: pos2 } = lastStep.start;
            actions[actions.length - 1] = new Click(selector3, pos2, ...stepCtx(fv));
          } else {
            lastStep.end = { selector: selector2, pos };
          }
        } else if (lastStep instanceof Select)
          ;
        else {
          console.warn("invalid state error", { name, params: params2, lastStep, actions });
        }
        break;
      default:
        console.error("Invalid mouse action", { name, params: params2 });
        throw new Error("Invalid mouse action");
    }
    this.emit("change");
  }
  async onEffect(name, event, fv) {
    switch (name) {
      case "navigated":
        if (fv.store.isMain())
          ;
        break;
      case "document":
        if (fv.store.isMain()) {
          this.effects.push(new WaitForDoc(...stepCtx(fv)));
        }
        break;
      case "focus": {
        let el = fv.getNode(event.path);
        this.effects.push(new Focus(await this.find(el), ...stepCtx(fv)));
        break;
      }
      case "input": {
        let el = fv.getNode(event.path);
        if (el == this.dirtyEl) {
          let lastStep = this.effects[this.effects.length - 1];
          if (lastStep instanceof Type && lastStep.el == el) {
            lastStep.value = event.value;
          } else {
            let selector2 = await this.find(el);
            let type = new Type(selector2, event.value, ...stepCtx(fv));
            type.el = el;
            this.effects.push(type);
          }
        }
        break;
      }
      case "scroll": {
        let lastStep = this.effects[this.effects.length - 1];
        if (lastStep && lastStep instanceof Scroll) {
          lastStep.data.left = event.left;
          lastStep.data.top = event.top;
        } else {
          let { path, left, top } = event;
          let el = fv.getNode(path);
          let selector2 = await this.find(el);
          this.effects.push(new Scroll(selector2, left, top, ...stepCtx(fv)));
        }
        break;
      }
    }
    this.emit("change");
  }
  async reset() {
    this.actions = [];
    this.effects = [];
    this.emit("change");
  }
}
function stepCtx(fv) {
  let index2 = fv.store.getIndex();
  return [index2, Date.now()];
}
function reduceSteps(steps, patterns) {
  for (let [types, replaceWithIndex] of patterns) {
    let i = 0;
    while ((i = indexOf(steps, types)) >= 0) {
      steps.splice(i, types.length, steps[i + replaceWithIndex]);
    }
  }
}
function indexOf(steps, types) {
  let m = 0, i = 0, slen = steps.length, tlen = types.length;
  let t = [-1, 0];
  for (let pos = 2, cnd = 0; pos < tlen; ) {
    if (types[pos - 1] === types[cnd]) {
      t[pos] = cnd + 1;
      pos++;
      cnd++;
    } else if (cnd > 0) {
      cnd = t[cnd];
    } else {
      t[pos++] = 0;
    }
  }
  while (m + i < slen) {
    if (steps[m + i].type === types[i]) {
      i++;
      if (i === tlen)
        return m;
    } else {
      m += i - t[i];
      if (t[i] > -1) {
        i = t[i];
      } else {
        i = 0;
      }
    }
  }
  return -1;
}
var Recorder = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get StepType() {
    return StepType;
  },
  BaseStep,
  Open,
  End,
  Key,
  Mouse,
  EffectStep,
  Click,
  Keypress,
  Drag,
  MouseMove,
  Focus,
  Scroll,
  WaitForDoc,
  WaitForNav,
  Input,
  Select,
  Type,
  toJSON,
  toSteps,
  replay,
  REPLACE_PATTERNS,
  Base
});
var dist = {};
/*! https://mths.be/cssesc v1.0.1 by @mathias */
var object = {};
var hasOwnProperty = object.hasOwnProperty;
var merge2 = function merge3(options, defaults2) {
  if (!options) {
    return defaults2;
  }
  var result = {};
  for (var key in defaults2) {
    result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults2[key];
  }
  return result;
};
var regexAnySingleEscape = /[ -,\.\/;-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/;-@\[\]\^`\{-~]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
var cssesc$1 = function cssesc(string, options) {
  options = merge2(options, cssesc.options);
  if (options.quotes != "single" && options.quotes != "double") {
    options.quotes = "single";
  }
  var quote2 = options.quotes == "double" ? '"' : "'";
  var isIdentifier = options.isIdentifier;
  var firstChar = string.charAt(0);
  var output = "";
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var character = string.charAt(counter++);
    var codePoint = character.charCodeAt();
    var value = void 0;
    if (codePoint < 32 || codePoint > 126) {
      if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
        var extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) {
          codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
        } else {
          counter--;
        }
      }
      value = "\\" + codePoint.toString(16).toUpperCase() + " ";
    } else {
      if (options.escapeEverything) {
        if (regexAnySingleEscape.test(character)) {
          value = "\\" + character;
        } else {
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        }
      } else if (/[\t\n\f\r\x0B:]/.test(character)) {
        if (!isIdentifier && character == ":") {
          value = character;
        } else {
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        }
      } else if (character == "\\" || !isIdentifier && (character == '"' && quote2 == character || character == "'" && quote2 == character) || isIdentifier && regexSingleEscape.test(character)) {
        value = "\\" + character;
      } else {
        value = character;
      }
    }
    output += value;
  }
  if (isIdentifier) {
    if (/^_/.test(output)) {
      output = "\\_" + output.slice(1);
    } else if (/^-[-\d]/.test(output)) {
      output = "\\-" + output.slice(1);
    } else if (/\d/.test(firstChar)) {
      output = "\\3" + firstChar + " " + output.slice(1);
    }
  }
  output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
    if ($1 && $1.length % 2) {
      return $0;
    }
    return ($1 || "") + $2;
  });
  if (!isIdentifier && options.wrap) {
    return quote2 + output + quote2;
  }
  return output;
};
cssesc$1.options = {
  "escapeEverything": false,
  "isIdentifier": false,
  "quotes": "single",
  "wrap": false
};
cssesc$1.version = "1.0.1";
var cssesc_1 = cssesc$1;
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __generator = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __values = commonjsGlobal && commonjsGlobal.__values || function(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m)
    return m.call(o);
  return {
    next: function() {
      if (o && i >= o.length)
        o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
};
Object.defineProperty(dist, "__esModule", { value: true });
var cssesc2 = cssesc_1;
var Limit;
(function(Limit2) {
  Limit2[Limit2["All"] = 0] = "All";
  Limit2[Limit2["Two"] = 1] = "Two";
  Limit2[Limit2["One"] = 2] = "One";
})(Limit || (Limit = {}));
var config;
var rootDocument;
function default_1(input, options) {
  if (input.nodeType !== Node.ELEMENT_NODE) {
    throw new Error("Can't generate CSS selector for non-element node type.");
  }
  if (input.tagName.toLowerCase() === "html") {
    return "html";
  }
  var defaults2 = {
    root: document.body,
    idName: function(name) {
      return true;
    },
    className: function(name) {
      return true;
    },
    tagName: function(name) {
      return true;
    },
    attr: function(name, value) {
      return false;
    },
    seedMinLength: 1,
    optimizedMinLength: 2,
    threshold: 1e3,
    maxNumberOfTries: 1e4
  };
  config = __assign({}, defaults2, options);
  rootDocument = findRootDocument(config.root, defaults2);
  var path = bottomUpSearch(input, Limit.All, function() {
    return bottomUpSearch(input, Limit.Two, function() {
      return bottomUpSearch(input, Limit.One);
    });
  });
  if (path) {
    var optimized = sort(optimize(path, input));
    if (optimized.length > 0) {
      path = optimized[0];
    }
    return selector(path);
  } else {
    throw new Error("Selector was not found.");
  }
}
var _default = dist.default = default_1;
function findRootDocument(rootNode, defaults2) {
  if (rootNode.nodeType === Node.DOCUMENT_NODE) {
    return rootNode;
  }
  if (rootNode === defaults2.root) {
    return rootNode.ownerDocument;
  }
  return rootNode;
}
function bottomUpSearch(input, limit, fallback) {
  var path = null;
  var stack = [];
  var current = input;
  var i = 0;
  var _loop_1 = function() {
    var level = maybe(id(current)) || maybe.apply(void 0, attr(current)) || maybe.apply(void 0, classNames(current)) || maybe(tagName(current)) || [any()];
    var nth = index(current);
    if (limit === Limit.All) {
      if (nth) {
        level = level.concat(level.filter(dispensableNth).map(function(node3) {
          return nthChild(node3, nth);
        }));
      }
    } else if (limit === Limit.Two) {
      level = level.slice(0, 1);
      if (nth) {
        level = level.concat(level.filter(dispensableNth).map(function(node3) {
          return nthChild(node3, nth);
        }));
      }
    } else if (limit === Limit.One) {
      var node2 = (level = level.slice(0, 1))[0];
      if (nth && dispensableNth(node2)) {
        level = [nthChild(node2, nth)];
      }
    }
    for (var _i = 0, level_1 = level; _i < level_1.length; _i++) {
      var node2 = level_1[_i];
      node2.level = i;
    }
    stack.push(level);
    if (stack.length >= config.seedMinLength) {
      path = findUniquePath(stack, fallback);
      if (path) {
        return "break";
      }
    }
    current = current.parentElement;
    i++;
  };
  while (current && current !== config.root.parentElement) {
    var state_1 = _loop_1();
    if (state_1 === "break")
      break;
  }
  if (!path) {
    path = findUniquePath(stack, fallback);
  }
  return path;
}
function findUniquePath(stack, fallback) {
  var paths = sort(combinations(stack));
  if (paths.length > config.threshold) {
    return fallback ? fallback() : null;
  }
  for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
    var candidate = paths_1[_i];
    if (unique(candidate)) {
      return candidate;
    }
  }
  return null;
}
function selector(path) {
  var node2 = path[0];
  var query = node2.name;
  for (var i = 1; i < path.length; i++) {
    var level = path[i].level || 0;
    if (node2.level === level - 1) {
      query = path[i].name + " > " + query;
    } else {
      query = path[i].name + " " + query;
    }
    node2 = path[i];
  }
  return query;
}
function penalty(path) {
  return path.map(function(node2) {
    return node2.penalty;
  }).reduce(function(acc, i) {
    return acc + i;
  }, 0);
}
function unique(path) {
  switch (rootDocument.querySelectorAll(selector(path)).length) {
    case 0:
      throw new Error("Can't select any node with this selector: " + selector(path));
    case 1:
      return true;
    default:
      return false;
  }
}
function id(input) {
  var elementId = input.getAttribute("id");
  if (elementId && config.idName(elementId)) {
    return {
      name: "#" + cssesc2(elementId, { isIdentifier: true }),
      penalty: 0
    };
  }
  return null;
}
function attr(input) {
  var attrs = Array.from(input.attributes).filter(function(attr2) {
    return config.attr(attr2.name, attr2.value);
  });
  return attrs.map(function(attr2) {
    return {
      name: "[" + cssesc2(attr2.name, { isIdentifier: true }) + '="' + cssesc2(attr2.value) + '"]',
      penalty: 0.5
    };
  });
}
function classNames(input) {
  var names = Array.from(input.classList).filter(config.className);
  return names.map(function(name) {
    return {
      name: "." + cssesc2(name, { isIdentifier: true }),
      penalty: 1
    };
  });
}
function tagName(input) {
  var name = input.tagName.toLowerCase();
  if (config.tagName(name)) {
    return {
      name,
      penalty: 2
    };
  }
  return null;
}
function any() {
  return {
    name: "*",
    penalty: 3
  };
}
function index(input) {
  var parent2 = input.parentNode;
  if (!parent2) {
    return null;
  }
  var child = parent2.firstChild;
  if (!child) {
    return null;
  }
  var i = 0;
  while (child) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      i++;
    }
    if (child === input) {
      break;
    }
    child = child.nextSibling;
  }
  return i;
}
function nthChild(node2, i) {
  return {
    name: node2.name + (":nth-child(" + i + ")"),
    penalty: node2.penalty + 1
  };
}
function dispensableNth(node2) {
  return node2.name !== "html" && !node2.name.startsWith("#");
}
function maybe() {
  var level = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    level[_i] = arguments[_i];
  }
  var list = level.filter(notEmpty);
  if (list.length > 0) {
    return list;
  }
  return null;
}
function notEmpty(value) {
  return value !== null && value !== void 0;
}
function combinations(stack, path) {
  var _i, _a, node2;
  if (path === void 0) {
    path = [];
  }
  return __generator(this, function(_b) {
    switch (_b.label) {
      case 0:
        if (!(stack.length > 0))
          return [3, 5];
        _i = 0, _a = stack[0];
        _b.label = 1;
      case 1:
        if (!(_i < _a.length))
          return [3, 4];
        node2 = _a[_i];
        return [5, __values(combinations(stack.slice(1, stack.length), path.concat(node2)))];
      case 2:
        _b.sent();
        _b.label = 3;
      case 3:
        _i++;
        return [3, 1];
      case 4:
        return [3, 7];
      case 5:
        return [4, path];
      case 6:
        _b.sent();
        _b.label = 7;
      case 7:
        return [2];
    }
  });
}
function sort(paths) {
  return Array.from(paths).sort(function(a, b) {
    return penalty(a) - penalty(b);
  });
}
function optimize(path, input, scope) {
  var i, newPath, newPathKey;
  if (scope === void 0) {
    scope = { counter: 0, visited: new Map() };
  }
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        if (!(path.length > 2 && path.length > config.optimizedMinLength))
          return [3, 5];
        i = 1;
        _a.label = 1;
      case 1:
        if (!(i < path.length - 1))
          return [3, 5];
        if (scope.counter > config.maxNumberOfTries) {
          return [2];
        }
        scope.counter += 1;
        newPath = path.slice();
        newPath.splice(i, 1);
        newPathKey = selector(newPath);
        if (scope.visited.has(newPathKey)) {
          return [2];
        }
        if (!(unique(newPath) && same(newPath, input)))
          return [3, 4];
        return [4, newPath];
      case 2:
        _a.sent();
        scope.visited.set(newPathKey, true);
        return [5, __values(optimize(newPath, input, scope))];
      case 3:
        _a.sent();
        _a.label = 4;
      case 4:
        i++;
        return [3, 1];
      case 5:
        return [2];
    }
  });
}
function same(path, input) {
  return rootDocument.querySelector(selector(path)) === input;
}
function create_if_block$5(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$5(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$5(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$5(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$5(ctx);
  let svg_levels = [
    { "data-carbon-icon": "Checkmark16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "Checkmark16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class Checkmark16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var Checkmark16$1 = Checkmark16;
function create_if_block$4(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$4(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$4(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$4(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$4(ctx);
  let svg_levels = [
    { "data-carbon-icon": "Error16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M2,16H2A14,14,0,1,0,16,2,14,14,0,0,0,2,16Zm23.15,7.75L8.25,6.85a12,12,0,0,1,16.9,16.9ZM8.24,25.16A12,12,0,0,1,6.84,8.27L23.73,25.16a12,12,0,0,1-15.49,0Z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "Error16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class Error16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var Error16$1 = Error16;
function create_if_block$3(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$3(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$3(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$3(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$3(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$3(ctx);
  let svg_levels = [
    { "data-carbon-icon": "PlayFilledAlt16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M7,28a1,1,0,0,1-1-1V5a1,1,0,0,1,1.4819-.8763l20,11a1,1,0,0,1,0,1.7525l-20,11A1.0005,1.0005,0,0,1,7,28Z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "PlayFilledAlt16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class PlayFilledAlt16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var PlayFilledAlt16$1 = PlayFilledAlt16;
function create_if_block$2(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$2(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$2(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$2(ctx) {
  let svg;
  let circle;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$2(ctx);
  let svg_levels = [
    { "data-carbon-icon": "RecordingFilled16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      circle = svg_element("circle");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(circle, "cx", "16");
      attr$1(circle, "cy", "16");
      attr$1(circle, "r", "4");
      attr$1(path, "d", "M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,22c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6 S19.3,22,16,22z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, circle);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "RecordingFilled16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class RecordingFilled16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var RecordingFilled16$1 = RecordingFilled16;
function create_if_block$1(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block$1(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block$1(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$1(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  let svg_levels = [
    { "data-carbon-icon": "StopFilled16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M11,10c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h4	c0.6,0,1,0.4,1,1V10z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "StopFilled16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 16 16" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class StopFilled16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var StopFilled16$1 = StopFilled16;
function create_if_block(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[2]);
    },
    m(target, anchor) {
      insert(target, title_1, anchor);
      append(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function fallback_block(ctx) {
  let if_block_anchor;
  let if_block = ctx[2] && create_if_block(ctx);
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
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  let svg_levels = [
    { "data-carbon-icon": "StopFilledAlt16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: ctx[0] },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: ctx[3] },
    { id: ctx[1] },
    ctx[4]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign$1(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      attr$1(path, "d", "M24,6H8A2,2,0,0,0,6,8V24a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(svg, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(svg, "click", ctx[12]),
          listen(svg, "mouseover", ctx[13]),
          listen(svg, "mouseenter", ctx[14]),
          listen(svg, "mouseleave", ctx[15]),
          listen(svg, "keyup", ctx[16]),
          listen(svg, "keydown", ctx[17])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1024)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { "data-carbon-icon": "StopFilledAlt16" },
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { width: "16" },
        { height: "16" },
        (!current || dirty & 1) && { class: ctx2[0] },
        { preserveAspectRatio: "xMidYMid meet" },
        (!current || dirty & 8) && { style: ctx2[3] },
        (!current || dirty & 2) && { id: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { id: id2 = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(18, $$props = assign$1(assign$1({}, $$props), exclude_internal_props($$new_props)));
    if ("class" in $$new_props)
      $$invalidate(0, className = $$new_props.class);
    if ("id" in $$new_props)
      $$invalidate(1, id2 = $$new_props.id);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("focusable" in $$new_props)
      $$invalidate(6, focusable = $$new_props.focusable);
    if ("title" in $$new_props)
      $$invalidate(2, title = $$new_props.title);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(9, ariaLabel = $$props["aria-label"]);
    $$invalidate(8, ariaLabelledBy = $$props["aria-labelledby"]);
    if ($$self.$$.dirty & 772) {
      $$invalidate(7, labelled = ariaLabel || ariaLabelledBy || title);
    }
    if ($$self.$$.dirty & 992) {
      $$invalidate(4, attributes = {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-hidden": labelled ? void 0 : true,
        role: labelled ? "img" : void 0,
        focusable: tabindex === "0" ? true : focusable,
        tabindex
      });
    }
  };
  $$props = exclude_internal_props($$props);
  return [
    className,
    id2,
    title,
    style,
    attributes,
    tabindex,
    focusable,
    labelled,
    ariaLabelledBy,
    ariaLabel,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    keyup_handler,
    keydown_handler
  ];
}
class StopFilledAlt16 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      class: 0,
      id: 1,
      tabindex: 5,
      focusable: 6,
      title: 2,
      style: 3
    });
  }
}
var StopFilledAlt16$1 = StopFilledAlt16;
export { lib as $, transition_in as A, transition_out as B, destroy_component as C, bubble as D, empty as E, group_outros as F, check_outros as G, get_store_value as H, html as I, repeat as J, toggle_class as K, run_all as L, action_destroyer as M, portal as N, createEventDispatcher as O, onDestroy as P, afterUpdate as Q, handle_promise as R, SvelteComponent as S, update_await_block_branch as T, set_input_value as U, update_keyed_each as V, outro_and_destroy_block as W, destroy_block as X, writable as Y, push$1 as Z, subscribe as _, attr$1 as a, derived as a0, CheckState as a1, TreeView as a2, BaseNode as a3, svg_element as a4, is_function as a5, add_flush_callback as a6, select_option as a7, bind$2 as a8, render as a9, setContext as aA, querystring as aB, set_store_value as aC, parse$2 as aD, flush as aE, replace$1 as aF, Router as aG, prevent_default as aa, Recorder as ab, DataTable as ac, Toolbar as ad, ToolbarContent as ae, Button as af, Close16$1 as ag, StopFilled16$1 as ah, RecordingFilled16$1 as ai, StopFilledAlt16$1 as aj, PlayFilledAlt16$1 as ak, Checkmark16$1 as al, Error16$1 as am, Loading as an, assign$1 as ao, set_attributes as ap, get_spread_update as aq, compute_rest_props as ar, createView as as, Base as at, toJSON as au, _default as av, CSSSelector as aw, exclude_internal_props as ax, select_value as ay, add_render_callback as az, insert as b, append as c, detach as d, element as e, space as f, src_url_equal as g, set_style as h, init as i, getContext as j, component_subscribe as k, binding_callbacks as l, set_data as m, noop as n, onMount as o, params as p, destroy_each as q, listen as r, safe_not_equal as s, text as t, create_slot as u, create_component as v, mount_component as w, update_slot_base as x, get_all_dirty_from_scope as y, get_slot_changes as z };
