/*=========================================================================================
  File Name: moduleLead.js
  Description: Lead Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Leador: Pixinvent
  Leador URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleLeadState.js'
import mutations from './moduleLeadMutations.js'
import getters from './moduleLeadGetters.js'

export default {
    isRegistered: false,
	namespaced: true,
    state: state,
    mutations: mutations,
    getters: getters
}
