import request from 'superagent'

export const RETRIEVE_ALL_STARBANKS = 'RETRIEVE_ALL_STARBANKS'
export const REQUEST_STARBANKS = 'REQUEST_STARBANKS'
export const RECEIVE_STARBANKS = 'RECEIVE_STARBANKS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const ADD_STAR = 'ADD_STAR'
export const REMOVE_STAR = 'REMOVE_STAR'

export const requestAllStarBanks = () => {
  return {
    type: REQUEST_STARBANKS
  }
}

export const receiveAllStarBanks = (starbanks) => {
  return {
    type: RECEIVE_STARBANKS,
    starbanks
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

// Wish-Star2
export const addStarToStarbank = (star, value) => {
  return {
    type: ADD_STAR,
    star,
    value
  }
}

export const removeStarFromStarbank = (star, value) => {
  return {
    type: REMOVE_STAR,
    star,
    value
  }
}

// Api
export function retrieveAllStarBanks () {
  return (dispatch) => {
    request.get('/v1/starbanks')
      .then(response => {
        dispatch(receiveAllStarBanks(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

