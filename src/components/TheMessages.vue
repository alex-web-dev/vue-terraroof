<template>
  <Transition name="fade-left">
    <div v-if="storeMessages.getMessages().length !== 0" class="messages">
      <TransitionGroup name="fade-left">
        <AppMessage
          class="messages__item"
          :message="message"
          v-for="message in storeMessages.getMessages()"
          :key="message.id"
        />
      </TransitionGroup>
    </div>
  </Transition>
</template>

<script setup>
import AppMessage from '@/components/AppMessage.vue';
import { useMessages } from '@/stores/messages';

const storeMessages = useMessages();
</script>

<style lang="less" scoped>
.messages {
  position: fixed;
  bottom: 20px;
  left: 0;
  padding: 0 20px;
  z-index: 20;
  max-height: 160px;
  overflow: hidden;

  &__item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  @media (max-width: 767px) {
    bottom: 12px;
    padding: 0 12px;
    max-height: 124px;

    &__item {
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }
}
</style>
