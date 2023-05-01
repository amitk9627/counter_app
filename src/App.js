import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  reset=()=>{
    this.setState({count:0});
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
  
  render() {
    return (
      <div className='app'>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}

// functional component
// import React,{useState} from 'react'

// function App() {
//   const[data,setData]=useState(0);
//   function increment(){
//     setData(data+1);
//   }
//   const reset=()=>{
//     setData(0);
//   }
//   function decrement(){
//     setData(data-1);
//   }
//   return (
//     <div className='appa'>
//       <h1>{data}</h1>
//       <button onClick={()=>increment()}>Increment</button>
//       <button onClick={()=>reset()}>reset</button>
//       <button onClick={()=>decrement()}>Decrement</button>
//     </div>
//   )
// }
export default App;