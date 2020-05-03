/* eslint-disable no-unused-expressions */
import React from 'react'
import {  Switch } from 'react-router-dom'
import Route from './Route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Search from '../pages/Search'
import Schedule from '../pages/Schedule'
import Profile from '../pages/Profile'
import Event from '../pages/Events/Event'

const Routes = () => (
  <Switch>
    <Route path="/entrar" exact component={SignIn}/>
    <Route path="/cadastrar" exact component={SignUp}/>
    <Route 
      path="/" 
      exact 
      component={Dashboard} 
      isPrivate 
      title="Bem vindo"
    />
  <Route 
    path="/procurar" 
    isPrivate 
    component={Search}
    title="Procure por eventos"
  />
  <Route 
    path="/calendario" 
    isPrivate 
    component={Schedule}
    title="Calendário"
  />
  <Route 
    path="/perfil" 
    isPrivate 
    component={Profile}
    title="Perfil"
  />
  <Route 
    path="/evento/:id" 
    isPrivate 
    component={Event}
    layout="blank"
  />
  </Switch>
)

export default Routes
