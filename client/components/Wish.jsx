import React from 'react'
import { connect } from 'react-redux'

class Wish extends React.Component {
  // constructor (props) {
  //   super(props)

  //   const { dispatch } = props

  //   this.increment = this.increment.bind(this)
  // }

  // increment (wishId, child_id) {
  //   this.dispatch(addStarToWish(wishId))
  //   dispatch(removeStarFromStarBank(child_id))
  // }
  // const { id, content, stars, stars2, child_id } = this.props

  render () {
    return (
      <React.Fragment>
        <div className="individual-wish-content">
          <div className="wish">content</div>
          <div className="required-stars">stars</div>
          <div className="allocated-stars">stars2</div>
          <button className="increment-button">+</button>
          <button className="decrement-button">-</button>
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
