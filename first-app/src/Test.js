import { Component } from "react";

class ClassComponent extends Component {
    render(){
        const name = "유승연";
        let my_style = {
            backgroundColor: "blue",
            color: "orange",
            fontSize: "40px",
            padding: "12px"
        }
        return(
            <div style={my_style}>{name}</div>
        );
    }
}

export default ClassComponent;