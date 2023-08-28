<template>
  <div class="text-content">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.text-content {
  line-height: 1.375;

  &:deep(p),
  &:deep(ul),
  &:deep(ol) {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  &:deep(ul) {
    padding-left: 24px;
    list-style-type: disc;

    li {
      list-style-image: url(../assets/img/icons/ul-marker.svg);
    }
  }

  @media (max-width: 991px) {
    font-size: 15px;

    &:deep(p),
    &:deep(ul),
    &:deep(ol) {
      &:not(:first-child) {
        margin-top: 18px;
      }
    }

    &:deep(ul) {
      padding-left: 22px;
    }
  }

  @media (max-width: 767px) {
    font-size: 14px;

    &:deep(p),
    &:deep(ul),
    &:deep(ol) {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }

    &:deep(ul) {
      padding-left: 20px;
    }
  }
}
</style>
