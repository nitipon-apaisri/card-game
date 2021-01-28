<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "App",
  components: {
    Card,
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
  }
}
</style>
