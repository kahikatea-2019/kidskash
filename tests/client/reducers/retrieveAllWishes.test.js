import retrieveAllWishes from '../../../client/reducers/wishes'

test('reducer populates some initial state', () => {
  const newState = retrieveAllWishes(undefined, '@@INIT')
  expect(Array(newState.wishes)).toBeTruthy()
})

test('reducer handles RECEIVE_WISHES correctly', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }]

  const action = {
    type: 'UNKNOWN_ACTION'
  }
  const newState = retrieveAllWishes(currentState,
    action)
  expect(newState).toBe(currentState)
})

test('reducer returns current state when action does not match', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }]

  const action = {
    type: 'RECEIVE_WISHES',
    wishes: currentState
  }
  const newState = retrieveAllWishes(currentState, action)

  expect(newState.length).toBe(3)
  expect(newState).toBe(currentState)
})
