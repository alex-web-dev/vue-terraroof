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
import { ref } from 'vue';
import { formValidate, clearError, clearValues } from '@/hooks/form';

const emit = defineEmits(['close']);
defineProps({
  open: {
    type: Boolean,
    default: false
  }
});

const formData = ref({
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
      type: 'text',
      showErrorText: null,
      validation: [
        { type: 'required', errorText: 'Поле телефон не может быть пустым' },
        {
          type: 'mask',
          value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
          errorText: 'Некорректный номер телефона'
        }
      ],
      isError: false
    }
  ]
});

function updateField(index, value) {
  formData.value.items[index].value = value;
}

function formSubmit() {
  if (formValidate(formData.value)) {
    clearValues(formData.value.items);
    formData.value.isSent = true;
  }
}
</script>
