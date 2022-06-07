import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { LoaderDialog } from '@cacevedo/loaders-react'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <LoaderDialog open={true} bg='blur' />
        <NavBar />
        <div className='container mx-auto mt-4'>
          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="*" element={<HomeScreen />} />
          </Routes>
        </div>
       
    </BrowserRouter>
  )
}
