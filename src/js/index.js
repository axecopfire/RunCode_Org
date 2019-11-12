// import Data from '../Data';
import App from "./Stallions.vue";
import Vue from 'vue';

window.onload = () => {

  new Vue({ render: createElement => createElement(App) }).$mount("#Stallions");
}