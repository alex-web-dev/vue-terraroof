<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <AppLogo class="header__logo" />
        <TheMenu class="header__menu" />
        <UserNav class="header__user-nav" />
        <a class="header__contact" href="tel:+77776333330">
          <div class="header__contact-icon">
            <img src="@/assets/img/icons/phone.svg" alt="" />
          </div>
          <div class="header__contact-info">
            <div class="header__contact-title">+7 (777) 633 33 30</div>
            <div class="header__contact-text">работаем по всему Казахстану</div>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import TheMenu from '@/components/TheMenu.vue';
import AppLogo from '@/components/AppLogo.vue';
import UserNav from '@/components/UserNav.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/animation.less';

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fefefe;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  z-index: 20;

  &__content {
    padding: 26px 0 24px;
    display: flex;
    align-items: center;
  }

  &__menu {
    margin-left: auto;
  }

  &__user-nav {
    margin-left: 34px;
  }

  &__contact {
    margin-left: 10px;
    transform: translateX(22px);
    display: flex;
    align-items: flex-start;

    &:hover &-icon {
      animation: pulse-small 1.5s infinite;
    }

    &-icon {
      margin-right: 8px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: @color-success;
    }

    &-title {
      color: @color-gray;
      font-weight: 600;
      line-height: 1.375;
    }

    &-text {
      font-size: 12px;
      line-height: 1.33;
      color: @color-gray;
    }
  }

  @media (max-width: 1340px) {
    &__contact {
      margin-left: 32px;
      transform: translateX(0);
    }
  }

  @media (max-width: 991px) {
    &__content {
      padding: 22px 0 20px;
    }

    &__contact {
      display: none;
    }

    &__user-nav {
      margin-left: auto;
    }

    &__menu {
      margin-left: 18px;
      order: 2;
    }
  }

  @media (max-width: 640px) {
    &__content {
      padding: 14px 0 16px;
    }
  }
}

.body--lock .header {
  padding-right: 17px;
}
</style>
