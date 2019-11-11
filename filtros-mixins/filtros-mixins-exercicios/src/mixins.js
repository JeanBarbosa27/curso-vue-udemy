export const frutas = {
  data() {
    return {
      fruta: "",
      frutas : ["banana", "laranja", "maça"]
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = ""
    }
  }
};

export const usuario = {
  computed: {
    logado() {
      return "Maria Silva"
    }
  }
};

export default [frutas, usuario]
