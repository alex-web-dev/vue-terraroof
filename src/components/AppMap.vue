<template>
  <div class="map">
    <div class="map__marks">
      <div class="map__mark" v-for="mark in marks" :key="mark">
        <img src="@/assets/img/icons/mark.svg" alt="" />
        <span>{{ mark }}</span>
      </div>
    </div>
    <img class="map__bg" src="@/assets/img/map.png" alt="" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const marks = reactive([
  'Уральск',
  'Актау',
  'Атырау',
  'Актобе',
  'Кызылорда',
  'Костанай',
  'Туркестан',
  'Шымкент',
  'Петропавловск',
  'Кокшетау',
  'Астана',
  'Тараз',
  'Павлодар',
  'Караганда',
  'Семей',
  'Усть-Каменогорск',
  'Талдыкорган',
  'Алматы',
]);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.map {
  position: relative;

  &__mark {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    color: #fff;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      border-radius: 50%;
      animation: pulse-mark 1.5s infinite;
    }

    span {
      margin-left: 8px;
    }

    &:nth-child(1) {
      left: 9.2%;
      top: 36%;
    }

    &:nth-child(2) {
      left: 12.6%;
      top: 73.8%;
    }

    &:nth-child(3) {
      left: 13.7%;
      top: 54.8%;
    }

    &:nth-child(4) {
      left: 25.5%;
      top: 43.2%;
    }

    &:nth-child(5) {
      left: 38.2%;
      bottom: 21.9%;
      font-size: 20px;

      img {
        width: 20px;
      }
    }

    &:nth-child(6) {
      left: 39.4%;
      top: 25.2%;
    }

    &:nth-child(7) {
      left: 50.7%;
      top: 82%;
      flex-direction: column;

      img {
        transform: translateX(6px);
      }
    }

    &:nth-child(8) {
      right: 42.3%;
      top: 90.8%;
      flex-direction: row-reverse;

      span {
        margin-left: 0;
        margin-right: 4px;
      }
    }

    &:nth-child(9) {
      left: 49%;
      top: 11.2%;
      flex-direction: column;

      img {
        transform: translate(4px, -3px);
      }
    }

    &:nth-child(10) {
      right: 37.7%;
      top: 21%;
    }

    &:nth-child(11) {
      right: 38.1%;
      top: 33%;
      flex-direction: row-reverse;

      span {
        margin-left: 0;
        margin-right: 8px;
      }
    }

    &:nth-child(12) {
      right: 34.5%;
      bottom: 13.5%;
    }

    &:nth-child(13) {
      right: 21.7%;
      top: 29.8%;
    }

    &:nth-child(14) {
      right: 28%;
      top: 45.4%;
    }

    &:nth-child(15) {
      right: 12.7%;
      top: 40.8%;
    }

    &:nth-child(16) {
      right: 4.7%;
      top: 47.4%;
    }

    &:nth-child(17) {
      right: 15.6%;
      bottom: 26%;
      flex-direction: column;

      img {
        transform: translate(5px, -3px);
      }
    }

    &:nth-child(18) {
      right: 17.9%;
      bottom: 18.6%;
    }

    &--show {
      z-index: 2;

      img {
        visibility: visible;
        opacity: 1;
      }

      span {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1320px) {
    &__mark {
      &:nth-child(1) {
        left: calc(50vw - 42.4%);
      }

      &:nth-child(2) {
        left: calc(50vw - 38.8%);
      }

      &:nth-child(3) {
        left: calc(50vw - 38%);
      }

      &:nth-child(4) {
        left: calc(50vw - 26.2%);
      }

      &:nth-child(5) {
        left: calc(50vw - 13.5%);
      }

      &:nth-child(6) {
        left: calc(50vw - 16%);
        top: 21%;
      }

      &:nth-child(7) {
        left: calc(50vw + 5% - 70px);
      }

      &:nth-child(9) {
        left: calc(49vw - 1.6%);
      }

      &:nth-child(10) {
        right: unset;
        left: calc(50vw + 2.5%);
      }

      &:nth-child(11) {
        right: unset;
        left: calc(50vw + 8.1% - 70px);
      }

      &:nth-child(12) {
        right: unset;
        left: calc(50vw + 8.2%);
      }

      &:nth-child(13) {
        right: unset;
        left: calc(50vw + 18.3%);
      }

      &:nth-child(14) {
        right: unset;
        left: calc(42vw + 20%);
      }

      &:nth-child(15) {
        right: unset;
        left: calc(50vw + 29.6%);
      }

      &:nth-child(16) {
        right: unset;
        left: calc(50vw + 30.7%);
      }

      &:nth-child(17) {
        right: unset;
        left: calc(50vw + 23.7%);

        span {
          margin-left: 0;
        }
      }

      &:nth-child(18) {
        right: unset;
        left: calc(50vw + 23%);
      }
    }
  }

  @media (max-width: 1140px) {
    &__mark {
      font-size: 15px;

      img {
        width: 14px;
      }

      span {
        margin-left: 7px;
        text-shadow: 1px 1px 1px rgb(33, 33, 33, 0.5);
      }

      &:nth-child(5) {
        font-size: 18px;

        img {
          width: 16px;
        }
      }

      &:nth-child(8) {
        span {
          margin-right: 7px;
        }
      }

      &--active {
        img {
          width: 22px;
          height: 22px;
        }
      }
    }
  }

  @media (max-width: 991px) {
    &__mark {
      font-size: 15px;

      img {
        width: 12px;
      }

      span {
        margin-left: 6px;
      }

      &:nth-child(11) {
        span {
          margin-right: 6px;
        }
      }

      &:nth-child(8) {
        span {
          margin-right: 6px;
        }
      }

      &--active {
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    &__mark {
      font-size: 12px;

      img {
        width: 14px;
        height: 14px;
      }

      span {
        margin-left: 3px;
      }

      &:nth-child(5) {
        font-size: 14px;
      }

      &:nth-child(7) {
        left: calc(50vw + 7.5% - 62px);
        top: 80%;
      }

      &:nth-child(8) {
        margin-right: 5px;
        right: 41%;
        top: 88.8%;
      }

      &:nth-child(9) {
        left: calc(49vw - 9%);
        top: 8%;
      }

      &:nth-child(11) {
        left: calc(50vw + 8.1% - 55px);

        span {
          margin-right: 5px;
        }
      }

      &:nth-child(16) {
        left: calc(50vw + 28%);
      }

      &:nth-child(17) {
        span {
          transform: translateX(0);
        }
      }
    }
  }

  @media (max-width: 480px) {
    &__mark {
      font-size: 10px;

      &:nth-child(5) {
        left: calc(50vw - 15%);
        font-size: 12px;
      }

      &:nth-child(7) {
        left: calc(50vw + 7.5% - 50px);
        top: 77%;
      }

      &:nth-child(17) {
        left: calc(50vw + 20%);
      }
    }
  }
}
</style>
