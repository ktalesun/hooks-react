import React from 'react'
import { useCounter } from '../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset} = useCounter()

  return (
    <div>
      <h1>Counter with CustomHook : {state} </h1>
      <button className='addButton' onClick={ ()=> increment(2) }>+1</button>
      <button className='substractButton' onClick={ ()=> decrement(2) }>-1</button>
      <button className='resetState' onClick={ ()=> reset()}>Reset</button>
    </div>
  )
}
