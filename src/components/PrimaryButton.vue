<template>
  <div
    :class="[
      type === 'solid' ? 'solid' : 'outlined',
      length === 'short' ? 'short' : 'long',
      disable ? 'disabled' : '',
      'button',
    ]"
    @click="$emit('clickButton')"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Login",
  },
  type: {
    type: String,
    default: "solid",
  },
  length: {
    type: String,
    default: "short",
  },
  disable: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  min-width: 92px;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05rem;
  color: #fff;
  background-color: #2c3639;
  border: none;
  cursor: pointer;
  text-align: center;
}

.long {
  min-width: 160px;
  padding: 16px;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.outlined {
  background-color: #fff;
  color: #2c3639;
  border: 1px solid #2c3639;
}
</style>