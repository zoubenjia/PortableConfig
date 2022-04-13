import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, b as insert, n as noop, d as detach, O as createEventDispatcher, o as onMount, l as binding_callbacks } from "./vendor.c17c97a4.js";
function create_fragment(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      ctx[2](div);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[2](null);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { el } = $$props;
  let wrapper;
  let dispatch = createEventDispatcher();
  onMount(() => {
    wrapper.appendChild(el);
    return () => dispatch("destroy");
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      wrapper = $$value;
      $$invalidate(0, wrapper), $$invalidate(1, el);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("el" in $$props2)
      $$invalidate(1, el = $$props2.el);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 3) {
      {
        if (wrapper) {
          $$invalidate(0, wrapper.innerHTML = "", wrapper);
          wrapper.appendChild(el);
        }
      }
    }
  };
  return [wrapper, el, div_binding];
}
class ElWrap extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { el: 1 });
  }
}
export { ElWrap as E };
