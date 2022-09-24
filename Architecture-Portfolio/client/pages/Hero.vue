<template>
  <div class="section hero-section wf-section">
    <div class="container-default w-container">
      <div class="hero-wrapper reveal-hero">
        <div
          data-w-id="709d9349-d07c-23cf-ffe0-25d8a3c4f186"
          style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;"
          class="split-content hero-left hero1"
          >
          <h3 class="title subtitle">Hello, I’m Gülçatay</h3>
          <h1 class="title home-hero">
            I am an architect,<br>a project manager<br>and a designer.
          </h1>
          <img
            src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112b0068db0b60858060db4_hero-underline-personal-x-template.svg"
            loading="eager"
            class="image hero-underline">
          <div>
            <a href="mailto:gulcatay.arch@gmail.com" class="button-primary w-button">Get in touch</a
              >
          </div>
        </div>
        <div data-w-id="62baa06f-5c49-4902-dcc5-46ded3bffd2d"
          style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
          rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
          transform-style: preserve-3d;
          opacity: 1;"
          class="image-wrapper hero-image hero2">
          <img
            src="~/assets/image/circle-hero.png"
            sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 472px, (max-width: 1439px) 47vw, 588px"
            alt="Product Designer - You X Webflow Template"
            class="image hero-image border-radius"
            />
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
  <style>
  /* .reveal-hero {
    position: relative;
    filter: blur(4px);
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
    transform-style: preserve-3d;
    opacity: 0;

    }
    .reveal-hero {
    filter: blur(0);
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
    transition: 0.8s ease;
    } */

  .reveal-hero {
    animation: revealHero ease 1s;
    animation-name: revealHero;
    -webkit-animation: revealHero ease 1s;
    -moz-animation: revealHero ease 1s;
    -o-animation: revealHero ease 1s;
    -ms-animation: revealHero ease 1s;
    
  }

  @keyframes revealHero {
    0% {
      opacity: 0;
      filter: blur(2px);
      transform: translate3d(-5%,0,0);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translate3d(0,0,0);
    }
  }

  .hero2 {
    animation-delay: 2000ms;
  }
  </style>