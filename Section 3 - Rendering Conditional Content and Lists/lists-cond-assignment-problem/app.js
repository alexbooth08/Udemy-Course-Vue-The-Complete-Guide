const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            hideList: false
        }
    },
    computed: {
        buttonCaption() {
            return (this.hideList ? 'Show' : 'Hide') + ' List';
        }
    },
    methods: {
        addTask() {
            if (this.enteredTaskValue === '') {
                return;
            }

            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = '';
        },
        toggleHideList() {
            this.hideList = !this.hideList;
        }
    }
});
app.mount('#assignment');