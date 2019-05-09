import React from 'react'
import AppRoutes from './AppRoutes'
import HelloWorld from './HelloWorld'

function App () {
  return (
    // test your components by dropping them where <HelloWolrd/> is
    <React.Fragment>
      <AppRoutes/>
      <HelloWorld/>
    </React.Fragment>
  )
}

export default App
