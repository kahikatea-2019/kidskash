import { RECEIVE_CHILDREN } from '../actions/children'

function retrieveAllChildren (state = [], action) {
  switch (action.type) {
    case RECEIVE_CHILDREN:
      return action.children
    default:
      return state
  }
}

export default retrieveAllChildren
