// src/components/DashSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';

function DashSidebar({ setView }) {
  return (
    <div className="w-64 bg-[--primary-color]  flex flex-col p-4">
      <div className="text-2xl font-semibold mb-6">
        <Link to="/" className="">
          <img src="./white-logo.svg" alt="logo" className="object-cover w-16 cursor-pointer" />
        </Link>
      </div>
      <nav className='text-white'>
        <button onClick={() => setView('home')} className="w-56 py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center">
          <DashboardIcon className="mr-2" /> Dashboard
        </button>
        <button onClick={() => setView('users')} className="w-56 py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center">
          <PeopleIcon className="mr-2" /> Users
        </button>
        <button onClick={() => setView('profile')} className="w-56 py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center">
          <PersonIcon className="mr-2" /> Profile
        </button>
      </nav>
    </div>
  );
}

export default DashSidebar;
