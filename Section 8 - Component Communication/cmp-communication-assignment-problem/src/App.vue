<template>
  <section>
    <active-user
      :username="username"
      :age="age"
    ></active-user>
    <user-data
      @username-input="usernameInput"
      @age-input="ageInput"
    ></user-data>
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      username: '',
      age: null
    };
  },
  methods: {
    usernameInput(username) {
      this.username = username;
    },
    ageInput(age) {
      this.age = age;
    }
  }
};
</script>