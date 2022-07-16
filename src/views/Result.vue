<template>
  <div class="result-page">
    <header-main button-text="Logout" nav="read" />
    <div class="result-box">
      <div class="read-box-context">Hello, Hoang Tien Thinh</div>
      <div class="result-box-container">
        <div class="box-header">
          <div class="id">ID</div>
          <div class="result">RESULT</div>
          <div class="action">ACTION</div>
        </div>
        <div class="box-body" v-for="result in listResult" :key="result">
          <result-item
            :id="result.id.toString()"
            :result="result.text"
            @delete-result="handleDelete(result.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";

import HeaderMain from "../components/Header.vue";
import ResultItem from "../components/ResultItem.vue";

const store = useStore();

const listResult = ref([]);

const handleDelete = async (resultId) => {
  const response = await axios.delete("https://localhost:7259/api/Result", {
    params: {
      id: resultId,
    },
  });
};

onMounted(async () => {
  const response = await axios.get("https://localhost:7259/api/Result", {
    params: {
      userId: store.getters.getUid,
    },
  });
  listResult.value = response.data.value;
});
</script>

<style lang="scss" scoped>
.result-page {
  .result-box {
    margin: 0 160px;
    &-container {
      margin-top: 40px;
      .box-header {
        display: grid;
        grid-template-columns: 100px 920px auto;
        border: 3px solid #000;
        border-radius: 8px;
        div {
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          padding: 12px 20px;
        }
        .result {
          text-align: left;
        }
      }
    }
  }
}
</style>