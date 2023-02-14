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
                <button onClick={this.event}>button</button>
            </>
        )
    }
}

export default ClassComponent;
