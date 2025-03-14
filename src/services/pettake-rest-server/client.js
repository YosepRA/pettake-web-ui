import axios from 'axios';

const restClientConfig = {
  baseURL: 'http://localhost:3000',
  withCredentials: true,
};

const client = axios.create(restClientConfig);

export default client;
