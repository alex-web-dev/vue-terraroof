<template>
  <div class="product-images">
    <div class="product-images__color product-images__color--active igallery">
      <div class="product-images__main">
        <img
          class="product-images__main-img igallery__btn igallery__img"
          :src="getImage(images.mainImg)"
          alt=""
        />
        <AppTags class="product-images__main-tags" :list="[{ type: 'sale', text: 'акция -20%' }]" />
      </div>
      <div class="product-images__other">
        <div class="product-images__other-img" v-for="img in images.otherImages" :key="img">
          <img class="igallery__btn igallery__img" :src="getImage(img)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppTags from '@/components/AppTags.vue';
import { getImage } from '@/hooks/img';

defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.product-images {
  &__color {
    display: none;

    &--active {
      display: block;
    }
  }

  &__main {
    position: relative;
    display: block;
    border-radius: 20px;
    overflow: hidden;

    &-img {
      cursor: pointer;
    }
  }

  &__main-tags {
    position: absolute;
    right: 32px;
    top: 32px;
  }

  &__other {
    margin-top: 18px;
    display: flex;

    &-img {
      flex: 0 1 50%;
      max-height: 274px;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;

      &:not(:first-child) {
        margin-left: 17px;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    @media (max-width: 991px) {
      &__tags {
        right: 24px;
        top: 24px;
      }
    }

    @media (max-width: 767px) {
      &__tags {
        right: 16px;
        top: 16px;
      }

      &__other {
        margin-top: 12px;
      }
    }
  }
}
</style>
