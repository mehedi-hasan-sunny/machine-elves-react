import axios from 'axios';

const http = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    },
  },
});

export default http;
