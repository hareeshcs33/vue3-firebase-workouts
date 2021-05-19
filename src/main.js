import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from 'firebase';
import axios from 'axios'

window.axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3333';


createApp(App).use(store).use(router).mount("#app");
