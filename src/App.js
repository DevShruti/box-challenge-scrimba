import React, {useState} from 'react';
import boxes from './boxes';

function App() {
  // console.log(boxes)
  const [squareArray, setSquareArray] = useState(boxes)
 
  const squareEl = squareArray.map(squares => (<div className = "box"></div>))
  return (
    <div>
      {squareEl}
    </div>
  )
}

export default App
