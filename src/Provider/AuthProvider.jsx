import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //   create user with email password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   sign out user
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    signOutUser,
    registerUser,
    loginUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
