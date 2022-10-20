import { Component } from "react";

class ClassComponent extends Component {
    state = {
        number: 0,
    }
    constructor(props) {
        super(props);

        this.event = this.event.bind(this);
    }
    event() {
        console.log( this );
    }

    render() {

        return(
            <>
                <button onClick={this.event}>버튼</button>
            </>
        )
    }
}

export default ClassComponent;
