<template>
  <div class="team-card">
    <div class="team-card__img">
      <img v-if="data.img" class="load-img" :src="useImage(data.img)" alt="" />
    </div>
    <h3 v-if="data.title" class="title5 team-card__title">{{ data.title }}</h3>
    <div v-if="data.position" class="team-card__position">{{ data.position }}</div>
  </div>
</template>

<script setup>
import { useImage } from '@/hooks/img';

defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.team-card {
  &__img {
    position: relative;
    padding-top: 109%;
    width: min(100%, 413px);
    border-radius: 16px;
    overflow: hidden;
    background-color: #e0e5ed;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    margin-top: 18px;
    font-weight: 600;
    line-height: 1.45;
  }

  &__position {
    font-size: 18px;
    line-height: 1.45;
    color: @color-primary;
  }

  @media (max-width: 767px) {
    &__img {
      width: min(100%, 360px);
    }

    &__title {
      margin-top: 12px;
    }

    &__position {
      font-size: 16px;
    }
  }
}
</style>
