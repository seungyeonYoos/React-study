import { Component } from "react";
import hi from "./hi.png";

class ClassComponent extends Component {
    render(){
        const name = "유승연";
        let style = {
            color: "orange",
            fontSize: "40px",
            marginTop: "20px"
        }
        return(
            <>
                <h2 style={style}>안녕하세요</h2>
                <div>
                    <img src={hi}></img>
                </div>
            </>
        );
    }
}

export default ClassComponent;