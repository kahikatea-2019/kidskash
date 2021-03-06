import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Action Imports
import { navigate, currentUser } from '../actions/navigate'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 8
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 2 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 40}px 0`
  },
  card: {
    width: 400
  },
  cardMedia: {
    paddingTop: '100%'

  },
  cardContent: {
    flexGrow: 1

  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 10
  }
})

const ChildLoginEntry = props => {
  const { child, dispatch, classes } = props
  const { id, child_name } = child
  const userId = id

  function trigger () {
    dispatch(navigate('dashboard'))
    dispatch(currentUser(userId))
  }

  return (
    <React.Fragment>
      <Grid item sm={6} md={5} lg={4}>
        <Link to="#" onClick={trigger}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={props.img}
              title="Hey its me!"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" align="center" component="h2">
                {child_name}
              </Typography>

            </CardContent>
          </Card>
        </Link>
      </Grid>
    </React.Fragment>
  )
}

ChildLoginEntry.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ChildLoginEntry))
