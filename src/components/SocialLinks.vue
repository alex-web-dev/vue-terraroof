<template>
  <div class="social-links footer__social-links">
    <div class="social-links__list">
      <a
        class="social-links__link"
        v-for="item in list"
        :href="item.link"
        target="_blank"
        :key="item"
      >
        <img :src="useImage(item.icon)" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useImage } from '@/hooks/img';

defineProps({
  list: {
    type: Array,
    required: true
  }
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.social-links {
  &__list {
    margin: -8px -4px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__link {
    margin: 8px 4px 0;

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }

  @media (max-width: 991px) {
    &__link {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  @media (max-width: 767px) {
    &__list {
      margin: -10px -5px 0;
    }

    &__link {
      margin: 10px 5px 0;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
