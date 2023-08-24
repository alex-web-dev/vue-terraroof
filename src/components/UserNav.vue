<template>
  <div class="user-nav header__user-nav">
    <RouterLink class="user-nav__link" :to="{ name: 'cart' }">
      <img src="@/assets/img/icons/cart.svg" alt="" />
    </RouterLink>
    <!-- <a class="user-nav__link" href="#">
      <img src="@/assets/img/icons/user.svg" alt="" />
    </a> -->
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.user-nav {
  display: flex;
  align-items: center;

  &__link {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:first-child) {
      margin-left: 14px;
    }
  }
}
</style>
