<template>
  <div class="container-default w-container">
    <div class="top-content-nav reveal projects-phone">
      <div class="split-content portfolio-left margin">
        <h2>
          <NuxtLink
            class="title portfolio nav-link opacity"
            to="/MoreProjects"
            >Take a look at my projects</NuxtLink
          >
        </h2>
        <img
          src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
          alt=""
          class="image portfolio-underline"
        />
      </div>
      <div class="buttons">
        <button class="slider-arrow" @click="scrollRight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </button>
        <button class="slider-arrow" @click="scrollLeft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </button>
      </div>
    </div>
    <div id="app" class="menu-wrapper reveal">
      <ul class="menu" ref="menu">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="home-portfolio-slide w-slide size"
          aria-label="1 of 12"
          role="group"
        >
          <div class="w-dyn-list" style="padding-top: 3em; padding-bottom: 3em">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <a
                  class="card home-portfolio-card w-inline-block"
                  style="border-radius: 1em; padding: 1em"
                >
                  <div :class="'image-wrapper portfolio-card' + index">
                    <NuxtLink to="/MoreProjects">
                      <img
                        :src="project.imageUrl"
                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
                        class="image portfolio-card"
                        style="
                          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                            rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                            skew(0deg, 0deg);
                          transform-style: preserve-3d;
                        "
                      />
                    </NuxtLink>
                  </div>
                  <div class="split-content portfolio-card-bottom-content">
                    <h3 class="title home-portfolio-card">
                      <NuxtLink to="/MoreProjects">{{ project.name }}</NuxtLink>
                    </h3>
                    <p class="paragraph home-portfolio-card"></p>
                    <div class="hc-flex read-case-study">
                      <div>
                        <NuxtLink to="/MoreProjects">Take a look</NuxtLink>
                      </div>
                      <img
                        src="https://assets.website-files.com/61129bb2ecedf803564c68ec/61155e76b0500d608ffb874e_arrow-personal-x-template.svg"
                        loading="eager"
                        class="image projects-link-arrow"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      scrollAmount: 0,
      projects: [],
    }
  },
  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js'
    )
    document.head.appendChild(recaptchaScript)
    const deneme = document.createElement('script')
    deneme.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js'
    )
    document.head.appendChild(deneme)
  },
  methods: {
    scrollLeft: function () {
      const menu = this.$refs.menu
      menu.scrollTo({
        left: (this.scrollAmount += 415),
        behavior: 'smooth',
      })
    },

    scrollRight: function () {
      const menu = this.$refs.menu
      menu.scrollTo({
        left: (this.scrollAmount -= 415),
        behavior: 'smooth',
      })
    },
  },
  created() {
    axios
      .get('https://thesis-project-beta.herokuapp.com/api/v1/project')
      .then((res) => {
        this.projects = res.data.projects
        console.log(this.projects)
      })
  },
}
</script>
<style scoped>
.size {
  transform: translateX(0px);
  opacity: 1;
  width: 49%;
}
@media screen and (max-width: 479px) {
  .size {
    transform: translateX(0px);
    opacity: 1;
    width: 100%;
  }
  .top-content-nav {
    flex-wrap: wrap;
    align-items: center;
  }
  .projects-phone {
    display: flex;
    justify-content: end !important;
  }
  .margin {
    margin-bottom: 1.5em !important;
  }
  .buttons {
    margin-right: 1.5em;
  }
}
.projects-phone {
  display: flex;
  justify-content: space-between;
}

.slider-arrow {
  z-index: 10 !important;
  width: 80px !important;
  max-height: 80px !important;
  min-height: 80px !important;
  min-width: 80px !important;
  border-radius: 50% !important;
  background-color: #eff0f6 !important;
  transition: transform 300ms ease, background-color 300ms ease,
    color 300ms ease !important;
  color: #fff !important;
  font-size: 27px !important;
  line-height: 1em !important;
  transform-style: preserve-3d !important;
  background-color: #6b705c !important;
  background-color: var(--darkGreen) !important;
}
.menu-wrapper {
  position: relative;
  max-width: 100%;
  height: 100%;
  margin: 1em auto;
  overflow-x: hidden;
  overflow-y: hidden;
}

.menu {
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
}

.item {
  display: inline-block;
  width: 100%;
  height: 100%;
  outline: 1px dotted gray;
  padding: 1em;
  box-sizing: border-box;
}

.paddle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3em;
}
.split-content.portfolio-left {
  position: relative;
  max-width: 100% !important;
}
.paddles {
  display: flex;
}
.left-paddle {
  left: 0em;
}
.right-paddle {
  right: 28px;
}
.hidden {
  display: none;
}

.print {
  margin: auto;
  max-width: 100%;
}

span {
  display: inline-block;
  width: 100%;
}
.title.portfolio {
  margin-bottom: 0px;
  margin-left: 0px !important;
}
.top-content-nav {
  flex-wrap: wrap;
  align-items: center;
}
</style>
