import React,{ useState } from "react";

const SayFunction = () => {
    const [ message, setMessage ] = useState("검정색글씨");
    const [ color, setColor ] = useState('black');
    const onClickRed = () => {
        setMessage("빨간색글씨");
        setColor('red');
};
    const onClickBlue = () => {
        setMessage("파란색글씨");
        setColor('blue');
    };

    return (
            <>
                <h1 style={{color}}>{message}</h1>
                <button onClick={onClickRed} >빨간색</button>
                <button onClick={onClickBlue} >파란색</button>
            </>
        );

};

export default SayFunction;

    
