<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script setup>
import {
    computed,
    defineProps,
    inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';

const props = defineProps(['firstName', 'lastName']);
// We're not emitting custom events here, but this is how you would:
// const emit = defineEmits(['inFocus', 'submit'])
// emit('submit')

// how to inject data using Composition API
const age = inject('userAge');

// onBeforeMount, onMounted, etc...
onBeforeMount(() => {
    console.log('onBeforeMount');
});

onMounted(() => {
    console.log('onMounted');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
});

onUpdated(() => {
    console.log('onUpdated');
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
});

onUnmounted(() => {
    console.log('onUnmounted');
});

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>