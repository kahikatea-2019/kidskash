import React from 'react'
import { connect } from 'react-redux'

class StarBank extends React.Component {
  render () {
    const { starbanks, currentUser } = this.props
    const currentStarBank = starbanks.find(starbank => {
      return (starbank.child_id === currentUser)
    })
    const thisStarBox = currentStarBank.boxed_stars

    return (
      <React.Fragment>
        <div className= 'bank'>

          <h2>My StarBox</h2>
          <div className="allocated-stars">{thisStarBox}</div>

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

export default connect(mapStateToProps)(StarBank)
