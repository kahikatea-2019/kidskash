import React from 'react'

import WishList from './WishList'
import StarBank from './StarBank'

function ChildDashboard () {
  return (
    <React.Fragment>
      <div className="cd-body">
        <div className="high-frame">
          <div className="welcome-user">
            {`Hello, Ete!`}
          </div>
          <input></input>
        </div>
        <div className="low-frame">
          <WishList />
          <StarBank />
        </div>

      </div>
    </React.Fragment>
  )
}

export default ChildDashboard
