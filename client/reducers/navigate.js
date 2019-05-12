import { NAVIGATE } from '../actions/navigate'
import { DASHBOARD } from '../actions/dashboard'

const initialNavigationState = {
  activePage: 'child-login'
}

function navigate (state = initialNavigationState, action) {
  switch (action.type) {
    case NAVIGATE:
      return {
        activePage: action.target
      }
    case DASHBOARD:
      return {
        activePage: 'dashbaord'
      }
    default:
      return state
  }
}

export default navigate
