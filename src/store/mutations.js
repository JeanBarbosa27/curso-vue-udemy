export const addListItem = (state, payload) => state[payload.module].list.push(payload.item);

export const removeListItem = (state, payload) => {
  const { module, name } = payload;
  return state[module].list = state[module].list.filter(item => item.name !== name);
};

export const updateBalance = (state, payload) => state.balance = payload.balance;

export const updateQuantity = (state, payload) => {
  const { module, name,  quantity } = payload;

  state[module].list.map((item, index) => {
    if(item.name === name) {
      return state[module].list[index][quantity] = quantity;
    }
  })

}

