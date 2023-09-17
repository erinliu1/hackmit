<template>
  <mainImage imageName="monkey-master.png" />
  <typewriter textInfo="aaaaa"/>
  <forwards />
  <back />
</template>


<script>
import forwards from './forwards.vue'
import back from './backwards.vue'
import typewriter from './typewriter.vue'
import mainImage from './image.vue'

export default {
  name: "mainPage",
  components: {
    typewriter,
    forwards,
    back,
    mainImage,
    mainText,
  }
}

</script>

