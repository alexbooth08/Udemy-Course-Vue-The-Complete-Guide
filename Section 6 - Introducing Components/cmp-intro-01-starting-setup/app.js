const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: 1,
                    name: 'Jerry Seinfeld',
                    phone: '(212) 555-1234',
                    email: 'jerry.seinfeld@mail.com'
                },
                { 
                    id: 2,
                    name: 'George Constanza',
                    phone: '(212) 555-5678',
                    email: 'george.constanzad@mail.com'
                },
                { 
                    id: 3,
                    name: 'Cosmo Kramer',
                    phone: '(212) 555-7979',
                    email: 'cosmo.kramer@mail.com'
                }
            ]
        };
    }
});

// Components
// a component is essentially a custom html element.
// it functions like a mini vue app. It has its own data, methods, etc.
// first parameter is component/tag name, second is component config object
// component names (custom html tags) should always contain a dash (b/c vanilla HTML elements do not, they are single word)
app.component('friend-contact', {
    // Note: we will define the template here for now, but later in course we will learn a better/cleaner way/design.
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">Show Details</button>
            <ul v-show="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: { 
                id: 2,
                name: 'George Constanza',
                phone: '(212) 555-5678',
                email: 'george.constanzad@mail.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');