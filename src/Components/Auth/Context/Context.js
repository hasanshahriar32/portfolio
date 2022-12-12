import React, { createContext, useState } from "react";
import { useEffect } from "react";

import app from "../Firebase/FirebaseConfig";

import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    setLoading(true);

    toast.success("Sign Out Successfully");
    return signOut(auth);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const sendEmailVerification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const updateProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const updateEmail = (email) => {
    setLoading(true);
    return updateEmail(auth.currentUser, email);
  };
  const updatePassword = (password) => {
    setLoading(true);
    return updatePassword(auth.currentUser, password);
  };
  const deleteUser = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };
  const reauthenticate = (password) => {
    setLoading(true);
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );
    return reauthenticateWithCredential(auth.currentUser, credential);
  };
  const googleOAuth = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const githubOAuth = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      //   console.log(currentuser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signin,
    signout,
    resetPassword,
    sendEmailVerification,
    updateProfile,
    updateEmail,
    updatePassword,
    deleteUser,
    reauthenticate,
    googleOAuth,
    githubOAuth,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer></ToastContainer>
    </AuthContext.Provider>
  );
};

export default UserContext;
