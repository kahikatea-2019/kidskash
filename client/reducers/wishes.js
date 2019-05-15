import { RECEIVE_WISHES, ADD_WISH_SUCCESS, ADD_STAR, REMOVE_STAR } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_WISH_SUCCESS:
      return action.wish

    case ADD_STAR:
      return action.star

    case REMOVE_STAR:
      return action.star

    default:
      return state
  }
}

export default retrieveAllWishes
