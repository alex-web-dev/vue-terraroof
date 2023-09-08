<template>
  <section class="partners">
    <div class="container">
      <div class="partners__content">
        <h2 v-if="title" class="title2 title2--center partners__title">{{ title }}</h2>
        <h3 v-if="subtitle" class="title4 partners__title">{{ subtitle }}</h3>
        <div v-if="images" class="partners__slider-box">
          <swiper-container
            class="partners__slider"
            :modules="modules"
            :breakpoints="swiperOptions.breakpoints"
            :space-between="swiperOptions.spaceBetween"
            :speed="swiperOptions.speed"
            :pagination="swiperOptions.pagination"
            :autoplay="swiperOptions.autoplay"
            :loop="true"
          >
            <swiper-slide class="partners__slide" v-for="img in images" :key="img">
              <div class="igallery-modal__img">
                <img class="partners__img" :src="getImage(img)" alt="" />
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="swiper-bullets partners__pagination" :class="paginationClass"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { register } from 'swiper/element';
import { Pagination, Autoplay } from 'swiper/modules';
import { useImage } from '@/hooks/img';
import 'swiper/css';

register();

const { getImage } = useImage();
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  images: {
    type: Array,
    required: true
  },
  paginationType: {
    type: String,
    default: null
  }
});
const modules = [Pagination, Autoplay];
const swiperOptions = {
  speed: 600,
  spaceBetween: 21,
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 2
    }
  },
  pagination: {
    el: '.partners__pagination',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

const paginationClass = computed(() => {
  if (props.paginationType === 'red') {
    return 'swiper-bullets--medium swiper-bullets--gray';
  }

  return 'swiper-bullets--big swiper-bullets--active-primary';
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
.partners {
  overflow: hidden;

  &__title {
    margin-bottom: 42px;
  }

  &__slider {
    margin: -40px -40px;
    padding: 40px 40px;

    &::part(container) {
      margin: -40px -40px;
      padding: 40px 40px;
    }

    &-box {
      position: relative;
      padding-bottom: 60px;
    }
  }

  &__slide {
    position: relative;
    height: 216px;
    padding: 23px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s, background 0.3s;

    &.swiper-slide-active,
    &.swiper-slide-next,
    &.swiper-slide-next + .partners__slide {
      box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
      background: #ffffff;
    }
  }

  &__img {
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1240px) {
    &__title {
      margin-bottom: 32px;
    }

    &__slide {
      height: 180px;
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 24px;
    }

    &__slider {
      &-box {
        padding-bottom: 50px;
      }
    }

    &__img {
      max-width: 180px;
    }
  }

  @media (max-width: 767px) {
    &__title {
      margin-bottom: 18px;
      font-size: 24px;
    }

    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__slider {
      &-box {
        padding-bottom: 26px;
      }
    }

    &__slide {
      height: 142px;
      padding: 16px;

      &.swiper-slide.swiper-slide-next,
      &.swiper-slide.swiper-slide-next + .swiper-slide {
        box-shadow: none;
        background: transparent;
      }
    }

    &__pagination {
      bottom: -3px;
    }
  }
}
</style>
