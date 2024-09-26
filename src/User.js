import React from 'react'
import { useContext } from 'react'
import { AppContext } from './ContextTutorial'

export default function User() {
    const { username } = useContext(AppContext);
    return (
        <div> User : {username}</div>
    )
}
