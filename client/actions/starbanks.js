import request from 'superagent'

export const RETRIEVE_ALL_STARBANKS = 'RETRIEVE_ALL_STARBANKS'
export const REQUEST_STARBANKS = 'REQUEST_STARBANKS'
export const RECEIVE_STARBANKS = 'RECEIVE_STARBANKS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const UPDATE_STARBANK = 'UPDATE_STARBANK'
export const REMOVE_STARBANK = 'REMOVE_STARBANK'

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
export const updateStarsInStarBank = (childId, newBoxed) => {
  return {
    type: UPDATE_STARBANK,
    childId,
    newBoxed
  }
}

export function updateStarBanks (childId, newBoxed) {
  return (dispatch) => {
    request.put('/v1/starbanks')
      .send({ childId, newBoxed })
      .then(dispatch(updateStarsInStarBank(childId, newBoxed)))
      .then(dispatch(retrieveAllStarBanks()))
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const removeStarFromStarbank = (star, value) => {
  return {
    type: REMOVE_STARBANK,
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
