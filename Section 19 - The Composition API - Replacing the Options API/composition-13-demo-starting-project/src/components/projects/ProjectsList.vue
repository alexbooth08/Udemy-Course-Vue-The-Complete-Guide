<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <ProjectItem v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></ProjectItem>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<!-- <script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  data() {
    return {
      enteredSearchTerm: '',
      activeSearchTerm: '',
    };
  },
  computed: {
    hasProjects() {
      return this.user.projects && this.availableProjects.length > 0;
    },
    availableProjects() {
      if (this.activeSearchTerm) {
        return this.user.projects.filter((prj) =>
          prj.title.includes(this.activeSearchTerm)
        );
      }
      return this.user.projects;
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
    user() {
      this.enteredSearchTerm = '';
    },
  },
};
</script> -->

<script setup>
import { defineProps, ref, computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

const props = defineProps(['user']);
const { user } = toRefs(props);

watch(user, () => {
    enteredSearchTerm.value = '';
});

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
function updateSearch(val) {
  enteredSearchTerm.value = val;
}
watch(enteredSearchTerm, (val) => {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return user.value.projects.filter((prj) =>
      prj.title.includes(activeSearchTerm.value)
    );
  }
  return user.value.projects;
});
const hasProjects = computed(() => {
  return user.value.projects && availableProjects.value.length > 0;
});

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>