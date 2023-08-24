<template>
  <div class="igallery-modal">
    <div class="igallery-modal__main">
      <div class="igallery-modal__slider">
        <swiper-container
          ref="swiper"
          :speed="700"
          @slidechange="slideChange"
          :modules="modules"
          effect
          :navigation="navigation"
        >
          <swiper-slide v-for="img in images" :key="img">
            <div class="igallery-modal__img">
              <img :src="getImage(img)" alt="" />
            </div>
          </swiper-slide>
        </swiper-container>
        <div class="igallery-modal__controls">
          <button class="btn-next btn-next--white igallery-modal__prev"></button>
          <button class="btn-next btn-next--white igallery-modal__next"></button>
        </div>
      </div>
    </div>
    <button class="igallery-modal__close" @click="emit('close')"></button>
    <div class="igallery-modal__backdrop" @click="emit('close')"></div>
  </div>
</template>

<script setup>
import { getImage } from '@/hooks/img';
import { onUpdated } from 'vue';
import { ref, reactive } from 'vue';
import { register } from 'swiper/element';
import { Navigation } from 'swiper/modules';

register();

const modules = [Navigation];
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  initial: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);
const swiper = ref();
const navigation = reactive({
  prevEl: '.igallery-modal__prev',
  nextEl: '.igallery-modal__next'
});

onUpdated(() => {
  if (props.active) {
    swiper.value.swiper.slideTo(props.initial);
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.igallery-modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0;

  &__main {
    margin: 50px 0;
    position: relative;
    z-index: 1;
    max-width: 100%;
    display: flex;
    pointer-events: none;
  }

  &__slider {
    pointer-events: all;
    min-width: 0;

    swiper-slide {
      height: auto;
    }
  }

  &__img {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 690px;
      max-width: calc(100vw - 100px);
      max-height: calc(100vh - 100px);
      object-fit: contain;
    }
  }

  &__controls {
    width: calc(690px + 220px);
    max-width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &__prev,
  &__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 100px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &.swiper-button-disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  &__prev {
    left: 0;

    &:before {
      transform: rotate(180deg);
      .pseudo-icon('../img/icons/right-white-thin.svg', 15px, 40px);
    }
  }

  &__next {
    right: 0;

    &:before {
      .pseudo-icon('../img/icons/right-white-thin.svg', 15px, 40px);
    }
  }

  &__backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.5);
  }

  &__close {
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 2;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &:before {
      .pseudo-icon('../img/icons/close-white.svg', 24px, 24px);
    }
  }

  &--activating {
    opacity: 1;
  }

  &--closing {
    opacity: 0;
  }

  &--hide {
    opacity: 0;
  }

  @media (max-width: 991px) {
    &__close {
      right: 10px;
      top: 10px;
    }
  }

  @media (max-width: 767px) {
    &__prev,
    &__next {
      &:before {
        width: 12px;
      }
    }

    &__close {
      right: 0;
      top: 0;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
