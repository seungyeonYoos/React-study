import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //.은 현재위치 인덱스를 찾겟다는뜻
import App from './App'; //확장자 안쓰면 js불러오겟다는뜻
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
