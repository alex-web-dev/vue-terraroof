<template>
  <div class="services">
    <div class="container">
      <div class="services__content">
        <h2 class="title4 title4--white services__title">Наши дополнительные услуги:</h2>
        <div class="services__info">
          <ul class="services__list">
            <li class="services__item" v-for="item in list">{{ item }}</li>
          </ul>
        </div>
        <div class="services__img">
          <img src="@/assets/img/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const list = reactive([
  'монтажные работы с вашими материалами',
  'демонтаж устаревшей кровли',
  'хранение купленного материала до 2 лет',
  'прием нераспечатанных остатков',
  'и другие ситуативные услуги, которые вы можете запросить у консультанта'
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.services {
  padding: 82px 0;
  background-color: @color-primary;

  &__content {
    display: grid;
    align-items: flex-start;
    justify-content: space-between;
    grid-template-columns: 45.6% 50%;
  }

  &__title {
    margin-bottom: 32px;
    grid-column: ~'1/2';
  }

  &__info {
    grid-column: ~'1/2';
  }

  &__item {
    padding: 32px 0;
    display: flex;
    align-items: flex-start;
    border-top: 0.5px solid #74aadb;
    color: #fff;
    font-size: 20px;
    line-height: 1.35;

    &:before {
      margin-top: 2px;
      margin-right: 10px;
      flex: 0 0 auto;
      .pseudo-icon('../img/icons/check-fill-white-circle.svg', 20px, 20px);
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__img {
    position: relative;
    padding-top: 83%;
    grid-column: ~'2/3';
    grid-row: ~'1/5';
    background: #ffffff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 270px;
      max-height: calc(100% - 40px);
      max-width: calc(100% - 40px);
      object-fit: contain;
    }
  }

  @media (max-width: 1240px) {
    padding: 60px 0;

    &__title {
      margin-bottom: 24px;
    }

    &__item {
      padding: 24px 0;
      font-size: 18px;
    }

    &__img {
      img {
        width: 210px;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 40px 0;

    &__title {
      margin-bottom: 20px;
    }

    &__item {
      padding: 20px 0;
      font-size: 16px;
    }

    &__img {
      img {
        width: 160px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 18px 0;

    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
      display: grid;
      grid-template-columns: auto;
    }

    &__title {
      margin-bottom: 16px;
    }

    &__item {
      font-size: 14px;
      padding: 18px 0;

      &:before {
        margin-top: 0;
      }

      &:first-child {
        padding-top: 0;
        border-top: none;
      }
    }

    &__img {
      margin-bottom: 18px;
      padding-top: 56.25%;
      grid-column: ~'1/2';
      grid-row: ~'2/3';
    }
  }
}
</style>
