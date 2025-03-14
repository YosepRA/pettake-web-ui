import { createContext, useContext, useState } from 'react';

import user from '@Features/user/index.js';

const { api: userAPI } = user;

const defaultValues = {
  isLoggedIn: false,
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
};

const AuthenticationContext = createContext(defaultValues);

export const AuthenticationProvider = function AuthenticationProviderComponent({
  children,
}) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (data) => {
    const result = await userAPI.login(data);

    if (result.status === 'error') {
      throw new Error(result.message);
    }

    setIsLoggedIn(true);
    setUser(result.user);

    return result;
  };

  const register = async (data) => {
    const result = await userAPI.register(data);

    if (result.status === 'error') {
      throw new Error(result.message);
    }

    setIsLoggedIn(true);
    setUser(result.user);

    return result;
  };

  const logout = async () => {
    const result = await userAPI.logout();

    if (result.status === 'error') {
      throw new Error(result.message);
    }

    setIsLoggedIn(false);
    setUser(null);

    return result;
  };

  return (
    <AuthenticationContext.Provider
      value={{ isLoggedIn, user, login, register, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);

export default AuthenticationContext;
