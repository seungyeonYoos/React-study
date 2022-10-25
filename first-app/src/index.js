import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; //.은 현재위치 인덱스를 찾겟다는뜻
import App from './redux'; //확장자 안쓰면 js불러오겟다는뜻
import { configureStore } from '@reduxjs/toolkit'; //
import { Provider } from 'react-redux'; //
import {composeWithDevTools} from 'redux-devtools-extension';

let initialState = {
  number: 0
}

function reducer(state = initialState, action){ //매개변수 이름은 내 마음대로 하면됨 초기값 설정해준것
  switch(action.type){
    case 'INCREASE':
    return{
      number: state.number + 1
    }
    case 'DECREASE':
      return{
        number: state.number - 1
      }
    default:
    return state;
  }
  

}
const store = configureStore({ reducer: reducer }, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
