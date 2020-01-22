<template>
  <div>
    <Rotulo nome="nome">
      <input
        type="text"
        :value="nome"
        @input="enviarNomeCompleto($event, 'nome')"
      />
    </Rotulo>
    <Rotulo nome="sobrenome">
      <input
        type="text"
        :value="sobrenome"
        @input="enviarNomeCompleto($event, 'sobrenome')"
      />
    </Rotulo>
  </div>
</template>

<script>
  import Rotulo from "./Rotulo"

  export default {
    name: "NomeCompleto",
    components: {
      Rotulo
    },
    data() {
      return {
        usuario: {
          nome: "",
          sobrenome: ""
        }
      }
    },
    props: {
      nome: {
        type: String,
        default: "Anônimo"
      },
      sobrenome: {
        type: String,
        default: "Anônimo"
      }
    },
    methods: {
      enviarNomeCompleto(event, type) {
        this.usuario[type] = event.target.value;
        return this.$emit('input', this.usuario);
      }
    }

  }
</script>

<style scoped>

</style>