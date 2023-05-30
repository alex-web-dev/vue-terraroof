<template>
  <div class="message__icon message__icon--success">
    <img src="@/assets/img/icons/check-white.svg" />
  </div>
  <div class="text message__text">Спасибо! Ваша заявка успешно отправлена!</div>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.message {
  &__icon {
    margin: 0 auto 18px;
    width: 60px;
    height: 60px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    &--error {
      background-color: @color-danger;
    }

    &--success {
      background-color: @color-success;
    }
  }

  &__text {
    font-size: 18px;
    text-align: center;
  }
}
</style>
