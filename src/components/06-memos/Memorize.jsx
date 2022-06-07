import React, { useState } from 'react'

import '../03-examples/styles.css';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    
    const { state, increment } = useCounter(1);
    const [show, setShow] = useState(true)
  
    return (
    <div className='contenedor'>

        
        <h1 className='title'>Counter: <Small value={state} /></h1> 
        <button className="btn-siguiente"
                onClick={increment}
        >+1</button>

        <button className="btn-siguiente"
                onClick={()=> setShow(!show)}
        >show/hide {JSON.stringify(show)}</button>

    </div>
  )
}
