import stocks from '@/data/stocks';

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks (state, stocks) {
      state.stocks = stocks;
    }
  },
  actions: {
    buyStock ({ commit }, order) {
      // eslint-disable-next-line
      console.log('comprando ação: ', order);
    },

    initStocks({ commit }) {
      commit('setStocks', stocks);
    }
  },
  getters: {
    stocks (state) {
      return state.stocks;
    }
  }
}