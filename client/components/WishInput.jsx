import React from 'react'
import { connect } from 'react-redux'
import { actions, Control, Errors, Form } from 'react-redux-form'
import { addNewWish } from '../actions/wishes'

// //MaterialUI
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     minWidth: 275,
//   }
//   title: {
//     fontSize: 14,
//   }
//   pos: {
//     marginBottom: 12,
//   }
// }

function SimpleCard (props) {
  const { classes } = props
  const bull = <span className={classes.bullet}>•</span>
}

class WishInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (wish) {
    const { dispatch, currentUser } = this.props

    dispatch(addNewWish({
      ...wish,
      allocated_stars: 0,
      child_id: currentUser
    }))
    dispatch(actions.reset('wish'))
  }

  render () {
    return (
      // <Card className(props)>
      <div className= 'wishinput'>
        {/* <h2>Mum/Dad: These are what i want :</h2> */}
        <Form model='wish' onSubmit={this.handleSubmit}>
          <label><h2>Lets add a Wish:</h2></label>
          <Control.text model='.content'
            className='u-full-width form-input' validateOn='blur'
            validators={{ isRequired: content => content && content.length }}
          />
          <Errors model=".content" className="error" show='touched'
            messages={{ isRequired: 'Please write  a wish.' }}
          />
          {/* this could be another componment for each star container */}
          <label><h2>Stars:</h2></label>
          <Control.select model='.required_stars' className='u-full-width'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Control.select>
          <button type='submit' className='button-primary'>Add</button>

        </Form>
      </div>
      // </Card>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(WishInput)
