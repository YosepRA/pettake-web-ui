import axios from 'axios';

const baseURL = import.meta.env.VITE_PETTAKE_SERVER_BASE_URL;

const axiosClientConfig = {
  baseURL,
  withCredentials: true,
};

const axiosClient = axios.create(axiosClientConfig);

export default axiosClient;
