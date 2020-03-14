export default {
  balance: 10000,
  stocks: [
    {
      name: 'BMW',
      price: 110.00,
      quantity: 0,
      hasError: false,
      bought: false,
      boughtQuantity: 0,
    },
    {
      name: 'Google',
      price: 200.00,
      quantity: 0,
      hasError: false,
      bought: false,
      boughtQuantity: 0,
    },
    {
      name: 'Apple',
      price: 250.00,
      quantity: 0,
      hasError: false,
      bought: false,
      boughtQuantity: 0,
    },
    {
      name: 'Twitter',
      price: 12.00,
      quantity: 0,
      hasError: false,
      bought: false,
      boughtQuantity: 0,
    },
  ]
  // TODO: Na verdade as ações precisam precisam estar aqui, pois na hora de vender o valor não pode ser o que foi definido na primeira interação, mas sim flutuar na mesma proporção de compra. No portifólio, de ter só uma lista com nome, quantidade e se está ou não com erro e puxando o preço do state global.
}
