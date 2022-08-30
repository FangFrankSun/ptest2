<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 text-right mb-4">
        <div class="justify-content-between">
          <h3></h3>
          <NuxtLink to="/AddProjectPage"><a class="button-primary w-button">Add Project</a></NuxtLink>
        </div>
      </div>
      <div
        style="
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        justify-content: center;
        "
        >
        <div
          v-for="project in projects"
          :key="project.id"
          class="card recipe-card box-shadow width28"
          >
          <img :src="project.img" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <h5 class="card-text2">{{ project.role }}<br>{{ project.role2 }}</h5>
            <h5 class="card-text">{{ project.year }}</h5>
            <h5 class="card-text">{{ project.description }}</h5>
            <h5 class="card-text">{{ project.reference }}</h5>
            <div class="action-buttons">
              <div class="action-buttons">
                <a href="/EditPage" class="btn btn-sm button-color-view">Edit</a>
                <button class="btn btn-sm button-color-delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="container mt-5" style="border-top: 1px solid #d9dbe9;">
      <div class="row">
        <div class="col-12 text-right mb-4">
          <div class="justify-content-between">
            <NuxtLink to="/AddGalleryPage"><a class="button-primary w-button">Add Gallery</a></NuxtLink>
          </div>
        </div>
        <div style="
          width: 70%;
          display: flex;
          flex-wrap: wrap;
          ">
          <div
            v-for="photo in gallery"
            :key="photo.id"
            class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card recipe-card box-shadow">
              <img :src="photo.img" class="card-img-top"/>
              <div class="card-body">
                <!-- <h5 class="card-title">{{ photo.name }}</h5> -->
                <p class="card-text">{{ photo.category }}</p>
                <div class="action-buttons">
                  <button class="btn btn-sm button-color-delete">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  export default {
    // name: 'Test',
    data() {
      return {
        projects: [
          {
            name: 'Ağaoğlu Maslak 1453',
            role:'Project Manager - AB Section',
            role2:'Head of Construction Group 1',
            year: '10.2014 - 10.2018',
            description: '870 000m2, 3880 Residences, 1000 Offices, University, Shopping Mall, Hotel, 10 Cinema Halls, 3 Congress Halls, 32 Blocks between 11 and 51 variable floors',
            img: '/_nuxt/assets/image/Maslak-1453.jpg',
            reference: 'Reference: Abdullah Murad ACAR - General Coordinator'
          },
          {
            name: 'Ağaoğlu My Home Ayazağa',
            role:'Deputy Project Manager',
            role2:'Decoration Works Manager',
            year: '05.2013 - 10.2014',
            description: '260000m2, 800 Residences,  100 Offices, Markets,  3 Blocks with 41 floors',
            img: '/_nuxt/assets/image/MyHomeAyazağa.jpg',
            reference: 'Reference: Adem Yıldırım - Project Manager'
          },
          {
            name: 'Dünya Göz Hospital',
            role:'Project Manager',
            year: '02.2011 - 06.2011',
            description: '2500m2 Construciton Zone',
            img: '/_nuxt/assets/image/dunyagoz-pendik.jpg',
            reference: 'Reference: Enver Küçükalı (Serpent Architecture)'
          },
          {
            name: 'Vodafone Digital Operations Center',
            role:'Project Manager',
            year: '10.2009 - 02.2011',
            description: '19000m2 Construciton Zone',
            img: '/_nuxt/assets/image/Vodafone.png',
            reference: 'Reference: Enver Küçükalı (Serpent Architecture)'
          },
          {
            name: 'WOW Congress Center Istanbul',
            role:'Site Chief',
            year: '06.2011 - 04.2012',
            description: '15000m2 Construciton Zone',
            img: '/_nuxt/assets/image/wow.webp',
            reference: 'Reference: Muzaffer Küpe'
          },
         
        ],

        gallery: [
            {
              category: 'Exterior Design',
              img: '/_nuxt/assets/image/Gallery/60.jpg',
              id:1
            },
            {
              category: 'Exterior Design',
              img: '/_nuxt/assets/image/Gallery/59.jpg',
              id:2
            },
            {
              category: 'Interior Design',
              img: '/_nuxt/assets/image/Gallery/1.jpg',
              id:3
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/2.jpg',
              id:4
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/Picture4.jpg',
              id:5
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/3.jpg',
              id:6
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/6.jpg',
              id:7
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/5.jpg',
              id:8
            },
            {
              category: 'Interior Design',
              img: '/_nuxt/assets/image/Gallery/7.jpg',
              id:9
            },
            {
              category: 'Furniture',
              img: '/_nuxt/assets/image/Gallery/8.jpg',
              id:10
            },
          ],
      }
    },
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
  width: 50%;
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