<!--<template>-->
  <!--<div class="container-fluid">-->
   <!--<div v-bind:class="{ active:projet.isActive}">-->
      <!--<div v-bind:class="{ nonactive:!projet.isActive}">-->
        <!--<h4> {{projet.nom}}</h4>-->
      <!--<div>-->
    <!--<img v-bind:src='projet.picture'> </img>-->
       <!--</div>-->
  <!--<br>-->
  <!--<input type="checkbox" id="checkbox" v-model="projet.isActive">-->
  <!--<label v-if="projet.isActive"> actif</label>-->
  <!--<label v-else>non actif</label>-->
  <!--<br>-->
  <!--</div>-->
  <!--</div>-->
  <!--<router-link :to="{ name: 'listeProjet' }" class="btn btn-success"> Retour </router-link>-->
  <!--</div>-->
<!--</template>-->

<template>
  <div class="container-fluid">
    <div class="test">
      <br><div><img v-bind:src='projet.creator.picture'> </img></div>
      <br><h7> {{projet.creator.name}}</h7><br>
      <br><h4> {{projet.name}}</h4><br>
      <br> <p> {{projet.description}}</p>
      <span v-for="picture in projet.collaborators"><img v-bind:src='picture.picture'> </span>

      </div>
    <router-link :to="{ name: 'listeProjet' }" class="btn btn-success"> Retour </router-link>
  </div>
</template>

<script>
    export default {
      props: ['projet'],
      name: 'projet',
      data: function () {
        return {
        }
      },
    }
</script>

<style scoped>

.nonactive {
  border :  solid black 5px;
  background-color : lightskyblue;
  margin:1em 2em 1em 2em;

}
.active {
  border: solid black 5px;
  background-color: darkseagreen;
  margin: 1em 2em 1em 2em;
}
.test {
    border : solid black 5px;
    margin:1em 2em 1em 2em;
  }

</style>

