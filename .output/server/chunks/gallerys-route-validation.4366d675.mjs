import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { executeAsync } from 'unctx';
import 'vue';
import 'ofetch';
import 'hookable';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue/server-renderer';
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

const gallerysRouteValidation = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const pagePath = String(to.path);
  if (to.matched.length !== 1)
    return;
  const { galleryPaths } = ([__temp, __restore] = executeAsync(() => $fetch(`/api/gallery-params`)), __temp = await __temp, __restore(), __temp);
  if (!galleryPaths.includes(pagePath)) {
    navigateTo("/gallery");
  }
});

export { gallerysRouteValidation as default };
//# sourceMappingURL=gallerys-route-validation.4366d675.mjs.map
