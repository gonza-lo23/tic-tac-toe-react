import * as React from 'react'
import Board from './Board.jsx'
import ScoreBoard from './ScoreBoard.jsx'
import ResetButton from './ResetButton.jsx'
import './App.css'

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = React.useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = React.useState(true);

  const [scores, setScores] =React.useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = React.useState(false);

  const handleClick = (boxIdx)=>{

   const updateBoard = board.map((value, idx)=>{
    if(idx === boxIdx){
      return xPlaying ? "x" : "o";
    }else{
      return value;
    }
   })

   setBoard(updateBoard);


   const winner = checkWinner(updateBoard);

   if(winner){
    if(winner === 'o'){
      let{oScore} = scores;
      oScore += 1;
      setScores({ ...scores, oScore})
    }else{
      let{xScore} = scores;
      xScore += 1;
      setScores({...scores, xScore})
    }
   }

   setXPlaying(!xPlaying);
  }
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className='App'>
      <h1>Tic tac toe</h1>
        <Board board={board} handleClick={gameOver ? resetBoard : handleClick} />
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  )
}

export default App
