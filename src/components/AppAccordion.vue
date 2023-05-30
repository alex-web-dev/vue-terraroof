<template>
  <div class="accordion" :class="accordionClasses">
    <button
      class="accordion__btn"
      :class="[headerClass, { 'accordion__btn--active': isBtnActive }]"
      @click="toggle"
    >
      <slot name="btn"></slot>
    </button>
    <div class="accordion__content" :style="contentStyles" @transitionend="transitionendHandler">
      <div class="accordion__main" ref="$main" :class="mainClass">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
  headerClass: {
    type: String,
    default: null
  },
  mainClass: {
    type: String,
    default: null
  }
});

const $main = ref(null);
const isActive = ref(props.active);
const isBtnActive = ref(false);
const isActivating = ref(false);
const height = ref(null);

const accordionClasses = computed(() => ({
  'accordion--active': isActive.value,
  'accordion--activating': isActivating.value
}));

const contentStyles = computed(() => {
  if (height.value === null) {
    return null;
  } else {
    return { height: height.value + 'px' };
  }
});

function toggle() {
  if (!isActive.value) {
    isActivating.value = true;
    isBtnActive.value = true;
    setTimeout(() => (height.value = $main.value.getBoundingClientRect().height));
  } else {
    height.value = $main.value.getBoundingClientRect().height;
    isBtnActive.value = false;
    isActivating.value = true;
    setTimeout(() => (height.value = 0));
  }
}

function transitionendHandler() {
  isActivating.value = false;
  isActive.value = !isActive.value;

  if (isActive.value) {
    height.value = null;
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.accordion {
  overflow: hidden;

  &:not(.accordion--mobile) &__btn {
    user-select: none;
    cursor: pointer;
  }

  &:not(.accordion--mobile) &__content {
    display: none;
  }

  &:not(.accordion--mobile).accordion--activating &__content {
    height: 0;
    display: block;
    overflow: hidden;
    transition: height 0.5s;
  }

  &:not(.accordion--mobile).accordion--active &__content {
    display: block;
  }

  @media (max-width: 767px) {
    &--mobile &__btn {
      user-select: none;
      cursor: pointer;
    }

    &--mobile &__content {
      display: none;
    }

    &--mobile.accordion--activating &__content {
      height: 0;
      display: block;
      overflow: hidden;
      transition: height 0.5s;
    }

    &--mobile.accordion--active &__content {
      display: block;
    }
  }
}
</style>
