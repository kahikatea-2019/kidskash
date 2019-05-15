import { RECEIVE_WISHES, ADD_WISH_SUCCESS, UPDATE_STAR } from '../actions/wishes'

const initialWishesState = []

function retrieveAllWishes (state = initialWishesState, action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes

    case ADD_WISH_SUCCESS:
      return action.wish

    case UPDATE_STAR:
      const updatedWishes = [ ...state ]

      updatedWishes.forEach(wish => {
        if (wish.id === action.wishId) {
          wish.allocated_stars = action.newAllocated
        }
      })

      return updatedWishes

    default:
      return state
  }
}

export default retrieveAllWishes
