// Dashboard.js
import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Dashboard() {
    const { user } = useContext(UserContext);
    
    console.log('Dashboard user:', user); // Log the user data

    if (!user) {
        return <div>Loading...</div>; // Handle loading state
    }

    return (
        <div className='p-10 flex flex-col items-center justify-center'>
            <h1 className='text-xl font-bold text-[--primary-color] text-center'>Dashboard</h1>
            <h1>Welcome {user.name}!</h1>
        </div>
    );
}

export default Dashboard;
