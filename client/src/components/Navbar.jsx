// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <header className="bg-[--primary-color] text-xl font-semibold lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center justify-between items-center p-4 px-7">
        <div>
          <Link to="/" className="">
            <img src="./white-logo.svg" alt="logo" className="object-cover w-16 cursor-pointer" />
          </Link>
        </div>
        <div className="lg:flex justify-around items-center sm:hidden">
          <ul className="list-none lg:flex gap-2 text-[--text-color]">
            <li><a href="#Home" className="scroll-smooth">Home</a></li>
            <li><a href="#Features" className="scroll-smooth">Features</a></li>
            <li><a href="#About" className="transition delay-1000 duration-300 scroll-smooth">About</a></li>
          </ul>
        </div>
        {user ? (
          <div className="lg:flex justify-around items-center sm:hidden">
            {user.isAdmin && (
              <Link to="/dashboard" className="text-decoration-none">
                <button className="py-1 px-3 rounded-md bg-[--button-color] text-[--text-color] text-md font-medium">
                  Dashboard
                </button>
              </Link>
            )}
            <button
              onClick={logout}
              className="py-1 px-3 rounded-md bg-[--button-color] text-[--text-color] text-md font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-decoration-none">
            <button className="py-1 px-3 rounded-md bg-[--button-color] text-[--text-color] text-md font-medium lg:block sm:hidden">
              Login
            </button>
          </Link>
        )}
      </header>
    </div>
  );
}

export default Navbar;

