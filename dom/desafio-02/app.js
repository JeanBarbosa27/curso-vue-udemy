new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            if (this.valor) {
                alert(this.valor)
            } else {
                alert("O valor ainda não foi preenchido no campo")
            }
        },
        salvaValor(event) {
            this.valor = event.target.value;
        }
    }
})