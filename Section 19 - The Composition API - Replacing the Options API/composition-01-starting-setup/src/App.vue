<template>
  <section class="container">
    <UserData :first-name="firstName" :last-name="lastName"></UserData>
    <button @click="setNewAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <!-- <input type="text" placeholder="Last Name" v-model="lastName" /> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<!-- <script>
import { ref } from 'vue'; // import ref to use in setup()

export default {
  // setup() is how we use the new for Vue3 Composition API instead of the older Options API
  // setup() takes the place of data(), mehtods, computed, watch. Other properties (like props)
  // are defined the same as before
  setup() {
    // ref() creates a reference to a value (a reactive value which vue watches) to be used in vue
    // this reference is an object with a 'value' key
    const uName = ref('Alex');

    setTimeout(function() {
      uName.value = 'Alexander';
    }, 2000)

    // only the variable we return in this object are usable in the vue app, like the template
    return { userName: uName };
  }
  // Old way of defining data with Options API commented out below
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script> -->

<!--
  Note: the above (inside the script tag) can be replaced with an alternative and newer syntax below using the 'setup' tag.
  This newer syntax is simpler, more concise, and will be used more by others going forward.
  Here, we don't have to export default, or explicitly define setup() and return an object with our variables.

  The tutorial was recorded before this syntax existed, but I will try to use it for the rest of the tutorial even
  though he does not.
 -->

<script setup>
// reactive() is like ref(), but it is explicitly made for objects
// with reactive, we do not access a property in user like user.value.name, we simply do user.name
// import { ref, computed, watch } from 'vue';
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// import { reactive } from 'vue';

// const user = ref({
//   name: 'Alex',
//   age: 26
// });
// const user = reactive({
//   name: 'Alex',
//   firstName: 'Alex',
//   lastName: 'Booth',
//   age: 26
// });

// setTimeout(function() {
//   user.value.name = 'Alexander';
//   user.value.age = 27;
// }, 2000);

// function setNewAge() {
//   user.age = 27;
// }

// const name = ref('Alex');
const firstName = ref('Alex');
const lastName = ref('Booth');
const lastNameInput = ref(null);
const age = ref(26);

// how to provide data using Composition API
provide('userAge', age);

// define a watcher using watch(), which takes the property we are watching, and the function to execute
watch(age, (newValue, oldValue) => {
  console.log('New age: ' + newValue);
  console.log('Old age: ' + oldValue);
});
// you can actually watch for multiple dependencies by passing an array of properties as the first argument
// this gives us an array of newValues and oldValues, since there are multiple properties we are watching for
// watching for multiple dependencies was not possible using old Options API
watch([firstName, lastName], (newValues, oldValues) => {
  console.log('Old firstName: ' + oldValues[0]);
  console.log('New firstName: ' + newValues[0]);
  console.log('Old lastName: ' + oldValues[1]);
  console.log('New lastName: ' + newValues[1]);
});

// we defined computed properties using computed() which takes a function
// const userName = computed(() => {
//   return firstName.value + ' ' + lastName.value;
// });

function setNewAge() {
  age.value = 27;
}
// function setFirstName(e) {
//   firstName.value = e.target.value;
// }
// function setLastName(e) {
//   lastName.value = e.target.value;
// }

function setLastName() {
  // lastName.value = this.$refs.lastNameInput.value; // this.$refs does not exist in setup
  lastName.value = lastNameInput.value.value; //lastNameInput is a ref whose value is lastNameInput element, whose value is what we want.
}

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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>