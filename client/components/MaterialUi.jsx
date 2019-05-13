import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider, createMuiTheme, WithTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  typography: { useNextVariants: true }
})

function LightTheme () {
  return (
    <MuiThemeProvider theme={theme}>
      <WithTheme />
    </MuiThemeProvider>
  )
}

const styles = theme => ({

  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 250
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

function ComplexGrid (props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="center"
      ></Grid>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Child" src="babyA.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm={3} >
            <Grid item xs container direction="row-reverse" spacing={16}>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Amy</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid
          container
          direction="row-reverse"
          justify="center"
          alignItems="center"
        ></Grid>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Child" src="babyA.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm={3} >
            <Grid item xs container direction="row-reverse" spacing={16}>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Dani</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Child" src="babyA.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm={3} >
            <Grid item xs container direction="row-reverse" spacing={16}>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Bam</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Child" src="babyA.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm={3} >
            <Grid item xs container direction="row-reverse" spacing={16}>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Ete</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Child" src="babyA.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm={3} >
            <Grid item xs container direction="row-reverse" spacing={16}>
              <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Philip</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ComplexGrid)
