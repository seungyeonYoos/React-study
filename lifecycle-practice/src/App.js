import React, { Component } from 'react';
import TestComponent from './TestComponent';
import LifeCyclePractice from './LifeCyclePractice';
 
class App extends Component {
  state = {
    value: true
  }

  render() { 
    return (
      <div>
        <div>
          <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
        </div>
        
        <hr style={{margin: "50px 0"}}></hr>

        { this.state.value ? <LifeCyclePractice /> : <TestComponent />}
      </div>
    );
  }
}
 
export default App;