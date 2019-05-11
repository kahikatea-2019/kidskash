import { RECEIVE_CHILDREN } from '../actions/children'

const initialChildrenState = []
  

function retrieveAllChildren (state = initialChildrenState, action) {
  switch (action.type) {
    case RECEIVE_CHILDREN:
      return action.children
    default:
      return state
  }
}

export default retrieveAllChildren
