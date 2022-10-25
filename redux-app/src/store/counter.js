const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = ()=> ({type: INCREASE})
export const decrease = ()=> ({type: DECREASE})

let initialState = {
    number: 0
  }
  
  function counter(state = initialState, action){ //매개변수 이름은 내 마음대로 하면됨 초기값 설정해준것
    switch(action.type){
      case INCREASE:
      return{
        number: state.number + 1
      }
      case DECREASE:
        return{
          number: state.number - 1
        }
      default:
      return state;
    }
}

export default counter;

// import reducer from 'counter.js'; 나중엔 카운터라는 리듀서를 가져올때
// import { increase, decrease } from "counter.js";