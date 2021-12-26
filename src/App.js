import React, {useState} from 'react';
import boxes from './boxes';
import Box from './Box';

function App() {
  // console.log(boxes)
  const [squareArray, setSquareArray] = useState(boxes)
  
  function toggle(id){
   setSquareArray(prevSquare => {
     return prevSquare.map(square =>{
       return square.id === id ? {...square , on: !square.on} : square
     }) })
  }

  const squareEl = squareArray.map(square => (
  <Box 
  key ={square.id} 
  on = {square.on}
  id = {square.id}
  toggle ={toggle}
  
  />)) 
  return (
    <div>
      {squareEl}
    </div>
  )
}

export default App
