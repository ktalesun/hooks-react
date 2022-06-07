import React, { useCallback, useState } from 'react'
import '../03-examples/styles.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num)=> {
        setCounter( c => c + num )
    }, [setCounter]);

    return (
        <div className='contenedor'>
            <h1 className='title'>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        
            {/* <button className='btn-siguiente'
                    onClick={increment}
            >Increment</button> */}
        
        </div>
    )
}
