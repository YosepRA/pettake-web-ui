import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router';

import { useAuthentication } from '@Features/user/AuthenticationContext.jsx';

const AuthLayout = function AuthLayoutComponent() {
  const { isLoggedIn } = useAuthentication();
  const location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/user/login" state={{ from: location }} />
      )}
    </>
  );
};

export default AuthLayout;
