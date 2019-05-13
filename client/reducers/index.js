import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllWishes from './retrieveAllWishes'
import retrieveAllStarBanks from './retrieveAllStarBanks'
import navigate from './navigate'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllWishes,
  retrieveAllStarBanks,
  navigate
})
