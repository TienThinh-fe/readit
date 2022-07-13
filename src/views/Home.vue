<template>
  <div class="home-page">
    <header-main @click-button="login" button-text="Login" />
    <div class="context">
      <span class="context-general"
        >Read text from <br />
        your image <br />
        easily with
      </span>
      <span class="context-name">readit</span>
    </div>
    <div class="start-button">
      <primary-button
        text="Get started"
        type="solid"
        length="long"
        @click-button="login"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderMain from "../components/Header.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import router from "../router/index";

const login = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.home-page {
  .context {
    margin: 80px 80px 20px 80px;
    font-size: 80px;
    max-width: 60%;
    line-height: 96px;
    .context-name {
      font-weight: bold;
      color: #2c3639;
    }
  }
  .start-button {
    margin: 0 80px;
  }
}
</style>