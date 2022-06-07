import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import '../03-examples/styles.css';
import { useCounter } from '../hooks/useCounter';

export const UseLayout = () => {
    
    const { state, increment, decrement } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
 
    const {quote } = !!data && data[0];
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})   

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])
  
    return (
      <div className='contenedor'>
        <h1 className='title'>Use Layout Efect</h1>
        <hr className='mt-4 w-full' />
        <blockquote className='blockquote-text'>
                    <p  className='blockquote-paragraph'
                        ref={pTag}
                    >{quote}</p>
        </blockquote>

        <pre>
            {JSON.stringify(boxSize, null, 3)}
        </pre>

        <button 
                className='btn-siguiente'
                onClick={ increment }
                >Siguiente frase
        </button>
        
        <button 
                className='btn-siguiente'
                onClick={ decrement }
                >Frase anterior
        </button>

      </div>
    
  )
}
