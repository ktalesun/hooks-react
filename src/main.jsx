import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './components/01-useState/CounterApp'
// import { CallbackHook } from './components/06-memos/CallbackHook'
// import { MainApp } from './components/09-useContext/MainApp'
// import { MemoHook } from './components/06-memos/MemoHook'
// import { SimpleForm } from './components/02-useEfect/SimpleForm'
// import { SimpleFormWithCustomHook } from './components/02-useEfect/SimpleFormWithCustomHook'
// import { MultiplesCustomHooks } from './components/03-examples/MultiplesCustomHooks'
// import { FocusScreen } from './components/04-useRef/FocusScreen'
// import { UseRefRealCase } from './components/04-useRef/useRefRealCase'
// import { UseLayout } from './components/05-useLayoutEfect/UseLayout'
// import { Memorize } from './components/06-memos/Memorize'
// import { CounterApp } from './components/01-useState/CounterApp'
// import { HookApp } from './HookApp'
// import {CounterWithCustomHook} from './components/01-useState/CounterWithCustomHook'
// import {Padre} from './components/07-tarea-memo/Padre'
import { TodoApp } from './components/08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <HookApp />
  // <CounterApp />
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <SimpleFormWithCustomHook />
  // <MultiplesCustomHooks />
  // <FocusScreen />
  // <UseRefRealCase />
  // <UseLayout />
  // <Memorize />
  // <MemoHook />
  // <CallbackHook />
  //   <Padre />
    <StrictMode>
        <TodoApp />
    </StrictMode>
  
  // <MainApp />
  
)

// import './components/08-useReducer/intro-reducers.js'