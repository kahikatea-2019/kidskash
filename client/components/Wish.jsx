import React from 'react'
import { connect } from 'react-redux'

// import actions
import { addStarToWish, removeStarFromWish } from '../actions/wishes'
import { addStarToStarbank, removeStarFromStarbank } from '../actions/starbanks'

class Wish extends React.Component {
  constructor (props) {
    super(props)

    this.incrementClick = this.incrementClick.bind.this
    this.decrementClick = this.decrementClick.bind.this
  }
  incrementClick (wishId, childId, allocatedStars, boxedStars) {
    const { dispatch } = this.props
    const newAllocated = allocatedStars + 1
    const newBoxed = boxedStars - 1
    dispatch(addStarToWish(wishId, newAllocated))
    dispatch(removeStarFromStarbank(childId, newBoxed))
  }

  decrementClick (wishId, childId) {
    const { dispatch } = this.props
    dispatch(removeStarFromWish(wishId))
    dispatch(addStarToStarbank(childId))
  }

  render () {
    const { id, content, stars, stars2, child_id } = this.props.wish
    const { starbanks, currentUser } = this.props
    const currentStarBank = starbanks.find(box => {
      return (box.child_id === currentUser)
    })
    const boxedStars = currentStarBank.stars
    console.log('starbank: ', starbanks, currentStarBank)
    console.log('boxedStars: ', boxedStars)

    return (
      <React.Fragment>
        <div className="individual-wish-content">
          <div className="wish">{content}</div>
          <div className="required-stars">{stars}</div>
          <div className="allocated-stars">{stars2}</div>
          <button onClick ={() => this.incrementClick(id, child_id, stars2, boxedStars)} className="increment-button">+</button>
          <button onClick ={() => this.decrementClick(id, child_id, stars2, boxedStars)} className="decrement-button">-</button>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    starbanks: state.starbanks,
    currentUser: state.navigate.currentUser
  }
}
export default connect(mapStateToProps)(Wish)
