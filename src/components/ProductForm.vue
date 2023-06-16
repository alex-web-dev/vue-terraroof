<template>
  <form class="product-form__form" autocomplete="off" @submit.prevent="addToCart(info.id, count)">
    <h1 class="title4 product-form__title">{{ info.name }}</h1>
    <div class="product-form__meta">
      <div class="product-form__meta-list">
        <div v-if="info.recommendPercent" class="product-form__recommend product-form__meta-item">
          рекомендуют {{ info.recommendPercent }}%
        </div>
        <div v-if="info.ordersCount" class="product-form__order-count product-form__meta-item">
          Товар заказывали {{ info.ordersCount }} раз
        </div>
      </div>
    </div>
    <div class="text product-form__text">
      <p>{{ info.text }}</p>
    </div>
    <div class="product-form__colors">
      <div class="product-form__label">Выберите цвет:</div>
      <div class="product-form__colors-list">
        <CheckboxColor
          class="product-form__colors-item"
          v-for="color in colors.list"
          :key="color"
          name="product-color"
          :value="color.value"
          :selected="colors.selected"
          @update:selected="emit('changeColor', color.value)"
          :label="color.name"
          :img="color.preview"
        />
      </div>
    </div>
    <div class="product-form__delivery">
      <div class="product-form__delivery-info">
        <div class="text product-form__delivery-text">Бесплатная доставка по Казахстану</div>
        <div class="text text--gray product-form__delivery-text">
          Предварительная дата доставки: 23 ноября
        </div>
      </div>
    </div>
    <div class="product-form__buy">
      <div class="product-form__price">
        <span v-if="info.priceOld" class="product-form__price-old">
          <span class="product-form__price-old-value">{{ info.priceOld * count }}</span>
        </span>
        <span class="product-form__price-new">
          <span class="product-form__price-new-value">{{ info.price * count }}</span>
          тг
        </span>
      </div>
      <div class="product-form__buy-footer">
        <AppCounter class="product-form__counter" :value="count" @update:value="count = $event" />
        <input type="hidden" :value="info.id" />
        <button class="btn product-form__buy-btn">Добавить в корзину</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import CheckboxColor from '@/components/CheckboxColor.vue';
import AppCounter from '@/components/AppCounter.vue';
import { useCart } from '@/stores/cart';
import { useMessages } from '@/stores/messages';
import { ref } from 'vue';

const storeCart = useCart();
const storeMessages = useMessages();
const emit = defineEmits(['changeColor']);
defineProps({
  info: {
    type: Object,
    required: true
  },
  colors: {
    type: Object,
    default: null
  }
});
const count = ref(1);

function addToCart(id, count) {
  storeCart.addItem(id, count);
  storeMessages.addMessage({
    type: 'success',
    text: 'Товар добавлен в корзину'
  });
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
@import '@/assets/less/mixins.less';

.product-form {
  &__title {
    font-weight: 700;
  }

  &__meta {
    margin-top: 18px;

    &-list {
      margin: -16px -12px 0;
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      margin: 16px 12px 0;
    }
  }

  &__recommend {
    padding: 4px 8px;
    background-color: @color-primary;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    color: #fff;
  }

  &__order-count {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: @color-gray;

    &:before {
      margin-right: 8px;
      .pseudo-icon('../img/icons/pay-card.svg', 20px, 15px);
    }
  }

  &__text {
    margin-top: 24px;
    line-height: 1.4;
  }

  &__label {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }

  &__colors {
    margin-top: 24px;

    &-list {
      margin: -12px -6px 0;
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      margin: 12px 6px 0;
    }
  }

  &__delivery {
    margin-top: 24px;
    padding: 21px 17px 17px 29px;
    display: flex;
    align-items: flex-start;
    border: 1px solid #e0e5ed;
    border-radius: 4px;

    &:before {
      margin-top: 4px;
      margin-right: 8px;
      flex: 0 0 auto;
      .pseudo-icon('../img/icons/delivery.svg', 21px, 14px);
    }

    &-text {
      line-height: 1.4;

      &:not(:first-child) {
        margin-top: 2px;
      }
    }
  }

  &__buy {
    margin-top: 32px;

    &-footer {
      margin-top: 32px;
      display: flex;
    }

    &-btn {
      flex: 1 1 auto;
      font-size: 18px;

      &:not(:first-child) {
        margin-left: 18px;
      }
    }
  }

  &__count-checkboxes {
    margin: -10px -5px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__count-checkbox {
    margin: 10px 5px 0;
  }

  &__price {
    margin-top: 32px;
    font-size: 18px;
    font-weight: 600;

    &-old {
      margin-right: 24px;
      color: @color-gray;
      text-decoration: line-through;
    }
  }

  &__counter {
    flex: 0 0 auto;
  }

  @media (max-width: 1240px) {
    &__buy {
      margin-top: 24px;

      &-footer {
        margin-top: 24px;
      }
    }

    &__price {
      margin-top: 24px;
    }
  }

  @media (max-width: 991px) {
    &__buy {
      &-footer {
        align-items: flex-start;
        flex-direction: column;
      }

      &-btn {
        margin-top: 18px;
        width: 100%;

        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .product-form {
      &__meta {
        margin-top: 12px;
      }

      &__text {
        margin-top: 18px;
      }

      &__label {
        margin-bottom: 9px;
        font-size: 17px;
      }

      &__colors {
        margin-top: 18px;
      }

      &__delivery {
        margin-top: 18px;
        padding: 15px 12px 14px 20px;
      }

      &__buy {
        margin-top: 20px;

        &-footer {
          margin-top: 20px;
          flex-direction: column;
          align-items: flex-start;
        }

        &-btn {
          margin-top: 18px;
          width: 100%;

          &:not(:first-child) {
            margin-left: 0;
          }
        }
      }

      &__price {
        margin-top: 20px;
        font-size: 17px;

        &-old {
          margin-right: 20px;
        }
      }
    }

    @media (max-width: 767px) {
      &__title {
        margin-bottom: 12px;
        font-size: 24px;
      }

      &__images {
        margin-right: 0;
        flex: none;
      }

      &__meta {
        margin-top: 16px;

        &-list {
          margin: -12px -8px 0;
        }

        &-item {
          margin: 12px 8px 0;
        }
      }

      &__recommend {
        font-size: 13px;
      }

      &__order-count {
        font-size: 13px;

        &:before {
          margin-right: 6px;
          width: 18px;
          height: 14px;
        }
      }

      &__text {
        margin-top: 16px;
      }

      &__label {
        margin-bottom: 8px;
        font-size: 16px;
      }

      &__colors {
        margin-top: 16px;

        &-list {
          margin: -8px -4px 0;
        }

        &-item {
          margin: 8px 4px 0;
        }
      }

      &__delivery {
        margin-top: 16px;
      }

      &__buy {
        margin-top: 16px;

        &-btn {
          font-size: 16px;
        }

        &-footer {
          margin-top: 16px;
        }
      }

      &__price {
        margin-top: 16px;
        font-size: 16px;

        &-old {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
