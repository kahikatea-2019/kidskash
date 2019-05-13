import { combineReducers } from 'redux'

import retrieveAllChildren from './retrieveAllChildren'
import input from './input'

export default combineReducers({
  retrieveAllChildren,
  ...input
})
