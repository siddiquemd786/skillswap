// src/components/layout/Authprovider.jsx
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Create user (Signup)
  const createUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Optional: update displayName & photoURL
        if (name || photoURL) {
          return updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          });
        }
      })
      .catch((err) => {
        console.error("Signup Error:", err.message);
      });
  };

  // 🔹 Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🔹 Track current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // cleanup when component unmounts
    return () => unsubscribe();
  }, []);

  // 🔹 Context value
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
