import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from "./components/templates/Menu";
import Usuario from './components/usuarios/Usuario';
import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe';
import UsuarioEditar from './components/usuarios/UsuarioEditar';
import UsuarioLista from './components/usuarios/UsuarioLista';

Vue.use(Router);

export default new Router({
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
        { path: ':id', component: UsuarioDetalhe, props: true, name: "detalheUsuario" },
        { path: ':id/editar', component: UsuarioEditar, props: true, name: "editarUsuario" },
      ]
    },
  ]
})