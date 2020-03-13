export default {
  addListItem(state, payload) {
    return state[payload.module].list.push(payload.item);
  },
  
  buyStock: (state, id) => {
    const item = state.stocks.list.filter(item => item.id === id)[0];
    state.portfolio.list.push(item);
  },

  removeListItem(state, payload) {
    const { module, name } = payload;
    return state[module].list = state[module].list.filter(item => item.name !== name);
  },

  sellPortfolio(state, id) {
    // TODO: primeiro verificar se quantidade que está vendendo é o total daquele portfolio. Se for, faz a ação abaixo, se não, atualiza a quantidade. Em ambos os casos tem que atualizar o saldo novamente.

    state.portfolio.list = state.portfolio.list.filter(item => item.id !== id)[0];
  },

  updateBalance(state, balance) { 
    return state.balance = balance;
  },

  updateItemError: (state, payload) => {
    const { module, name, hasError } = payload;

    state[module].list.map((item, index) => {
      if(item.name === name) {
        return state[module].list[index].hasError = hasError
      }
    })
  },

  updateQuantity(state, payload) {
    const { module, name,  quantity } = payload;

    state[module].list.map((item, index) => {
      if(item.name === name) {
        return state[module].list[index].quantity = quantity;
      }
    });
  },

}
