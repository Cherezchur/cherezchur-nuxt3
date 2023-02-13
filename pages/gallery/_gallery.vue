<template>
  <section class='gallery'>
    <h1>{{$route.params.gallery}}</h1>
  </section>
</template>

<script>

import { validate } from 'json-schema';

export default {
  validate({params}) {
    const GALLERY_PATHS = [
      'illustration_and_design',
      'painting_and_graphics',
      'tattoo_sketch_and_letters',
      'likes'
    ];

    return GALLERY_PATHS.some(path => path == params.gallery);
  }
}
</script>