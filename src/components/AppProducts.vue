<template>
  <section class="products">
    <div class="container">
      <div class="products__content">
        <h2 class="title2 title2--center products__title">Oтличные предложения</h2>
        <div class="products__list">
          <ProductCard
            class="products__item"
            type="preview"
            :data="product"
            v-for="product in products"
            :key="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';

const products = [
  {
    img: 'products/1.jpg',
    name: 'Черепица Metrotile',
    text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
    price: 15200
  },
  {
    img: 'products/2.jpg',
    name: 'Черепица Metrotile',
    text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
    price: 15200
  },
  {
    img: 'products/3.jpg',
    name: 'Черепица Metrotile',
    text: 'Его корни уходят в один фрагмент классической латыни 45 года н.э',
    price: 15200
  }
];
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
