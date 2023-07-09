import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "gallerys-route-validation"
declare module "D:/SAITS/cherezchur-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}