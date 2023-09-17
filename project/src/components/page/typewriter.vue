<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "typewriter",
  props: {
    array: {
      type: Array,
      required: true,
    },
    typeSpeed: {
      type: Number,
      default: 60,
    },
    start: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      typeValue: "",
      count: 0,
      typeStatus: false,
      arrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typewriter() {
      if (this.charIndex < this.array[this.arrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        let currentChar = this.array[this.arrayIndex].charAt(this.charIndex)
        this.typeValue += currentChar;
        this.charIndex ++;
        if (["!", ".", "?"].includes(currentChar)) {
          setTimeout(this.typewriter, 800);
        }
        else if ([",", ";", ":"].includes(currentChar)) {
          setTimeout(this.typewriter, 400);
        }
        else {
          setTimeout(this.typewriter, this.typeSpeed);
        }
      }
    },
  },
  created() {
    setTimeout(this.typewriter, this.start);
  },
});
</script>

<template>
  <div class="container">
    <p>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 3%;
  margin-bottom: 3%;
  width: 650px;
  height: fit-content;
  display: flex;
  //justify-content: center;
  //align-items: center;
}
p {
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  span.typed-text {
    color:#000000;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 20px;
  color: #000000;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
// Cursor blinking CSS Ends...
</style>