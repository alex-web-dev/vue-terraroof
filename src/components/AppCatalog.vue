<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__content">
        <AppBreadcrumbs :list="breadcrumbs" />
        <div class="catalog__header">
          <h1 class="title4 catalog__title">Композитная черепица</h1>
          <div class="catalog__companies">
            <Simplebar>
              <div class="catalog__companies-list">
                <img class="catalog__company" src="@/assets/img/companies/1.png" alt="">
                <img class="catalog__company" src="@/assets/img/companies/2.png" alt="">
                <img class="catalog__company" src="@/assets/img/companies/3.png" alt="">
                <img class="catalog__company" src="@/assets/img/companies/4.png" alt="">
              </div>
            </Simplebar>
          </div>
        </div>
        <button class="btn catalog__open-sidebar" @click="isSidebarOpen = !isSidebarOpen">
          <img src="@/assets/img/icons/menu-white.svg" alt="" />
          Каталог
        </button>
        <div class="catalog__main">
          <CatalogSidebar class="catalog__sidebar" :open="isSidebarOpen" @close="isSidebarOpen = false"
            :categories="categories" />
          <AppProducts class="catalog__products" :products="filteredProducts" :info="productsInfo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppProducts from '@/components/AppProducts.vue';
import CatalogSidebar from '@/components/CatalogSidebar.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';
import Simplebar from 'simplebar-vue';
import { useProducts } from '@/stores/products';
import { ref, reactive, computed } from 'vue';
import { useCategories } from '@/stores/categories';

const isSidebarOpen = ref(false);
const breadcrumbs = reactive([{ name: 'Главная', route: 'home' }, { name: 'Каталог' }]);
const storeProducts = useProducts();
const products = storeProducts.getProducts();
const storeCategories = useCategories();
const categories = reactive(
  storeCategories.getCategoriesTree().map((category) => {
    category.children.forEach((subCategory) => {
      subCategory.checked = false;
    });

    return category;
  })
);
const filteredProducts = computed(() => {
  const filtered = products.filter((product) => {
    let isChecked = false;
    categories.forEach((category) => {
      category.children.forEach((subCategory) => {
        if (subCategory.checked && subCategory.id === product.id) {
          isChecked = true;
          return;
        }
      });
    });

    return isChecked;
  });

  return filtered.length === 0 ? products : filtered;
});

const productsInfo = ref([
  {
    title: 'Подробнее о товарах',
    content: `
      <p>Многие думают, что Lorem Ipsum - взятый с потолка взятый
        псевдо-латинский набор слов, но это не совсем так. Его корни
        уходят в один фрагмент классической латыни 45 года н.э</p>
    `
  },
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.catalog {
  &__header {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    text-transform: uppercase;
    font-weight: 700;
  }

  &__companies {
    margin-left: 20px;
    width: 580px;
    user-select: none;

    &-list {
      padding-bottom: 10px;
      display: inline-flex;
      align-items: center;
      border-bottom: 1px solid #e0e5ed;
    }

    .simplebar-content {
      text-align: right;
    }
  }

  &__company {
    object-fit: contain;

    &:not(:first-child) {
      margin-left: 21px;
    }
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
    margin-right: 40px;
    flex: 0 0 290px;
  }

  &__products {
    margin-top: 44px;
    flex: 1 1 auto;
  }

  @media (max-width: 1240px) {
    &__header {
      margin-bottom: 24px;
    }

    &__sidebar {
      margin-right: 20px;
      flex: 0 0 215px;
    }
  }

  @media (max-width: 991px) {
    &__companies {
      max-width: 490px;
    }
  }

  @media (max-width: 767px) {
    &__header {
      margin-bottom: 16px;
      flex-direction: column;
      align-items: flex-start;
    }

    &__title {
      font-size: 24px;
    }

    &__companies {
      margin-top: 16px;
      margin-left: 0;
      width: 100%;
      max-width: 100%;

      &-list {
        padding-bottom: 8px;
        width: 100%;
      }

      .simplebar-content {
        text-align: left;
      }
    }

    &__company {
      max-width: 100px;
      max-height: 50px;

      &:not(:first-child) {
        margin-left: 12px;
      }
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
