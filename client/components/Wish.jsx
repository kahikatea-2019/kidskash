import React from 'react'

class Wish extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { id, content, stars, stars2, child_id } = this.props.wish
    return (
      <React.Fragment>
        <div className="individual-wish-content">
          <div className="wish">{content}</div>
          <div className="required-stars">{stars}</div>
          <div className="allocated-stars">{stars2}</div>
          <button className="increment-button">+</button>
          <button className="decrement-button">-</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Wish
