<template>
  <section class="video-section">
    <div class="video-section__main">
      <div class="container video-section__container">
        <div class="video-section__body">
          <h3 class="title3 video-section__title">
            Индивидуальный тур по крышам – уникальная возможность оценить объекты TerraRoof
          </h3>
          <button class="btn btn--xs-border video-section__btn" @click="storeModals.open('time')">
            Подобрать время
          </button>
        </div>
      </div>
    </div>
    <div class="video-section__video-box">
      <video class="video-section__video" loop="loop" autoplay preload="auto" muted>
        <source src="@/assets/video/main.mp4" />
      </video>
    </div>
  </section>
</template>

<script setup>
import { useModals } from '@/stores/modals';

const storeModals = useModals();
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.video-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 776px;
  overflow: hidden;

  &__body {
    padding: 55px 45px;
    position: relative;
    z-index: 2;
  }

  &__title {
    color: #fff;
  }

  &__btn {
    margin-top: 50px;
  }

  &__video-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(10, 11, 10, 0.4);
    }
  }

  &__video {
    position: absolute;
    left: 50%;
    top: calc(50% - 32px);
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }

  @media (max-width: 1240px) {
    min-height: 570px;

    &__btn {
      margin-top: 42px;
    }
  }

  @media (max-width: 991px) {
    min-height: 420px;

    &__content {
      padding: 45px 35px;
    }

    &__btn {
      margin-top: 32px;
    }
  }

  @media (max-width: 767px) {
    min-height: 320px;

    &__main {
      max-width: calc(480px + @container-sm-offset * 2);
      margin-left: auto;
      margin-right: auto;
    }

    &__title {
      line-height: 1.375;
    }
  }

  @media (max-width: 480px) {
    min-height: auto;
    text-align: left;

    &__title {
      font-size: 16px;
      color: @color-black;
    }

    &__video-box {
      position: relative;
      order: -1;
      padding-top: 56.25%;
    }

    &__video {
      left: 0;
      top: 0;
      transform: translate(0, 0);
      min-height: auto;
      min-width: auto;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 0 12px;

    &__body {
      padding: 14px 0 32px 2px;
    }

    &__btn {
      margin-top: 16px;
      width: 100%;
    }
  }
}
</style>
