<template>
  <section class="main-product">
    <div class="container">
      <div class="main-product__content">
        <div class="main-product__img">
          <img src="@/assets/img/main-product.jpg" alt="" />
        </div>
        <div class="main-product__info">
          <AppTags class="main-product__tags" :list="[{ type: 'hit', text: 'хит продаж' }]" />
          <h2 class="title2 main-product__title">Композитная черепица</h2>
          <TextDropdown class="main-product__text-content" :max-length="107" :width="767">
            Идеальна для резко-континентального климата Казахстана.
            <br /><br />
            Задерживает сход снега и не парусит при штормовых ветрах. Не нагревается, не выцветает,
            не горит.
            <br /><br />
            Гарантированно не требует ремонта более 40 лет.
          </TextDropdown>
          <RouterLink class="btn main-product__btn" :to="{ name: 'catalog' }"
            >Каталог продукции</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppTags from '@/components/AppTags.vue';
import TextDropdown from '@/components/TextDropdown.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.main-product {
  &__content {
    display: flex;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
  }

  &__img {
    flex: 0 0 39.375%;

    img {
      width: 100%;
      height: 134%;
      display: block;
      object-fit: cover;
      object-position: top;
    }
  }

  &__info {
    padding: 28px 52px 62px;
    max-width: 740px;
    align-self: center;
  }

  &__tags {
    margin-bottom: 8px;
  }

  &__title {
    line-height: 1.35;
  }

  &__text-content {
    margin-top: 18px;
  }

  &__btn {
    margin-top: 60px;
  }

  @media (max-width: 1240px) {
    &__img {
      flex: 0 0 35%;
    }

    &__info {
      padding: 28px 38px 45px;
    }

    &__btn {
      margin-top: 48px;
    }
  }

  @media (max-width: 991px) {
    &__img {
      flex: 0 0 40%;
    }

    &__info {
      padding: 24px 30px 34px;
    }

    &__btn {
      margin-top: 34px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      position: relative;
      flex-direction: column;
      max-width: @content-sm-max-width;
      margin-left: auto;
      margin-right: auto;
    }

    &__img {
      flex: none;

      img {
        height: 260px;
      }
    }

    &__info {
      padding: 12px 20px 24px 14px;
    }

    &__tags {
      position: absolute;
      right: 8px;
      top: 220px;
    }

    &__text-content {
      margin-top: 8px;
    }

    &__btn {
      margin-top: 18px;
      width: 232px;
    }
  }

  @media (max-width: 479px) {
    &__tags {
      top: 164px;
    }

    &__img {
      img {
        height: 205px;
      }
    }
  }
}
</style>
