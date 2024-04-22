<!--
  <template>
  <div>
    <the-header></the-header> -->
    <!-- <TheHeader /> We could use this since we used PascalCase as key value in components. This also allows us to use a self closing tag, but none of this is neccasary --><!--
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      --><!-- slotProps is a variable we name (could be any name) whose value is an object with all the props and their values defined in the slot defined in course-goals --><!--
      <template #default="slotProps">
        <h2> {{ slotProps.item }} </h2>
        <p> {{ slotProps['another-prop'] }} </p>
      </template>
    </course-goals>
  </div>
</template>
-->

<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- component is a vue element that requires one attribute "is" that is the name of a component -->
    <!-- keep-alive is a vue element that vue uses to not destroy components/elements inside it -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  // componets is to register components locally in this vue file
  // the key is the tag name, the value is the imported element
  components: {
    // 'the-header': TheHeader //this is fine but can use below to use PascalCase as tag name in template. Vue also automatically translates PascalCase to pascal-case to be used for tag name as well.
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>