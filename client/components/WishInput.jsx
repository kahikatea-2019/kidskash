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
    dispatch(addWish(wish))
    dispatch(actions.reset('content'))
  }

  render () {
    return (
        <div className= 'wishinput'>
        <h2>Mum/Dad: These are what i want :</h2>
      <Form model='content' onSubmit={this.handleSubmit}>
        <label>Wish:</label>
        <Control.text model='.wish'
          className='u-full-width' validateOn='blur'
          validators={{ isRequired: content => content && content.length }}
        />
        <Errors model=".wish" className="error" show='touched'
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
