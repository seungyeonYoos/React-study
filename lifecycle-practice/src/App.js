import React, { Component } from 'react';
import TestComponent from './TestComponent';

// import LifeCyclePractice from './LifeCyclePractice';
import HookTest2 from './HookTest2';
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Content from './Content';
 
class App extends Component {
  // state = {
  //   value: true
  // }

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
      // <BrowserRouter>
      //   <Nav></Nav>
      //   <Content></Content>
      //   <Footer></Footer>

      // </BrowserRouter>
      <>
      <div className='SassTest'>
        <div className='box first'></div>
        <div className='box second'></div>
        <div className='box third'></div>
      </div>
      </>
    );
  }
}
 
export default App;