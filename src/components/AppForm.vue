<template>
  <form class="callback-form" autocomplete="off" @submit.prevent="emit('formSubmit')">
    <h3 v-if="slots.title" class="title5 title5--sm-white callback-form__title">
      <slot name="title"></slot>
    </h3>
    <div class="callback-form__main" :class="[mainLineClass]">
      <FormField
        class="callback-form__item"
        :data="item"
        v-for="(item, index) in data.items"
        :key="item"
        :model-value="item.value"
        :error-absolute="true"
        @focus="emit('focusField', item)"
        @update:model-value="emit('updateField', index, $event)"
      />
      <button class="btn btn--border btn--sm-primary callback-form__btn">Отправить</button>
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <ModalMessage :open="data.isSent" type="message" @close="emit('closeMessage')" />
      </Transition>
    </Teleport>
  </form>
</template>

<script setup>
import FormField from '@/components/FormField.vue';
import ModalMessage from '@/components/ModalMessage.vue';

import { useSlots } from 'vue';

const slots = useSlots();

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  line: {
    type: String,
    default: null
  },
  data: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['formSubmit', 'focusField', 'updateField', 'closeMessage']);

const mainLineClass = props.line === 'row' ? `callback-form__main--row` : null;
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.callback-form {
  &__title {
    margin-bottom: 24px;
  }

  &__main {
    &--row {
      display: flex;
      align-items: flex-start;
    }
  }

  &__item {
    &:not(:first-child) {
      margin-top: 14px;
    }
  }

  &__main--row &__item {
    flex: 1 1 100%;

    &:not(:first-child) {
      margin-top: 0;
      margin-left: 18px;
    }
  }

  &__btn {
    margin-top: 24px;
    width: 100%;
  }

  &__main--row &__btn {
    margin-top: 0;
    margin-left: 18px;
    width: auto;
    flex: 0 0 270px;
  }

  &__privacy {
    margin-top: 8px;
    max-width: 330px;
    font-size: 14px;
    line-height: 1.36;
    color: @color-gray;

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 1240px) {
    &__main--row &__item {
      width: 100%;
    }

    &__main--row &__btn {
      flex: 0 0 30%;
    }
  }

  @media (max-width: 991px) {
    &__title {
      font-size: 20px;
    }

    &__btn {
      margin-top: 18px;
    }

    &__privacy {
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    &__main {
      &--row {
        flex-direction: column;
      }
    }

    &__item {
      &:not(:first-child) {
        margin-top: 8px;
      }
    }

    &__main--row &__item {
      &:not(:first-child) {
        margin-top: 8px;
        margin-left: 0;
      }
    }

    &__main--row &__btn {
      margin-top: 18px;
      margin-left: 0;
      width: 100%;
    }

    &__title {
      margin-bottom: 14px;
      max-width: 245px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.375;
    }

    &__privacy {
      font-size: 12px;
    }
  }
}
</style>
