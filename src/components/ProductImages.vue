<template>
  <div class="product-images">
    <IGallery :images="[images.mainImg, ...images.otherImages]" :active="galleryActive" :initial="galleryImgNum"
      @close="galleryActive = false">
      <div class="product-images__main">
        <IGalleryImg class="product-images__main-img" :src="getImage(images.mainImg)" alt="" @click="openGallery(event, 0)" />
        <AppTags class="product-images__main-tags" :list="[{ type: 'sale', text: 'акция -20%' }]" />
      </div>
      <div class="product-images__other">
        <div class="product-images__other-img" v-for="(img, index) in images.otherImages" :key="img">
          <IGalleryImg :src="getImage(img)" alt="" @click="openGallery(event, index + 1)" />
        </div>
      </div>
    </IGallery>
  </div>
</template>

<script setup>
import AppTags from '@/components/AppTags.vue';
import IGallery from './IGallery.vue';
import { getImage } from '@/hooks/img';
import IGalleryImg from '@/components/IGalleryImg.vue';
import { ref } from 'vue';

defineProps({
  images: {
    type: Array,
    required: true
  }
});

const galleryActive = ref(false);
const galleryImgNum = ref(0);

function openGallery(_, num = 0) {
  galleryImgNum.value = num;
  galleryActive.value = true
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.product-images {
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
