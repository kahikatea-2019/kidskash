import React from 'react'

const divStyle = {
  background: 'pink',
  textAlign: 'center',
  padding: '100px 0px 100px 0px',
  width: '200px'
}

class PopUpMessage extends React.Component {
  constructor () {
    super()
    this.state = {
      showHeader: false
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({ showHeader: true }), 2000)
  }

  render () {
    return (
      this.state.showHeader && <div style={divStyle}>Welcome!</div>
    )
  }
}

export default PopUpMessage
