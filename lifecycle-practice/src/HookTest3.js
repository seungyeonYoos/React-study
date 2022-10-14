import { useState , useReducer } from "react";

function reducer ( state, action ){ //지금 상태가 어떤지 받고 어떤동작을 할건지 받는거
    switch( action.type ) {
        case "INCREMENT":
            return {...state, number: state.number +1 }; // ...은 다른건 다 그대로 가져오되 넘버만 +1로 가져오겠다는 뜻
        case "DECREMENT":
            return {...state, number: state.number -1 };
        default:
            return state; //둘다 아니면 원래 스테이트를 반환
    }
}

const HookTest = () => {
    let [ number, dispatch ] = useReducer(reducer, {number: 0, text: ''}); //(함수(만들어줘야함), 초기값);
    let [ name, setName ] = useState('');
    let [ pw, setpw ] = useState('');


    return (
        <>
            <h1>{number}</h1>
            <button onClick={()=>{dispatch({type: "INCREMENT"})}}>+1</button>
            <button onClick={()=>{dispatch({type: "DECREMENT"})}}>-1</button>

            
        </>
    );

    
}
export default HookTest;