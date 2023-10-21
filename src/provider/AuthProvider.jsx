import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const signInGoogle = () =>{
        return signInWithPopup(auth, provider);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('on auth state change user', createUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    }, [])

    const AuthInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signInGoogle,
        toggleTheme,
        darkMode
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;