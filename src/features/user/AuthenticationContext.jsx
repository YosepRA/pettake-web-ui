import { createContext, useContext, useState } from 'react';

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

  const login = (user, cb) => {
    console.log('User login');

    setIsLoggedIn(true);
    cb();
  };

  const register = (user, cb) => {
    console.log('User registration');
  };

  const logout = (cb) => {
    console.log('User logout');

    setIsLoggedIn(false);
    cb();
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
