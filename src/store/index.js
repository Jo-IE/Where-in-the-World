import Vue from 'vue';
import Vuex from 'vuex';
import countries from './modules/countries';
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        countries,
    },
    //strict: debug,
    //plugins: debug ? [createLogger()] : []
});
