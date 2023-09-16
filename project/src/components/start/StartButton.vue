<template>
    <button>Start</button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:500');


button {
    background: -webkit-gradient(to right,#a2ccb6 0%,#fceeb5 50%,#ee786e 100%);
    background: linear-gradient(to right,#a2ccb6 0%,#fceeb5 50%,#ee786e 100%);
    background-size: 500%;
    border: none;
    border-radius: 5rem;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    color: #fff;
    cursor: pointer;
    font: 1.5em Raleway, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 5rem;
    letter-spacing: .05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 20rem;
}
   
button:hover {
    animation-name: gradient;
    -webkit-animation-name: gradient;
    animation-duration: 2s;
    -webkit-animation-duration: s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
}
    
@keyframes gradient {
    0% {background-position: 0% 50%;}
    100% {background-position: 100%;}
}

</style>