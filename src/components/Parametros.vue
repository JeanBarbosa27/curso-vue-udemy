<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
import{ mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["getQuantidade", "getPreco"]),
        quantidade: {
            get() {
                return this.getQuantidade;
            },
            set(payload) {
                return this.setQuantidade(payload);
            }
        },
        preco: {
            get() {
                return this.getPreco;
            },
            set(payload) {
                return this.setPreco(payload);
            }
        },
    },
    methods: {
        ...mapActions(["setQuantidade", "setPreco"])
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
