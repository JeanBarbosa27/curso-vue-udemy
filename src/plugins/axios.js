import Vue from "vue";
import axios from "axios";

// Para acessar o axios de forma global
// axios.defaults.baseURL = "https://curso-vue-udemy-e262c.firebaseio.com/";
// axios.defaults.headers.common["Authorization"] = "1asb23";
// axios.defaults.headers.get["Accepts"] = "application/json";

Vue.use({
  install(Vue) {

    // Para acessar o axios via instâncias
    Vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-udemy-e262c.firebaseio.com/",
      headers: {
        "Authorization": "1asb23",
      },
      // Só requisições do tipo get vão enviar esse accept
      get: {
        "Accept": "application/json"
      }
    });

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
