import retriveAllWishes from '../../../client/reducers/retrieveAllWishes'

test('reducer populates some initial state', () => {
  const newState = retriveAllWishes(undefined, '@@INIT')
  expect(Array.isArray(newState.wishes)).toBeTruthy()
})

