import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ChildLogin from './ChildLogin'
import ChildDashboard from './ChildDashboard'
// import xyz from actions

class AppRoutes extends React.Component {
  render () {
    return (

      <div>

        <Router>
          <Switch>
            <Route exact path='/' component={ChildLogin} />
            <Route exact path='/dashboard' component={ChildDashboard} />

          </Switch>
        </Router>

      </div>

    )
  }
}

export default AppRoutes
