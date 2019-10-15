import Vue from 'vue';
import Vuex from 'vuex';
import {surveys} from './modules/surveys';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    surveys,
  },
  state: {
    title: 'Survey',
  },
});