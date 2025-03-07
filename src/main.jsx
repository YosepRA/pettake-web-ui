import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AuthenticationProvider } from '@Features/user/AuthenticationContext.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </StrictMode>,
);
