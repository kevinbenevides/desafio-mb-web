import { createApp } from "vue";
import App from "./App.vue";
import './assets/style.css';
import { vMaska } from "maska/vue"

const app = createApp(App);

app.directive("maska", vMaska)

app.mount("#app");