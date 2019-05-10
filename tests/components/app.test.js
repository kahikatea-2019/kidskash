import React from 'react'
import { shallow } from 'enzyme'
import App from '../../client/components/App'


const app = shallow(<App />)

test('test <App/> is set up correctly', () => {
  expect(true).toBe(true)
})

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })
})

describe('<App />', () => {
  it('renders 1 <HelloWorld /> components', () => {
    expect(app.find('HelloWorld').length).toBe(1)
  })
})