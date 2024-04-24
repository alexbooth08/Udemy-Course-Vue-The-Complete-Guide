import { createApp } from 'vue';

import app from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'


app = createApp(app);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
