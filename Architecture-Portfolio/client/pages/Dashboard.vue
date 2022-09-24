<template>
  <!-- <div class="container mt-5" v-if="isAuthenticated"> -->
  <div class="container mt-5">
    <div class="row" > 
      <div class="col-12 mb-4">
        <div class="buttons">
          <div><button class="button-color-delete w-button button-logout" @click="logout">Logout</button></div>
          <div><NuxtLink to="/AddProjectPage"><a class="button-primary w-button">Add Project</a></NuxtLink></div>
        </div>
      </div>
      <div v-if="!projects.length">Nothing is loading, try again.</div>
      <div style="display: flex; flex-wrap: wrap; gap: 2em; justify-content: center;">
        <div v-for="project of projects" class="card recipe-card box-shadow width28" :key="project">
          <img :src="project.imageUrl" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h5 class="card-text">{{ project.description }}</h5>
           
            <div class="action-buttons">
              <div class="action-buttons">
        
               <NuxtLink :to="{ name: 'EditPage', params: { projectId: project._id }}"><a class="btn btn-sm button-color-view">Edit </a></NuxtLink>
                <button class="btn btn-sm button-color-delete" @click="onDelete(project._id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashboardGallery />
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import dashboardGallery from '../components/dashboardGallery.vue'
  import { mapGetters } from "vuex";
  export default {

    components: {
      dashboardGallery
    },

    data() {
      return {
        projects: [],
        token:''
      }
    },

    created() {
      if (typeof window !== 'undefined') {
        this.token = localStorage.getItem('token');
      }
     
      if (this.token == null){
        this.$router.push('/login')
      }
      let url = 'https://thesis-project-beta.herokuapp.com/api/v1/project'
      axios.get(url).then((res) =>this.projects = res.data.projects )
    },
    computed: {
    ...mapGetters(["isLoggedIn", 'isAuthenticated', 'loggedInUser'])
    },
    methods: {
    async onDelete(projectId) {
      try {
        const result = await axios.delete(`https://thesis-project-beta.herokuapp.com/api/v1/project/hardDelete/${projectId}/`,{
          headers:{
            'auth-token':localStorage.getItem('token')
          }
        }); 
          if(result.status == 200){
            location.reload()
          }
      } catch (e) {
        console.log(e);
      }},
      async logout() {
      localStorage.removeItem('token')
      location.reload()
      },
    }
  }
</script>
<style scoped>
  .card .content span:first-child {
  margin-bottom: 10px;
  font-weight: 700;
  text-align: center;
  color: var(--darkGreen);
  font-size: 16px;
  }
  .card:hover .image img {
  transform: scale(1) !important;
  cursor: default;
  }
  .card img {
  transform: scale(1) !important;
  }
  .card-text {
    font-size: 0.8em;
    font-weight: 500;
  }
  .card-text2 {
    font-size: 0.85em;
    font-weight: 500;
  }
 .row {
  justify-content: center;
  margin-top: 2em;
 }
 .width28{ 
  width: 28%;
 }
 .buttons {
  display: flex;
  justify-content: space-between;
 }
 .buttons:nth-child(1) {
  text-align: right;
 }
 .button-logout {
  padding: 24px 50px;
  border-style: none;
  border-radius: 80px;
  -webkit-transition: color 300ms ease, box-shadow 300ms ease,
  background-color 300ms ease, -webkit-transform 300ms ease;
  transition: color 300ms ease, box-shadow 300ms ease,
  background-color 300ms ease, -webkit-transform 300ms ease;
  transition: color 300ms ease, transform 300ms ease, box-shadow 300ms ease,
  background-color 300ms ease;
  transition: color 300ms ease, transform 300ms ease, box-shadow 300ms ease,
  background-color 300ms ease, -webkit-transform 300ms ease;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  }
  .button-logout:hover {
  background-color: #CE9E95;
  box-shadow: 0 4px 20px -5px rgba(20, 20, 43, 0.15);
  -webkit-transform: translate3d(0px, -6px, 0.01px);
  transform: translate3d(0px, -6px, 0.01px);
  color: #fff;
  text-decoration: none;
  }
  @media screen and (max-width: 768px) {
  .card {
  width: 100%;
  }
  .card .content {
  bottom: 0;
  }
  }
  @media screen and (max-width: 480px) {
  .card {
  width: 85%;
  }
  .button-logout {
  padding: 16px 30px 16px 30px;
  }
  }
</style>