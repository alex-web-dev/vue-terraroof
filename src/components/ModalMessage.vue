<template>
  <AppModal type="message" :open="open" @close="emit('close')">
    <template #main>
      <div class="modal-message">
        <div class="modal-message__icon modal-message__icon--success">
          <img src="@/assets/img/icons/check-white.svg" />
        </div>
        <div class="text modal-message__text">Спасибо! Ваша заявка успешно отправлена!</div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';

defineProps({
  type: {
    type: String,
    default: null
  },
  open: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);
</script>

<style lang="less">
@import '@/assets/less/vars.less';

.modal-message {
  &__icon {
    margin: 0 auto 18px;
    width: 60px;
    height: 60px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    &--error {
      background-color: @color-danger;
    }

    &--success {
      background-color: @color-success;
    }
  }

  &__text {
    font-size: 18px;
    text-align: center;
  }
}
</style>
