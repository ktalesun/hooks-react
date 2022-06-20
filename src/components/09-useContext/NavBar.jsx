import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../03-examples/styles.css'

export const NavBar = () => {
  return (
    <nav className='mb-4 flex justify-around h-8 bg-black text-white text-[20px]'>
        <NavLink className={({isActive}) => `${isActive ? 'active' : ''}` } to="/">Home</NavLink>
        <NavLink className={({isActive}) => `${isActive ? 'active' : ''}` } to="about">About</NavLink>
        <NavLink className={({isActive}) => `${isActive ? 'active' : ''}` } to="login">Login</NavLink>
    </nav>

  )
}
