const app = Vue.createApp({
  data() {
    return {
      // currentUserInput: '', // using ref attribute instead
      message: 'Vue is great!',
    };
  },
  methods: {
    // no longer needed since we now use ref attribute on the input element and access it using this.$refs in setText()
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;

      // this.$refs is an object given by vue full of key value pairs containing where the keys are the refs identifiers set in template/html
      // and the objects are dom elements
      this.message = this.$refs.userText.value
    },
  },

  // --- Vue app lifecycle functions ---
  //   -------------------
  //  |  createApp({...}) |
  //   -------------------
  //           |
  //           V
  //   -------------------
  //  |   beforeCreate()  |
  //   -------------------
  //           |
  //           V
  //   -------------------                                  -------------------      -------------------
  //  |     created()     | ------------|                  |      updated()    |    |     unmount()     |
  //   -------------------              V                   -------------------      -------------------
  //           |               -------------------                   ^                       ^
  //           V              |  Compile template |                  |                       |
  //   -------------------     -------------------          -------------------      -------------------
  //  |   beforeMount()   | <-----------|                  |   beforeUpdate()  |    |  beforeUnmount()  |
  //   -------------------                                  -------------------      -------------------
  //           |                                                     ^                       ^
  //           V                                                     |                       |
  //   -------------------      ----------------------      -------------------      -------------------
  //  |     mounted()     | -> | Mounted Vue Instance |    |    Data Changed   |    | Instance Unmounted |
  //   -------------------      ----------------------      -------------------      --------------------
  //                                       |-------------------------^                       ^
  //                                       |-------------------------------------------------|

  // You will rarely, if ever, use most of these
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUmount()')
  },
  unmount() {
    console.log('unmount()');
  }
});

app.mount('#app');

// We can create multiple vue apps on the same html page
// each vue app is completely separate from each other, so they don't have access to
// each others' data, methods, etc.
const app2 = Vue.createApp({
  // we can define our template here, instead of putting it in the html like we have been doing
  // however this is not standard and is less readable / harder to understand.
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'pizza'
    };
  }
});

app2.mount('#app2');