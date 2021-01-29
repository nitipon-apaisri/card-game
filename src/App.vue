<template>
  <div id="app">
    <div class="container">
      <Card @showActions="activedActions" />
      <Actions class="action-btns" />
      <button class="ok-btn" @click="ok">Ok</button>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Actions from "@/components/Actions";
export default {
  name: "App",
  components: {
    Card,
    Actions,
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
    ok() {
      this.$root.okButt();
      document.querySelector(".ok-btn").style.display = "none";
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
    margin-top: 60px;
    .container {
      width: 760px;
      margin: auto;
      .action-btns {
        display: none;
      }
      .ok-btn {
        display: none;
      }
    }
  }
}
</style>
