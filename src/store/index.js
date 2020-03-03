import Vue from 'vue';
import Vuex from 'vuex';

import portifolio from './modules/portifolio';
import stocks from './modules/stocks';
import * as getter from './getters';
import * as mutations from './mutations';
import * as actions from './actions';


Vue.use(Vuex);

export default Vuex.Store({
  modules: {
    portifolio,
    stocks,
  },
  getters,
  mutations,
  actions
})
