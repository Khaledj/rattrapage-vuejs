import Vue from 'vue'
import App from './App.vue'
import Projet from './Projet.vue'


Vue.component('projet',Projet)

new Vue({
  el: '#app',
  render: h => h(App)
})
