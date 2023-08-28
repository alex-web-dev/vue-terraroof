<template>
  <div class="breadcrumbs catalog__breadcrumbs">
    <div class="breadcrumbs__list">
      <div class="breadcrumbs__item" v-for="item in list" :key="item">
        <RouterLink v-if="item.route" class="breadcrumbs__link" :to="{ name: item.route }">{{
          item.name
        }}</RouterLink>
        <span v-else class="breadcrumbs__current">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.breadcrumbs {
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 1.5;

  &__list {
    display: flex;
    align-items: center;
    overflow-x: auto;
  }

  &__item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      position: relative;
      margin-right: 11px;
    }
  }

  &__item {
    &:not(:last-child):after {
      content: '';
      .pseudo-icon('../img/icons/right-gray.svg', 6px, 11px);
      margin-left: 11px;
    }
  }

  &__link,
  &__current {
    flex: 0 0 auto;
  }

  &__link {
    color: #7d7d7d;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1240px) {
    padding-bottom: 18px;
  }

  @media (max-width: 767px) {
    padding-bottom: 12px;
    font-size: 12px;

    &__item {
      &:not(:last-child) {
        margin-right: 8px;

        &:after {
          .pseudo-icon('../img/icons/right-gray.svg', 5px, 9px);
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
