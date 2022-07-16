<template>
  <div class="read-page">
    <header-main @click-button="logout" button-text="Logout" />
    <div class="read-box">
      <div class="read-box-context">Hello, {{ userName }}</div>
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
          <primary-button
            text="Convert"
            type="solid"
            @click-button="handleConvert"
          />
        </div>
        <div class="result-box">
          <div class="loader" v-if="isLoading">
            <loader />
          </div>
          <div v-else>
            {{ result }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { getAuth, signOut } from "firebase/auth";

import router from "../router/index";

import HeaderMain from "../components/Header.vue";
import PrimaryButton from "../components/PrimaryButton.vue";
import Loader from "../components/Loader.vue";

defineProps({
  userName: {
    type: String,
    default: "",
  },
});

const uploadImage = ref(null);
const image = ref({});
const imageSrc = ref("");
const result = ref("");
const isLoading = ref(false);

const userName = computed(() => store.getters.getUserName);

const store = useStore();

const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => router.replace("/"))
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// handle upload image
const handleUpload = () => {
  uploadImage.value.click();
};

const previewImage = () => {
  image.value = uploadImage.value.files[0];
  const src = URL.createObjectURL(image.value);
  imageSrc.value = src;
};

// handle convert image to text
const handleConvert = async () => {
  isLoading.value = true;
  const formData = new FormData();
  formData.append("file", image.value);

  // convert
  const response = await axios({
    method: "post",
    url: "https://localhost:7259/api/Convert",
    data: formData,
  });
  result.value = response.data.text;

  // save to database
  const newResult = {
    text: response.data.text,
    userId: store.getters.getUid,
  };

  await axios({
    method: "post",
    url: "https://localhost:7259/api/Result",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(newResult),
  });

  isLoading.value = false;
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
      .result-box {
        .loader {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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