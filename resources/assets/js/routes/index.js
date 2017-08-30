import React from 'react'
import {Router, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//Layouts
import Simple from '../ui/layouts/simple'
import Main from '../ui/layouts/main'

//Pages
import Login from '../ui/pages/login'
import Dashboard from '../ui/pages/dashboard'

const history = createBrowserHistory()

const Routes = () => (
	<Router history={history}>
    <Main>
      <Route exact path="/" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
    </Main>
  </Router>
)

export default Routes
