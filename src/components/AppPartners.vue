<template>
  <section class="partners">
    <div class="container">
      <div class="partners__content">
        <h2 class="title2 partners__title">Наши партнеры</h2>
        <div class="partners__slider-box">
          <Swiper
            class="partners__slider"
            :modules="modules"
            :breakpoints="swiperOptions.breakpoints"
            :space-between="swiperOptions.spaceBetween"
            :speed="swiperOptions.speed"
            :pagination="swiperOptions.pagination"
            :autoplay="swiperOptions.autoplay"
          >
            <SwiperSlide class="partners__slide" v-for="image in images" :key="image">
              <img class="partners__img" :src="getImage(image)" alt="" />
            </SwiperSlide>
          </Swiper>
          <div class="swiper-pagination-bullets--big partners__pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';
import { getImage } from '@/hooks/img';
import 'swiper/css';

const modules = [Pagination, Autoplay];

const images = ref([
  'partners/bazis-a.png',
  'partners/bi-group.png',
  'partners/mabetex.png',
  'partners/bazis-a.png',
  'partners/bi-group.png',
  'partners/mabetex.png'
]);

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
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.partners {
  overflow: hidden;

  &__title {
    margin-bottom: 42px;
    text-align: center;
  }

  &__slider {
    margin: -40px -40px;
    padding: 40px 40px;

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

    &.swiper-slide.swiper-slide-active,
    &.swiper-slide.swiper-slide-next,
    &.swiper-slide.swiper-slide-next + .swiper-slide {
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
