<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Sobrenome do usuário: <strong>{{ sobrenome }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reinicializarNome">Reinicializar Nome</button>
        <button @click="reiniciarFn">Função reiniciar nome</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
          sobrenome: ""
      }
    },
    props:  {
        nome: {
            type: String,
            //required: true,
            //default: function() { return Array(10).fill(0).join(",") },
            default: "Anônimo"
        },
        idade: {
            type: Number,
            default: 18
        },
        reiniciarFn: {
            type: Function,
            required: true
        }
    },
    created() {
        this.$barramento.$on("alteraSobrenome", sobrenome => this.sobrenome = sobrenome)
    },
    methods: {
        inverterNome() {
            return this.nome.split("").reverse().join("");
        },
        reinicializarNome() {
            return this.$emit("reinicializarNome", "Pedro")
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
