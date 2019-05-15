import React from 'react'
import { shallow } from 'enzyme'
import StarBank from '../../client/components/StarBank'

const starBank = shallow(<StarBank />)

test('test <StarBank /> is set up correctly', () => {
  expect(true).toBe(true)
})

describe('StarBank', () => {
  it('returns correctly', () => {
    expect(starBank).toMatchSnapshot()
  })
})
