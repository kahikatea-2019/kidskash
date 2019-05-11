import { requestChildren, receiveChildren } from '../../../client/actions/children'

test('requestChildren creates a correct action', () => {
  const action = requestChildren()
  expect(action.type).toBe('REQUEST_CHILDREN')
})

test('receiveChildren creates a correct action', () => {
  const name = 'test children'
  const action = receiveChildren(name)
  expect(action.type).toBe('RECEIVE_CHILDREN')
  expect(action.children).toBe(name)
})
