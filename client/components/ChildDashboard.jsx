import React from 'react'
import MaterialDashboard from './MaterialDashboard'
// import { connect } from 'react-redux'

import WishList from './WishList'
import StarBank from './StarBank'
import WishInput from './WishInput';

export default function ChildDashboard () {
  const child = {
    id: 1,
    child_name: 'Amy',
    display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg',
    parents_id: '1'
  }

  return (
    <React.Fragment>
      <div className="cd-body">
        <div className="high-frame">
          <div className="welcome-user">
            {`Hello, ${child.child_name}!`}
          </div>
        </div>
        <div className="low-frame">
          <WishInput/>
          <WishList id={child.id}/>
          <StarBank id={child.id}/>
        </div>

        <MaterialDashboard/>

      </div>
    </React.Fragment>
  )
}
