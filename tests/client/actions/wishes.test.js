import { requestWishes, receiveWishes } from '../../../client/actions/wishes'

test('requestWishes creates a correct action', () => {
  const action = requestWishes()
  expect(action.type).toBe('REQUEST_WISHES')
})

test('receiveWishes creates a correct action', () => {
  const name = 'test wishes'
  const action = receiveWishes(name)
  expect(action.type).toBe('RECEIVE_WISHES')
  expect(action.wishes).toBe(name)
})
