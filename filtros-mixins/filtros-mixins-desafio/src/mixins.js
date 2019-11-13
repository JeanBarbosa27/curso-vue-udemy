export const separadorTextoGlobal = {
  computed: {
    separadorGlobal() {
      return this.frase.trim().replace(/\s/g, ", ")
    }
  }
}

export const contadorTextoGlobal = {
  computed: {
    contadorGlobal() {
      const palavas = this.frase.trim().split(/\s/)
      return palavas.map(palavra => {
        return `${palavra} (${palavra.length}) `
      }).join("");
    }
  }
}

export default [separadorTextoGlobal, contadorTextoGlobal]