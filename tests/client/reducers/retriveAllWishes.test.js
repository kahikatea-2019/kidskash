import retriveAllWishes from '../../../client/reducers/retrieveAllWishes'

test('reducer populates some initial state', () => {
  const newState = retriveAllWishes(undefined, '@@INIT')
  expect(Array(newState.wishes)).toBeTruthy()
})

test('reducer handles RECEIVE_WISHES correctly', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }]

  const action = {
    type: 'UNKNOWN_ACTION'
  }
  const newState = retriveAllWishes(currentState,
    action)
  expect(newState).toBe(currentState)
})

test('reducer returns current state when action does not match', () => {
  const currentState = [{ 0: 0 }, { 1: 1 }, { 2: 2 }]

  const action = {
    type: 'RECEIVE_WISHES',
    wishes: currentState
  }
  const newState = retriveAllWishes(currentState, action)

  expect(newState.length).toBe(3)
  expect(newState).toBe(currentState)
})
