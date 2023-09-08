<template>
  <div class="tag" :class="{ 'tag--sm-small': size === 'sm-small' }">
    <img
      class="tag__icon"
      :class="{ 'tag__icon--sm-small': size === 'sm-small' }"
      :src="getImage(selectedTag.icon)"
      alt=""
    />
    <span class="tag__text">{{ text }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useImage } from '@/hooks/img';

const { getImage } = useImage();
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: null
  }
});

const tagsList = ref([
  {
    type: 'sale',
    icon: 'icons/sale.svg'
  },
  {
    type: 'hit',
    icon: 'icons/tag.svg'
  }
]);
const selectedTag = computed(() => tagsList.value.find((tag) => tag.type === props.type));
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.tag {
  padding: 9px 15px 9px 18px;
  display: flex;
  align-items: center;
  background-color: @color-second;
  border-radius: 6px;

  &__icon {
    margin-right: 6px;
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  &__text {
    font-size: 20px;
    line-height: 1;
    color: #fff;
  }

  @media (max-width: 1240px) {
    &__text {
      font-size: 18px;
    }
  }

  @media (max-width: 991px) {
    &__text {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 6px;
    padding-bottom: 6px;

    &__icon {
      &--sm-small {
        width: 17px;
        height: 17px;
      }
    }

    &__text {
      font-size: 14px;
    }

    &--sm-small {
      padding-left: 11px;
      padding-right: 11px;
    }
  }
}
</style>
