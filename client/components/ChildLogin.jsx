import React from 'react'
import { connect } from 'react-redux'
import ChildLoginEntry from './ChildLoginEntry'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function ChildLogin (props) {
  const { children } = props

  const loginArray = children.map(child => {
    return <ChildLoginEntry key={child.id} child={child} img={child.display_URL} />
  })

  return (
    <React.Fragment>
      <div className='heroUnit'>
        <div className='heroContent'>
          <center> <img src = '/images/STARBOX.png' height="500" width="500" /></center>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Lets collect some stars!
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Click on your picture!!
          </Typography>
        </div>
      </div>
      <Grid
        container='true'
        justify='center' >
        <main>
          <div className=' layout, cardGrid'>
            <Grid container spacing={40}>{loginArray}</Grid>
          </div>
        </main>
      </Grid>

      <footer className='footer'>
        <Typography variant="h6" align="center" gutterBottom>
          Copywrite Starry
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Teach your kids to be a better version of themselves.. and you...
        </Typography>

      </footer>
    </React.Fragment>

  )
}

function mapStateToProps (state) {
  return {
    children: state.retrieveAllChildren
  }
}

export default connect(mapStateToProps)(ChildLogin)
