export default {
  computed: {
    separadorGlobal() {
      return this.frase.trim().replace(/\s/g, ", ")
    },
    contadorGlobal() {
      const palavas = this.frase.trim().split(/\s/)
      return palavas.map(palavra => {
        return `${palavra} (${palavra.length}) `
      }).join("");
    }
  }
}
