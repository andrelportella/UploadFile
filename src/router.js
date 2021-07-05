import Vue from 'vue'
import Router from 'vue-router'
import Revista from './views/Search/Revista'
import Boletim from './views/Search/Boletim'
import Cartilha from './views/Search/Cartilha'
import Atendimento from './views/Search/Atendimento'
import CorregedoriaSelector from './views/Search/CorregedoriaSelector'
import CorregedoriaRegimento from './views/Search/CorregedoriaRegimento'
import CorregedoriaNormativo from './views/Search/CorregedoriaNormativo'
import NovaRevista from './views/Create/NovaRevista'
import NovoBoletim from './views/Create/NovoBoletim'
import NovaCartilha from './views/Create/NovaCartilha'
import NovoAtendimento from './views/Create/NovoAtendimento'
import { Login } from "scsdp-plugin";

Vue.use(Router)

const routes = [
    {
      name: "login",
      path: "/",
      component: Login
    },
    {
      name: 'revista',
      path: '/revista',
      component: Revista
    },
    {
      name: 'boletim',
      path: '/boletim',
      component: Boletim
    },
    {
      name: 'cartilha',
      path: '/cartilha',
      component: Cartilha
    },
    {
      name: 'atendimento',
      path: '/atendimento',
      component: Atendimento
    },
    {
      name: 'corregedoria',
      path: '/corregedoria',
      component: CorregedoriaSelector
    },
    {
      name: 'CorregedoriaRegimento',
    path: '/corregedoria-regimento',
    component: CorregedoriaRegimento
  },
  {
    name: 'CorregedoriaNormativo',
  path: '/corregedoria-normativo',
  component: CorregedoriaNormativo
  },
    {
      name: 'NovaRevista',
      path: '/nova-revista',
      component: NovaRevista
    },
    {
      name: 'NovoBoletim',
      path: '/novo-boletim',
      component: NovoBoletim
    },  {
      name: 'NovaCartilha',
      path: '/nova-cartilha',
      component: NovaCartilha
    },  {
      name: 'NovoAtendimento',
      path: '/novo-atendimento',
      component: NovoAtendimento
    }
  ]

const router = new Router({ routes })

export default router
