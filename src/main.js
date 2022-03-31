import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import globalFunction from "./globalFunction";

createApp(App).use(router).mount("#app");

// Vue.use(globalFunction);