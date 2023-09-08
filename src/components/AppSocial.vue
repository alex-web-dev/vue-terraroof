<template>
  <section class="social">
    <div class="container">
      <div class="social__content">
        <h2 class="title2 title2--white social__title">Мы в социальных сетях</h2>
        <p class="text text--white social__text">
          Подпишитесь на нас и следите за новостями, акциями и спец.предложениями!
        </p>
        <div class="social__list">
          <a
            class="social__item"
            v-for="item in socialList"
            :href="item.link"
            target="_blank"
            :key="item"
          >
            <img class="social__item-icon" :src="getImage(item.icon)" alt="" />
            <span class="social__item-text">{{ item.text }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useImage } from '@/hooks/img';

const { getImage } = useImage();
const socialList = ref([
  {
    link: 'https://www.instagram.com/',
    icon: 'icons/social/instagram.svg',
    text: 'Instagram'
  },
  {
    link: 'https://www.facebook.com/',
    icon: 'icons/social/facebook.svg',
    text: 'Facebook'
  },
  {
    link: 'https://www.youtube.com/',
    icon: 'icons/social/youtube.svg',
    text: 'YouTube'
  },
  {
    link: 'https://www.whatsapp.com/',
    icon: 'icons/social/whatsapp.svg',
    text: 'WhatsApp'
  }
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.social {
  &__content {
    padding: 80px 80px 76px;
    border-radius: 16px;
    background-color: @color-primary;
  }

  &__text {
    margin-top: 18px;
    max-width: 348px;
  }

  &__list {
    padding-top: 42px;
    margin: -12px -6px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    margin: 12px 6px 0;
    padding: 10.5px 18px;
    background-color: #fff;
    border-radius: 50px;
    display: flex;
    align-items: center;

    &-icon {
      width: 30px;
      height: 30px;
      flex: 0 0 auto;
      object-fit: contain;
    }

    &-text {
      color: @color-primary;
      font-size: 24px;

      &:not(:first-child) {
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 1240px) {
    &__content {
      padding: 60px 60px 56px;
    }

    &__text {
      margin-top: 14px;
    }

    &__list {
      padding-top: 32px;
    }

    &__item {
      padding: 9px 16px;

      &-text {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 991px) {
    &__content {
      padding: 40px 35px;
    }

    &__text {
      margin-top: 12px;
    }

    &__list {
      padding-top: 24px;
    }

    &__item {
      &-text {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      padding: 24px 12px 32px;
      max-width: @content-sm-max-width;
    }

    &__title {
      font-size: 24px;
    }

    &__text {
      margin-top: 8px;
      max-width: 220px;
    }

    &__list {
      margin: -8px -2px 0;
      padding-top: 18px;
    }

    &__item {
      margin: 8px 2px 0;
      padding: 8px 14px;

      &-icon {
        width: 20px;
        height: 20px;
      }

      &-text {
        font-size: 16px;

        &:not(:first-child) {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
