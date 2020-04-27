import VueRouter from 'vue-router';

//import Header from './Header.vue';
import Home from './components/Home';
import Detail from './components/Detail';

const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'detail', path: '/country/:name', component: Detail, props: true },
];

const router = new VueRouter({
    routes,
});

export default router;
