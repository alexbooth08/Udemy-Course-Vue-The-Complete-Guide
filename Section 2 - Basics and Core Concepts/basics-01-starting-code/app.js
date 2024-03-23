const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<i>Master Vue and build an amazing app!</i>', // Inside {{ }} <i> will be interpreted as text, not an html tag, by vue, so this will not due what we want. Note: this is good b/c of security concerns. Instead use v-html to render it as html
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();

            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
            // without vue, 'this' would refer to something else here, but vue makes it so 'this' refers to an
            // object with reference to variable in data, and functions in methods.
        }
    }
});

app.mount('#user-goal');