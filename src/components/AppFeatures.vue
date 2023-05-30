<template>
  <section class="features">
    <div class="container">
      <div class="features__content">
        <div class="features__header">
          <h2 class="title2 features__title">Наши решающие преимущества</h2>
          <button class="link-more features__more" @click="storeModals.open('callback')">
            Заказать просчет Вашего проекта с 3D визуализацией
          </button>
        </div>
        <div class="features__list">
          <div class="features__item accordion accordion--mobile" v-for="item in list" :key="item">
            <div class="features__item-line" data-aos="fade-in"></div>
            <h3
              class="title5 features__item-title accordion__btn"
              data-aos="fade-in"
              data-aos-delay="600"
              data-wow-offset="265"
              v-html="item.title"
            ></h3>
            <div class="accordion__content">
              <div class="accordion__main">
                <p class="text features__item-text" data-aos="fade-in" data-aos-delay="900">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useModals } from '@/stores/modals';

const storeModals = useModals();

const list = reactive([
  {
    title: 'Эстетика на века:',
    text: 'кровельные материалы TerraRoof не выцветают, не подвергаются коррозии и не теряют первоначальный вид.'
  },
  {
    title: 'Идеальная шумо -&nbsp;и&nbsp;теплоизоляция:',
    text: 'под нашей крышей не потревожит ни стук дождя, ни шум метели, температура в Вашем доме комфортна при любой погоде.'
  },
  {
    title: 'Гарантийный срок:',
    text: 'гарантийный срок от 30 до 100+ лет в зависимости от материала. Выбор TerraRoof - Ваше грамотное вложение средств.'
  },
  {
    title: 'Безупречный сервис:',
    text: 'более 4000 довольных клиентов. Мы ведем проект от бесплатного создания 3Д модели до полного авторского надзора и приема оставшихся материалов. Ваше время - наш приоритет.'
  }
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.features {
  padding: 80px 0 100px;
  background-color: @color-primary;

  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__title {
    width: calc(50% - 55px);
    line-height: 1.37;
    color: #fff;
  }

  &__more {
    margin-top: 32px;
    width: calc(50% - 55px);
    display: inline-block;
    text-align: left;
    color: #fff;
  }

  &__list {
    margin-top: -54px;
    padding-top: 70px;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    margin-top: 54px;
    width: calc(50% - 55px);

    &:nth-child(2n) {
      margin-left: 110px;
    }

    &-line {
      margin-bottom: 35px;
      width: 100%;
      height: 0.5px;
      background-color: #74aadb;
    }

    &-title {
      display: flex;
      align-items: center;
      color: #fff;
      max-width: 540px;

      &:before {
        margin-right: 10px;
        flex: 0 0 auto;
        .pseudo-icon('../img/icons/check-fill-white.svg', 20px, 20px);
      }
    }

    &-text {
      padding-top: 10px;
      max-width: 540px;
      color: #e4f5ff;
      line-height: 1.375;
    }
  }

  @media (max-width: 1240px) {
    padding: 60px 0 80px;

    &__title {
      width: calc(50% - 20px);
    }

    &__more {
      margin-top: 24px;
      width: calc(50% - 20px);
    }

    &__list {
      padding-top: 50px;
      margin-top: -40px;
    }

    &__item {
      margin-top: 40px;
      width: calc(50% - 20px);

      &:nth-child(2n) {
        margin-left: 40px;
      }

      &-line {
        margin-bottom: 30px;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 40px 0 55px;

    &__more {
      margin-top: 16px;
    }

    &__list {
      padding-top: 40px;
      margin-top: -30px;
    }

    &__item {
      margin-top: 30px;
      width: calc(50% - 15px);

      &:nth-child(2n) {
        margin-left: 30px;
      }

      &-line {
        margin-bottom: 25px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 24px 0 45px;

    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__header {
      max-width: 230px;
      display: block;
    }

    &__title {
      font-size: 24px;
      width: 100%;
    }

    &__more {
      margin-top: 8px;
      width: 100%;
    }

    &__list {
      padding-top: 24px;
      margin-top: -24px;
    }

    &__item {
      margin-top: 24px;
      width: 100%;

      &-title {
        padding-right: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:after {
          margin-left: auto;
          padding-left: 10px;
          flex: 0 0 auto;
          .pseudo-icon('../img/icons/right-white.svg', 9px, 20px);
          transition: transform 0.4s;
        }

        &.accordion__btn--active {
          &:after {
            transform: rotate(90deg);
          }
        }
      }

      &-text {
        padding-right: 10px;
        opacity: 1;
        visibility: visible !important;
        animation-name: none !important;
      }

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
}
</style>
