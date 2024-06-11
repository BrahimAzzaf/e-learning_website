import React, { useState } from 'react';
import DashProfile from "../components/DashProfile";
import DashSidebar from "../components/DashSidebar";
import DashUsers from "../components/DashUsers";
import DashHome from '../components/DashHome';

function Dashboard() {
  const [view, setView] = useState('users'); // Default to 'users' view

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <DashSidebar setView={setView} />

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {view === 'home' && <DashHome />}
        {view === 'users' && <DashUsers />}
        {view === 'profile' && <DashProfile />}
      </div>
    </div>
  );
}

export default Dashboard;
