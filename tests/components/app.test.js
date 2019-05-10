import React from 'react'
import { shallow } from 'enzyme'
import App from '../../client/components/App'

test('test <App/> is set up correctly', () => {
  expect(true).toBe(true)
})

test('<App/> has 1 React.Fragment', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('React.Fragment').length).toBe(0)
})

const app = shallow(<App />)

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })
})
