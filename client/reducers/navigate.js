import { NAVIGATE, CURRENT_USER } from '../actions/navigate'
import { DASHBOARD } from '../actions/dashboard'

const initialNavigationState = {
  activePage: 'child-login',
  currentUser: null
}

function navigate (state = initialNavigationState, action) {
  switch (action.type) {
    case NAVIGATE:
      return {
        activePage: action.target
      }
    case DASHBOARD:
      return {
        activePage: 'dashboard'
      }
    case CURRENT_USER:
      return {
        currentUser: action.userId
      }
    default:
      return state
  }
}

export default navigate
