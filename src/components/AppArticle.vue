<template>
  <section class="article">
    <div class="container">
      <div class="article__content">
        <div class="article__info">
          <h2 class="title2 article__title"><strong>Бесплатная</strong> 3D‑визуализация</h2>
          <div class="text article__text">
            <p>
              Не получается представить, как будет выглядеть Ваша крыша с новым материалом? При
              покупке кровли мы создаем 3D-визуализацию в подарок!
            </p>
          </div>
          <button
            class="btn article__btn article__btn--desktop"
            @click="storeModals.open('callback')"
          >
            Узнать подробнее
          </button>
          <RouterLink class="btn article__btn article__btn--mobile" :to="{ name: 'catalog' }">
            Каталог продукции
          </RouterLink>
        </div>
        <img class="article__img" src="@/assets/img/article.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useModals } from '@/stores/modals';

const storeModals = useModals();
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.article {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
  }

  &__info {
    padding: 82px 20px 82px 72px;
    flex: 0 0 calc(45% - 10px);
  }

  &__text {
    margin-top: 18px;
    max-width: 410px;
  }

  &__btn {
    margin-top: 60px;
    min-width: 226px;

    &--mobile {
      display: none;
    }
  }

  &__img {
    max-width: calc(55% + 10px);
    object-fit: cover;

    &--end {
      margin-top: 42px;
      align-self: flex-end;
    }
  }

  @media (max-width: 1240px) {
    &__info {
      padding: 60px 20px 60px 52px;
    }

    &__text {
      margin-top: 16px;
    }

    &__btn {
      margin-top: 52px;
    }

    &__img {
      &--end {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 991px) {
    &__info {
      padding: 40px 20px 40px 32px;
    }

    &__text {
      margin-top: 14px;
    }

    &__btn {
      margin-top: 42px;
    }

    &__img {
      &--end {
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      max-width: @content-sm-max-width;
      background-color: #f4fbff;
    }

    &__info {
      padding: 18px 14px 20px;
    }

    &__title {
      line-height: 1.35;
    }

    &__text {
      margin-top: 8px;
      font-size: 13px;
      line-height: 1.375;
    }

    &__btn {
      margin-top: 18px;
      min-width: 232px;

      &--desktop {
        display: none;
      }

      &--mobile {
        display: inline-block;
      }
    }

    &__img {
      width: 100%;
      max-width: 420px;

      &--end {
        margin-top: 0;
        object-fit: cover;
        object-position: top right;
      }
    }
  }

  @media (max-width: 479px) {
    &__img {
      max-height: 55vw;
    }
  }
}
</style>
