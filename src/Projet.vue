<template>
  <div v-bind:class="{ 'projet':!isActive}">
    <h2>  {{n}}</h2>
    <img v-bind:src = 'picture'> </img>
    <p v-if="isActive">projet actif</p>
    <p v-else>projet non actif</p>
  </div>
</template>

<script>
    export default {
        props : [],
        name: 'projet',
        data : function() {
          return {
            _id : '5b3e3da861f2d927949fa8da',
            isActive : false,
            picture : 'http://placehold.it/32x32',
            n : 'PUSHCART',
            creation : 'Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)'
          }
        }
    }
</script>

<style scoped>
.projet {
  border : solid;
  background-color : red;
  width : 250px;
  margin:auto;

}
</style>

