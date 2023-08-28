<template>
  <div class="cooperate">
    <div class="container">
      <div class="cooperate__content">
        <h1 class="title4 title4--upper title4--bottom-line cooperate__title">Дилерам</h1>
        <div class="cooperate__list">
          <CooperateItem
            class="cooperate__item"
            v-for="item in list"
            :title="item.title"
            :content="item.content"
            :btnText="item.btnText"
            :img="item.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CooperateItem from '@/components/CooperateItem.vue';

defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.cooperate {
  &__title {
    margin-bottom: 32px;
    border-color: rgba(0, 0, 0, 0.2);
  }

  &__item {
    &:not(:first-child) {
      margin-top: 82px;
      padding-top: 82px;
      border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    }

    &:nth-child(2n) {
      margin-top: 95px;
    }
  }

  @media (max-width: 1320px) {
    &__item {
      &:nth-child(2n) {
        margin-top: 82px;
      }
    }
  }

  @media (max-width: 991px) {
    &__title {
      margin-bottom: 24px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 48px;
        padding-top: 48px;
      }

      &:nth-child(2n) {
        margin-top: 48px;
      }
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__title {
      font-size: 24px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 24px;
        padding-top: 24px;
      }

      &:nth-child(2n) {
        margin-top: 24px;
      }
    }
  }
}
</style>
