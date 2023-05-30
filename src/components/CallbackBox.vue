<template>
  <div class="callback-box">
    <a class="icon-circle callback-box__btn" :href="link" target="_blank">
      <img class="icon-circle__icon" src="@/assets/img/icons/whatsapp.svg" alt="" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/animation.less';

.callback-box {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 30;

  &__btn {
    width: 82px;
    height: 82px;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: pulse 3s infinite;

    img {
      width: 51px;
      height: 51px;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 1240px) {
    bottom: 25px;
    right: 25px;

    &__btn {
      width: 68px;
      height: 68px;

      img {
        width: 42px;
        height: 42px;
      }
    }
  }

  @media (max-width: 991px) {
    display: none;
  }
}
</style>
