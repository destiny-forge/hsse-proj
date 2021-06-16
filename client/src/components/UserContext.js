import React from 'react';
import { useState } from 'react';

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [token, setToken] = useState(null);

  const logout = () => {
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserConsumer };
