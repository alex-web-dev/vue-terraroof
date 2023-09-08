<template>
  <section class="gallery">
    <div class="container">
      <div class="gallery__content">
        <div class="gallery__header">
          <h3
            v-if="slots.title"
            class="title4 gallery__title"
            :class="{ 'gallery__title--long': longTitle }"
          >
            <slot name="title"></slot>
          </h3>
          <a
            v-if="btnText && btnLink"
            class="btn btn--border gallery__btn"
            :href="btnLink"
            target="_blank"
            >{{ btnText }}</a
          >
        </div>
        <div class="gallery__list">
          <template v-for="item in list" :key="item">
            <YoutubePlayer
              v-if="item.type === 'video'"
              class="gallery__item gallery__item--video"
              :src="item.link"
              :preview="item.img"
              img-class="gallery__img"
            />
            <a v-else class="gallery__item" :href="item.link" target="_blank">
              <img class="gallery__img" :src="getImage(item.img)" alt="" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import YoutubePlayer from '@/components/YoutubePlayer.vue';
import { useSlots } from 'vue';
import { useImage } from '@/hooks/img';

const slots = useSlots();
const { getImage } = useImage();

defineProps({
  type: {
    type: String,
    default: null
  },
  list: {
    type: Array,
    required: true
  },
  btnText: {
    type: String,
    default: null
  },
  btnLink: {
    type: String,
    default: null
  },
  longTitle: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.gallery {
  &__header {
    margin-bottom: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    max-width: 590px;
    padding-right: 20px;

    &--long {
      max-width: 730px;
    }
  }

  &__btn {
    margin-bottom: 10px;
    align-self: flex-end;
    flex: 0 0 270px;
  }

  &__list {
    margin: -20px -10px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    position: relative;
    margin: 20px 10px 0;
    padding-top: 31.8%;
    width: calc(100% / 12 * 4 - 20px);
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;

    &--video {
      padding-top: 20.5%;
    }
  }

  :deep(&__img) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1240px) {
    &__header {
      margin-bottom: 32px;
    }
  }

  @media (max-width: 991px) {
    &__header {
      margin-bottom: 24px;
    }

    &__btn {
      flex-basis: 220px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__header {
      margin-bottom: 18px;
      flex-direction: column;
      align-items: flex-start;
    }

    &__btn {
      margin-top: 12px;
      margin-bottom: 0;
      flex: none;
      width: 220px;
      align-self: flex-start;
    }

    &__list {
      margin-top: -18px;
    }

    &__item {
      margin-top: 18px;
      padding-top: min(64.75%, 240px);
      width: calc(100% - 20px);

      &--video {
        padding-top: min(56.25%, 220px);
      }
    }
  }
}
</style>
