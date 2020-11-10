/*=========================================================================================
  File Name: moduleAuthGetters.js
  Description: Auth Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    filteredDeals: state => state.deals.filter((deal) => {
        let dateTimeParts= deal.deadline.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(...dateTimeParts)
        if(!state.filter_stage.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_stage.includes(deal.stage))
        if(!state.filter_stage.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_stage.includes(deal.stage))
    }),

    firstDeals: state => state.deals.filter((deal) => {
        if(deal.stage != 1)
            return false
        let dateTimeParts= deal.deadline.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(...dateTimeParts)
        if(!state.filter_stage.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_stage.includes(deal.stage))
        if(!state.filter_stage.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_stage.includes(deal.stage))
    }),
    secondDeals: state => state.deals.filter((deal) => {
        if(deal.stage != 2)
            return false
        let dateTimeParts= deal.deadline.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(...dateTimeParts)
        if(!state.filter_stage.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_stage.includes(deal.stage))
        if(!state.filter_stage.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_stage.includes(deal.stage))
    }),
    thirdDeals: state => state.deals.filter((deal) => {
        if(deal.stage != 3)
            return false
        let dateTimeParts= deal.deadline.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(...dateTimeParts)
        if(!state.filter_stage.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_stage.includes(deal.stage))
        if(!state.filter_stage.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_stage.includes(deal.stage))
    }),
    fourthDeals: state => state.deals.filter((deal) => {
        if(deal.stage != 4)
            return false
        let dateTimeParts= deal.deadline.split(/[- :]/)
        dateTimeParts[1]--
        const createdAt = new Date(...dateTimeParts)
        if(!state.filter_stage.length && (!state.filter_date.length || (state.filter_date[0] == null)))
            return true
        if(!state.filter_date.length || (state.filter_date[0] == null))
            return (state.filter_stage.includes(deal.stage))
        if(!state.filter_stage.length)
            return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt)
        return (state.filter_date[0] <= createdAt && state.filter_date[1] >= createdAt && state.filter_stage.includes(deal.stage))
    }),
}
