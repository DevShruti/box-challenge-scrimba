import React, {useState} from 'react';
import boxes from './boxes';
import Box from './Box';

function App() {
  // console.log(boxes)
  const [squareArray, setSquareArray] = useState(boxes)
  
  

  const squareEl = squareArray.map(square => (<Box key ={square.id} on = {square.on}/>)) 
  return (
    <div>
      {squareEl}
    </div>
  )
}

export default App
