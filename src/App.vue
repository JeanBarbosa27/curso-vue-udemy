<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr>
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personaliza, com argumento</p>
    <p v-destaque="cor">Usando diretiva personaliza, sem argumento e com valor definido em data</p>
    <hr>
    <p v-destaque-local.atrasar.alternar="{cores, atraso, intervalo}">Usando diretiva personaliza, com argumento</p>
    <p v-destaque-local:fundo="{cores}">Usando diretiva personaliza, sem argumento e com valor definido em data</p>
    <hr>
    <p>Anatomia da diretiva:</p>
    <ul>
      <li>
        Exemplo: v-nomeDiretiva:argumento.mod1.mod2.mod3="'valor'"
      </li>
      <li>
        v-: Prefixo padrão;

      </li>
      <li>
        nomeDiretiva: Conforme definido na instância;
      </li>
      <li>
        argumento: Somente um argumento por diretiva acessado via binding.arg, para definição de comportamento
      </li>
      <li>
        mod1, mod2, mod3, modn: Modificadores que dentro de um mesmo argumento provém mudanças de comportamento
      </li>
      <li>
        valor: Se não for passado como string, o Vue tenta interpretar como dado, podendo ser qualquer tipo de dado,
        string, number, object, array, etc.
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cor: "red",
				cores: ["violet", "indigo", "blue", "green", "yellow",'orange', "red"],
				atraso: 2000,
				intervalo: 500
      }
    },
    directives: {
      'destaque-local': {
        bind(el, binding, vnode) {
          const {arg, modifiers, value: { cores, atraso, intervalo }} = binding
          // const cores = ['red', value]
          let corAtual
          let i = 0
          // let atraso = 0

          const alternarCores = cor => {
            if (arg === "fundo") {
              el.style.backgroundColor = cor
            } else {
              el.style.color = cor
            }
          }

          // if (modifiers['atrasar']) atraso = 3000
          setTimeout(() => {
            if (modifiers['alternar']) {
              setInterval(() => {
                corAtual = cores[i]
                alternarCores(corAtual)
                if (i + 1 < cores.length) { i++ } else {i = 0}
              }, intervalo)
            } else {
              alternarCores(cores[0])
            }
          }, atraso || 0 )

        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
  }
</style>
