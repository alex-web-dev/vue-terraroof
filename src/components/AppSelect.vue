<template>
  <div class="select" tabindex="1" @focus="emit('focus')">
    <select class="select__input" v-model="selectedValue">
      <option v-for="item in list" :value="item.value" :key="item">{{ item.label }}</option>
    </select>
    <div class="select__field" @click="isOpen = !isOpen">{{ selectedLabel }}</div>
    <div v-show="isOpen" class="select__list">
      <div
        v-for="item in list"
        class="select__item"
        :class="{ 'select__item--placeholder': item.value === '' }"
        @click="select(item)"
        :key="item"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
const props = defineProps({
  value: {
    type: String
  },
  list: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['change', 'focus']);
const selectedValue = ref(props.value);
const isOpen = ref(false);
const selectedLabel = computed(() => {
  return props.list.find((item) => item.value === props.value)?.label;
});

watch(selectedValue, (value) => emit('change', value));

function select(item) {
  selectedValue.value = item.value;
  isOpen.value = false;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.select {
  position: relative;
  user-select: none;

  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    right: 16px;
    top: calc(50%);
    transform: translateY(-50%);
    .pseudo-icon('../img/icons/down.svg', 17px, 8px);
    pointer-events: none;
  }

  &__input {
    display: none;
  }

  &__field {
    position: relative;
    padding: 15px 35px 15px 18px;
    width: 100%;
    background: #f8f8f8;
    border: 1px solid #e0e5ed;
    border-radius: 6px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: @color-gray;
    cursor: pointer;

    option[value=''][disabled] {
      display: none;
    }
  }

  &__list {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 100;
    width: 100%;
    background: #fff;
    border: 1px solid #e0e5ed;
    max-height: 170px;
    overflow-y: auto;
  }

  &__item {
    padding: 10px 16px;
    font-size: 15px;
    line-height: 1.2;
    transition: background 0.3s;
    cursor: pointer;

    &--placeholder {
      display: none;
    }

    &:hover {
      background-color: #f2f2f2;
    }
  }
}
</style>
