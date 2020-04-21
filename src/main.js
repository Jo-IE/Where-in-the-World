import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

new Vue({
    render: (h) => h(App),
    router,
    vuetify,
}).$mount('#app');
Vue.config.productionTip = false;
