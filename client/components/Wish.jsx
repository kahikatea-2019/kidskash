import React from 'react'
import { connect } from 'react-redux'

// import actions
import { updateStarsInWish } from '../actions/wishes'
import { updateStarsInStarBank } from '../actions/starbanks'

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
    dispatch(updateStarsInWish(wishId, newAllocated))
    dispatch(updateStarsInStarBank(childId, newBoxed))
  }

  decrementClick (wishId, childId, allocatedStars, boxedStars) {
    const { dispatch } = this.props
    const newAllocated = allocatedStars - 1
    const newBoxed = boxedStars + 1
    dispatch(updateStarsInWish(wishId, newAllocated))
    dispatch(updateStarsInStarBank(childId, newBoxed))
  }

  render () {
    const { id, content, required_stars, allocated_stars, child_id } = this.props.wish
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
          <div className="required-stars">{required_stars}</div>
          <div className="allocated-stars">{allocated_stars}</div>
          <button onClick ={() => this.incrementClick(id, child_id, allocated_stars, boxedStars)} className="increment-button">+</button>
          <button onClick ={() => this.decrementClick(id, child_id, allocated_stars, boxedStars)} className="decrement-button">-</button>
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
