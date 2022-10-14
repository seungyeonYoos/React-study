import React, { Component } from 'react';
import TestComponent from './TestComponent';
import RouterTest from './RouterTest';
// import LifeCyclePractice from './LifeCyclePractice';
import HookTest2 from './HookTest2';
import "./App.scss";
 
class App extends Component {
  state = {
    value: true
  }

  render() { 
    return (
      // <div>
      //   <div>
      //     <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
      //   </div>
        
      //   <hr style={{margin: "50px 0"}}></hr>

      //   { this.state.value ? <HookTest /> : <TestComponent />}
      // </div>
      // <div className='SassTest'>
      //   <div className='box first'></div>
      //   <div className='box second'></div>
      //   <div className='box third'></div>
      // </div>
      <>
        <RouterTest></RouterTest>
      </>
      
    );
    
  }
}
 
export default App;