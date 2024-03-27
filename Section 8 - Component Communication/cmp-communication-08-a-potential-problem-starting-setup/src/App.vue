  <!-- provide & inject -->
  <!-- Here we use provie and inject to provide topics to deeper decendant component KnowledgeGrid.
    provide is set on the parent/ancestor element, inject is set on the child/decendant element.
    this can be useful and make our code cleaner, but can also make the code harder to understand 
    since we need to dig into the code to see how everything is happening -->
  <template>
  <div>
    <!-- notice the null checks below -->
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  // provide is a vue property that provides data to child/decendant components
  // you can set provide to an object to hold static data
  // but if we want to pass mutable data we set provide to a function and return an object (similiar to data property)
  // in this object we set the data we want to provide, and we can pass data from the vue app (like this.topics)
  // Note: the key does not need to match the key of the data we pass, it can be anything
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  // push a new topic to topics to show provide works
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'events',
        title: 'Events',
        description: 'Events are importnat in Vue',
        fullText: 'Events allow you to trigger code on demand!'
      });
    }, 3000);
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>