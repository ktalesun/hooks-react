import React from 'react'
import PropTypes from 'prop-types';


export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
  
    return (
        
        <li className='flex gap-6 items-center justify-between mb-4 border-[1px] p-4'
            key={todo.id}>
            
            <p  className = {`text-[25px] cursor-pointer ${todo.done && 'complete'}`} 
                onClick = {() => handleToggle(todo.id)}
            >{index + 1 } . {todo.desc}</p>
            
            <button className='text[25px] bg-red-600 text-white font-semibold rounded-md w-24 h-10'
                    onClick={() => handleDelete(todo.id) }
            >Borrar</button>
            
        </li>     
  )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}