import { createForms } from 'react-redux-form'

import wishes from './wishes'

export const wish = {
  child_id: '',
  content: '',
  required_stars: ''
}

export default createForms({
  wish,
  wishes
})
