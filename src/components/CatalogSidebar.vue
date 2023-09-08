<template>
  <aside class="catalog-sidebar" :class="{ 'catalog-sidebar--active': open }">
    <div class="catalog-sidebar__content">
      <div class="catalog-sidebar__title">Каталог</div>
      <ul v-if="categories" class="catalog-sidebar__list">
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
            <span class="catalog-sidebar__btn-text">{{ category.name }}</span>
          </button>
          <ul class="catalog-sidebar__sublist">
            <li
              class="catalog-sidebar__subitem"
              v-for="subCategory in category.children"
              :key="subCategory"
            >
              <AppCheckbox
                :text="subCategory.name"
                :checked="subCategory.checked"
                @update:checked="subCategory.checked = $event"
              />
            </li>
          </ul>
        </li>
      </ul>
      <div v-else class="catalog-sidebar__text">Категорий на найдено</div>
      <div class="catalog-sidebar__close" @click="emit('close')"></div>
    </div>
    <div class="catalog-sidebar__backdrop" @click="emit('close')"></div>
  </aside>
</template>

<script setup>
import { useImage } from '@/hooks/img';
import AppCheckbox from '@/components/AppCheckbox.vue';

const { getImage } = useImage();
defineProps({
  open: {
    type: Boolean,
    default: false
  },
  categories: {
    type: Array,
    default: null
  }
});
const emit = defineEmits(['close']);
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

  &__text {
    color: @color-gray;
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
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
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
