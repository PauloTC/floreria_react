import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './Admin'


const Router = () => (

  <BrowserRouter>
    <Switch>
      <Route exact  path="/" component={App}  />
      <Route  path="/admin/login" component={Admin}  />
    </Switch>  
  </BrowserRouter>
)

export default Router;