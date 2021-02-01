<template>
  <div id="app">
    <Alert class="alert" />
    <div class="container">
      <div class="content">
        <div class="score-board">
          <Points />
        </div>
        <div class="main-actions">
          <Card @showActions="activedActions" />
          <Actions class="action-btns" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert";
import Card from "@/components/Card";
import Actions from "@/components/Actions";
import Points from "@/components/Score.vue";
export default {
  name: "App",
  components: {
    Card,
    Actions,
    Alert,
    Points,
  },
  methods: {
    activedActions() {
      this.$root.start();
      let cardDisplay = document.querySelector(".card-display");
      cardDisplay.style.justifyContent = "space-between";
      let fontCard = document.querySelector(".font-card");
      fontCard.style.display = "block";
      document.querySelector(".action-btns").style.display = "block";
    },
  },
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
hr {
  margin: 0;
}
body {
  background-color: #222222;
  margin: 0 !important;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .alert {
      position: fixed;
      z-index: 1;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.95);
      display: none;
    }
    .container {
      width: 1240px;
      margin: auto;
      .content {
        .score-board {
          width: fit-content;
          margin-top: 50px;
          display: none;
          color: #fff;
          border: 5px solid #fff;
          padding: 40px 80px;
          height: fit-content;
        }
        .main-actions {
          .action-btns {
            margin-top: 50px;
            display: none;
          }
        }
      }
    }
  }
}
</style>
