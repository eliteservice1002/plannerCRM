/*=========================================================================================
  File Name: moduleDeal.js
  Description: Deal Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Dealor: Pixinvent
  Dealor URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleDealState.js'
import mutations from './moduleDealMutations.js'
import getters from './moduleDealGetters.js'

export default {
    isRegistered: false,
	namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters
}
