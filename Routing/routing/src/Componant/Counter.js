import React, { Component } from 'react'

export class Counter extends Component {
    constructor (props){
        super(props);
        this.state = {
            count : 0,
        };
     }

     incrementCount = () => {
        this.setState({count : this.state.count +1})
     }

     decrementCount = () =>{
    if(this.state.count>0){
        this.setState({count : this.state.count-1})
    }
     }
  render() {
    return (
      <div>
        <h1>This is Increment and Decrement file Using Button</h1>
        <p>count : {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    )
  }
}

export default Counter
