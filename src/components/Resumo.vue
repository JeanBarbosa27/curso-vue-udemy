<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    // Forma de pegar o total lendo getters direto da store
    computed: mapGetters('carrinho', {
        total: "valorTotal"
    })
    // Forma de pegar o total com mapGetters, sendo que aqui vai precisar renomear a propriedade de total para valor total no template
    // computed: mapGetters(["valorTotal"]);
        
    // computed: {
        // total() {
        //     return this.$store.getters.valorTotal;
        // }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
