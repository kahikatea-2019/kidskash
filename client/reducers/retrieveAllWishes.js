import { RECEIVE_WISHES, ADD_NEW_WISH } from '../actions/wishes'

function retrieveAllWishes (state = [], action) {
  switch (action.type) {
    case RECEIVE_WISHES:
      return action.wishes
    case ADD_NEW_WISH:
      return [
        ...state,
        Object.assign({},action.wish)
      ]
    default:
      return state
  }
}


export default retrieveAllWishes
