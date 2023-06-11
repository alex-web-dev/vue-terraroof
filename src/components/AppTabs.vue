<template>
  <div class="tabs">
    <div class="tabs__btns">
      <button
        class="tabs__btn"
        :class="{ 'tabs__btn--active': item.active }"
        v-for="(item, index) in list"
        @click="emit('change', index)"
        :key="item"
      >
        {{ item.btn }}
      </button>
    </div>
    <div class="tabs__list">
      <div
        class="tabs__item"
        :class="{ 'tabs__item--active': item.active }"
        v-for="item in list"
        :key="item"
      >
        <div class="text-content" :class="contentClass" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  },
  contentClass: {
    type: String,
    default: null
  }
});
const emit = defineEmits(['change']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.tabs {
  &__btns {
    padding: 32px 108px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    overflow-x: auto;
  }

  &__btn {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.5;

    &--active {
      color: @color-primary;
      cursor: default;
    }
  }

  &__item {
    display: none;

    &--active {
      display: block;
    }
  }

  @media (max-width: 1240px) {
    &__btns {
      padding: 24px 80px;
    }

    &__btn {
      font-size: 20px;
    }
  }

  @media (max-width: 991px) {
    &__btns {
      padding: 20px 75px;
    }

    &__btn {
      font-size: 18px;
    }
  }

  @media (max-width: 767px) {
    &__btns {
      padding: 14px 16px;
    }

    &__btn {
      font-size: 14px;

      &:not(:first-child) {
        margin-left: 18px;
      }
    }
  }
}
</style>
