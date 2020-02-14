import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Usuario from './components/usuarios/Usuario';
import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe';
import UsuarioEditar from './components/usuarios/UsuarioEditar';
import UsuarioLista from './components/usuarios/UsuarioLista';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio
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