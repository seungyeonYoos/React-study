/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['안산 맛집 추천','강남 술집 추천','봄 코디 추천']);
  let [heart, setHeart] = useState([0,0,0]);
  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>  

      <button>가나다순 정렬</button>   
      <button>수정</button>
      {title.map(function(a, i){
        return (
          <div className='box' key={i}>
            <h3 onClick={function(){}}>{title[i]}</h3> 
            <span onClick={function(){
              let copy = [...heart];
              copy[i] = copy[i] + 1;
              setHeart(copy);
            }}>🤍</span> {heart[i]}
            <p>발행 2월 15일</p>
            <button onClick={(e)=>{
              let copy = [...title]
              copy.splice(i, 1)
              console.log(copy);
              setTitle(copy);
            }}>삭제</button>
          </div>
        )
      })}
      <input type="text" onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button onClick={()=>{
        let copy = [...title, 입력값];
        setTitle(copy);
        let copyHeart = [...heart, 1];
        setHeart(copyHeart);
      }}>발행</button>

    </div>
  );
}




export default App;
