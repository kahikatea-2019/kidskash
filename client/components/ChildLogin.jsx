import React from 'react'
import { connect } from 'react-redux'

import ChildLoginEntry from './ChildLoginEntry'

function ChildLogin (props) {
  const { children } = props
  const loginArray = children.map(child => {
    return <ChildLoginEntry key={child.id} child={child} />
  })

  console.log(`children `, children)
  console.log('loginArray ', loginArray)

  return (
    <React.Fragment>
      <center>
        <h1>KIDS - KA$H</h1>
        <div className="login-frame">{loginArray}</div>

      </center>
    </React.Fragment>

  )
}

function mapStateToProps (state) {
  return {
    children: state.children
  }
}

export default connect(mapStateToProps)(ChildLogin)
