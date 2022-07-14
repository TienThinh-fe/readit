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
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { useStore } from "vuex";

import Logo from "../components/Logo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import router from "../router/index";

const store = useStore();

const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      store.commit("setUserName", user.displayName);
      store.commit("setUserEmail", user.email);
      store.commit("setUserUid", user.uid);
      router.replace("/read");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
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