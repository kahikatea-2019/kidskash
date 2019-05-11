import { RECEIVE_WISHES } from '../actions/wishes'

function retrieveAllWishes (state = [], action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes
    default:
      return state
  }
}

export default retrieveAllWishes
