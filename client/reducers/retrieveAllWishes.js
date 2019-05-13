import { RECEIVE_WISHES, ADD_NEW_WISH, DELETE_WISH } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_NEW_WISH:
      return [
        ...state,
        action.wish]

    case DELETE_WISH:
      return state.filter(wish => wish.id !== action.id)

    default:
      return state
  }
}

export default retrieveAllWishes
