import axios from 'axios';

const http = axios.create({
  baseURL: "https://app.pyronftstudio.com/api",
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    },
  },
});

export default http;
