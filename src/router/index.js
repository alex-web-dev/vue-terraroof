import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';
import ProductAbout from '@/views/ProductAbout.vue';

const DEFAULT_TITLE = 'Terraroof';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView,
    meta: {
      title: `${DEFAULT_TITLE} - Каталог`,
      layout: 'main'
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductAbout,
    meta: {
      title: `${DEFAULT_TITLE} - Подробнее о товаре`,
      layout: 'main'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90
      };
    } else {
      window.scrollTo(0, 0);

      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
