import React, { useRef } from 'react'

import '../02-useEfect/efect.css'

export const FocusScreen = () => {
  
  const inputRef = useRef();
 
  const handleClick = () => {
    inputRef.current.select();
  }
  
  return (
    <div className='container mx-auto flex flex-col place-content-center place-items-center mt-8'>
        <h1 className='titleForm'>Simple form with useRef</h1>
        <hr />
        <input  type='text'
                name='name'
                className='input-name'
                placeholder='Escribe tu nombre'
                autoComplete='off'
                ref={inputRef}
        />

        <button className='btn-submit'
                onClick={handleClick}
                >Focus</button>

    </div>
  )
}
