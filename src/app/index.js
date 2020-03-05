import React from 'react'
import { NavLink, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './route'
import './index.css'

export default function App() {
  return (
    <div>
      <div>
        <NavLink exact to='/'>
          home
        </NavLink> | &nbsp;
        <NavLink to='/detail'>detail</NavLink>
      </div>
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  )
}
