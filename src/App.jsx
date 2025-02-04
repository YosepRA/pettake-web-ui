import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';

import IndexLayout from '@Components/IndexLayout.jsx';
import Home from '@Pages/Home/index.jsx';
import PetDetails from '@Pages/PetDetails/index.jsx';
import Contact from '@Pages/Contact/index.jsx';

import '@fontsource/roboto';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/700.css';

const App = function AppComponent() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route index element={<Home />} />

            <Route path="pet/:id" element={<PetDetails />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
