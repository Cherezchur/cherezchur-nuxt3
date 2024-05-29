export function isPage(pageName) {
    const route = useRoute()
    return route.name === pageName
}
