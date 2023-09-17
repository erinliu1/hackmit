<script setup>
defineProps({
  imageName: {
    type: String,
    required: true
  }
})
</script>
<template>
    <img alt="mainImage" :src="`/src/components/icons/${imageName}`" width=650 height=382 />
</template>