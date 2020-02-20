import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 2,
    preco: 19.98
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco)
      .reduce((total, atual) => total + atual, 0);
    },
    getQuantidade(state) {
      return state.quantidade;
    },
    getPreco(state) {
      return state.preco;
    }

  },
  mutations: {
    adicionarProduto(state, payload) {
      return state.produtos.push(payload);
    },
    updateQuantidade(state, payload) {
      return state.quantidade = payload;
    },
    updatePreco(state, payload) {
      return state.preco = payload;
    },
  },
  actions: {
    adicionarProduto({ commit }, payload) {
      // Apenas para simular o tempo de uma requisição ajax
      setTimeout(() => {
        commit("adicionarProduto", payload);
      }, 1000)
    },
    setQuantidade({ commit }, payload) {
      commit("updateQuantidade", payload);
    },
    setPreco({ commit }, payload) {
      commit("updatePreco", payload);
    }
  }
})