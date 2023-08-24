<template>
  <ImaskInput
    v-if="type === 'mask'"
    :value="modelValue"
    @input="maskInput"
    class="input"
    :mask="mask"
    :unmask="true"
    :placeholder="placeholder"
  />
  <input
    v-else
    class="input"
    :type="type"
    :placeholder="placeholder"
    @focus="$emit('focus')"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { IMaskComponent as ImaskInput } from 'vue-imask';
const emit = defineEmits(['update:modelValue']);
defineProps({
  modelValue: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  mask: {
    type: String || Number,
    default: ''
  }
});

function maskInput(val) {
  emit('update:modelValue', val.target.value)
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.input {
  padding: 13px 17px;
  line-height: 1.375;
  background: #f8f8f8;
  border: 1px solid #e0e5ed;
  border-radius: 6px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: @color-primary;
  }

  &::placeholder {
    color: @color-gray;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }

  &[type='number'] {
    appearance: textfield;
  }

  &--area {
    display: block;
    height: 100px;
    resize: none;
  }

  @media (max-width: 991px) {
    padding: 11px 16px;
    font-size: 15px;
    line-height: 1.3;
  }

  @media (max-width: 767px) {
    padding: 10px 18px;
    font-size: 14px;
  }
}
</style>
