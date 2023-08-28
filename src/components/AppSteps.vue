<template>
  <div class="steps">
    <div class="container">
      <div class="steps__content">
        <div class="steps__left">
          <h3 class="title5 steps__title">Как мы создаем крышу вашей мечты?</h3>
        </div>
        <div class="steps__right">
          <ol class="steps__list">
            <li class="text steps__item" v-for="step in steps" :key="step">{{ step }}</li>
          </ol>
          <div class="text steps__advantage">остаемся на связи по гарантии</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const steps = reactive([
  'получаем заявку',
  'выбираем оптимальный материал',
  'создаем бесплатно проект и 3D-визуализацию',
  'cогласовываем смету, подписываем договор',
  'отгружаем материал',
  'осуществляем монтаж / обучаем вашу бригаду',
  'сопровождаем проект с отчетами 2 раза в день',
  'финально проверяем и сдаем объект'
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.steps {
  &__content {
    padding-top: 20px;
    padding-bottom: 24px;
    display: flex;
    border-top: 0.5px solid rgba(#000, 0.2);
  }

  &__left {
    padding-top: 60px;
    padding-right: 50px;
    width: 50%;
  }

  &__title {
    line-height: 1.375;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__right {
    padding: 64px 0 86px 50px;
    width: 50%;
    border-left: 1px solid #e0e5ed;
  }

  &__list {
    counter-reset: step-num;
  }

  &__item {
    list-style-type: none;
    display: flex;

    &:before {
      margin-right: 8px;
      counter-increment: step-num;
      content: counter(step-num);
      flex: 0 0 auto;
      text-align: center;
      line-height: 24px;
      width: 24px;
      height: 24px;
      background-color: @color-primary;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
    }

    &:not(:first-child) {
      margin-top: 18px;
    }
  }

  &__advantage {
    margin-top: 42px;
    padding: 24px 26px;
    background-color: @color-primary;
    border-radius: 16px;
    color: #fff;
    display: flex;

    &:before {
      margin-right: 10px;
      flex: 0 0 auto;
      .pseudo-icon('../img/icons/check-fill-white-circle.svg', 20px, 20px);
    }
  }

  @media (max-width: 1240px) {
    &__left {
      padding-top: 40px;
      padding-right: 42px;
    }

    &__right {
      padding: 44px 0 64px 42px;
    }
  }

  @media (max-width: 1240px) {
    &__left {
      padding-top: 32px;
      padding-right: 32px;
    }

    &__right {
      padding: 32px 0 44px 32px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }

    &__advantage {
      margin-top: 32px;
      padding: 20px 22px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      max-width: @content-sm-max-width;
    }

    &__left {
      padding: 0;
      width: 100%;
    }

    &__right {
      margin-top: 18px;
      padding: 0;
      width: 100%;
      border-left: 0;
    }

    &__item {
      line-height: 1.25;

      &:before {
        margin-right: 6px;
        width: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
      }

      &:not(:first-child) {
        margin-top: 12px;
      }
    }

    &__advantage {
      margin-top: 18px;
      padding: 16px 18px;
    }
  }
}
</style>
