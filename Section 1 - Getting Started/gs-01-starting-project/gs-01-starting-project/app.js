// Simple app using vanilla js that adds text values from input to a list
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

// Same app remade using vue
Vue.createApp({
    // data is a function that returns an object containing variables needed for your app
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            // this refers to object in data
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app'); // have to tell vue where to apply/mount this using a CSS selecter, in this case we have a div with id "app"

// Vue does a lot of magic here, but we want to keep in mind with vue we define the end result and we use the special features 
// given by Vue (v-model v-for, v-on, etc.) in HTML to connect the HTML to data and logic managed in the vue app.