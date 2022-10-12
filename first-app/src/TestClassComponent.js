import { Component, Fragment } from "react";

// 버튼 온클릭 +1 +2

class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        }
    }
    
    render() {
        const { number } = this.state;
        return (
            <>
                <h3>Number: {number}</h3>
                <button onClick={() => { this.setState(prevState => {
                    return {
                        number: prevState.number +1
                    };
                });
                
                this.setState(prevState => ({
                    number: prevState.number +1
                }));
                }}>2씩올리기</button>
                <button onClick={() => { this.setState({number: number +1}); }}>1씩 올리기</button>
            </>
        )
    }
    

}

export default ClassComponent;