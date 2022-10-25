import React, { Component } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


function App() {
    const number = useSelector((state)=>state.number);
    return (
        <div className="box-container">
            <h2>number: {number} </h2>
            <Box1></Box1>
        </div>
    )
}

function Box1() {
    return(
        <>
            <div>
                <h2>box1 컴포넌트</h2>
                <Box2></Box2>
            </div>
        </>
    );
}
function Box2() {
    return(
        <>
            <div>
                <h2>box2 컴포넌트</h2>
                <Box3></Box3>
            </div>
        </>
        
    );
}
function Box3() {
    return(
        <>
            <div>
                <h2>box3 컴포넌트</h2>
                <Box4></Box4>
            </div>
        </>
        
    );
}function Box4() {
    const dispatch = useDispatch();
    return(
        <>
            <div>
                <h2>box4 컴포넌트</h2>
                <button onClick={()=>{dispatch({type:'INCREASE'})}}>+1</button>
                <button onClick={()=>{dispatch({type:'DECREASE'})}}>-1</button>
            </div>
        </>
        
    );
}

export default App;