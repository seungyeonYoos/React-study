import React, { useState } from "react";

// 10월 

const SayFunction = () => {
    let listTemp = [
        {id: 1, name:"유승연", title:"안녕하세요"}
    ]
    let [list, setList] = useState(listTemp);
    let [newInfoName, setInfoName] = useState('')
    let [newInfoTitle, setInfoTitle] = useState('')
    let [newInfoId, setInfoId] = useState(list.length+1);


    let searchList = [
            {id: 1, name:"안수지", title:"하이룽"}
        ]
    let [searchLesult, setSearch] = useState(searchList);
    let [newSearchName, setSearchName] = useState('')
    let [newSearchTitle, setSearchTitle] = useState('')
    let [newSearchId, setSearchId] = useState(searchLesult.length+1);

    const onKeyPress=(e)=>{
        if(e.key=='Enter'){
            onClickEvent();
        }
    }

    let onClickEvent = ()=>{
                let newList = list.concat({id: newInfoId , name: newInfoName, title: newInfoTitle});
                console.log(newList);
                setList(newList);
                setInfoId(newInfoId+1);
            };
    let Search = ()=>{
        let newSearch = searchLesult.concat({id: newSearchId, name: newSearchName, title: newSearchTitle});
        let searchList = searchLesult.filter((value2)=>{ return  })
        console.log(newSearch);
        //    <li key={value.id} onDoubleClick={()=>{
        //     let newList = list.filter((value2)=>{ return value2.id !== value.id })
        //     setList(newList);
        // }}>{value.name}:{value.email}</li>
    }
    
    let input = {
        border: '1px solid black',
        padding: '20px',
        margin: '10px',
    }
    let hi = {
        margin: '10px'
    }
    let table = {
        border: '1px solid gray'
    }
    
    

    return(
        <>
            <div style={input}>
                <span>작성자</span>
                <input type="text" value={newInfoName} onChange={(e)=>{setInfoName(e.target.value)}}></input>
                <span>제목</span>
                <input type="text" value={newInfoTitle} onKeyDown={onKeyPress} onChange={(e)=>{setInfoTitle(e.target.value)}}></input>
                <button onClick={onClickEvent}>등록</button>
            </div>
            <div style={hi}>
                <select>
                    <option>작성자</option>
                    <option>ID</option>
                    <option>제목</option>
                </select>
                <input type="text" onChange={(e)=>{setSearchName(e.target.value)}}></input>
                <button onClick={Search}>검색</button>
                <table>
                    <tr>
                        <td>번호</td>
                        <td>작성자</td>
                        <td>제목</td>
                    </tr>
                    {searchLesult.map((value)=>{
                    return <tr>
                                <td key={value.id-1}>{value.id}</td>
                                <td key={value.id}>{value.name}</td>
                                <td key={value.id+1}>{value.title}</td>
                            </tr>
                    })}
                </table>
            </div>
            <table>
                <tr style={table}>
                    <td>번호</td>
                    <td>작성자</td>
                    <td>제목</td>
                </tr>
                {list.map((value)=>{
                    return <tr>
                            <td key={value.id-1}>{value.id}</td>
                            <td key={value.id}>{value.name}</td>
                            <td key={value.id+1}>{value.title}</td>
                        </tr>
                                
                                
                                // <li key={value.id} onDoubleClick={()=>{
                                //     let newList = list.filter((value2)=>{ return value2.id !== value.id })
                                //     setList(newList);
                                // }}>{value.name}:{value.email}</li>
                })}
            </table>
            
            
            
            
        </>
    );
}

export default SayFunction;