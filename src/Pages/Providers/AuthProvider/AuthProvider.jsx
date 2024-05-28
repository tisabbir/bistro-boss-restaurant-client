import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        //TODO: get token and store client
        const userInfo = {email: currentUser.email}
        axiosPublic.post('/jwt', userInfo )
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
      } else {
        //TODO: remove token (if token stored in the client site : Local storage, caching, in memory)
        localStorage.removeItem('access-token')
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const allInfo = {
    createUser,
    user,
    loading,
    setLoading,
    setUser,
    login,
    logOut,
    updateUserProfile,
    googleLogin
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
