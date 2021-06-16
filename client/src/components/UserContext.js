import React from 'react';
import { useState } from 'react';

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  const initial = {
    id: null,
    email: null,
    token: null,
    loggedIn: false,
  };
  let [user, setUser] = useState(initial);

  const editUser = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const logout = () => {
    setUser(initial);
  };

  return (
    <UserContext.Provider value={{ user, editUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserConsumer };
