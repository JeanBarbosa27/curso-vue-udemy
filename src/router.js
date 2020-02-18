import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from "./components/templates/Menu";
import Usuario from './components/usuarios/Usuario';
import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe';
import UsuarioEditar from './components/usuarios/UsuarioEditar';
import UsuarioLista from './components/usuarios/UsuarioLista';

Vue.use(Router);

const routes = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return { savedPosition }
    } else if(to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: "/",
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: "/usuarios",
      component: Usuario,
      props: true,
      children: [
        { path: '', component: UsuarioLista },
        { 
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
          name: "detalheUsuario",
          beforeEnter(to, from, next) {
            // Forma de interceptar a navegação dessa rota exclusivamente. Usando o mesmo exemplo da autenticação, poderia ser usado para verificar se o usuário está logado, para permitir a navegação ou não. A assinatura de parâmetros aqui é igual à routes.beforeEach.

            // Suponha que tem uma forma de verificar se o usuário está logado.
            const autenticado = true;
            console.log("Interceptação exclusiva da rota de detalhes do usuário, antes de seguir com a navegação");
            
            
            if(autenticado) {
              console.log("Interceptação exclusiva da rota de detalhes do usuário, antes de seguir com a navegação")
              next(); // Isso fará com que só seja redirecionado para essa rota caso esteja autenticado;
            } else {
              console.log("Retorna para o usuário alguma interação ou realiza outra ação, como redirecionar para o login, para que não fique travado na tela sem saber o que está acontecendo")
            }
          }
        },
        { path: ':id/editar', component: UsuarioEditar, props: true, name: "editarUsuario" },
      ]
    },
  ]
})

routes.beforeEach((to, from, next) => {
  // Esse é um método de interceptação global de rotas, de modo que é possível fazer validações, para permitir ou não o prosseguimento da navegação. Um caso de uso interessante seria para o caso de ser necessário estar com algum tipo de autenticação em todas as rotas para poder navegar na aplicação.
  // to é de para onde está vindo, from é de onde está vindo e next permite seguir em frente ou não.

  console.log("Interceptação global de rotas, antes de iniciar a navegação");
  next(); // é possível interromper a navegação não colocando o next ou passando false como parãmetro.
})

export default routes;