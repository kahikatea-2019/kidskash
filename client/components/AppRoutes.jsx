import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

// Component Imports
import ChildLogin from './ChildLogin'
import ChildDashboard from './ChildDashboard'

function AppRoutes (props) {
  return (
    <div>
      <Router>
        {(props.activePage === 'child-login' ? <ChildLogin /> : <ChildDashboard />)}
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activePage: state.navigate.activePage
  }
}

export default connect(mapStateToProps)(AppRoutes)
