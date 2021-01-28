<template>
  <div class="card-display">
    <div class="font-card">
      <div class="card-inner">
        <div class="top">
          <img :src="require('../assets/' + Icon + '.svg')" alt="symbol" />
          <h5>{{ CardValue }}</h5>
        </div>
        <div class="middle">
          <img :src="require('../assets/' + Icon + '.svg')" alt="symbol" />
        </div>
        <div class="bottom">
          <img :src="require('../assets/' + Icon + '.svg')" alt="symbol" />
          <h5>{{ CardValue }}</h5>
        </div>
      </div>
    </div>
    <div class="back-card" @click="$emit('showActions')">
      <div class="card-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Icon() {
      return this.$root.symbol;
    },
    CardValue() {
      return this.$root.cardNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>