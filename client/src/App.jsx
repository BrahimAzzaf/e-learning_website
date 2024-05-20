import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import '../src/components/Navbar'
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Home from '../src/pages/Home';
import Formation from '../src/pages/Formation';
import Form from '../src/pages/Form';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import {UserContextProvider} from '../context/userContext/'
import Dashboard from './pages/Dashboard';


axios.defaults.baseURL= 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
    <Toaster position='bottom-right' toatOption={{duration:2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" to="/form" element={<Form />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </UserContextProvider>
      )
}

export default App
