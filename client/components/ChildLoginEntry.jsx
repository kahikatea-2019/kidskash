import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

        <div className="child-login-entry-frame">
          <img src={display_URL} width="300" height="300"/>
          <h2>{child_name}</h2>
          <Button variant="contained" color="primary" className={'button'}><Link to="#" onClick={trigger}><Typography variant='h6'>Log in</Typography></Link>
          </Button>
        </div>

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
