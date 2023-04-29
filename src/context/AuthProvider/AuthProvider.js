import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // login with google //
  const googleProviderLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // create user by  registration with email and password //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User with email and password //
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // send email verification //
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // log OUt user //
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get user display name and photo url //
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // get current user //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user inside state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleProviderLogin,
    logOut,
    createUser,
    signInUser,
    updateUserProfile,
    verifyEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
