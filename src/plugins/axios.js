import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'inserir-url-do-projeto-no-firebase',
    }),

    Vue.prototype.$http.interceptors.response.use(response => {
      const array = [];
      for(let key in res.data) {
        array.push({ id: key, ...res.data[key] });
      }

      res.data = array;
      return res
    }, error => Promise.reject(error))
  },
});


