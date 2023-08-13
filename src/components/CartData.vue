<template>
  <div class="data-section">
    <div class="container">
      <div class="data-section__content">
        <AppForm
          class="data-section__form"
          :data="formData"
          :title-center="true"
          submit-text="Продолжить"
          :show-modal="false"
          @form-submit="formSubmit"
          @focus-field="clearError"
          @update-field="updateField"
          @close-message="formData.isSent = false"
        >
          <template #title>Данные получателя</template>
        </AppForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import AppForm from '@/components/AppForm.vue';
import { formValidate, clearError, clearValues } from '@/hooks/form';

const emit = defineEmits('formSend');
const formData = reactive({
  isSent: false,
  items: [
    {
      element: 'input',
      value: '',
      label: 'Город',
      id: 'cart-form-city',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле город не может быть пустым' }],
      isError: false
    },
    {
      element: 'input',
      value: '',
      label: 'Улица, дом',
      id: 'cart-form-street',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле имя не может быть пустым' }],
      isError: false
    },
    {
      element: 'input',
      value: '',
      label: 'Квартира',
      id: 'cart-form-flat',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле имя не может быть пустым' }],
      isError: false
    },
    {
      element: 'input',
      value: '',
      label: 'Телефон',
      id: 'cart-form-phone',
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
    emit('formSend', formData);
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';

.data-section {
  padding-top: 70px;

  &__content {
    margin-left: auto;
    margin-right: auto;
    padding: 52px 30px 60px;
    max-width: 630px;
    background: #ffffff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
  }

  &__form {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
  }

  @media (max-width: 991px) {
    padding-top: 60px;

    &__content {
      padding: 42px 24px 50px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 50px;

    &__content {
      padding: 32px 16px 40px;
      max-width: @content-sm-max-width;
    }
  }
}
</style>
