<template>
  <div class="modal" @click="closeModal">
    <section class="msg-box">
      <h1>{{ Msg }}</h1>
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
    closeModal() {
      document.querySelector(".alert").style.display = "none";
    },
  },
  computed: {
    Msg() {
      return this.$root.msg;
    },
    Attempts() {
      return this.$root.maxAttempts;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  .msg-box {
    h1 {
      font-size: 3rem;
      color: #fff;
    }
    h3 {
      color: #fff;
    }
    button {
      margin-top: 20px;
      padding: 12px 36px;
      text-transform: uppercase;
    }
  }
}
</style>