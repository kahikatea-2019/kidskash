import React from 'react'
import { connect } from 'react-redux'

class StarBank extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <div className= 'bank'>
          <h2>Star Bank</h2>
          <div className="allocated-stars">stars2</div>
        </div>
      </React.Fragment>
    )
  }
}
function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps)(StarBank)
