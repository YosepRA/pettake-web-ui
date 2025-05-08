const navigationItems = {
  main: [
    {
      label: 'Home',
      path: '/',
    },
  ],
  user: {
    guest: [
      {
        label: 'Login',
        path: '/user/login',
      },
      {
        label: 'Register',
        path: '/user/register',
      },
    ],
    registered: [
      {
        label: 'Dashboard',
        path: '/user/pet',
      },
    ],
  },
};

export default navigationItems;
