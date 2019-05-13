import React from 'react'
import { connect } from 'react-redux'

// component calls
import AppRoutes from './AppRoutes'

// action calls
import { retrieveAllChildren } from '../actions/children'
import { retrieveAllWishes } from '../actions/wishes'
import MaterialUi from './MaterialUi';
// awaiting starbanks get route && db function

function App (props) {
  const { dispatch } = props
  dispatch(retrieveAllChildren())
  dispatch(retrieveAllWishes())
  return (
    <React.Fragment>
      <AppRoutes/>
      <MaterialUi/>
    </React.Fragment>
  )
}

export default connect()(App)
