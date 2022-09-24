<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label>Gallery Picture</label>
        <img
          v-if="preview"
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          :src="preview"
          alt
          >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          src="~/assets/image/placeholder1.png"
          >
        <input type="file" name="file" accept="image/*" class="chooseFile" @change="uploadImage"></input>
      </div>
      <div class="col-md-4">
        <label>Select Category</label>
          <div>
                <select v-model="galleryImage.type" placeholder="Select Image Type">
                <option value="interior" selected>Interior</option>
                <option value="furniture">Furniture</option>
                <option value="exterior">Exterior</option>
           </select>
          </div>
          <div>
            <button type="submit" @click="createGalleryImage" class="button-primary w-button">Submit</button>
          </div>
      
      </div>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        items:['interior','furniture','exterior'],
        type:'',
        galleryImage: {
          type:'',
          imageUrl:''
        },
        preview: '',
      }
    },
    methods: {
      async createGalleryImage() {
        const config = {
          headers: { 
                     "auth-token": localStorage.getItem('token')
                   },
        };
        try {
          const response = await axios.post('https://thesis-project-beta.herokuapp.com/api/v1/gallery', this.galleryImage, config)
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
      this.galleryImage.imageUrl = result.data.images[0]
      this.createImage(event.target.files[0]);
    },
       createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  }
  </script>
<style scoped>
  .category {
  padding: 24px 20px;
  border-style: none;
  border-radius: 80px;
  background-color: var(--darkGreen);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 4em;
  }
  .button-primary {
  padding: 24px 50px;
  border-style: none;
  border-radius: 80px;
  background-color: var(--darkGreen);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 2em !important;
  }
  label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  }
  .chooseFile {
  margin-top: 2em;
  }
  .button-primary {
  margin-top: 8.5em !important;
  }
  .row {
  justify-content: center;
  }
  .col-md-6.mb-4 {
  max-width: 40%;
  }
  form{
  padding: 30px;
  }
  input[type="checkbox"]{
  text-align: left;
  cursor:pointer;
  appearance: none;
  height: 25px;
  width: 25px;
  min-width: 25px;
  background: #ffffff;
  transition: all 250ms linear;
  box-shadow: inset 0 0 0 4px #ffffff;
  border: 1px solid var(--darkGreen);
  border-radius: none;
  margin-right: 1em;
  margin-top: 1em;
  }
  input[type="checkbox"]:checked{
  border-color: var(--darkGreen);
  background-color: var(--darkGreen);
  box-shadow: inset 0 0 0 5px #ffffff;
  }
  @media screen and (max-width: 479px) {
    .col-md-6.mb-4 {
      max-width: 60%;
    }
  }
</style>