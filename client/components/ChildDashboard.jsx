import React from 'react'
import { connect } from 'react-redux'

import WishList from './WishList'
import StarBank from './StarBank'
import WishInput from './WishInput'

class ChildDashboard extends React.Component {
  render () {
    const { currentUser, children } = this.props
    const activeChild = children.find(child => {
      if (child.id === currentUser) {
        return child
      }
    })

    return (
      <React.Fragment>
        <div className="cd-body">
          <div className="high-frame">
            <h1>
              {`Hello, ${activeChild.child_name}!`}
            </h1>
          </div>
          <div className="low-frame">
            <WishInput/>
            <WishList id={activeChild.id}/>
            <StarBank id={activeChild.id}/>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUser: state.navigate.currentUser,
    children: state.children
  }
}

export default connect(mapStateToProps)(ChildDashboard)
