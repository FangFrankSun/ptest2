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
        <form @submit.prevent="">
          <div class="form-group">
            <label for>Project Name</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for>Description</label>
            <textarea type="text" rows="8" class="form-control"></textarea>
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
  export default {
    data () {
      return {
        
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