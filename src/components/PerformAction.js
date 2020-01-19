import React from 'react';
import { connect } from 'react-redux'
import { increment } from '../actions/index';

class PerformAction extends React.Component {
  render(){
    // console.log(this.props.count)
    return(
      <div>
        <button onClick={this.props.increment}>Increment</button>
        <button>Decrement</button>
        Current count : <span>{this.props.count}</span>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  console.log(state)
  return { count : state.count}
}

export default connect(mapStateToProps,null)(PerformAction)