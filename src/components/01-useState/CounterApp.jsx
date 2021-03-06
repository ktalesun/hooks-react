import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1 : 10,
        counter2: 20
    })

    const {counter1, counter2} = state;

  return (
    <div className='container mx-auto'>
        <div className='wrapper'>
            <h1>Counter: {counter1}</h1>
            <h1>Counter: {counter2}</h1>
            <hr />

            <button className="addButton" 
                    onClick={()=>{
                        setState({
                            ...state,
                            counter1: counter1 + 1,
                            counter2: counter2 + 1
                            
                        })
                    }}
            >+1</button>
        </div>    
    </div>
  )
}
