import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export

new Vue({
    render: (h) => h(App),

    vuetify,
}).$mount('#app');
Vue.config.productionTip = false;
