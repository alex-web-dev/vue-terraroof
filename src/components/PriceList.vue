<template>
  <section class="price-list">
    <div class="container">
      <div class="price-list__content">
        <div class="price-list__contacts">
          <ContactItem class="price-list__contact" title="Узнайте актуальные цены">
            <template #footer>
              <RouterLink class="btn btn--border price-list__contact-btn" to="#"
                >Скачать прайс</RouterLink
              >
            </template>
          </ContactItem>
          <ContactItem
            class="price-list__contact"
            icon="icons/location.svg"
            subtitle="Центральный штаб"
            value="г. Астана, ул. Керей, Жанибек хандар, 30"
          />
          <ContactItem
            class="price-list__contact"
            icon="icons/message.svg"
            subtitle="Почта:"
            email="info@terraroof.kz"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactItem from '@/components/ContactItem.vue';
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.price-list {
  &__title {
    text-align: left;
  }

  &__info {
    flex: 0 1 310px;
    padding-right: 10px;
  }

  &__text {
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.39;
  }

  &__contacts {
    margin: -21px -10.5px 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__contact {
    margin: 21px 10.5px 0;
    width: calc(100% / 3 - 21px);

    &-btn {
      margin-top: 42px;
      max-width: 100%;
      width: 270px;
    }
  }

  @media (max-width: 1240px) {
    &__info {
      flex-basis: 295px;
    }

    &__text {
      font-size: 17px;
    }

    &__contact {
      &-btn {
        margin-top: 35px;
        width: 250px;
      }
    }
  }

  @media (max-width: 991px) {
    &__info {
      flex-basis: 265px;
    }

    &__text {
      font-size: 15px;
    }

    &__contacts {
      flex: 0 0 66.17%;
      margin: -15px -7.5px 0;
      display: flex;
      flex-wrap: wrap;
    }

    &__contact {
      margin: 15px 7.5px 0;
      width: calc(50% - 15px);

      &-btn {
        margin-top: 24px;
        width: 230px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 9px;

    &__content {
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      max-width: @content-sm-max-width;
    }

    &__info {
      padding-right: 0;
      flex: none;
    }

    &__text {
      margin-top: 8px;
      font-size: 14px;
    }

    &__contacts {
      padding-top: 37px;
      flex-basis: 100%;
    }

    &__contact {
      width: calc(100% - 15px);
      min-height: 146px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-btn {
        margin-top: 18px;
        width: 268px;
      }
    }
  }
}
</style>
