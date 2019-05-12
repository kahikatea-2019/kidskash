import { RECEIVE_WISHES } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes
    default:
      return state
  }
}

export default retrieveAllWishes
