<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" disabled v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" disabled v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed: {
        ...mapGetters(["getQuantidade", "getPreco"]),
        quantidade() {
            return this.getQuantidade;
        },
        preco() {
            return this.getPreco;
        },
    },
    methods: {
        ...mapActions(["adicionarProduto"]),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // Forma de adicionar direto no state da store
            // this.$store.state.produtos.push(produto);

            // Forma de chamar usando o commit com o método importado a partir de mapMutations (lembrando que para esse cenário, precisa ter importado o mapMutations e instanciado em methods)
            // this.$store.commit('adicionarProduto', produto);

            // Forma de despachar uma action direto da store
            // this.$store.dispatch("adicionarProduto", produto)

            // Forma de adicionar produto, chamando o método do mapActions
            this.adicionarProduto(produto);
            
            // eslint-disable-next-line
            console.log("Nome a partir do state global usando um getter global, ambos não modularizados: ", this.$store.getters.getNome);
            
            // eslint-disable-next-line
            console.log("Nome completo a partir do state global usando um getter global, ambos não modularizados: ", this.$store.getters.getNomeCompleto);
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }

    button {
        cursor: pointer;
    }
</style>
