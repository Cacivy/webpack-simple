import Vue from 'vue'
import axios from 'axios'

const host = 'http://localhost:8080/api/'

var instance = axios.create({
  baseURL: host,
  timeout: 3000,
  withCredentials: true,
  headers: {},
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  }
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

Vue.prototype.$http = instance