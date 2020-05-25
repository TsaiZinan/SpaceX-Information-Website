<template>
  <div id="Data">{{data}}</div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Data",
  data() {
    return {
      data: {}
    };
  },
  beforeMount(){
    this.getName();
  },
  methods: {
    async getName(){
      const { data } = await axios.get("https://api.spacexdata.com/v3/launches");
      this.data = data;
    }
  }
};
</script>