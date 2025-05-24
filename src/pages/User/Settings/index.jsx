import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import UserProfileSetting from './UserProfileSetting.jsx';
import UserPasswordSetting from './UserPasswordSetting.jsx';
import UserNavigation from '../UserNavigation.jsx';

const UserSettings = function UserSettingsComponent() {
  return (
    <Container sx={{ pt: { sm: 1, md: 2 } }}>
      <UserNavigation />

      <UserProfileSetting />

      <UserPasswordSetting />
    </Container>
  );
};

export default UserSettings;
