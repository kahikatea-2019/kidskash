import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

const styles = {

  root: {
    flexGrow: 1
  },

  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250
  }
}

function ImageAvatars (props) {
  const { classes } = props
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Amy" src="https://previews.123rf.com/images/sergt/sergt1606/sergt160600068/57936472-giraffe-vector-icon-giraffe-flat-icon-round-icon-giraffe-head-icon.jpg" className={classes.bigAvatar} />
    </Grid>
  )
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ImageAvatars)
