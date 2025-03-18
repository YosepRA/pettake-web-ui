import { createContext, useContext, useState, useEffect } from 'react';

import user from '@Features/user/index.js';
import { promiseResolver } from '@Utils/index.js';

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

  useEffect(() => {
    const initiateSession = async () => {
      const [result, getUserSessionError] = await promiseResolver(
        userAPI.getUserSession(),
      );

      if (getUserSessionError || result.status === 'error') {
        console.error(
          'Get user session error:',
          getUserSessionError || result.message,
        );

        return undefined;
      }

      if (result.user !== null) {
        setIsLoggedIn(true);
        setUser(result.user);
      }

      return undefined;
    };

    initiateSession();
  }, []);

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
