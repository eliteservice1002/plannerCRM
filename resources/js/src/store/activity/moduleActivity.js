/*=========================================================================================
  File Name: moduleActivity.js
  Description: Activity Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Activityor: Pixinvent
  Activityor URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleActivityState.js'
import mutations from './moduleActivityMutations.js'
import getters from './moduleActivityGetters.js'

export default {
    isRegistered: false,
	namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters
}
