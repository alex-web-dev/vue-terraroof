import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useMessages = defineStore('messages', () => {
  const messages = ref([]);

  function getMessages() {
    return messages.value;
  }

  function addMessage(data) {
    const id = getMaxId();
    const delay = data.delay || 3000;

    messages.value.push({
      id,
      type: data.type,
      text: data.text
    });

    setTimeout(() => removeMessage(id), delay);
  }

  function getMaxId() {
    const id = messages.value.reduce((accumulator, message) => {
      return accumulator < message.id ? message.id : accumulator;
    }, 0);

    return id + 1;
  }

  function removeMessage(id) {
    messages.value = messages.value.filter((message) => message.id !== id);
  }

  return { messages, getMessages, addMessage, removeMessage };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMessages, import.meta.hot));
}
