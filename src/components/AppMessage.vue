<template>
  <div class="message" :class="message.type ? 'message--' + message.type : ''">
    <p class="message__text">{{ message.text }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.message {
  padding: 12px 15px;
  border-radius: 6px;
  background: #e0e0e0;

  &--success {
    background-color: #109334;
    color: #fff;
  }

  &--error {
    background-color: #cd1518;
    color: #fff;
  }

  @media (max-width: 991px) {
    padding: 12px;

    &__text {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    padding: 10px;

    &__text {
      font-size: 14px;
    }
  }
}
</style>
