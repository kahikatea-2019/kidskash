import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
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
    padding: theme.spacing.unit * 6
  }
})

const cards = [1, 2, 3, 4, 5, 6, 7, 8]

function Album (props) {
  const { classes } = props

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="yellow" noWrap>
            Kids Ka$h
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Kiddiez Log In
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Click on your picture!!
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia

                    className={classes.cardMedia}
                    image= "https://previews.123rf.com/images/sergt/sergt1606/sergt160600068/57936472-giraffe-vector-icon-giraffe-flat-icon-round-icon-giraffe-head-icon.jpg"
                    title="Hey its me!"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Munchkin
                    </Typography>
                    <Typography>
                      Click here to view your Wishlist
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" style={{ justifyContent: 'center' }}>
                    View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copywrite Kids Ka$h
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Teach your kids to be a better version of themselves.. and you...
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Album)
