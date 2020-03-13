export default {
  addListItem(state, payload) {
    return state[payload.module].list.push(payload.item);
  },

  removeListItem(state, payload) {
    const { module, name } = payload;
    return state[module].list = state[module].list.filter(item => item.name !== name);
  },

  updateBalance(state, payload) { 
    return state.balance = payload.balance;
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
