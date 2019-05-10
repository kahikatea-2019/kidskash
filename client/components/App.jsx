import React from 'react'
import AppRoutes from './AppRoutes'
import HelloWorld from './HelloWorld'
import ChildLogin from './ChildLogin'

function App () {
  return (
    // test your components by dropping them where <HelloWolrd/> is
    <React.Fragment>
      <AppRoutes/>
      <HelloWorld/>
      <ChildLogin />
    </React.Fragment>
  )
}

export default App
