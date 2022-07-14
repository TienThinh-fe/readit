<template>
  <div class="app">
    <loader v-if="loading"></loader>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import router from "./router/index";
import "./firebase/index";

import Loader from "./components/Loader.vue";

const store = useStore();

const loading = ref(true);

setInterval(() => {
  loading.value = false;
}, 1000);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit("setUserName", user.displayName);
    store.commit("setUserEmail", user.email);
    store.commit("setUserUid", user.uid);
    router.replace("/read");
  } else {
    console.log("NO SIGN IN");
  }
});
</script>

<style lang="scss">
body {
  font-family: "Open Sans", sans-serif;
}

@import url("./reset.css");
</style>