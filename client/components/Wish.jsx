import React from "react"
import { connect } from "react-redux"

// import actions
import { updateStars } from "../actions/wishes"
import { updateStarBanks } from "../actions/starbanks"

class Wish extends React.Component {
  incrementClick = (
    wishId,
    childId,
    allocatedStars,
    boxedStars,
    required_stars
  ) => {
    const { dispatch } = this.props
    const newAllocated = allocatedStars + 1
    const newBoxed = boxedStars - 1

    if (newAllocated <= required_stars && boxedStars !== 0) {
      dispatch(updateStars(wishId, newAllocated))
      dispatch(updateStarBanks(childId, newBoxed))
    }
  }

  decrementClick = (wishId, childId, allocatedStars, boxedStars) => {
    const { dispatch } = this.props
    const newAllocated = allocatedStars - 1
    const newBoxed = boxedStars + 1

    if (newAllocated >= 0) {
      dispatch(updateStars(wishId, newAllocated))
      dispatch(updateStarBanks(childId, newBoxed))
    }
  }

  render() {
    const {
      id,
      content,
      required_stars,
      allocated_stars,
      child_id
    } = this.props.wish
    const { starbanks, currentUser } = this.props
    const currentStarBank = starbanks.find(box => {
      return box.child_id === currentUser
    })
    const boxedStars = currentStarBank.boxed_stars

    return (
      <React.Fragment>
        <div className='individual-wish-content'>
          <table>
            <tr>
              <div>
                <td>
                  <div className='wish'>
                    <p>{content}</p>
                  </div>
                </td>
                <td>
                  <div className='required-stars'>
                    <p>{required_stars}</p>
                  </div>
                </td>
                <td>
                  <div className='allocated-stars'>
                    <p>{allocated_stars}</p>
                  </div>
                </td>
              </div>
            </tr>
          </table>
          <div className='button-wrapper'>
            <button
              onClick={() =>
                this.incrementClick(
                  id,
                  child_id,
                  allocated_stars,
                  boxedStars,
                  required_stars
                )
              }
              className='increment-button'
            >
              +
            </button>
            <button
              onClick={() =>
                this.decrementClick(id, child_id, allocated_stars, boxedStars)
              }
              className='decrement-button'
            >
              -
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    starbanks: state.starbanks,
    currentUser: state.navigate.currentUser
  }
}
export default connect(mapStateToProps)(Wish)
