<template>
  <div class="cart-item cart__item">
    <RouterLink class="cart-item__img" :to="{ name: 'product', params: { id: data.id } }">
      <img :src="getImage(data.img)" alt="" />
    </RouterLink>
    <div class="cart-item__info">
      <h2 class="title5 cart-item__title">
        <RouterLink :to="{ name: 'product', params: { id: data.id } }">{{ data.name }}</RouterLink>
      </h2>
      <p class="text cart-item__text">{{ data.text }}</p>
    </div>
    <div class="cart-item__count">
      <AppCounter
        class="cart-item__counter"
        size="high"
        :value="data.count"
        @update:value="emit('updateCount', $event)"
        :only-positive="false"
      />
      <div class="cart-item__price-one">{{ data.price }} ₸/шт.</div>
    </div>
    <div class="cart-item__right">
      <div class="cart-item__price">{{ data.price * data.count }} ₸</div>
      <button class="cart-item__delete" @click="emit('remove')">Удалить</button>
    </div>
  </div>
</template>

<script setup>
import AppCounter from '@/components/AppCounter.vue';
import { useImage } from '@/hooks/img';

const { getImage } = useImage();
defineProps({
  data: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['updateCount', 'remove']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.cart-item {
  padding: 24px 0;
  display: flex;

  &__img {
    flex: 0 0 auto;
    width: 285px;
    height: 221px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    margin: 16px 16px 0 22px;
  }

  &__text {
    margin-top: 16px;
    color: @color-gray;
  }

  &__count {
    margin: 12px auto 0;
  }

  &__right {
    margin-top: 16px;
    margin-left: 35px;
    flex: 0 0 125px;
    text-align: right;
  }

  &__price {
    font-size: 20px;
    font-weight: 700;

    &-one {
      margin-top: 10px;
      color: @color-gray;
    }
  }

  &__delete {
    margin-top: 120px;
    line-height: 1.5;
    color: @color-gray;
  }

  @media (max-width: 1240px) {
    &__img {
      width: 250px;
      height: 200px;
    }

    &__right {
      margin-left: 16px;
    }
  }

  @media (max-width: 991px) {
    &__img {
      width: 200px;
      height: 155px;
    }

    &__info {
      margin-top: 8px;
      margin-left: 16px;
    }

    &__text {
      margin-top: 8px;
    }

    &__counter {
      padding-left: 15px;
      padding-right: 15px;
      height: 45px;
    }

    &__right {
      margin-left: 12px;
      flex: 0 0 112px;
    }

    &__price {
      font-size: 18px;
    }

    &__delete {
      margin-top: 80px;
    }
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    flex-wrap: wrap;

    &__img {
      width: 200px;
      height: 155px;
    }

    &__info {
      margin-top: 12px;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }

    &__count {
      margin-top: 20px;
      margin-left: 0;
    }

    &__right {
      margin-top: 30px;
    }

    &__price {
      font-size: 18px;

      &-one {
        margin-top: 7px;
        font-size: 14px;
      }
    }

    &__delete {
      margin-top: 20px;
      font-size: 14px;
    }
  }
}
</style>
