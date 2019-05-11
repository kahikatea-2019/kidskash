import React from 'react'

const divStyle = {
  background: 'pink',
  textAlign: 'center',
  padding: '100px 0px 100px 0px',
  width: '200px',
  borderRadius: '4px',
  fontSize: '40px'
}

class PopUpMessage extends React.Component {
    state = {
      showHeader: true
    }
    componentDidMount () {
      setTimeout(() => this.setState({ showHeader: false }), 2000)
    }

    render () {
      return (
        this.state.showHeader && <div style={divStyle}>Welcome!</div>
      )
    }
}

export default PopUpMessage
