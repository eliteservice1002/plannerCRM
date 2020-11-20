/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/powerbi',
                    name: 'pwerbi',
                    component: () => import('./views/pages/powerbi/PowerBI.vue')
                },
                {
                    path: '/deals',
                    name: 'deals',
                    component: () => import('./views/pages/deal/Deals.vue')
                },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/login',
                name: 'login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/register',
                name: 'register',
                component: () => import('@/views/pages/Register.vue')
              },
              {
                path: '/error-404',
                name: 'error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
    if(!store.state.auth.login_status && localStorage.uid) {
        store.commit('auth/SET_LOGIN',true)
        store.commit('UPDATE_USER_INFO',{uid: localStorage.uid, displayName: localStorage.displayName})
        store.commit('SET_REGISTER',localStorage.isRegistered ? false : true)
    }
    if(!store.state.auth.login_status && to.path != '/login' && to.path != '/register') {
        router.push({ path: '/login' })
    }
    return next()
});

export default router
