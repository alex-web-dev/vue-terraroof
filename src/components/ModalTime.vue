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
import { formValidate, clearError, clearValues } from '@/hooks/form';
import { ref } from 'vue';

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
      placeholder: 'Дата',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле дата не может быть пустым' }],
      isError: false
    },
    {
      element: 'select',
      value: '',
      type: 'text',
      showErrorText: null,
      validation: [{ type: 'required', errorText: 'Поле время не может быть пустым' }],
      isError: false,
      options: [
        { value: '', label: 'Время' },
        { value: '8', label: '8:00' },
        { value: '9', label: '9:00' },
        { value: '10', label: '10:00' },
        { value: '11', label: '11:00' },
        { value: '12', label: '12:00' },
        { value: '13', label: '13:00' },
        { value: '14', label: '14:00' },
        { value: '15', label: '15:00' },
        { value: '16', label: '16:00' },
        { value: '17', label: '17:00' },
        { value: '18', label: '18:00' },
        { value: '19', label: '19:00' },
        { value: '20', label: '20:00' }
      ]
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
