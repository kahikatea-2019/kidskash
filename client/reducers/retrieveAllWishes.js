import { RECEIVE_WISHES, ADD_WISH_SUCCESS, DELETE_WISH } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_WISH_SUCCESS:
      return action.newWish

    default:
      return state
  }
}

export default retrieveAllWishes
