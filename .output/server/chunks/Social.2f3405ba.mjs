import { _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Social",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = ref([
      {
        className: "insta",
        name: "\u0418\u043D\u0441\u0442\u0430\u0433\u0440\u0430\u043C",
        link: "https://www.instagram.com/cheeerezchur/"
      },
      {
        className: "vk",
        name: "\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",
        link: "https://vk.com/cheeercheeer"
      },
      {
        className: "tumbler",
        name: "\u0422\u0430\u043C\u0431\u043B\u0435\u0440",
        link: "https://www.tumblr.com/cherezchur"
      },
      {
        className: "tg",
        name: "\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",
        link: "https://t.me/Andrey4464"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "social" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(socials), (social) => {
        _push(`<li class="social__item">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          target: "_blank",
          to: social.link,
          class: ["social__link", social.className]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="social__title"${_scopeId}>${ssrInterpolate(social.name)}</span>`);
            } else {
              return [
                createVNode("span", { class: "social__title" }, toDisplayString(social.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Social.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Social.2f3405ba.mjs.map
