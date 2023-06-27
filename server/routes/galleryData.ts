import gallery from '../data/gallery.json'

export default defineEventHandler( () => {

  const data = gallery

  // @ts-ignore
  const slides = gallery.map((item) => {
    return item
  } )
  // @ts-ignore
  const gallerySectionsData = gallery.map(({ title, path, design }) => ({title, path, design}))
  // @ts-ignore
  const galleryPaths: string[] = gallery.map( param => param.path )

  return { data, slides, gallerySectionsData, galleryPaths }
})