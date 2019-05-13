import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllStarBanks from './retrieveAllStarBanks'
import navigate from './navigate'
import input from './input'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllStarBanks,
  navigate,
  ...input
})
