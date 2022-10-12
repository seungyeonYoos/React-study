import React, { useState } from "react";

const SayFunction = () => {
    let listTemp = [
        {id: 1, name:"코디", email:"codi@hhhh.com"},
        {id: 2,name:"김소희", email:"soso@hhhh.com"},
        {id: 3,name:"김소하", email:"sososo@hhhh.com"}
    ]
    let [list, setList] = useState(listTemp);
    let [newInfoName, setInfoName] = useState('')
    let [newInfoEmail, setInfoEmail] = useState('')
    let [newInfoId, setInfoId] = useState(list.length+1);
    const onKeyPress=(e)=>{
        if(e.key=='Enter'){
            onClickEvent();
        }
    }
    let onClickEvent = ()=>{
                let newList = list.concat({id: newInfoId , name: newInfoName, email: newInfoEmail});
                setList(newList);
                setInfoId(newInfoId+1);
            };
    
    

    return(
        <>
            <input type="text" value={newInfoName} onChange={(e)=>{setInfoName(e.target.value)}}></input>
            <input type="text" value={newInfoEmail} onKeyDown={onKeyPress} onChange={(e)=>{setInfoEmail(e.target.value)}}></input>
            <button onClick={onClickEvent}>등록</button>
            <ul>{list.map((value)=>{
                return <li key={value.id} onDoubleClick={()=>{
                    let newList = list.filter((value2)=>{ return value2.id !== value.id })
                    setList(newList);
                }}>{value.name}:{value.email}</li>
            })}</ul>
        </>
    );
}

export default SayFunction;