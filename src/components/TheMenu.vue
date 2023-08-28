<template>
  <nav class="menu" :class="{ 'menu--active': isActive }">
    <div class="menu__content">
      <div class="menu__title">Меню</div>
      <ul class="menu__list">
        <li
          class="menu__item"
          :class="{
            'menu__item--active': item.active,
            'menu__item--has-submenu': item.subMenu,
            'menu__item--catalog': item.catalogMenu
          }"
          v-for="(item, index) in menuList"
          :key="item"
        >
          <template v-if="item.subMenu">
            <button class="menu__link" @click.stop="toggleSubmenu(index)" :data-text="item.text">
              {{ item.text }}
              <svg class="menu__link-icon" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1.5 1.1665L6.5 6.99984L1.5 12.8332"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <AppSubmenu
              class="menu__submenu"
              :subMenu="item.subMenu"
              @click-outside="deactivateItem(item)"
              @click-item="deactivateItem(item)"
              @click-link="closeMenu"
            />
          </template>
          <template v-else-if="item.catalogMenu">
            <button class="menu__link" :class="{ 'menu__link--active': isCatalogRoute }" @click="toggleSubmenu(index)" :data-text="item.text">
              {{ item.text }}
              <svg class="menu__link-icon" width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1.5 1.1665L6.5 6.99984L1.5 12.8332"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <CatalogMenu
              v-if="item.active"
              class="menu__catalog"
              :list="item.catalogMenu"
              @click-outside="deactivateItem(item)"
              @close="deactivateItem(item)"
              @click-on-link="
                deactivateItem(item);
                closeMenu();
              "
            />
          </template>
          <RouterLink
            v-else
            class="menu__link"
            :to="{ name: item.routerName }"
            :data-text="item.text"
            @click="closeMenu"
            >{{ item.text }}</RouterLink
          >
        </li>
      </ul>
      <div class="menu__contacts">
        <a class="menu__contact" href="#">
          <div class="menu__contact-icon">
            <img src="@/assets/img/icons/whatsapp.svg" alt="" />
          </div>
          <span class="menu__contact-text">Заказать расчет</span>
        </a>
        <a class="menu__contact" href="tel:+77776333330">
          <div class="menu__contact-icon">
            <img src="@/assets/img/icons/phone.svg" alt="" />
          </div>
          <span class="menu__contact-text menu__contact-text--gray">+7 (777) 633 33 30</span>
        </a>
      </div>
    </div>
    <button class="menu__toggle" @click="toggleMenu">
      <span class="menu__lines"></span>
    </button>
    <div class="menu__backdrop" @click="toggleMenu"></div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppSubmenu from '@/components/AppSubmenu.vue';
import CatalogMenu from '@/components/CatalogMenu.vue';

const router = useRouter();
const route = useRoute();
const isCatalogRoute = ref(false);

watch(route, (val) => {
  if (val.name === 'catalog') {
    isCatalogRoute.value = true;
  } else {
    isCatalogRoute.value = false;
  }
});

const menuList = ref([
  {
    text: 'Главная',
    routerName: 'home'
  },
  {
    text: 'О компании',
    routerName: 'catalog',
    subMenu: [
      { text: 'О нас', routerName: 'about' },
      { text: 'Сотрудничество', routerName: 'cooperate' }
    ]
  },
  {
    text: 'Каталог',
    catalogMenu: [
      {
        img: 'catalog-menu/1.png',
        title: 'Композитная черепица'
      },
      {
        img: 'catalog-menu/2.png',
        title: 'Керамическая черепица'
      },
      {
        img: 'catalog-menu/3.png',
        title: 'Композитная черепица',
        isBig: true
      },
      {
        img: 'catalog-menu/4.png',
        title: 'Композитная черепица'
      },
      {
        img: 'catalog-menu/5.png',
        title: 'Сланцевая кровля'
      },
      {
        img: 'catalog-menu/6.png',
        title: 'Фальцевая кровля'
      },
      {
        img: 'catalog-menu/7.png',
        title: 'Цинк-титановая кровля'
      },
      {
        img: 'catalog-menu/8.png',
        title: 'Битумная черепица'
      },
      {
        img: 'catalog-menu/9.png',
        title: 'Композитная черепица'
      },
      {
        img: 'catalog-menu/10.png',
        title: 'Сланцевая кровля'
      },
      {
        img: 'catalog-menu/11.png',
        title: 'Солнечная крыша'
      },
      {
        img: 'catalog-menu/12.png',
        title: 'Медная кровля'
      },
      {
        img: 'catalog-menu/13.png',
        title: 'Мансардные окна'
      },
      {
        img: 'catalog-menu/14.png',
        title: 'Водосточные системы'
      },
      {
        img: 'catalog-menu/15.png',
        title: 'Кровельные комплектующие'
      },
      {
        img: 'catalog-menu/16.png',
        title: 'Софиты для подшивки кровли'
      },
      {
        img: 'catalog-menu/17.png',
        title: 'Чердачные лестницы'
      },
      {
        img: 'catalog-menu/18.png',
        title: 'Кровельная вентиляция'
      }
    ],
    routerName: 'catalog'
  },
  {
    text: 'Контакты',
    routerName: 'contacts'
  }
]);
const isActive = ref(false);

