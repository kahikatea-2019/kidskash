import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import TextField from '@material-ui/core/TextField'

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
      {/* <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Cutie" src="https://cdn1.iconfinder.com/data/icons/monkey-rounded-set-volume-1/512/emoticon_expression_monkey_face_smile_rounded-36-512.png" />
            </ButtonBase>
            <Typography component="h5" variant="h5" align="center" gutterBottom>
            Wonder wonder how many stars you are? I shall write my wish here:
            </Typography>
            <TextField>
              Make a wish
            </TextField>
          </Grid>
          <Grid item l={12} l container>
            <Grid item l container direction="column" spacing={50}>
              <Grid item l>
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="h5" variant="h5">
              MY STARS:
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
        </Grid>
      </Paper> */}

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copywrite Starry
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
