<template>
  <div class="modal" :class="typeClass" v-if="open">
    <div class="modal__body">
      <div class="modal__content">
        <slot name="main"></slot>
        <button class="modal__close" @click="$emit('close')"></button>
      </div>
    </div>
    <div class="modal__backdrop" @click="$emit('close')"></div>
  </div>
</template>

<script setup>
import { lockBody, unlockBody, isBodyLock } from '@/hooks/body';
import { ref, watch } from 'vue';
import { useModals } from '@/stores/modals';

const storeModals = useModals();
const props = defineProps({
  type: {
    type: String,
    default: null
  },
  open: {
    type: Boolean,
    default: false
  }
});
defineEmits(['close']);

watch(
  () => props.open,
  () => {
    if (!isBodyLock() && storeModals.someOpen) {
      lockBody();
    } else if (isBodyLock() && !storeModals.someOpen) {
      unlockBody();
    }
  }
);
const typeClass = ref(props.type ? `modal--${props.type}` : '');
</script>

<style lang="less">
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.modal {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display: flex;
  transition: visibility 0.4s, opacity 0.4s;

  &__content {
    transform: translateY(0);
    transition: transform 0.4s;
  }

  &.fade-enter-from &__content,
  &.fade-leave-to &__content {
    transform: translateY(20px);
  }

  &__body {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    padding: 20px 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    pointer-events: none;
  }

  &__content {
    position: relative;
    z-index: 1;
    margin: auto;
    padding: 30px 38px 49px;
    width: 360px;
    max-width: calc(100vw - 40px);
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    pointer-events: all;
    transition: transform 0.4s;
  }

  &__form {
    width: 286px;
    max-width: 100%;
    margin: 0 auto;
  }

  &__close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      .pseudo-icon('../img/icons/close.svg', 14px, 14px);
    }
  }

  &__backdrop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &--message &__content {
    width: 480px;
    transform: translateY(15px);
  }

  &--message &__content {
    padding-bottom: 30px;
  }

  &--active {
    opacity: 1;
    visibility: visible;
  }

  &--active &__content {
    transform: translate(0, 0);
  }

  @media (max-width: 767px) {
    &__content {
      padding: 30px 25px;
      max-width: calc(100vw - 24px);
    }

    &__close {
      top: 15px;
      right: 15px;
    }

    &__text {
      font-size: 16px;
    }

    &__icon {
      margin-bottom: 14px;
      width: 52px;
      height: 52px;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
