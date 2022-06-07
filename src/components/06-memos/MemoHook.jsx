import React, { useMemo, useState } from 'react'

import '../03-examples/styles.css';
import { procesoPesado } from '../helpers/ProcesoPesado';
import { useCounter } from '../hooks/useCounter';


export const MemoHook = () => {
    
//     
    const { state, increment } = useCounter(500);
    const [show, setShow] = useState(true);
    const memoProcesoPesado = useMemo(() => {procesoPesado(state)}, [state]);
  
    return (
    <div className='contenedor'>

        <h1 className='text-3xl font-bold'>MemoHook</h1>
        <h3 className='title'>Counter: {state} </h3>

        <p> { memoProcesoPesado } </p>

        <button className="btn-siguiente"
                onClick={increment}
        >+1</button>

        <button className="btn-siguiente"
                onClick={()=> setShow(!show)}
        >show/hide {JSON.stringify(show)}</button>

    </div>
  )
}
