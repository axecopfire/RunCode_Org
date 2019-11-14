<template>
  <ul>
    <li v-bind:key="stallion.name" v-for="stallion in corral">
      <!-- <p>{{stallion.info}}</p> -->
      <Stallion 
        :name="stallion.name" :slack="stallion.slack"
        :info="stallion.info"
        :image="stallion.image"
       />
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
import { team } from "../Data/";
import Stallion from './Stallion.vue';


export default Vue.extend({
  data() {
    return {
      bundler: "Parcel",
      corral: team
    }
  },
  components: {
    Stallion
  }
});
</script>