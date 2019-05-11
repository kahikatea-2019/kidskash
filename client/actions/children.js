import request from 'superagent'

export const RETRIEVE_ALL_CHILDREN = 'RETRIEVE_ALL_CHILDREN'
export const REQUEST_CHILDREN = 'REQUEST_CHILDREN'
export const RECEIVE_CHILDREN = 'RECEIVE_CHILDREN'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestChildren = () => {
  return {
    type: REQUEST_CHILDREN
  }
}

export const receiveChildren = (children) => {
  return {
    type: RECEIVE_CHILDREN,
    children: children.map(child => child)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function retrieveAllChildren () {
  return (dispatch) => {
    request.get('/v1/children')
      .then(response => {
        dispatch(receiveChildren(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
