import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';

import IndexLayout from '@Components/IndexLayout.jsx';
import AuthLayout from '@Components/AuthLayout.jsx';
import Home from '@Pages/Home/index.jsx';
import PetDetails from '@Pages/PetDetails/index.jsx';
import UserPetList from '@Pages/User/PetList/index.jsx';
import UserSettings from '@Pages/User/Settings/index.jsx';
import PetForm from '@Pages/User/PetForm.jsx';
import Login from '@Pages/User/Login/index.jsx';
import Register from '@Pages/User/Register/index.jsx';

const App = function AppComponent() {
  return (
    <>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route index element={<Home />} />

            <Route path="pet/:id" element={<PetDetails />} />

            <Route path="user" element={<AuthLayout />}>
              <Route index element={<Navigate to="/user/pet" />} />

              <Route path="pet">
                <Route index element={<UserPetList />} />

                <Route path="new" element={<PetForm />} />
                <Route path=":id/edit" element={<PetForm />} />
              </Route>
              <Route path="settings" element={<UserSettings />} />
            </Route>

            <Route path="user">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
