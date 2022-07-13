<template>
  <div class="header">
    <logo />
    <div class="nav">
      <router-link to="/about" class="about">About</router-link>
      <primary-button
        :text="`${buttonText}`"
        type="solid"
        length="short"
        @click-button="$emit('clickButton')"
      />
    </div>
  </div>
</template>

<script setup>
import Logo from "./Logo.vue";
import PrimaryButton from "./PrimaryButton.vue";

defineProps({
  buttonText: {
    type: String,
    default: "Login",
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 80px;
  .nav {
    .about {
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      color: #000;
      margin-right: 40px;
    }
  }
}
</style>