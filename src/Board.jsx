import * as React from 'react'
import Box from './Box.jsx'
import './styles/Board.css'

function Board({board, handleClick}) {
  return (
    <div className='board'>
        {
            board.map((value, idx)=>{
              return (<Box key={idx} value={value} onClick={()=> value === null && handleClick(idx)} />)
            })
        }
    </div>
  )
}

export default Board