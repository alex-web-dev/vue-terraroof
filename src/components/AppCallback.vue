<template>
  <div class="callback main__callback">
    <div class="container">
      <div class="callback__content">
        <div class="callback__info">
          <h2 class="title2 callback__title">Оставьте заявку, и мы свяжемся с&nbsp;Вами!</h2>
        </div>
        <AppForm
          class="callback__form"
          :data="formData"
          :submit-modifiers="submitModifiers"
          @form-submit="formSubmit"
          @focus-field="clearError"
          @update-field="updateField"
          @close-message="formData.isSent = false"
        >
          <template #title>
            <slot name="formTitle"></slot>
          </template>
        </AppForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import AppForm from '@/components/AppForm.vue';
import { formValidate, clearError, clearValues } from '@/hooks/form';

defineProps({
  submitModifiers: {
    type: Array,
    default: null
  }
});

const formData = reactive({
  isSent: false,
  items: [
    {
      element: 'input',
      value: '',
      placeholder: 'Ваше имя',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле имя не может быть пустым' }],
      isError: false
    },
    {
      element: 'input',
      value: '',
      placeholder: 'Город',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле город не может быть пустым' }],
      isError: false
    },
    {
      element: 'input',
      value: '',
      placeholder: 'Телефон',
      type: 'mask',
      mask: '+{7}(000)000-00-00',
      showErrorText: null,
      validation: [
        { type: 'required', errorText: 'Поле телефон не может быть пустым' },
        {
          type: 'mask',
          value: /(?:\+|\d)[\d\-\(\) ]{14,}\d/g,
          errorText: 'Некорректный номер телефона'
        }
      ],
      isError: false
    }
  ]
});

function updateField(index, value) {
  formData.items[index].value = value;
}

function formSubmit() {
  if (formValidate(formData)) {
    clearValues(formData.items);
    formData.isSent = true;
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.callback {
  &__content {
    margin-left: auto;
    margin-right: auto;
    padding: 58px 106px 50px 64px;
    display: flex;
    align-items: flex-start;
    max-width: 1040px;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
  }

  &__info {
    flex: 1 1 auto;
  }

  &__title {
    color: @color-primary;
  }

  &__form {
    flex: 0 0 40%;

    &:not(:first-child) {
      margin-left: 65px;
    }
  }

  @media (max-width: 1240px) {
    &__content {
      padding: 48px 80px 45px 55px;
      max-width: 970px;
    }

    &__form {
      flex-basis: 50%;
    }
  }

  @media (max-width: 991px) {
    &__content {
      padding: 45px 45px 40px 35px;
    }

    &__form {
      flex-basis: 50%;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      padding: 30px 14px 33px;
      flex-direction: column;
      max-width: @content-sm-max-width;
    }

    &__form {
      flex: none;
      width: 100%;

      &:not(:first-child) {
        margin-top: 14px;
        margin-left: 0;
      }
    }
  }
}
</style>
