<template>
  <div class="cart">
    <div class="container">
      <div class="cart__content">
        <AppBreadcrumbs :list="breadcrumbs" />
        <template v-if="items.length">
          <h1 class="title5 cart__title">Корзина ({{ items.length }})</h1>
          <div class="cart__list">
            <CartItem
              class="cart__item"
              v-for="item in products"
              :data="item"
              :key="item"
              @update-count="emit('updateCount', item.id, $event)"
              @remove="emit('removeItem', item.id)"
            />
          </div>
          <div class="cart__total">
            <div class="cart__total-value">Итого: {{ totalValue || 0 }} ₸</div>
          </div>
        </template>
        <div v-else class="text text--gray cart__message">
          Корзина пуста.
          <RouterLink class="link" :to="{ name: 'catalog' }">Перейти в каталог</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import CartItem from '@/components/CartItem.vue';
import { useProducts } from '@/stores/products';
import { reactive, computed } from 'vue';

const storeProducts = useProducts();
const props = defineProps({
  items: {
    type: Array,
    default: null
  }
});
const emit = defineEmits('updateCount', 'removeItem');
const products = computed(() =>
  props.items.map((item) => {
    return {
      ...storeProducts.getProduct(item.id),
      count: item.count
    };
  })
);
const totalValue = computed(() => {
  return products.value.reduce((total, item) => total + item.price * item.count, 0);
});
const breadcrumbs = reactive([{ name: 'Главная', route: 'home' }, { name: 'Корзина' }]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.cart {
  &__breadcrumbs {
    padding-bottom: 32px;
  }

  &__list {
    margin-top: 18px;
  }

  &__item {
    border-top: 1px solid #e0e5ed;

    &:last-child {
      border-bottom: 1px solid #e0e5ed;
    }
  }

  &__message {
    margin-top: 12px;
    text-align: center;
  }

  &__total {
    margin-top: 30px;
    font-size: 24px;
    font-weight: 600;
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__breadcrumbs {
      padding-bottom: 24px;
    }
  }
}
</style>
