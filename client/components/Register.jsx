import React from 'react'
import { Button } from 'react-bootstrap'
class Register extends React.Component {
  state = {

  }

  render () {
    return (
      <>
      <div className='register'>
      <h2>Please put the right format to register!</h2>
        <input />

        <input />

        <input />

        <input />

        <Button variant="info" type='button' >Register</Button>
      </div>
    </>
    )
  }
}
export default Register