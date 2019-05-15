import { RECEIVE_STARBANKS, ADD_STAR, REMOVE_STAR } from '../actions/starbanks'

const initialStarBanksState = []

function retrieveAllStarBanks (state = initialStarBanksState, action) {
  switch (action.type) {
    case RECEIVE_STARBANKS:
      return action.starbanks

    case ADD_STAR:
      return action.star 
    
    case REMOVE_STAR:
      return action.star
    default:
      return state
  }
}

export default retrieveAllStarBanks
