import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)//con questo creiamo nell index quello che noi vogliamo
    .use(store)
    .use(router)// con questo si instrada le view
    .mount("#app");//questo sta in public e in un singolo file html
