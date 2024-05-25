import { createContext, useState } from "react";

export const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('salad');

  const allInfo = {
    currentCategory,
    setCurrentCategory,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
