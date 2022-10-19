import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  render() {
    const truee = true;
    const txt = "true입니다리.";
    return(
      <>
        { truee ? (<div>{txt}</div>) : (<div>false입니다.</div>)}
      </>
    );
  }
}

export default App;
