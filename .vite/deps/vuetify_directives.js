import {
  ClickOutside,
  Intersect,
  Ripple,
  Touch,
  VTooltip
} from "./chunk-PEONYJPN.js";
import "./chunk-PI5HPV6O.js";
import {
  consoleError,
  isObject
} from "./chunk-KWMB5ZLK.js";
import {
  h,
  mergeProps,
  render,
  resolveComponent
} from "./chunk-IDACCYAP.js";

// node_modules/vuetify/lib/directives/mutate/index.js
function mounted(el, binding) {
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    once,
    immediate,
    ...modifierKeys
  } = modifiers;
  const defaultValue = !Object.keys(modifierKeys).length;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {
      attributes: modifierKeys?.attr ?? defaultValue,
      characterData: modifierKeys?.char ?? defaultValue,
      childList: modifierKeys?.child ?? defaultValue,
      subtree: modifierKeys?.sub ?? defaultValue
    }
  };
  const observer = new MutationObserver(function() {
    let mutations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    handler?.(mutations, observer2);
    if (once) unmounted(el, binding);
  });
  if (immediate) handler?.([], observer);
  el._mutate = Object(el._mutate);
  el._mutate[binding.instance.$.uid] = {
    observer
  };
  observer.observe(el, options);
}
function unmounted(el, binding) {
  if (!el._mutate?.[binding.instance.$.uid]) return;
  el._mutate[binding.instance.$.uid].observer.disconnect();
  delete el._mutate[binding.instance.$.uid];
}
var Mutate = {
  mounted,
  unmounted
};

// node_modules/vuetify/lib/directives/resize/index.js
function mounted2(el, binding) {
  const handler = binding.value;
  const options = {
    passive: !binding.modifiers?.active
  };
  window.addEventListener("resize", handler, options);
  el._onResize = Object(el._onResize);
  el._onResize[binding.instance.$.uid] = {
    handler,
    options
  };
  if (!binding.modifiers?.quiet) {
    handler();
  }
}
function unmounted2(el, binding) {
  if (!el._onResize?.[binding.instance.$.uid]) return;
  const {
    handler,
    options
  } = el._onResize[binding.instance.$.uid];
  window.removeEventListener("resize", handler, options);
  delete el._onResize[binding.instance.$.uid];
}
var Resize = {
  mounted: mounted2,
  unmounted: unmounted2
};

// node_modules/vuetify/lib/directives/scroll/index.js
function mounted3(el, binding) {
  const {
    self = false
  } = binding.modifiers ?? {};
  const value = binding.value;
  const options = typeof value === "object" && value.options || {
    passive: true
  };
  const handler = typeof value === "function" || "handleEvent" in value ? value : value.handler;
  const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window;
  if (!target) return;
  target.addEventListener("scroll", handler, options);
  el._onScroll = Object(el._onScroll);
  el._onScroll[binding.instance.$.uid] = {
    handler,
    options,
    // Don't reference self
    target: self ? void 0 : target
  };
}
function unmounted3(el, binding) {
  if (!el._onScroll?.[binding.instance.$.uid]) return;
  const {
    handler,
    options,
    target = el
  } = el._onScroll[binding.instance.$.uid];
  target.removeEventListener("scroll", handler, options);
  delete el._onScroll[binding.instance.$.uid];
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) return;
  unmounted3(el, binding);
  mounted3(el, binding);
}
var Scroll = {
  mounted: mounted3,
  unmounted: unmounted3,
  updated
};

// node_modules/vuetify/lib/composables/directiveComponent.js
function useDirectiveComponent(component, props) {
  const concreteComponent = typeof component === "string" ? resolveComponent(component) : component;
  const hook = mountComponent(concreteComponent, props);
  return {
    mounted: hook,
    updated: hook,
    unmounted(el) {
      render(null, el);
    }
  };
}
function mountComponent(component, props) {
  return function(el, binding, vnode) {
    const _props = typeof props === "function" ? props(binding) : props;
    const text = binding.value?.text ?? binding.value ?? _props?.text;
    const value = isObject(binding.value) ? binding.value : {};
    const children = () => text ?? el.textContent;
    const provides = (vnode.ctx === binding.instance.$ ? findComponentParent(vnode, binding.instance.$)?.provides : vnode.ctx?.provides) ?? binding.instance.$.provides;
    const node = h(component, mergeProps(_props, value), children);
    node.appContext = Object.assign(/* @__PURE__ */ Object.create(null), binding.instance.$.appContext, {
      provides
    });
    render(node, el);
  };
}
function findComponentParent(vnode, root) {
  const stack = /* @__PURE__ */ new Set();
  const walk = (children) => {
    for (const child of children) {
      if (!child) continue;
      if (child === vnode || child.el && vnode.el && child.el === vnode.el) {
        return true;
      }
      stack.add(child);
      let result2;
      if (child.suspense) {
        result2 = walk([child.ssContent]);
      } else if (Array.isArray(child.children)) {
        result2 = walk(child.children);
      } else if (child.component?.vnode) {
        result2 = walk([child.component?.subTree]);
      }
      if (result2) {
        return result2;
      }
      stack.delete(child);
    }
    return false;
  };
  if (!walk([root.subTree])) {
    consoleError("Could not find original vnode, component will not inherit provides");
    return root;
  }
  const result = Array.from(stack).reverse();
  for (const child of result) {
    if (child.component) {
      return child.component;
    }
  }
  return root;
}

// node_modules/vuetify/lib/directives/tooltip/index.js
var Tooltip = useDirectiveComponent(VTooltip, (binding) => {
  return {
    activator: "parent",
    location: binding.arg?.replace("-", " "),
    text: typeof binding.value === "boolean" ? void 0 : binding.value
  };
});
export {
  ClickOutside,
  Intersect,
  Mutate,
  Resize,
  Ripple,
  Scroll,
  Tooltip,
  Touch
};
//# sourceMappingURL=vuetify_directives.js.map
