import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import jQuery from 'jquery'

import 'popper.js'
import './assets/app.scss'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

Vue.component('Navbar', require('./components/Navbar.vue').default) // because export was default?!
// Vue.component('HelloWorld', require('./components/HelloWorld.vue').default) //because export was default?!

declare global {
  interface Window {
      $:any;
      jQuery: any;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
