import React from 'react'
import { shallow } from 'enzyme'
import WishList from '../../client/components/WishList'

const wishList = shallow(<WishList />)

test('test <WishList/> is set up correctly', () => {
  expect(true).toBe(true)
})

test('<WishList/> has 1 div', () => {
  expect(wishList.find('div').length).toBe(1)
})

test('<WishList/>', () => {
  expect(wishList.find('h2').text()).toBe('Mum/Dad: These are what i want :')
})

describe('WishList', () => {
  it('returns correctly', () => {
    expect(wishList).toMatchSnapshot()
  })
})
