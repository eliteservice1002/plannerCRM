/*=========================================================================================
  File Name: moduleActivity.js
  Description: Activity Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Activityor: Pixinvent
  Activityor URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleActivityDealState.js'
import mutations from './moduleActivityDealMutations.js'
import getters from './moduleActivityDealGetters.js'

export default {
    isRegistered: false,
	namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters
}
