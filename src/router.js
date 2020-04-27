import VueRouter from 'vue-router';

//import Header from './Header.vue';
import Home from './components/Home';
import Detail from './components/Detail';

const routes = [
    { path: '/', component: Home },
    { name: 'detail', path: '/country/:name', component: Detail },
];

const router = new VueRouter({
    routes,
});

export default router;
