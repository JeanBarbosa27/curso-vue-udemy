export default {
  getBalance: state => state.balance,
  getMessage: state => state.message,
  getPortfolio: state => state.stocks.filter(item => item.bought === true),
  getStockItem: state => name => state.stocks.filter(item => item.name === name)[0],
  getStocks: state => state.stocks,
  getStockSum: state => state.stockSum,
}
