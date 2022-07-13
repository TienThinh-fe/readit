<template>
  <div class="read-page">
    <header-main @click-button="logout" button-text="Logout" />
    <div class="read-box">
      <div class="read-box-context">Hello, Hoang Tien Thinh</div>
      <div class="read-box-container">
        <div class="image-box"></div>
        <div class="button-box">
          <primary-button text="Upload" type="outlined" />
          <primary-button text="Convert" type="solid" />
        </div>
        <div class="result-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderMain from "../components/Header.vue";
import PrimaryButton from "../components/PrimaryButton.vue";

const logout = () => {
  console.log("Logout");
};
</script>

<style lang="scss" scoped>
.read-page {
  .read-box {
    margin: 0 160px;
    .read-box-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
      .image-box,
      .result-box {
        width: 300px;
        height: 400px;
        border-radius: 8px;
        border: 4px solid #2c3639;
      }
      .button-box {
        display: flex;
        flex-direction: column;
        div {
          margin: 14px 14px;
        }
      }
    }
  }
}
</style>