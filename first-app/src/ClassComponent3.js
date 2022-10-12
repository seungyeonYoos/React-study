import { Component } from "react";

class ClassComponent extends Component{
    constructor(props){
            super(props);
        
        this.state = {
            number: 0
        }

        this.eventExample = this.eventExample.bind(this);
}
    eventExample() {
      console.log( this );
    }

    changeNumber(e){
        console.log(e.target.innerText); //button 태그를 가져오게됨
        this.setState({number: this.state.number+1})
    }

    consoleLog(name){
        
        this.state = {}
        console.log(name, "안녕?");
    }

    render() {

        return (
            <>
            <h1>{this.state.number}</h1>
            <button onClick={()=>{this.consoleLog("유승연")}}>유승연</button>

            <button onClick={(e)=>{this.changeNumber(e)}}>생겨라!</button> 
            {/* 버튼태그 넘겨주는 함수 */}
            <button onClick={this.changeNumber.bind(this)}>HI</button>

            <h1 style={{ display: this.state.display ? "block" : "none" }}>
            안녕하세요
          </h1>
          <button
            onClick={() => {
              this.setState({ display: !this.state.display });
            }}
          >
            버튼
          </button>
          <button onClick={()=>this.eventExample("인자1")}>이벤트</button>
          </>
        );
    }


}
export default ClassComponent;