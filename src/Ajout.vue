<template>
  <div class="container">
    <h2>Remplir le formulaire </h2>
    <form>
      <div class="form-group">
        <label >Name:</label>
        <input type="text" class="form-control"  placeholder="Enter name"  v-model="name">
      </div>
      <div class="form-group">
        <label>description:</label>
        <input type="text" class="form-control" placeholder="Enter description"  v-model="description">
      </div>
   <button @click="ajout" class="btn btn-success">Submit </button>
    </form>
  </div>
</template>
)
<script>
  import axios from 'axios'
    export default {
      name: "ajout",
      props: ['projets'],
      data() {
        return {
          name: '',
          description: '',
        }
      },
      methods: {
        ajout: function () {
          let objet = {"name": this.name, "description": this.description, "collaborators": []};
          this.newprojet = objet;
               axios.post('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg',this.newprojet)
                 .then(response => {
                   this.$emit('ajout');
                   this.$router.push({path: '/'});
                 })
                 .catch(e => {
                   this.error.push(e)
                   console.log(e);
                 })
             }
        }
      }

</script>

<style scoped>

</style>
