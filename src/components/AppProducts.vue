<template>
  <div class="products">
    <div class="products__list">
      <ProductCard
        class="products__item"
        v-for="product in products"
        :data="product"
        :type="type"
        :key="product"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';

defineProps({
  title: {
    type: String,
    default: null
  },
  products: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: null
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.products {
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

  &__list {
    margin: -32px -10px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    margin: 32px 10px 0;
    width: calc(100% / 12 * 4 - 20px);

    &--col-4 {
      width: calc(25% - 20px);
    }
  }

  &__info {
    margin-top: 72px;
    padding: 30px;
    border-radius: 30px;
    background-color: @color-primary;

    &-item {
      padding: 30px;
    }
  }

  @media (max-width: 1240px) {
    &__title {
      margin-bottom: 32px;
    }

    &__subtitle {
      margin-bottom: 20px;
    }

    &__info {
      margin-top: 52px;
      padding: 24px;
      border-radius: 24px;

      &-item {
        padding: 24px;
      }
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
    }

    &__info {
      margin-top: 24px;
      padding: 18px;
      border-radius: 18px;

      &-item {
        padding: 18px;
      }
    }
  }

  @media (max-width: 479px) {
    &__item {
      width: calc(100% - 20px);
    }
  }
}
</style>
