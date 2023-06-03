<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__content">
        <AppBreadcrumbs :list="breadcrumbs" />
        <h1 class="title4 catalog__title">Композитная черепица</h1>
        <button class="btn catalog__open-sidebar" @click="isSidebarOpen = !isSidebarOpen">
          <img src="@/assets/img/icons/menu-white.svg" alt="" />
          Каталог
        </button>
        <div class="catalog__main">
          <CatalogSidebar
            class="catalog__sidebar"
            :open="isSidebarOpen"
            @close="isSidebarOpen = false"
          />
          <AppProducts class="catalog__products" :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppProducts from '@/components/AppProducts.vue';
import CatalogSidebar from '@/components/CatalogSidebar.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import { useProducts } from '@/stores/products';
import { ref, reactive } from 'vue';

const isSidebarOpen = ref(false);
const breadcrumbs = reactive([{ name: 'Главная', route: 'home' }, { name: 'Каталог' }]);
const storeProducts = useProducts();
const products = storeProducts.getProducts();
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.catalog {
  &__title {
    margin-bottom: 32px;
    text-transform: uppercase;
    font-weight: 700;
  }

  &__open-sidebar {
    margin-bottom: 16px;
    padding: 7px 14px 7px 12px;
    display: none;
    align-items: center;
    font-size: 14px;

    img {
      margin-right: 8px;
    }
  }

  &__main {
    display: flex;
  }

  &__sidebar {
    margin-right: 52px;
    flex: 0 0 305px;
  }

  &__products {
    margin-top: 44px;
    flex: 1 1 auto;
  }

  @media (max-width: 1240px) {
    &__title {
      margin-bottom: 24px;
    }

    &__sidebar {
      margin-right: 20px;
      flex: 0 0 215px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      margin-bottom: 12px;
      font-size: 24px;
    }

    &__sidebar {
      margin-right: 0;
      flex: none;
    }

    &__open-sidebar {
      display: inline-flex;
    }

    &__products {
      margin-top: 0;
    }
  }
}
</style>
