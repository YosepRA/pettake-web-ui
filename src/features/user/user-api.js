import { axiosClient as client } from '@Services/pettake-rest-server/index.js';

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
  async getUserSession() {
    const response = await client.get('/user/get-user-session');

    return response.data;
  },
  async getUserProfile() {
    const response = await client.get('/user/profile');

    return response.data;
  },
  async changeUserProfile(userUpdate) {
    const response = await client.put('/user/profile', userUpdate);

    return response.data;
  },
  async changeUserPassword(userUpdate) {
    const response = await client.post('/user/change-password', userUpdate);

    return response.data;
  },
};

export default userAPI;
