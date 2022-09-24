<template>
  <div style="background-color: #f0efeb !important" class="">
    <b-navbar
      class="container-default w-container"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand
        class="split-content header-right"
        style="margin-left: 0em"
        href="/">
        <img src="~/assets/image/Logo.png" class="header-logo" />
        <NuxtLink to="/"></NuxtLink>
      </b-navbar-brand>

      <b-navbar-toggle
        style="margin-top: 1em; margin-left: 1em; width: 65px; height: 65px"
        target="nav-collapse">
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="split-content header-center" id="nav">

          <b-nav-item class="nav-item-wrapper">
            <NuxtLink class="nav-link opacity" to="/">Home</NuxtLink>
          </b-nav-item>
          <b-nav-item class="nav-item-wrapper">
            <NuxtLink class="nav-link opacity" to="/AboutPage">About</NuxtLink>
          </b-nav-item>
          <b-nav-item class="nav-item-wrapper">
            <NuxtLink class="nav-link opacity" to="/Gallery">Gallery</NuxtLink>
          </b-nav-item>
          <b-nav-item class="nav-item-wrapper">
            <NuxtLink class="nav-link opacity" to="/MoreProjects">Projects</NuxtLink>
          </b-nav-item>

          <b-nav-item
            id="b-nav-item"
            class="nav-link opacity nav-mail"
            style=""
            href="mailto:gulcatay.arch@gmail.com">
            <img
              src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
              class="image email-header-icon"/>
              gulcatay.arch@gmail.com
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
.bg-info {
  background-color: #f0efeb !important;
}
.navbar-dark .navbar-nav .nav-link {
  color: #24211c;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #6B705C;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    align-items: center !important;
    justify-content: end !important;
    flex-basis: auto;
  }
}
@media screen and (max-width: 991px) {
  .container-default {
    display: flex !important;
    flex-direction: row !important;
  }
  .nav-mail {
  margin-left: 0 !important;
  margin-bottom: 20px;
  }
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
  background-color: #6b705c;
  width: 56px;
  border-radius: 50%;
  height: 50px;
}

.displayy {
  display: none;
}
.displayy1 {
  display: block;
}
.email-header-wrapper {
  display: none;
}
@media (min-width: 700px) {
  .email-header-wrapper {
    display: flex;
  }
}
@media (min-width: 1400px) {
  .email-header-wrapper {
    display: none;
  }
}
@media (min-width: 1000px) {
  .email-header-wrapper {
    display: none;
  }
}

.nav-mail {
  margin-left: 6.25rem;
}

</style>
<script>
import axios from 'axios'
import NuxtLogo from '~/components/NuxtLogo.vue'
export default {
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61129bb2ecedf803564c68ec'
    )
    document.head.appendChild(recaptchaScript)
    const deneme = document.createElement('script')
    deneme.setAttribute(
      'src',
      'https://assets.website-files.com/61129bb2ecedf803564c68ec/js/webflow.19742290c.js'
    )
    document.head.appendChild(deneme)
  },
  methods: {},
  created() {
    axios
      .get('https://thesis-project-beta.herokuapp.com/api/v1/project')
      .then((res) => {
        this.projects = res.data.projects
        console.log(this.projects)
      })
  },
  components: { NuxtLogo },
}
</script>
