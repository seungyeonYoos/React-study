import { useEffect, useState , useRef } from "react";

const HookTest = () => {
    let [ name, setName ] = useState('');
    let [ pw, setpw ] = useState('');
    let [ width, setWidth ] = useState('');
    let [ color, setColor ] = useState('');
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    useEffect(()=>{
        console.log("mount");
        var num = 0;
        var time = setInterval(()=>{
            console.log("time:", num++);
        }, 1000)
        window.addEventListener('resize', ()=>{
            setWidth(window.innerWidth);
            console.log(width);
        })

        return ()=>{
            clearInterval(time);
        }
    },[]); //처음 실행 될때만 찍힘 배열이 없어서
    useEffect(()=>{
        console.log("update");
    },[name]);

    useEffect(()=>{
        
        console.log("width바뀜");
        console.log({input});
        // setColor();
        input.current.style.backgroundColor = getRandomColor();
    },[width]);

    let input = useRef(null);
    console.log(input.current);

    let style = {
        backgroundColor: 'red',
    }

    return (
        <>
            <div style={style} ref={input}>
                width가 변할 때마다 배경 색상이 바뀌어요. 
                <br></br>
            </div>
            
        </>
    );

    
}
export default HookTest;