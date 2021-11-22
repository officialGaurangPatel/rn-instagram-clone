import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthNavigation = () => {
    const [currentUser, setCurrnetUser] = useState(null)
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrnetUser(user)
        })
    }, [])

    return (
        <>
            {currentUser ? <SignedInStack /> : <SignedOutStack />}
        </>)
}

export default AuthNavigation
