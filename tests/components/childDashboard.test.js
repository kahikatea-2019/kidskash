import React from 'react'
import { shallow } from 'enzyme'
import ChildDashboard from '../../client/components/ChildDashboard'
import { Provider } from 'react-redux'

import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
const store = mockStore({
  childDashboard: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 }
  ]
})

const childDashboard = shallow(<Provider store={store}><ChildDashboard /></Provider>)

test('test <ChildDashboard/> is set up correctly', () => {
  expect(true).toBe(true)
})

describe('ChildDashboard', () => {
  it('renders correctly', () => {
    expect(childDashboard).toMatchSnapshot()
  })
})
