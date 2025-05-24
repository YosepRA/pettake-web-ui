import React from 'react';
import { Link as RouterLink } from 'react-router';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { userNavigationItems } from '@Data/index.js';
import useRouteMatch from '@Components/hooks/useRouteMatch.jsx';

const UserNavigation = function UserNavigationComponent() {
  const patterns = userNavigationItems.map((item) => item.path);
  const routeMatch = useRouteMatch(patterns);
  const activePath = routeMatch?.pattern?.path;

  return (
    <Tabs value={activePath} sx={{ mb: 2 }}>
      {userNavigationItems.map(({ label, path, to }) => (
        <Tab
          key={path}
          label={label}
          value={path}
          to={to}
          component={RouterLink}
        />
      ))}
    </Tabs>
  );
};

export default UserNavigation;
