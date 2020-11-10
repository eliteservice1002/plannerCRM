/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    SET_DEALS(state, payload) {
        state.deals = payload
    },
    SET_FILTER_STAGE(state, payload) {
        state.filter_stage = payload
    },
    SET_FILTER_DATE(state, payload) {
        state.filter_date = payload
    },
}
