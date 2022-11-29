import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder='write your to do ...' 
        />
        <button>Add To Do</button>
      </form>
      
    </>
  );
}

export default App;
