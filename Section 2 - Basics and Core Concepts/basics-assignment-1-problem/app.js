const app = Vue.createApp({
    data() {
        return {
            name: 'Alex',
            age: 26,
            favoriteNumber: Math.random(),
            hedgehogImgUrl: 'https://vetmed.illinois.edu/wp-content/uploads/2021/04/pc-keller-hedgehog.jpg'
        }
    },
    methods: {

    }
});

app.mount('#assignment');