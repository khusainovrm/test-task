import { createApp } from 'vue';
import { router, store } from '@/app/providers';

import './styles/index.scss';

import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);

export default app;
