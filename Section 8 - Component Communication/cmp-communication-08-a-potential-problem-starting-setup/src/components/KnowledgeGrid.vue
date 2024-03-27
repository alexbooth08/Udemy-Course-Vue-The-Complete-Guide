<!-- another kind of pass through component, but it holds multiple knowlege-element elements -->
<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'] // we can only inject data provided in an ancestor/parent component. Here, we get topics from App.vue
};
</script>