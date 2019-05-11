import request from 'superagent'

export const RETRIEVE_ALL_WISHES = 'RETRIEVE_ALL_WISHES'
export const REQUEST_WISHES = 'REQUEST_WISHES'
export const RECEIVE_WISHES = 'RECIEVE_WISHES'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestWishes = () => {
  return {
    type: REQUEST_WISHES
  }
}

export const receiveWishes = (wishes) => {
  return {
    type: RECEIVE_WISHES,
    wishes: wishes.map(wish => wish)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function retrieveAllWishes () {
  return (dispatch) => {
    request.get('/v1/wishes')
      .then(response => {
        dispatch(receiveWishes(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}