function toggleSubmenu(itemIndex) {
  const item = menuList.value[itemIndex];
  item.active = !item.active;
}

function toggleMenu() {
  isActive.value = !isActive.value;
}

function closeMenu() {
  isActive.value = false;
}

function deactivateItem(item) {
  item.active = false;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.menu {
  &__title {
    margin-bottom: 23px;
    padding: 0 40px 0 20px;
    display: none;
    font-family: 'Futura PT', sans-serif;
    font-size: 18px;
    line-height: 1.28;
    color: @color-gray;
  }

  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    position: relative;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  &__link {
    position: relative;
    font-size: 14px;
    white-space: nowrap;
    position: relative;
    display: block;
    transition: color 0.3s;
    color: #242728;
    color: transparent;

    &:before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      color: #242728;
      transition: color 0.3s;
    }

    &-icon {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      flex: 0 0 auto;
      stroke: #2d2b33;
      transition: stroke 0.3s;
    }

    @media (min-width: 992px) {
      &:hover &-icon {
        stroke: @color-second;
      }

      &:hover:before {
        color: @color-second;
      }
    }

    &.router-link-active,
    &--active {
      &:before {
        font-weight: 700;

        color: @color-second;
      }
    }

    &.router-link-active &-icon,
    &--active &-icon {
      stroke: @color-second;
    }
  }

  &__item--catalog &__link,
  &__item--has-submenu &__link {
    padding-right: 20px;
    display: flex;
    align-items: center;
  }

  &__submenu {
    position: absolute;
    margin-top: 10px;
    left: 0;
    top: 100%;
    z-index: 101;
    width: 260px;
    display: none;
  }

  &__item--active &__submenu {
    display: block;
  }

  &__contacts {
    margin-top: 24px;
    display: none;
  }

  &__contact {
    padding-left: 20px;
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 14px;
    }
  }

  &__contact-icon {
    margin-right: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: @color-success;

    &--second {
      background-color: @color-second;
    }
  }

  &__contact-text {
    &--gray {
      color: @color-gray;
    }
  }

  &__toggle {
    position: relative;
    height: 24px;
    width: 24px;
    display: none;
  }

  &__lines {
    position: relative;
    z-index: 6;
    margin: 0 auto;

    &,
    &:before,
    &:after {
      height: 2px;
      background-color: #333;
      display: block;
      transform: rotate(0);
      width: 18px;
      transition: transform 0.3s, width 0.3s;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      right: 0;
    }

    &:before {
      transform: translateY(-5px);
    }

    &:after {
      transform: translateY(5px);
    }
  }

  @media (max-width: 991px) {
    position: relative;
    z-index: 40;

    &__toggle {
      display: block;
    }

    &__title {
      display: block;
    }

    &__content {
      position: fixed;
      right: 0;
      top: 0;
      z-index: 3;
      transform: translateX(100%);
      padding: 20px 0;
      width: 100%;
      max-width: 294px;
      height: 100%;
      background: #fff;
      opacity: 0;
      visibility: hidden;
      overflow-y: auto;
      transition: opacity 0.4s, visibility 0.4s, transform 0.4s;
    }

    &__list {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }

    &__item {
      width: 100%;

      &:not(:first-child) {
        margin-left: 0;
      }
    }

    &__link {
      padding: 11px 25px 11px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 14px;
      line-height: 1.375;
      border-top: 1px solid #e0e5ed;

      &-icon {
        position: static;
        transform: translateY(0) rotate(0);
      }

      &:before {
        left: 18px;
        right: unset;
      }
    }

    &__item--catalog &__link {
      &-icon {
        display: block;
      }
    }

    &__item--catalog.menu__item--active &__link,
    &__item--has-submenu.menu__item--active &__link {
      &-icon {
        transform: rotate(90deg);
      }
    }

    &__submenu {
      position: static;
      margin-top: 0;
      max-width: 100%;
      width: 100%;
    }

    &__contacts {
      display: block;
    }

    &__item:last-child &__link {
      border-bottom: 1px solid #e0e5ed;
    }

    &--show &__content {
      display: block;
    }

    &--active {
      &:before {
        content: '';
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    &--active &__toggle {
      z-index: 3;
      transform: translateY(-10px);
    }

    &--active &__content {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    &--active &__lines {
      height: 0;

      &:before {
        height: 1px;
        transform: rotate(-45deg);
      }

      &:after {
        height: 1px;
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: 640px) {
    &--active &__toggle {
      transform: translateY(4px);
    }
  }
}
</style>
