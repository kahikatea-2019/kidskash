import React from 'react'
import { connect } from 'react-redux'
import { addStarToStarbank, removeStarFromStarbank } from '../actions/starbanks'

class StarBank extends React.Component {
  constructor (props) {
    super(props)

    this.incrementClick = this.incrementClick.bind.this
    this.decrementClick = this.decrementClick.bind.this
  }
  incrementClick (wishId) {
    const { dispatch } = this.props
    dispatch(addStarToStarbank(wishId))
  }

  decrementClick (startbankId) {
    const { dispatch } = this.props
    dispatch(removeStarFromStarbank(startbankId))
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <h2>This is where I will see my collection of stars from great behaviour and helping out</h2>
          <div className="allocated-stars">stars2</div>
          <button onClick ={this.incrementClick} className="increment-button">+</button>
          <button onClick ={this.decrementClick} className="decrement-button">-</button>
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
