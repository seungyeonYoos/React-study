// function FunctionComponent () {
//     return (
//         <div>안녕</div>
//     )
// }

import { Children, useState } from "react";
import PropTypes from "prop-types";
import hi from "./hi.png";



const FunctionComponent = (props) => {

    // props = {
    //     title: "",
    //     name: "",
    //     children: ""
    // } 딕셔너리형태로 저장된 상태

    // 구조분해할당  props.title => 그냥 title 로 사용
    let { name } = props;
    let { Children } = props;

    let [ number, setNumber ] = useState(0); //[변수, 함수]
    const changeNumber = () => { 
        setNumber(number-1); 
    }
    const changeNumberTwo = () => { setNumber(number+2); }

    

    return (
        <>
            {/* <div>App 컴포넌트에서 넘겨준 text props</div> */}
            <h1>{number}</h1>
            <button onClick={changeNumber}>-1</button>
            <button onClick={changeNumberTwo}>+2</button>

        </>
        
    );
}

FunctionComponent.defaultProps = { //기본값
    food: "기본 음식"
}


export default FunctionComponent;