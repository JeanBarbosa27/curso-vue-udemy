export default {
  getBalance: state => state.balance,

  getListFrom: state => module => state[module].list,
  
}
