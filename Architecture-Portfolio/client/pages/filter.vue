<template>
  <div id="app">
    <h2>My Recipes:</h2>
    
    <!-- Bar containing all sort inputs -->
  <div id="sort-bar">
    <select name="sortBy" id="select" v-model="sortBy">
      <option value="alphabetically">Alphabetically</option>
      <option value="cookingTime">Cooking Time</option>
    </select>
    <button v-on:click="ascending = !ascending" class="sort-button">
      <i v-if="ascending" class="fa fa-sort-up"></i>
      <i v-else class="fa fa-sort-down"></i>
    </button>
    <input type="number" v-model="maxCookingTime" id="cooking-time-input"></input>
    <input type="text" v-model="searchValue" placeholder="Search Recipe" id="search-input"></input>
    <i class="fa fa-search"></i>
  </div>
    <h2 class="title">Latest Projects</h2>
  <!-- Where the array of recipes get rendered as cards -->
  <div id="recipe-container">
    <div class="card space" v-for="recipe in filteredRecipes" :key="recipe.title">
      <img :src="recipe.img" class="recipe-image"></img>
      <div class="content">
        <h1 class="title">
          {{ recipe.title }}
        </h1>
         <p>
          {{ recipe.description }}
        </p>
       


      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ascending: true,
      sortBy: 'alphabetically',
      searchValue: '',
      maxCookingTime: null,
    recipes: [
    {title: 'Pizza', description: 'Yummy pizza for those lazy days', ingredients: ['Dough', 'Tomato Paste', 'Cheese', 'Bell Pepper', 'Onion'], cookingTime: 60, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {title: 'Burritos', description: 'Healthy yet very tasty burritos', ingredients: ['Burritos', 'Kidney beans', 'Onion', 'Tomato', 'Bell Pepper'], cookingTime: 30, img: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {title: 'Tomato Soup', description: 'A tasty tomato soup for the cold winter', ingredients: ['Tomatoes', 'Onion', 'Oregano'], cookingTime: 45, img: 'https://images.unsplash.com/photo-1553881781-4c55163dc5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {title: 'Ice Cream', description: 'Just because... Ice Cream', ingredients: ['Whole milk', 'Cream', 'Eggs', 'Sugar'], cookingTime: 120, img: 'https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1321&q=80'},
    ]
    };
  },
  computed: {
  filteredRecipes() {
    let tempRecipes = this.recipes
    
    // Process search input
    if (this.searchValue != '' && this.searchValue) {
        tempRecipes = tempRecipes.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }
      
      // Filter out by cooking time
      if (this.maxCookingTime)
      tempRecipes = tempRecipes.filter((item) => {
        return (item.cookingTime <= this.maxCookingTime)
      })
           
    // Sort by alphabetical order
        tempRecipes = tempRecipes.sort((a, b) => {
            if (this.sortBy == 'alphabetically') {
                let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()
          
              if (fa < fb) {
                return -1
              }
              if (fa > fb) {
                return 1 
              }
              return 0
              
              // Sort by cooking time
            } else if (this.sortBy == 'cookingTime') {
              return a.cookingTime - b.cookingTime
        }
        })
        
        // Show sorted array in descending or ascending order
        if (!this.ascending) {
        	tempRecipes.reverse()
        }
        
        return tempRecipes
  }
}
};
</script>

<style scoped>
title {
    font-size: 15px !important;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.portfolio {
  display: flex;
  flex-wrap: wrap;
  min-width: 320px;
}

.portfolio h2 {
  flex-basis: 100%;
  text-align: center;
  margin: 50px auto 30px;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  color: #111;
}
.card {
  width: 20%;
  overflow: hidden;
  position: relative;
}
.card .content {
  z-index: 2;
  width: 100%;
  position: absolute;
  bottom: -100px;
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100px;
  background: #111;
}
.card .image {
  z-index: 1;
  height: 100%;
}
.card img {
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  transform: scale(1.2);
}

.card:hover .content {
  bottom: 0px;
  color: #fff;
}

.card:hover .image img {
  transform: scale(1);
}

.card .content span:first-child {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}

.card .content span:last-child {
  font-size: 14px;
  color: #18cfab;
  text-align: center;
  font-weight: 700;
}


@media screen and (max-width: 768px) {
  .card {
  width: 50%;
  }
  .card .content {
    bottom: 0;
  }
}

@media screen and (max-width: 480px) {
  .card {
  width: 100%;
  }
}

.card{
    border-radius: 0px!important;
    
}

.background-color-gallery {
  background: linear-gradient(180deg, #6B705C 0%,  #CB997E 20%,
                                      #A09881 40%, #FFE8D6 60%,
                                      #807362 80%, #A4594C 99%);
}

 /* filter */


</style>