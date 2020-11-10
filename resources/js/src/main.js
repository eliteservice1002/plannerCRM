/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// axios
import axios from "./axios.js"
Vue.prototype.$http = axios


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

const DatePlugin = {
    install(Vue, options) {
        Vue.prototype.formatDate = (str) => {
            var d = new Date(str),
            month = '' + d.toLocaleString('default', { month: 'short' }),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (day.length < 2)
                day = '0' + day;

            return day + ' de ' + month + '/' + year;
        },
        Vue.prototype.formatDateOrigin = (str) => {
            var d = new Date(str),
            month = '' + (d.getMonth()+1),
            day = '' + d.getDate(),
            year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [day, month, year].join('/');
        },
        Vue.prototype.formatDateTime = (str) => {
            var d = new Date(str),
            month = '' + d.toLocaleString('default', { month: 'short' }),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hour = d.getHours(),
            min = d.getMinutes();

            if (day.length < 2)
                day = '0' + day;
            if (hour.length < 2)
                hour = '0' + hour;
            if (min.length < 2)
                min = '0' + min;

            return day + ' de ' + month + '/' + year + ' ' + hour + ':' + min + 'h';
        },
        Vue.prototype.formatDateSave = (str) => {
            var res = str.split('/')
            return [res[2], res[1], res[0]].join('-');
        }
    },
}
Vue.use(DatePlugin)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
