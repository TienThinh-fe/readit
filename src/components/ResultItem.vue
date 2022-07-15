<template>
  <div class="result-item">
    <div class="id">{{ id }}</div>
    <div class="result">{{ result }}</div>
    <div class="action" @click="$emit('deleteResult')">Delete</div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  result: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.result-item {
  display: grid;
  grid-template-columns: 100px 920px auto;
  margin-top: 20px;
  div {
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    padding: 12px 20px;
  }
  .result {
    text-align: left;
  }
  .action {
    background-color: #a27b5c;
    border-radius: 8px;
    font-weight: 600;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 20px;
    cursor: pointer;
    margin: 8px auto;
  }
}
</style>