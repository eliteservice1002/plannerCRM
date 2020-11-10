<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div class="relative">
  <div class="vx-navbar-wrapper navbar-full p-0">
    <vs-navbar class="navbar-custom navbar-skelton" :class="navbarClasses"  :style="navbarStyle" :color="navbarColor">
        <div class="vx-row no-gutter items-center" style="width:100%;">
            <div class="vx-col sm:w-1/4 md:w-1/4 lg:w-1/4">
                <router-link tag="div" to="/" class="vx-logo cursor-pointer mr-auto">
                    <img src="@assets/images/pages/logo-white.png" alt="logo" style="height:1.5rem;">
                </router-link>
            </div>
            <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-1/2">
                <vs-input
                    icon="search"
                    icon-after="true"
                    placeholder="Pesquise leads, negócios e empresas"
                    style="min-width:300px;"
                    class="mx-auto"/>
            </div>
            <div class="vx-col sm:w-1/4 md:w-1/4 lg:w-1/4" style="float: right !important;">
                <profile-drop-down />
            </div>
        </div>
    </vs-navbar>
  </div>
</div>
</template>

<script>
import ProfileDropDown from "./components/ProfileDropDown.vue"

export default {
  name: "the-navbar-horizontal",
  props: {
    logo: { type: String                                                                                                          },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    ProfileDropDown,
  },
  computed: {
    navbarColor() {
      let color = "linear-gradient(to right, #f0be46 , #f8b003)"
      if (this.navbarType === "sticky") color = "linear-gradient(to right, #f0be46 , #f8b003)"
      else if (this.navbarType === 'static') {
        if (this.scrollY < 50) {
          color = "linear-gradient(to right, #f0be46 , #f8b003)"
        }
      }

      this.isThemedark === "dark" ? color === "linear-gradient(to right, #f0be46 , #f8b003)" ? color = "#10163a" : color = "#262c49" : null

      return color
    },
    isThemedark()          { return this.$store.state.theme                                                                       },
    navbarStyle()          { return this.navbarType === "static" ? {transition: "all .25s ease-in-out"} : {}                      },
    navbarClasses()        { return this.scrollY > 5 && this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none" },
    scrollY()              { return this.$store.state.scrollY                                                                     },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth                                                        },
    windowWidth()          { return this.$store.state.windowWidth                                                                 },
  }
}

</script>

<style lang="scss">
    .icon-after {
        border: none !important;
        top: 12px;
    }
</style>

