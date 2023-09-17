<!-- <template>
    <img alt="mainImage" :src="imageName" width=382 height=382 />
</template>

<script>
export default{
    name: "image",
    props: ['imageName']
}
</script>

   -->

<script setup>
// const packageName = require('package-name');
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