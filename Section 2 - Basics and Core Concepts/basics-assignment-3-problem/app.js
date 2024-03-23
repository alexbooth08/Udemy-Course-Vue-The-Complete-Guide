const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    computed: {
        result() {
            if (this.counter === 37) {
                return this.counter
            } else if (this.counter < 37) {
                return "Not there yet.";
            } else {
                return "Too much!";
            }
        }
    },
    watch: {
        result() {
            const that = this;
            
            setTimeout(function() {
                that.counter = 0;
            }, 5000)
        }
    },
    methods: {
        incrementCounter(num) {
            this.counter += num;
        }

    }
})

app.mount('#assignment');