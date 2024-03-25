import { createApp } from 'vue';

// 'App' here can be named anything since we are exporting the default from ./App.vue
import App from './App.vue';
import FriendContact from './components/FriendContact.vue'

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');
