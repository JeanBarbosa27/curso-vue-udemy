import Vue from 'vue';
import Vuex from 'vuex';

import portifolio from './modules/portifolio';
import stocks from './modules/stocks';
import * as state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';


Vue.use(Vuex);

export default Vuex.Store({
  state,
  getters,
  mutations,
  actions
  modules: {
    portifolio,
    stocks,
  },
  
})
