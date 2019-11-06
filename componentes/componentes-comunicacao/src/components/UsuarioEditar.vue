<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <p>
            <label for="idadeUsuario" style="display: block">Alterar idade:</label>
            <input id="idadeUsuario" type="number" @input="alteraIdade">
        </p>
        <p>
            <label for="sobrenomeUsuario" style="display: block">Alterar sobrenome:</label>
            <input id="sobrenomeUsuario" type="text" @input="alteraSobrenome">
        </p>
    </div>
</template>

<script>
export default {
    props: {
        idade: {
            type: Number,
            default: 18
        }
    }, methods: {
        alteraIdade(event) {
            const idade = parseInt(event.target.value);
            return this.$emit("idadeAlterada", idade)
        },
        alteraSobrenome(event) {
            this.$barramento.$emit('alteraSobrenome', event.target.value)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
