// src/components/DashUsers.js
import React from 'react';

function DashUsers() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-semibold mb-6">User Section</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-4">User List</h2>
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
              
            <tr>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              {/* <td className="py-2 px-4 border-b">Delete</td> */}
              <td className='border-b py-2'>
              <button className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
              View
              </button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jane Smith</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
              <td className="py-2 px-4 border-b">User</td>
              {/* <td className="py-2 px-4 border-b">View</td> */}
              <td className='border-b py-2 '>
              <button className="bg-red-500 hover:bg-red-700   text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
              Delete
              </button>
              </td>
            </tr>
            </tbody>            
          </table>
      </div>
    </div>
  );
}

export default DashUsers;
