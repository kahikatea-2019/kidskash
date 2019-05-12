import React from 'react'
import {addWish} from '../actions/wishes'
import { connect } from 'react-redux'


class WishList extends React.Component  {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      content:''
    }
  }

  handleChange(e){
    this.setState({
      content:e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    let wish = {
      content:this.state.content
    }
    this.props.addWish(wish)
  }
 

  render() {
  return (
    <div className='wishllist'>
      <h2>Mum/Dad: These are what i want :</h2>
      <div>
        <hr/>
      {/* {<ul>{this.props.wishes.map((wish,i)=>
        <li key ={i}>{wish.content}</li>)}
      </ul>} */}
      </div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} 
      placeholder ='Write your wishes here...' className='form-control' />
      <input type="submit" />
      </form>
    </div>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    wishes: state.wishes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWish: wish => dispatch(addWish(wish))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList)