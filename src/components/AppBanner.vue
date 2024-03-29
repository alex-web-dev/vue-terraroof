<template>
  <section class="banner">
    <div class="banner__content">
      <div class="banner__info">
        <h1 class="title1 banner__title" data-aos="fade-in" data-aos-duration="1200">TERRAROOF.</h1>
        <h2
          class="title2 banner__subtitle"
          data-aos="fade-in"
          data-aos-delay="600"
          data-aos-duration="1200"
        >
          Кровля для самых требовательных
        </h2>
        <div class="banner__features">
          <div class="banner__features-title">Полностью за наш счет:</div>
          <div class="banner__features-list">
            <div class="banner__feature" v-for="feature in features" :key="feature">
              <img class="banner__feature-icon" :src="getImage(feature.img)" alt="" />
              <span class="banner__feature-text">{{ feature.text }}</span>
            </div>
          </div>
        </div>
        <RouterLink class="btn banner__btn" :to="{ name: 'catalog' }">Каталог продукции</RouterLink>
      </div>
      <div class="banner__slider">
        <swiper-container
          :modules="modules"
          :space-between="swiperOptions.spaceBetween"
          :loop="swiperOptions.loop"
          :speed="swiperOptions.speed"
          :pagination="swiperOptions.pagination"
          :autoplay="swiperOptions.autoplay"
        >
          <swiper-slide class="banner__slide" v-for="img in sliderImages" :key="img">
            <img :src="getImage(img)" alt="" />
          </swiper-slide>
        </swiper-container>
        <div class="banner__pagination"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { register } from 'swiper/element';
import { Pagination, Autoplay } from 'swiper/modules';
import { useImage } from '@/hooks/img';
import { reactive } from 'vue';

register();

const modules = [Pagination, Autoplay];
const { getImage } = useImage();
const swiperOptions = {
  speed: 700,
  loop: true,
  pagination: {
    clickable: true,
    el: '.banner__pagination'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
};

const features = reactive([
  {
    img: 'icons/check-fill.svg',
    text: 'Доставка'
  },
  {
    img: 'icons/check-fill.svg',
    text: 'Обучение монтажу'
  },
  {
    img: 'icons/check-fill.svg',
    text: 'Аренда оборудования'
  }
]);

const sliderImages = reactive([
  'section-banner/1.jpg',
  'section-banner/2.jpg',
  'section-banner/3.jpg'
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.banner {
  padding: 24px @container-offset 0;

  &__content {
    margin: 0 auto;
    padding: 42px 44px 42px 52px;
    max-width: 1392px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
  }

  &__info {
    margin-top: 10px;
    padding-right: 30px;
    flex: 1 1 auto;
  }

  &__title {
    line-height: 1.1;
    text-transform: uppercase;
  }

  &__subtitle {
    line-height: 1.1;
  }

  &__features {
    margin-top: 62px;
    padding: 24px 32px 32px;
    max-width: 480px;
    background: #e4f5ff;
    border-radius: 6px;
  }

  &__features-title {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.15;
  }

  &__features-list {
    margin: -16px -6px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__feature {
    margin: 16px 6px 0;
    padding-left: 2px;
    display: flex;
    align-items: center;
    width: calc(50% - 12px);
  }

  &__feature-icon {
    margin-right: 6px;
  }

  &__feature-text {
    line-height: 1.375;
    text-transform: lowercase;
  }

  &__btn {
    margin-top: 72px;
  }

  &__slider {
    position: relative;
    flex: 0 0 calc(54% - 12px);
    align-self: flex-start;
    border-radius: 16px;
    overflow: hidden;

    swiper-container {
      height: 100%;
    }
  }

  &__slide {
    position: relative;
    padding-top: 91.75%;
    height: auto;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__pagination {
    bottom: 30px;
  }

  @media (max-width: 1240px) {
    &__content {
      padding: 32px 34px;
    }

    &__features {
      margin-top: 45px;
      padding: 18px 16px 22px;
    }

    &__features-title {
      font-size: 20px;
    }

    &__feature-icon {
      margin-right: 5px;
      width: 18px;
      height: 18px;
    }

    &__feature-text {
      font-size: 15px;
    }

    &__btn {
      margin-top: 55px;
    }
  }

  @media (max-width: 991px) {
    &__content {
      padding: 26px 28px;
    }

    &__features {
      margin-top: 35px;
      padding: 16px;
      padding-bottom: 18px;
      max-width: 360px;
    }

    &__feature {
      width: calc(100% - 12px);
    }

    &__btn {
      margin-top: 45px;
    }
  }

  @media (max-width: 767px) {
    padding-left: @container-sm-offset;
    padding-right: @container-sm-offset;

    &__content {
      position: relative;
      max-width: @content-sm-max-width;
      height: 416px;
      padding: 112px 14px 30px;
    }

    &__info {
      position: relative;
      z-index: 2;
      margin-top: 0;
      padding: 18px 16px 15px;
      background-color: rgba(#e4f5ff, 0.85);
      border-radius: 16px;
      pointer-events: none;
    }

    &__title {
      line-height: 1.2;
    }

    &__subtitle {
      line-height: 1.2;
    }

    &__features {
      margin-top: 10px;
      padding: 0;
      background-color: transparent;

      &-title {
        margin-bottom: 9px;
        font-size: 16px;
      }

      &-list {
        margin-top: -9px;
      }
    }

    &__feature {
      margin-top: 8px;

      &-icon {
        margin-right: 5px;
        width: 16px;
        height: 16px;
      }

      &-text {
        font-size: 14px;
      }
    }

    &__btn {
      margin-top: 18px;
      width: 100%;
      pointer-events: all;
    }

    &__slider {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &__slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__pagination {
      bottom: 10px;

      .swiper-pagination-bullet {
        &:before {
          width: 4px;
          height: 4px;
        }
      }
    }
  }
}
</style>
