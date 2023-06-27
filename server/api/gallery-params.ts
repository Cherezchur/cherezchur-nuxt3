import sections from '../data/gallery-params.json'

export default defineEventHandler( () => {

    const galleryPaths: string[] = sections.map( param => param.path )

    return {
        sections,
        galleryPaths
    }
})