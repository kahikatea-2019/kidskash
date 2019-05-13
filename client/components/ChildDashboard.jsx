import React from 'react'
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
  // const {dispatch, wishes} = props
  // function returnChildWishes (wishes) {
  //   const childWishes = wishes.forEach(wish => {
  //     if (wish.child_id === child.id) {
  //       return wish
  //     }
  //     return childWishes
  //   })
  // }

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

      </div>
    </React.Fragment>
  )
}

// function mapStateToProps (state) {
//   return {
//     wishes: state.retrieveAllWishes
//   }
// }

// export default connect(mapStateToProps)(ChildDashboard)
