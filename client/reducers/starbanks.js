import { RECEIVE_STARBANKS, UPDATE_STARBANK } from '../actions/starbanks'

const initialStarBanksState = []

function retrieveAllStarBanks (state = initialStarBanksState, action) {
  switch (action.type) {
    case RECEIVE_STARBANKS:
      return action.starbanks

    case UPDATE_STARBANK:
      const updatedStarBanks = [ ...state ]

      updatedStarBanks.forEach(starBank => {
        if (starBank.id === action.childId) {
          starBank.boxed_stars = action.boxedStars
        }
      })

      return updatedStarBanks

    default:
      return state
  }
}

export default retrieveAllStarBanks
