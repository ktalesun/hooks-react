import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import './efect.css'
export const SimpleFormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('name cambió')
    }, [name, password])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }


  return (
    
    <form onSubmit={handleSubmit} className='container mx-auto flex flex-col place-content-center place-items-center mt-8'>
        <h1 className='titleForm'>Simple form with custom Hook</h1>
        <hr />
        <input  type='text'
                name='name'
                className='input-name'
                placeholder='Escribe tu nombre'
                autoComplete='off'
                value= {name}
                onChange={handleInputChange}
        />
        
        <input  type='email'
                name='email'
                className='input-email'
                placeholder='ejemplo@gmail.com'
                autoComplete='off'
                value= {email}
                onChange={handleInputChange}
        />
        
        <input  type='password'
                name='password'
                className='input-password'
                placeholder='*******'
                value= {password}
                onChange={handleInputChange}
        />

        <button className='btn-submit'
                type="submit">Guardar</button>

    </form>
  )
}
