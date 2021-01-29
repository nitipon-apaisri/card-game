<template>
  <div class="actions">
    <button class="lower" @click="lower">lower</button>
    <button class="equal" @click="equal">equal</button>
    <button class="higher" @click="higher">higher</button>
  </div>
</template>

<script>
export default {
  methods: {
    lower() {
      this.$root.lower();
    },
    higher() {
      this.$root.higher();
    },
    equal() {
      this.$root.equal();
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  .buttons {
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    border: 1px solid #fff;
    padding: 8px 24px;
    background-color: transparent;
  }
  .buttons:hover {
    background-color: #fff;
    color: #000;
    transition: 300ms;
  }
  .lower {
    @extend .buttons;
    border-radius: 50px 0 0 50px;
  }
  .equal {
    @extend .buttons;
  }
  .higher {
    @extend .buttons;
    border-radius: 0 50px 50px 0;
  }
}
</style>