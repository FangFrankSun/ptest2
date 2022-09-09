<template>
  <!-- <div class="container mt-5" v-if="isAuthenticated"> -->
  <div class="container mt-5">
    <a class="navbar-item"  @click="logout">Logout</a>
    <div class="row" > 
      <div class="col-12 text-right mb-4">
        <div class="justify-content-between">
          <NuxtLink to="/AddProjectPage"><a class="button-primary w-button">Add Project</a></NuxtLink>
        </div>
      </div>
      <div v-if="!projects.length">Nothing is loading, try again.</div>
      <div style="display: flex; flex-wrap: wrap; gap: 2em; justify-content: center;">
        <div v-for="project of projects" class="card recipe-card box-shadow width28">
          <img :src="project.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h5 class="card-text">{{ project.description }}</h5>
           
            <div class="action-buttons">
              <div class="action-buttons">
                <a href="/EditPage" class="btn btn-sm button-color-view">Edit</a>
                <button class="btn btn-sm button-color-delete" @click="onDelete(project.id)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashboardGallery />
    </div>
    <!-- <template v-else>
       <nuxt-link class="navbar-item" to="/Register">Register</nuxt-link>
       <nuxt-link class="navbar-item" to="/Login">Log In</nuxt-link>
     </template> -->
  </div>
</template>
<script>
  import dashboardGallery from '../components/dashboardGallery.vue'
  import { mapGetters } from "vuex";
  export default {
    //middleware: 'auth',

    components: {
      dashboardGallery
    },

    data() {
      return {
        projects: [],
      }
    },

    async fetch() {
      let url = 'https://thesis-project-beta.herokuapp.com/api/v1/project'
      this.projects = await fetch(url).then(res => res.json())
    },

    // async mounted() {
    //   const response = await fetch('https://api.nuxtjs.dev/posts', {
    //     headers: {"Content-Type": "application/json"},
    //     credentials: 'include',
    //   })
    //   const content = await response.json()
    // },
    

    computed: {
    ...mapGetters(["isLoggedIn", 'isAuthenticated', 'loggedInUser'])
    },
    methods: {
    async onDelete(project_id) {
      try {
        await this.$axios.$delete(`/dashboard/${project_id}/`); 
        let newProject = await this.$axios.$get("/dashboard/"); 
        this.recipes = newProjects; 
      } catch (e) {
        console.log(e);
      }},
      async logout() {
      await this.$auth.logout();
    },}

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
  }
</style>