<script setup>
import { RouterView } from "vue-router";

</script>
<template>
  <RouterView class="router-view" v-slot="{ Component }">
    <Transition name="page-opacity" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>
.page-opacity-enter-active, 
.page-opacity-leave-active {
  transition: 1000ms ease all;
}

.page-opacity-enter-from, 
.page-opacity-leave-to {
  opacity: 0;
}
</style>