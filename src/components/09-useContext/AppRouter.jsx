import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <div className='container mx-auto mt-4'>
          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              {/* <Route path="*" element={<HomeScreen />} /> */}

              <Route path="*" element={ <Navigate to="/about" /> }  />
          </Routes>
        </div>
       
    </BrowserRouter>
  )
}
