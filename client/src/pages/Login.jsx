import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const {data} = await axios.post('/login', 
      { email, 
        password
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({  });
        toast.success('Login Successful. Welcome!');
        navigate('/formation');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error here
    }
  };

  return (
    <div className="flex justify-between items-center h-screen bg-gradient-to-b from-[#063D41] via-[#336a6c] to-[#4B7]">
      <div className="w-full flex flex-col items-center justify-start">
        <Link to="/" className="">
          <img src="./white-logo.svg" alt="logo" className="w-20 object-cover cursor-pointer" />
        </Link>
        <h3 className="text-[--text-color] text-md font-semibold">Welcome To your Learning Space</h3>
      </div>

      <div className="w-full flex flex-col justify-between items-center max-w-3xl bg-white">
        <form className="w-full flex flex-col justify-center h-screen max-w-lg p-8" onSubmit={loginUser}>
          <h2 className="text-2xl font-bold mb-2 text-start">Hello!</h2>
          <h4 className="text-lg font-medium mb-6 text-start">Login to Get Started</h4>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full max-w-full px-4 py-2 border rounded-2xl focus:outline-none"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-2xl focus:outline-none"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            className="w-full bg-[--button-color] border-[3px] cursor-pointer border-transparent text-[--text-color] text-xl font-semibold py-2 px-4 rounded-2xl hover:bg-transparent hover:text-[--button-color] hover:border-[--button-color] focus:outline-none focus:bg-[--primary-color] focus:text-[--text-color]"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
