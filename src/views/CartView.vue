<template>
  <AppMain>
    <AppCart :items="storeCart.cart" @update-count="updateCartItem" @remove-item="removeCartItem" />
    <CartData v-if="storeCart.cart.length !== 0" @form-send="sendForm" />
    <Teleport to="body">
      <Transition name="fade">
        <ModalMessage :open="formSent" type="message" @close="closeMessage" />
      </Transition>
    </Teleport>
  </AppMain>
</template>

<script setup>
import AppCart from '@/components/AppCart.vue';
import CartData from '@/components/CartData.vue';
import ModalMessage from '@/components/ModalMessage.vue';
import AppMain from '@/components/AppMain.vue';
import { useCart } from '@/stores/cart';
import { useMessages } from '@/stores/messages';
import { ref } from 'vue';

const storeCart = useCart();
const storeMessages = useMessages();
const formSent = ref(false);

function updateCartItem(id, value) {
  storeCart.updateItem(id, value);

  if (value < 1) {
    storeMessages.addMessage({
      type: 'error',
      text: 'Товар удален из корзины'
    });
  }
}

function removeCartItem(id) {
  storeCart.removeItem(id);
  storeMessages.addMessage({
    type: 'error',
    text: 'Товар удален из корзины'
  });
}

function sendForm() {
  storeCart.clear();
  formSent.value = true;
}

function closeMessage() {
  formSent.value = false;
}
</script>

<style lang="less" scoped></style>
