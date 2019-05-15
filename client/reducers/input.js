import { createForms } from 'react-redux-form'

import wishes from './wishes'

export const wish = {
  child_id: '',
  content: '',
  stars: ''
}

export default createForms({
  wish,
  wishes
})
