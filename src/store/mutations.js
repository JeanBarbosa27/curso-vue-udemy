export default {
  addStockItem: (state, item) => state.stocks.push(item),
  
  buyStock: (state, payload) => {
    const { name, quantity } = payload;

    state.stocks.map(item => {
      if(item.name === name) {
        item.quantity = 0;
        item.bought = true;
        item.boughtQuantity += quantity;
      }
    });
  },

  removeStockItem: (state, name) =>  state.stocks = state.stocks.filter(item => item.name !== name),

  sellPortfolio(state, payload) {
    const { name, quantity } = payload;

    state.stocks.map(item => {
      
      if(item.name === name) {
        const newQuantity = item.boughtQuantity - quantity;
        item.quantity = 0;
        item.boughtQuantity = newQuantity;
        item.bought = newQuantity > 0 ? true : false;
      }
    })
  },

  updateBalance(state, balance) { 
    return state.balance = balance;
  },

  updateItemError: (state, payload) => {
    const { name, hasError } = payload;

    state.stocks.map((item, index) => {
      if(item.name === name) {
        return state.stocks[index].hasError = hasError
      }
    })
  },

  updateQuantity(state, payload) {
    const { name,  quantity } = payload;

    state.stocks.map((item, index) => {
      if(item.name === name) {
        return state.stocks[index].quantity = quantity;
      }
    });
  },

}
