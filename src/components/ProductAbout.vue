<template>
  <div class="product">
    <div class="container">
      <div class="product__content">
        <AppBreadcrumbs :list="breadcrumbs" />
        <div class="product__main">
          <ProductImages class="product__images" :images="selectedImages" />
          <ProductForm
            class="product__form"
            :info="product"
            :colors="colors"
            :selected-color="selectedColor"
            @change-color="changeColor"
          />
        </div>

        <AppTabs
          class="product__tabs"
          :list="tabs"
          content-class="product__tab-content"
          @change="changeTab"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductImages from '@/components/ProductImages.vue';
import ProductForm from '@/components/ProductForm.vue';
import AppTabs from '@/components/AppTabs.vue';
import { reactive, computed } from 'vue';
import { useProducts } from '@/stores/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = +route.params.id;
const storeProducts = useProducts();
const product = reactive(storeProducts.getProduct(productId));
const breadcrumbs = reactive([{ name: 'Главная', route: 'home' }, { name: 'Каталог' }]);
const colors = reactive({
  selected: product.colors[0].value,
  list: product.colors
});
const selectedImages = computed(() => {
  return colors.list.find((color) => color.value === colors.selected);
});

const tabs = reactive(
  product.details.map((detail, index) => {
    return {
      btn: detail.name,
      content: detail.content,
      active: index === 0 ? true : false
    };
  })
);

function changeTab(index) {
  const activeTab = tabs.find((tab) => tab.active);
  activeTab.active = false;

  tabs[index].active = true;
}

function changeColor(value) {
  colors.selected = value;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.product {
  &__main {
    display: flex;
    align-items: flex-start;
  }

  &__images {
    margin-right: 59px;
    flex: 0 0 calc(55% - 5px);
  }

  &__form {
    flex: 1 1 auto;
  }

  &__tabs {
    margin: 92px auto 0;
    max-width: 1064px;
  }

  :deep(&__tab-content) {
    margin-top: 32px;
  }

  &__similar {
    margin-top: 102px;
  }

  @media (max-width: 1240px) {
    &__images {
      margin-right: 35px;
      flex: 0 0 calc(50% - 5px);
    }

    &__similar {
      margin-top: 70px;
    }

    &__tabs {
      margin-top: 60px;
      max-width: 840px;
    }

    :deep(&__tab-content) {
      margin-top: 24px;
    }
  }

  @media (max-width: 991px) {
    &__images {
      margin-right: 25px;
    }

    &__tabs {
      margin-top: 42px;
    }

    :deep(&__tab-content) {
      margin-top: 20px;
    }

    &__similar {
      margin-top: 42px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__main {
      flex-direction: column;
    }

    :deep(&__tab-content) {
      margin-top: 16px;
    }

    &__tabs {
      margin-top: 24px;
    }

    &__similar {
      margin-top: 24px;
    }
  }
}
</style>
