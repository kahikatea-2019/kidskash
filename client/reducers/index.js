import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import retrieveAllWishes from './retrieveAllWishes'
import navigate from './navigate'

export default combineReducers({
  retrieveAllChildren,
  retrieveAllWishes,
  navigate

})