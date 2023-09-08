<template>
  <div class="youtube-player" :class="{ 'youtube-player--active': isActive }" :data-src="src">
    <iframe
      v-if="isActive"
      class="youtube-player__iframe"
      :src="`${src}?autoplay=1`"
      frameborder="0"
      autoplay
      allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    <img
      v-if="preview"
      class="youtube-player__preview"
      :class="[imgClass]"
      :src="getImage(preview)"
      alt=""
    />
    <button class="youtube-player__play" @click="isActive = true"></button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useImage } from '@/hooks/img';

const { getImage } = useImage();
defineProps({
  src: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    default: null
  },
  imgClass: {
    type: String,
    default: null
  }
});

const isActive = ref(false);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.youtube-player {
  position: relative;

  &__play {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);

    &:before {
      .pseudo-icon('../img/icons/play.svg', 38px, 38px);
    }
  }

  &__iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &--active &__preview {
    display: none;
  }

  &--active &__play {
    display: none;
  }
}
</style>
