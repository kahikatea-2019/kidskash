import React from 'react'
import { shallow } from 'enzyme'
import Register from '../../client/components/Register'

const register = shallow(<Register />)

test('test <Register/> is set up correctly', () => {
  expect(true).toBe(true)
})

test('<Register/> has 4 input', () => {
  expect(register.find('input').length).toBe(4)
})

test('<Register/>', () => {
    expect(register.find('h2').text()).toBe('Please put the right format to register!')
  })

describe('Register', () => {
  it('returns correctly', () => {
    expect(register).toMatchSnapshot()
  })
})