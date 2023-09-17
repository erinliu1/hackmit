<template>
    <span class="container">
        <div class="first">Embark on a journey</div> 
        <div class="rest"> 
            <span class="remainder">into the world of Chinese literature.</span>
        </div>
    </span>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto:300');
.container {
    display:flex;
    flex-direction: row;
    place-items: center;
    font-family: 'Roboto';
    color: black;
    font-size: 27px;
    overflow:hidden;
    white-space:nowrap;
    text-align:center;
    margin-bottom: 2%;
}


.first {
    text-align: right;
    animation: showup 7s infinite;
}

.rest {
    animation: reveal 7s infinite;
}
.remainder {
    animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-1000px; }
    20% { margin-left:-1000px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:423px;}
    80% {opacity:1;}
    100% {opacity:0;width:423px;}
} 
</style>