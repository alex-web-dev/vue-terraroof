<template>
  <div class="counter" :class="{ 'counter--high': size === 'high' }">
    <button type="button" class="counter__minus" @click="updateValue(-1)" :disabled="readonly">-</button>
    <input
      class="counter__input"
      type="number"
      :value="value"
      @input="emit('update:value', $event.target.value)"
      :readonly="readonly"
    />
    <button type="button" class="counter__plus" @click="updateValue(1)" :disabled="readonly">+</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:value']);
const props = defineProps({
  value: {
    type: Number,
    default: 1
  },
  onlyPositive: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  }
});

function updateValue(num) {
  if (props.readonly) {
    return;
  }

  if (props.onlyPositive && props.value <= 1 && num < 0) {
    return;
  }

  emit('update:value', props.value + num);
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.counter {
  padding: 10px 32px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #e0e5ed;
  border-radius: 6px;

  &__input {
    width: 40px;
    height: 100%;
    text-align: center;
    font-size: 18px;
    border: none;
    outline: none;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  &__minus,
  &__plus {
    width: 20px;
    height: 20px;
    font-size: 18px;
    line-height: 20px;

    &:disabled {
      cursor: default;
    }
  }

  @media (max-width: 767px) {
    padding: 8px 20px;
    height: 44px;

    &__input {
      font-size: 16px;
    }

    &__minus,
    &__plus {
      font-size: 16px;
    }
  }
}
</style>
