<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps(['title']);
const { title } = toRefs(props);
</script>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>