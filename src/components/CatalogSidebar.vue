<template>
  <aside class="catalog-sidebar" :class="{ 'catalog-sidebar--active': open }">
    <div class="catalog-sidebar__content">
      <div class="catalog-sidebar__title">Каталог</div>
      <ul class="catalog-sidebar__list">
        <li
          class="catalog-sidebar__item"
          :class="{ 'catalog-sidebar__item--active': category.open }"
          v-for="category in categories"
          :key="category"
        >
          <button class="catalog-sidebar__btn" @click="category.open = !category.open">
            <img
              class="catalog-sidebar__btn-img"
              v-if="category.img"
              :src="getImage(category.img)"
              alt=""
            />
            <span class="catalog-sidebar__btn-text">{{ category.title }}</span>
          </button>
          <ul class="catalog-sidebar__sublist">
            <li
              class="catalog-sidebar__subitem"
              v-for="subCategory in category.list"
              :key="subCategory"
            >
              <label class="checkbox">
                <input class="checkbox__input" type="checkbox" />
                <span class="checkbox__switch"></span>
                <span class="checkbox__text">{{ subCategory }}</span>
              </label>
            </li>
          </ul>
        </li>
      </ul>
      <div class="catalog-sidebar__close" @click="emit('close')"></div>
    </div>
    <div class="catalog-sidebar__backdrop" @click="emit('close')"></div>
  </aside>
</template>

<script setup>
import { reactive } from 'vue';
import { getImage } from '@/hooks/img';

defineProps({
  open: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);

const categories = reactive([
  {
    title: 'Акции',
    list: ['Metrotile', 'Metrotile', 'Metrotile'],
    open: false
  },
  {
    img: 'catalog/1.jpg',
    title: 'Керамическая черепица',
    list: ['Metrotile', 'Metrotile'],
    open: false
  },
  {
    img: 'catalog/2.jpg',
    title: 'Композитная черепица',
    list: ['Metrotile'],
    open: false
  },
  {
    img: 'catalog/3.jpg',
    title: 'Гибкая (битумная) черепица',
    list: ['Metrotile'],
    open: false
  },
  {
    img: 'catalog/4.jpg',
    title: 'Металлочерепица',
    list: ['Metrotile'],
    open: false
  },
  {
    img: 'catalog/5.jpg',
    title: 'Медная кровля',
    list: ['Metrotile'],
    open: false
  }
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.catalog-sidebar {
  &__title {
    margin-bottom: 13px;
    font-size: 20px;
    line-height: 1.5;
    text-transform: uppercase;
  }

  &__item {
    border-top: 1px solid #f5f5f5;

    &:last-child {
      border-bottom: 1px solid #f5f5f5;
    }
  }

  &__btn {
    padding: 14px 8px 14px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    font-size: 18px;
    line-height: 1.5;

    &:after {
      margin-left: auto;
      flex: 0 0 auto;
      .pseudo-icon('../img/icons/right-black.svg', 9px, 17px);
    }

    &-text {
      margin-right: 8px;
    }

    &-img {
      margin-right: 8px;
      width: 38px;
      height: 38px;
      object-fit: cover;
      border-radius: 6px;
    }
  }

  &__sublist {
    padding-bottom: 13px;
    display: none;
  }

  &__subitem {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__item--active &__btn {
    color: @color-second;

    &:after {
      transform: rotate(90deg);
      background-image: url('../assets/img/icons/right-second.svg');
    }
  }

  &__item--active &__sublist {
    display: block;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 24px;
    height: 24px;
    display: none;
    align-items: center;
    justify-content: center;

    &:before {
      .pseudo-icon('../img/icons/close.svg', 14px, 14px);
    }
  }

  &__backdrop {
    display: none;
  }

  @media (max-width: 1240px) {
    &__btn {
      font-size: 16px;

      &:after {
        width: 8px;
        height: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 40;
    transform: translateX(-100%);
    width: 100%;
    max-width: 260px;
    height: 100%;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s, visibility 0.4s, transform 0.4s;

    &__content {
      position: relative;
      padding: 20px 0;
      z-index: 1;
      overflow-y: auto;
      max-height: 100vh;
      background: #fff;
    }

    &__title {
      font-size: 18px;
      padding: 0 20px;
    }

    &__btn {
      padding: 11px 18px;
    }

    &__sublist {
      padding: 0 18px 11px;
    }

    &__close {
      display: flex;
    }

    &__backdrop {
      position: fixed;
      left: 0;
      top: 0;
      display: block;
      width: 100vw;
      height: 100%;
    }

    &--active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
