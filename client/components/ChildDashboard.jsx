import React from 'react'
// import { connect } from 'react-redux'

import WishList from './WishList'
import StarBank from './StarBank'
import WishInput from './WishInput'

// import material ui

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
//

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

function ChildDashboard (props) {
  const child = {
    id: 1,
    child_name: 'Amy',
    display_url: 'https://i.pinimg.com/736x/62/c5/c0/62c5c004441b4bd92e9228198aa17aeb.jpg',
    parents_id: '1'
  }

  const { classes } = props

  return (
    <React.Fragment>
      <center>
        <div className={classes.paper}>
          <Grid container spacing={24}>
            <div className={classes.paper}>
              <h1>
                {`Hello, ${child.child_name}!`}
              </h1>
            </div>
            <div className={classes.paper}>
              <StarBank id={child.id}/>
              <WishInput/>
              <WishList id={child.id}/>
            </div>
          </Grid>
        </div>
      </center>
    </React.Fragment>
  )
}

ChildDashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ChildDashboard)
