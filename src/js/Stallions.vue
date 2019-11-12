<template>
  <ul>
    <li v-bind:key="stallion.name" v-for="stallion in corral">{{stallion.name}}</li>
  </ul>
</template>

<script>
import Vue from "vue";
import { team } from "../Data/";

export default Vue.extend({
  data() {
    const output = {};
    output.bundler = "Parcel";
    output.corral = team;

    return output;
  }
});
</script>