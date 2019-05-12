import React from 'react'
import { connect } from 'react-redux'
import * as wishesAction from '../actions/wishes'
class WishList extends React.Component  {
 
    deleteWish (e,id) {
      e.preventDefault()
      this.props.deleteWish(id)
    }

    receiveWish(wish) {
      const {id,content,stars} = wish
      return(
        <tr key={id} className='wish' onClick={() => this.props.deleteWish(id)}>
        <td className="item-content">{content}</td>
        <td className="stars" style={{ backgroundImage: '' }}>{stars}</td>
        </tr>
      )
    }
 

  render() {
  return (
    <div className='wishllist'>
      <h2>Mum/Dad: These are what i want :</h2>
        <hr/>
    <table className="u-full-width">
      <thead>
        <tr>
          <th className="item-content">Wishes</th>
          <th className="stars">Stars</th>
        </tr>
      </thead>
      <tbody>
        {this.props.wishes.map(wish => this.receiveWish(wish))}
      </tbody>
    </table>
    </div>
  )
}
}

const mapStateToProps = ({ wishes }) => {
  return {
    wishes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteWish: id => dispatch(wishesAction.deleteWish(id)),
    addWish: wish => dispatch(wishesAction.addWish(wish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishes)

