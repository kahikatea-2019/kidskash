import { RECEIVE_WISHES, ADD_WISH_SUCCESS, UPDATE_STAR } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_WISH_SUCCESS:
      return action.wish

    case UPDATE_STAR:
      return state.map(wish => {
        if (wish.id === action.wishId) {
          wish.allocated_stars = action.newAllocated
        }
        return wish
      })

    default:
      return state
  }
}

export default retrieveAllWishes
