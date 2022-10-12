import React,{ useState } from "react";

const SayFunction = () => {
    const [ message, setMessage ] = useState("");
    const onClickEvent = () => {
        setMessage("Hello World!");
        };  

    return (
            <>
                <h1>{message}</h1>
                <button onClick={onClickEvent}>생겨라!</button>

                
            </>
        );

};

export default SayFunction;

    
