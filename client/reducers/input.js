import { createForms } from 'react-redux-form'

import retrieveAllWishes from './retrieveAllWishes'

export const wish = {
  child_id: '',
  content: '',
  stars: ''
}

export default createForms({
  wish,
  retrieveAllWishes
})
