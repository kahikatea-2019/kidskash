import { createForms } from 'react-redux-form'

import retrieveAllWishes from './retrieveAllChildren'

export const wish = [ {
  child_id: '',
  content: '',
  stars: ''
}]

export default createForms({
  wish,
  retrieveAllWishes
})