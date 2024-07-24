import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DashSidebar({ setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-[--primary-color] flex flex-col p-4 transition-width duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex justify-between items-center mb-6">
        {isOpen && (
          <Link to="/" className="flex-shrink-0">
            <img src="./white-logo.svg" alt="logo" className="object-cover w-16 cursor-pointer" />
          </Link>
        )}
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav className='text-white'>
        <button onClick={() => setView('home')} className="w-full py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center group">
          <DashboardIcon className="mr-2" />
          <span className={`ml-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Dashboard</span>
        </button>
        <button onClick={() => setView('users')} className="w-full py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center group">
          <PeopleIcon className="mr-2" />
          <span className={`ml-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Users</span>
        </button>
        <button onClick={() => setView('courses')} className="w-full py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center group">
          <SchoolIcon className="mr-2" />
          <span className={`ml-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Courses</span>
        </button>
        <button onClick={() => setView('profile')} className="w-full py-2.5 px-4 rounded transition duration-200 hover:bg-[--button-color] flex items-center group">
          <OndemandVideoIcon className="mr-2" />
          <span className={`ml-2 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Videos</span>
        </button>
      </nav>
    </div>
  );
}

export default DashSidebar;
