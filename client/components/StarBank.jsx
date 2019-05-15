import React from 'react'
import { connect } from 'react-redux'

class StarBank extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { boxed_stars,child_id} = this.props.starbanks
    const { starbanks, currentUser } = this.props
    const currentStarBank = starbanks.find(starbank => {
      return (starbank.child_id === currentUser)
    })
   const thisStarBox = currentStarBank.boxed_stars

    return (
      <React.Fragment>
        <div className="starbox">

          <div className="starbox">{thisStarBox}</div>
         
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
