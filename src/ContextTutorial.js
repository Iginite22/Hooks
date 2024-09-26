import React, { useState } from 'react'
import Login from './Login'
import User from './User'
import { createContext } from 'react';

export const AppContext = createContext(null);

export default function ContextTutorial() {
    const [username, setUsername] = useState('Abhay Thakur');
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login />
            <User />
        </AppContext.Provider>
    )
}
