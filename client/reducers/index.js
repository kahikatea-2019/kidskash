import { combineReducers } from 'redux'

import children from './children'
import starbanks from './starbanks'
import navigate from './navigate'
import input from './input'

export default combineReducers({
  children,
  starbanks,
  navigate,
  ...input
})
