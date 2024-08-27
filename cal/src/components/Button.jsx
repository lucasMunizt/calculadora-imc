import './Button.css'

import React from 'react'

const Button = ({id,text, action}) => {
  const handleAction = (e) =>{
    action(e);
  }
  return (
    <div className='test'>
        <button 
        onClick={handleAction}
        id={id}>{text}</button>
    </div>
  )
}

export default Button