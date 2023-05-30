import { ref, computed } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useModals = defineStore('modals', () => {
  const modals = ref([
    {
      name: 'callback',
      isOpen: false
    },
    {
      name: 'time',
      isOpen: false
    }
  ]);

  const someOpen = computed(() => {
    if (modals.value.find((modal) => modal.isOpen)) {
      return true;
    }

    return false;
  });

  function getStatus(name) {
    const modal = modals.value.find((modal) => modal.name === name);
    return modal.isOpen;
  }

  function open(name) {
    const modal = modals.value.find((modal) => modal.name === name);
    modal.isOpen = true;
  }

  function close(name) {
    const modal = modals.value.find((modal) => modal.name === name);
    modal.isOpen = false;
  }

  return { modals, someOpen, getStatus, open, close };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModals, import.meta.hot));
}
