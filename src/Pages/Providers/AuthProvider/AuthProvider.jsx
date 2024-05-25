import { createContext, useState } from "react";
import { auth } from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
 
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  }

  const allInfo = {
   createUser,
   user,
   loading,
   setLoading,
   setUser,

  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
