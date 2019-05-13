import { RECEIVE_STARBANKS } from '../actions/starbanks'

const initialStarBanksState = []

function retrieveAllStarBanks (state = initialStarBanksState, action) {
  switch (action.type) {
    case RECEIVE_STARBANKS:
      return action.initialStarBanksState
    default:
      return state
  }
}

export default retrieveAllStarBanks
