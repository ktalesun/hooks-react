import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddToDo }) => {
  
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newTodo =  {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDo(newTodo);
        reset();
    }

    return (
        <>
            <h2 className='text-[30px] font-semibold text-center'>Agregar al TODO</h2>
                            
                <form onSubmit={handleSubmit}>
                    <input  className='w-full mt-4 h-10 rounded-md pl-4 text-[18px] border focus:outline-blue-500'
                            type="text" 
                            name="description"
                            placeholder='Agrega la descripcion aquí'
                            value={description} 
                            onChange={handleInputChange} />
                    <button type="submit" className='mt-4 text[25px] bg-green-700 text-white font-semibold rounded-md w-24 h-10'>Agregar</button>
                </form>

        </>
  )
}
