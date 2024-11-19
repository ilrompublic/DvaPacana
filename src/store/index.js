import Vue from 'vue';
import Vuex from 'vuex';
import self from './self';
import other from './other';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        self,
        other,
    },
});