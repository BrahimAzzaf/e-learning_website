import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`, {
          withCredentials: true, // if needed for authentication
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">User Details</h1>
      <div className="flex bg-white shadow-md rounded-lg w-full max-w-3xl">
        <div className="flex items-center justify-center w-1/2 p-6">
          <img
            src={user.image}
            alt="Profile"
            className="rounded-md w-48 h-48 object-cover"
          />
        </div>
        <div className="w-1/2 p-6">
          <p className="text-xl font-semibold mb-4">
            Name: <span className="font-normal">{user.name}</span>
          </p>
          <p className="text-xl font-semibold mb-4">
            Email: <span className="font-normal">{user.email}</span>
          </p>
          <p className="text-xl font-semibold">
            Role: <span className="font-normal">{user.isAdmin ? 'Admin' : 'User'}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
