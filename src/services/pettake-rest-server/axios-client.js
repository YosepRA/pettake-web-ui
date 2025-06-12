import axios from 'axios';

const axiosClientConfig = {
  baseURL: 'http://localhost:3000',
  withCredentials: true,
};

const axiosClient = axios.create(axiosClientConfig);

export default axiosClient;
