<template>
  <div class="modal">
    <section class="msg-box">
      <h2>{{ Msg }}</h2>
      <button class="ok-btn" @click="ok">Ok</button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    ok() {
      this.$root.okButt();
    },
  },
  computed: {
    Msg() {
      return this.$root.msg;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>