<template>
  <div class="section pd-top-bottom-200px wf-section">
    <div class="container-default w-container">
      <div
        data-w-id="958960c1-23c4-b448-27ed-e4d2345aee47"
        class="top-content portfolio-top-content reveal"
        >
        <div class="split-content portfolio-left">
          <h2>
            <NuxtLink class="title portfolio nav-link opacity" to="/MoreProjects">Take a look at my projects</NuxtLink>
          </h2>
          <img
            src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
            alt=""
            class="image portfolio-underline"
            />
        </div>
      </div>
      <div
     
        data-w-id="69f75c50-8619-7ebb-912d-114e45cb4c1a"
        class="home-portfolio-slider-main-wrapper reveal"
        >
        <div
          data-delay="1000"
          data-animation="slide"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
          role="region"
          aria-label="carousel"
          >
          <div
            class="home-portfolio-slider-mask w-slider-mask"
            id="w-slider-mask-0"
            >
            <div
              v-for="(project,index) in projects" :key="index"
              class="home-portfolio-slide w-slide"
              aria-label="1 of 12"
              role="group"
              style="transform: translateX(0px); opacity: 1"
              >
              <div class="w-dyn-list">
               
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item">
                    <a
                      class="card home-portfolio-card w-inline-block">
                      <div :class="'image-wrapper portfolio-card'+index">
                        <NuxtLink to="/MoreProjects">
                          <img
                            :src="project.imageUrl"
                            alt="Todo List Mobile App Redesign"
                            sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
                            class="image portfolio-card"
                            />
                        </NuxtLink>
                      </div>
                      <div
                        class="split-content portfolio-card-bottom-content"
                        >
                        <h3 class="title home-portfolio-card">
                          <NuxtLink to="/MoreProjects">{{project.name}}</NuxtLink>
                        </h3>
                        <p class="paragraph home-portfolio-card">
                        </p>
                        <div class="hc-flex read-case-study">
                          <div>
                            <NuxtLink to="/MoreProjects">Take a look</NuxtLink>
                          </div>
                          <img
                            src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61155e76b0500d608ffb874e_arrow-personal-x-template.svg"
                            loading="eager"
                            alt="Arrow Icon - You X Webflow Template"
                            class="image projects-link-arrow"
                            />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
         
            <div
              class="home-portfolio-slide w-slide more-button2"
              aria-label="4 of 12"
              role="group"
              aria-hidden="true"
              style="transform: translateX(0px); opacity: 1"
              >
              <div>
                <a>
                  <NuxtLink class="button-primary w-button" to="/MoreProjects">More Projects</NuxtLink>
                </a>
              </div>
            </div>
            <div
              aria-live="off"
              aria-atomic="true"
              class="w-slider-aria-label"
              data-wf-ignore=""
              ></div>
          </div>
          <div
            class="slider-arrow portfolio-left w-slider-arrow-left"
            role="button"
            tabindex="0"
            aria-controls="w-slider-mask-0"
            aria-label="previous slide"
            >
            <div class="w-icon-slider-left"></div>
          </div>
          <div
            class="slider-arrow portfolio-right w-slider-arrow-right"
            role="button"
            tabindex="0"
            aria-controls="w-slider-mask-0"
            aria-label="next slide"
            >
            <div class="w-icon-slider-right"></div>
          </div>
          <div class="slide-nav w-slider-nav w-round">
            <div
              class="w-slider-dot w-active"
              data-wf-ignore=""
              aria-label="Show slide 1 of 12"
              aria-pressed="true"
              role="button"
              tabindex="0"
              style="margin-left: 3px; margin-right: 3px"
              ></div>
            <div
              class="w-slider-dot"
              data-wf-ignore=""
              aria-label="Show slide 2 of 12"
              aria-pressed="false"
              role="button"
              tabindex="-1"
              style="margin-left: 3px; margin-right: 3px"
              ></div>
            <div
              class="w-slider-dot"
              data-wf-ignore=""
              aria-label="Show slide 3 of 12"
              aria-pressed="false"
              role="button"
              tabindex="-1"
              style="margin-left: 3px; margin-right: 3px"
              ></div>
            <div
              class="w-slider-dot"
              data-wf-ignore=""
              aria-label="Show slide 4 of 12"
              aria-pressed="false"
              role="button"
              tabindex="-1"
              style="margin-left: 3px; margin-right: 3px"
              ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
  import NuxtLogo from '~/components/NuxtLogo.vue'
    export default {
      data(){
        return {
          projects:[]
        }
      },
      mounted() {
          const recaptchaScript = document.createElement("script");
          recaptchaScript.setAttribute("src", "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61129bb2ecedf803564c68ec");
          document.head.appendChild(recaptchaScript);
          const deneme = document.createElement("script");
          deneme.setAttribute("src", "https://assets.website-files.com/61129bb2ecedf803564c68ec/js/webflow.19742290c.js");
          document.head.appendChild(deneme);
      },
      methods: {
        
      },
       created (){
      axios.get('https://thesis-project-beta.herokuapp.com/api/v1/project').then((res) =>{
        this.projects = res.data.projects 
        console.log(this.projects);
      })
     
    },
      components: { NuxtLogo }
  }
</script>