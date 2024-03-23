const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  // computed holds computed properties
  // it holds methods, but they should be treated like data properties in how we name and access them
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    }
  },
  // watch holds functions and "watches" when a data/computed property changes and executes the function with that same name
  // here we don't return anything in these methods, we just perform logic we need to
  // these methods have the paramter newValue and oldValue
  watch: {
    // this function will be called whenever name changes.
    name(newValue, oldValue) {
      console.log('name old value was ' + oldValue);
      console.log('name new value is ' + newValue);
    },
    // here is a good use case of using a watcher
    counter(value) {
      const that = this;
      
      if (value > 50) {
        setTimeout(function() {
          that.counter = 0;
        }, 2000)
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName;
      }
    }
  }
});

app.mount('#events');
