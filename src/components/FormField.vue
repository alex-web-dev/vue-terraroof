<template>
  <div class="form-field" :class="{ 'form-field--error': data.isError }" :key="data">
    <AppInput
      v-if="data.element === 'input'"
      class="form-field__input"
      :type="data.type"
      :placeholder="data.placeholder"
      @focus="emit('focus')"
      :model-value="data.value"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <AppSelect
      v-else-if="data.element === 'select'"
      :list="data.options"
      @change="emit('update:modelValue', $event)"
      :value="data.value"
      @focus="emit('focus')"
    />
    <span class="form-field__error" :class="{ 'form-field__error--md-absolute': errorAbsolute }">{{
      data.showErrorText
    }}</span>
  </div>
</template>

<script setup>
import AppInput from '@/components/AppInput.vue';
import AppSelect from '@/components/AppSelect.vue';

defineProps({
  data: {
    type: Object,
    required: true
  },
  modelValue: {
    type: String
  },
  errorAbsolute: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['focus', 'update:modelValue']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.form-field {
  position: relative;

  &__input {
    width: 100%;
  }

  &__error {
    margin-top: 4px;
    display: none;
    font-size: 14px;
    color: @color-danger;

    &--absolute {
      position: absolute;
      left: 0;
      top: 100%;
    }
  }

  &--error &__input {
    border-color: @color-danger;
  }

  &--error &__error {
    display: block;
  }

  @media (min-width: 767.01px) {
    &__error {
      &--md-absolute {
        position: absolute;
        left: 0;
        top: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    .form-field {
      &__error {
        font-size: 12px;
      }
    }
  }
}
</style>
