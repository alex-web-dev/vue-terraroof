<template>
  <div class="video-player info-section__video" :class="{ 'video-player--active': isActive }">
    <img class="video-player__bg" :src="getImage(preview)" alt="" />
    <button class="video-player__play" :class="btnClass" @click="openVideo"></button>
    <video
      v-if="isActive"
      class="video-player__video"
      autoplay
      controls
      muted
      :src="useVideo(url)"
    ></video>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useImage } from '@/hooks/img';
import { useVideo } from '@/hooks/video';

const { getImage } = useImage();
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    default: null
  },
  btnType: {
    type: String,
    default: null
  }
});

const isActive = ref(false);
const btnClass = computed(() => {
  if (props.btnType) {
    return `video-player__play video-player__play--${props.btnType}`;
  }

  return 'video-player__play';
});

function openVideo() {
  isActive.value = true;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.video-player {
  position: relative;
  padding-top: 32%;
  background: #000;
  overflow: hidden;
  border-radius: 6px;

  &__video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }

  &__play {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      .pseudo-icon('../img/icons/play.svg', 32px, 32px, block);
    }

    &--2 {
      width: 54px;
      height: 54px;
      background: rgba(#fff, 0.4);
      border: 2px solid #ffffff;
      border-radius: 50%;

      &:before {
        .pseudo-icon('../img/icons/play-simple.svg', 22px, 24px, block);
      }
    }
  }

  &--active &__bg {
    display: none;
  }

  &--active &__play {
    display: none;
  }

  @media (max-width: 767px) {
    &__play {
      &--2 {
        width: 44px;
        height: 44px;
        background: rgba(#fff, 0.4);
        border: 2px solid #ffffff;
        border-radius: 50%;

        &:before {
          width: 18px;
          height: 20px;
        }
      }
    }
  }
}
</style>
