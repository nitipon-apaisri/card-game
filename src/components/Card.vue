<template>
  <div class="container">
    <div class="card">
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
    <button @click="start()">Start!</button>
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
      this.symbol = this.randomSymbol();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .card {
    border-radius: 12px;
    width: 250px;
    height: 350px;
    padding: 10px;
    background-color: #fff;
    .card-inner {
      border-radius: 10px;
      background: #f7f7f7;
      display: flex;
      height: 330px;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;
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
}
</style>