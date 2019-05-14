import React from './react'
import { connect } from 'react-redux'

class Wish extends React.Component {

  const { id, content, stars, stars2, child_id } = this.props
  
  function increment (wishId) {
    dispatch(addStarToWish())
    dispatch(removeStarFromStarBank())

  }

  render () {
    return (
      <React.Fragment>
        <div className="individual-wish-content">
          <div className="wish"></div>
          <div className="required-stars">{stars}</div>
          <div className="allocated-stars">{stars2}</div>
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
