import React from "react"
import { connect } from "react-redux"
import { actions, Control, Errors, Form } from "react-redux-form"
import { addNewWish } from "../actions/wishes"

class WishInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(wish) {
    const { dispatch, currentUser } = this.props

    dispatch(
      addNewWish({
        ...wish,
        allocated_stars: 0,
        child_id: currentUser
      })
    )
    dispatch(actions.reset("wish"))
  }

  render() {
    return (
      // <Card className(props)>
      <div className='wishinput'>
        {/* <h2>Mum/Dad: These are what i want :</h2> */}
        <Form model='wish' onSubmit={this.handleSubmit}>
          <label>
            <h2>What will I work towards?</h2>
          </label>
          <Control.text
            model='.content'
            className='u-full-width form-input'
            validateOn='blur'
            validators={{ isRequired: content => content && content.length }}
          />
          <Errors
            model='.content'
            className='error'
            show='touched'
            messages={{ isRequired: "Please write  a wish." }}
          />
          {/* this could be another componment for each star container */}
          <label>
            <h2>How much is it worth to me?</h2>
          </label>
          <Control.select model='.required_stars' className='u-full-width control'>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </Control.select>
          <button type='submit' className='wish-button button-primary'>
            Add
          </button>
        </Form>
      </div>
      // </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(WishInput)
