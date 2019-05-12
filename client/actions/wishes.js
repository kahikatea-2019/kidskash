import request from 'superagent'

import * as wishes from '../../server/db/wishes'

export const RETRIEVE_ALL_WISHES = 'RETRIEVE_ALL_WISHES'
export const REQUEST_WISHES = 'REQUEST_WISHES'
export const RECEIVE_WISHES = 'RECIEVE_WISHES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_NEW_WISH = 'ADD_NEW_WISH'
export const DELETE_WISH = 'DELETE_WISH'



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

export const addWish = (wish) => {
  return {
    type: ADD_NEW_WISH,
    wish:wishes.addWish(wish)
  }
}


export const deleteWish = id => {
    wishes.deleteWish(id)
    return {
      type: 'DELETE_WISH',
      id
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

export function appendWish () {
  return (dispatch) => {
    request.get('/v1/wishes')
      .then(response => {
        dispatch(addWish(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
