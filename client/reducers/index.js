import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllWishes from './retrieveAllWishes'
import retrieveAllStarBanks from './retrieveAllStarBanks'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllWishes,
  retrieveAllStarBanks
})
