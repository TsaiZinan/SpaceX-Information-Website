<template>
  <div id="app">

    <Header />
    <InformationBlock 
      v-if="all.length"
      :single_mission="all[index]"
      :next="next"
    />
    <!-- <Debug /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import InformationBlock from './components/InformationBlock.vue'
// import Debug from './components/Debug.vue'

export default {
  name: 'App',
  components: {
    Header,
    InformationBlock,
    // Debug
  },
  data() {
    return {
      all: [],
      index: 0
    }
  },
  methods: {
    next() {
      this.index++
    }
  },
  mounted: function() {
    fetch('https://api.spacexdata.com/v3/launches', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
        .then((jsonData) => {
          this.all = jsonData
        })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
