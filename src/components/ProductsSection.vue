<template>
  <section class="products-section">
    <div class="container">
      <div class="products-section__content">
        <h2 v-if="title" class="title2 title2--center products-section__title">{{ title }}</h2>
        <AppProducts class="products-section__main" :products="products" type="preview" />
      </div>
    </div>
  </section>
</template>

<script setup>
import AppProducts from '@/components/AppProducts.vue';
import { useProducts } from '@/stores/products';

defineProps({
  title: {
    type: String,
    default: null
  }
});

const storeProducts = useProducts();
const products = storeProducts.getProducts({ limit: 3 });
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.products-section {
  &__title {
    margin-bottom: 50px;

    &--center {
      text-align: center;
    }
  }

  &__subtitle {
    margin-bottom: 24px;
    font-weight: 700;
  }

  @media (max-width: 1240px) {
    &__title {
      margin-bottom: 32px;
    }

    &__subtitle {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 24px;
    }

    &__subtitle {
      margin-bottom: 16px;
    }

    &__list {
      margin: -24px -6px 0;
    }

    &__item {
      margin: 24px 6px 0;
      width: calc(50% - 12px);
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      display: none;
    }

    &__subtitle {
      margin-bottom: 12px;
    }

    &__list {
      margin-top: -18px;
    }

    &__item {
      margin-top: 18px;
      width: calc(100% - 20px);
    }
  }
}
</style>
