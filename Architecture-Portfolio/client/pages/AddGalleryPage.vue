<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <label for>Gallery Picture</label>
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
        <input class="chooseFile" type="file" name="file" @change="onFileChange"></input>
      </div>
      <div class="col-md-4">
        <form @submit.prevent="submitRecipe">
          <div class="checkbox">
            <label for="interior"><input type="checkbox" id="interior" name="interior">Interior</label>
            <label for="exterior"><input type="checkbox" id="exterior" name="exterior">Exterior</label>
            <label for="furniture"><input type="checkbox" id="furniture" name="furniture">Furniture</label>
          </div>
          <div class="">
            <button type="submit" class="button-primary w-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
  export default {
    head() {
      return {
        title: "Add Recipe"
      };
    },
    data() {
      return {
        recipe: {
          name: "",
          picture: "",
          ingredients: "",
          difficulty:  "",
          prep_time: null,
          prep_guide:  "",
        },
        preview: ""
      };
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
      async submitRecipe() {
        const config = {
          headers: { "content-type": "multipart/form-data" }
        };
        let formData = new FormData();
        for (let data in this.recipe) {
          formData.append(data, this.recipe[data]);
        }
        try {
          let response = await this.$axios.$post("/recipes/", formData, config);
          this.$router.push("/recipes/");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
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
</style>