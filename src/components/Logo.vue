<template>
  <div class="logo" @click="handleClick">readit</div>
</template>

<script setup>
import router from "../router/index";

const handleClick = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.logo {
  font-weight: bold;
  color: #2c3639;
  font-size: 40px;
  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>