export default {
  state: {
    produtos: [],
  },
  getters: {
    getProdutos(state) {
      return state.produtos;
    },
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco)
      .reduce((total, atual) => total + atual, 0);
    }

  },
  mutations: {
    adicionarProduto(state, payload) {
      return state.produtos.push(payload);
    }
  },
  actions: {
    adicionarProduto({ commit }, payload) {
      // Apenas para simular o tempo de uma requisição ajax
      setTimeout(() => {
        commit("adicionarProduto", payload);
      }, 1000)
    }
  }
}