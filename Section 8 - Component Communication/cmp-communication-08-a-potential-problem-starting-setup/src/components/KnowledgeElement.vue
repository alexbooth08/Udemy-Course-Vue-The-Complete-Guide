<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'], // we expect selectTopic to be a function, that will be triggered on Learn More button click
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>