import React from 'react'
import { connect } from 'react-redux'
import {addStarToWish, removeStarFromWish  } from '../actions/wishes'

class Wish extends React.Component {
  constructor (props) {
    super(props)

    this.incrementClick = this.incrementClick.bind.this
    this.decrementClick = this.decrementClick.bind.this 
  }
    incrementClick(wishId) {
      const {dispatch } = this.props
      dispatch(addStarToWish(wishId))
    }

    decrementClick(startbankId) {
      const {dispatch } = this.props
      dispatch(removeStarFromWish(startbankId))
    }
  
  //   const { dispatch } = props

  //   this.increment = this.increment.bind(this)
  // }

  // increment (wishId, child_id) {
  //   this.dispatch(addStarToWish(wishId))
  //   dispatch(removeStarFromStarBank(child_id))
  // }
  // const { id, content, stars, stars2, child_id } = this.props

  render () {
    const { id, content, stars, stars2, child_id } = this.props.wish
    return (
      <React.Fragment>
        <div className="individual-wish-content">
        <div className="wish">{content}</div>
          <div className="required-stars">{stars}</div>
          <div className="allocated-stars">{stars2}</div>
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
export default connect(mapStateToProps)(Wish)
