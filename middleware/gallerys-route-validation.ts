import { useGalleryPaths } from '~/store/useGalleryPaths'

export default defineNuxtRouteMiddleware((to, from) => {

  const galleryPaths = useGalleryPaths()
  galleryPaths.FETCH_GALLERY_PATHS()
  const paths: String[] = galleryPaths.GET_PATHS
  
  const paramsName = String(to.params.name)

  console.log(paths, paramsName, paths.includes(paramsName));
  
  
  // if(!paths.includes(paramsName)) {
  //   return navigateTo('/gallery')
  // };
  
})