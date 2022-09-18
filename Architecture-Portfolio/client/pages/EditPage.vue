<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label for>Project Picture</label>
        <img
          v-if="project.imageUrl"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="project.imageUrl"
          alt
          >
      
               <input type="file" name="file" accept="image/*" class="chooseFile" @change="uploadImage"></input>

      </div>
      <div class="col-md-4" style="margin-top: 1.5em;">
        <div>
          <div class="form-group">
            <input type="text" v-model="project.name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" v-model="project.role" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" v-model="project.year" class="form-control">
          </div>
          <div class="form-group">
            <textarea type="text" rows="7" v-model="project.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <input type="text" v-model="project.reference" class="form-control">
          </div>
          <div style="padding-top:40px;">
            <button type="submit" @click="updateProject" class="button-primary w-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        project: 
          {
            name: '',
            role:'',
            year: '',
            description: '',
            imageUrl: '',
            reference: 'Reference: '
          },
        
        preview: ''
      }
    },
   created(){
   try {
     const url = `https://thesis-project-beta.herokuapp.com/api/v1/project/${this.$route.params.projectId}`
    axios.get(url).then((res) => {
      console.log(res.data);
      this.project = res.data.project
    })
    console.log("selam",this.$route.params);
   } catch (error) {
    console.log(error,"sadeasdas");
   }
   },
    methods: {
      async updateProject(){
         const url = `https://thesis-project-beta.herokuapp.com/api/v1/project/${this.$route.params.projectId}`
         axios.patch(url,this.project,{
          headers:{
            'auth-token':localStorage.getItem('token')
          }
         }).then((res) => {
         if(res.data.success){
          this.$router.push('/dashboard')
         }
         })
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
        this.project.imageUrl = result.data.images[0]
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
    }
  };
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
</style>