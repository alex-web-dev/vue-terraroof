<template>
  <AppModal :open="open" @close="emit('close')">
    <template #main>
      <ModalForm
        class="modal__form"
        :data="formData"
        @form-submit="formSubmit"
        @focus-field="clearError"
        @update-field="updateField"
        @close-message="formData.isSent = false"
      />
    </template>
  </AppModal>
</template>

<script setup>
import ModalForm from '@/components/ModalForm.vue';
import AppModal from '@/components/AppModal.vue';
import { reactive } from 'vue';
import { formValidate, clearError, clearValues } from '@/hooks/form';

const emit = defineEmits(['close']);
defineProps({
  open: {
    type: Boolean,
    default: false
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
