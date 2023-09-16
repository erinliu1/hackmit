<script setup>
import Button from './StartButton.vue'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="../icons/logo.svg" width="125" height="125" />

        <!-- <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div> -->
    </header>
    <main>
        <Button />
    </main>
</template>

<style scoped>
body {
    background: #ffecd9;
    display: grid;
    height: 100vh;
    margin: 0;
    place-items: center;
    padding: 1rem;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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