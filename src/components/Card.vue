<template>
  <div class="container">
    <div class="card">
      <div class="card-inner">
        <div class="top">
          <img :src="require('../assets/' + symbol + '.svg')" alt="symbol" />
          <h5>{{ number }}</h5>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
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
      if (this.randomNumber() === 11) {
        this.number = "J";
      } else if (this.randomNumber() === 12) {
        this.number = "Q";
      } else if (this.randomNumber() === 13) {
        this.number = "K";
      } else if (this.randomNumber() === 1) {
        this.number = "ACE";
      } else {
        this.number = this.randomNumber();
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
      height: 100%;
    }
  }
}
</style>