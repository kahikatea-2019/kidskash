import request from 'superagent'

export function retrieveAllChildren () {
  return request.get('/v1/children')
    .then(resp => {
      const children = resp.body
      return children
    })
    .catch(() => {
      throw Error('Requires /v1/children api route')
    })
}
