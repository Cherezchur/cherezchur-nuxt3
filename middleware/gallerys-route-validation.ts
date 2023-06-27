export default defineNuxtRouteMiddleware( async (to, from) => {

    const pagePath = String(to.path)

    // @ts-ignore
    const { galleryPaths } = await $fetch(`/api/gallery-params`)

    if (!galleryPaths.includes(pagePath)) {
        navigateTo('/gallery')
    }
})