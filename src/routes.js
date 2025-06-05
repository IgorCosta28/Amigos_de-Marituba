import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Lideres = React.lazy(() => import('./views/regencia/Lideres'))
const Cidadoes = React.lazy(() => import('./views/regencia/Cidadoes'))
const Relatorios = React.lazy(() => import('./views/servicos/Relatorios/Relatorios'))
const Agendamentos = React.lazy(() => import('./views/servicos/consultas/Agendamentos'))

const Settings = React.lazy(() => import('./views/settings/Settings'))

const routes = [
  { path: '/dashboard', name: 'Home', element: Dashboard },
  { path: '/relatorios', name: 'Relatorios', element: Relatorios },
  { path: '/lideres', name: 'Lideres', element: Lideres },
  { path: '/cidadoes', name: 'Cidadões', element: Cidadoes },
  { path: '/agendamentos', name: 'Agendamentos', element: Agendamentos,  },
  { path: '/settings', name: 'Settings', element: Settings },
]

export default routes
