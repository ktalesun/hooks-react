import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {
  
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


    return {
        todos,
        handleDelete,
        handleToggle,
        handleAddToDo,
        todosCount: todos.length,
        pendingCountTodos: todos.filter(todo => !todo.done).length
    }


}
