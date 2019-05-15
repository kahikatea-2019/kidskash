import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 5,
    margin: 'auto',
    maxWidth: 800
  },
  image: {
    width: 250,
    height: 250
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

function Footer (props) {
  const { classes } = props
  return (
    <div className={classes.root}>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright Starry
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Teach your kids to be a better version of themselves.. and you...
        </Typography>
      </footer>
    </div>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
