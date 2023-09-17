<script>
import typewriter from './typewriter.vue'
import mainImage from './image.vue'

export default {
  name: "mainPage",
  props: {
    text: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true
    }
  },
  components: {
    typewriter,
    mainImage,
  }
}
</script>

<template>
  <div class="container"> 
    <img :src="`/src/components/icons/${imageName}`" width=650 height=382 />
    <typewriter :array="[`${text}`]" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
