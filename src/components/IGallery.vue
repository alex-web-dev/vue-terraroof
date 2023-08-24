<template>
    <div class="igallery">
        <slot></slot>
    </div>
    <Teleport to="body">
        <Transition name="fade">
            <IGalleryModal v-show="active" :active="active" :images="images" :initial="initial" @close="emit('close')" />
        </Transition>
    </Teleport>
</template>

<script setup>
import IGalleryModal from '@/components/IGalleryModal.vue';
defineProps({
    images: {
        type: Array,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    initial: {
        type: Number,
        default: 0,
    }
});
const emit = defineEmits(['close']);
</script>

<style lang="less" scoped>
@import '@/assets/less/vars.less';
</style>