<template>
  <div>
    <h1> Interface de gestion de projet </h1>
    <p v-if="loading"> loading... </p>
        <input type="text" placeholder="tape le nom du projet" v-model="search"/>
     <router-link :to="{ name: 'ajout',params:{projets}}" @ajout="getprojets" class="btn btn-primary"> Ajouter un projet </router-link>
    <table>
         <tr>
           <th> Nom </th>
           <th>Date de création <i @click="sortedDate" class="fas fa-caret-up" > </i> <i @click="reverseDate" class="fas fa-caret-down" ></i></th>
           <th> Détail</th>
           <th>Supprimer</th>
         </tr>
        <tr v-for="projet in listfiltered">
            <!--<td>{{projet.nom}}</td>-->
          <td>{{projet.name}}</td>
            <!--<td> {{projet.creation}}</td>-->
          <td> {{projet.createdAt}}</td>
            <td><router-link :to="{ name: 'Projet', params: { projet } }" class="btn btn-success"> Detail </router-link></td>
            <td> <button @click="destroy(projet.id)" class="btn btn-danger"> Supprimer </button></td>
          </tr>
        </table>
  </div>

</template>

<script>
  import Projet from './Projet'
  import axios from 'axios'

  function research(tableau,chaine) {
    let tab2 = [];
    for (let i = 0; i < tableau.length; i++) {
      // if (tableau[i].nom.startsWith(chaine)) {
       if (tableau[i].name.toUpperCase().startsWith(chaine)) {
        tab2.push(tableau[i]);
      }
    }
    return tab2;
  }

    export default {
      components: {"detail": Projet},
      name: "liste-projet",
      data() {
        return {
          search: '',
          loading: false,
          // projets: [
          //   {
          //     _id: "5b3e3da860e7c6eeb88e3ceb",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ZENTURY",
          //     creation: "Sat May 25 1974 16:52:45 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da85d52b4482e60904a",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "POLARAX",
          //     creation: "Mon Jun 27 1988 07:42:07 GMT+0200 (Central European Summer Time)"
          //   },
          //   {
          //     _id: "5b3e3da830d91c6264ec2371",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "BICOL",
          //     creation: "Sat Feb 28 2009 15:57:42 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da84172d52b597c35ca",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "CYTREX",
          //     creation: "Tue Oct 06 1970 07:07:42 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da8bdabcef689e8f0d4",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "PLAYCE",
          //     creation: "Sun Aug 29 2010 07:52:18 GMT+0200 (Central European Summer Time)"
          //   },
          //   {
          //     _id: "5b3e3da8f5132e9b61630c5e",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "NETROPIC",
          //     creation: "Fri Nov 17 1989 09:10:32 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da83cec1f4a3f959388",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "UNISURE",
          //     creation: "Tue Aug 09 2005 02:26:51 GMT+0200 (Central European Summer Time)"
          //   },
          //   {
          //     _id: "5b3e3da83319a70043710f9f",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "CALCU",
          //     creation: "Mon Jan 14 1980 12:08:39 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da8dfc260a3993d2e64",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "QUADEEBO",
          //     creation: "Thu Jan 08 2009 03:25:20 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da8a8b5ffda3cf89cc0",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "PROXSOFT",
          //     creation: "Sun Jan 04 1998 23:19:53 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da87d3d148f090316ca",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "VERBUS",
          //     creation: "Mon Mar 12 1990 07:33:18 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da8e734d6f18fd20d99",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "FURNITECH",
          //     creation: "Fri Jan 15 1971 15:23:19 GMT+0100 (Central European Standard Time)"
          //   },
          //   {
          //     _id: "5b3e3da84769754f62adcd1e",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ZENTHALL",
          //     creation: "Mon Sep 26 1994 07:13:17 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da8e0ca663902594537",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "BEADZZA",
          //     creation: "Sun Dec 07 1975 14:46:01 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da88c8a4ff9e7a470af",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ENERSOL",
          //     creation: "Fri Oct 28 2016 03:41:22 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da8971220d673089795",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ORBIN",
          //     creation: "Wed Mar 17 1999 20:59:11 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da8b36fc54ea95f52fe",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ANDRYX",
          //     creation: "Sat Apr 20 2013 16:19:59 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da8387a4b96cd64ac5c",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "MARKETOID",
          //     creation: "Wed Apr 14 2004 19:06:20 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da8524620a282935367",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "COMBOGENE",
          //     creation: "Thu Apr 02 1998 14:13:33 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da8bd1847d4bd46ceb3",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "PASTURIA",
          //     creation: "Fri Jan 26 1979 22:25:57 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da83802b7161e97bcb5",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ECRAZE",
          //     creation: "Sun Jul 30 1989 18:07:17 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da81b7d9fdc1ac4a598",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "KEEG",
          //     creation: "Tue Nov 23 1976 03:32:12 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da8408a1a197944bb07",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "SHOPABOUT",
          //     creation: "Sun Jun 24 1990 03:34:24 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da855907b132f341230",
          //     isActive: true,
          //     picture: "http://placehold.it/32x32",
          //     nom: "ZILLAR",
          //     creation: "Mon Oct 10 2016 19:36:16 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da8a72b0faaac30690b",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "EQUITAX",
          //     creation: "Fri Sep 11 1992 06:15:12 GMT+0200 (Central European Summer Time)",
          //   },
          //   {
          //     _id: "5b3e3da85447219ab25178da",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "DIGIPRINT",
          //     creation: "Thu Dec 10 1981 23:31:45 GMT+0100 (Central European Standard Time)",
          //   },
          //   {
          //     _id: "5b3e3da861f2d927949fa8da",
          //     isActive: false,
          //     picture: "http://placehold.it/32x32",
          //     nom: "PUSHCART",
          //     creation: "Tue Feb 25 1975 21:31:07 GMT+0100 (Central European Standard Time)",
          //   }],
          projets: [],
        }
      },
      created() {
       this.getprojets();
      },

      computed: {
        listfiltered: function () {
          return research(this.projets, this.search.toUpperCase());
        }
      },
      methods: {
        sortedDate: function () {
          this.projets.sort(function (date1, date2) {
            if (new Date(date1.creation) > new Date(date2.creation)) {
              return 1;
            } else if (new Date(date1.creation) < new Date(date2.creation)) {
              return -1;
            } else if (new Date(date1.creation) === new Date(date2.creation)) {
              return 0;
            }
          });

          return this.projets;
        },
        reverseDate: function () {
          this.projets.sort(function (date1, date2) {
            if (new Date(date1.creation) > new Date(date2.creation)) {
              return 1;
            } else if (new Date(date1.creation) < new Date(date2.creation)) {
              return -1;
            } else if (new Date(date1.creation) === new Date(date2.creation)) {
              return 0;
            }
          });
          return this.projets.reverse();
        },
        destroy : function (id) {
           axios.delete('https://daily-standup-campus.herokuapp.com/api/projects/'+id+'?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
            .then(response=> {
              console.log("le projet est detruit :"+ response.data);
              axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
                .then(response=> {
                  this.projets = response.data;
                })
             })
        },
        getprojets : function() {
          this.loading = false;
          axios.get('https://daily-standup-campus.herokuapp.com/api/projects?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjNmODIzYTM5YjlmMDAxNGViNGJlNiIsImlhdCI6MTUzMTE0Mjg1MX0.K5e_nO1kl0sOOK8rvjYTiRkHPk2vBoGcSGY0Xh3zVQg')
            .then(response => {
              this.projets = response.data,
                this.loading = false;
            })
            .catch(e => {
              this.error.push(e)
            })
          this.loading = true;
        }

      }
    }



</script>



<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    margin:auto;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
 input {
   margin-left:-380px;
 }

</style>
