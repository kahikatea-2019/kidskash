import React from 'react'
import { connect } from 'react-redux'
import MaterialUI from './MaterialUi'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function ChildLogin (props) {
  const { children } = props

  const loginArray = children.map(child => {
    return <MaterialUI key={child.id} child={child} />
  })

  return (
    <React.Fragment>
      <center>
        <h1>KIDS - KA$H</h1>
        <div className='heroUnit'>
          <div className='heroContent'>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Kiddiez Log In
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

      </center>
    </React.Fragment>

  )
}

function mapStateToProps (state) {
  return {
    children: state.retrieveAllChildren
  }
}

export default connect(mapStateToProps)(ChildLogin)
