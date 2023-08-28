<template>
  <img :src="src" :alt="alt" @click="emit('open')" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['open']);
</script>
