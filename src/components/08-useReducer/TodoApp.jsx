import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

import '../03-examples/styles.css'


// const initialState = [
//     {
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     }
// ]

const init = () => {
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }
    // ]

   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [] , init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    
    const handleDelete = (todoId) => {
    
        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddToDo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }


    return (
        <div className = 'contenedor'>
            <h1 className = 'title'>TODO App ({todos.length})</h1>
            <hr className = 'w-full mt-4' />

            <section className = 'container flex gap-6'>

                <article className='todo-list grow'>
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete= {handleDelete} />
                </article>
                <article className='todo-form grow mt-4'>
                    <TodoAdd handleAddToDo={handleAddToDo} />    
                </article>

            </section>
            

        </div>
    )
}
