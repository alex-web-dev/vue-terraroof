<template>
  <section class="callback-bg">
    <div class="container">
      <div
        class="callback-bg__content"
        :class="{ 'callback-bg__content--backdrop': backdrop }"
        :style="`background-image: url(${getImage(bg)})`"
      >
        <div class="callback-bg__main">
          <h2 v-if="slots.title" class="title2 callback-bg__title">
            <slot name="title"></slot>
          </h2>
          <AppForm
            class="callback-bg__form"
            line="row"
            :data="formData"
            :error-absolute="true"
            :submit-modifiers="['border']"
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
  </section>
</template>

<script setup>
import AppForm from '@/components/AppForm.vue';
import { useImage } from '@/hooks/img';
import { useForm } from '@/hooks/form';
import { reactive, useSlots } from 'vue';


const { getImage } = useImage();
const slots = useSlots();

defineProps({
  bg: {
    type: String,
    default: null
  },
  backdrop: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: null
  }
});

const { formValidate, clearValues, clearError } = useForm();
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

.callback-bg {
  &__content {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    &--backdrop {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(@color-primary, 0.3);
      }
    }
  }

  &__main {
    position: relative;
    z-index: 1;
    padding: 72px 120px 80px;
  }

  &__title {
    margin-bottom: 42px;
    color: #fff;
  }

  &__form {
    padding: 40px 80px;
    background: #fff;
    border-radius: 16px;
  }

  @media (max-width: 1240px) {
    &__main {
      padding: 50px 60px 55px;
    }

    &__form {
      padding: 30px 50px;
    }
  }

  @media (max-width: 991px) {
    &__main {
      padding: 35px;
    }

    &__title {
      margin-bottom: 28px;
    }

    &__form {
      padding: 25px;
    }
  }

  @media (max-width: 767px) {
    &__content {
      margin-left: auto;
      margin-right: auto;
      max-width: @content-sm-max-width;
    }

    &__main {
      padding: 30px 14px 33px;
    }

    &__title {
      margin-bottom: 8px;
    }

    &__form {
      padding: 0;
      background-color: transparent;
    }
  }
}
</style>
