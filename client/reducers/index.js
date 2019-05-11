import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllWishes from './retrieveAllWishes'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllWishes
})
