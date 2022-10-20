import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.event
    }
    render() {
        const { number } = this.state; 
        return(
            <>
                <h3>Number: {number}</h3>
                <button onClick={()=>{
                    this.setState({ number: number + 1 });
                }}>+1</button>
                <button onClick={() => {
                    this.setState(prev => {
                        return {
                            number: prev.number + 1
                        };
                    });
                }}>2로 설정</button>
            </>
        )
    }
}

export default ClassComponent;