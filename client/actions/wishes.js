import request from 'superagent'

export const REQUEST_WISHES = 'REQUEST_WISHES'
export const RECEIVE_WISHES = 'RECEIVE_WISHES'
export const GET_WISH_PENDING = 'GET_WISH_PENDING'
export const ADD_WISH_SUCCESS = 'ADD_WISH_SUCCESS'
export const ADD_NEW_WISH = 'ADD_NEW_WISH'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestWishes = () => {
  return {
    type: REQUEST_WISHES
  }
}

export const receiveWishes = (wishes) => {
  return {
    type: RECEIVE_WISHES,
    wishes
  }
}

export function getWishPending () {
  return {
    type: GET_WISH_PENDING
  }
}

export function addWishSuccess (wish) {
  return {
    type: ADD_WISH_SUCCESS,
    wish
  }
}

export const addWish = (wish) => {
  return {
    type: ADD_NEW_WISH,
    wish
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

export function addNewWish (newWish) {
  return dispatch => {
    dispatch(getWishPending())
    return request.post('/v1/wishes')
      .send(newWish)
      .then(res => {
        dispatch(addWishSuccess(res.body))
      })
      .catch(err => dispatch(showError(err.message)))
  }
}
