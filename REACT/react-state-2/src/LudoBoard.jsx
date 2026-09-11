import { useState } from "react";
 
 export default function LudoBoard() {
  let [moves, setMoves] = useState({blue : 0,green : 0,yellow : 0,red : 0,});
  let [arr, SetArr] = useState(["Start   "]);
  
  let updateBlue = () => {
    setMoves({...moves, blue: moves.blue +=1});
    arr.push("Blue moves ");
    SetArr(arr);
  }
  let updateYellow = () => {
    setMoves({...moves, yellow: moves.yellow +=1});
    arr.push("Yellow moves ");
    SetArr(arr);
  }
  let updateGreen = () => {
    setMoves({...moves, green: moves.green +=1});
    arr.push("Green moves ");
    SetArr(arr);
  }
  let updateRed = () => {
    setMoves({...moves, red: moves.red +=1});
    arr.push("Red moves ");
    SetArr(arr);
  }

  return(
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
          <p>Blue moves = {moves.blue}</p>
          <button onClick={updateBlue} style={{backgroundColor: "blue", border: "none"}}>+1</button>
          <p>Yellow moves = {moves.yellow}</p>
          <button onClick={updateYellow} style={{backgroundColor: "yellow", border: "none", color:"black"}}>+1</button>
          <p>Green moves = {moves.green}</p>
          <button onClick={updateGreen} style={{backgroundColor: "green", border: "none"}}>+1</button>
          <p>Red moves = {moves.red}</p>
          <button onClick={updateRed} style={{backgroundColor: "red", border: "none"}}>+1</button>
      </div>
    </div>
  )
 }