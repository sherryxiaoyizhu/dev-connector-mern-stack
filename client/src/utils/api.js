import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

// Create an instance of axios
const api = axios.create({
  // Run tests on localhost, use relative path when launching into production
  baseURL: 'http://localhost:5001/api',
  // baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
  NOTE: Intercept any error responses from the api and check if the token is no longer valid.
  i.e., Token has expired or user is no longer authenticated.
  Logout the user if the token has expired.
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
