export const separadorPalavrasGlobal = {
  data() {
    return {
      separarTextoGlobal: "Lorem ipsum dolor sit amet consectetur"
    }
  },
  computed: {
    separadorGlobal() {
      return this.separarTextoGlobal.trim().replace(/\s/g, ", ")
    }
  }
}

export const contadorLetrasGlobal = {
  data() {
    return {
      contarTextoGlobal: " Pedro é legal"
    }
  },
  computed: {
    contadorGlobal() {
      const palavas = this.contarTextoGlobal.trim().split(/\s/)
      return palavas.map(palavra => {
        return `${palavra} (${palavra.length}) `
      }).join("");
    }
  }
}

export default [separadorPalavrasGlobal, contadorLetrasGlobal]
