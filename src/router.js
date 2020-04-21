import Vue from 'vue';

import VueRouter from 'vue-router';

//import Header from './Header.vue';
import Home from './components/Home';

Vue.use(VueRouter);

const routes = [{ path: '/', component: Home }];

const router = new VueRouter({
    routes,
});

export default router;
