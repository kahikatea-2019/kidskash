import React from 'react'
import { connect } from 'react-redux'

// import component
import Wish from './Wish'

class WishList extends React.Component {
  constructor (props) {
    super(props)

    this.retrieveChildWishes = this.retrieveChildWishes.bind(this)
  }

  retrieveChildWishes () {
    const { wishes, currentUser } = this.props
    const childWishes = wishes.map(wish => {
      if (wish.child_id === currentUser) {
        return <Wish key={wish.id} wish={wish} />
      }
    })
    return childWishes
  }

  render () {
    const childWishes = this.retrieveChildWishes()
    return (
      <div className='wishlist'>
        <h2>Wishes</h2>
        {childWishes}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    wishes: state.wishes,
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(WishList)
