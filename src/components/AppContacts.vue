<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts__content">
        <h1 class="title4 contacts__title">работаем по всему Казахстану</h1>
        <div class="contacts__list">
          <div class="contacts__item">
            <div class="contacts__item-info">
              <div class="contacts__item-label">Адрес</div>
              <div class="contacts__item-value">г. Астана, ул. Керей, Жанибек хандар, 30</div>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__item-info">
              <div class="contacts__item-label">Телефон:</div>
              <a class="contacts__item-value" href="tel:+77776333330">8 (777) 633 33 30</a>
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__item-info">
              <div class="contacts__item-label">Почта:</div>
              <a class="contacts__item-value" href="mailto:info@terraroof.kz">info@terraroof.kz</a>
            </div>
          </div>
        </div>
        <AppMap class="contacts__map" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppMap from '@/components/AppMap.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.contacts {
  &__title {
    margin-bottom: 32px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    padding-right: 12px;

    &:nth-child(3n) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex: 1 1 auto;
    }

    &:nth-child(3n + 1) {
      width: calc(52.5%);
    }

    &:nth-child(3n + 2) {
      width: calc(25.5%);
    }

    &-label {
      margin-bottom: 4px;
      line-height: 1.5;
      color: @color-gray;
    }

    &-value {
      font-size: 24px;
      line-height: 1.5;
    }
  }

  &__map {
    position: relative;
    margin-top: 32px;
    padding-top: 59.1%;
    border-radius: 6px;
    overflow: hidden;

    iframe {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1240px) {
    &__item {
      &-label {
        font-size: 15px;
      }

      &-value {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1240px) {
    &__item {
      &-label {
        font-size: 15px;
      }

      &-value {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 24px;
    }

    &__item {
      &:nth-child(3n) {
        padding-right: 0;
      }

      &-value {
        font-size: 18px;
      }
    }

    &__map {
      margin-top: 24px;
    }
  }

  @media (max-width: 767px) {
    &__title {
      margin-bottom: 16px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 12px;
      }

      &:nth-child(3n),
      &:nth-child(3n + 1),
      &:nth-child(3n + 2) {
        width: 100%;
      }

      &:nth-child(3n) {
        align-items: flex-start;
      }

      &-label {
        margin-bottom: 3px;
        font-size: 14px;
      }

      &-value {
        font-size: 16px;
      }
    }

    &__map {
      margin-top: 20px;
      padding-top: 60%;
    }
  }
}
</style>
