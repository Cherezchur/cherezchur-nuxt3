import { S as Swiper, a as SwiperSlide, N as Navigation, P as Pagination } from './swiper-vue.5080ef25.mjs';
import { ref, unref, mergeProps, useSSRContext, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './GalleryNavigate.2eff527f.mjs';
import { _ as _sfc_main$3 } from './Social.2f3405ba.mjs';
import { u as useGallery } from './useGallery.486400a1.mjs';
import 'ssr-window';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  __name: "Slider",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array
    }
  },
  setup(__props) {
    const modules = [Navigation, Pagination];
    const onSwiper = (swiper) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(ssrRenderComponent(_component_Swiper, mergeProps({
        class: "slider",
        "items-to-show": 1,
        loop: true,
        wrapAround: true,
        modules,
        navigation: "",
        pagination: { clickable: true },
        onSwiper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, ({ design, imagePath }) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                class: ["slider__item", design],
                key: imagePath
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="slider__image"${ssrRenderAttr("src", imagePath)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "slider__image",
                        src: imagePath
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, ({ design, imagePath }) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  class: ["slider__item", design],
                  key: imagePath
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "slider__image",
                      src: imagePath
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryStore = useGallery();
    galleryStore.fetchSections();
    galleryStore.fetchSlider();
    let sliderWidth = ref("50vw");
    let sliderHeight = ref("100vh");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slider = _sfc_main$1;
      const _component_GalleryNavigate = _sfc_main$2;
      const _component_Social = _sfc_main$3;
      const _cssVars = { style: {
        "--f04f20ee": unref(sliderWidth),
        "--596687c4": unref(sliderHeight)
      } };
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "preview" }, _attrs, _cssVars))}>`);
      _push(ssrRenderComponent(_component_Slider, {
        data: unref(galleryStore).slider
      }, null, _parent));
      _push(ssrRenderComponent(_component_GalleryNavigate, {
        sections: unref(galleryStore).sections
      }, null, _parent));
      _push(ssrRenderComponent(_component_Social, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.97b972aa.mjs.map
