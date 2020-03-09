import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'inserir-url-do-projeto-no-firebase',
    }),

    Vue.prototype.$http.interceptors.response.use(response => {
      const array = [];
      for(let key in response.data) {
        array.push({ id: key, ...response.data[key] });
      }

      response.data = array;
      return response;
    }, error => Promise.reject(error))
  },
});


