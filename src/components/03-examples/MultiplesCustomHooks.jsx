import React from 'react';
import { useFetch } from '../hooks/useFetch';
import '../03-examples/styles.css';
import { useCounter } from '../hooks/useCounter';

export const MultiplesCustomHooks = () => {
    
    const { state, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
 
    const {author, quote } = !!data && data[0];
  
    return (
      <div className='contenedor'>
          <h1 className='title'>Breaking bad Quotes</h1>
          <hr className='mt-4 w-full' />

            {
                loading
                ?  
                <div className='loading-text'>
                    Loading...
                </div> 
                
                :

                <blockquote className='blockquote-text'>
                    <p className='blockquote-paragraph'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }

            <button 
                className='btn-siguiente'
                onClick={ increment }
                >Siguiente frase</button>
            <button 
                className='btn-siguiente'
                onClick={ decrement }
                >Frase anterior</button>

      </div>
    
  )
}
