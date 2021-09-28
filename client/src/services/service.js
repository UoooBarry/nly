import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

service.defaults.timeout = 10000;
service.defaults.headers.post['Content-Type'] = 'application/json';

export default service;
