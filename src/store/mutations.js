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

  loadStocks: (state, data) => state.stocks = data,

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

  toggleMessageShow: (state, payload) => state.message.show = payload,

  updateBalance(state, action) { 
    if(action === 'buy') {
      return state.balance = state.balance - state.stockSum;
    } else if(action === 'sell') {
      return state.balance = state.balance + state.stockSum;
    }
  },

  updateItemError: (state, payload) => {
    const { name, hasError } = payload;

    state.stocks.map((item, index) => {
      if(item.name === name) {
        return state.stocks[index].hasError = hasError
      }
    })
  },

  updateItemPrice: (state, payload) => {
    const { index, newPrice } = payload;
    state.stocks[index].price = newPrice;
  },

  updateMessageContent: (state, payload) => state.message.content = payload,
  
  updateMessageTitle: (state, payload) => state.message.title = payload,

  updateQuantity(state, payload) {
    const { name,  quantity } = payload;

    state.stocks.map((item, index) => {
      if(item.name === name) {
        return state.stocks[index].quantity = quantity;
      }
    });
  },

  updateStockSum: (state, payload) => state.stockSum = payload,
}
