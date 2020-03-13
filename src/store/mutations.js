export default {
  addListItem(state, payload) {
    return state[payload.module].list.push(payload.item);
  },
  
  buyStock: (state, name) => {
    const item = state.stocks.list.filter(item => item.name === name);
    state.portfolio.list.push(item[0]);
  },

  removeListItem(state, payload) {
    const { module, name } = payload;
    return state[module].list = state[module].list.filter(item => item.name !== name);
  },

  sellPortfolio(state, payload) {
    const { name, price, newBalance } = payload;

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
