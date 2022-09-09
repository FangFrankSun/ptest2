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
        <input type="file" name="file" class="chooseFile" @change="onFileChange"></input>
      </div>
      <div class="col-md-4" style="margin-top: 2.3em;" v-for="project in projects" :key="project.id">
        <form id="form" @submit.prevent="submitPage">
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
            <input type="text" name="reference" id="reference" v-model="project.reference" class="form-control">
          </div>
          <div class="button-padding">
            <button type="submit" class="button-primary w-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  import axios from 'axios';
  // const form = document.getElementById('form');

  // form.addEventListener('submit', async function(e) {
  //   e.preventDefault();

  //   const formData = new FormData(form);
  //   console.log([...formData]);

  //   try {
  //     const res = await axios.post('https://thesis-project-beta.herokuapp.com/api/v1/project', formData)
  //     console.log(res);
  //   } catch(e) {
  //     console.log(error);
  //   }
  // })
  
  export default {
    data () {
      return {
        projects: [
          {
            name: '',
            role:'',
            year: '',
            description: '',
            //img: '',
            reference: 'Reference: ',
            imageUrl: ''
          }
        ],
        preview: ''
      }
    },
    
    methods: {
      async submitPage() {
        //e.preventDefault();
        const config = {
          headers: { "content-type": "multipart/form-data",
                     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDk2Njc0ZTg1YWFhOTc0MWJiNzQ1YiIsImlhdCI6MTY2MDExODQ2NCwiZXhwIjoxNjYwNzIzMjY0fQ.bcralUFpNQnlWD3UmMzNnwstm_yml5ex-lpskQ5oCsE"
                   },
        };
        const formData = new FormData(form);
        console.log([...formData]);
        try {
          //let response = await this.axios.post("/dashboard/", formData, config)
          const response = await axios.post('https://thesis-project-beta.herokuapp.com/api/v1/project', formData, config)
          
          // const jsonResponse = await response.json()
          // this.$router.push("/dashboard/");
          console.log(response);
        } catch (e) {
          console.log(e);
        }
    },
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.projects.imageUrl = files[0];
        this.createImage(files[0]);
      },
      createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      // Get Request
      // async submitProject() {
        
      // },
      // refresh() {
      //   setTimeout(function(){
      //   window.location.reload();
      //   }, 5000);
      //  },
      
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
</style>