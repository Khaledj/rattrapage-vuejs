import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Projet from './Projet.vue'
import detailprojet from './detailprojet.vue'
import listeProjet from './listeProjet.vue'


Vue.use(VueRouter)

const routes = [
  {path : '/',component : listeProjet},
  {path : '/projet', name: 'detailprojet' ,component : detailprojet}
]
const router = new VueRouter ({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
