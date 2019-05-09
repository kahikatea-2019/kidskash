import React from 'react'
import { shallow } from 'enzyme'

import Welcome from '../../../client/components/Welcome'

Welcome.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

describe('Welcome', () => {
  it('Welcome should render correctly in "debug" mode', () => {
    const component = shallow(<Welcome debug />)
    expect(component).toMatchSnapshot()
  })
})
