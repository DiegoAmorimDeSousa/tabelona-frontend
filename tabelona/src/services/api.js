import axios from 'axios';

export const API_TOKEN = 'API_TOKEN';

const url = process.env.REACT_APP_API_URL || 'http://localhost:9055';

axios.defaults.baseURL = `${url}/`;

export const AxiosWithInterceptors = axios.create({
  headers: { common: { authorization: `Bearer ${localStorage.getItem(API_TOKEN)}` } },
});


AxiosWithInterceptors.interceptors.response.use(response => response, (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem(API_TOKEN);
      window.location.reload()
    }
    return Promise.reject(error);
});


export const AxiosWithoutInterceptors = axios.create();

export default AxiosWithInterceptors;
