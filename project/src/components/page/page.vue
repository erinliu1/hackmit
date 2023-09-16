<template>
  <textbox mainText="PLEASE" />
  <forwards />
  <back />
</template>


<script>
import forwards from './forwards.vue'
import back from './backwards.vue'
import textbox from './text.vue'

export default {
  name: "mainPage",
  components: {
    textbox,
    forwards,
    back,
  }
}

</script>

