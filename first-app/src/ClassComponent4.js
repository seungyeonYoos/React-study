import React, { Component } from "react";
// import Scroll from './Scroll';


class ClassComponent extends Component {
  //render 다음에 실행되는 함수 실행되는 때가 정해져 있음 마음대로 정의하는 함수강 아님
  componentDidMount(){
    addEventListener("click");
  }

  constructor( props ){
    super(props);
    this.box2 = React.createRef(); //*
  }
  scrollBottom = () => {
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
}
  scrollTop = () => {
    this.box.scrollTop = 0;
}


  aaa = ()=>{
    console.log(this.box);
    console.log(this.box2.current);

    // this.input.focus();
    // this.input.value="";
  }

  render() {
    const style={
      border: '1px solid black',
      height: '400px',
      width: '400px',
      overflow: 'auto',
      position: 'relative'
  };

  const innerStyle={
      width: '100%',
      height: '700px',
      background: 'linear-gradient(white, purple)'
  }
    return (
      <>
      <div 
      style={style} 
      ref={(ref)=>{this.box=ref}} 
      className="box" >
        <div style={innerStyle}></div>
      </div>

      {/* <input ref={(ref) => {this.input = ref}}></input>  */}
      <button onClick={this.scrollBottom}>아래로</button>
      <button onClick={this.scrollTop}>위로</button>

      
    </>
    )
  }
}
export default ClassComponent;