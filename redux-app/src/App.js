import React, { Component } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Box1Container} from './containers/BoxesContainer';


function App() {
    const number = useSelector((state)=>state.counter.number);
    return (
        <div className="box-container">
            <h2>number: {number} </h2>
            <Box1Container></Box1Container>
        </div>
    )
}

export default App;
