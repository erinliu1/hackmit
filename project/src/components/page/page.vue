<template>
  <mainImage imageName="monkey-master.png" />
  <textbox mainText="PLEASE" />
  <forwards />
  <back />
</template>


<script>
import forwards from './forwards.vue'
import back from './backwards.vue'
import textbox from './text.vue'
import mainImage from './image.vue'

export default {
  name: "mainPage",
  components: {
    textbox,
    forwards,
    back,
    mainImage,
  }
}

</script>

