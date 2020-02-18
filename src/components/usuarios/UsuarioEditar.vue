<template>
  <div class="usuario-editar">
    <h3>Editar: {{ $route.params.user }}</h3>
    <footer id="rodape">Curso Vue</footer>
  </div>
</template>

<script>
export default {
  name: "UsuaioEditar",
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log("Interceptação de mudança de rota, dentro do componente");

    // É possível também fazer a interceptação antes que a rota seja alterada diretamente pelo componente, porém acho mais interessante que isso seja feito em routes, pois fica mais claro quais rotas tem algum tipo de verificação por autenticação ou por exemplo poderia centralizar a chamada desse "mixin".

    // next(autenticado); // Acho essa forma de permitir ou não a navegação mais sucinta, pois economiza no if (conforme o exemplo da interceptação específica da rota em routes.js), porém com ela não é possível fazer uma ação para caso a autenticação não seja permitida, e visualmente para o usuário não teria nenhuma resposta.

    // Uma outra forma de fazer aqui, sem usar diretamnte o if poderia ser:
    const autenticado = true;
    autenticado ? next() : next("/?redirect=editarUsuario"); // De modo que se não tiver autenticado é redirecionado para home ou poderia ser para /login e após o procedimento de login, poderia ser redirecionado de volta para esse componente, mas para isso precisaria de uma tratativa na rota de login, caso recebesse "redirect" como parâmetro de URL.
  }
}
</script>

<style scoped>
#rodape {
  margin-top: 1000px;
}
</style>