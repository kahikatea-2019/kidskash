import React from 'react'
import { Link } from 'react-router-dom'

function ChildLoginEntry (props) {
  const { id, child_name, display_URL } = props.child
  return (
    <React.Fragment>
      <div className="child-login-entry-frame">
        <Link to={`/dashboard/${id}`}>
          <img src={display_URL} width="300" height="300"/>
        </Link>
        <h2>{child_name}</h2>
      </div>
    </React.Fragment>

  )
}

export default ChildLoginEntry
