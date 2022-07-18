<template>
  <div class="login-page">
    <logo />
    <div class="login-box">
      <div class="title">Login</div>
      <primary-button text="with Google" length="long" @click="loginGoogle" />
      <primary-button text="with Facebook" length="long" :disable="true" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useStore } from "vuex";

import Logo from "../components/Logo.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import router from "../router/index";

const store = useStore();

const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;

      // commit into vuex store
      store.commit("setUserName", user.displayName);
      store.commit("setUserEmail", user.email);
      store.commit("setUserUid", user.uid);

      // call api to save user data into database
      const newUser = {
        name: user.displayName,
        email: user.email,
        id: user.uid,
      };

      await fetch("https://localhost:7259/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      router.replace("/read");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
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