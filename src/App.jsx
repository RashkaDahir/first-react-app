import { useState } from 'react';
import './App.css';

function App() {

  const[count,setcount]=useState(3)
  function decreament(){
    setcount(count-1)


  }

  function increasement(){
    setcount(count+1)


  }

  return (
  <div className='container'>
    <h1>RASHKA DAHIR</h1>
    <div className="app">
  <button onClick={decreament}>-</button>
  <span> {count} </span>
  <button onClick={increasement}>+</button>
  </div>
  </div>
  )
}

export default App;
