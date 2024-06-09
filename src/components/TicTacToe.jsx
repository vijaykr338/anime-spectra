import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return <button className="square w-20 h-20 border-2 shadow-md mx-1 my-1" onClick={onSquareClick} >{value}</button>;
}



export default function Board() {
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));


  const handleClick = (i) => {
    if(squares[i] || declareWinner(squares)){
      console.log(declareWInner(squares))
      return;
    }




    const nextSquare  = squares.slice();
     //we are not making direct changes to the state, instead we make a copy and then do the job 
      if(XisNext){
        nextSquare[i] =  "X";
      }
      else{
        nextSquare[i] = "O";
      }
     
    
    setSquares(nextSquare)
    setXisNext(!XisNext);
    
  }

  let winner = declareWinner(squares)
  let status;
  if(winner){
    status = "Winner is " + winner;
  }
  else{
    status = "Next player: " + (XisNext ? "X":"O")
  }
  

  return (
    <div className='flex items-center flex-col my-4'>
      <div><h1>{status}</h1></div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}

const declareWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
