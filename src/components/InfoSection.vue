<template>
  <section class="info-section main__section">
    <div class="container">
      <div class="info-section__content">
        <div class="info-section__main">
          <h2 class="title2 info-section__title">
            Возьмем на себя <strong>обучение Вашей бригады</strong>
          </h2>
          <button
            class="link-more link-more--primary info-section__more"
            @click="openModalCallback"
          >
            Связаться с техническим отделом
          </button>
        </div>
        <VideoPlayer url="main.mp4" preview="info-section.jpg" />
      </div>
    </div>
  </section>
</template>

<script setup>
import VideoPlayer from '@/components/VideoPlayer.vue';

import { useStore } from 'vuex';

const store = useStore();

function openModalCallback() {
  store.dispatch('modalCallback/open');
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.info-section {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 51px 131px 51px 72px;
    background: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow: hidden;
  }

  &__main {
    flex: 0 0 490px;
  }

  &__more {
    margin-top: 52px;
  }

  &__video {
    flex: 0 0 43.2%;
  }

  @media (max-width: 1240px) {
    &__content {
      padding: 45px 90px 45px 62px;
    }

    &__main {
      flex: 0 0 420px;
    }

    &__more {
      margin-top: 35px;
    }
  }

  @media (max-width: 991px) {
    &__content {
      padding: 35px 60px 35px 45px;
    }

    &__main {
      flex: 0 0 340px;
    }

    &__more {
      margin-top: 25px;
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      max-width: @content-sm-max-width;
      display: flex;
      flex-wrap: wrap;
    }

    &__main {
      order: 2;
      padding: 10px 14px 35px;
      flex: 1 1 100%;
    }

    &__title {
      font-size: 24px;
    }

    &__more {
      margin-top: 18px;
    }

    &__video {
      width: 100%;
      flex: 1 1 100%;
      padding-top: min(74.25%, 260px);
      border-radius: 0;
    }
  }
}
</style>
