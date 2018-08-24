import Vue from 'vue';
import App from './App';
import vueTopprogress from 'vue-top-progress'
import VuePromiseBtn from 'vue-promise-btn'
import VueSwal from 'vue-swal';
import Index from './components/Index';
import GetQuote from './components/GetQuote';

import VueRouter from 'vue-router';


Vue.use(VueSwal);
Vue.use(VueRouter)
Vue.use(vueTopprogress)
Vue.use(VuePromiseBtn)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/get_quote',
            component: GetQuote
        },
    ]
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");


require('../src/assets/css/styles.css')
require('../src/assets/css/bootstrap.min.css')
require('../src/assets/font/fontawesome-free-5.1.0-web/css/all.css')
require('../src/assets/font/font/flaticon.css')
require('../src/assets/js/jquery-slim.min.js')
require('../src/assets/js/popper.min.js')
require('../src/assets/js/scripts.js')

