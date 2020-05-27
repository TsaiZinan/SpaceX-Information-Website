<template>
  <div id="app">

    <Header />

    <p/>

    <InputBox 
      v-on:submit_from_input="submit_from_input"
    />

    <p/>

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
import InputBox from './components/InputBox.vue'
// import Debug from './components/Debug.vue'

export default {
  name: 'App',
  components: {
    Header,
    InformationBlock,
    InputBox
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
    },
    submit_from_input: function(input) {
      this.index=input
    },
    
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
