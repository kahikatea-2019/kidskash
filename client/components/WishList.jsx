import React from 'react'
import { connect } from 'react-redux'
import * as wishesAction from '../actions/wishes'

class WishList extends React.Component {
  receiveWish (wish) {
    const { id, content, stars } = wish
    return (
      <tr key={id} className='wish' onClick={() => this.deleteWish(id)}>
        <td className="item-content">{content}</td>
        <td className="stars" style={{ backgroundImage: '' }}>{stars}</td>
      </tr>
    )
  }

  render () {
    return (
      <div className='wishlist'>
        <h2>Wishlist</h2>
        
      </div>
    )
  }
}

const mapStateToProps = ({ wish }) => {
  return {
    wish
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWish: wish => dispatch(wishesAction.addWish(wish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)
