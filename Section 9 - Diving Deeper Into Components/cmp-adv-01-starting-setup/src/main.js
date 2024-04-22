import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

const app = createApp(App);

// Components here are registered globally so they can be used everywhere.
// But it may be unclear where the components are being used and can clutter this file
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
