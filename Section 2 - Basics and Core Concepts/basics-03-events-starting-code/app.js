const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    incrementCounter(num = 1) { // default value
      this.counter = this.counter + num;
    },
    decrementCounter(num = 1) {
      this.counter = this.counter - num;
    },
    setName(event) { // default parameter will be the native event object
      this.name = event.target.value;
    },
    setFullName(event, lastName) { // default parameter will be the native event object
      this.name = event.target.value + ' ' + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
