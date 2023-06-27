export default defineNuxtRouteMiddleware( async (to, from) => {

    const pagePath = String(to.path)

    // @ts-ignore
    const { galleryPaths } = await $fetch(`/galleryData`)

    if (!galleryPaths.includes(pagePath)) {
        navigateTo('/gallery')
    }
})