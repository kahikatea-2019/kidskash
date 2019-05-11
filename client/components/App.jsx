import React from 'react'
import { connect } from 'react-redux'

// component calls
import AppRoutes from './AppRoutes'
import PopUpMessage from './PopUpMessage'

// action calls
import { retrieveAllChildren } from '../actions/children'

function App (props) {
  props.dispatch(retrieveAllChildren())
  return (
    // test your components by dropping them where <HelloWolrd/> is
    <React.Fragment>
      <AppRoutes/>
      <PopUpMessage />
    </React.Fragment>
  )
}

export default connect()(App)
