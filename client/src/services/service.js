import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

service.interceptors.response.use((response) => {
  if(response.data.status !== 'ok') Promise.reject('Server internal error');
  return response.data.payload;
}, (error) => {
  return Promise.reject(error);
});

service.defaults.timeout = 10000;
service.defaults.headers.post['Content-Type'] = 'application/json';
service.defaults.headers.put['Content-Type'] = 'application/json';

export default service;
