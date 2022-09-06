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
          alt
          >
        <img
          v-else
          class="img-fluid"
          style="width: 400px; border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
          src="~/assets/image/placeholder1.png"
          >
        <input type="file" name="file" class="chooseFile" @change="onFileChange"></input>
      </div>
      <div class="col-md-4" style="margin-top: 1.5em;">
        <form @submit.prevent="submitProject">
          <div class="form-group">
            <input type="text" v-model="projects.name" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.role" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.year" class="form-control">
          </div>
          <div class="form-group">
            <textarea type="text" rows="7" v-model="projects.description" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <input type="text" v-model="projects.reference" class="form-control">
          </div>
          <div style="padding-top:40px;">
            <button type="submit" class="button-primary w-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        projects: [ 
          {
            name: '',
            role:'',
            year: '',
            description: '',
            img: '',
            reference: 'Reference: '
          }
        ],
        preview: ''
      }
    },
    async asyncData({ $axios, params }) {
    try {
      let project = await $axios.$get(`/dashboard/${params.id}`);
      return { project };
    } catch (e) {
      return { project: [] };
    }
  },
    methods: {
      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
          return;
        }
        this.recipe.picture = files[0];
        this.createImage(files[0]);
      },
      createImage(file) {
        // let image = new Image();
        let reader = new FileReader();
        let vm = this;
        reader.onload = e => {
          vm.preview = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      async submitProject() {
        let editedProject = this.project
        if (editedProject.picture.name.indexOf("http://") != -1){
        delete editedProject["picture"]
        }
        const config = {
        headers: { "content-type": "multipart/form-data" }
        };
        let formData = new FormData();
        for (let data in editedProject) {
        formData.append(data, editedProject[data]);
        }
        try {
        let response = await this.$axios.$patch(`/dashboard/${editedProject.id}/`, formData, config);
        this.$router.push("/dashboard/");
        } catch (e) {
        console.log(e);
        }
      }
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