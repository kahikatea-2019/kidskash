import React from 'react'
import { connect } from 'react-redux'
import { actions, Control, Errors, Form } from 'react-redux-form'

import { addWish } from '../actions/wishes'

class WishInput extends React.Component {
  constructor (props) {
    super(props)
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //   handleChange(e){
  //     this.setState({
  //       content:e.target.value
  //     })
  //   }

  handleSubmit (wish) {
    const { dispatch } = this.props
    dispatch(addWish(wish, currentUser))
    dispatch(actions.reset('wish'))
  }

  render () {
    const { currentUser } = this.props
    return (
      <div className= 'wishinput'>
        <h2>Mum/Dad: These are what i want :</h2>
        <Form model='wish' onSubmit={this.handleSubmit}>
          <label>Wish:</label>
          <Control.text model='.content'
            className='u-full-width' validateOn='blur'
            validators={{ isRequired: content => content && content.length }}
          />
          <Errors model=".content" className="error" show='touched'
            messages={{ isRequired: 'Please write  a wish.' }}
          />
          {/* this could be another componment for each star container */}
          <label>Stars:</label>
          <Control.select model='.stars' className='u-full-width' />
          <button type='submit' className='button-primary'>Add</button>
        </Form>
      </div>
    )
  }
}

export default connect()(WishInput)
