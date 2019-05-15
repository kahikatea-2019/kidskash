import retrieveAllChildren from '../../../client/reducers/children'

test('reducer populates some initial state', () => {
  const newState = retrieveAllChildren(undefined, '@@INIT')
  expect(Array(newState.children)).toBeTruthy()
})

test('reducer returns current state when action does not match ', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }, { 3: 3 }]

  const action = {
    type: 'RECEIVE_CHILDREN',
    children: currentState
  }
  const newState = retrieveAllChildren(currentState, action)

  expect(newState.length).toBe(4)
  expect(newState).toBe(currentState)
})

test('reducer handles RECEIVE_CHILDREN correctly ', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }, { 3: 3 }]
  const action = {
    type: 'UNKNOWN_ACTION'
  }
  const newState = retrieveAllChildren(currentState, action)
  expect(newState).toBe(currentState)
})
