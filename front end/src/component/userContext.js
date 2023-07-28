import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
