import React, { useEffect } from 'react';
import { useState } from 'react';
import decode from 'jwt-decode';
import ProfileService from '../services/ProfileService';

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

const UserProvider = ({ children }) => {
  let [user, setUser] = useState({});
  let [token, setToken] = useState(null);
  const Profile = ProfileService();

  useEffect(() => {
    let jwt = localStorage.getItem('client_token');
    if (jwt !== null) {
      getProfile();
    }
  }, []);

  const getProfile = () => {
    Profile.get()
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, getProfile, token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserConsumer };
