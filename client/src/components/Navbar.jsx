import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="bg-[--primary-color] text-xl font-semibold lg:flex lg:flex-row sm:flex sm:flex-col sm:items-center justify-between items-center p-4 px-7">
        <div>
        <Link to="/" className="">
          <img src="./white-logo.svg" alt="logo" className=" object-cover w-16 cursor-pointer" />
          </Link>
        </div>
        <div className="lg:flex justify-around items-center sm:hidden">
          <ul className="list-none lg:flex gap-2 text-[--text-color]">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="#Features">Features</Link></li>
            <li><Link to="#About">About</Link></li>
          </ul>
        </div>
        <Link to="/login" className="text-decoration-none">
          <button className="py-1 px-3 rounded-md bg-[--button-color] text-[--text-color] text-md font-medium lg:block sm:hidden">
            Login
          </button>
        </Link>
      </header>

    </div>

  )
}

export default Navbar
