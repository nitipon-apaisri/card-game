<template>
  <div class="score">
    <div class="max-attempts">
      <h5>Attempts: {{ Attempt }}</h5>
    </div>
    <div class="points">
      <h5>Points: {{ Points }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Attempt() {
      return this.$root.maxAttempts;
    },
    Points() {
      return this.$root.points;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>