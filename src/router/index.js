import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';
import ProductAbout from '@/views/ProductAbout.vue';
import CartView from '@/views/CartView.vue';
import ContactsView from '@/views/ContactsView.vue';
import AboutView from '@/views/AboutView.vue';
import CooperateView from '@/views/CooperateView.vue';
import { useProducts } from '@/stores/products';

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
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: {
      title: `${DEFAULT_TITLE} - Корзина`,
      layout: 'main'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
    meta: {
      title: `${DEFAULT_TITLE} - Контакты`,
      layout: 'main'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: `${DEFAULT_TITLE} - О нас`,
      layout: 'main'
    }
  },
  {
    path: '/cooperate',
    name: 'cooperate',
    component: CooperateView,
    meta: {
      title: `${DEFAULT_TITLE} - Сотрудничество`,
      layout: 'main'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
  let title = to.meta.title || DEFAULT_TITLE;
  if (to.name === 'product') {
    const productId = +to.params.id;
    const storeProducts = useProducts();
    const product = storeProducts.getProduct(productId);
    title = `${DEFAULT_TITLE} - ${product?.name}`;
  }

  document.title = title;
});

export default router;
