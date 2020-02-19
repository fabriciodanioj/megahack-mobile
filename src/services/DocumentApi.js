import axios from 'axios';

const api = axios.create({
  baseURL: ' https://microservico.herokuapp.com/analisecredial/v1',
});

export default api;
