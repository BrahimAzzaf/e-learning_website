import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/dashboard')
            .then(({ data }) => {
                console.log('User data:', data); // Log the user data
                setUser(data); // Ensure data has a name field
            })
            .catch((error) => {
                console.error('Error fetching user profile:', error);
            });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
