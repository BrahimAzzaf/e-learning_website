import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashProfile from '../components/DashProfile';
import DashSidebar from '../components/DashSidebar';
import DashUsers from '../components/DashUsers';
import DashHome from '../components/DashHome';

function Dashboard() {
  const [view, setView] = useState('users'); // Default to 'users' view
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is an admin
    const checkAdminStatus = async () => {
      try {
        const response = await axios.get('/dashboard', { withCredentials: true });
        if (!response.data.isAdmin) {
          navigate('/login'); // Redirect to login if not admin
        }
      } catch (error) {
        navigate('/login'); // Redirect to login if any error occurs
      }
    };

    checkAdminStatus();
  }, [navigate]);

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
