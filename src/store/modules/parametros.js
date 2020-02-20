export default {
  state: {
    quantidade: 2,
    preco: 19.98
  },
  getters: {
    getQuantidade(state) {
      return state.quantidade;
    },
    getPreco(state) {
      return state.preco;
    }
  
  },
  mutations: {
    updateQuantidade(state, payload) {
      return state.quantidade = payload;
    },
    updatePreco(state, payload) {
      return state.preco = payload;
    },
  },
  actions: {
    setQuantidade({ commit }, payload) {
      commit("updateQuantidade", payload);
    },
    setPreco({ commit }, payload) {
      commit("updatePreco", payload);
    }
  }
}