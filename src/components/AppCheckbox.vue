<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      :type="type"
      :checked="checked"
      @change="emit('update:checked', $event.target.checked)"
    />
    <span class="checkbox__switch"></span>
    <span v-if="text" class="checkbox__text">{{ text }}</span>
  </label>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'checkbox'
  },
  checked: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:checked']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.checkbox {
  display: flex;
  align-items: flex-start;
  user-select: none;

  &__input {
    display: none;
  }

  &__switch {
    margin-top: 3px;
    position: relative;
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e5ed;
    border-radius: 2px;
    cursor: pointer;

    &:before {
      content: '';
      .pseudo-icon('../img/icons/check-white.svg', 11px, 9px);
      display: none;
    }
  }

  &__input:checked ~ &__switch {
    background: @color-primary;
    border-color: @color-primary;

    &:before {
      display: block;
    }
  }

  &__text {
    margin-left: 8px;
    font-size: 18px;
    line-height: 1.5;
    user-select: none;
  }

  @media (max-width: 1240px) {
    &__text {
      font-size: 16px;
    }
  }
}
</style>
