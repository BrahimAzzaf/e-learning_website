import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DashUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users', { withCredentials: true });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    console.log("Deleting user with ID:", userId); // Add this line
    try {
      const response = await axios.delete(`/api/users/${userId}`, { withCredentials: true });
      if (response.status === 200) {
        setUsers(users.filter(user => user._id !== userId));
        console.log('User deleted successfully');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-semibold mb-6">User Section</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium">User List</h2>
          <Link
            to="/add-user"
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Add User
          </Link>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.isAdmin ? 'Admin' : 'User'}</td>
                <td className='border-b py-2'>
                  <div className="flex gap-3">
                    <Link
                      to={`/view-user/${user._id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-user/${user._id}`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashUsers;
