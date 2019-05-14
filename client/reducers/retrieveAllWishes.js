import { RECEIVE_WISHES, ADD_WISH_SUCCESS } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_WISH_SUCCESS:
      return action.wish

    default:
      return state
  }
}

export default retrieveAllWishes
