<template>
  <section class="categories-section">
    <div class="container">
      <div class="categories-section__content">
        <h2 class="title2 categories-section__title">Все для кровли в одном месте</h2>
        <div class="categories-section__list">
          <template v-for="(item, index) in list" :key="item">
            <RouterLink
              v-if="!item.noHover"
              :to="{ name: 'catalog' }"
              class="categories-section__item"
              :class="{ 'categories-section__item--active': item.active }"
              @mouseenter="changeActiveItem(index)"
            >
              <h3 v-if="item.title" class="categories-section__item-title">
                <span>{{ item.title }}</span>
              </h3>
            </RouterLink>
            <div v-else class="categories-section__item categories-section__item--img">
              <img
                v-if="item.img"
                class="categories-section__item-bg"
                :src="useImage(item.img)"
                alt=""
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useImage } from '@/hooks/img';

const list = ref([
  {
    active: false,
    title: 'Кровельные материалы'
  },
  {
    active: true,
    title: 'Мансардные окна'
  },
  {
    active: false,
    title: 'Гидроизоляция'
  },
  {
    noHover: true,
    img: 'categories-section/2.jpg'
  },
  {
    active: false,
    title: 'Водосточные системы'
  },
  {
    noHover: true,
    img: 'categories-section/1.jpg'
  }
]);

function changeActiveItem(index) {
  const oldActiveItem = list.value.find((item) => item.active === true);
  oldActiveItem.active = false;

  list.value[index].active = true;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.categories-section {
  &__title {
    margin-bottom: 50px;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #e0e5ed;
    border-radius: 16px;
    overflow: hidden;
  }

  &__item {
    position: relative;
    padding: 24px;
    width: calc(100% / 3);
    min-height: 313px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    transition: background 0.3s, color 0.3s;

    &-title {
      font-size: 24px;
      line-height: 1.375;
      font-weight: 600;
      text-transform: uppercase;

      &:after {
        content: '';
        position: absolute;
        right: 25px;
        top: 25px;
        .pseudo-icon('../img/icons/arrow-right-up.svg', 20px, 20px);
      }

      span {
        display: inline-block;
        max-width: 220px;
      }
    }

    &-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--active {
      color: #fff;
      background-color: @color-primary;
    }
  }

  @media (max-width: 1240px) {
    &__item {
      padding: 22px;
      min-height: 260px;

      &-title {
        font-size: 22px;

        &:after {
          right: 20px;
          top: 20px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  @media (max-width: 991px) {
    &__item {
      padding: 20px;
      min-height: 200px;

      &-title {
        font-size: 18px;

        &:after {
          right: 15px;
          top: 15px;
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 24px 0 49px;
    background: @color-primary;

    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      margin-bottom: 24px;
      max-width: 233px;
      font-size: 24px;
      text-align: left;
      line-height: 1.375;
      color: #fff;
    }

    &__list {
      border: none;
      border-radius: 0;
    }

    &__item {
      padding: 19px 0;
      width: 100%;
      min-height: auto;
      background-color: transparent;
      border-bottom: 0.5px solid #74aadb;
      color: #fff;

      &:first-child {
        border-top: 0.5px solid #74aadb;
      }

      &-title {
        font-size: 16px;

        &:after {
          margin-left: 10px;
          position: static;
          display: inline-block;
          width: 14px;
          height: 14px;
        }
      }

      &--img {
        display: none;
      }

      &--active {
        background-color: transparent;
      }
    }
  }
}
</style>
