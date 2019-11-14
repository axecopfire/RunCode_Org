// import Data from '../Data';
import App from "./Stallion/Index.vue";
import Vue from 'vue';

window.onload = () => {

  // Stallions
  new Vue({ render: createElement => createElement(App) }).$mount("#Stallions");
}