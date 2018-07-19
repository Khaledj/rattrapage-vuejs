<template>

  <div class="container-fluid">
   <div v-bind:class="{ active:oneprojet.isActive}">
      <div v-bind:class="{ nonactive:!oneprojet.isActive}">
        <h4> {{oneprojet.nom}}</h4>
        <div>
        <img v-bind:src='oneprojet.picture'> </img>
        </div>
        <br>
        <input type="checkbox" id="checkbox" v-model="oneprojet.isActive">
        <label v-if="oneprojet.isActive"> actif</label>
        <label v-else>non actif</label>
        <br>
        <router-link :to="'/projet'"> <button type="button" class="btn btn-success" > Detail </button></router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      props: ['oneprojet'],
      name: 'projet',
      data: function () {
        return {}
      },
    }
</script>

<style scoped>

.nonactive {
  border :  solid black 5px;
  background-color : lightskyblue;
  margin:1em 2em 1em 2em;

}
.active{
    border : solid black 5px;
    background-color : darkseagreen;
    margin:1em 2em 1em 2em;

}
</style>

