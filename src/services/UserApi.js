import axios from 'axios';

const api = axios.create({
  baseURL: 'https://umhelp-users-api-service.herokuapp.com',
});

export default api;
