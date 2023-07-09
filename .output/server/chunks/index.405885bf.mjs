import { _ as _sfc_main$1 } from './GalleryNavigate.2eff527f.mjs';
import { _ as _sfc_main$2 } from './Social.2f3405ba.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useGallery } from './useGallery.486400a1.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryStore = useGallery();
    galleryStore.fetchSections();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GalleryNavigate = _sfc_main$1;
      const _component_Social = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery-nav" }, _attrs))}><h1 class="gallery-nav__title">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u0438</h1>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.405885bf.mjs.map
