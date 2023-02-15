export default defineNuxtRouteMiddleware((to, from) => {

  interface params {
      path: string;
      title: string;
      style: string;
  }[];

  const paramsName = String(to.params.name)
  const data = $fetch(`/gallery-params`)

  data
    .then(result => {

      let paths: string[] = result.params.map(param => param.path)
      
      if(!paths.includes(paramsName)) {
        navigateTo('/gallery')
      }
      
    })
  
})