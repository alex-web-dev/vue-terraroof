<template>
  <div class="cooperate-item">
    <h2 v-if="title" class="title4 cooperate-item__title">{{ title }}</h2>
    <div class="cooperate-item__info">
      <TextContent v-if="content" class="cooperate-item__text" v-html="content" />
      <button
        v-if="btnText"
        class="btn cooperate-item__btn"
        data-popup-name="someone"
        data-popup-target="dealer"
        @click="storeModals.open('callback')"
      >
        {{ btnText }}
      </button>
    </div>
    <div v-if="img" class="cooperate-item__img">
      <img class="load-img" :src="getImage(img)" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useImage } from '@/hooks/img';
import { useModals } from '@/stores/modals';
import TextContent from '@/components/TextContent.vue';


const { getImage } = useImage();
const storeModals = useModals();

defineProps({
  title: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  },
  img: {
    type: String,
    default: null
  },
  btnText: {
    type: String,
    default: null
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.cooperate-item {
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  &__info {
    flex: 0 1 calc(50% - 10px);
    grid-column: ~'1/7';
  }

  &__title {
    grid-column: ~'1/7';
    font-weight: 700;
    text-transform: uppercase;
  }

  &__text {
    max-width: 590px;
    line-height: 1.5;

    ul {
      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }

  &__img {
    position: relative;
    padding-top: 57.65%;
    flex: 0 0 calc(50% - 10px);
    grid-column: ~'7/13';
    grid-row: ~'1/5';
    background: #e0e5ed;
    border-radius: 16px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__btn {
    margin-top: 46px;
    min-width: 227px;
  }

  &:nth-child(3n + 2) &__img {
    grid-column: ~'1/7';
  }

  &:nth-child(3n + 2) &__title,
  &:nth-child(3n + 2) &__info {
    grid-column: ~'7/13';
  }

  &:nth-child(3n + 2) &__title,
  &:nth-child(3n + 2) &__info {
    margin-left: 60px;
  }

  &:nth-child(3n + 2) &__text {
    max-width: 560px;
  }

  @media (max-width: 1320px) {
    &:nth-child(3n + 2) &__title,
    &:nth-child(3n + 2) &__info {
      margin-left: 0;
    }

    &:nth-child(3n) &__img {
      margin-right: 0;
    }
  }

  @media (max-width: 991px) {
    gap: 12px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    gap: 0;

    &__title {
      margin-bottom: 12px;
      grid-column: ~'1/1';
      grid-row: ~'1/1';
      font-size: 24px;
    }

    &__img {
      margin-bottom: 12px;
      padding-top: 57.5%;
      grid-column: ~'1/1';
      grid-row: ~'2/3';
    }

    &__info {
      grid-column: ~'1/1';
      grid-row: ~'3/4';
    }
  }
}
</style>
