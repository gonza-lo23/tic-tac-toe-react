import React from 'react'
import './styles/Reset.css'

function ResetButton({resetBoard}) {
  return (
    <div className='ll'>
        <button  onClick={resetBoard}>RESET</button>
    </div>
  )
}

export default ResetButton