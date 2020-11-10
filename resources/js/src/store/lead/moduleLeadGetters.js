/*=========================================================================================
  File Name: moduleAuthGetters.js
  Description: Auth Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    filteredLeads: state => state.leads.filter((lead) => {
        let dateTimeParts= lead.created_at.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(dateTimeParts[0],dateTimeParts[1],dateTimeParts[2])
        if(!state.filter_origin.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_origin.includes(lead.origin))
        if(!state.filter_origin.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_origin.includes(lead.origin))
    }),
}
