new Vue({
	el: '#desafio',
	data: {
		estiloEmEfeito: false,
		classeDiv2: true,
		classeDiv3: 'c3',
		classeDiv4: '',
		inserirClasse: '',
		altura: '',
		progresso: 0
	},
	computed: {
		outraClasseDiv4: function() {
			return this.inserirClasse === 'true' && 'c2'
		},
		barraProgresso: function() {
			return {
				backgroundColor: this.progresso < 50 ? "red" : this.progresso < 100 ? "blue" : "green",
				height: "30px",
				width: this.progresso + "%",
				transition: 'all 1000ms cubic-bezier(1, 0.07, 0, 1.14) 0s'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			var SELF = this
			var classes = ['destaque', 'encolher']
			setInterval(function() {
				SELF.estiloEmEfeito = !SELF.estiloEmEfeito
			}, 500)
			SELF.classeDiv2 = true
		},
		iniciarProgresso() {
			this.progresso = 0;
			var SELF = this
			var intervalo = setInterval(function() {
				SELF.progresso += 10
				if(SELF.progresso >= 100) {
					clearInterval(intervalo)
				}

			}, 300)
		}
	}
})
