import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://curso-vue-udemy-e262c.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;

    Vue.prototype.$http.interceptors.request.use(req => {
      // if(req.method == "post") {
      //   req.method = "put";
      // }
      console.log(req.method);
      return req;
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
      const array = [];
      for(let chave in res.data) {
        array.push({ id: chave, ...res.data[chave] });
      }
      res.data = array;
      console.log(res);
      return res;
    }, error => Promise.reject(error))
  }
});
