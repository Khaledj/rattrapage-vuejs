import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Projet from './Projet.vue'
import listeProjet from './listeProjet.vue'


Vue.use(VueRouter)

const routes = [
  {path : '/', name : 'listeProjet', component : listeProjet},
  {path : '/projet', name: 'Projet', component : Projet, props: true}
]
const router = new VueRouter ({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
