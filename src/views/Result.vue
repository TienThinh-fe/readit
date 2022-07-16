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
        <div class="box-body">
          <result-item
            id="1"
            result="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            @delete-result="handleDelete"
          />
          <result-item
            id="2"
            result="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            @delete-result="handleDelete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderMain from "../components/Header.vue";
import ResultItem from "../components/ResultItem.vue";

const handleDelete = () => {
  console.log("Delete");
};
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