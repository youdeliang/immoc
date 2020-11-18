import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Admin from './admin'
import Home from './pages/home'
import Login from './pages/login'
import Buttons from './pages/ui/button'
export default class Router extends React.Component{
  render() {
    return (
      <HashRouter>
        <Admin>
          <Route path="/admin/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path='/admin/ui' component={() => (
            <Route path='/admin/ui/buttons' component={Buttons}  />
          ) }/>
        </Admin>
      </HashRouter>
    )
  }
}
