/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    SET_LEADS(state, payload) {
        state.leads = payload
    },
    SET_FILTER_ORIGIN(state, payload) {
        state.filter_origin = payload
    },
    SET_FILTER_DATE(state, payload) {
        state.filter_date = payload
    },
}
