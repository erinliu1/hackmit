<script setup>
import Button from './StartButton.vue'
import Title from './Title.vue'
</script>

<template>
    <div class="main">
        <div class="block">
            <img alt="Vue logo" class="logo" src="../icons/logo.png" width="400" height="400" />
        </div>
        <div class="block">
            <Title />
            <Button />
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
}
.block {
    display: flex;
    flex-direction: column;
    place-items: center;
    flex-wrap: wrap;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>