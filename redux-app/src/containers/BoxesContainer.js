import { Box1, Box2, Box3, Box4 } from "../components/Boxes";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/counter";
export function Box1Container(){
    return <Box1 />
}

export function Box2Container(){
    return <Box2 />
}

export function Box3Container(){
    const number = useSelector((state)=> state.counter.number)
    return <Box3 />
}

export function Box4Container(){
    const dispatch = useDispatch();
    return <Box4 onIncrease={()=>{dispatch(increase(increase))}} onDecrease={()=>{dispatch(decrease(decrease))}}/>
}