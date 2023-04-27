import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // login with google //
  const googleProviderLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // create user by  registration with email and password //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User with email and password //
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log OUt user //
  const logOut = () => {
    return signOut(auth);
  };

  // get current user //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user inside state change", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    googleProviderLogin,
    logOut,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
