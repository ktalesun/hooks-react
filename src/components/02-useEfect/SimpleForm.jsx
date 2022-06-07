import React, { useEffect, useState } from 'react'
import './efect.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(()=>{
        console.log('Hey')
    }, []);

    useEffect(() => {
        // console.log('formState');
    }, [formState]);

    useEffect(()=> {
        // console.log('name!!')
    }, [name])

    const handleInputChange = ({target}) =>{
        setformState({
            ...formState,
            [target.name]: target.value
        }
        )
    }

  return (
    <div className='container mx-auto flex flex-col place-content-center place-items-center mt-8'>
        <h1 className='titleForm'>Simple form with useEfect</h1>
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

        { name === '123' && <Message />}
    </div>
  )
}
