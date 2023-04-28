import React from 'react'
import './styles/Box.css'

function Box({value, onClick}) {
    const style = value === 'x' ? "box x" : "box o";

  return (
    <div className='main'>
    <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Box