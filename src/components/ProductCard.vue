<template>
  <div class="product-card" :class="{ 'product-card--preview': type === 'preview' }">
    <RouterLink
      class="product-card__img-box product-card__img-box--large"
      :to="{ name: 'product', params: { id: data.id } }"
    >
      <img class="product-card__img" :src="useImage(data.img)" alt="" />
      <AppTags class="product-card__tags" v-if="data.tags" list-position="end" :list="data.tags" />
    </RouterLink>
    <div class="product-card__info product-card__info--large">
      <h3 class="title5 product-card__name">
        <RouterLink :to="{ name: 'product', params: { id: data.id } }">{{ data.name }}</RouterLink>
      </h3>
      <div class="product-card__meta">
        <div class="text text--gray product-card__status">{{ available }}</div>
        <img class="product-card__logo" :src="useImage(data.companyImg)" alt="" />
      </div>
      <p class="text text--gray product-card__text">{{ data.text }}</p>
      <div class="product-card__price">
        <span class="product-card__price-old" v-if="data.priceOld">
          <span class="product-card__price-old-value">{{ data.priceOld }}</span>
        </span>
        <span class="product-card__price-new">
          <span class="product-card__price-new-value">{{ data.price }}</span>
          тг
        </span>
      </div>
      <RouterLink
        class="btn btn--border product-card__btn"
        :to="{ name: 'product', params: { id: data.id } }"
        >Заказать
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useImage } from '@/hooks/img';
import AppTags from '@/components/AppTags.vue';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: null
  },
  data: {
    type: Object,
    required: true
  }
});

const available = computed(() => {
  return props.data.available ? 'В наличии' : 'Нет в наличии';
});
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #ffffff;
  overflow: hidden;
  border: 1px solid #e0e5ed;

  &__img-box {
    position: relative;
    padding-top: min(83%, 253px);
    display: block;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__tags {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }

  &__info {
    padding: 14px 14px 19px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  &__name {
    max-width: 290px;
  }

  &__text {
    margin: 12px 0;
    max-width: 290px;
  }

  &__meta {
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    margin-left: 10px;
    flex: 0 0 auto;
    max-width: 77px;
    max-height: 22px;
    object-fit: contain;
  }

  &__colors {
    margin-top: 8px;
    margin-bottom: 18px;

    &-list {
      margin: -8px -4px 0;
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      margin: 8px 4px 0;
    }
  }

  &__price {
    margin-top: auto;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.39;

    &-old {
      margin-right: 12px;
      color: @color-gray;
      text-decoration: line-through;
    }
  }

  &__btn {
    margin-top: 24px;
    width: 100%;

    &--mt-32 {
      margin-top: 32px;
    }
  }

  &--preview {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border: none;
  }

  &--preview &__img-box {
    padding-top: min(68.5%, 284px);
  }

  &--preview &__info {
    padding: 18px 24px 39px;
  }

  @media (max-width: 1240px) {
    &__info {
      padding: 14px 20px 32px;
    }

    &__price {
      font-size: 17px;
    }

    &__btn {
      margin-top: 18px;

      &--mt-32 {
        margin-top: 28px;
      }
    }

    &--preview &__info {
      padding: 14px 20px 32px;
    }
  }

  @media (max-width: 767px) {
    &__img-box {
      padding-top: min(68.5%, 230px);
    }

    &__tags {
      right: 8px;
      bottom: 8px;
    }

    &__info {
      padding: 14px 14px 21px;
    }

    &__logo {
      max-width: 64px;
      max-height: 18px;
    }

    &__meta {
      margin-bottom: 0;
    }

    &__text {
      display: none;
    }

    &__price {
      margin-top: 10px;
      font-size: 16px;
    }

    &__btn {
      margin-top: 16px;

      &--mt-32 {
        margin-top: 20px;
      }
    }

    &--preview &__info {
      padding: 14px 14px 21px;
    }
  }
}
</style>
