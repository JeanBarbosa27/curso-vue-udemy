new Vue({
  el: "#matadorMonstros",
  data: {
    jogoIniciado: false,
    gameOver: false,
    personagens: [
      {
        id: "J1",
        nome: "Jogador",
        vida: 100,
        ataque: {
          min: 1,
          max: 6
        },
        ataqueEspecial: {
          min: 3,
          max: 8
        },
        cura: {
          min: 5,
          max: 10
        }
      },
      {
        id: "J2",
        nome: "Monstro",
        vida: 100,
        ataque: {
          min: 4,
          max: 9
        },
        ataqueEspecial: {
          min: 2,
          max: 7
        },
        cura: {
          min: 2,
          max: 5
        }
      }
    ],
    logs: []
  },
  methods: {
    iniciarJogo: function () {
      this.jogoIniciado = true
      this.gameOver = false
      this.personagens.map(function (personagem) {
        return personagem.vida = 100
      })
      this.logs = []
    },
    desistirJogo: function () {
      this.personagens.map(function (personagem) {
        return personagem.vida = 100
      })
      this.jogoIniciado = false
      this.logs = []
    },
    jogoContinua: function() {
      var este = this
      this.personagens.map(function(personagem) {
        if(personagem.vida <= 0) {
          este.gameOver = true;
        }
      })
    },
    aplicaDano: function (atacante) {
      this.personagens.map(function (personagem) {
        if (atacante.id !== personagem.id) personagem.vida -= atacante.atacou
      })
      this.registraLog("ataque", atacante)
    },
    aplicaCura: function (curador) {
      if (curador.vida < 100) {
        this.personagens.map(function (personagem) {
          if (curador.id === personagem.id) personagem.vida += curador.curou
        })
        this.registraLog("cura", curador)
      }
    },
    registraLog: function (tipo, atacante) {
      var nomeAtacante = atacante.nome;
      var nomeDefensor = this.personagens.filter(function(personagem){
        return personagem.id !== atacante.id && personagem.nome
      })[0].nome
      //var acao = tipo === "ataque" ? "atingiu" : tipo === "cura" && "curou";
      var valor = tipo === "ataque" ? atacante.atacou : tipo === "cura" && atacante.curou
      var mensagem = tipo === "ataque" ? nomeAtacante + " atingiu " + nomeDefensor + " com " + valor : "Jogador ganhou " + valor + " de vida"
      var log = {
        id: atacante.id,
        mensagem: mensagem
      }
      this.logs.push(log);
      this.jogoContinua();
    },
    calculaAtaque: function (min, max) {
      return parseInt(Math.random() * (max - min) + min)
    },
    ataque: function () {
      var este = this
      this.personagens.map(function (personagem) {
        personagem.atacou = este.calculaAtaque(personagem.ataque.min, personagem.ataque.max);
        este.aplicaDano(personagem);
      })
    },
    ataqueEspecial: function () {
      var este = this
      this.personagens.map(function (personagem) {
        personagem.atacou = este.calculaAtaque(personagem.ataqueEspecial.min, personagem.ataqueEspecial.max);
        este.aplicaDano(personagem);
      })
    },
    curar: function () {
      var este = this
      this.personagens.map(function (personagem) {
        if(personagem.id === "J1") {
          personagem.curou = este.calculaAtaque(personagem.cura.min, personagem.cura.max);
          este.aplicaCura(personagem);
        } else {
          personagem.atacou = este.calculaAtaque(personagem.ataque.min, personagem.ataque.max)
          este.aplicaDano(personagem)
        }
      })
    }
  }
})
