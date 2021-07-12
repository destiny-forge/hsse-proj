import React, { useEffect } from 'react';
import { useState } from 'react';
import decode from 'jwt-decode';

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  let [user, setUser] = useState({});
  let [token, setToken] = useState(null);

  useEffect(() => {
    let jwt = localStorage.getItem('client_token');
    if (jwt !== null) {
      setUser(decode(jwt));
    }
  }, []);

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
