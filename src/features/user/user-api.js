import client from '@Services/pettake-rest-server/index.js';

const userAPI = {
  async login(user) {
    const response = await client.post('/user/login', user);

    return response.data;
  },
  async register(user) {
    const response = await client.post('/user/register', user);

    return response.data;
  },
  async logout() {
    const response = await client.post('/user/logout');

    return response.data;
  },
};

export default userAPI;
