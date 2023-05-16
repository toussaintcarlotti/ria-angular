import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://ria-projet-laravel.carlotti-toussaint.com',
  baseURL: 'http://ria_projet_laravel.test',
  // baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json';

    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'token'
      )}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default instance;
