<template>
  <div id="app">

    <!-- <Header />

    <About />

    <p/>

    

    <InputBox 
      v-on:submit_from_input="submit_from_input"
    /> -->

    <!-- <b-nav tabs>
      <b-nav-item><router-link to="/">Main</router-link></b-nav-item>
      <b-nav-item><router-link to="/About">About</router-link></b-nav-item>
    </b-nav> -->

    

    <router-view class="Nav" name="nav"></router-view>

    <p/>

    <router-view class="Content"></router-view>

    <p/>

    <!-- <InformationBlock 
      v-if="all.length"
      :single_mission="all[last.flight_number]"
      
    />

    <InformationBlock 
      v-if="all.length"
      :single_mission="all[index]"
      :next="next"
    /> -->

    <patch 
      v-for="i in last.flight_number"
      :key="i"
      :single_mission="all[i]"
      :next="next"
    />

    <!-- <div 
      v-for="i in 10"
      :key="i"
      >
      {{ i }}
    </div> -->

    <!-- <InformationBlock 
      v-for="i in last.flight_number"
      :key="i"
      :single_mission="all[i]"
      :next="next"
    /> -->

    <!-- <div>
      {{ last.flight_number }}
    </div> -->

    

    <!-- <Footer /> -->
    
    <!-- <Debug /> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import InformationBlock from './components/InformationBlock.vue'
// import Patch from './components/Patch.vue'
// import InputBox from './components/InputBox.vue'
// import About from './components/About.vue'
// import Debug from './components/Debug.vue'



export default {
  name: 'App',
  components: {
    // Header,
    // InformationBlock,
    // Patch,
    // InputBox,
    // Footer,
    // About
    // Debug
  },
  data() {
    return {
      all: [],
      last: [],
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
        });
    fetch('https://api.spacexdata.com/v3/launches/latest', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
        .then((jsonData) => {
          this.last = jsonData
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
  background: #f1f1f1;
}


</style>
