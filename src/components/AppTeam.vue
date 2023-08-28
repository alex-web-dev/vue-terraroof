<template>
  <div class="team">
    <div class="container">
      <div class="team__content">
        <h2 class="title4 team__title">Команда мечты, которая работает на вас:</h2>
        <div class="team__slider-box">
          <swiper-container
            class="team__slider"
            :modules="modules"
            :speed="swiperOptions.speed"
            :slidesPerView="swiperOptions.slidesPerView"
            :spaceBetween="swiperOptions.spaceBetween"
            :loop="swiperOptions.loop"
            :watchOverflow="swiperOptions.watchOverflow"
            :autoplay="swiperOptions.autoplay"
            :pagination="swiperOptions.pagination"
            :breakpoints="swiperOptions.breakpoints"
          >
            <swiper-slide class="team__slide" v-for="item in list">
              <TeamCard :data="item" />
            </swiper-slide>
          </swiper-container>
          <div
            class="swiper-bullets swiper-bullets--big swiper-bullets--active-primary team__pagination"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { register } from 'swiper/element';
import { Autoplay, Pagination } from 'swiper/modules';
import TeamCard from '@/components/TeamCard.vue';
import 'swiper/css';

register();

const list = reactive([
  {
    img: 'team/1.jpg',
    title: 'Сергей Спорадько',
    position: 'Директор'
  },
  {
    img: 'team/2.jpg',
    title: 'Татьяна Рий',
    position: 'Главный бухгалтер'
  },
  {
    img: 'team/3.jpg',
    title: 'Даниил Ермилов',
    position: 'Инженер-архитектор'
  },
  {
    img: 'team/4.jpg',
    title: 'Ольга Монастырская',
    position: 'Логист'
  },
  {
    img: 'team/5.jpg',
    title: 'Евгений Данилевич',
    position: 'Руководитель отдела продаж'
  },
  {
    img: 'team/6.jpg',
    title: 'Вячеслав Тибатин',
    position: 'Менеджер по продажам'
  },
  {
    img: 'team/7.jpg',
    title: 'Дулат Мусин',
    position: 'B2B Менеджер'
  },
  {
    img: 'team/8.jpg',
    title: 'Дмитрий Цапаев',
    position: 'Начальник отдела снабжения'
  }
]);

const modules = [Autoplay, Pagination];
const swiperOptions = {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  watchOverflow: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.team__pagination',
    clickable: true
  },
  breakpoints: {
    840: {
      slidesPerView: 3
    },
    767: {
      slidesPerView: 2
    }
  }
};
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.team {
  &__title {
    margin-bottom: 32px;
  }

  &__slider {
    user-select: none;

    &-box {
      position: relative;
      padding-bottom: 50px;
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 24px;
    }

    &__slider {
      &-box {
        padding-bottom: 40px;
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
      margin-bottom: 20px;
    }

    &__slider {
      &-box {
        padding-bottom: 30px;
      }
    }
  }
}
</style>
