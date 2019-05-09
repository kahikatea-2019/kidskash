import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HelloWorld from './HelloWorld'

// import xyz from actions

class AppRoutes extends React.Component {
  render () {
    return (

      <div>
        <h2>renders AppRoutes.jsx</h2>

        <Router>
          <Switch>
            <Route exact path='/' component={HelloWorld} />

          </Switch>
        </Router>

      </div>

    )
  }
}

export default AppRoutes
