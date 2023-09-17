<template>
    <div class="container">
      <h1>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
    <typewriter-component v-bind:mainText="typewriter" />
  </template>
  
  <script>
  export default {
    name: "typeWriter",
    props: {
      mainText: String
    },
    data: () => {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: mainText ,// PUT STRING IN HERE
        pauseTextArray: ["!", ",", ".", "?", ";", ":"],
        pauseDelay: 700,
        typingSpeed: 75,
        erasingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
      this.textInfo = []
    },
    methods: {
        isExist: function(find, space) { // HOW DO I MAKE THE FUNCTION TAKE INPUTS
                    var length = space.length;
                    for(var i = 0; i < length; i++) {
                        if(space[i] == find) return true;
                    }
                    return false;
        },

        typeText() {
            if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);

                if (this.isExist(this.displayTextArray[this.displayTextArrayIndex].charAt( // HAVING IT PAUSE ON PUNCTUATION
                    this.charIndex), this.pauseTextArray)){
                        this.charIndex += 1;
                        setTimeout(this.typeText, this.pauseDelay);
                    }
                else {  
                    this.charIndex += 1;
                    setTimeout(this.typeText, this.typingSpeed);
                }
            } 
            
            // IF PUT IN MORE THINGS INTO TYPING ARRAY WILL NOT PRINT
            // else {
            //   this.typeStatus = false;
            // }
        },

      // THIS ERASES WHEN YOU FINISH THE FIRST STRING
        eraseText() {
            if (this.charIndex > 0) {
            if (!this.typeStatus) this.typeStatus = true;
            this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
                0,
                this.charIndex - 1
            );
            this.charIndex -= 1;
            setTimeout(this.eraseText, this.erasingSpeed);
            } else {
            this.typeStatus = false;
            this.displayTextArrayIndex += 1;
            if (this.displayTextArrayIndex >= this.displayTextArray.length)
                this.displayTextArrayIndex = 0;
            setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    //justify-content: center;
    //align-items: center;
  }
  h1 {
    font-size: 3rem;
    font-weight: normal;
    text-align: left;
    span.typed-text {
      color:#15a7a5;
    }
  }
  
  // Cursor blinking CSS Starts...
  .blinking-cursor {
    font-size: 3rem;
    color: #922e3f;
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
      color: #922e3f;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #922e3f;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #922e3f;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #922e3f;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #922e3f;
    }
  }
  // Cursor blinking CSS Ends...
  </style>