<template>
  <div class="video-player info-section__video" :class="{ 'video-player--active': isActive }">
    <img class="video-player__bg" :src="getImage(preview)" alt="" />
    <button class="video-player__play" @click="openVideo"></button>
    <video
      v-if="isActive"
      class="video-player__video"
      autoplay
      controls
      :src="getVideo(url)"
    ></video>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getImage } from '@/hooks/img';
import { getVideo } from '@/hooks/video';

defineProps({
  url: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    default: null
  }
});

const isActive = ref(false);

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

    &:before {
      .pseudo-icon('../img/icons/play.svg', 32px, 32px);
    }
  }

  &--active &__bg {
    display: none;
  }

  &--active &__play {
    display: none;
  }
}
</style>
