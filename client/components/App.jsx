import React from 'react'
import { connect } from 'react-redux'

// component calls
import AppRoutes from './AppRoutes'

// action calls
import { retrieveAllChildren } from '../actions/children'
import { retrieveAllWishes } from '../actions/wishes'

function App (props) {
  const { dispatch } = props
  dispatch(retrieveAllChildren())
  dispatch(retrieveAllWishes())
  return (
    <React.Fragment>
      <AppRoutes/>
    </React.Fragment>
  )
}

export default connect()(App)
