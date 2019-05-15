import React from 'react'
import { shallow } from 'enzyme'
import WishList from '../../client/components/WishList'

import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'


const mockStore = configureMockStore()
const store = mockStore({
  wishlist: [
    { id: 1, name: 1 },
    { id: 2, name: 2 },
    { id: 3, name: 3 },
    { id: 4, name: 4 }
  ]
})

const wishList = shallow(<Provider store={store}><WishList /></Provider>)
test('test <WishList/> is set up correctly', () => {
  expect(true).toBe(true)
})

test('<WishList/> has 1 div', () => {
  expect(wishList.find('div').length).toBe(0)
})

describe('WishList', () => {
  it('returns correctly', () => {
    expect(wishList).toMatchSnapshot()
  })
})
