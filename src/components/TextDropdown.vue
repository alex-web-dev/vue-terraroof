<template>
  <div class="text-dropdown">
    <TextContent class="text-dropdown__content">
      <div class="text-dropdown__main" ref="$text">
        <slot></slot>
      </div>
    </TextContent>
    <button v-if="showBtn" class="text-dropdown__more" @click="openText">Далее</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useText } from '@/hooks/text';
import TextContent from '@/components/TextContent.vue';

const { cutText } = useText();
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
  &__content {
    display: inline;
  }

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
