<template>
  <forwards />
  <back />
</template>


<script>
import forwards from './forwards.vue'
import back from './backwards.vue'

export default {
  name: "mainPage",
  components: {
    forwards,
    back,
  }
}

</script>

