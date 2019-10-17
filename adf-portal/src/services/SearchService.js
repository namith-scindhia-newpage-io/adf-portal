import axios from 'axios';

var apiClient = axios.create({
  baseURL: 'http://localhost:4001/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  search() {
    return apiClient.get('search');
  }
}
