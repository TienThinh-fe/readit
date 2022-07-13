<template>
  <div class="read-page">
    <header-main @click-button="logout" button-text="Logout" />
    <div class="read-box">
      <div class="read-box-context">Hello, Hoang Tien Thinh</div>
      <div class="read-box-container">
        <div class="image-box">
          <img v-if="imageSrc" :src="imageSrc" alt="" />
        </div>
        <div class="button-box">
          <input
            type="file"
            id="upload"
            style="display: none"
            @change="previewImage"
            ref="uploadImage"
          />
          <primary-button
            text="Upload"
            type="outlined"
            @click-button="handleUpload"
          />
          <primary-button text="Convert" type="solid" />
        </div>
        <div class="result-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import HeaderMain from "../components/Header.vue";
import PrimaryButton from "../components/PrimaryButton.vue";

const uploadImage = ref(null);
const image = ref({});
const imageSrc = ref("");

const logout = () => {
  console.log("Logout");
};

const handleUpload = () => {
  console.log("UPLOAD");
  uploadImage.value.click();
  console.log(uploadImage.value);
};

const previewImage = () => {
  image.value = uploadImage.value.files[0];
  console.log(image.value);
  const src = URL.createObjectURL(image.value);
  imageSrc.value = src;
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
      .image-box {
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
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