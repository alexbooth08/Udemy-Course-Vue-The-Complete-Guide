const app = Vue.createApp({
    data() {
        return {
            enteredClass: '',
            hideP: true,
            inlinePBgColor: '',
        }
    },
    computed: {
        pClasses() {
            return {
                user1: this.enteredClass === 'user1',
                user2: this.enteredClass === 'user2',
                visible: this.hideP,
                hidden: !this.hideP
            }
        }
    },
    methods: {
        toggleHideP() {
            this.hideP = !this.hideP;
        }
    }
});

app.mount('#assignment');