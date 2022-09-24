<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label for>Project Picture</label>
        <img
          v-if="preview"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="preview"
          name="imageUrl"
          id="imageUrl"
          >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          src="~/assets/image/placeholder1.png"
          >
        <input type="file" name="file" accept="image/*" class="chooseFile" @change="uploadImage"></input>
      </div>
      <div class="col-md-4" style="margin-top: 2.3em;" v-for="project in projects" :key="project.id">
        <div>
          <div class="form-group">
            <input type="text" name="name" id="name" v-model="project.name" class="form-control" placeholder="Project Name (e.g. Ağaoğlu Maslak 1453)">
          </div>
          <div class="form-group">
            <input type="text" name="role" id="role" v-model="project.role" class="form-control" placeholder="Role (e.g. Project Manager)">
          </div>
          <div class="form-group">
            <input type="text" name="year" id="year" v-model="project.year" class="form-control" placeholder="Year (e.g. 10.2014 - 10.2018)">
          </div>
          <div class="form-group">
            <textarea type="text" name="description" id="description" rows="7" v-model="project.description" class="form-control" placeholder="Description"></textarea>
          </div>
          <div class="form-group">
            <input type="text" name="reference" id="reference" placeholder="Reference" v-model="project.reference" class="form-control">
          </div>
          <div class="button-padding">
            <button  class="button-primary w-button" @click="createProject">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        projects: [
          {
            name: '',
            role:'',
            year: '',
            description: '',
            reference: '',
            imageUrl: ''
          }
        ],
        preview: ''
      }
    },
    
    methods: {
      async createProject() {
        const config = {
          headers: { 
                     "auth-token": localStorage.getItem('token')
                   },
        };
        try {
          const response = await axios.post('https://thesis-project-beta.herokuapp.com/api/v1/project', this.projects[0], config)
          if(response.status == 200){
          this.$router.push("/dashboard/");  
          }
          
        } catch (e) {
          console.log(e);
        }
    },
      async uploadImage(event) {
      const URL = "https://thesis-project-beta.herokuapp.com/api/v1/upload";
      const data = new FormData();
      data.append("file", event.target.files[0]);
      const config = {
        headers: {
         
          'auth-token':localStorage.getItem('token')
        },
      };

      const result  = await axios.post(URL, data, config);
      this.projects[0].imageUrl = result.data.images[0]
      this.createImage(event.target.files[0]);
    },
       createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      
    },
  }
</script>
<style scoped>
  .row {
  justify-content: center;
  }
  .chooseFile {
  margin-top: 2em;
  }
  .col-md-6.mb-4 {
  max-width: 40%;
  }
  .button-padding {
  padding-top: 2.1em;
  padding-bottom: 0px;
  }

  ::placeholder {
    opacity: 0.6;
  }

  input[title~=reference] {

  }
  @media screen and (max-width: 479px) {
    .col-md-6.mb-4 {
      max-width: 60%;
    }
  }

</style>