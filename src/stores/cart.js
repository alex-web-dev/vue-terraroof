import { defineStore, acceptHMRUpdate } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useCart = defineStore('cart', () => {
  const cart = useStorage('cart', []);

  function addItem(id, count = 1) {
    const item = cart.value.find((item) => item.id === id);

    if (item) {
      item.count += count;
    } else {
      cart.value.push({
        id,
        count
      });
    }
  }

  function updateItem(id, value) {
    if (value < 1) {
      removeItem(id);
    } else {
      const item = cart.value.find((cartItem) => cartItem.id === id);
      item.count = value;
    }
  }

  function removeItem(id) {
    const index = cart.value.findIndex((item) => item.id === id);
    cart.value.splice(index, 1);
  }

  function clear() {
    cart.value = [];
  }

  return { cart, addItem, updateItem, removeItem, clear };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot));
}
