<template>
  <ul>
    <li v-bind:key="stallion.name" v-for="stallion in corral">
      <Stallion 
        :name="stallion.name" 
        :slack="stallion.slack"
        :info="stallion.info"
        :image="stallion.image"
      ></Stallion>
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
import { team } from "../../Data/";
import Stallion from './Member.vue';


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
<style lang="sass" scoped>
ul
  display: flex
  flex-wrap: wrap
  justify-content: space-around

li
  width: 30%
  padding: 10px
</style>