<template>
  <form class="modal-form" autocomplete="off" @submit.prevent="emit('formSubmit')">
    <img class="modal-form__logo" src="@/assets/img/logo.png" alt="" />
    <div class="title5 modal-form__title">Оставьте заявку, и мы свяжемся с Вами!</div>
    <div class="modal-form__main">
      <FormField
        class="modal-form__item"
        :data="item"
        v-for="(item, index) in data.items"
        :key="item"
        :model-value="item.value"
        @focus="emit('focusField', item)"
        @update:model-value="emit('updateField', index, $event)"
      />
      <button class="btn btn--border modal-form__btn">Отправить</button>
      <div class="modal-form__privacy">
        Нажимая кнопку “Отправить”, вы соглашаетесь на обработку
        <a href="#">персональных данных</a>
      </div>
    </div>
    <Teleport to="body">
      <Transition name="fade">
        <ModalMessage :open="data.isSent" type="message" @close="emit('closeMessage')" />
      </Transition>
    </Teleport>
  </form>
</template>

<script setup>
import FormField from '@/components/FormField.vue';
import ModalMessage from '@/components/ModalMessage.vue';

defineProps({
  data: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['formSubmit', 'focusField', 'updateField', 'closeMessage']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.modal-form {
  &__logo {
    margin: 0 auto 18px;
    max-width: 99px;
    display: block;
  }

  &__title {
    margin-bottom: 41px;
    text-align: center;
  }

  &__item {
    &:not(:first-child) {
      margin-top: 18px;
    }
  }

  &__input {
    width: 100%;
  }

  &__btn {
    margin-top: 32px;
    width: 100%;
  }

  &__privacy {
    margin-top: 8px;
    max-width: 274px;
    font-size: 12px;
    line-height: 1.33;

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 767px) {
    &__title {
      margin-bottom: 24px;
    }

    &__item {
      &:not(:first-child) {
        margin-top: 12px;
      }
    }

    &__btn {
      margin-top: 18px;
    }
  }
}
</style>
