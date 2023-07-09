import { _ as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "GalleryNavigate",
  __ssrInlineRender: true,
  props: {
    sections: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "gallery-navigate" }, _attrs))}><ul class="gallery-navigate__list"><!--[-->`);
      ssrRenderList(__props.sections, (cardData) => {
        _push(`<li class="${ssrRenderClass(["gallery-navigate__card", cardData.design])}">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "gallery-navigate__link",
          to: cardData.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="gallery-navigate__title"${_scopeId}>${ssrInterpolate(cardData.title)}</h3><span class="gallery-navigate__arrow"${_scopeId}>\u279C</span>`);
            } else {
              return [
                createVNode("h3", { class: "gallery-navigate__title" }, toDisplayString(cardData.title), 1),
                createVNode("span", { class: "gallery-navigate__arrow" }, "\u279C")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GalleryNavigate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GalleryNavigate.2eff527f.mjs.map
