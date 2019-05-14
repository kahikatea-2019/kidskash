import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Action Imports
import { navigate, currentUser } from '../actions/navigate'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'

const styles = theme => ({
  appBar: {
    position: 'centre',
    color: yellow
  },
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
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 10
  }
})

const Album = props => {
  const { child, dispatch, classes } = props
  const { id, child_name } = child
  const userId = id

  function trigger () {
    dispatch(navigate('dashboard'))
    dispatch(currentUser(userId))
  }

  return (
    <React.Fragment>
      <CssBaseline />

      <Grid item sm={6} md={4} lg={3}>
        <Link to="#" onClick={trigger}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image= "https://previews.123rf.com/images/sergt/sergt1606/sergt160600068/57936472-giraffe-vector-icon-giraffe-flat-icon-round-icon-giraffe-head-icon.jpg"
              title="Hey its me!"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {child_name}
              </Typography>
              <Typography>
                      Click here to view your Wishlist
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>

    </React.Fragment>
  )
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    currentUser: state.navigate.currentUser
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Album))
