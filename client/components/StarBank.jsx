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
        <div className="starbox">

          <h2>My StarBox</h2>
          <div className="boxed-stars">{thisStarBox}</div>

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
