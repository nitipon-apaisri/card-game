<template>
  <div class="container">
    <div class="card-display">
      <div class="font-card">
        <div class="card-inner">
          <div class="top">
            <img :src="require('../assets/' + symbol + '.svg')" alt="symbol" />
            <h5>{{ number }}</h5>
          </div>
          <div class="middle">
            <img :src="require('../assets/' + symbol + '.svg')" alt="symbol" />
          </div>
          <div class="bottom">
            <img :src="require('../assets/' + symbol + '.svg')" alt="symbol" />
            <h5>{{ number }}</h5>
          </div>
        </div>
      </div>
      <div class="back-card" @click="start()">
        <div class="card-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "1",
      symbol: "clubs",
      maxNumber: 13,
      allSymbol: ["clubs", "diamonds", "hearts", "spades"],
    };
  },
  methods: {
    test() {
      console.log("hll");
    },
    randomNumber() {
      return Math.floor(Math.random() * Math.floor(this.maxNumber) + 1);
    },
    randomSymbol() {
      let randomIndex = Math.floor(Math.random() * this.allSymbol.length);
      let randomElement = this.allSymbol[randomIndex];
      return randomElement;
    },
    start() {
      this.number = this.randomNumber().toString();
      if (this.number == 11) {
        this.number = "J";
      } else if (this.number == 12) {
        this.number = "Q";
      } else if (this.number == 13) {
        this.number = "K";
      } else if (this.number == 1) {
        this.number = "A";
      }
      let cardDisplay = document.querySelector(".card-display");
      cardDisplay.style.justifyContent = "space-between";
      let fontCard = document.querySelector(".font-card");
      fontCard.style.display = "block";
      this.symbol = this.randomSymbol();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 760px;
  margin: auto;
  .card-template {
    border-radius: 12px;
    width: 250px;
    height: 370px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .card-display {
    display: flex;
    width: 600px;
    margin: auto;
    justify-content: center;
    .font-card {
      display: none;
      @extend .card-template;
      .card-inner {
        border-radius: 10px;
        background: #f7f7f7;
        display: flex;
        padding: 8px;
        box-sizing: border-box;
        height: 350px;
        flex-direction: column;
        justify-content: space-between;
        .corner-img {
          img {
            width: 16px;
          }
        }
        .top {
          align-self: flex-start;
          @extend .corner-img;
        }
        .middle {
          img {
            width: 32px;
          }
        }
        .bottom {
          align-self: flex-end;
          @extend .corner-img;
          transform: rotate(180deg);
        }
      }
    }
    .back-card {
      @extend .card-template;
      .card-inner {
        height: 350px;
        box-sizing: border-box;
        border-radius: 10px;
        background-image: url("../assets/dots.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #ffd481;
      }
    }
  }
}
</style>