import React, { createContext, useContext, useMemo, useState } from "react";

const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setCurrentUser = (userEmail) => {
    setUserEmail(userEmail);
    setIsAuthenticated(true);
  };

  const removeUser = () => {
    setUserEmail(null);
    setIsAuthenticated(false);
  };

  const sessionValue = useMemo(
    () => ({ isAuthenticated, userEmail, setCurrentUser, removeUser }),
    [isAuthenticated, userEmail]
  );

  return (
    <SessionContext.Provider value={sessionValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};

export default SessionProvider;
