
import { useFetch, useCounter } from '../hooks/';
import { LoadingQuoute, Quote } from './';

import '../03-examples/styles.css';


export const MultiplesCustomHooks = () => {
    
    const { state, increment, decrement } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    
    const {author, quote } = !!data && data[0];
    
    return (
    
    <div className='contenedor'>
        <h1 className='title'>Breaking bad Quotes</h1>
        <hr className='mt-4 w-full' />

            { loading ?  <LoadingQuoute /> : <Quote quote={quote} author={author}/> }

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
