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

    <div class="vx-navbar-wrapper" :class="classObj">

      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal" :class="textColor">

        <!-- SM - OPEN SIDEBAR BUTTON -->

        <div class="vx-row no-gutter items-center" style="width:100%;">
            <div class="vx-col w-1/4">
                <feather-icon class="sm:inline-flex xl:hidden cursor-pointer p-2" icon="MenuIcon" @click.stop="showSidebar" />
            </div>
            <div class="vx-col w-1/2">
                <vs-input
                    v-if="windowWidth >= 800"
                    icon="search"
                    icon-after="true"
                    placeholder="Pesquise leads, negócios e empresas"
                    style="min-width:300px;"
                    class="mx-auto"/>
            </div>

            <div class="vx-col w-1/4" style="float: right !important;">
                <profile-drop-down />
            </div>
        </div>

      </vs-navbar>
    </div>
  </div>
</template>


<script>
import Bookmarks            from "./components/Bookmarks.vue"
import SearchBar            from "./components/SearchBar.vue"
import NotificationDropDown from "./components/NotificationDropDown.vue"
import ProfileDropDown      from "./components/ProfileDropDown.vue"

export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    Bookmarks,
    SearchBar,
    NotificationDropDown,
    ProfileDropDown,
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff" ? "#10163a" : this.navbarColor
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth
    },
    textColor() {
      return {'text-white': (this.navbarColor != '#10163a' && this.$store.state.theme === 'dark') || (this.navbarColor != '#fff' && this.$store.state.theme !== 'dark')}
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default")      return "navbar-default"
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced"
      else if (this.verticalNavMenuWidth)              return "navbar-full"
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
    }
  }
}
</script>

