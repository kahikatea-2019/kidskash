import React from 'react'
import { connect } from 'react-redux'

class StarBank extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <h2>This is where I will see my collection of stars from great behaviour and helping out</h2>
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
