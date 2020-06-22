import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(VueRouter);

Vue.use(VueAxios, axios)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


import Header from './components/Header.vue'
//import Footer from './components/Footer.vue'
//import InformationBlock from './components/InformationBlock.vue'
import Patch from './components/Patch.vue'
import InputBox from './components/InputBox.vue'
import About from './components/About.vue'

//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

const routes = [
  { 
    path: '/', 
    components: {
      default: InputBox,
      nav: Header 
    }
  },
  { 
    path: '/Patch', 
    components: {
      default: Patch,
      nav: Header 
    }
  },
  { 
    path: '/About', 
    components: {
      default: About,
      nav: Header 
    }
  }
];

const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
