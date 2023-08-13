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
            <button
              class="menu__link"
              :class="{ 'menu__link--active': item.linkActive }"
              @click.stop="toggleSubmenu(index)"
            >
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
              @click-on-item="deactivateItem(item)"
            />
          </template>
          <template v-else-if="item.catalogMenu">
            <button
              class="menu__link"
              :class="{ 'menu__link--active': item.linkActive }"
              @click="toggleSubmenu(index)"
            >
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
            />
          </template>
          <RouterLink
            v-else
            class="menu__link"
            :class="{ 'menu__link--active': item.linkActive }"
            :to="{ name: item.routerName }"
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
import { ref } from 'vue';
import AppSubmenu from '@/components/AppSubmenu.vue';
import CatalogMenu from '@/components/CatalogMenu.vue';

const menuList = ref([
  {
    text: 'Главная',
    linkActive: true,
    routerName: 'home'
  },
  {
    text: 'О компании',
    routerName: 'catalog',
    subMenu: [
      { text: 'О нас', routerName: 'home' },
      { text: 'Сотрудничество', routerName: 'home' },
      { text: 'Новости', routerName: 'home' }
    ]
  },
  {
    text: 'Каталог',
    routerName: 'catalog',
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
    ]
  },
  {
    text: 'Блог',
    routerName: 'catalog'
  },
  {
    text: 'Контакты',
    routerName: 'catalog'
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

  &__item--catalog &__link {
    &-icon {
      display: none;
    }
  }

  &__link {
    position: relative;
    font-size: 14px;
    transition: color 0.3s;
    color: #242728;

    &-icon {
      transform: rotate(90deg);
      margin-left: 8px;
      flex: 0 0 auto;
      stroke: #2d2b33;
      transition: stroke 0.3s;
    }

    @media (min-width: 992px) {
      &:hover {
        color: @color-second;
      }

      &:hover &-icon {
        stroke: @color-second;
      }
    }

    &--active {
      font-weight: 700;
      color: @color-second;
    }

    &--active &-icon {
      stroke: @color-second;
    }
  }

  &__item--has-submenu &__link {
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
        transform: rotate(0);
      }

      &:before {
        left: 18px;
        right: unset;
        font-weight: 600;
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
