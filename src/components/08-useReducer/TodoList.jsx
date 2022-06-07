import React from 'react'
import { TodoListItem } from './TodoListItem'
import PropTypes from 'prop-types'


export const TodoList = ({todos, handleToggle, handleDelete}) => {
    
    return (
        <ul className='mt-4'>

        {
            todos.map((todo, index) => (
                    <TodoListItem todo={todo} key={todo.id} index={index} handleToggle= {handleToggle} handleDelete={handleDelete} />     
                )
            )
               
        }

    </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired 
}