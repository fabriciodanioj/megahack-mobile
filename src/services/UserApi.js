import axios from 'axios';

const api = axios.create({
  baseURL: 'https://umhelp-users-api-service.heroku.com/user',
});

export default api;
