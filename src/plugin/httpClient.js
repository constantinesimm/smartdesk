import Axios from 'axios';

const httpClient = Axios.create({
  baseURL: process.env.NODE_ENV !== 'development' ? `${window.location.protocol}//${window.location.hostname}/api` : 'http://localhost:3000/api',
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  }
});

export default httpClient;
