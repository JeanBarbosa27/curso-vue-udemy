import Vue from 'vue';
import Vuex from 'vuex';

import portfolio from './modules/portfolio';
import stocks from './modules/stocks';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    portfolio,
    stocks,
  }, 
})
