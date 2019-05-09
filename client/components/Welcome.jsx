import React, { Component } from 'react'
import { connect } from 'react-redux'

class Welcome extends Component {
  render () {
    return (
      <h2>Welcome</h2>
    )
  }
}
function mapStateToProps (state) {
  return {
  }
}
export default connect(mapStateToProps)(Welcome)
