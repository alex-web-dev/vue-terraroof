<template>
  <div class="text-content text-dropdown">
    <div class="text-dropdown__main" ref="$text">
      <slot></slot>
    </div>
    <button v-if="showBtn" class="text-dropdown__more" @click="openText">Далее</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { cutText } from '@/hooks/text';

const $text = ref(null);
const initialText = ref(null);
const showBtn = ref(false);

const props = defineProps({
  width: {
    type: Number,
    default: 0
  },
  maxLength: {
    type: Number,
    required: true
  }
});

onMounted(() => {
  if (window.innerWidth > props.width) {
    return;
  }

  initialText.value = $text.value.innerHTML;
  showBtn.value = true;

  $text.value.innerText = cutText($text.value.innerText, props.maxLength);
});

function openText() {
  $text.value.innerHTML = initialText.value;
  showBtn.value = false;
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.text-dropdown {
  &__main {
    display: inline;
  }

  &__more {
    display: inline;
    font-size: 13px;
    text-decoration: underline;
    color: @color-primary;
  }
}
</style>
