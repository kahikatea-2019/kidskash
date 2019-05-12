import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllWishes from './retrieveAllWishes'
import input from './input'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllWishes,
  input
})
