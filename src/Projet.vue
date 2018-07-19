<template>
  <div v-bind:class="{ active:isActive}">
    <div v-bind:class="{ nonactive:!isActive}">
      <h2> {{n}}</h2>
      <img v-bind:src='picture'> </img>
      <div>
      <input type="checkbox" id="checkbox" v-model="isActive">
      <label v-if="isActive"> actif</label>
      <label v-else>non actif</label>
      </div>

    </div>
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
.nonactive {
  border : solid;
  background-color : red;
  width : 250px;
  margin:auto;

}
.active{
    border : solid;
    background-color : green;
    width : 250px;
    margin:auto;
}
</style>

