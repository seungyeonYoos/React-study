import { useEffect, useState , useRef } from "react";

const HookTest = () => {
    let [ name, setName ] = useState('');
    let [ pw, setpw ] = useState('');

    

    useEffect(()=>{
        console.log("mount");
        var num = 0;
        var time = setInterval(()=>{
            console.log("time:", num++);
        }, 1000)

        return ()=>{
            clearInterval(time);
        }
    },[]); //처음 실행 될때만 찍힘 배열이 없어서
    useEffect(()=>{
        console.log("update");
    },[name]);
    useEffect(()=>{
        console.log("update2");
    },[name, pw]);

    let input = useRef(null);
    console.log(input.current);

    return (
        <>
            <input ref={input} onChange={(e)=>{setName(e.target.value)}}></input>{name}<br></br>
            <input type="password" onChange={(e)=>{setpw(e.target.value)}}></input>
            
        </>
    );

    
}
export default HookTest;