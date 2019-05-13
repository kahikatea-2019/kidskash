import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Action Imports
import { navigate, currentUser } from '../actions/navigate'

class ChildLoginEntry extends React.Component {
  render () {
    const { child, dispatch } = this.props
    const { id, child_name, display_URL } = child
    const userId = id

    function trigger () {
      dispatch(navigate('dashboard'))
      dispatch(currentUser(userId))
    }

    return (

      <React.Fragment>
        <Link to="#" onClick={trigger}>
          <div className="child-login-entry-frame">
            <img src={display_URL} width="300" height="300"/>
            <h2>{child_name}</h2>
          </div>
        </Link>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(ChildLoginEntry)
