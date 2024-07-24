import { useState } from 'react'
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
import ViewUser from './pages/ViewUser';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import AddCourse from './pages/AddCourse';
import ViewCourse from './pages/ViewCourse';
import EditCourse from './pages/EditCourse';


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
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/view-course/:courseId" element={<ViewCourse />} />
        <Route path="/edit-course/:courseId" element={<EditCourse />} />
        <Route path="/view-user/:userId" element={<ViewUser />} />
        <Route path="/edit-user/:userId" element={<EditUser />} />
        <Route path="/form" to="/form" element={<Form />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </UserContextProvider>
      )
}

export default App
