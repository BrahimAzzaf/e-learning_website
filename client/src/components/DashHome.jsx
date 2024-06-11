// src/components/DashHome.js
import React from 'react';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PeopleIcon from '@mui/icons-material/People';


function DashHome() {
  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-semibold mb-6">Home Section</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className='text-2xl font-semibold uppercase  my-2'>Welcome to the Home section!</p>
        <div className="w-full  sm:grid grid-cols-2  my-2  flex flex-col  gap-10 " >
          <div className=" flex flex-col gap-2 py-4 px-6  bg-[--primary-color] text-[--secondary-color] rounded-lg  shadow-md  shadow-slate-700  ">
            <PeopleIcon className=" bg-[--secondary-color] text-[--primary-color] p-1  rounded-full" fontSize='large' />
            <p className="text-3xl   font-bold  ">10</p>

            <h2 className='text-2xl font-semibold'>
              Total Users
            </h2>

            
          </div>
        <div className=" flex flex-col gap-1 py-4 px-6  bg-[--primary-color] text-[--secondary-color] rounded-lg  shadow-md  shadow-slate-700  ">
          <LaptopChromebookIcon className=" bg-[--secondary-color] text-[--primary-color] p-1  rounded-full" fontSize='large' />
          <p className="text-3xl    font-bold  ">10</p>

          <h2 className='text-2xl  font-semibold'>
              Total Courses
            </h2>

          </div>
        </div>
        </div>
        <div className='p-4 bg-white my-5'>
        <table className="min-w-full  py-5 ">
            <thead className='divide-gray-200'>
              <tr >
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
            <tr>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john@example.com</td>
              <td className="py-2 px-4 border-b">Admin</td>
              {/* <td className="py-2 px-4 border-b">Delete</td> */}
              {/* <td>
              <button className="bg-green-500  hover:bg-green-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
              View
              </button>
              </td> */}
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Jane Smith</td>
              <td className="py-2 px-4 border-b">jane@example.com</td>
              <td className="py-2 px-4 border-b">User</td>
              {/* <td className="py-2 px-4 border-b">View</td> */}
              {/* <td>
              <button className="bg-red-500 border-b hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
              Delete
              </button>
              </td> */}
            </tr>
            </tbody>            
          </table>
        </div>
    </div>
  );
}

export default DashHome;
