import { ref } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useBody = defineStore('body', () => {
  const isLock = ref(false);

  function lock() {
    isLock.value = true;
  }

  function unlock() {
    isLock.value = false;
  }

  return { isLock, lock, unlock };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBody, import.meta.hot));
}
