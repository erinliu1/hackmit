<script setup>
  import mainPage from './page.vue';
  import back from './backwards.vue';
  import forward from './forwards.vue';
  import router from '../../router';
  import { ref } from 'vue';

  const images = ["1.png", "2.png", "3.png", "4.png"];
  const texts = [
    "Once upon a time, there was a beautiful mountain at the edge of the jade sea. Legend says that this mountain was conceived by Heaven and Earth to be a place of peace and harmony for animals, plants, and other mountain spirits to reside. This mountain was called the Flower-Fruit Mountain.",
    "One day, a large boulder at the top of the mountain began to rumble and shake. A deep crevice slowly formed down the center of the boulder, and a bright beam of light shone from within the crack.",
    "Suddenly, the boulder burst apart, and out leapt a divine monkey!",
    "The divine monkey wandered around for thousands of years, eventually befriending another group of monkeys that were residing in the Flower-Fruit Mountain."
  ]
  let i = 0
  const componentKey = ref(0);
  const goNextPage = () => {
    if (i==texts.length-1) {
      router.push('end');
    }
    else {
      i++;
      componentKey.value += 1;
    }
  };
  const goPrevPage = () => {
    if (i==0) {
      router.push('/');
    }
    else {
      i--;
      componentKey.value += 1;
    }
  };
</script>
  
<template>
  <div class="container">
    <mainPage :key="componentKey" :imageName="images[i]" :text="texts[i]" />
    <div class="buttons">
        <back @click="goPrevPage"/>
        <forward @click="goNextPage"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  width: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
  