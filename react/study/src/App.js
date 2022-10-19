import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

class App extends Component{
  render() {
    return(
      <>
        <ClassComponent></ClassComponent>
        <FunctionComponent></FunctionComponent>
      </>
    );
  }
}

export default App;
