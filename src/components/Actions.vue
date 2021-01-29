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
</style>