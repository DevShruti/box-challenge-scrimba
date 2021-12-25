import React, {useState} from 'react';
import boxes from './boxes';

function App(props) {
  // console.log(boxes)
  const [squareArray, setSquareArray] = useState(boxes)
  
  const styles = {backgroundColor : props.darkMode ?  "#222222" : "#cccccc"}

  const squareEl = squareArray.map(squares => (<div style={styles} className = "box" key ={squareArray.id}></div>))
  return (
    <div>
      {squareEl}
    </div>
  )
}

export default App
