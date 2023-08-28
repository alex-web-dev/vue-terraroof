<template>
  <div class="faq-item">
    <AppAccordion
      class="faq-item__accordion"
      header-class="faq-item__header"
      main-class="faq-item__main"
    >
      <template #btn>
        {{ title }}
        <span class="faq-item__arrow"></span>
      </template>
      <template #content>
        <div class="text faq-item__text" v-html="content"></div>
      </template>
    </AppAccordion>
  </div>
</template>

<script setup>
import AppAccordion from '@/components/AppAccordion.vue';

defineProps({
  title: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.faq-item {
  padding: 19px 24px;
  background-color: #fff;
  border-radius: 16px;

  &:deep(&__header) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.375;
  }

  &:deep(&__header.accordion__btn--active &__arrow) {
    &:before {
      transform: rotate(90deg);
    }
  }

  &:deep(&__arrow) {
    margin-left: 8px;
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e4f5ff;
    border-radius: 50%;

    &:before {
      .pseudo-icon('../img/icons/right.svg', 9px, 20px);
      transition: transform 0.4s;
    }
  }

  &:deep(&__main) {
    padding: 10px 60px 18px 0;
  }

  &:deep(&__text) {
    line-height: 1.375;
  }

  @media (max-width: 1240px) {
    padding: 17px 22px;

    &:deep(&__header) {
      font-size: 22px;
    }

    &:deep(&__arrow) {
      width: 38px;
      height: 38px;

      &:before {
        width: 8px;
        height: 18px;
      }
    }

    &:deep(&__main) {
      padding-right: 40px;
      padding-bottom: 12px;
    }
  }

  @media (max-width: 991px) {
    &:deep(&__header) {
      font-size: 18px;
    }

    &:deep(&__arrow) {
      width: 36px;
      height: 36px;
    }
  }

  @media (max-width: 767px) {
    padding: 12px 14px;

    &:deep(&__header) {
      font-size: 16px;
    }

    &:deep(&__arrow) {
      width: 32px;
      height: 32px;

      &:before {
        width: 7px;
        height: 15px;
      }
    }

    &:deep(&__header.accordion__btn--active &-arrow) {
      &:before {
        transform: rotate(90deg) translateX(1px);
      }
    }

    &:deep(&__main) {
      padding: 8px 0 7px;
    }
  }
}
</style>
