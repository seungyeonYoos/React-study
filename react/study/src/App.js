/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(['닫힘','닫힘','닫힘']);

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
          return (<div className='list' key={i}>
          <h4 id={i} onClick={(e)=>{
            let copy = [...modal];
            // setModal(copy);
            console.log(copy);
            e.target.id == 0 ? setModal() : 
            setModal == '열림' ? console.log('gg') : console.log('dd')
            setModal(copy);
            // e.target.id == '열림' ? setModal('열림'): setModal('열림')
            // modal == '열림' ? setModal('닫힘'): setModal('열림')
            // 지금 누른게 e.target.id 가 0 이면 madal의 0번째 array 열림 1이면 1번째 array 열림 2면 2번째 array 열림
        }}>{글제목[i]}  
        <span onClick={()=>{
          let copy = [...따봉];
          copy[i] = copy[i] + 1;
          따봉변경(copy);
        }}>
          👍</span> {따봉[i]} </h4>
          <p>2월 15일 발행</p>
        </div>)
        })
      }
      {
        modal == '열림' ? <Modal color='yellow' 글제목={글제목} 글제목변경={글제목변경}/>: null
      }
      
    </div>
  );
}

function Modal(props){
  return(
    // <div className='modal' style={{background : props.color}}>
    //     <h4>{props.글제목}</h4>
    //     <p>날짜</p>
    //     <p>상세내용</p>
    //     <button onClick={()=>{
    //       let copy = [...props.글제목];
    //       copy[0] = '남자 코트 추천';
    //       props.글제목변경(copy);
    //     }}>글수정</button>
    //   </div>

      props.글제목.map(function(a, i){
        return (
          <div className='modal' style={{background : props.color}} key={i}>
          <h4>{ a }</h4>
          <p>날짜</p>
          <p>상세내용</p>
          {/* <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = '남자 코트 추천';
           props.글제목변경(copy);
          }}>글수정</button> */}
          </div>
      )
      })
  )
}


export default App;
