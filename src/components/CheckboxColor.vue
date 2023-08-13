<template>
  <label class="checkbox-color">
    <input
      class="checkbox-color__input"
      :type="type"
      :value="value"
      :name="name"
      :checked="value === selected"
      @change="emit('update:selected', $event.target.value)"
    />
    <span class="checkbox-color__switch">
      <img :src="getImage(img)" alt="" />
      <span class="checkbox-color__text">{{ label }}</span>
    </span>
  </label>
</template>

<script setup>
import { getImage } from '@/hooks/img';

defineProps({
  type: {
    type: String,
    default: 'radio'
  },
  value: {
    type: String,
    default: null
  },
  selected: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  img: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['update:selected']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.checkbox-color {
  user-select: none;

  &__input {
    display: none;
  }

  &__switch {
    position: relative;
    margin-top: 3px;
    padding: 4px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e5ed;
    border-radius: 4px;
    cursor: pointer;

    img {
      width: 39px;
      height: 39px;
      border-radius: 4px;
    }
  }

  &__text {
    margin-left: 6px;
    margin-right: 9px;
    font-size: 14px;
    line-height: 1.4;
  }

  &__input:checked ~ &__switch {
    border-color: @color-primary;
  }

  @media (max-width: 767px) {
    &__switch {
      img {
        width: 30px;
        height: 30px;
      }
    }

    &__text {
      margin-left: 5px;
      margin-right: 8px;
      font-size: 13px;
    }
  }
}
</style>
