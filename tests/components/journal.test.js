import React from 'react'
import { shallow } from 'enzyme'
import Journal from '../../client/components/Journal'

const journal = shallow(<Journal />)

test('test <Journal /> is set up correctly', () => {
  expect(true).toBe(true)
})

test('<Journal/> has 1 h2 tag', () => {
  expect(journal.find('h2').length).toBe(1)
})

describe('journal', () => {
  it('returns correctly', () => {
    expect(journal).toMatchSnapshot()
  })
})