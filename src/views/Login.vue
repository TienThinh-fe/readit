<template>
  <div class="login-page">
    <logo />
    <div class="login-box">
      <div class="title">Login</div>
      <primary-button text="with Google" length="long" @click="loginGoogle" />
      <primary-button
        text="with Facebook"
        length="long"
        @click="loginFacebook"
      />
    </div>
  </div>
</template>

<script setup>
import Logo from "../components/Logo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import router from "../router/index";

const loginGoogle = () => {
  console.log("loginGoogle");
  router.replace("/read");
};

const loginFacebook = () => {
  console.log("loginFacebook");
  router.replace("/read");
};
</script>

<style lang="scss" scoped>
.login-page {
  margin: 40px 80px;
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 35%;
    left: 45%;
    .title {
      font-weight: bold;
      font-size: 80px;
      margin: 20px 0;
    }
    .button {
      margin: 12px 0;
    }
  }
}
</style>