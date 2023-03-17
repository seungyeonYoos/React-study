/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState('닫힘');

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{ 
        let abc = [...글제목];
        abc.sort();
        글제목변경(abc);
       }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '남자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      {
        글제목.map(function(a, i){
          return (<div className='list'key={i}>
          <h4 onClick={()=>{
          modal == '열림' ? setModal('닫힘'): setModal('열림')
        }}>{a}  <span onClick={() => {  }}>👍</span> {따봉} </h4>
          <p>2월 15일 발행</p>
        </div>)
        })
      }
      {
        modal == '열림' ? <Modal />: null
      }
      
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;
