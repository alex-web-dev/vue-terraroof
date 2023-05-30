<template>
  <div class="tags">
    <div class="tags__list" :class="{ 'tags__list--jc-end': listPosition === 'end' }">
      <AppTag
        class="tags__item"
        :type="tag.type"
        :text="tag.text"
        size="sm-small"
        v-for="tag in list"
        :key="tag"
      />
    </div>
  </div>
</template>

<script setup>
import AppTag from '@/components/AppTag.vue';

defineProps({
  listPosition: {
    type: String,
    default: null
  },
  list: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.tags {
  &__list {
    margin: -12px -6px 0;
    display: flex;
    flex-wrap: wrap;

    &--jc-end {
      justify-content: flex-end;
    }
  }

  &__item {
    margin: 12px 6px 0;
  }
}
</style>
