<template>
  <div id="app" v-bind:p="projets">
    <h1>{{ msg }}</h1>
    <listeProjet ></listeProjet>
  </div>
</template>

<script>
  import listeProjet from './listeProjet';
export default {
  name: 'app',
  components : {listeProjet},
  data () {
    return {
      msg: 'Interface de gestion de projet'

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
