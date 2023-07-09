import { E as EffectCoverflow, N as Navigation, P as Pagination, S as Swiper, a as SwiperSlide } from './swiper-vue.5080ef25.mjs';
import { unref, useSSRContext, ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { b as _export_sfc, u as useRoute, _ as __nuxt_component_0$1 } from './server.mjs';
import { ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './Social.2f3405ba.mjs';
import { u as useGallery } from './useGallery.486400a1.mjs';
import 'ssr-window';
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
  __name: "GallerySlider",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object
    },
    design: {
      type: String
    }
  },
  setup(__props) {
    const modules = [EffectCoverflow, Navigation, Pagination];
    const onSwiper = (swiper) => {
    };
    let sliderWidth = ref("50vw");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _cssVars = { style: {
        "--4d41f776": unref(sliderWidth)
      } };
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Swiper, mergeProps({
        ref: "gallerySlider",
        class: "gallery-slider",
        effect: "coverflow",
        loop: false,
        centeredSlides: true,
        slidesPerView: "1",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        },
        modules,
        pagination: {
          el: ".gallery-slider__pagination",
          clickable: true
        },
        navigation: {
          prevEl: ".gallery-slider__arrow-prev",
          nextEl: ".gallery-slider__arrow-next"
        },
        onSwiper
      }, _cssVars), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                class: ["gallery-slider__slide", __props.design],
                key: slide.title
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      class: "gallery-slider__link",
                      to: slide.path
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h3 class="gallery-slider__title"${_scopeId3}>${ssrInterpolate(slide.title)}</h3><img class="gallery-slider__image"${ssrRenderAttr("src", slide.imagesPaths[0])}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("h3", { class: "gallery-slider__title" }, toDisplayString(slide.title), 1),
                            createVNode("img", {
                              class: "gallery-slider__image",
                              src: slide.imagesPaths[0]
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        class: "gallery-slider__link",
                        to: slide.path
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "gallery-slider__title" }, toDisplayString(slide.title), 1),
                          createVNode("img", {
                            class: "gallery-slider__image",
                            src: slide.imagesPaths[0]
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (slide) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  class: ["gallery-slider__slide", __props.design],
                  key: slide.title
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      class: "gallery-slider__link",
                      to: slide.path
                    }, {
                      default: withCtx(() => [
                        createVNode("h3", { class: "gallery-slider__title" }, toDisplayString(slide.title), 1),
                        createVNode("img", {
                          class: "gallery-slider__image",
                          src: slide.imagesPaths[0]
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-slider__arrows" }, _cssVars))}><button class="gallery-slider__arrow-prev" type="button"></button><button class="gallery-slider__arrow-next" type="button"></button></div><div${ssrRenderAttrs(mergeProps({ class: "gallery-slider__pagination" }, _cssVars))}></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GallerySlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryStore = useGallery();
    galleryStore.fetchGallery();
    const route = useRoute();
    const routeName = route.params.section;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GallerySlider = _sfc_main$1;
      const _component_Social = _sfc_main$2;
      _push(`<!--[--><div data-v-6f8af5a2></div>`);
      if (Object.keys(unref(galleryStore).gallery).length > 0) {
        _push(`<section class="${ssrRenderClass(["gallery", unref(galleryStore).gallery[unref(routeName)].design])}" data-v-6f8af5a2><h2 class="gallery__title" data-v-6f8af5a2>${ssrInterpolate(unref(galleryStore).gallery[unref(routeName)].title)}</h2>`);
        _push(ssrRenderComponent(_component_GallerySlider, {
          data: unref(galleryStore).gallery[unref(routeName)].arts,
          design: unref(galleryStore).gallery[unref(routeName)].design
        }, null, _parent));
        _push(ssrRenderComponent(_component_Social, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/[section]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f8af5a2"]]);

export { index as default };
//# sourceMappingURL=index.b4f01c62.mjs.map
