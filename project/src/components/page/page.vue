<template>
  <h1>Here is a child component!</h1>
  <forwards />
</template>


<script>
import forwards from './forwards.vue'

export default {
  name: "header",
  components: {
    forwards
  }
}

</script>

