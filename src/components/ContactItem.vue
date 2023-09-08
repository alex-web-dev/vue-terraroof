<template>
  <div class="contact-item">
    <h3 v-if="title" class="title4 price-list__title">{{ title }}</h3>
    <div v-if="icon" class="contact-item__icon">
      <img :src="getImage(icon)" alt="" />
    </div>
    <div v-if="subtitle" class="text text--gray contact-item__name">{{ subtitle }}</div>
    <div v-if="value" class="contact-item__value">{{ value }}</div>
    <a v-if="email" class="contact-item__value" :href="`mailto:${email}`">{{ email }}</a>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import { useImage } from '@/hooks/img';

const { getImage } = useImage();

defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  value: {
    type: String,
    default: null
  },
  link: {
    type: Object,
    default: null
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.contact-item {
  padding: 25px;
  background-color: #ffffff;
  border: 1px solid #e0e5ed;
  border-radius: 6px;

  &__icon {
    margin: 0 auto 12px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid @color-primary;

    img {
      max-width: 20px;
      max-height: 20px;
      object-fit: contain;
    }
  }

  &__name {
    margin: 0 auto;
    max-width: 240px;
    text-align: center;
    line-height: 1.5;
    color: @color-gray;
  }

  &__value {
    margin: 12px auto 0;
    display: block;
    max-width: 240px;
    text-align: center;
    font-size: 24px;
    line-height: 1.375;
  }

  &__btn {
    margin-top: 42px;
    max-width: 100%;
    width: 270px;
  }

  @media (max-width: 1240px) {
    &__value {
      font-size: 22px;
    }

    &__btn {
      margin-top: 35px;
      width: 250px;
    }
  }

  @media (max-width: 991px) {
    padding: 20px;

    &__icon {
      margin-bottom: 10px;
      width: 46px;
      height: 46px;
    }

    &__value {
      margin-top: 10px;
      font-size: 18px;
    }

    &__btn {
      margin-top: 24px;
      width: 230px;
    }
  }

  @media (max-width: 767px) {
    padding: 18px 14px 24px;

    &__icon {
      margin-bottom: 8px;
      width: 42px;
      height: 42px;
    }

    &__value {
      margin-top: 8px;
      max-width: 260px;
      font-size: 16px;
    }

    &__btn {
      margin-top: 18px;
      width: 268px;
    }
  }
}
</style>
