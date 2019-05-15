import React from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

// component calls
import AppRoutes from './AppRoutes'

// action calls
import { retrieveAllChildren } from '../actions/children'
import { retrieveAllWishes } from '../actions/wishes'
import { retrieveAllStarBanks } from '../actions/starbanks'

const theme = createMuiTheme()

console.log(theme)
// awaiting starbanks get route && db function

function App (props) {
  const { dispatch } = props
  dispatch(retrieveAllChildren())
  dispatch(retrieveAllWishes())
  dispatch(retrieveAllStarBanks())
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppRoutes/>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default connect()(App)
