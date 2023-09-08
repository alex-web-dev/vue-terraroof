<template>
  <section class="images-section">
    <div class="container">
      <div class="images-section__content">
        <h2 class="title2 images-section__title">Мы сделаем Ваш дом объектом восхищения</h2>
        <div class="images-section__slider-box">
          <swiper-container
            class="images-section__slider swiper"
            :modules="modules"
            :breakpoints="swiperOptions.breakpoints"
            :space-between="swiperOptions.spaceBetween"
            :speed="swiperOptions.speed"
            :pagination="swiperOptions.pagination"
          >
            <swiper-slide
              class="images-section__slide swiper-slide"
              v-for="(image, index) in images.slice(0, showImagesLimit)"
              :key="image"
            >
              <swiper-container
                class="swiper images-section__inner-slider"
                :modules="[EffectFade]"
                effect="fade"
                direction="horizontal"
                :initial-slide="randomArray[index]"
                :allow-touch-move="false"
                :touch-move-stop-propagation="true"
                :fade-effect="{ crossFade: true }"
                @_swiper="onInnerSwiper"
              >
                <swiper-slide
                  class="swiper-slide images-section__inner-slide"
                  v-for="innerImage in images"
                  :key="innerImage"
                >
                  <img class="images-section__img" :src="getImage(innerImage)" alt="" />
                </swiper-slide>
              </swiper-container>
            </swiper-slide>
            <swiper-slide class="images-section__slide images-section__slide--btn swiper-slide">
              <button class="images-section__slide-btn" @click="storeModals.open('callback')">
                <span>Подобрать</span>
                <img src="@/assets/img/icons/logo-blue.svg" alt="" />
              </button>
            </swiper-slide>
          </swiper-container>
          <div class="swiper-pagination-bullets--big images-section__pagination"></div>
        </div>
        <button class="btn images-section__mobile-btn" @click="storeModals.open('callback')">
          Заказать просчет кровли
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { register } from 'swiper/element';
import { Pagination, EffectFade } from 'swiper/modules';
import { useArray } from '@/hooks/array';
import { useImage } from '@/hooks/img';
import { useModals } from '@/stores/modals';

import 'swiper/css';
import 'swiper/element/css/effect-fade';

const { getImage } = useImage();
const storeModals = useModals();

register();

const modules = [Pagination, EffectFade];
const swiperOptions = {
  speed: 600,
  enabled: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.images-section__pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      enabled: false,
      slidesPerView: 'auto'
    }
  }
};

const { getNumbersArray, shuffleArray } = useArray();
const showImagesLimit = 5;
const images = reactive([
  'house-images/1.jpg',
  'house-images/2.jpg',
  'house-images/3.jpg',
  'house-images/4.jpg',
  'house-images/5.jpg',
  'house-images/6.jpg',
  'house-images/7.jpg',
  'house-images/8.jpg',
  'house-images/9.jpg',
  'house-images/10.jpg'
]);
let innerSliders = ref([]);
const onInnerSwiper = (e) => {
  const [swiper] = e.detail;
  innerSliders.value.push(swiper);
};
const randomArray = ref(shuffleArray(getNumbersArray(0, images.length - 1)));

onMounted(() => {
  setInterval(() => {
    randomArray.value = shuffleArray(randomArray.value);
    innerSliders.value.forEach((innerSlider, index) => {
      innerSlider.slideTo(randomArray.value[index], 600);
    });
  }, 5000);
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.images-section {
  &__title {
    margin-bottom: 42px;
    text-align: center;
  }

  &__slider {
    &-box {
      position: relative;
    }
  }

  &__slide {
    margin: 20px 10px 0;
    padding-top: 21.9%;
    width: calc(99.99% / 3 - 20px);
    border-radius: 8px;
    overflow: hidden;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;

    @media (min-width: 767.01px) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__inner-slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &__inner-slide {
    transition: opacity 0.5s;
    pointer-events: none;

    &.swiper-slide-active {
      pointer-events: all;
    }
  }

  &__slide-btn {
    position: absolute;
    left: 0;
    top: 0;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: @color-primary;
    border-radius: 6px;
    text-align: left;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.375;
    text-transform: uppercase;
    color: #fff;
    overflow: hidden;

    span {
      max-width: 310px;
      z-index: 1;

      &:before {
        position: absolute;
        right: 25px;
        top: 25px;
        .pseudo-icon('../img/icons/arrow-right-up.svg', 20px, 20px);
      }
    }

    img {
      position: absolute;
      top: 42px;
      left: -7px;
      width: 451px;
      max-width: none;
    }
  }

  &__pagination {
    display: none;
  }

  &__mobile-btn {
    display: none;
  }

  @media (min-width: 767.01px) {
    &__slider::part(wrapper) {
      width: auto;
      flex-wrap: wrap;
    }

    &__inner-slider::part(wrapper) {
      flex-wrap: nowrap;
    }
  }

  @media (max-width: 1240px) {
    &__slide-btn {
      padding: 20px;
      font-size: 22px;

      span {
        &:before {
          right: 20px;
          top: 20px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 28px;
    }

    &__slide {
      margin: 20px 10px 0;
      padding-top: 32.25%;
      width: calc(50% - 20px);
      object-fit: cover;
    }

    &__slide-btn {
      padding: 16px;
      font-size: 20px;

      span {
        &:before {
          right: 15px;
          top: 15px;
          width: 16px;
          height: 16px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      margin-bottom: 18px;
      font-size: 24px;
      line-height: 1.375;
      text-align: left;
    }

    &__slider {
      &-box {
        padding-bottom: 24px;
      }

      :deep(&-wrapper) {
        margin: 0;
        flex-wrap: nowrap;
      }
    }

    &__slide {
      margin: 0;
      width: 100%;
      padding-top: min(68.75%, 240px);

      &--btn {
        display: none;
      }
    }

    &__slide-btn {
      padding: 14px;
      font-size: 18px;

      span {
        &:before {
          width: 14px;
          height: 14px;
        }
      }
    }

    &__pagination {
      display: block;

      .swiper-pagination-bullet {
        &:before {
          background-color: #ededed;
        }

        &-active {
          &:before {
            background-color: @color-second;
          }
        }
      }
    }

    &__mobile-btn {
      margin-top: 12px;
      padding: 25px 14px;
      display: flex;
      align-items: center;
      width: 100%;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      text-align: left;

      span {
        max-width: 270px;
      }

      &:after {
        margin-left: 15px;
        flex: 0 0 auto;
        .pseudo-icon('../img/icons/arrow-right-up.svg', 14px, 14px);
      }
    }
  }
}
</style>
