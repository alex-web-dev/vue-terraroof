<template>
  <section class="offer main__section">
    <div class="container">
      <div class="offer__content">
        <div class="offer__img">
          <img src="@/assets/img/offer.png" alt="" />
        </div>
        <div class="offer__info">
          <AppTags class="offer__tags" :list="[{ type: 'sale', text: 'акция -20%' }]" />
          <div class="title2 title2--white offer__title">Лучшее предложение</div>
          <p class="text text--white offer__text">Композитная черепица Metrotile</p>
          <RouterLink class="btn btn--white offer__btn" to="#">Заказать выгодно</RouterLink>
        </div>
        <img class="offer__bg" src="@/assets/img/icons/logo-blue.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppTags from '@/components/AppTags.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.offer {
  &__content {
    position: relative;
    padding-top: 34px;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    background-color: @color-primary;
  }

  &__img {
    position: relative;
    z-index: 1;
    flex: 0 0 47.5%;
    display: flex;

    img {
      margin-top: auto;
      display: block;
    }
  }

  &__info {
    position: relative;
    z-index: 1;
    padding: 30px 30px 30px 75px;
  }

  &__tags {
    margin-bottom: 8px;
  }

  &__title {
    color: #fff;
  }

  &__text {
    margin-top: 18px;
  }

  &__btn {
    margin-top: 62px;
  }

  &__bg {
    position: absolute;
    right: 10px;
    top: 37px;
    width: 921px;
  }

  @media (max-width: 991px) {
    &__content {
      padding-top: 30px;
    }

    &__info {
      padding-top: 20px;
      padding-left: 40px;
    }

    &__tags {
      margin-bottom: 6px;
    }

    &__text {
      margin-top: 14px;
    }

    &__btn {
      margin-top: 40px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      padding: 14px 14px 30px;
      flex-direction: column;
      max-width: @content-sm-max-width;
    }

    &__img {
      position: relative;
      border: 0.5px solid #74aadb;
      border-radius: 16px;
      flex: none;
      padding-top: 66.25%;
      overflow: hidden;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__info {
      margin-top: 12px;
      padding: 0;
    }

    &__tags {
      margin-bottom: 10px;
    }

    &__text {
      margin-top: 8px;
      font-size: 16px;
    }

    &__btn {
      margin-top: 18px;
      width: 100%;
    }

    &__bg {
      left: 42px;
      bottom: -15%;
      top: unset;
      min-width: 350px;
      max-width: 350px;
    }
  }
}
</style>
