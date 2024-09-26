import React from 'react'
import { useContext } from 'react';
import { AppContext } from './ContextTutorial';
export default function Login() {
    const { setUsername } = useContext(AppContext);
    return (
        <div>
            <input onChange={(e) => { setUsername(e.target.value); }} />
        </div>
    )
}
