import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.245.224:8080/api' });

