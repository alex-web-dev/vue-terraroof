<template>
  <RouterLink class="logo header__logo" :to="{ name: 'home' }">
    <img class="logo__img" src="@/assets/img/logo.png" alt="" />
    <span class="logo__text">Кровля достойная Вашего дома</span>
  </RouterLink>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.logo {
  display: flex;
  align-items: center;

  &__img {
    max-width: 142px;
  }

  &__text {
    margin-left: 14px;
    display: inline-block;
    max-width: 108px;
    font-size: 12px;
    line-height: 1.25;
  }

  @media (max-width: 1140px) {
    &__text {
      display: none;
    }
  }

  @media (max-width: 991px) {
    &__img {
      max-width: 130px;
    }
  }

  @media (max-width: 640px) {
    &__img {
      max-width: 72px;
    }
  }
}
</style>
