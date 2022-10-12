import React, { Component } from "react";
import LifeCycleTest from "./LifeCycleTest";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
    value: true,
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
        </div>

        <button onClick={this.handleClick}>
          랜덤 색상
        </button>

        { this.state.value ? <LifeCycleTest color={this.state.color} /> : <div />}
      </div>
    );
  }
}

export default App;